#!/usr/bin/env python3
"""Convert Markdown drafts to HTML fragments for the ENT clinic SPA.

Usage:
    python md_to_html.py drafts/allergic-rhinitis.md        # single file
    python md_to_html.py drafts/                            # all drafts
    python md_to_html.py --preview drafts/allergic-rhinitis.md  # stdout
    python md_to_html.py --dry-run drafts/                  # list outputs
"""

import sys
import re
import re as _re_contentjs
import argparse
from pathlib import Path

import yaml
import markdown
from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor


QR_CODE_HTML = """\n<div class="qrcode-section">
  <h4>📱 隨時查閱本頁內容</h4>
  <p>掃描下方 QR Code，即可在手機上隨時查看本頁衛教資訊</p>
  <div class="qrcode-placeholder">
    <span>QR Code<br>預留位置</span>
  </div>
  <p class="qrcode-hint">💡 小提示：你也可以將此頁加入書籤，方便日後查閱</p>
</div>"""


# Obsidian callout type → (CSS class suffix, icon, default title)
CALLOUT_MAP = {
    'recommend': ('recommend', '✓', '建議'),
    'caution':   ('caution',   '⚠', '注意'),
    'danger':    ('danger',    '✕', '警告'),
    'info':      ('info',      'ℹ', '小知識'),
}


class ObsidianCalloutPreprocessor(Preprocessor):
    """Convert > [!type] title blocks to callout HTML."""

    CALLOUT_RE = re.compile(r'^>\s*\[!(\w+)\]\s*(.*)$')
    CONTENT_RE = re.compile(r'^>\s?(.*)$')

    def run(self, lines):
        new_lines = []
        i = 0
        while i < len(lines):
            m = self.CALLOUT_RE.match(lines[i])
            if m:
                ctype = m.group(1).lower()
                custom_title = m.group(2).strip() if m.group(2) else None

                suffix, icon, default_title = CALLOUT_MAP.get(
                    ctype, ('info', 'ℹ', ctype)
                )
                title = custom_title or default_title

                # Collect content lines (lines starting with >)
                content_lines = []
                i += 1
                while i < len(lines):
                    cm = self.CONTENT_RE.match(lines[i])
                    if cm:
                        content_lines.append(cm.group(1))
                        i += 1
                    else:
                        break

                content = '\n'.join(content_lines)
                html = (
                    f'\n<div class="callout callout-{suffix}">'
                    f'<div class="callout-title">{icon} {title}</div>'
                    f'<div class="callout-body">\n\n{content}\n\n</div></div>\n'
                )
                new_lines.append(html)
            else:
                new_lines.append(lines[i])
                i += 1
        return new_lines


class MermaidPreprocessor(Preprocessor):
    """Convert ```mermaid blocks to <div class="mermaid">."""

    def run(self, lines):
        new_lines = []
        i = 0
        while i < len(lines):
            if lines[i].strip() == '```mermaid':
                content_lines = []
                i += 1
                while i < len(lines) and lines[i].strip() != '```':
                    content_lines.append(lines[i])
                    i += 1
                if i < len(lines):
                    i += 1  # skip closing ```
                content = '\n'.join(content_lines)
                new_lines.append(
                    f'\n<div class="mermaid">\n{content}\n</div>\n'
                )
            else:
                new_lines.append(lines[i])
                i += 1
        return new_lines


class ImagePlaceholderPreprocessor(Preprocessor):
    """Convert <!-- IMAGE_PLACEHOLDER: desc --> to .image-placeholder div."""

    PLACEHOLDER_RE = re.compile(r'<!--\s*IMAGE_PLACEHOLDER:\s*(.+?)\s*-->')

    def run(self, lines):
        new_lines = []
        for line in lines:
            m = self.PLACEHOLDER_RE.search(line)
            if m:
                desc = m.group(1).strip()
                new_lines.append(
                    f'<div class="image-placeholder">'
                    f'<div class="image-placeholder-icon">🖼️</div>'
                    f'<p>【圖片準備中】{desc}</p>'
                    f'</div>'
                )
            else:
                new_lines.append(line)
        return new_lines


class ClinicExtensions(Extension):
    def extendMarkdown(self, md):
        md.preprocessors.register(
            ObsidianCalloutPreprocessor(md), 'obsidian_callout', 30
        )
        md.preprocessors.register(
            MermaidPreprocessor(md), 'mermaid', 29
        )
        md.preprocessors.register(
            ImagePlaceholderPreprocessor(md), 'image_placeholder', 28
        )


def parse_frontmatter(text):
    """Extract YAML frontmatter and body."""
    if not text.startswith('---'):
        return {}, text
    end = text.find('\n---', 3)
    if end == -1:
        return {}, text
    fm = yaml.safe_load(text[3:end])
    body = text[end + 4:].strip()
    return fm or {}, body


def demote_headings(html):
    """h1→remove, h2→h3, h3→h4, h4→h5, h5→h6."""
    # Remove h1 tags entirely
    html = re.sub(r'<h1[^>]*>.*?</h1>\s*', '', html, flags=re.DOTALL)
    # Demote in reverse order (high→low) to avoid double-demotion
    for lvl in [5, 4, 3, 2]:
        html = re.sub(
            rf'<h{lvl}(\s[^>]*)?>',
            lambda m: f'<h{lvl+1}{m.group(1) if m.group(1) else ""}>',
            html,
        )
        html = html.replace(f'</h{lvl}>', f'</h{lvl+1}>')
    return html


def build_title_html(fm):
    """Build article title from frontmatter."""
    display = fm.get('display_title') or fm.get('title', '')
    raw_title = fm.get('title', '')

    # Extract English subtitle if present: "中文 (English Name)"
    en_match = re.search(r'\(([A-Za-z][A-Za-z\s,\-\']+)\)', raw_title)

    parts = [
        f'<h2 style="color:var(--navy,#1D3B72);margin-bottom:0.25rem;">'
        f'{display}</h2>'
    ]
    if en_match:
        en = en_match.group(1).strip()
        parts.append(
            f'<p style="color:var(--text-secondary,#666);margin-top:0;'
            f'margin-bottom:2rem;font-size:0.95rem;">{en}</p>'
        )
    return '\n'.join(parts)


def update_content_js(logical_category: str, slug: str, title: str,
                      summary: str, last_updated: str, content_path: str,
                      content_js_path: str = 'js/content.js') -> None:
    """Insert or replace a topic entry in CATEGORIES_BASE[logical_category].topics."""
    with open(content_js_path, 'r', encoding='utf-8') as f:
        src = f.read()

    cat_pattern = _re_contentjs.compile(
        r"(\{\s*id:\s*'" + _re_contentjs.escape(logical_category) + r"'[^}]*topics:\s*\[)([^\]]*)(\])",
        _re_contentjs.DOTALL,
    )
    m = cat_pattern.search(src)
    if not m:
        raise RuntimeError(f"Category '{logical_category}' not found in {content_js_path}")

    topic_id = f"{logical_category}-{slug}"
    esc = lambda s: (s or '').replace("\\", "\\\\").replace("'", "\\'")
    entry = (
        f"\n      {{ id: '{topic_id}', title: '{esc(title)}', "
        f"summary: '{esc(summary)}', "
        f"lastUpdated: '{esc(last_updated)}', "
        f"contentPath: '{esc(content_path)}' }},"
    )

    # Remove any existing entry with same id in this category's topics list
    topics_body = m.group(2)
    topics_body = _re_contentjs.sub(
        r"\s*\{\s*id:\s*'" + _re_contentjs.escape(topic_id) + r"'[^}]*\},?",
        '',
        topics_body,
    )
    new_body = topics_body.rstrip() + entry + "\n    "
    new_src = src[:m.start()] + m.group(1) + new_body + m.group(3) + src[m.end():]

    with open(content_js_path, 'w', encoding='utf-8') as f:
        f.write(new_src)
    print(f'✓ Updated content.js: {topic_id} → [{logical_category}]')


def convert_file(md_path, output_dir=None, preview=False, dry_run=False,
                 update_js=False):
    """Convert one .md file to an HTML fragment."""
    md_path = Path(md_path)
    text = md_path.read_text(encoding='utf-8')
    fm, body = parse_frontmatter(text)

    if not fm.get('slug') or not fm.get('category'):
        print(f'⚠ Skipping {md_path}: missing slug or category in frontmatter')
        return None

    category = fm['category']
    slug = fm['slug']
    topic_id = f'{category}-{slug}'

    # Output path
    if output_dir:
        out_dir = Path(output_dir) / category
    else:
        out_dir = md_path.parent.parent / 'content' / category
    out_path = out_dir / f'{topic_id}.html'

    if dry_run:
        js_note = ' (+content.js)' if update_js else ''
        print(f'  {md_path} → {out_path}{js_note}')
        return out_path

    # Convert markdown → HTML
    md_converter = markdown.Markdown(extensions=[
        ClinicExtensions(),
        'tables',
        'fenced_code',
    ])
    html = md_converter.convert(body)
    html = demote_headings(html)

    # Prepend title block
    title_html = build_title_html(fm)
    html = title_html + '\n\n' + html
    # Append QR code section
    html = html + QR_CODE_HTML

    if preview:
        print(html)
        return None

    # Write output
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path.write_text(html, encoding='utf-8')
    print(f'✓ {out_path}')

    title = fm.get('title', slug)
    summary = fm.get('summary') or fm.get('seo_description', '')
    date = str(fm.get('date_generated', ''))
    logical_cat = fm.get('logical_category', fm.get('category', ''))

    if update_js:
        update_content_js(
            logical_category=logical_cat,
            slug=fm.get('slug', ''),
            title=title,
            summary=summary,
            last_updated=date,
            content_path=str(out_path).replace('\\', '/'),
        )
    else:
        # Print manual hint when --update-content-js not used
        print(f"\n📝 請在 content.js 的 '{category}' 分類中加入：")
        print(f"  {{ id: '{topic_id}', title: '{title}', "
              f"summary: '{summary}', lastUpdated: '{date}' }}")
    return out_path


def main():
    parser = argparse.ArgumentParser(
        description='Convert Markdown drafts → HTML fragments'
    )
    parser.add_argument('path', help='Markdown file or drafts/ directory')
    parser.add_argument('--preview', action='store_true',
                        help='Print HTML to stdout, do not write file')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be generated')
    parser.add_argument('-o', '--output-dir',
                        help='Override output directory')
    parser.add_argument('--update-content-js', action='store_true',
                        help='Auto-insert topic entry into js/content.js')
    args = parser.parse_args()

    path = Path(args.path)

    if path.is_dir():
        files = sorted(path.glob('*.md'))
        files = [f for f in files if not f.name.startswith('_')]
        if not files:
            print(f'No .md files found in {path}')
            return
        if args.dry_run:
            print('Would generate:')
        for f in files:
            convert_file(f, output_dir=args.output_dir,
                         preview=args.preview, dry_run=args.dry_run,
                         update_js=args.update_content_js)
    elif path.is_file():
        convert_file(path, output_dir=args.output_dir,
                     preview=args.preview, dry_run=args.dry_run,
                     update_js=args.update_content_js)
    else:
        print(f'Error: {path} not found')
        sys.exit(1)


if __name__ == '__main__':
    main()
