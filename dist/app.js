(() => {
  // src/components/shared.jsx
  var Icon2 = {
    Search: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m20 20-3.5-3.5" })),
    Menu: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" })),
    ArrowRight: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14M13 5l7 7-7 7" })),
    ArrowUpRight: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M7 17 17 7M8 7h9v9" })),
    Phone: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" })),
    Clock: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l3 2" })),
    Pin: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "3" })),
    Calendar: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 10h18M8 3v4M16 3v4" })),
    Plus: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" })),
    Minus: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" })),
    Line: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v3l4-3h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-9 9H8v-4h2v4Zm4 0h-2V9h2v4Zm4 0h-2V9h2v4Z" })),
    Heart: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" })),
    Bookmark: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" })),
    Chevron: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m6 9 6 6 6-6" })),
    X: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6 6 18" }))
  };
  function ClinicMark2({ size = 40 }) {
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/logo.jpg",
        alt: "\u8AA0\u5FC3\u91AB\u7642\u9AD4\u7CFB\u5DE5\u5B78\u8A3A\u6240",
        width: size,
        height: size,
        style: { width: size, height: size, borderRadius: 10, objectFit: "contain", background: "#fff" }
      }
    );
  }
  var Illo2 = {
    Stethoscope: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M30 20v28a18 18 0 0 0 36 0V20" }), /* @__PURE__ */ React.createElement("path", { d: "M30 20h-6M66 20h6" }), /* @__PURE__ */ React.createElement("path", { d: "M48 66v10a18 18 0 0 0 36 0v-4" }), /* @__PURE__ */ React.createElement("circle", { cx: "84", cy: "64", r: "8" }), /* @__PURE__ */ React.createElement("circle", { cx: "84", cy: "64", r: "3", fill: tone, stroke: "none" })),
    Pills: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "16", y: "44", width: "56", height: "28", rx: "14", transform: "rotate(-20 44 58)" }), /* @__PURE__ */ React.createElement("path", { d: "M32 36 56 68" }), /* @__PURE__ */ React.createElement("circle", { cx: "86", cy: "78", r: "18" }), /* @__PURE__ */ React.createElement("path", { d: "M74 72h24" })),
    Heartbeat: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M10 62h22l8-16 10 32 10-24 6 8h44" }), /* @__PURE__ */ React.createElement("path", { d: "M60 94c18-12 38-26 38-46a14 14 0 0 0-26-6 14 14 0 0 0-26 6c0 6 2 12 6 18" })),
    Leaf: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M98 20C56 22 26 48 24 88c0 8 4 12 12 12 40-2 66-34 68-72 0-4-2-8-6-8Z" }), /* @__PURE__ */ React.createElement("path", { d: "M36 100 84 44" })),
    Shield: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M60 14 22 28v28c0 22 16 42 38 50 22-8 38-28 38-50V28L60 14Z" }), /* @__PURE__ */ React.createElement("path", { d: "M48 60l8 8 18-18" })),
    Thermometer: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M62 14a10 10 0 0 1 10 10v46a14 14 0 1 1-20 0V24a10 10 0 0 1 10-10Z" }), /* @__PURE__ */ React.createElement("path", { d: "M62 30v40" }), /* @__PURE__ */ React.createElement("circle", { cx: "62", cy: "84", r: "6", fill: tone, stroke: "none" })),
    Lungs: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M60 16v48" }), /* @__PURE__ */ React.createElement("path", { d: "M60 28c-8 8-28 14-32 30-4 16 2 34 14 36 10 2 14-6 18-18" }), /* @__PURE__ */ React.createElement("path", { d: "M60 28c8 8 28 14 32 30 4 16-2 34-14 36-10 2-14-6-18-18" }), /* @__PURE__ */ React.createElement("path", { d: "M54 18h12" })),
    Baby: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "44", r: "22" }), /* @__PURE__ */ React.createElement("circle", { cx: "52", cy: "44", r: "2", fill: tone, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "68", cy: "44", r: "2", fill: tone, stroke: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M54 52c2 4 10 4 12 0" }), /* @__PURE__ */ React.createElement("path", { d: "M32 100c4-16 14-26 28-26s24 10 28 26" })),
    Apple: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M60 34c6-6 18-10 26-6 8 4 12 16 10 28-2 12-10 30-22 38-4 2-10 2-14 0-12-8-20-26-22-38-2-12 2-24 10-28 8-4 20 0 26 6" }), /* @__PURE__ */ React.createElement("path", { d: "M60 34c-2-8 4-16 12-18" })),
    Bone: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M30 30c-6 0-10 4-10 10 0 4 2 6 4 8-2 2-4 4-4 8 0 6 4 10 10 10 4 0 6-2 8-4l40 40c2 2 4 4 8 4 6 0 10-4 10-10 0-4-2-6-4-8 2-2 4-4 4-8 0-6-4-10-10-10-4 0-6 2-8 4L38 34c-2-2-4-4-8-4Z" })),
    Doctor: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "36", r: "14" }), /* @__PURE__ */ React.createElement("path", { d: "M32 100c2-18 14-28 28-28s26 10 28 28" }), /* @__PURE__ */ React.createElement("path", { d: "M46 74v16M74 74v16" }), /* @__PURE__ */ React.createElement("path", { d: "M46 82h28" }), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "90", r: "3" })),
    Family: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "36", cy: "42", r: "12" }), /* @__PURE__ */ React.createElement("circle", { cx: "84", cy: "42", r: "12" }), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "64", r: "8" }), /* @__PURE__ */ React.createElement("path", { d: "M14 102c2-16 10-26 22-26s20 10 22 26" }), /* @__PURE__ */ React.createElement("path", { d: "M62 102c2-16 10-26 22-26s20 10 22 26" }), /* @__PURE__ */ React.createElement("path", { d: "M48 102c2-10 6-16 12-16s10 6 12 16" })),
    Virus: ({ tone = "#0a4d4d" }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 120", fill: "none", stroke: tone, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "60", r: "22" }), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "60", r: "4", fill: tone, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "48", cy: "54", r: "2.5", fill: tone, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "72", cy: "66", r: "2.5", fill: tone, stroke: "none" }), [0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const rad = a * Math.PI / 180;
      const x1 = 60 + Math.cos(rad) * 22, y1 = 60 + Math.sin(rad) * 22;
      const x2 = 60 + Math.cos(rad) * 34, y2 = 60 + Math.sin(rad) * 34;
      const cx = 60 + Math.cos(rad) * 38, cy = 60 + Math.sin(rad) * 38;
      return /* @__PURE__ */ React.createElement("g", { key: a }, /* @__PURE__ */ React.createElement("path", { d: `M${x1} ${y1} ${x2} ${y2}` }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: "3" }));
    }))
  };
  Object.assign(window, { Icon: Icon2, Illo: Illo2, ClinicMark: ClinicMark2 });

  // src/components/data.jsx
  function computeFeed() {
    const CATEGORIES = window.CATEGORIES || [];
    const all = CATEGORIES.flatMap(
      (cat) => (cat.topics || []).map((t) => ({
        ...t,
        tag: cat.name,
        categoryId: cat.id,
        accent: cat.tone
      }))
    ).sort((a, b) => (b.lastUpdated || "").localeCompare(a.lastUpdated || ""));
    return { FEATURED: all.slice(0, 3), LATEST: all.slice(3, 9) };
  }
  var { FEATURED, LATEST } = computeFeed();
  Object.assign(window, { __data: { FEATURED, LATEST } });

  // src/components/navbar.jsx
  function TopStrip() {
    const phone = window.CONFIG?.contact?.phone;
    const address = window.CONFIG?.contact?.address;
    const lineUrl = window.CONFIG?.contact?.lineUrl;
    const todayStatus = React.useMemo(() => {
      const hours = window.HOURS || [];
      const dayNames = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
      const gmt8 = new Date(Date.now() + (8 * 60 + (/* @__PURE__ */ new Date()).getTimezoneOffset()) * 6e4);
      const nowMin = gmt8.getHours() * 60 + gmt8.getMinutes();
      const todayName = dayNames[gmt8.getDay()];
      const entry = hours.find((h2) => h2.day === todayName);
      if (!entry) return null;
      if ([entry.am, entry.pm, entry.ev].every((v) => !v || v === "TODO")) return null;
      const parseMin = (s) => {
        const [h2, m] = s.trim().split(":").map(Number);
        return h2 * 60 + m;
      };
      const isValid = (v) => v && v !== "\u4F11\u8A3A" && v !== "TODO";
      const sessions = [
        { label: "\u4E0A\u5348\u8A3A", time: entry.am },
        { label: "\u4E0B\u5348\u8A3A", time: entry.pm },
        { label: "\u665A\u8A3A", time: entry.ev }
      ];
      let hasAnySession = false;
      for (const s of sessions) {
        if (!isValid(s.time)) continue;
        const parts = s.time.split("\u2013");
        if (parts.length < 2) continue;
        hasAnySession = true;
        if (nowMin >= parseMin(parts[0]) && nowMin < parseMin(parts[1])) {
          return { open: true, label: s.label };
        }
      }
      return { open: false, allDay: !hasAnySession };
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: "r-nav-topstrip", style: {
      background: "linear-gradient(90deg, #f0f7f4 0%, #e4ede9 100%)",
      color: "#5a7370",
      fontSize: 13,
      letterSpacing: 0.2,
      borderBottom: "1px solid var(--border-soft)"
    } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 24px",
      gap: 24
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, alignItems: "center" } }, phone && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 6, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icon.Phone, { style: { width: 14, height: 14, opacity: 0.85 } }), phone), address && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 6, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icon.Pin, { style: { width: 14, height: 14, opacity: 0.85 } }), address), todayStatus && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 6, alignItems: "center", color: todayStatus.open ? "var(--gold)" : "#5a7370" } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      flexShrink: 0,
      background: todayStatus.open ? "#4fb39a" : "#aaa",
      boxShadow: todayStatus.open ? "0 0 0 4px rgba(79,179,154,0.25)" : "none"
    } }), todayStatus.open ? `\u4ECA\u65E5\u9580\u8A3A\u4E2D \xB7 ${todayStatus.label}` : todayStatus.allDay ? "\u4ECA\u65E5\u4F11\u8A3A" : "\u4F11\u8A3A\u4E2D")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, alignItems: "center" } }, lineUrl && /* @__PURE__ */ React.createElement("a", { href: lineUrl, target: "_blank", rel: "noreferrer", style: linkStyle }, "LINE \u5B98\u65B9\u5E33\u865F"))));
  }
  var linkStyle = { color: "#5a7370", textDecoration: "none", opacity: 0.9 };
  var NAV = [
    { key: "edu", label: "\u885B\u6559\u5C08\u5340", mega: true, target: "#/" },
    { key: "doctors", label: "\u91AB\u5E2B\u5718\u968A", target: "#/doctors" },
    { key: "info", label: "\u9580\u8A3A\u8CC7\u8A0A", scrollTo: "info" },
    { key: "faq", label: "\u5E38\u898B\u554F\u7B54", scrollTo: "faq" },
    { key: "contact", label: "\u806F\u7D61\u6211\u5011", scrollTo: "info" }
  ];
  function Navbar({ ctx }) {
    const { theme, setTheme, fontScale, setFontScale, favorites } = ctx;
    const current = ctx.hashState.route === "list" ? "edu" : "";
    const [openMega, setOpenMega] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const closeTimer = React.useRef(null);
    const scheduleMegaClose = () => {
      closeTimer.current = setTimeout(() => setOpenMega(false), 150);
    };
    const cancelMegaClose = () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
    React.useEffect(() => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    }, []);
    React.useEffect(() => {
      const on = () => setScrolled(window.scrollY > 8);
      on();
      window.addEventListener("scroll", on);
      return () => window.removeEventListener("scroll", on);
    }, []);
    React.useEffect(() => {
      document.body.style.overflow = drawerOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [drawerOpen]);
    const handleScrollNav = (e, scrollTo) => {
      e.preventDefault();
      setDrawerOpen(false);
      if (ctx.hashState.route === "home") {
        scrollToId(scrollTo);
      } else {
        window.__scrollTarget = scrollTo;
        window.location.hash = "#/";
      }
    };
    return /* @__PURE__ */ React.createElement("header", { style: { position: "sticky", top: 0, zIndex: 50 } }, /* @__PURE__ */ React.createElement(TopStrip, null), /* @__PURE__ */ React.createElement("div", { style: {
      background: "#ffffffee",
      backdropFilter: "saturate(140%) blur(8px)",
      borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent",
      transition: "border-color .2s"
    } }, /* @__PURE__ */ React.createElement("div", { className: "container r-nav-grid", style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      padding: "14px 24px",
      gap: 32
    } }, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#/",
        style: { display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }
      },
      /* @__PURE__ */ React.createElement("img", { src: "./assets/logo_pic.jpg", alt: "\u5DE5\u5B78\u8AA0\u5FC3\u8A3A\u6240", style: { width: 44, height: 44, objectFit: "contain" } }),
      /* @__PURE__ */ React.createElement("div", { style: { lineHeight: 1.1 } }, /* @__PURE__ */ React.createElement("div", { className: "r-logo-title", style: { fontSize: 18, fontWeight: 700, color: "var(--fg-heading)", letterSpacing: "0.02em" } }, "\u5DE5\u5B78\u8AA0\u5FC3\u8A3A\u6240"), /* @__PURE__ */ React.createElement("div", { className: "r-logo-sub", style: { fontSize: 11, color: "var(--teal-2)", fontWeight: 600, letterSpacing: "0.18em", marginTop: 2 } }, "GONGXUE FAMILY CLINIC"))
    ), /* @__PURE__ */ React.createElement(
      "nav",
      {
        className: "r-nav-primary",
        style: { display: "flex", justifyContent: "center", gap: 4 },
        onMouseLeave: scheduleMegaClose
      },
      NAV.map((item) => {
        const active = current === item.key;
        return /* @__PURE__ */ React.createElement(
          "a",
          {
            key: item.key,
            href: item.scrollTo ? "#/" : item.target,
            onMouseEnter: () => {
              cancelMegaClose();
              setOpenMega(item.mega ? item.key : false);
            },
            onClick: (e) => {
              if (item.scrollTo) {
                handleScrollNav(e, item.scrollTo);
                return;
              }
              if (!item.mega) setOpenMega(false);
            },
            style: {
              padding: "10px 16px",
              borderRadius: 8,
              textDecoration: "none",
              color: active ? "var(--teal)" : "var(--fg-heading)",
              fontWeight: 600,
              background: active ? "rgba(74,158,148,0.10)" : "transparent",
              fontSize: 15,
              display: "inline-flex",
              gap: 4,
              alignItems: "center",
              transition: "background .15s"
            }
          },
          item.label,
          item.mega && /* @__PURE__ */ React.createElement(Icon.Chevron, { style: { width: 14, height: 14, opacity: 0.5 } })
        );
      })
    ), /* @__PURE__ */ React.createElement("div", { className: "r-cta-cluster", style: { display: "flex", gap: 8, alignItems: "center" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        "aria-label": "\u5207\u63DB\u4E3B\u984C",
        title: "\u5207\u63DB\u4EAE/\u6697\u4E3B\u984C",
        onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
        style: iconBtn
      },
      theme === "dark" ? "\u2600" : "\u{1F319}"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        "aria-label": "\u5207\u63DB\u5B57\u7D1A",
        title: "\u5207\u63DB\u6A19\u6E96/\u9577\u8F29\u5B57\u7D1A",
        onClick: () => setFontScale(fontScale === "senior" ? "normal" : "senior"),
        style: { ...iconBtn, fontWeight: 700, fontSize: fontScale === "senior" ? 18 : 14 }
      },
      "A"
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#/favorites",
        "aria-label": `\u6211\u7684\u6536\u85CF\uFF08${favorites.length} \u7BC7\uFF09`,
        style: { ...iconBtn, position: "relative", textDecoration: "none" }
      },
      /* @__PURE__ */ React.createElement(Icon.Heart, { style: { width: 18, height: 18 } }),
      favorites.length > 0 && /* @__PURE__ */ React.createElement("span", { style: {
        position: "absolute",
        top: -4,
        right: -4,
        background: "var(--peach)",
        color: "#fff",
        borderRadius: 99,
        fontSize: 10,
        fontWeight: 700,
        minWidth: 18,
        height: 18,
        display: "grid",
        placeItems: "center",
        padding: "0 4px"
      } }, favorites.length)
    ), window.CONFIG?.contact?.lineUrl && /* @__PURE__ */ React.createElement(
      "a",
      {
        href: window.CONFIG.contact.lineUrl,
        target: "_blank",
        rel: "noreferrer",
        style: {
          padding: "10px 20px",
          background: "#06C755",
          color: "#fff",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 6
        }
      },
      /* @__PURE__ */ React.createElement(Icon.Line, { style: { width: 16, height: 16 } }),
      /* @__PURE__ */ React.createElement("span", { className: "r-cta-text" }, "LINE \u9810\u7D04")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "r-nav-hamburger",
        onClick: () => setDrawerOpen(true),
        "aria-label": "\u958B\u555F\u9078\u55AE",
        style: { ...iconBtn, marginLeft: 2 }
      },
      /* @__PURE__ */ React.createElement(Icon.Menu, { style: { width: 18, height: 18 } })
    ))), openMega === "edu" && /* @__PURE__ */ React.createElement(
      "div",
      {
        onMouseEnter: cancelMegaClose,
        onMouseLeave: scheduleMegaClose,
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: "100%",
          background: "#ffffff",
          borderTop: "1px solid var(--border-soft)",
          boxShadow: "0 20px 40px -20px rgba(15,42,66,0.18)"
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "28px 24px" } }, /* @__PURE__ */ React.createElement("div", { className: "r-mega-grid", style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 4
      } }, (window.CATEGORIES || []).map((c) => {
        const I = Illo[c.icon];
        return /* @__PURE__ */ React.createElement(
          "a",
          {
            key: c.id,
            href: `#/${c.id}`,
            onClick: () => setOpenMega(false),
            style: megaCell
          },
          /* @__PURE__ */ React.createElement("div", { style: {
            width: 40,
            height: 40,
            borderRadius: 10,
            background: `${c.tone}15`,
            display: "grid",
            placeItems: "center",
            flexShrink: 0
          } }, /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 28 } }, I ? /* @__PURE__ */ React.createElement(I, { tone: c.tone }) : null)),
          /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, color: "var(--fg-heading)", fontSize: 15 } }, c.name, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--muted-3)", fontWeight: 400, marginLeft: 6, fontSize: 12 } }, (c.topics || []).length, " \u7BC7")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--muted-2)", marginTop: 2 } }, c.desc))
        );
      })))
    )), /* @__PURE__ */ React.createElement("div", { className: `mobile-drawer ${drawerOpen ? "open" : ""}`, onClick: () => setDrawerOpen(false) }, /* @__PURE__ */ React.createElement("div", { className: "mobile-drawer-panel", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid var(--border-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "./assets/logo_pic.jpg", alt: "\u5DE5\u5B78\u8AA0\u5FC3\u8A3A\u6240", style: { width: 36, height: 36, objectFit: "contain" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--fg-heading)" } }, "\u5DE5\u5B78\u8AA0\u5FC3\u8A3A\u6240")), /* @__PURE__ */ React.createElement("button", { onClick: () => setDrawerOpen(false), "aria-label": "\u95DC\u9589", style: { ...iconBtn, width: 36, height: 36 } }, /* @__PURE__ */ React.createElement(Icon.X, { style: { width: 16, height: 16 } }))), /* @__PURE__ */ React.createElement("nav", { style: { padding: 12 } }, NAV.filter((item) => !item.mega).map((item) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: item.key,
        href: item.scrollTo ? "#/" : item.target,
        onClick: (e) => {
          if (item.scrollTo) {
            handleScrollNav(e, item.scrollTo);
            return;
          }
          setDrawerOpen(false);
        },
        style: {
          display: "block",
          padding: "14px 16px",
          borderRadius: 10,
          textDecoration: "none",
          color: "var(--fg-heading)",
          fontWeight: 600,
          fontSize: 16
        }
      },
      item.label
    )), /* @__PURE__ */ React.createElement("div", { style: { margin: "8px 16px", borderTop: "1px solid var(--border-soft)" } }), (window.CATEGORIES || []).map((c) => {
      const count = (c.topics || []).length;
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: c.id,
          href: `#/${c.id}`,
          onClick: () => setDrawerOpen(false),
          style: {
            display: "block",
            padding: "14px 16px",
            borderRadius: 10,
            textDecoration: "none",
            color: "var(--fg-heading)",
            fontWeight: 600,
            fontSize: 16
          }
        },
        c.name,
        " (",
        count,
        ")"
      );
    })))));
  }
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector("header")?.offsetHeight || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
  var iconBtn = {
    width: 40,
    height: 40,
    borderRadius: 99,
    border: "1px solid var(--border-soft)",
    background: "transparent",
    color: "var(--fg-heading)",
    cursor: "pointer",
    display: "grid",
    placeItems: "center"
  };
  var megaCell = {
    display: "flex",
    gap: 12,
    padding: "12px 14px",
    borderRadius: 10,
    textDecoration: "none",
    transition: "background .15s",
    alignItems: "flex-start"
  };
  Object.assign(window, { Navbar });

  // src/components/heroes.jsx
  function HeroBig2({ ctx }) {
    const topicCount = window.CATEGORIES.reduce((a, c) => a + (c.topics || []).length, 0);
    const categoryCount = window.CATEGORIES.length;
    const clinicalYears = 12;
    const primaryBtn = {
      padding: "14px 24px",
      background: "var(--teal)",
      color: "#fff",
      borderRadius: 999,
      textDecoration: "none",
      fontWeight: 600,
      fontSize: 15,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset, 0 8px 20px -6px rgba(14,124,123,0.4)"
    };
    const secondaryBtn = {
      padding: "14px 24px",
      background: "#fff",
      color: "var(--fg-heading)",
      borderRadius: 999,
      textDecoration: "none",
      fontWeight: 600,
      fontSize: 15,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: "1px solid var(--cream-4)"
    };
    const showLineBtn = window.CONFIG?.contact?.lineUrl;
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        style: {
          background: "#fff8ec",
          position: "relative",
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          "aria-hidden": true,
          style: {
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, #c7e8e1 0%, rgba(199,232,225,0) 70%)"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          "aria-hidden": true,
          style: {
            position: "absolute",
            left: -80,
            bottom: -140,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, #fde2c8 0%, rgba(253,226,200,0) 70%)"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "container r-hero-grid",
          style: {
            padding: "72px 24px 96px",
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 64,
            alignItems: "center",
            position: "relative"
          }
        },
        /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "#ffffff",
              border: "1px solid var(--cream-4)",
              fontSize: 13,
              color: "var(--teal)",
              fontWeight: 600
            }
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                width: 6,
                height: 6,
                borderRadius: 99,
                background: "var(--gold)"
              }
            }
          ),
          "\u7D66\u6BCF\u500B\u5BB6\u5EAD\u7684\u885B\u6559\u77E5\u8B58\u5EAB"
        ), /* @__PURE__ */ React.createElement(
          "h1",
          {
            className: "r-hero-h1",
            style: {
              fontSize: "clamp(40px, 5vw, 56px)",
              lineHeight: 1.15,
              margin: "20px 0 20px",
              color: "var(--fg-heading)",
              fontWeight: 700,
              letterSpacing: "-0.01em"
            }
          },
          "\u7528\u770B\u5F97\u61C2\u7684\u8A71\uFF0C",
          /* @__PURE__ */ React.createElement("br", null),
          "\u966A\u60A8\u4E86\u89E3\u5065\u5EB7"
        ), /* @__PURE__ */ React.createElement(
          "p",
          {
            className: "r-hero-p",
            style: {
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--muted-4)",
              maxWidth: 520,
              margin: "0 0 32px"
            }
          },
          window.CONFIG?.description || "\u5BB6\u91AB\u79D1\u885B\u6559\u8CC7\u8A0A\u5E73\u53F0"
        ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("a", { href: "#/chronic", style: primaryBtn }, "\u700F\u89BD\u885B\u6559\u4E3B\u984C", " ", /* @__PURE__ */ React.createElement(Icon.ArrowRight, { style: { width: 18, height: 18 } })), showLineBtn && /* @__PURE__ */ React.createElement("a", { href: window.CONFIG.contact.lineUrl, style: secondaryBtn }, /* @__PURE__ */ React.createElement(Icon.Line, { style: { width: 18, height: 18 } }), " LINE \u9810\u7D04")), /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "r-hero-stats",
            style: {
              marginTop: 40,
              display: "flex",
              gap: 28,
              borderTop: "1px dashed var(--cream-4)",
              paddingTop: 24
            }
          },
          /* @__PURE__ */ React.createElement(Stat, { n: `${topicCount}+`, label: "\u885B\u6559\u4E3B\u984C" }),
          /* @__PURE__ */ React.createElement(Stat, { n: categoryCount, label: "\u5C08\u696D\u5206\u985E" }),
          /* @__PURE__ */ React.createElement(Stat, { n: clinicalYears, label: "\u5E74\u81E8\u5E8A\u7D93\u9A57" })
        )),
        /* @__PURE__ */ React.createElement("div", { className: "r-hero-illus" }, /* @__PURE__ */ React.createElement(HeroIllustration, null))
      )
    );
  }
  function Stat({ n, label }) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontSize: 28,
          fontWeight: 700,
          color: "var(--fg-heading)",
          letterSpacing: "-0.01em"
        }
      },
      n
    ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--muted-2)", marginTop: 2 } }, label));
  }
  function HeroIllustration() {
    const h2 = window.HERO || {};
    const featured = h2.featured || {};
    const seasonal = h2.seasonal || {};
    const pill = h2.pill || {};
    const titleLines = (seasonal.title || "").split("\n");
    const cardBase = {
      position: "absolute",
      borderRadius: 22,
      textDecoration: "none",
      display: "block"
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "relative",
          aspectRatio: "1/1",
          width: "100%",
          maxWidth: 500,
          marginLeft: "auto"
        }
      },
      /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "hero-card-back",
          href: featured.href || "#/",
          style: {
            ...cardBase,
            left: "4%",
            top: "8%",
            width: "62%",
            aspectRatio: "1/1.1",
            background: "#fff",
            padding: 22,
            boxShadow: "var(--shadow-lift)",
            border: "1px solid var(--border-soft)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--teal-2)", fontWeight: 600, letterSpacing: "0.12em" } }, featured.eyebrow || "\u672C\u9031\u7CBE\u9078"),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--fg-heading)", marginTop: 4, lineHeight: 1.4 } }, featured.title || ""),
        /* @__PURE__ */ React.createElement("div", { style: {
          marginTop: 14,
          height: 120,
          background: "var(--cream-1)",
          borderRadius: 12,
          padding: 12,
          display: "grid",
          gridTemplateRows: "1fr auto",
          gap: 6
        } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 60", style: { width: "100%", height: "100%" }, preserveAspectRatio: "none" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "hg", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "var(--teal-2)", stopOpacity: "0.35" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "var(--teal-2)", stopOpacity: "0" }))), /* @__PURE__ */ React.createElement("path", { d: "M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22 L120 60 L0 60 Z", fill: "url(#hg)" }), /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22",
            stroke: "var(--teal)",
            strokeWidth: "2",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ), [[15, 40], [45, 30], [75, 22], [105, 18]].map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r: "2.5", fill: "#fff", stroke: "var(--teal)", strokeWidth: "1.5" }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--muted-3)" } }, /* @__PURE__ */ React.createElement("span", null, "\u9031\u4E00"), /* @__PURE__ */ React.createElement("span", null, "\u9031\u4E09"), /* @__PURE__ */ React.createElement("span", null, "\u9031\u4E94"), /* @__PURE__ */ React.createElement("span", null, "\u9031\u65E5"))),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 10, flexWrap: "wrap" } }, (featured.tags || []).map((tag, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: tagChip(
          i === 0 ? "var(--success-bg)" : "var(--warn-bg)",
          i === 0 ? "var(--teal)" : "var(--warn-fg)"
        ) }, tag)), featured.readingMinutes && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--muted-3)", marginLeft: "auto" } }, featured.readingMinutes, " \u5206\u9418"))
      ),
      /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "hero-card-front",
          href: seasonal.href || "#/",
          style: {
            ...cardBase,
            right: "2%",
            bottom: "6%",
            width: "58%",
            aspectRatio: "1/1.15",
            background: "linear-gradient(170deg, var(--peach-light), var(--peach-dark))",
            padding: 22,
            color: "#fff",
            boxShadow: "var(--shadow-hero)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          width: 42,
          height: 42,
          borderRadius: 99,
          background: "var(--gold)",
          display: "grid",
          placeItems: "center",
          color: "var(--fg-heading)",
          fontWeight: 700,
          fontSize: 18
        } }, "+"),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#c9ede9", marginTop: 18, letterSpacing: "0.1em" } }, seasonal.eyebrow || ""),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginTop: 6 } }, titleLines.map((line, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, line, i < titleLines.length - 1 && /* @__PURE__ */ React.createElement("br", null)))),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 18, left: 22, right: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, fontSize: 13, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, seasonal.author || ""), seasonal.readingMinutes && /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.7 } }, seasonal.readingMinutes, " \u5206\u9418\u95B1\u8B80")))
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "hero-card-pill",
          style: {
            position: "absolute",
            left: "-6%",
            bottom: "18%",
            background: "#fff",
            borderRadius: 14,
            padding: "10px 14px",
            boxShadow: "var(--shadow-lift)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            border: "1px solid var(--border-soft)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "var(--cream-1)",
          display: "grid",
          placeItems: "center"
        } }, /* @__PURE__ */ React.createElement(Icon.Heart, { style: { width: 16, height: 16, color: "#d96757" } })),
        /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--muted-2)" } }, "\u5DF2\u6536\u85CF"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, color: "var(--fg-heading)" } }, pill.label || "", pill.count ? ` ${pill.count} \u7BC7` : ""))
      )
    );
  }
  function tagChip(bg, fg) {
    return {
      background: bg,
      color: fg,
      padding: "3px 8px",
      borderRadius: 4,
      fontWeight: 600
    };
  }
  Object.assign(window, { HeroBig: HeroBig2 });

  // src/components/sections.jsx
  function SectionHeader({ eyebrow, title, desc, action, linkHref, onAction }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 28,
      gap: 24,
      flexWrap: "wrap"
    } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 640 } }, eyebrow && /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 12,
      color: "var(--teal)",
      fontWeight: 600,
      letterSpacing: "0.18em",
      marginBottom: 8,
      textTransform: "uppercase"
    } }, eyebrow), /* @__PURE__ */ React.createElement("h2", { className: "r-section-head-title", style: {
      fontSize: "clamp(28px, 3vw, 36px)",
      fontWeight: 700,
      color: "var(--fg-heading)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      margin: 0
    } }, title), desc && /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: 16, marginTop: 10, lineHeight: 1.65 } }, desc)), action && /* @__PURE__ */ React.createElement("a", { href: linkHref || "#", onClick: linkHref ? void 0 : (e) => {
      e.preventDefault();
      onAction?.();
    }, style: {
      color: "var(--teal)",
      fontWeight: 600,
      fontSize: 14,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      paddingBottom: 6,
      borderBottom: "1px solid var(--teal)"
    } }, action, " ", /* @__PURE__ */ React.createElement(Icon.ArrowRight, { style: { width: 16, height: 16 } })));
  }
  function FeaturedSection() {
    const featured = window.__data?.FEATURED || [];
    if (featured.length === 0) return null;
    const big = featured[0];
    const rest = featured.slice(1);
    return /* @__PURE__ */ React.createElement("section", { className: "r-section", style: { background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, /* @__PURE__ */ React.createElement(
      SectionHeader,
      {
        eyebrow: "FEATURED \xB7 \u7CBE\u9078\u4E3B\u984C",
        title: "\u672C\u9031\u7DE8\u8F2F\u7CBE\u9078",
        desc: "\u5F9E\u9580\u8A3A\u6700\u5E38\u88AB\u554F\u5230\u7684\u554F\u984C\u51FA\u767C\uFF0C\u91AB\u5E2B\u8207\u8B77\u7406\u5E2B\u5171\u540C\u5BE9\u8A02\u3001\u5B9A\u671F\u66F4\u65B0\u3002"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "r-feat-grid", style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr",
      gap: 20
    } }, /* @__PURE__ */ React.createElement(FeatureCardLarge, { article: big }), rest.map((t) => /* @__PURE__ */ React.createElement(FeatureCardMedium, { key: t.id, article: t })))));
  }
  function FeatureCardLarge({ article }) {
    const href = `#/${article.categoryId}/${article.id}`;
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href,
        className: "r-feat-big",
        style: {
          textDecoration: "none",
          background: "linear-gradient(165deg, var(--peach-light) 0%, var(--peach-dark) 100%)",
          borderRadius: 20,
          padding: 32,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          minHeight: 380
        }
      },
      article.tag === "\u5B63\u7BC0\u5C08\u984C" && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: 20,
        right: 20,
        background: "var(--gold)",
        color: "var(--fg-heading)",
        fontWeight: 700,
        fontSize: 12,
        padding: "6px 12px",
        borderRadius: 999,
        letterSpacing: "0.08em"
      } }, "\u5B63\u7BC0\u5C08\u984C"),
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 64,
        height: 64,
        borderRadius: 16,
        background: "rgba(255,255,255,0.12)",
        display: "grid",
        placeItems: "center",
        marginBottom: 24
      } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, color: "var(--gold)" } }, /* @__PURE__ */ React.createElement(Illo.Virus, { tone: "var(--gold)" }))),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.15em" } }, article.tag),
      /* @__PURE__ */ React.createElement("h3", { style: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 1.3,
        margin: "10px 0 14px",
        letterSpacing: "-0.005em",
        color: "#fff"
      } }, article.title),
      /* @__PURE__ */ React.createElement("p", { style: { color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.65, margin: 0, flex: 1 } }, article.summary || article.excerpt || ""),
      /* @__PURE__ */ React.createElement("div", { style: {
        marginTop: 28,
        paddingTop: 20,
        borderTop: "1px solid rgba(255,255,255,0.18)",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: 13
      } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 4, alignItems: "center", color: "#fff", fontWeight: 600 } }, "\u95B1\u8B80\u5168\u6587 ", /* @__PURE__ */ React.createElement(Icon.ArrowRight, { style: { width: 14, height: 14 } })))
    );
  }
  function FeatureCardMedium({ article }) {
    const href = `#/${article.categoryId}/${article.id}`;
    const cat = (window.CATEGORIES || []).find((c) => c.id === article.categoryId) || {};
    const I = Illo[cat.icon] || Illo.Shield;
    const tone = cat.tone || "var(--teal)";
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href,
        className: "feat-med r-feat-med",
        style: {
          textDecoration: "none",
          color: "inherit",
          background: "var(--cream-1)",
          borderRadius: 20,
          padding: 28,
          border: "1px solid var(--border-soft)",
          display: "flex",
          flexDirection: "column",
          minHeight: 380,
          transition: "transform .15s, box-shadow .15s"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 56,
        height: 56,
        borderRadius: 14,
        background: "#fff",
        display: "grid",
        placeItems: "center",
        marginBottom: 22,
        border: "1px solid var(--border-soft)"
      } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36 } }, /* @__PURE__ */ React.createElement(I, { tone }))),
      /* @__PURE__ */ React.createElement("span", { style: {
        display: "inline-block",
        fontSize: 11,
        color: "var(--teal)",
        background: "var(--teal-2)",
        padding: "3px 10px",
        borderRadius: 4,
        fontWeight: 600,
        width: "fit-content",
        letterSpacing: "0.05em"
      } }, article.tag),
      /* @__PURE__ */ React.createElement("h3", { style: {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 1.35,
        margin: "12px 0 10px",
        color: "var(--fg-heading)"
      } }, article.title),
      /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 } }, article.summary || article.excerpt || ""),
      /* @__PURE__ */ React.createElement("div", { style: {
        marginTop: 22,
        paddingTop: 16,
        borderTop: "1px dashed var(--border-soft)",
        fontSize: 12,
        color: "var(--muted-2)",
        display: "flex",
        justifyContent: "flex-end"
      } }, /* @__PURE__ */ React.createElement("span", null, "\u95B1\u8B80\u5168\u6587 \u2192"))
    );
  }
  function CategoriesSection() {
    const categories = window.CATEGORIES || [];
    return /* @__PURE__ */ React.createElement("section", { className: "r-section", style: { background: "var(--cream-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, /* @__PURE__ */ React.createElement(
      SectionHeader,
      {
        eyebrow: "TOPICS \xB7 \u4E3B\u984C\u5206\u985E",
        title: "\u5F9E\u60A8\u95DC\u5FC3\u7684\u4E3B\u984C\u958B\u59CB\u8B80\u8D77",
        desc: "\u591A\u985E\u5225\uFF0C\u91AB\u5E2B\u5BE9\u8A02\u6587\u7AE0\u3002\u6BCF\u500B\u4E3B\u984C\u90FD\u542B\u6709\u57FA\u672C\u8A8D\u8B58\u3001\u65E5\u5E38\u7167\u8B77\u3001\u4F55\u6642\u5C31\u91AB\u7B49\u5167\u5BB9\u3002"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "r-cat-grid", style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    } }, categories.map((c) => {
      const I = Illo[c.icon] || Illo.Shield;
      const tone = c.tone || "var(--teal)";
      const count = (c.topics || []).length;
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: c.id,
          href: `#/${c.id}`,
          className: "topic-card r-cat-tile",
          style: {
            background: "#fff",
            borderRadius: 18,
            padding: 24,
            border: "1px solid var(--border-soft)",
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            overflow: "hidden",
            transition: "transform .2s, box-shadow .2s",
            minHeight: 180
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: {
          width: 52,
          height: 52,
          borderRadius: 14,
          background: `${tone}12`,
          display: "grid",
          placeItems: "center"
        } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34 } }, /* @__PURE__ */ React.createElement(I, { tone }))), /* @__PURE__ */ React.createElement("span", { style: {
          fontSize: 12,
          color: "var(--muted-2)",
          fontWeight: 500
        } }, count, " \u7BC7")),
        /* @__PURE__ */ React.createElement("div", { className: "r-cat-tile-name", style: { fontSize: 18, fontWeight: 700, color: "var(--fg-heading)", marginTop: 20 } }, c.name, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 400, fontSize: 13, color: "var(--muted-2)", marginLeft: 6 } }, "(", count, ")")),
        /* @__PURE__ */ React.createElement("div", { className: "r-cat-tile-desc", style: { fontSize: 13, color: "var(--muted)", marginTop: 6, lineHeight: 1.55 } }, c.desc || c.description || ""),
        /* @__PURE__ */ React.createElement("div", { className: "r-cat-tile-arrow", style: {
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 32,
          height: 32,
          borderRadius: 99,
          background: `${tone}10`,
          display: "grid",
          placeItems: "center",
          color: tone,
          opacity: 0.8
        } }, /* @__PURE__ */ React.createElement(Icon.ArrowRight, { style: { width: 16, height: 16 } }))
      );
    }))));
  }
  function LatestSection() {
    const latest = window.__data?.LATEST || [];
    if (latest.length === 0) return null;
    const categories = window.CATEGORIES || [];
    return /* @__PURE__ */ React.createElement("section", { className: "r-section", style: { background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, /* @__PURE__ */ React.createElement(
      SectionHeader,
      {
        eyebrow: "LATEST \xB7 \u6700\u65B0\u6587\u7AE0",
        title: "\u9019\u9031\u65B0\u4E0A\u7DDA",
        desc: "\u91AB\u5E2B\u6BCF\u9031\u66F4\u65B0\uFF0C\u8DDF\u8457\u5B63\u7BC0\u8207\u6D41\u884C\u75C5\u4E00\u8D77\u8F49\u63DB\u8A71\u984C\u3002",
        action: "\u6587\u7AE0\u5217\u8868",
        linkHref: "#/"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "r-latest-grid", style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 0,
      border: "1px solid var(--border-soft)",
      borderRadius: 16,
      overflow: "hidden"
    } }, latest.map((a, i) => {
      const cat = categories.find((c) => c.id === a.categoryId) || categories[0] || {};
      const I = Illo[cat.icon] || Illo.Shield;
      const tone = cat.tone || a.accent || "var(--teal)";
      const col = i % 3, row = Math.floor(i / 3);
      const totalRows = Math.ceil(latest.length / 3);
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: a.id,
          href: `#/${a.categoryId}/${a.id}`,
          className: "latest-row",
          style: {
            padding: "22px 24px",
            textDecoration: "none",
            color: "inherit",
            borderRight: col < 2 ? "1px solid var(--border-soft)" : "none",
            borderBottom: row < totalRows - 1 ? "1px solid var(--border-soft)" : "none",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            transition: "background .15s"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${tone}12`,
          display: "grid",
          placeItems: "center",
          flexShrink: 0
        } }, /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 28 } }, /* @__PURE__ */ React.createElement(I, { tone }))),
        /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: {
          fontSize: 11,
          color: tone,
          fontWeight: 600,
          letterSpacing: "0.06em"
        } }, a.tag), /* @__PURE__ */ React.createElement("div", { style: {
          fontSize: 16,
          fontWeight: 600,
          color: "var(--fg-heading)",
          marginTop: 6,
          lineHeight: 1.45
        } }, a.title), a.lastUpdated && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--muted-2)", marginTop: 10 } }, a.lastUpdated))
      );
    }))));
  }
  function DoctorsSection() {
    const doctors = window.DOCTORS || [];
    if (doctors.length === 0) return null;
    return /* @__PURE__ */ React.createElement("section", { className: "r-section", style: { background: "var(--cream-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, /* @__PURE__ */ React.createElement(
      SectionHeader,
      {
        eyebrow: "DOCTORS \xB7 \u91AB\u5E2B\u5718\u968A",
        title: "\u8A8D\u8B58\u60A8\u7684\u91AB\u5E2B",
        desc: "\u6BCF\u4F4D\u91AB\u5E2B\u90FD\u6703\u82B1\u6642\u9593\u807D\u60A8\u8AAA\u8A71\u3002\u770B\u8A3A\u524D\u591A\u4E86\u89E3\u4E00\u9EDE\uFF0C\u6E9D\u901A\u6642\u5C31\u66F4\u6709\u6548\u7387\u3002"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "r-docs-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 } }, doctors.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id || d.name, style: {
      background: "#fff",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--border-soft)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      aspectRatio: "1/1",
      background: `linear-gradient(155deg, ${d.hue}22 0%, ${d.hue}05 100%)`,
      position: "relative",
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    } }, d.photo ? /* @__PURE__ */ React.createElement("img", { src: d.photo, alt: `${d.name} \u91AB\u5E2B`, style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center"
    } }) : /* @__PURE__ */ React.createElement("div", { style: {
      width: "62%",
      aspectRatio: "1",
      borderRadius: "50%",
      background: `linear-gradient(160deg, ${d.hue} 0%, ${shade(d.hue)} 100%)`,
      display: "grid",
      placeItems: "center",
      color: "#fff",
      boxShadow: `0 20px 40px -20px ${d.hue}88`
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 72, height: 72 } }, /* @__PURE__ */ React.createElement(Illo.Doctor, { tone: "rgba(255,255,255,0.85)" })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 20px 22px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: "var(--fg-heading)" } }, d.name, " ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 400, color: "var(--muted)", fontSize: 14 } }, "\u91AB\u5E2B")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--teal)", fontWeight: 600, marginTop: 4, lineHeight: 1.6 } }, d.title?.split(" \xB7 ").map((part, i) => /* @__PURE__ */ React.createElement("div", { key: i }, part))), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: "12px 0 0" } }, d.bio), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 } }, (d.expertise || []).map((x) => /* @__PURE__ */ React.createElement("span", { key: x, style: {
      fontSize: 11,
      color: "var(--muted)",
      background: "var(--cream-2)",
      padding: "3px 8px",
      borderRadius: 4
    } }, x)))))))));
  }
  function shade(hex) {
    return hex.replace(/^#/, "").match(/.{2}/g).map((x) => Math.max(0, parseInt(x, 16) - 25).toString(16).padStart(2, "0")).reduce((s, x) => s + x, "#");
  }
  function FaqSection() {
    const [open, setOpen] = React.useState(0);
    const faqs = window.FAQS || [];
    const lineUrl = window.CONFIG?.contact?.lineUrl || "";
    return /* @__PURE__ */ React.createElement("section", { id: "faq", className: "r-section", style: { background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, /* @__PURE__ */ React.createElement("div", { className: "r-faq-grid", style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 60,
      alignItems: "flex-start"
    } }, /* @__PURE__ */ React.createElement("div", { style: { position: "sticky", top: 120 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 12,
      color: "var(--teal)",
      fontWeight: 600,
      letterSpacing: "0.18em",
      marginBottom: 8,
      textTransform: "uppercase"
    } }, "FAQ \xB7 \u5E38\u898B\u554F\u984C"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontSize: "clamp(28px, 3vw, 36px)",
      fontWeight: 700,
      color: "var(--fg-heading)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      margin: 0
    } }, "\u770B\u8A3A\u524D\uFF0C", /* @__PURE__ */ React.createElement("br", null), "\u5148\u628A\u7591\u554F\u89E3\u6C7A"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: 15, marginTop: 16, lineHeight: 1.7 } }, "\u6574\u7406\u81EA\u6AC3\u53F0\u8207\u9580\u8A3A\u6700\u5E38\u88AB\u554F\u5230\u7684\u554F\u984C\u3002", lineUrl ? "\u82E5\u60A8\u7684\u554F\u984C\u4E0D\u5728\u9019\u88E1\uFF0C\u6B61\u8FCE\u900F\u904E LINE \u5B98\u65B9\u5E33\u865F\u76F4\u63A5\u8A62\u554F\u3002" : "\u82E5\u6709\u5176\u4ED6\u7591\u554F\uFF0C\u6B61\u8FCE\u4F86\u96FB\u6216\u89AA\u6D3D\u8A3A\u6240\u8A62\u554F\u3002"), lineUrl && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("a", { href: lineUrl, target: "_blank", rel: "noopener noreferrer", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 20px",
      background: "#06C755",
      color: "#fff",
      borderRadius: 999,
      textDecoration: "none",
      fontWeight: 600,
      fontSize: 14
    } }, /* @__PURE__ */ React.createElement(Icon.Line, { style: { width: 18, height: 18 } }), "\u52A0\u5165 LINE \u8A62\u554F"), window.CONFIG?.contact?.lineQrCode && /* @__PURE__ */ React.createElement(
      "img",
      {
        src: window.CONFIG.contact.lineQrCode,
        alt: "LINE QR Code",
        style: { display: "block", marginTop: 16, width: 120, height: 120, borderRadius: 8 }
      }
    ))), /* @__PURE__ */ React.createElement("div", null, faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ React.createElement("div", { key: f.id || i, style: {
        borderTop: i === 0 ? "1px solid var(--border-soft)" : "none",
        borderBottom: "1px solid var(--border-soft)"
      } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(isOpen ? -1 : i), style: {
        width: "100%",
        background: "transparent",
        border: 0,
        padding: "22px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        cursor: "pointer",
        textAlign: "left",
        color: "var(--fg-heading)",
        fontSize: 17,
        fontWeight: 600
      } }, /* @__PURE__ */ React.createElement("span", null, f.q), /* @__PURE__ */ React.createElement("span", { style: {
        width: 32,
        height: 32,
        borderRadius: 99,
        flexShrink: 0,
        border: "1px solid var(--border-soft)",
        color: "var(--teal)",
        display: "grid",
        placeItems: "center",
        background: isOpen ? "var(--teal)" : "#fff"
      } }, isOpen ? /* @__PURE__ */ React.createElement(Icon.Minus, { style: { width: 14, height: 14, color: "#fff" } }) : /* @__PURE__ */ React.createElement(Icon.Plus, { style: { width: 14, height: 14 } }))), isOpen && /* @__PURE__ */ React.createElement("div", { style: {
        paddingBottom: 22,
        color: "var(--muted)",
        fontSize: 15,
        lineHeight: 1.75,
        maxWidth: 620
      } }, f.a));
    })))));
  }
  var hdrCell = {
    padding: "10px 12px",
    borderBottom: "1px solid var(--border-soft)",
    fontSize: 11,
    color: "var(--muted-2)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 600
  };
  var cell = {
    padding: "12px 12px",
    borderBottom: "1px solid var(--border-soft)",
    fontVariantNumeric: "tabular-nums"
  };
  function InfoSection() {
    const hours = window.HOURS || [];
    const contact = window.CONFIG?.contact || {};
    const hasAddress = contact.address && contact.address !== "";
    const hasPhone = contact.phone && contact.phone !== "";
    const lineUrl = contact.lineUrl || "";
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        id: "info",
        className: "r-section",
        style: {
          padding: "80px 0",
          background: "var(--cream-2)",
          color: "var(--fg-heading)",
          position: "relative",
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ React.createElement("svg", { "aria-hidden": true, style: { position: "absolute", inset: 0, opacity: 0.05 }, width: "100%", height: "100%" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "pplus", width: "60", height: "60", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("path", { d: "M30 20v20M20 30h20", stroke: "var(--teal)", strokeWidth: "1", strokeLinecap: "round" }))), /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: "url(#pplus)" })),
      /* @__PURE__ */ React.createElement("div", { className: "container r-info-grid", style: {
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: 60,
        position: "relative",
        alignItems: "flex-start"
      } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 12,
        color: "var(--gold)",
        fontWeight: 600,
        letterSpacing: "0.18em",
        marginBottom: 8,
        textTransform: "uppercase"
      } }, "INFO \xB7 \u9580\u8A3A\u8CC7\u8A0A"), /* @__PURE__ */ React.createElement("h2", { style: {
        fontSize: "clamp(28px, 3vw, 36px)",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1.2,
        margin: 0,
        color: "var(--fg-heading)"
      } }, "\u5C31\u5728\u60A8\u5BB6\u5DF7\u53E3\uFF0C", /* @__PURE__ */ React.createElement("br", null), "\u770B\u8A3A\u66F4\u81EA\u5728"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32, display: "grid", gap: 20 } }, hasAddress && /* @__PURE__ */ React.createElement(InfoRow, { icon: Icon.Pin, label: "\u8A3A\u6240\u5730\u5740", value: contact.address, sub: contact.addressSub || "" }), hasPhone && /* @__PURE__ */ React.createElement(InfoRow, { icon: Icon.Phone, label: "\u806F\u7D61\u96FB\u8A71", value: contact.phone, sub: contact.phoneSub || "" }), lineUrl && /* @__PURE__ */ React.createElement(InfoRow, { icon: Icon.Line, label: "\u7DDA\u4E0A\u9810\u7D04", value: "LINE \u5B98\u65B9\u5E33\u865F", sub: "\u4EA6\u53EF\u7DB2\u7AD9\u9810\u7D04" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 36, display: "flex", gap: 10, flexWrap: "wrap" } }, lineUrl && /* @__PURE__ */ React.createElement("a", { href: lineUrl, target: "_blank", rel: "noopener noreferrer", style: {
        padding: "12px 22px",
        background: "var(--teal)",
        color: "#fff",
        borderRadius: 999,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 14,
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      } }, /* @__PURE__ */ React.createElement(Icon.Line, { style: { width: 16, height: 16 } }), " \u7ACB\u5373\u9810\u7D04"), /* @__PURE__ */ React.createElement("a", { href: "#/contact", style: {
        padding: "12px 22px",
        background: "#fff",
        color: "var(--fg-heading)",
        borderRadius: 999,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 14,
        border: "1px solid var(--border-soft)"
      } }, "\u4EA4\u901A\u6307\u5F15"))), /* @__PURE__ */ React.createElement("div", { style: {
        background: "#fff",
        borderRadius: 20,
        padding: 28,
        border: "1px solid var(--border-soft)",
        boxShadow: "var(--shadow-soft)"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, color: "var(--fg-heading)" } }, "\u6BCF\u9031\u9580\u8A3A\u6642\u6BB5"), /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 11,
        color: "#b38a1a",
        border: "1px solid #e5cf7c",
        padding: "3px 10px",
        borderRadius: 4,
        letterSpacing: "0.08em",
        fontWeight: 600,
        background: "#fdf4d9"
      } }, "\u672C\u9031")), /* @__PURE__ */ React.createElement("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr 1.1fr 1.1fr",
        gap: 0,
        fontSize: 13
      } }, /* @__PURE__ */ React.createElement("div", { style: hdrCell }), /* @__PURE__ */ React.createElement("div", { style: hdrCell }, "\u4E0A\u5348\u8A3A"), /* @__PURE__ */ React.createElement("div", { style: hdrCell }, "\u4E0B\u5348\u8A3A"), /* @__PURE__ */ React.createElement("div", { style: hdrCell }, "\u665A\u8A3A"), hours.map((h2) => {
        const isMuted = (v) => v === "\u4F11\u8A3A" || v === "TODO";
        return /* @__PURE__ */ React.createElement(React.Fragment, { key: h2.day }, /* @__PURE__ */ React.createElement("div", { style: { ...cell, fontWeight: 600, color: "var(--fg-heading)" } }, h2.day), /* @__PURE__ */ React.createElement("div", { style: { ...cell, color: isMuted(h2.am) ? "var(--muted-3)" : "var(--muted)" } }, h2.am), /* @__PURE__ */ React.createElement("div", { style: {
          ...cell,
          color: h2.pmSpecial ? "#b38a1a" : isMuted(h2.pm) ? "var(--muted-3)" : "var(--muted)",
          fontWeight: h2.pmSpecial ? 600 : void 0
        } }, h2.pm), /* @__PURE__ */ React.createElement("div", { style: { ...cell, color: isMuted(h2.ev) ? "var(--muted-3)" : "var(--muted)" } }, h2.ev));
      }))))
    );
  }
  function InfoRow({ icon: I, label, value, sub }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      flexShrink: 0,
      background: "#fff8ec",
      color: "#b38a1a",
      display: "grid",
      placeItems: "center",
      border: "1px solid #f0e5c4"
    } }, /* @__PURE__ */ React.createElement(I, { style: { width: 20, height: 20 } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--muted)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, marginTop: 4, color: "var(--fg-heading)" } }, value), sub && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--muted-2)", marginTop: 2 } }, sub)));
  }
  function Footer({ ctx }) {
    const config = window.CONFIG || {};
    const categories = window.CATEGORIES || [];
    const clinicName = config.clinicName || "\u8AA0\u5FC3\u91AB\u7642\u9AD4\u7CFB\u5DE5\u5B78\u8A3A\u6240";
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ React.createElement("footer", { style: {
      background: "linear-gradient(180deg, var(--cream-2) 0%, var(--border-soft) 100%)",
      color: "var(--muted)",
      padding: "56px 0 32px",
      fontSize: 13,
      borderTop: "1px solid var(--border-soft)"
    } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "0 24px" } }, /* @__PURE__ */ React.createElement("div", { className: "r-footer-grid", style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
      gap: 40,
      marginBottom: 40
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement(ClinicMark, { size: 36 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--fg-heading)", fontWeight: 700, fontSize: 16 } }, clinicName), config.clinicNameEn && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.05em" } }, config.clinicNameEn))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, lineHeight: 1.7 } }, config.description || "\u70BA\u6BCF\u4E00\u500B\u5BB6\u5EAD\u6253\u9020\u503C\u5F97\u4FE1\u8CF4\u7684\u91AB\u7642\u670D\u52D9\uFF0C\u4EE5\u8AA0\u5FC3\u8046\u807D\uFF0C\u7528\u91AB\u5B78\u77E5\u8B58\u966A\u60A8\u8D70\u4E00\u6BB5\u9577\u9060\u7684\u5065\u5EB7\u65C5\u7A0B\u3002")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--fg-heading)", fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: "0.05em" } }, "\u885B\u6559\u5206\u985E"), categories.slice(0, 5).map((c) => /* @__PURE__ */ React.createElement("a", { key: c.id, href: `#/${c.id}`, style: {
      display: "block",
      color: "var(--muted)",
      textDecoration: "none",
      padding: "6px 0",
      fontSize: 13
    } }, c.name))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--fg-heading)", fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: "0.05em" } }, "\u8A3A\u6240"), [
      { label: "\u91AB\u5E2B\u5718\u968A", href: "#/#doctors" },
      { label: "\u9580\u8A3A\u8CC7\u8A0A", href: "#/#info" },
      { label: "\u5E38\u898B\u554F\u984C", href: "#/#faq" },
      { label: "\u806F\u7D61\u6211\u5011", href: "#/contact" }
    ].map(({ label, href }) => /* @__PURE__ */ React.createElement("a", { key: label, href, style: {
      display: "block",
      color: "var(--muted)",
      textDecoration: "none",
      padding: "6px 0",
      fontSize: 13
    } }, label))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--fg-heading)", fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: "0.05em" } }, "\u500B\u4EBA\u5316"), [
      { label: "\u6211\u7684\u6536\u85CF", href: "#/favorites" },
      { label: "\u6700\u8FD1\u700F\u89BD", href: "#/recent" }
    ].map(({ label, href }) => /* @__PURE__ */ React.createElement("a", { key: label, href, style: {
      display: "block",
      color: "var(--muted)",
      textDecoration: "none",
      padding: "6px 0",
      fontSize: 13
    } }, label)))), /* @__PURE__ */ React.createElement("div", { style: {
      paddingTop: 24,
      borderTop: "1px solid rgba(26,57,66,0.1)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 12,
      opacity: 0.7
    } }, /* @__PURE__ */ React.createElement("span", null, "\xA9 ", year, " ", clinicName, ". All rights reserved."), /* @__PURE__ */ React.createElement("span", null, "\u672C\u7AD9\u5167\u5BB9\u7531\u5C08\u696D\u91AB\u7642\u5718\u968A\u5BE9\u95B1"))));
  }
  function HomePage({ ctx }) {
    React.useEffect(() => {
      const t = window.__scrollTarget;
      if (!t) return;
      window.__scrollTarget = null;
      setTimeout(() => {
        const el = document.getElementById(t);
        if (!el) return;
        const navH = document.querySelector("header")?.offsetHeight || 0;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: "smooth" });
      }, 80);
    }, []);
    return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(HeroBig, { ctx }), /* @__PURE__ */ React.createElement(FeaturedSection, null), /* @__PURE__ */ React.createElement(CategoriesSection, null), /* @__PURE__ */ React.createElement(LatestSection, null), /* @__PURE__ */ React.createElement(DoctorsSection, null), /* @__PURE__ */ React.createElement(FaqSection, null), /* @__PURE__ */ React.createElement(InfoSection, null));
  }
  Object.assign(window, {
    HomePage,
    FeaturedSection,
    CategoriesSection,
    LatestSection,
    DoctorsSection,
    FaqSection,
    InfoSection,
    Footer
  });

  // src/components/pages.jsx
  function ListPage({ ctx }) {
    const { hashState, favorites, recent } = ctx;
    let title, topics;
    if (hashState.view === "favorites") {
      title = "\u6211\u7684\u6536\u85CF";
      topics = window.CATEGORIES.flatMap(
        (c) => (c.topics || []).filter((t) => favorites.includes(t.id)).map((t) => ({ ...t, categoryId: c.id, categoryName: c.name, tone: c.tone }))
      );
    } else if (hashState.view === "recent") {
      title = "\u6700\u8FD1\u700F\u89BD";
      const all = window.CATEGORIES.flatMap(
        (c) => (c.topics || []).map((t) => ({ ...t, categoryId: c.id, categoryName: c.name, tone: c.tone }))
      );
      topics = recent.map((id) => all.find((t) => t.id === id)).filter(Boolean);
    } else {
      const cat = window.CATEGORIES.find((c) => c.id === hashState.categoryId);
      if (!cat) return /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, "\u627E\u4E0D\u5230\u6B64\u5206\u985E");
      title = cat.name;
      topics = (cat.topics || []).map((t) => ({ ...t, categoryId: cat.id, categoryName: cat.name, tone: cat.tone }));
    }
    return /* @__PURE__ */ React.createElement("main", { className: "container r-section", style: { padding: "64px 24px" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: "clamp(28px,3vw,36px)", fontWeight: 700, margin: "0 0 12px", color: "var(--fg-heading)" } }, title), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: 15, marginBottom: 40 } }, "\u5171 ", topics.length, " \u7BC7"), topics.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: 48, textAlign: "center", background: "var(--cream-1)", borderRadius: 16, color: "var(--muted)" } }, hashState.view === "favorites" && "\u60A8\u9084\u6C92\u6709\u6536\u85CF\u4EFB\u4F55\u6587\u7AE0\u3002\u700F\u89BD\u6587\u7AE0\u6642\u9EDE\u64CA\u611B\u5FC3\u5373\u53EF\u6536\u85CF\u3002", hashState.view === "recent" && "\u60A8\u9084\u6C92\u6709\u700F\u89BD\u7D00\u9304\u3002", !hashState.view && "\u9019\u500B\u5206\u985E\u76EE\u524D\u6C92\u6709\u6587\u7AE0\u3002") : /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 16 } }, topics.map((t) => /* @__PURE__ */ React.createElement("a", { key: t.id, href: `#/${t.categoryId}/${t.id}`, className: "r-list-card topic-card", style: {
      display: "flex",
      gap: 20,
      padding: 24,
      borderRadius: 14,
      background: "var(--bg)",
      border: "1px solid var(--border-soft)",
      textDecoration: "none",
      color: "var(--fg)",
      boxShadow: "var(--shadow-soft)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 80,
      height: 80,
      flexShrink: 0,
      borderRadius: 12,
      background: `${t.tone}15`,
      display: "grid",
      placeItems: "center",
      color: t.tone
    } }, /* @__PURE__ */ React.createElement(Icon.ArrowRight, { style: { width: 24, height: 24 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: t.tone,
      marginBottom: 6
    } }, t.categoryName), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 18, fontWeight: 700, color: "var(--fg-heading)", margin: 0, lineHeight: 1.45 } }, t.title), t.summary && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "var(--muted)", marginTop: 8, lineHeight: 1.6 } }, t.summary))))));
  }
  function updateMeta(title, description) {
    document.title = title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", description);
  }
  function updateJsonLd(topic, category) {
    const old = document.getElementById("json-ld");
    if (old) old.remove();
    if (!topic) return;
    const data = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: topic.title,
      description: topic.summary || "",
      inLanguage: "zh-TW",
      about: { "@type": "MedicalCondition", name: topic.title },
      publisher: { "@type": "MedicalOrganization", name: (window.CONFIG || {}).clinicName || "" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9801", item: "#/" },
          { "@type": "ListItem", position: 2, name: category.name, item: `#/${category.id}` },
          { "@type": "ListItem", position: 3, name: topic.title }
        ]
      }
    };
    const s = document.createElement("script");
    s.id = "json-ld";
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }
  var __contentCache = {};
  function SafeHtml({ html }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const clean = window.DOMPurify ? window.DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }) : "";
      const fragment = document.createRange().createContextualFragment(clean);
      el.replaceChildren(fragment);
    }, [html]);
    return /* @__PURE__ */ React.createElement("div", { ref, className: "article-content" });
  }
  function ArticlePage({ ctx }) {
    const { hashState, favorites, toggleFavorite, addRecent } = ctx;
    const [html, setHtml] = React.useState(null);
    const [error, setError] = React.useState(null);
    const category = window.CATEGORIES.find((c) => c.id === hashState.categoryId);
    const topic = category?.topics.find((t) => t.id === hashState.topicId);
    React.useEffect(() => {
      if (!topic) return;
      addRecent(topic.id);
      updateMeta(`${topic.title} | ${window.CONFIG?.siteNameShort || ""}`, topic.summary || "");
      updateJsonLd(topic, category);
      if (__contentCache[topic.id]) {
        setHtml(__contentCache[topic.id]);
        return;
      }
      const path = topic.contentPath;
      if (!path) {
        setError("\u672C\u6587\u5C1A\u7121\u5167\u5BB9\u6A94\u6848");
        return;
      }
      fetch(path).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      }).then((text) => {
        __contentCache[topic.id] = text;
        setHtml(text);
        setError(null);
      }).catch((e) => setError(`\u8F09\u5165\u5931\u6557\uFF1A${e.message}`));
    }, [topic?.id]);
    if (!category || !topic) {
      return /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "80px 24px" } }, "\u627E\u4E0D\u5230\u6B64\u6587\u7AE0");
    }
    const isFav = favorites.includes(topic.id);
    return /* @__PURE__ */ React.createElement("main", { className: "r-article-pad", style: { padding: "64px 24px" } }, /* @__PURE__ */ React.createElement("div", { className: "container r-article-grid", style: {
      display: "grid",
      gridTemplateColumns: "1fr 240px",
      gap: 64,
      alignItems: "start"
    } }, /* @__PURE__ */ React.createElement("article", { className: "r-article-body", style: { maxWidth: "var(--max-article)" } }, /* @__PURE__ */ React.createElement("a", { href: `#/${category.id}`, style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: category.tone,
      textDecoration: "none"
    } }, "\u2190 ", category.name), /* @__PURE__ */ React.createElement("h1", { className: "r-article-h1", style: {
      fontSize: "clamp(28px,3.2vw,40px)",
      fontWeight: 700,
      margin: "12px 0 20px",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "var(--fg-heading)"
    } }, topic.title), topic.summary && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 17, color: "var(--muted)", lineHeight: 1.7, margin: 0 } }, topic.summary), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      margin: "28px 0",
      paddingBottom: 24,
      borderBottom: "1px solid var(--border-soft)"
    } }, /* @__PURE__ */ React.createElement("button", { onClick: () => toggleFavorite(topic.id), "aria-pressed": isFav, style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      borderRadius: 999,
      border: "1px solid var(--border-soft)",
      background: isFav ? "rgba(232,150,97,0.12)" : "var(--bg)",
      color: isFav ? "var(--peach)" : "var(--muted)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement(Icon.Heart, { style: { width: 14, height: 14 } }), isFav ? "\u5DF2\u6536\u85CF" : "\u6536\u85CF"), topic.lastUpdated && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--muted-3)" } }, "\u6700\u5F8C\u66F4\u65B0\uFF1A", topic.lastUpdated)), error && /* @__PURE__ */ React.createElement("div", { className: "callout callout-danger" }, /* @__PURE__ */ React.createElement("strong", null, "\u8F09\u5165\u932F\u8AA4"), error), !error && html === null && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--muted)" } }, "\u8F09\u5165\u4E2D\u2026"), html !== null && /* @__PURE__ */ React.createElement(SafeHtml, { html })), /* @__PURE__ */ React.createElement("aside", { className: "r-article-toc", style: {
      position: "sticky",
      top: 100,
      fontSize: 13,
      color: "var(--muted)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, color: "var(--fg-heading)", marginBottom: 12 } }, "\u672C\u9801\u91CD\u9EDE"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--muted-3)", fontStyle: "italic" } }, "(\u81EA\u52D5\u76EE\u9304\u529F\u80FD\u5C07\u65BC\u5F8C\u7E8C\u52A0\u5165)"))));
  }
  function ContactPage({ ctx }) {
    return /* @__PURE__ */ React.createElement("main", { style: { padding: "64px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "0 24px", marginBottom: 40 } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 36, fontWeight: 700, color: "var(--fg-heading)", margin: "0 0 32px" } }, "\u806F\u7D61\u6211\u5011")), window.InfoSection && React.createElement(window.InfoSection));
  }
  function DoctorsPage() {
    const doctors = window.DOCTORS || [];
    const { h: _h } = { h: React.createElement };
    function Section({ label, items, hue }) {
      if (!items || items.length === 0) return null;
      return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.08em",
        color: hue,
        textTransform: "uppercase",
        marginBottom: 6
      } }, label), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, padding: "0 0 0 16px", listStyle: "disc" } }, items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { fontSize: 13, color: "var(--fg)", lineHeight: 1.7 } }, item))));
    }
    return /* @__PURE__ */ React.createElement("main", { style: { background: "var(--cream-1)", minHeight: "100vh", padding: "64px 0 80px" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { padding: "0 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--teal)", marginBottom: 8 } }, "DOCTORS \xB7 \u91AB\u5E2B\u5718\u968A"), /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 36, fontWeight: 700, color: "var(--fg-heading)", margin: 0 } }, "\u8A8D\u8B58\u60A8\u7684\u91AB\u5E2B")), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: 24
    } }, doctors.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id, style: {
      background: "#fff",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--border-soft)",
      display: "flex",
      flexDirection: "column"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: `linear-gradient(135deg, ${d.hue}18 0%, ${d.hue}08 100%)`,
      borderBottom: `3px solid ${d.hue}`,
      padding: "20px 24px 16px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: "var(--fg-heading)" } }, d.name, " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 400, color: "var(--muted)" } }, "\u91AB\u5E2B")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: d.hue, fontWeight: 600, marginTop: 4, lineHeight: 1.6 } }, d.title?.split(" \xB7 ").map((part, i) => /* @__PURE__ */ React.createElement("div", { key: i }, part)))), /* @__PURE__ */ React.createElement("div", { style: {
      background: `linear-gradient(160deg, ${d.hue}22 0%, ${d.hue}06 100%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px 0",
      borderBottom: "1px solid var(--border-soft)"
    } }, d.photo ? /* @__PURE__ */ React.createElement("img", { src: d.photo, alt: `${d.name} \u91AB\u5E2B`, style: {
      width: 240,
      height: 240,
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "top",
      border: `3px solid ${d.hue}44`,
      boxShadow: `0 8px 24px -8px ${d.hue}66`
    } }) : /* @__PURE__ */ React.createElement("div", { style: {
      width: 240,
      height: 240,
      borderRadius: "50%",
      background: `linear-gradient(160deg, ${d.hue} 0%, ${d.hue}bb 100%)`,
      display: "grid",
      placeItems: "center",
      boxShadow: `0 8px 24px -8px ${d.hue}66`
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 64, height: 64 } }, window.Illo && /* @__PURE__ */ React.createElement(window.Illo.Doctor, { tone: "rgba(255,255,255,0.85)" })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 24px 24px", flex: 1 } }, /* @__PURE__ */ React.createElement(Section, { label: "\u91AB\u5E2B\u7D93\u6B77", items: d.experience, hue: d.hue }), /* @__PURE__ */ React.createElement(Section, { label: "\u5C08\u79D1\u8CC7\u683C", items: d.certification, hue: d.hue }), /* @__PURE__ */ React.createElement(Section, { label: "\u5C08\u9577", items: d.specialty, hue: d.hue })))))));
  }
  Object.assign(window, { ListPage, ArticlePage, ContactPage, DoctorsPage });

  // src/components/app.jsx
  var { useState, useEffect, createElement: h, Fragment } = React;
  var { createRoot } = ReactDOM;
  function parseHash() {
    const raw = (window.location.hash || "#/").replace(/^#/, "");
    const parts = raw.split("/").filter(Boolean);
    if (parts.length === 0) return { route: "home" };
    if (parts[0] === "favorites") return { route: "list", view: "favorites" };
    if (parts[0] === "recent") return { route: "list", view: "recent" };
    if (parts[0] === "contact") return { route: "contact" };
    if (parts[0] === "doctors") return { route: "doctors" };
    if (parts.length === 1) return { route: "list", categoryId: parts[0] };
    return { route: "article", categoryId: parts[0], topicId: parts[1] };
  }
  function readLs(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  function writeLs(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {
    }
  }
  function App() {
    const [hashState, setHashState] = useState(parseHash);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [fontScale, setFontScale] = useState(() => localStorage.getItem("fontScale") || "normal");
    const [cvdMode, setCvdMode] = useState(() => localStorage.getItem("cvdMode") === "on");
    const [favorites, setFavorites] = useState(() => readLs("gx_favorites", []));
    const [recent, setRecent] = useState(() => readLs("gx_recent", []));
    useEffect(() => {
      const onHash = () => {
        setHashState(parseHash());
        window.scrollTo(0, 0);
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);
    useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    useEffect(() => {
      localStorage.setItem("fontScale", fontScale);
      document.documentElement.classList.toggle("senior", fontScale === "senior");
    }, [fontScale]);
    if (typeof document !== "undefined") {
      if (cvdMode) document.documentElement.setAttribute("data-cvd", "on");
      else document.documentElement.removeAttribute("data-cvd");
    }
    useEffect(() => {
      localStorage.setItem("cvdMode", cvdMode ? "on" : "off");
    }, [cvdMode]);
    useEffect(() => writeLs("gx_favorites", favorites), [favorites]);
    useEffect(() => writeLs("gx_recent", recent), [recent]);
    const toggleFavorite = (id) => setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    const addRecent = (id) => setRecent((prev) => [id, ...prev.filter((x) => x !== id)].slice(0, 10));
    const ctx = { theme, setTheme, fontScale, setFontScale, cvdMode, setCvdMode, favorites, toggleFavorite, recent, addRecent, hashState };
    const { Navbar: Navbar2, HomePage: HomePage2, ListPage: ListPage2, ArticlePage: ArticlePage2, ContactPage: ContactPage2, DoctorsPage: DoctorsPage2, Footer: Footer2 } = window;
    return h(
      Fragment,
      null,
      Navbar2 && h(Navbar2, { ctx }),
      hashState.route === "home" && HomePage2 && h(HomePage2, { ctx }),
      hashState.route === "list" && ListPage2 && h(ListPage2, { ctx }),
      hashState.route === "article" && ArticlePage2 && h(ArticlePage2, { ctx }),
      hashState.route === "contact" && ContactPage2 && h(ContactPage2, { ctx }),
      hashState.route === "doctors" && DoctorsPage2 && h(DoctorsPage2, { ctx }),
      Footer2 && h(Footer2, { ctx }),
      h(
        "button",
        {
          className: `a11y-fab ${cvdMode ? "on" : ""}`,
          onClick: () => setCvdMode((v) => !v),
          "aria-pressed": cvdMode,
          title: "\u5207\u63DB\u8272\u5F31\u53CB\u5584\u6A21\u5F0F"
        },
        h("span", { className: "dot", "aria-hidden": true }),
        `\u8272\u5F31\u53CB\u5584\u6A21\u5F0F${cvdMode ? " \xB7 \u5DF2\u958B\u555F" : ""}`
      )
    );
  }
  var rootEl = document.getElementById("root");
  if (rootEl) createRoot(rootEl).render(h(App));
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvbXBvbmVudHMvc2hhcmVkLmpzeCIsICIuLi9zcmMvY29tcG9uZW50cy9kYXRhLmpzeCIsICIuLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanN4IiwgIi4uL3NyYy9jb21wb25lbnRzL2hlcm9lcy5qc3giLCAiLi4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMuanN4IiwgIi4uL3NyYy9jb21wb25lbnRzL3BhZ2VzLmpzeCIsICIuLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBTaGFyZWQgaWNvbnMgYW5kIHNtYWxsIHByaW1pdGl2ZXMgZm9yIFx1NURFNVx1NUI3OFx1OEFBMFx1NUZDM1x1OEEzQVx1NjI0MFxuXG5jb25zdCBJY29uID0ge1xuICBTZWFyY2g6IChwKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucH0+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjdcIiAvPjxwYXRoIGQ9XCJtMjAgMjAtMy41LTMuNVwiIC8+XG4gICAgPC9zdmc+XG4gICksXG4gIE1lbnU6IChwKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHsuLi5wfT5cbiAgICAgIDxwYXRoIGQ9XCJNNCA3aDE2TTQgMTJoMTZNNCAxN2gxNlwiIC8+XG4gICAgPC9zdmc+XG4gICksXG4gIEFycm93UmlnaHQ6IChwKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucH0+XG4gICAgICA8cGF0aCBkPVwiTTUgMTJoMTRNMTMgNWw3IDctNyA3XCIgLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgQXJyb3dVcFJpZ2h0OiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnB9PlxuICAgICAgPHBhdGggZD1cIk03IDE3IDE3IDdNOCA3aDl2OVwiIC8+XG4gICAgPC9zdmc+XG4gICksXG4gIFBob25lOiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnB9PlxuICAgICAgPHBhdGggZD1cIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuOCAxOS44IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02QTE5LjggMTkuOCAwIDAgMSAyLjEyIDQuMTggMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuOCAxMi44IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44IDEyLjggMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MlpcIiAvPlxuICAgIDwvc3ZnPlxuICApLFxuICBDbG9jazogKHApID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wfT5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOVwiIC8+PHBhdGggZD1cIk0xMiA3djVsMyAyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgUGluOiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnB9PlxuICAgICAgPHBhdGggZD1cIk0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFpcIiAvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTBcIiByPVwiM1wiIC8+XG4gICAgPC9zdmc+XG4gICksXG4gIENhbGVuZGFyOiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnB9PlxuICAgICAgPHJlY3QgeD1cIjNcIiB5PVwiNVwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMlwiLz48cGF0aCBkPVwiTTMgMTBoMThNOCAzdjRNMTYgM3Y0XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBQbHVzOiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiB7Li4ucH0+XG4gICAgICA8cGF0aCBkPVwiTTEyIDV2MTRNNSAxMmgxNFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgTWludXM6IChwKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHsuLi5wfT5cbiAgICAgIDxwYXRoIGQ9XCJNNSAxMmgxNFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgTGluZTogKHApID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgey4uLnB9PlxuICAgICAgPHBhdGggZD1cIk0xOSA0SDVhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDN2M2w0LTNoN2EyIDIgMCAwIDAgMi0yVjZhMiAyIDAgMCAwLTItMlptLTkgOUg4di00aDJ2NFptNCAwaC0yVjloMnY0Wm00IDBoLTJWOWgydjRaXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBIZWFydDogKHApID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wfT5cbiAgICAgIDxwYXRoIGQ9XCJNMjAuODQgNC42MWE1LjUgNS41IDAgMCAwLTcuNzggMEwxMiA1LjY3bC0xLjA2LTEuMDZhNS41IDUuNSAwIDAgMC03Ljc4IDcuNzhsMS4wNiAxLjA2TDEyIDIxLjIzbDcuNzgtNy43OCAxLjA2LTEuMDZhNS41IDUuNSAwIDAgMCAwLTcuNzhaXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBCb29rbWFyazogKHApID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wfT5cbiAgICAgIDxwYXRoIGQ9XCJtMTkgMjEtNy01LTcgNVY1YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNnpcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIENoZXZyb246IChwKSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucH0+XG4gICAgICA8cGF0aCBkPVwibTYgOSA2IDYgNi02XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBYOiAocCkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiB7Li4ucH0+XG4gICAgICA8cGF0aCBkPVwiTTYgNmwxMiAxMk0xOCA2IDYgMThcIi8+XG4gICAgPC9zdmc+XG4gICksXG59O1xuXG4vLyBDbGluaWMgbG9nbyAtIHJlYWwgcmFzdGVyIGxvZ29cbmZ1bmN0aW9uIENsaW5pY01hcmsoeyBzaXplID0gNDAgfSkge1xuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz1cIi4vYXNzZXRzL2xvZ28uanBnXCJcbiAgICAgIGFsdD1cIlx1OEFBMFx1NUZDM1x1OTFBQlx1NzY0Mlx1OUFENFx1N0NGQlx1NURFNVx1NUI3OFx1OEEzQVx1NjI0MFwiXG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIGJvcmRlclJhZGl1czogMTAsIG9iamVjdEZpdDogJ2NvbnRhaW4nLCBiYWNrZ3JvdW5kOiAnI2ZmZicgfX1cbiAgICAvPlxuICApO1xufVxuXG4vLyBMaW5lIGlsbHVzdHJhdGlvbnMgXHUyMDE0IHVzZWQgdGhyb3VnaG91dCB0aGUgc2l0ZVxuY29uc3QgSWxsbyA9IHtcbiAgU3RldGhvc2NvcGU6ICh7IHRvbmUgPSAnIzBhNGQ0ZCcgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMjAgMTIwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e3RvbmV9IHN0cm9rZVdpZHRoPVwiMi4yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHBhdGggZD1cIk0zMCAyMHYyOGExOCAxOCAwIDAgMCAzNiAwVjIwXCIvPlxuICAgICAgPHBhdGggZD1cIk0zMCAyMGgtNk02NiAyMGg2XCIvPlxuICAgICAgPHBhdGggZD1cIk00OCA2NnYxMGExOCAxOCAwIDAgMCAzNiAwdi00XCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI2NFwiIHI9XCI4XCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI2NFwiIHI9XCIzXCIgZmlsbD17dG9uZX0gc3Ryb2tlPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgUGlsbHM6ICh7IHRvbmUgPSAnIzBhNGQ0ZCcgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMjAgMTIwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e3RvbmV9IHN0cm9rZVdpZHRoPVwiMi4yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHJlY3QgeD1cIjE2XCIgeT1cIjQ0XCIgd2lkdGg9XCI1NlwiIGhlaWdodD1cIjI4XCIgcng9XCIxNFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMjAgNDQgNTgpXCIvPlxuICAgICAgPHBhdGggZD1cIk0zMiAzNiA1NiA2OFwiIC8+XG4gICAgICA8Y2lyY2xlIGN4PVwiODZcIiBjeT1cIjc4XCIgcj1cIjE4XCIvPlxuICAgICAgPHBhdGggZD1cIk03NCA3MmgyNFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgSGVhcnRiZWF0OiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgNjJoMjJsOC0xNiAxMCAzMiAxMC0yNCA2IDhoNDRcIi8+XG4gICAgICA8cGF0aCBkPVwiTTYwIDk0YzE4LTEyIDM4LTI2IDM4LTQ2YTE0IDE0IDAgMCAwLTI2LTYgMTQgMTQgMCAwIDAtMjYgNmMwIDYgMiAxMiA2IDE4XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBMZWFmOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNOTggMjBDNTYgMjIgMjYgNDggMjQgODhjMCA4IDQgMTIgMTIgMTIgNDAtMiA2Ni0zNCA2OC03MiAwLTQtMi04LTYtOFpcIi8+XG4gICAgICA8cGF0aCBkPVwiTTM2IDEwMCA4NCA0NFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgU2hpZWxkOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNNjAgMTQgMjIgMjh2MjhjMCAyMiAxNiA0MiAzOCA1MCAyMi04IDM4LTI4IDM4LTUwVjI4TDYwIDE0WlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDggNjBsOCA4IDE4LTE4XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBUaGVybW9tZXRlcjogKHsgdG9uZSA9ICcjMGE0ZDRkJyB9KSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEyMCAxMjBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17dG9uZX0gc3Ryb2tlV2lkdGg9XCIyLjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cGF0aCBkPVwiTTYyIDE0YTEwIDEwIDAgMCAxIDEwIDEwdjQ2YTE0IDE0IDAgMSAxLTIwIDBWMjRhMTAgMTAgMCAwIDEgMTAtMTBaXCIvPlxuICAgICAgPHBhdGggZD1cIk02MiAzMHY0MFwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCI2MlwiIGN5PVwiODRcIiByPVwiNlwiIGZpbGw9e3RvbmV9IHN0cm9rZT1cIm5vbmVcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEx1bmdzOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNNjAgMTZ2NDhcIi8+XG4gICAgICA8cGF0aCBkPVwiTTYwIDI4Yy04IDgtMjggMTQtMzIgMzAtNCAxNiAyIDM0IDE0IDM2IDEwIDIgMTQtNiAxOC0xOFwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNjAgMjhjOCA4IDI4IDE0IDMyIDMwIDQgMTYtMiAzNC0xNCAzNi0xMCAyLTE0LTYtMTgtMThcIi8+XG4gICAgICA8cGF0aCBkPVwiTTU0IDE4aDEyXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBCYWJ5OiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCI2MFwiIGN5PVwiNDRcIiByPVwiMjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiNTJcIiBjeT1cIjQ0XCIgcj1cIjJcIiBmaWxsPXt0b25lfSBzdHJva2U9XCJub25lXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjY4XCIgY3k9XCI0NFwiIHI9XCIyXCIgZmlsbD17dG9uZX0gc3Ryb2tlPVwibm9uZVwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNTQgNTJjMiA0IDEwIDQgMTIgMFwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzIgMTAwYzQtMTYgMTQtMjYgMjgtMjZzMjQgMTAgMjggMjZcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEFwcGxlOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNNjAgMzRjNi02IDE4LTEwIDI2LTYgOCA0IDEyIDE2IDEwIDI4LTIgMTItMTAgMzAtMjIgMzgtNCAyLTEwIDItMTQgMC0xMi04LTIwLTI2LTIyLTM4LTItMTIgMi0yNCAxMC0yOCA4LTQgMjAgMCAyNiA2XCIvPlxuICAgICAgPHBhdGggZD1cIk02MCAzNGMtMi04IDQtMTYgMTItMThcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEJvbmU6ICh7IHRvbmUgPSAnIzBhNGQ0ZCcgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMjAgMTIwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e3RvbmV9IHN0cm9rZVdpZHRoPVwiMi4yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHBhdGggZD1cIk0zMCAzMGMtNiAwLTEwIDQtMTAgMTAgMCA0IDIgNiA0IDgtMiAyLTQgNC00IDggMCA2IDQgMTAgMTAgMTAgNCAwIDYtMiA4LTRsNDAgNDBjMiAyIDQgNCA4IDQgNiAwIDEwLTQgMTAtMTAgMC00LTItNi00LTggMi0yIDQtNCA0LTggMC02LTQtMTAtMTAtMTAtNCAwLTYgMi04IDRMMzggMzRjLTItMi00LTQtOC00WlwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgRG9jdG9yOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCI2MFwiIGN5PVwiMzZcIiByPVwiMTRcIi8+XG4gICAgICA8cGF0aCBkPVwiTTMyIDEwMGMyLTE4IDE0LTI4IDI4LTI4czI2IDEwIDI4IDI4XCIvPlxuICAgICAgPHBhdGggZD1cIk00NiA3NHYxNk03NCA3NHYxNlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDYgODJoMjhcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiNjBcIiBjeT1cIjkwXCIgcj1cIjNcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEZhbWlseTogKHsgdG9uZSA9ICcjMGE0ZDRkJyB9KSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEyMCAxMjBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17dG9uZX0gc3Ryb2tlV2lkdGg9XCIyLjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMzZcIiBjeT1cIjQyXCIgcj1cIjEyXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI0MlwiIHI9XCIxMlwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCI2MFwiIGN5PVwiNjRcIiByPVwiOFwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTQgMTAyYzItMTYgMTAtMjYgMjItMjZzMjAgMTAgMjIgMjZcIi8+XG4gICAgICA8cGF0aCBkPVwiTTYyIDEwMmMyLTE2IDEwLTI2IDIyLTI2czIwIDEwIDIyIDI2XCIvPlxuICAgICAgPHBhdGggZD1cIk00OCAxMDJjMi0xMCA2LTE2IDEyLTE2czEwIDYgMTIgMTZcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIFZpcnVzOiAoeyB0b25lID0gJyMwYTRkNGQnIH0pID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXt0b25lfSBzdHJva2VXaWR0aD1cIjIuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCI2MFwiIGN5PVwiNjBcIiByPVwiMjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiNjBcIiBjeT1cIjYwXCIgcj1cIjRcIiBmaWxsPXt0b25lfSBzdHJva2U9XCJub25lXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjQ4XCIgY3k9XCI1NFwiIHI9XCIyLjVcIiBmaWxsPXt0b25lfSBzdHJva2U9XCJub25lXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjcyXCIgY3k9XCI2NlwiIHI9XCIyLjVcIiBmaWxsPXt0b25lfSBzdHJva2U9XCJub25lXCIvPlxuICAgICAge1swLDQ1LDkwLDEzNSwxODAsMjI1LDI3MCwzMTVdLm1hcChhID0+IHtcbiAgICAgICAgY29uc3QgcmFkID0gYSpNYXRoLlBJLzE4MDtcbiAgICAgICAgY29uc3QgeDEgPSA2MCArIE1hdGguY29zKHJhZCkqMjIsIHkxID0gNjAgKyBNYXRoLnNpbihyYWQpKjIyO1xuICAgICAgICBjb25zdCB4MiA9IDYwICsgTWF0aC5jb3MocmFkKSozNCwgeTIgPSA2MCArIE1hdGguc2luKHJhZCkqMzQ7XG4gICAgICAgIGNvbnN0IGN4ID0gNjAgKyBNYXRoLmNvcyhyYWQpKjM4LCBjeSA9IDYwICsgTWF0aC5zaW4ocmFkKSozODtcbiAgICAgICAgcmV0dXJuIDxnIGtleT17YX0+PHBhdGggZD17YE0ke3gxfSAke3kxfSAke3gyfSAke3kyfWB9Lz48Y2lyY2xlIGN4PXtjeH0gY3k9e2N5fSByPVwiM1wiLz48L2c+O1xuICAgICAgfSl9XG4gICAgPC9zdmc+XG4gICksXG59O1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBJY29uLCBJbGxvLCBDbGluaWNNYXJrIH0pO1xuIiwgImZ1bmN0aW9uIGNvbXB1dGVGZWVkKCkge1xuICBjb25zdCBDQVRFR09SSUVTID0gd2luZG93LkNBVEVHT1JJRVMgfHwgW107XG4gIGNvbnN0IGFsbCA9IENBVEVHT1JJRVMuZmxhdE1hcChjYXQgPT5cbiAgICAoY2F0LnRvcGljcyB8fCBbXSkubWFwKHQgPT4gKHtcbiAgICAgIC4uLnQsIHRhZzogY2F0Lm5hbWUsIGNhdGVnb3J5SWQ6IGNhdC5pZCwgYWNjZW50OiBjYXQudG9uZSxcbiAgICB9KSlcbiAgKS5zb3J0KChhLCBiKSA9PiAoYi5sYXN0VXBkYXRlZCB8fCAnJykubG9jYWxlQ29tcGFyZShhLmxhc3RVcGRhdGVkIHx8ICcnKSk7XG4gIHJldHVybiB7IEZFQVRVUkVEOiBhbGwuc2xpY2UoMCwgMyksIExBVEVTVDogYWxsLnNsaWNlKDMsIDkpIH07XG59XG5jb25zdCB7IEZFQVRVUkVELCBMQVRFU1QgfSA9IGNvbXB1dGVGZWVkKCk7XG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBfX2RhdGE6IHsgRkVBVFVSRUQsIExBVEVTVCB9IH0pO1xuIiwgIi8vIE5hdiBiYXIgXHUyMDE0IHN0aWNreSwgYW5ub3VuY2VtZW50IHN0cmlwLCBtZWdhLW1lbnUgb24gXHU4ODVCXHU2NTU5XHU1QzA4XHU1MzQwXG5cbmZ1bmN0aW9uIFRvcFN0cmlwKCkge1xuICBjb25zdCBwaG9uZSAgID0gd2luZG93LkNPTkZJRz8uY29udGFjdD8ucGhvbmU7XG4gIGNvbnN0IGFkZHJlc3MgPSB3aW5kb3cuQ09ORklHPy5jb250YWN0Py5hZGRyZXNzO1xuICBjb25zdCBsaW5lVXJsID0gd2luZG93LkNPTkZJRz8uY29udGFjdD8ubGluZVVybDtcblxuICBjb25zdCB0b2RheVN0YXR1cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGhvdXJzID0gd2luZG93LkhPVVJTIHx8IFtdO1xuICAgIGNvbnN0IGRheU5hbWVzID0gWydcdTY2MUZcdTY3MUZcdTY1RTUnLCdcdTY2MUZcdTY3MUZcdTRFMDAnLCdcdTY2MUZcdTY3MUZcdTRFOEMnLCdcdTY2MUZcdTY3MUZcdTRFMDknLCdcdTY2MUZcdTY3MUZcdTU2REInLCdcdTY2MUZcdTY3MUZcdTRFOTQnLCdcdTY2MUZcdTY3MUZcdTUxNkQnXTtcblxuICAgIC8vIEdNVCs4IGN1cnJlbnQgdGltZVxuICAgIGNvbnN0IGdtdDggPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgKDggKiA2MCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MDAwMCk7XG4gICAgY29uc3Qgbm93TWluID0gZ210OC5nZXRIb3VycygpICogNjAgKyBnbXQ4LmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCB0b2RheU5hbWUgPSBkYXlOYW1lc1tnbXQ4LmdldERheSgpXTtcblxuICAgIGNvbnN0IGVudHJ5ID0gaG91cnMuZmluZChoID0+IGguZGF5ID09PSB0b2RheU5hbWUpO1xuICAgIGlmICghZW50cnkpIHJldHVybiBudWxsO1xuICAgIGlmIChbZW50cnkuYW0sIGVudHJ5LnBtLCBlbnRyeS5ldl0uZXZlcnkodiA9PiAhdiB8fCB2ID09PSAnVE9ETycpKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHBhcnNlTWluID0gcyA9PiB7IGNvbnN0IFtoLCBtXSA9IHMudHJpbSgpLnNwbGl0KCc6JykubWFwKE51bWJlcik7IHJldHVybiBoICogNjAgKyBtOyB9O1xuICAgIGNvbnN0IGlzVmFsaWQgPSB2ID0+IHYgJiYgdiAhPT0gJ1x1NEYxMVx1OEEzQScgJiYgdiAhPT0gJ1RPRE8nO1xuXG4gICAgY29uc3Qgc2Vzc2lvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnXHU0RTBBXHU1MzQ4XHU4QTNBJywgdGltZTogZW50cnkuYW0gfSxcbiAgICAgIHsgbGFiZWw6ICdcdTRFMEJcdTUzNDhcdThBM0EnLCB0aW1lOiBlbnRyeS5wbSB9LFxuICAgICAgeyBsYWJlbDogJ1x1NjY1QVx1OEEzQScsICAgdGltZTogZW50cnkuZXYgfSxcbiAgICBdO1xuXG4gICAgbGV0IGhhc0FueVNlc3Npb24gPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHMgb2Ygc2Vzc2lvbnMpIHtcbiAgICAgIGlmICghaXNWYWxpZChzLnRpbWUpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHBhcnRzID0gcy50aW1lLnNwbGl0KCdcdTIwMTMnKTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBjb250aW51ZTtcbiAgICAgIGhhc0FueVNlc3Npb24gPSB0cnVlO1xuICAgICAgaWYgKG5vd01pbiA+PSBwYXJzZU1pbihwYXJ0c1swXSkgJiYgbm93TWluIDwgcGFyc2VNaW4ocGFydHNbMV0pKSB7XG4gICAgICAgIHJldHVybiB7IG9wZW46IHRydWUsIGxhYmVsOiBzLmxhYmVsIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGhhcyBzZXNzaW9ucyB0b2RheSBidXQgbm90IGN1cnJlbnRseSBpbiBvbmUgdnMuIGZ1bGwgZGF5IG9mZlxuICAgIHJldHVybiB7IG9wZW46IGZhbHNlLCBhbGxEYXk6ICFoYXNBbnlTZXNzaW9uIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwici1uYXYtdG9wc3RyaXBcIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjdmNCAwJSwgI2U0ZWRlOSAxMDAlKScsIGNvbG9yOiAnIzVhNzM3MCcsXG4gICAgICBmb250U2l6ZTogMTMsIGxldHRlclNwYWNpbmc6IDAuMiwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjRweCcsIGdhcDogMjQsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTgsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgIHtwaG9uZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBnYXA6IDYsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8SWNvbi5QaG9uZSBzdHlsZT17eyB3aWR0aDogMTQsIGhlaWdodDogMTQsIG9wYWNpdHk6IDAuODUgfX0vPlxuICAgICAgICAgICAgICB7cGhvbmV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWRkcmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBnYXA6IDYsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8SWNvbi5QaW4gc3R5bGU9e3sgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0LCBvcGFjaXR5OiAwLjg1IH19Lz5cbiAgICAgICAgICAgICAge2FkZHJlc3N9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dG9kYXlTdGF0dXMgJiYgKFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgZ2FwOiA2LCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6IHRvZGF5U3RhdHVzLm9wZW4gPyAndmFyKC0tZ29sZCknIDogJyM1YTczNzAnIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2LCBoZWlnaHQ6IDYsIGJvcmRlclJhZGl1czogOTksIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdG9kYXlTdGF0dXMub3BlbiA/ICcjNGZiMzlhJyA6ICcjYWFhJyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHRvZGF5U3RhdHVzLm9wZW4gPyAnMCAwIDAgNHB4IHJnYmEoNzksMTc5LDE1NCwwLjI1KScgOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAge3RvZGF5U3RhdHVzLm9wZW4gPyBgXHU0RUNBXHU2NUU1XHU5NTgwXHU4QTNBXHU0RTJEIFx1MDBCNyAke3RvZGF5U3RhdHVzLmxhYmVsfWAgOiB0b2RheVN0YXR1cy5hbGxEYXkgPyAnXHU0RUNBXHU2NUU1XHU0RjExXHU4QTNBJyA6ICdcdTRGMTFcdThBM0FcdTRFMkQnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxOCwgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xpbmVVcmwgJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bGluZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIHN0eWxlPXtsaW5rU3R5bGV9PkxJTkUgXHU1Qjk4XHU2NUI5XHU1RTMzXHU4NjVGPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCBsaW5rU3R5bGUgPSB7IGNvbG9yOiAnIzVhNzM3MCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIG9wYWNpdHk6IDAuOSB9O1xuXG5jb25zdCBOQVYgPSBbXG4gIHsga2V5OiAnZWR1JywgICAgIGxhYmVsOiAnXHU4ODVCXHU2NTU5XHU1QzA4XHU1MzQwJywgbWVnYTogdHJ1ZSwgdGFyZ2V0OiAnIy8nIH0sXG4gIHsga2V5OiAnZG9jdG9ycycsIGxhYmVsOiAnXHU5MUFCXHU1RTJCXHU1NzE4XHU5NjhBJywgdGFyZ2V0OiAnIy9kb2N0b3JzJyB9LFxuICB7IGtleTogJ2luZm8nLCAgICBsYWJlbDogJ1x1OTU4MFx1OEEzQVx1OENDN1x1OEEwQScsIHNjcm9sbFRvOiAnaW5mbycgfSxcbiAgeyBrZXk6ICdmYXEnLCAgICAgbGFiZWw6ICdcdTVFMzhcdTg5OEJcdTU1NEZcdTdCNTQnLCBzY3JvbGxUbzogJ2ZhcScgfSxcbiAgeyBrZXk6ICdjb250YWN0JywgbGFiZWw6ICdcdTgwNkZcdTdENjFcdTYyMTFcdTUwMTEnLCBzY3JvbGxUbzogJ2luZm8nIH0sXG5dO1xuXG5mdW5jdGlvbiBOYXZiYXIoeyBjdHggfSkge1xuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSwgZm9udFNjYWxlLCBzZXRGb250U2NhbGUsIGZhdm9yaXRlcyB9ID0gY3R4O1xuICBjb25zdCBjdXJyZW50ID0gY3R4Lmhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2xpc3QnID8gJ2VkdScgOiAnJztcblxuICBjb25zdCBbb3Blbk1lZ2EsIHNldE9wZW5NZWdhXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xvc2VUaW1lciA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBzY2hlZHVsZU1lZ2FDbG9zZSA9ICgpID0+IHtcbiAgICBjbG9zZVRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHNldE9wZW5NZWdhKGZhbHNlKSwgMTUwKTtcbiAgfTtcbiAgY29uc3QgY2FuY2VsTWVnYUNsb3NlID0gKCkgPT4ge1xuICAgIGlmIChjbG9zZVRpbWVyLmN1cnJlbnQpIHsgY2xlYXJUaW1lb3V0KGNsb3NlVGltZXIuY3VycmVudCk7IGNsb3NlVGltZXIuY3VycmVudCA9IG51bGw7IH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gKCkgPT4geyBpZiAoY2xvc2VUaW1lci5jdXJyZW50KSBjbGVhclRpbWVvdXQoY2xvc2VUaW1lci5jdXJyZW50KTsgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb24gPSAoKSA9PiBzZXRTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDgpO1xuICAgIG9uKCk7IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbik7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBkcmF3ZXJPcGVuID8gJ2hpZGRlbicgOiAnJztcbiAgICByZXR1cm4gKCkgPT4geyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7IH07XG4gIH0sIFtkcmF3ZXJPcGVuXSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsTmF2ID0gKGUsIHNjcm9sbFRvKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERyYXdlck9wZW4oZmFsc2UpO1xuICAgIGlmIChjdHguaGFzaFN0YXRlLnJvdXRlID09PSAnaG9tZScpIHtcbiAgICAgIHNjcm9sbFRvSWQoc2Nyb2xsVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuX19zY3JvbGxUYXJnZXQgPSBzY3JvbGxUbztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAwLCB6SW5kZXg6IDUwIH19PlxuICAgICAgPFRvcFN0cmlwLz5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmZlZScsIGJhY2tkcm9wRmlsdGVyOiAnc2F0dXJhdGUoMTQwJSkgYmx1cig4cHgpJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBzY3JvbGxlZCA/ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyA6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIC4ycycsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgci1uYXYtZ3JpZFwiIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAnYXV0byAxZnIgYXV0bycsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNHB4IDI0cHgnLCBnYXA6IDMyLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7LyogTG9nbyBibG9jayAqL31cbiAgICAgICAgICA8YSBocmVmPVwiIy9cIlxuICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiwgYWxpZ25JdGVtczogJ2NlbnRlcicsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ29fcGljLmpwZ1wiIGFsdD1cIlx1NURFNVx1NUI3OFx1OEFBMFx1NUZDM1x1OEEzQVx1NjI0MFwiIHN0eWxlPXt7IHdpZHRoOiA0NCwgaGVpZ2h0OiA0NCwgb2JqZWN0Rml0OiAnY29udGFpbicgfX0vPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBsaW5lSGVpZ2h0OiAxLjEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1sb2dvLXRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBsZXR0ZXJTcGFjaW5nOiAnMC4wMmVtJyB9fT5cbiAgICAgICAgICAgICAgICBcdTVERTVcdTVCNzhcdThBQTBcdTVGQzNcdThBM0FcdTYyNDBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1sb2dvLXN1YlwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6ICd2YXIoLS10ZWFsLTIpJywgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4xOGVtJywgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICAgICAgICAgIEdPTkdYVUUgRkFNSUxZIENMSU5JQ1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIHsvKiBQcmltYXJ5IG5hdiBcdTIwMTQgaGlkZXMgb24gbW9iaWxlICovfVxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwici1uYXYtcHJpbWFyeVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBnYXA6IDQgfX1cbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17c2NoZWR1bGVNZWdhQ2xvc2V9PlxuICAgICAgICAgICAge05BVi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGN1cnJlbnQgPT09IGl0ZW0ua2V5O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGtleT17aXRlbS5rZXl9IGhyZWY9e2l0ZW0uc2Nyb2xsVG8gPyAnIy8nIDogaXRlbS50YXJnZXR9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHsgY2FuY2VsTWVnYUNsb3NlKCk7IHNldE9wZW5NZWdhKGl0ZW0ubWVnYSA/IGl0ZW0ua2V5IDogZmFsc2UpOyB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2Nyb2xsVG8pIHsgaGFuZGxlU2Nyb2xsTmF2KGUsIGl0ZW0uc2Nyb2xsVG8pOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLm1lZ2EpIHNldE9wZW5NZWdhKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JywgYm9yZGVyUmFkaXVzOiA4LCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gJ3ZhcigtLXRlYWwpJyA6ICd2YXIoLS1mZy1oZWFkaW5nKScsIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gJ3JnYmEoNzQsMTU4LDE0OCwwLjEwKScgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGdhcDogNCwgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIC4xNXMnLFxuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm1lZ2EgJiYgPEljb24uQ2hldnJvbiBzdHlsZT17eyB3aWR0aDogMTQsIGhlaWdodDogMTQsIG9wYWNpdHk6IDAuNSB9fS8+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgey8qIENUQSBjbHVzdGVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jdGEtY2x1c3RlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIHsvKiBUaGVtZSB0b2dnbGUgKi99XG4gICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJcdTUyMDdcdTYzREJcdTRFM0JcdTk4NENcIiB0aXRsZT1cIlx1NTIwN1x1NjNEQlx1NEVBRS9cdTY2OTdcdTRFM0JcdTk4NENcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uQnRufT5cbiAgICAgICAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyAnXHUyNjAwJyA6ICdcdUQ4M0NcdURGMTknfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogRm9udC1zY2FsZSB0b2dnbGUgKi99XG4gICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJcdTUyMDdcdTYzREJcdTVCNTdcdTdEMUFcIiB0aXRsZT1cIlx1NTIwN1x1NjNEQlx1NkExOVx1NkU5Ni9cdTk1NzdcdThGMjlcdTVCNTdcdTdEMUFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGb250U2NhbGUoZm9udFNjYWxlID09PSAnc2VuaW9yJyA/ICdub3JtYWwnIDogJ3NlbmlvcicpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5pY29uQnRuLCBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiBmb250U2NhbGUgPT09ICdzZW5pb3InID8gMTggOiAxNCB9fT5cbiAgICAgICAgICAgICAgQVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogRmF2b3JpdGVzIGxpbmsgd2l0aCBiYWRnZSAqL31cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL2Zhdm9yaXRlc1wiIGFyaWEtbGFiZWw9e2BcdTYyMTFcdTc2ODRcdTY1MzZcdTg1Q0ZcdUZGMDgke2Zhdm9yaXRlcy5sZW5ndGh9IFx1N0JDN1x1RkYwOWB9XG4gICAgICAgICAgICAgICBzdHlsZT17eyAuLi5pY29uQnRuLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgPEljb24uSGVhcnQgc3R5bGU9e3sgd2lkdGg6IDE4LCBoZWlnaHQ6IDE4IH19Lz5cbiAgICAgICAgICAgICAge2Zhdm9yaXRlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogLTQsIHJpZ2h0OiAtNCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1wZWFjaCknLCBjb2xvcjogJyNmZmYnLCBib3JkZXJSYWRpdXM6IDk5LFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLCBmb250V2VpZ2h0OiA3MDAsIG1pbldpZHRoOiAxOCwgaGVpZ2h0OiAxOCxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcwIDRweCcsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICB7ZmF2b3JpdGVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7LyogTElORSBDVEEgXHUyMDE0IG9ubHkgaWYgbGluZVVybCBpcyBzZXQgKi99XG4gICAgICAgICAgICB7d2luZG93LkNPTkZJRz8uY29udGFjdD8ubGluZVVybCAmJiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3dpbmRvdy5DT05GSUcuY29udGFjdC5saW5lVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JywgYmFja2dyb3VuZDogJyMwNkM3NTUnLCBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8SWNvbi5MaW5lIHN0eWxlPXt7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9fS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwici1jdGEtdGV4dFwiPkxJTkUgXHU5ODEwXHU3RDA0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIEhhbWJ1cmdlciBcdTIwMTQgc2hvd3Mgb24gdGFibGV0ICYgbW9iaWxlIG9ubHkgKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInItbmF2LWhhbWJ1cmdlclwiIG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4odHJ1ZSl9IGFyaWEtbGFiZWw9XCJcdTk1OEJcdTU1NUZcdTkwNzhcdTU1QUVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5pY29uQnRuLCBtYXJnaW5MZWZ0OiAyIH19PlxuICAgICAgICAgICAgICA8SWNvbi5NZW51IHN0eWxlPXt7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9fS8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1lZ2EgbWVudSAqL31cbiAgICAgICAge29wZW5NZWdhID09PSAnZWR1JyAmJiAoXG4gICAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2NhbmNlbE1lZ2FDbG9zZX0gb25Nb3VzZUxlYXZlPXtzY2hlZHVsZU1lZ2FDbG9zZX1cbiAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogJzEwMCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLCBib3JkZXJUb3A6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMjBweCA0MHB4IC0yMHB4IHJnYmEoMTUsNDIsNjYsMC4xOCknLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnMjhweCAyNHB4JyB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyLW1lZ2EtZ3JpZFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDMsIDFmciknLCBnYXA6IDQsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHsod2luZG93LkNBVEVHT1JJRVMgfHwgW10pLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IEkgPSBJbGxvW2MuaWNvbl07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2MuaWR9IGhyZWY9e2AjLyR7Yy5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTWVnYShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXttZWdhQ2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYCR7Yy50b25lfTE1YCwgZGlzcGxheTogJ2dyaWQnLCBwbGFjZUl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyOCwgaGVpZ2h0OiAyOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge0kgPyA8SSB0b25lPXtjLnRvbmV9Lz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgZm9udFNpemU6IDE1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Yy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW11dGVkLTMpJywgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA2LCBmb250U2l6ZTogMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjLnRvcGljcyB8fCBbXSkubGVuZ3RofSBcdTdCQzdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScsIG1hcmdpblRvcDogMiB9fT57Yy5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgZHJhd2VyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2JpbGUtZHJhd2VyICR7ZHJhd2VyT3BlbiA/ICdvcGVuJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZHJhd2VyLXBhbmVsXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE2cHggMjBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTAsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ29fcGljLmpwZ1wiIGFsdD1cIlx1NURFNVx1NUI3OFx1OEFBMFx1NUZDM1x1OEEzQVx1NjI0MFwiIHN0eWxlPXt7IHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiwgb2JqZWN0Rml0OiAnY29udGFpbicgfX0vPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJyB9fT5cdTVERTVcdTVCNzhcdThBQTBcdTVGQzNcdThBM0FcdTYyNDA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX0gYXJpYS1sYWJlbD1cIlx1OTVEQ1x1OTU4OVwiIHN0eWxlPXt7IC4uLmljb25CdG4sIHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiB9fT5cbiAgICAgICAgICAgICAgPEljb24uWCBzdHlsZT17eyB3aWR0aDogMTYsIGhlaWdodDogMTYgfX0vPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5hdiBzdHlsZT17eyBwYWRkaW5nOiAxMiB9fT5cbiAgICAgICAgICAgIHsvKiBNYWluIG5hdiBpdGVtcyAqL31cbiAgICAgICAgICAgIHtOQVYuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubWVnYSkubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnNjcm9sbFRvID8gJyMvJyA6IGl0ZW0udGFyZ2V0fVxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNjcm9sbFRvKSB7IGhhbmRsZVNjcm9sbE5hdihlLCBpdGVtLnNjcm9sbFRvKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgc2V0RHJhd2VyT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJywgcGFkZGluZzogJzE0cHggMTZweCcsIGJvcmRlclJhZGl1czogMTAsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzhweCAxNnB4JywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScgfX0vPlxuICAgICAgICAgICAgey8qIFx1ODg1Qlx1NjU1OVx1NTIwNlx1OTg1RSAqL31cbiAgICAgICAgICAgIHsod2luZG93LkNBVEVHT1JJRVMgfHwgW10pLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY291bnQgPSAoYy50b3BpY3MgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e2MuaWR9IGhyZWY9e2AjLyR7Yy5pZH1gfVxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCBwYWRkaW5nOiAnMTRweCAxNnB4JywgYm9yZGVyUmFkaXVzOiAxMCwgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIHtjLm5hbWV9ICh7Y291bnR9KVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb0lkKGlkKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAoIWVsKSByZXR1cm47XG4gIGNvbnN0IG5hdkggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKT8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIGNvbnN0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gbmF2SCAtIDE2O1xuICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn1cblxuY29uc3QgaWNvbkJ0biA9IHtcbiAgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBib3JkZXJSYWRpdXM6IDk5LCBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIGN1cnNvcjogJ3BvaW50ZXInLFxuICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLFxufTtcbmNvbnN0IG1lZ2FDZWxsID0ge1xuICBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTIsIHBhZGRpbmc6ICcxMnB4IDE0cHgnLCBib3JkZXJSYWRpdXM6IDEwLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAuMTVzJyxcbiAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxufTtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgTmF2YmFyIH0pO1xuIiwgIi8vIEhlcm9CaWcgY29tcG9uZW50IFx1MjAxNCBoZWFkbGluZSwgc3RhdHMsIHBlYWNoIGlsbHVzdHJhdGlvbiBjb2xsYWdlXG5cbmZ1bmN0aW9uIEhlcm9CaWcoeyBjdHggfSkge1xuICAvLyBDb21wdXRlIHRvcGljIGNvdW50IGR5bmFtaWNhbGx5XG4gIGNvbnN0IHRvcGljQ291bnQgPSB3aW5kb3cuQ0FURUdPUklFUy5yZWR1Y2UoKGEsIGMpID0+IGEgKyAoYy50b3BpY3MgfHwgW10pLmxlbmd0aCwgMCk7XG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSB3aW5kb3cuQ0FURUdPUklFUy5sZW5ndGg7XG4gIGNvbnN0IGNsaW5pY2FsWWVhcnMgPSAxMjtcblxuICAvLyBDVEEgYnV0dG9uIHN0eWxlc1xuICBjb25zdCBwcmltYXJ5QnRuID0ge1xuICAgIHBhZGRpbmc6ICcxNHB4IDI0cHgnLFxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS10ZWFsKScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBnYXA6IDgsXG4gICAgYm94U2hhZG93OiAnMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpIGluc2V0LCAwIDhweCAyMHB4IC02cHggcmdiYSgxNCwxMjQsMTIzLDAuNCknLFxuICB9O1xuXG4gIGNvbnN0IHNlY29uZGFyeUJ0biA9IHtcbiAgICBwYWRkaW5nOiAnMTRweCAyNHB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsXG4gICAgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgZm9udFNpemU6IDE1LFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZ2FwOiA4LFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1jcmVhbS00KScsXG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIExJTkUgYnV0dG9uIHNob3VsZCByZW5kZXJcbiAgY29uc3Qgc2hvd0xpbmVCdG4gPSB3aW5kb3cuQ09ORklHPy5jb250YWN0Py5saW5lVXJsO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmOGVjJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIERlY29yYXRpdmUgc29mdCBzaGFwZXMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgcmlnaHQ6IC0xMjAsXG4gICAgICAgICAgdG9wOiAtMTIwLFxuICAgICAgICAgIHdpZHRoOiA1MjAsXG4gICAgICAgICAgaGVpZ2h0OiA1MjAsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2M3ZThlMSAwJSwgcmdiYSgxOTksMjMyLDIyNSwwKSA3MCUpJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgbGVmdDogLTgwLFxuICAgICAgICAgIGJvdHRvbTogLTE0MCxcbiAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgIGhlaWdodDogMzYwLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZGUyYzggMCUsIHJnYmEoMjUzLDIyNiwyMDAsMCkgNzAlKScsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciByLWhlcm8tZ3JpZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzcycHggMjRweCA5NnB4JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzEuMDVmciAxZnInLFxuICAgICAgICAgIGdhcDogNjQsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIEJhZGdlICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggMTRweCcsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1jcmVhbS00KScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS10ZWFsKScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZ29sZCknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFx1N0Q2Nlx1NkJDRlx1NTAwQlx1NUJCNlx1NUVBRFx1NzY4NFx1ODg1Qlx1NjU1OVx1NzdFNVx1OEI1OFx1NUVBQlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEhlYWRsaW5lICovfVxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwici1oZXJvLWgxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnY2xhbXAoNDBweCwgNXZ3LCA1NnB4KScsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMTUsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzIwcHggMCAyMHB4JyxcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBcdTc1MjhcdTc3MEJcdTVGOTdcdTYxQzJcdTc2ODRcdThBNzFcdUZGMENcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXHU5NjZBXHU2MEE4XHU0RTg2XHU4OUUzXHU1MDY1XHU1RUI3XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIHsvKiBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwici1oZXJvLXBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjcsXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbXV0ZWQtNCknLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogNTIwLFxuICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMzJweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3aW5kb3cuQ09ORklHPy5kZXNjcmlwdGlvbiB8fCAnXHU1QkI2XHU5MUFCXHU3OUQxXHU4ODVCXHU2NTU5XHU4Q0M3XHU4QTBBXHU1RTczXHU1M0YwJ31cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICB7LyogQ1RBIEJ1dHRvbnMgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTIsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiIy9jaHJvbmljXCIgc3R5bGU9e3ByaW1hcnlCdG59PlxuICAgICAgICAgICAgICBcdTcwMEZcdTg5QkRcdTg4NUJcdTY1NTlcdTRFM0JcdTk4NEN7JyAnfVxuICAgICAgICAgICAgICA8SWNvbi5BcnJvd1JpZ2h0IHN0eWxlPXt7IHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9fSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3Nob3dMaW5lQnRuICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17d2luZG93LkNPTkZJRy5jb250YWN0LmxpbmVVcmx9IHN0eWxlPXtzZWNvbmRhcnlCdG59PlxuICAgICAgICAgICAgICAgIDxJY29uLkxpbmUgc3R5bGU9e3sgd2lkdGg6IDE4LCBoZWlnaHQ6IDE4IH19IC8+IExJTkUgXHU5ODEwXHU3RDA0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3RhdHMgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwici1oZXJvLXN0YXRzXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogNDAsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZ2FwOiAyOCxcbiAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IGRhc2hlZCB2YXIoLS1jcmVhbS00KScsXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDI0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhdCBuPXtgJHt0b3BpY0NvdW50fStgfSBsYWJlbD1cIlx1ODg1Qlx1NjU1OVx1NEUzQlx1OTg0Q1wiIC8+XG4gICAgICAgICAgICA8U3RhdCBuPXtjYXRlZ29yeUNvdW50fSBsYWJlbD1cIlx1NUMwOFx1Njk2RFx1NTIwNlx1OTg1RVwiIC8+XG4gICAgICAgICAgICA8U3RhdCBuPXtjbGluaWNhbFllYXJzfSBsYWJlbD1cIlx1NUU3NFx1ODFFOFx1NUU4QVx1N0Q5M1x1OUE1N1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbGx1c3RyYXRpb24gc3RhY2sgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1oZXJvLWlsbHVzXCI+XG4gICAgICAgICAgPEhlcm9JbGx1c3RyYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFN0YXQoeyBuLCBsYWJlbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTogMjgsXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLFxuICAgICAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wMWVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge259XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogJ3ZhcigtLW11dGVkLTIpJywgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb0lsbHVzdHJhdGlvbigpIHtcbiAgY29uc3QgaCA9IHdpbmRvdy5IRVJPIHx8IHt9O1xuICBjb25zdCBmZWF0dXJlZCA9IGguZmVhdHVyZWQgfHwge307XG4gIGNvbnN0IHNlYXNvbmFsID0gaC5zZWFzb25hbCB8fCB7fTtcbiAgY29uc3QgcGlsbCAgICAgPSBoLnBpbGwgICAgIHx8IHt9O1xuXG4gIGNvbnN0IHRpdGxlTGluZXMgPSAoc2Vhc29uYWwudGl0bGUgfHwgJycpLnNwbGl0KCdcXG4nKTtcblxuICBjb25zdCBjYXJkQmFzZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm9yZGVyUmFkaXVzOiAyMiwgdGV4dERlY29yYXRpb246ICdub25lJywgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBhc3BlY3RSYXRpbzogJzEvMScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiA1MDAsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIEJhY2sgY2FyZDogZmVhdHVyZWQgYXJ0aWNsZSAqL31cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cImhlcm8tY2FyZC1iYWNrXCJcbiAgICAgICAgaHJlZj17ZmVhdHVyZWQuaHJlZiB8fCAnIy8nfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmNhcmRCYXNlLFxuICAgICAgICAgIGxlZnQ6ICc0JScsIHRvcDogJzglJywgd2lkdGg6ICc2MiUnLCBhc3BlY3RSYXRpbzogJzEvMS4xJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6IDIyLFxuICAgICAgICAgIGJveFNoYWRvdzogJ3ZhcigtLXNoYWRvdy1saWZ0KScsIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6ICd2YXIoLS10ZWFsLTIpJywgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4xMmVtJyB9fT5cbiAgICAgICAgICB7ZmVhdHVyZWQuZXllYnJvdyB8fCAnXHU2NzJDXHU5MDMxXHU3Q0JFXHU5MDc4J31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBtYXJnaW5Ub3A6IDQsIGxpbmVIZWlnaHQ6IDEuNCB9fT5cbiAgICAgICAgICB7ZmVhdHVyZWQudGl0bGUgfHwgJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luVG9wOiAxNCwgaGVpZ2h0OiAxMjAsIGJhY2tncm91bmQ6ICd2YXIoLS1jcmVhbS0xKScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMiwgcGFkZGluZzogMTIsIGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlUm93czogJzFmciBhdXRvJywgZ2FwOiA2LFxuICAgICAgICB9fT5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDYwXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0gcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJoZ1wiIHgxPVwiMFwiIHgyPVwiMFwiIHkxPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwidmFyKC0tdGVhbC0yKVwiIHN0b3BPcGFjaXR5PVwiMC4zNVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cInZhcigtLXRlYWwtMilcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0wIDUwIEwxNSA0MCBMMzAgNDUgTDQ1IDMwIEw2MCAzMiBMNzUgMjIgTDkwIDI2IEwxMDUgMTggTDEyMCAyMiBMMTIwIDYwIEwwIDYwIFpcIiBmaWxsPVwidXJsKCNoZylcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0wIDUwIEwxNSA0MCBMMzAgNDUgTDQ1IDMwIEw2MCAzMiBMNzUgMjIgTDkwIDI2IEwxMDUgMTggTDEyMCAyMlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cInZhcigtLXRlYWwpXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgIHtbWzE1LDQwXSxbNDUsMzBdLFs3NSwyMl0sWzEwNSwxOF1dLm1hcCgoW3gseV0saSkgPT4gKFxuICAgICAgICAgICAgICA8Y2lyY2xlIGtleT17aX0gY3g9e3h9IGN5PXt5fSByPVwiMi41XCIgZmlsbD1cIiNmZmZcIiBzdHJva2U9XCJ2YXIoLS10ZWFsKVwiIHN0cm9rZVdpZHRoPVwiMS41XCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTAsIGNvbG9yOiAndmFyKC0tbXV0ZWQtMyknIH19PlxuICAgICAgICAgICAgPHNwYW4+XHU5MDMxXHU0RTAwPC9zcGFuPjxzcGFuPlx1OTAzMVx1NEUwOTwvc3Bhbj48c3Bhbj5cdTkwMzFcdTRFOTQ8L3NwYW4+PHNwYW4+XHU5MDMxXHU2NUU1PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIG1hcmdpblRvcDogMTAsIGZvbnRTaXplOiAxMCwgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICB7KGZlYXR1cmVkLnRhZ3MgfHwgW10pLm1hcCgodGFnLCBpKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2l9IHN0eWxlPXt0YWdDaGlwKFxuICAgICAgICAgICAgICBpID09PSAwID8gJ3ZhcigtLXN1Y2Nlc3MtYmcpJyA6ICd2YXIoLS13YXJuLWJnKScsXG4gICAgICAgICAgICAgIGkgPT09IDAgPyAndmFyKC0tdGVhbCknICAgICAgIDogJ3ZhcigtLXdhcm4tZmcpJyxcbiAgICAgICAgICAgICl9Pnt0YWd9PC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtmZWF0dXJlZC5yZWFkaW5nTWludXRlcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW11dGVkLTMpJywgbWFyZ2luTGVmdDogJ2F1dG8nIH19PntmZWF0dXJlZC5yZWFkaW5nTWludXRlc30gXHU1MjA2XHU5NDE4PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuXG4gICAgICB7LyogRnJvbnQgY2FyZDogc2Vhc29uYWwgYXJ0aWNsZSAqL31cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cImhlcm8tY2FyZC1mcm9udFwiXG4gICAgICAgIGhyZWY9e3NlYXNvbmFsLmhyZWYgfHwgJyMvJ31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5jYXJkQmFzZSxcbiAgICAgICAgICByaWdodDogJzIlJywgYm90dG9tOiAnNiUnLCB3aWR0aDogJzU4JScsIGFzcGVjdFJhdGlvOiAnMS8xLjE1JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDE3MGRlZywgdmFyKC0tcGVhY2gtbGlnaHQpLCB2YXIoLS1wZWFjaC1kYXJrKSknLFxuICAgICAgICAgIHBhZGRpbmc6IDIyLCBjb2xvcjogJyNmZmYnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctaGVybyknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA0MiwgaGVpZ2h0OiA0MiwgYm9yZGVyUmFkaXVzOiA5OSwgYmFja2dyb3VuZDogJ3ZhcigtLWdvbGQpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgZm9udFdlaWdodDogNzAwLCBmb250U2l6ZTogMTggfX0+XG4gICAgICAgICAgK1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiAnI2M5ZWRlOScsIG1hcmdpblRvcDogMTgsIGxldHRlclNwYWNpbmc6ICcwLjFlbScgfX0+XG4gICAgICAgICAge3NlYXNvbmFsLmV5ZWJyb3cgfHwgJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwLCBsaW5lSGVpZ2h0OiAxLjMsIG1hcmdpblRvcDogNiB9fT5cbiAgICAgICAgICB7dGl0bGVMaW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntsaW5lfXtpIDwgdGl0bGVMaW5lcy5sZW5ndGggLSAxICYmIDxici8+fTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE4LCBsZWZ0OiAyMiwgcmlnaHQ6IDIyIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAxLCBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjIpJyB9fSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMiwgZm9udFNpemU6IDEzLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICA8c3Bhbj57c2Vhc29uYWwuYXV0aG9yIHx8ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgIHtzZWFzb25hbC5yZWFkaW5nTWludXRlcyAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IDAuNyB9fT57c2Vhc29uYWwucmVhZGluZ01pbnV0ZXN9IFx1NTIwNlx1OTQxOFx1OTVCMVx1OEI4MDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuXG4gICAgICB7LyogRmxvYXRpbmcgcGlsbCAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1jYXJkLXBpbGxcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTYlJywgYm90dG9tOiAnMTglJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsIGJvcmRlclJhZGl1czogMTQsIHBhZGRpbmc6ICcxMHB4IDE0cHgnLFxuICAgICAgICAgIGJveFNoYWRvdzogJ3ZhcigtLXNoYWRvdy1saWZ0KScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgZ2FwOiAxMCwgZm9udFNpemU6IDEzLCBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzAsIGhlaWdodDogMzAsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogJ3ZhcigtLWNyZWFtLTEpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxJY29uLkhlYXJ0IHN0eWxlPXt7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiwgY29sb3I6ICcjZDk2NzU3JyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScgfX0+XHU1REYyXHU2NTM2XHU4NUNGPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknIH19PlxuICAgICAgICAgICAge3BpbGwubGFiZWwgfHwgJyd9e3BpbGwuY291bnQgPyBgICR7cGlsbC5jb3VudH0gXHU3QkM3YCA6ICcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiB0YWdDaGlwKGJnLCBmZykge1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmQ6IGJnLFxuICAgIGNvbG9yOiBmZyxcbiAgICBwYWRkaW5nOiAnM3B4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgSGVyb0JpZyB9KTtcbiIsICIvLyBNYWluIHBhZ2Ugc2VjdGlvbnNcblxuZnVuY3Rpb24gU2VjdGlvbkhlYWRlcih7IGV5ZWJyb3csIHRpdGxlLCBkZXNjLCBhY3Rpb24sIGxpbmtIcmVmLCBvbkFjdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgbWFyZ2luQm90dG9tOiAyOCwgZ2FwOiAyNCwgZmxleFdyYXA6ICd3cmFwJyxcbiAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IDY0MCB9fT5cbiAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS10ZWFsKScsIGZvbnRXZWlnaHQ6IDYwMCwgbGV0dGVyU3BhY2luZzogJzAuMThlbScsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgIH19PntleWVicm93fTwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwici1zZWN0aW9uLWhlYWQtdGl0bGVcIiBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiAnY2xhbXAoMjhweCwgM3Z3LCAzNnB4KScsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsXG4gICAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLCBsaW5lSGVpZ2h0OiAxLjIsIG1hcmdpbjogMCxcbiAgICAgICAgfX0+e3RpdGxlfTwvaDI+XG4gICAgICAgIHtkZXNjICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgZm9udFNpemU6IDE2LCBtYXJnaW5Ub3A6IDEwLCBsaW5lSGVpZ2h0OiAxLjY1IH19PntkZXNjfTwvcD59XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb24gJiYgKFxuICAgICAgICA8YSBocmVmPXtsaW5rSHJlZiB8fCAnIyd9IG9uQ2xpY2s9e2xpbmtIcmVmID8gdW5kZWZpbmVkIDogKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvbkFjdGlvbj8uKCk7IH19IHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6ICd2YXIoLS10ZWFsKScsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDE0LCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIHBhZGRpbmdCb3R0b206IDYsXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHZhcigtLXRlYWwpJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAge2FjdGlvbn0gPEljb24uQXJyb3dSaWdodCBzdHlsZT17eyB3aWR0aDogMTYsIGhlaWdodDogMTYgfX0vPlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgRmVhdHVyZWQgKHNlYXNvbmFsICsgZWRpdG9yaWFsIHBpY2tzKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIEZlYXR1cmVkU2VjdGlvbigpIHtcbiAgY29uc3QgZmVhdHVyZWQgPSB3aW5kb3cuX19kYXRhPy5GRUFUVVJFRCB8fCBbXTtcbiAgaWYgKGZlYXR1cmVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgYmlnID0gZmVhdHVyZWRbMF07XG4gIGNvbnN0IHJlc3QgPSBmZWF0dXJlZC5zbGljZSgxKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInItc2VjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzgwcHggMjRweCcgfX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgZXllYnJvdz1cIkZFQVRVUkVEIFx1MDBCNyBcdTdDQkVcdTkwNzhcdTRFM0JcdTk4NENcIlxuICAgICAgICAgIHRpdGxlPVwiXHU2NzJDXHU5MDMxXHU3REU4XHU4RjJGXHU3Q0JFXHU5MDc4XCJcbiAgICAgICAgICBkZXNjPVwiXHU1RjlFXHU5NTgwXHU4QTNBXHU2NzAwXHU1RTM4XHU4OEFCXHU1NTRGXHU1MjMwXHU3Njg0XHU1NTRGXHU5ODRDXHU1MUZBXHU3NjdDXHVGRjBDXHU5MUFCXHU1RTJCXHU4MjA3XHU4Qjc3XHU3NDA2XHU1RTJCXHU1MTcxXHU1NDBDXHU1QkU5XHU4QTAyXHUzMDAxXHU1QjlBXHU2NzFGXHU2NkY0XHU2NUIwXHUzMDAyXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItZmVhdC1ncmlkXCIgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxLjNmciAxZnIgMWZyJywgZ2FwOiAyMCxcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEZlYXR1cmVDYXJkTGFyZ2UgYXJ0aWNsZT17YmlnfS8+XG4gICAgICAgICAge3Jlc3QubWFwKCh0KSA9PiA8RmVhdHVyZUNhcmRNZWRpdW0ga2V5PXt0LmlkfSBhcnRpY2xlPXt0fS8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZlYXR1cmVDYXJkTGFyZ2UoeyBhcnRpY2xlIH0pIHtcbiAgY29uc3QgaHJlZiA9IGAjLyR7YXJ0aWNsZS5jYXRlZ29yeUlkfS8ke2FydGljbGUuaWR9YDtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfVxuICAgICAgY2xhc3NOYW1lPVwici1mZWF0LWJpZ1wiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDE2NWRlZywgdmFyKC0tcGVhY2gtbGlnaHQpIDAlLCB2YXIoLS1wZWFjaC1kYXJrKSAxMDAlKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMjAsIHBhZGRpbmc6IDMyLCBjb2xvcjogJyNmZmYnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtaW5IZWlnaHQ6IDM4MCxcbiAgICAgIH19PlxuICAgICAge2FydGljbGUudGFnID09PSAnXHU1QjYzXHU3QkMwXHU1QzA4XHU5ODRDJyAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAyMCwgcmlnaHQ6IDIwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1nb2xkKScsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiAxMixcbiAgICAgICAgICBwYWRkaW5nOiAnNnB4IDEycHgnLCBib3JkZXJSYWRpdXM6IDk5OSwgbGV0dGVyU3BhY2luZzogJzAuMDhlbScsXG4gICAgICAgIH19Plx1NUI2M1x1N0JDMFx1NUMwOFx1OTg0QzwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IDY0LCBoZWlnaHQ6IDY0LCBib3JkZXJSYWRpdXM6IDE2LCBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNDAsIGhlaWdodDogNDAsIGNvbG9yOiAndmFyKC0tZ29sZCknIH19PlxuICAgICAgICAgIDxJbGxvLlZpcnVzIHRvbmU9XCJ2YXIoLS1nb2xkKVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsIGZvbnRXZWlnaHQ6IDYwMCwgbGV0dGVyU3BhY2luZzogJzAuMTVlbScgfX0+XG4gICAgICAgIHthcnRpY2xlLnRhZ31cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiAyNiwgZm9udFdlaWdodDogNzAwLCBsaW5lSGVpZ2h0OiAxLjMsIG1hcmdpbjogJzEwcHggMCAxNHB4JyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAwNWVtJywgY29sb3I6ICcjZmZmJyxcbiAgICAgIH19PnthcnRpY2xlLnRpdGxlfTwvaDM+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknLCBmb250U2l6ZTogMTUsIGxpbmVIZWlnaHQ6IDEuNjUsIG1hcmdpbjogMCwgZmxleDogMSB9fT5cbiAgICAgICAge2FydGljbGUuc3VtbWFyeSB8fCBhcnRpY2xlLmV4Y2VycHQgfHwgJyd9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIG1hcmdpblRvcDogMjgsIHBhZGRpbmdUb3A6IDIwLCBib3JkZXJUb3A6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE4KScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmb250U2l6ZTogMTMsXG4gICAgICB9fT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgZ2FwOiA0LCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICcjZmZmJywgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgIFx1OTVCMVx1OEI4MFx1NTE2OFx1NjU4NyA8SWNvbi5BcnJvd1JpZ2h0IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCB9fS8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRmVhdHVyZUNhcmRNZWRpdW0oeyBhcnRpY2xlIH0pIHtcbiAgY29uc3QgaHJlZiA9IGAjLyR7YXJ0aWNsZS5jYXRlZ29yeUlkfS8ke2FydGljbGUuaWR9YDtcbiAgY29uc3QgY2F0ID0gKHdpbmRvdy5DQVRFR09SSUVTIHx8IFtdKS5maW5kKGMgPT4gYy5pZCA9PT0gYXJ0aWNsZS5jYXRlZ29yeUlkKSB8fCB7fTtcbiAgY29uc3QgSSA9IElsbG9bY2F0Lmljb25dIHx8IElsbG8uU2hpZWxkO1xuICBjb25zdCB0b25lID0gY2F0LnRvbmUgfHwgJ3ZhcigtLXRlYWwpJztcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfVxuICAgICAgY2xhc3NOYW1lPVwiZmVhdC1tZWQgci1mZWF0LW1lZFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tY3JlYW0tMSknLCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiAyOCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1pbkhlaWdodDogMzgwLCB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4xNXMsIGJveC1zaGFkb3cgLjE1cycsXG4gICAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IDU2LCBoZWlnaHQ6IDU2LCBib3JkZXJSYWRpdXM6IDE0LCBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogMjIsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknLFxuICAgICAgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDM2LCBoZWlnaHQ6IDM2IH19PlxuICAgICAgICAgIDxJIHRvbmU9e3RvbmV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmb250U2l6ZTogMTEsIGNvbG9yOiAndmFyKC0tdGVhbCknLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tdGVhbC0yKScsIHBhZGRpbmc6ICczcHggMTBweCcsIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLCB3aWR0aDogJ2ZpdC1jb250ZW50JywgbGV0dGVyU3BhY2luZzogJzAuMDVlbScsXG4gICAgICB9fT57YXJ0aWNsZS50YWd9PC9zcGFuPlxuICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiAxOSwgZm9udFdlaWdodDogNzAwLCBsaW5lSGVpZ2h0OiAxLjM1LCBtYXJnaW46ICcxMnB4IDAgMTBweCcsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLFxuICAgICAgfX0+e2FydGljbGUudGl0bGV9PC9oMz5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgZm9udFNpemU6IDE0LCBsaW5lSGVpZ2h0OiAxLjYsIG1hcmdpbjogMCwgZmxleDogMSB9fT5cbiAgICAgICAge2FydGljbGUuc3VtbWFyeSB8fCBhcnRpY2xlLmV4Y2VycHQgfHwgJyd9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIG1hcmdpblRvcDogMjIsIHBhZGRpbmdUb3A6IDE2LCBib3JkZXJUb3A6ICcxcHggZGFzaGVkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgICAgIGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICB9fT5cbiAgICAgICAgPHNwYW4+XHU5NUIxXHU4QjgwXHU1MTY4XHU2NTg3IFx1MjE5Mjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIENhdGVnb3JpZXMgc2hvd2Nhc2UgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBDYXRlZ29yaWVzU2VjdGlvbigpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHdpbmRvdy5DQVRFR09SSUVTIHx8IFtdO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInItc2VjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICd2YXIoLS1jcmVhbS0yKScgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4MHB4IDI0cHgnIH19PlxuICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgZXllYnJvdz1cIlRPUElDUyBcdTAwQjcgXHU0RTNCXHU5ODRDXHU1MjA2XHU5ODVFXCJcbiAgICAgICAgdGl0bGU9XCJcdTVGOUVcdTYwQThcdTk1RENcdTVGQzNcdTc2ODRcdTRFM0JcdTk4NENcdTk1OEJcdTU5Q0JcdThCODBcdThENzdcIlxuICAgICAgICBkZXNjPVwiXHU1OTFBXHU5ODVFXHU1MjI1XHVGRjBDXHU5MUFCXHU1RTJCXHU1QkU5XHU4QTAyXHU2NTg3XHU3QUUwXHUzMDAyXHU2QkNGXHU1MDBCXHU0RTNCXHU5ODRDXHU5MEZEXHU1NDJCXHU2NzA5XHU1N0ZBXHU2NzJDXHU4QThEXHU4QjU4XHUzMDAxXHU2NUU1XHU1RTM4XHU3MTY3XHU4Qjc3XHUzMDAxXHU0RjU1XHU2NjQyXHU1QzMxXHU5MUFCXHU3QjQ5XHU1MTY3XHU1QkI5XHUzMDAyXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jYXQtZ3JpZFwiIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCAxZnIpJywgZ2FwOiAxNixcbiAgICAgIH19PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGMpID0+IHtcbiAgICAgICAgICBjb25zdCBJID0gSWxsb1tjLmljb25dIHx8IElsbG8uU2hpZWxkO1xuICAgICAgICAgIGNvbnN0IHRvbmUgPSBjLnRvbmUgfHwgJ3ZhcigtLXRlYWwpJztcbiAgICAgICAgICBjb25zdCBjb3VudCA9IChjLnRvcGljcyB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBrZXk9e2MuaWR9IGhyZWY9e2AjLyR7Yy5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3BpYy1jYXJkIHItY2F0LXRpbGVcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiAxOCwgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycywgYm94LXNoYWRvdyAuMnMnLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogMTgwLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTIsIGhlaWdodDogNTIsIGJvcmRlclJhZGl1czogMTQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHt0b25lfTEyYCxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzNCwgaGVpZ2h0OiAzNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEkgdG9uZT17dG9uZX0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScsIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICB9fT57Y291bnR9IFx1N0JDNzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jYXQtdGlsZS1uYW1lXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICAgICAgICAgIHtjLm5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogMTMsIGNvbG9yOiAndmFyKC0tbXV0ZWQtMiknLCBtYXJnaW5MZWZ0OiA2IH19Pih7Y291bnR9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jYXQtdGlsZS1kZXNjXCIgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIG1hcmdpblRvcDogNiwgbGluZUhlaWdodDogMS41NSB9fT5cbiAgICAgICAgICAgICAgICB7Yy5kZXNjIHx8IGMuZGVzY3JpcHRpb24gfHwgJyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItY2F0LXRpbGUtYXJyb3dcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDIwLCByaWdodDogMjAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IDk5LCBiYWNrZ3JvdW5kOiBgJHt0b25lfTEwYCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogdG9uZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxJY29uLkFycm93UmlnaHQgc3R5bGU9e3sgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIExhdGVzdCBhcnRpY2xlcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIExhdGVzdFNlY3Rpb24oKSB7XG4gIGNvbnN0IGxhdGVzdCA9IHdpbmRvdy5fX2RhdGE/LkxBVEVTVCB8fCBbXTtcbiAgaWYgKGxhdGVzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSB3aW5kb3cuQ0FURUdPUklFUyB8fCBbXTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInItc2VjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzgwcHggMjRweCcgfX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgZXllYnJvdz1cIkxBVEVTVCBcdTAwQjcgXHU2NzAwXHU2NUIwXHU2NTg3XHU3QUUwXCJcbiAgICAgICAgICB0aXRsZT1cIlx1OTAxOVx1OTAzMVx1NjVCMFx1NEUwQVx1N0REQVwiXG4gICAgICAgICAgZGVzYz1cIlx1OTFBQlx1NUUyQlx1NkJDRlx1OTAzMVx1NjZGNFx1NjVCMFx1RkYwQ1x1OERERlx1ODQ1N1x1NUI2M1x1N0JDMFx1ODIwN1x1NkQ0MVx1ODg0Q1x1NzVDNVx1NEUwMFx1OEQ3N1x1OEY0OVx1NjNEQlx1OEE3MVx1OTg0Q1x1MzAwMlwiXG4gICAgICAgICAgYWN0aW9uPVwiXHU2NTg3XHU3QUUwXHU1MjE3XHU4ODY4XCJcbiAgICAgICAgICBsaW5rSHJlZj1cIiMvXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItbGF0ZXN0LWdyaWRcIiBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCAxZnIpJywgZ2FwOiAwLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknLCBib3JkZXJSYWRpdXM6IDE2LCBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIH19PlxuICAgICAgICAgIHtsYXRlc3QubWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXQgPSBjYXRlZ29yaWVzLmZpbmQoYyA9PiBjLmlkID09PSBhLmNhdGVnb3J5SWQpIHx8IGNhdGVnb3JpZXNbMF0gfHwge307XG4gICAgICAgICAgICBjb25zdCBJID0gSWxsb1tjYXQuaWNvbl0gfHwgSWxsby5TaGllbGQ7XG4gICAgICAgICAgICBjb25zdCB0b25lID0gY2F0LnRvbmUgfHwgYS5hY2NlbnQgfHwgJ3ZhcigtLXRlYWwpJztcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGkgJSAzLCByb3cgPSBNYXRoLmZsb29yKGkgLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUm93cyA9IE1hdGguY2VpbChsYXRlc3QubGVuZ3RoIC8gMyk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2EuaWR9IGhyZWY9e2AjLyR7YS5jYXRlZ29yeUlkfS8ke2EuaWR9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXRlc3Qtcm93XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIycHggMjRweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogY29sIDwgMiA/ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogcm93IDwgdG90YWxSb3dzIC0gMSA/ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxNiwgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgLjE1cycsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ0LCBoZWlnaHQ6IDQ0LCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBgJHt0b25lfTEyYCxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyOCwgaGVpZ2h0OiAyOCB9fT48SSB0b25lPXt0b25lfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDExLCBjb2xvcjogdG9uZSwgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNmVtJyxcbiAgICAgICAgICAgICAgICAgIH19PnthLnRhZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgbWFyZ2luVG9wOiA2LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjQ1LFxuICAgICAgICAgICAgICAgICAgfX0+e2EudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7YS5sYXN0VXBkYXRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLW11dGVkLTIpJywgbWFyZ2luVG9wOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YS5sYXN0VXBkYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIERvY3RvcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBEb2N0b3JzU2VjdGlvbigpIHtcbiAgY29uc3QgZG9jdG9ycyA9IHdpbmRvdy5ET0NUT1JTIHx8IFtdO1xuICBpZiAoZG9jdG9ycy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInItc2VjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICd2YXIoLS1jcmVhbS0yKScgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4MHB4IDI0cHgnIH19PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIGV5ZWJyb3c9XCJET0NUT1JTIFx1MDBCNyBcdTkxQUJcdTVFMkJcdTU3MThcdTk2OEFcIlxuICAgICAgICAgIHRpdGxlPVwiXHU4QThEXHU4QjU4XHU2MEE4XHU3Njg0XHU5MUFCXHU1RTJCXCJcbiAgICAgICAgICBkZXNjPVwiXHU2QkNGXHU0RjREXHU5MUFCXHU1RTJCXHU5MEZEXHU2NzAzXHU4MkIxXHU2NjQyXHU5NTkzXHU4MDdEXHU2MEE4XHU4QUFBXHU4QTcxXHUzMDAyXHU3NzBCXHU4QTNBXHU1MjREXHU1OTFBXHU0RTg2XHU4OUUzXHU0RTAwXHU5RURFXHVGRjBDXHU2RTlEXHU5MDFBXHU2NjQyXHU1QzMxXHU2NkY0XHU2NzA5XHU2NTQ4XHU3Mzg3XHUzMDAyXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItZG9jcy1ncmlkXCIgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDQsIDFmciknLCBnYXA6IDE4IH19PlxuICAgICAgICAgIHtkb2N0b3JzLm1hcChkID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtkLmlkIHx8IGQubmFtZX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLCBib3JkZXJSYWRpdXM6IDE4LCBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHsvKiBQb3J0cmFpdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAnMS8xJywgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNTVkZWcsICR7ZC5odWV9MjIgMCUsICR7ZC5odWV9MDUgMTAwJSlgLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2QucGhvdG9cbiAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9e2QucGhvdG99IGFsdD17YCR7ZC5uYW1lfSBcdTkxQUJcdTVFMkJgfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJywgb2JqZWN0UG9zaXRpb246ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgOiA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc2MiUnLCBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAke2QuaHVlfSAwJSwgJHtzaGFkZShkLmh1ZSl9IDEwMCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogYDAgMjBweCA0MHB4IC0yMHB4ICR7ZC5odWV9ODhgLFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA3MiwgaGVpZ2h0OiA3MiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbGxvLkRvY3RvciB0b25lPVwicmdiYSgyNTUsMjU1LDI1NSwwLjg1KVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMThweCAyMHB4IDIycHgnIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknIH19PlxuICAgICAgICAgICAgICAgICAge2QubmFtZX0gPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIGZvbnRTaXplOiAxNCB9fT5cdTkxQUJcdTVFMkI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGVhbCknLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblRvcDogNCwgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge2QudGl0bGU/LnNwbGl0KCcgXHUwMEI3ICcpLm1hcCgocGFydCwgaSkgPT4gPGRpdiBrZXk9e2l9PntwYXJ0fTwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIGxpbmVIZWlnaHQ6IDEuNTUsIG1hcmdpbjogJzEycHggMCAwJyB9fT57ZC5iaW99PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDUsIG1hcmdpblRvcDogMTIgfX0+XG4gICAgICAgICAgICAgICAgICB7KGQuZXhwZXJ0aXNlIHx8IFtdKS5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17eH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTEsIGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgYmFja2dyb3VuZDogJ3ZhcigtLWNyZWFtLTIpJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDhweCcsIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICAgICAgfX0+e3h9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBzaGFkZShoZXgpIHtcbiAgcmV0dXJuIGhleC5yZXBsYWNlKC9eIy8sICcnKS5tYXRjaCgvLnsyfS9nKVxuICAgIC5tYXAoeCA9PiBNYXRoLm1heCgwLCBwYXJzZUludCh4LCAxNikgLSAyNSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpXG4gICAgLnJlZHVjZSgocywgeCkgPT4gcyArIHgsICcjJyk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBGQVEgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBGYXFTZWN0aW9uKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgZmFxcyA9IHdpbmRvdy5GQVFTIHx8IFtdO1xuICBjb25zdCBsaW5lVXJsID0gd2luZG93LkNPTkZJRz8uY29udGFjdD8ubGluZVVybCB8fCAnJztcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZmFxXCIgY2xhc3NOYW1lPVwici1zZWN0aW9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnODBweCAyNHB4JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1mYXEtZ3JpZFwiIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxLjNmcicsIGdhcDogNjAsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAxMjAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLXRlYWwpJywgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4xOGVtJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogOCwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgfX0+RkFRIFx1MDBCNyBcdTVFMzhcdTg5OEJcdTU1NEZcdTk4NEM8L2Rpdj5cbiAgICAgICAgICA8aDIgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAnY2xhbXAoMjhweCwgM3Z3LCAzNnB4KScsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsIGxpbmVIZWlnaHQ6IDEuMiwgbWFyZ2luOiAwLFxuICAgICAgICAgIH19Plx1NzcwQlx1OEEzQVx1NTI0RFx1RkYwQzxici8+XHU1MTQ4XHU2MjhBXHU3NTkxXHU1NTRGXHU4OUUzXHU2QzdBPC9oMj5cbiAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW11dGVkKScsIGZvbnRTaXplOiAxNSwgbWFyZ2luVG9wOiAxNiwgbGluZUhlaWdodDogMS43IH19PlxuICAgICAgICAgICAgXHU2NTc0XHU3NDA2XHU4MUVBXHU2QUMzXHU1M0YwXHU4MjA3XHU5NTgwXHU4QTNBXHU2NzAwXHU1RTM4XHU4OEFCXHU1NTRGXHU1MjMwXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyXG4gICAgICAgICAgICB7bGluZVVybFxuICAgICAgICAgICAgICA/ICdcdTgyRTVcdTYwQThcdTc2ODRcdTU1NEZcdTk4NENcdTRFMERcdTU3MjhcdTkwMTlcdTg4RTFcdUZGMENcdTZCNjFcdThGQ0VcdTkwMEZcdTkwNEUgTElORSBcdTVCOThcdTY1QjlcdTVFMzNcdTg2NUZcdTc2RjRcdTYzQTVcdThBNjJcdTU1NEZcdTMwMDInXG4gICAgICAgICAgICAgIDogJ1x1ODJFNVx1NjcwOVx1NTE3Nlx1NEVENlx1NzU5MVx1NTU0Rlx1RkYwQ1x1NkI2MVx1OEZDRVx1NEY4Nlx1OTZGQlx1NjIxNlx1ODlBQVx1NkQzRFx1OEEzQVx1NjI0MFx1OEE2Mlx1NTU0Rlx1MzAwMid9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtsaW5lVXJsICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyNCB9fT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bGluZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAyMHB4JywgYmFja2dyb3VuZDogJyMwNkM3NTUnLCBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEljb24uTGluZSBzdHlsZT17eyB3aWR0aDogMTgsIGhlaWdodDogMTggfX0vPlxuICAgICAgICAgICAgICAgIFx1NTJBMFx1NTE2NSBMSU5FIFx1OEE2Mlx1NTU0RlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHt3aW5kb3cuQ09ORklHPy5jb250YWN0Py5saW5lUXJDb2RlICYmIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3dpbmRvdy5DT05GSUcuY29udGFjdC5saW5lUXJDb2RlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiTElORSBRUiBDb2RlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpblRvcDogMTYsIHdpZHRoOiAxMjAsIGhlaWdodDogMTIwLCBib3JkZXJSYWRpdXM6IDggfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZmFxcy5tYXAoKGYsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IG9wZW4gPT09IGk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Zi5pZCB8fCBpfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogaSA9PT0gMCA/ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGlzT3BlbiA/IC0xIDogaSl9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjJweCAwJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTYsIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBmb250U2l6ZTogMTcsIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmLnF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IDk5LCBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJywgY29sb3I6ICd2YXIoLS10ZWFsKScsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzT3BlbiA/ICd2YXIoLS10ZWFsKScgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAge2lzT3BlblxuICAgICAgICAgICAgICAgICAgICAgID8gPEljb24uTWludXMgc3R5bGU9e3sgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0LCBjb2xvcjogJyNmZmYnIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICA6IDxJY29uLlBsdXMgc3R5bGU9e3sgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0IH19Lz59XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIyLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIGZvbnRTaXplOiAxNSwgbGluZUhlaWdodDogMS43NSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDYyMCxcbiAgICAgICAgICAgICAgICAgIH19PntmLmF9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgQ2xpbmljIGluZm8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5jb25zdCBoZHJDZWxsID0ge1xuICBwYWRkaW5nOiAnMTBweCAxMnB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gIGZvbnRTaXplOiAxMSwgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScsIGxldHRlclNwYWNpbmc6ICcwLjEyZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJywgZm9udFdlaWdodDogNjAwLFxufTtcbmNvbnN0IGNlbGwgPSB7XG4gIHBhZGRpbmc6ICcxMnB4IDEycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgZm9udFZhcmlhbnROdW1lcmljOiAndGFidWxhci1udW1zJyxcbn07XG5cbmZ1bmN0aW9uIEluZm9TZWN0aW9uKCkge1xuICBjb25zdCBob3VycyA9IHdpbmRvdy5IT1VSUyB8fCBbXTtcbiAgY29uc3QgY29udGFjdCA9IHdpbmRvdy5DT05GSUc/LmNvbnRhY3QgfHwge307XG4gIGNvbnN0IGhhc0FkZHJlc3MgPSBjb250YWN0LmFkZHJlc3MgJiYgY29udGFjdC5hZGRyZXNzICE9PSAnJztcbiAgY29uc3QgaGFzUGhvbmUgPSBjb250YWN0LnBob25lICYmIGNvbnRhY3QucGhvbmUgIT09ICcnO1xuICBjb25zdCBsaW5lVXJsID0gY29udGFjdC5saW5lVXJsIHx8ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiaW5mb1wiXG4gICAgICBjbGFzc05hbWU9XCJyLXNlY3Rpb25cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzgwcHggMCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1jcmVhbS0yKScsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3ZnIGFyaWEtaGlkZGVuIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBpbnNldDogMCwgb3BhY2l0eTogMC4wNSB9fSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxwYXR0ZXJuIGlkPVwicHBsdXNcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zMCAyMHYyME0yMCAzMGgyMFwiIHN0cm9rZT1cInZhcigtLXRlYWwpXCIgc3Ryb2tlV2lkdGg9XCIxXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cInVybCgjcHBsdXMpXCIvPlxuICAgICAgPC9zdmc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHItaW5mby1ncmlkXCIgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzAgMjRweCcsIGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxLjFmcicsIGdhcDogNjAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICB9fT5cbiAgICAgICAgey8qIENvbnRhY3QgYmxvY2sgKGxlZnQpICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS1nb2xkKScsIGZvbnRXZWlnaHQ6IDYwMCwgbGV0dGVyU3BhY2luZzogJzAuMThlbScsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDgsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgIH19PklORk8gXHUwMEI3IFx1OTU4MFx1OEEzQVx1OENDN1x1OEEwQTwvZGl2PlxuICAgICAgICAgIDxoMiBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICdjbGFtcCgyOHB4LCAzdncsIDM2cHgpJywgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAxZW0nLCBsaW5lSGVpZ2h0OiAxLjIsIG1hcmdpbjogMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsXG4gICAgICAgICAgfX0+XHU1QzMxXHU1NzI4XHU2MEE4XHU1QkI2XHU1REY3XHU1M0UzXHVGRjBDPGJyLz5cdTc3MEJcdThBM0FcdTY2RjRcdTgxRUFcdTU3Mjg8L2gyPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyLCBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogMjAgfX0+XG4gICAgICAgICAgICB7aGFzQWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgIDxJbmZvUm93IGljb249e0ljb24uUGlufSBsYWJlbD1cIlx1OEEzQVx1NjI0MFx1NTczMFx1NTc0MFwiIHZhbHVlPXtjb250YWN0LmFkZHJlc3N9IHN1Yj17Y29udGFjdC5hZGRyZXNzU3ViIHx8ICcnfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2hhc1Bob25lICYmIChcbiAgICAgICAgICAgICAgPEluZm9Sb3cgaWNvbj17SWNvbi5QaG9uZX0gbGFiZWw9XCJcdTgwNkZcdTdENjFcdTk2RkJcdThBNzFcIiB2YWx1ZT17Y29udGFjdC5waG9uZX0gc3ViPXtjb250YWN0LnBob25lU3ViIHx8ICcnfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpbmVVcmwgJiYgKFxuICAgICAgICAgICAgICA8SW5mb1JvdyBpY29uPXtJY29uLkxpbmV9IGxhYmVsPVwiXHU3RERBXHU0RTBBXHU5ODEwXHU3RDA0XCIgdmFsdWU9XCJMSU5FIFx1NUI5OFx1NjVCOVx1NUUzM1x1ODY1RlwiIHN1Yj1cIlx1NEVBNlx1NTNFRlx1N0RCMlx1N0FEOVx1OTgxMFx1N0QwNFwiLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMzYsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMCwgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgIHtsaW5lVXJsICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17bGluZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMjJweCcsIGJhY2tncm91bmQ6ICd2YXIoLS10ZWFsKScsIGNvbG9yOiAnI2ZmZicsIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxJY29uLkxpbmUgc3R5bGU9e3sgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH19Lz4gXHU3QUNCXHU1MzczXHU5ODEwXHU3RDA0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YSBocmVmPVwiIy9jb250YWN0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMjJweCcsIGJhY2tncm91bmQ6ICcjZmZmJywgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgICAgICAgICB9fT5cdTRFQTRcdTkwMUFcdTYzMDdcdTVGMTU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTY2hlZHVsZSB0YWJsZSAocmlnaHQpICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLCBib3JkZXJSYWRpdXM6IDIwLCBwYWRkaW5nOiAyOCxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJywgYm94U2hhZG93OiAndmFyKC0tc2hhZG93LXNvZnQpJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScgfX0+XHU2QkNGXHU5MDMxXHU5NTgwXHU4QTNBXHU2NjQyXHU2QkI1PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogMTEsIGNvbG9yOiAnI2IzOGExYScsIGJvcmRlcjogJzFweCBzb2xpZCAjZTVjZjdjJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JywgYm9yZGVyUmFkaXVzOiA0LCBsZXR0ZXJTcGFjaW5nOiAnMC4wOGVtJywgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZkZjRkOScsXG4gICAgICAgICAgICB9fT5cdTY3MkNcdTkwMzE8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDEuMWZyIDEuMWZyIDEuMWZyJywgZ2FwOiAwLFxuICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aGRyQ2VsbH0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoZHJDZWxsfT5cdTRFMEFcdTUzNDhcdThBM0E8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hkckNlbGx9Plx1NEUwQlx1NTM0OFx1OEEzQTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aGRyQ2VsbH0+XHU2NjVBXHU4QTNBPC9kaXY+XG4gICAgICAgICAgICB7aG91cnMubWFwKChoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTXV0ZWQgPSAodikgPT4gdiA9PT0gJ1x1NEYxMVx1OEEzQScgfHwgdiA9PT0gJ1RPRE8nO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2guZGF5fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uY2VsbCwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJyB9fT57aC5kYXl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmNlbGwsIGNvbG9yOiBpc011dGVkKGguYW0pID8gJ3ZhcigtLW11dGVkLTMpJyA6ICd2YXIoLS1tdXRlZCknIH19PntoLmFtfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaC5wbVNwZWNpYWwgPyAnI2IzOGExYScgOiBpc011dGVkKGgucG0pID8gJ3ZhcigtLW11dGVkLTMpJyA6ICd2YXIoLS1tdXRlZCknLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBoLnBtU3BlY2lhbCA/IDYwMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIH19PntoLnBtfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5jZWxsLCBjb2xvcjogaXNNdXRlZChoLmV2KSA/ICd2YXIoLS1tdXRlZC0zKScgOiAndmFyKC0tbXV0ZWQpJyB9fT57aC5ldn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBJbmZvUm93KHsgaWNvbjogSSwgbGFiZWwsIHZhbHVlLCBzdWIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDE2LCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiA0NCwgaGVpZ2h0OiA0NCwgYm9yZGVyUmFkaXVzOiAxMiwgZmxleFNocmluazogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmY4ZWMnLCBjb2xvcjogJyNiMzhhMWEnLFxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI2YwZTVjNCcsXG4gICAgICB9fT5cbiAgICAgICAgPEkgc3R5bGU9e3sgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgbGV0dGVyU3BhY2luZzogJzAuMTJlbScsIGZvbnRXZWlnaHQ6IDYwMCwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX0+e2xhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Ub3A6IDQsIGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknIH19Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAge3N1YiAmJiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6ICd2YXIoLS1tdXRlZC0yKScsIG1hcmdpblRvcDogMiB9fT57c3VifTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgRm9vdGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gRm9vdGVyKHsgY3R4IH0pIHtcbiAgY29uc3QgY29uZmlnID0gd2luZG93LkNPTkZJRyB8fCB7fTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHdpbmRvdy5DQVRFR09SSUVTIHx8IFtdO1xuICBjb25zdCBjbGluaWNOYW1lID0gY29uZmlnLmNsaW5pY05hbWUgfHwgJ1x1OEFBMFx1NUZDM1x1OTFBQlx1NzY0Mlx1OUFENFx1N0NGQlx1NURFNVx1NUI3OFx1OEEzQVx1NjI0MCc7XG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY3JlYW0tMikgMCUsIHZhcigtLWJvcmRlci1zb2Z0KSAxMDAlKScsXG4gICAgICBjb2xvcjogJ3ZhcigtLW11dGVkKScsIHBhZGRpbmc6ICc1NnB4IDAgMzJweCcsIGZvbnRTaXplOiAxMyxcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCknLFxuICAgIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAyNHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyLWZvb3Rlci1ncmlkXCIgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxLjNmciAxZnIgMWZyIDFmcicsIGdhcDogNDAsIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgICAgIH19PlxuICAgICAgICAgIHsvKiBDb2x1bW4gMTogQnJhbmRpbmcgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgPENsaW5pY01hcmsgc2l6ZT17MzZ9Lz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tZmctaGVhZGluZyknLCBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiAxNiB9fT57Y2xpbmljTmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y29uZmlnLmNsaW5pY05hbWVFbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbXV0ZWQtMiknLCBmb250U2l6ZTogMTEsIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nIH19Pntjb25maWcuY2xpbmljTmFtZUVufTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IDE0LCBsaW5lSGVpZ2h0OiAxLjcgfX0+XG4gICAgICAgICAgICAgIHtjb25maWcuZGVzY3JpcHRpb24gfHwgJ1x1NzBCQVx1NkJDRlx1NEUwMFx1NTAwQlx1NUJCNlx1NUVBRFx1NjI1M1x1OTAyMFx1NTAzQ1x1NUY5N1x1NEZFMVx1OENGNFx1NzY4NFx1OTFBQlx1NzY0Mlx1NjcwRFx1NTJEOVx1RkYwQ1x1NEVFNVx1OEFBMFx1NUZDM1x1ODA0Nlx1ODA3RFx1RkYwQ1x1NzUyOFx1OTFBQlx1NUI3OFx1NzdFNVx1OEI1OFx1OTY2QVx1NjBBOFx1OEQ3MFx1NEUwMFx1NkJCNVx1OTU3N1x1OTA2MFx1NzY4NFx1NTA2NVx1NUVCN1x1NjVDNVx1N0EwQlx1MzAwMid9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sdW1uIDI6IFx1ODg1Qlx1NjU1OVx1NTIwNlx1OTg1RSAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTMsIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nIH19Plx1ODg1Qlx1NjU1OVx1NTIwNlx1OTg1RTwvZGl2PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKGMgPT4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2MuaWR9IGhyZWY9e2AjLyR7Yy5pZH1gfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDAnLCBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgIH19PntjLm5hbWV9PC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sdW1uIDM6IFx1OEEzQVx1NjI0MCAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTMsIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nIH19Plx1OEEzQVx1NjI0MDwvZGl2PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1x1OTFBQlx1NUUyQlx1NTcxOFx1OTY4QScsIGhyZWY6ICcjLyNkb2N0b3JzJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnXHU5NTgwXHU4QTNBXHU4Q0M3XHU4QTBBJywgaHJlZjogJyMvI2luZm8nIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdcdTVFMzhcdTg5OEJcdTU1NEZcdTk4NEMnLCBocmVmOiAnIy8jZmFxJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnXHU4MDZGXHU3RDYxXHU2MjExXHU1MDExJywgaHJlZjogJyMvY29udGFjdCcgfSxcbiAgICAgICAgICAgIF0ubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGEga2V5PXtsYWJlbH0gaHJlZj17aHJlZn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCAwJywgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICB9fT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sdW1uIDQ6IFx1NTAwQlx1NEVCQVx1NTMxNiAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTMsIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nIH19Plx1NTAwQlx1NEVCQVx1NTMxNjwvZGl2PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1x1NjIxMVx1NzY4NFx1NjUzNlx1ODVDRicsIGhyZWY6ICcjL2Zhdm9yaXRlcycgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1x1NjcwMFx1OEZEMVx1NzAwRlx1ODlCRCcsIGhyZWY6ICcjL3JlY2VudCcgfSxcbiAgICAgICAgICAgIF0ubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGEga2V5PXtsYWJlbH0gaHJlZj17aHJlZn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCBjb2xvcjogJ3ZhcigtLW11dGVkKScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCAwJywgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICB9fT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nVG9wOiAyNCwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHJnYmEoMjYsNTcsNjYsMC4xKScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDEyLFxuICAgICAgICAgIGZvbnRTaXplOiAxMiwgb3BhY2l0eTogMC43LFxuICAgICAgICB9fT5cbiAgICAgICAgICA8c3Bhbj5cdTAwQTkge3llYXJ9IHtjbGluaWNOYW1lfS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XHU2NzJDXHU3QUQ5XHU1MTY3XHU1QkI5XHU3NTMxXHU1QzA4XHU2OTZEXHU5MUFCXHU3NjQyXHU1NzE4XHU5NjhBXHU1QkU5XHU5NUIxPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgSG9tZVBhZ2Ugd3JhcHBlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIEhvbWVQYWdlKHsgY3R4IH0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ID0gd2luZG93Ll9fc2Nyb2xsVGFyZ2V0O1xuICAgIGlmICghdCkgcmV0dXJuO1xuICAgIHdpbmRvdy5fX3Njcm9sbFRhcmdldCA9IG51bGw7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO1xuICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgY29uc3QgbmF2SCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpPy5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBuYXZIIC0gMTYsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9LCA4MCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPEhlcm9CaWcgY3R4PXtjdHh9Lz5cbiAgICAgIDxGZWF0dXJlZFNlY3Rpb24vPlxuICAgICAgPENhdGVnb3JpZXNTZWN0aW9uLz5cbiAgICAgIDxMYXRlc3RTZWN0aW9uLz5cbiAgICAgIDxEb2N0b3JzU2VjdGlvbi8+XG4gICAgICA8RmFxU2VjdGlvbi8+XG4gICAgICA8SW5mb1NlY3Rpb24vPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgSG9tZVBhZ2UsXG4gIEZlYXR1cmVkU2VjdGlvbiwgQ2F0ZWdvcmllc1NlY3Rpb24sIExhdGVzdFNlY3Rpb24sXG4gIERvY3RvcnNTZWN0aW9uLCBGYXFTZWN0aW9uLCBJbmZvU2VjdGlvbiwgRm9vdGVyLFxufSk7XG4iLCAiLy8gTGlzdFBhZ2UgXHUyMDE0IGNhdGVnb3J5LCBmYXZvcml0ZXMsIHJlY2VudFxuXG5mdW5jdGlvbiBMaXN0UGFnZSh7IGN0eCB9KSB7XG4gIGNvbnN0IHsgaGFzaFN0YXRlLCBmYXZvcml0ZXMsIHJlY2VudCB9ID0gY3R4O1xuICBsZXQgdGl0bGUsIHRvcGljcztcblxuICBpZiAoaGFzaFN0YXRlLnZpZXcgPT09ICdmYXZvcml0ZXMnKSB7XG4gICAgdGl0bGUgPSAnXHU2MjExXHU3Njg0XHU2NTM2XHU4NUNGJztcbiAgICB0b3BpY3MgPSB3aW5kb3cuQ0FURUdPUklFUy5mbGF0TWFwKGMgPT5cbiAgICAgIChjLnRvcGljcyB8fCBbXSkuZmlsdGVyKHQgPT4gZmF2b3JpdGVzLmluY2x1ZGVzKHQuaWQpKVxuICAgICAgICAubWFwKHQgPT4gKHsgLi4udCwgY2F0ZWdvcnlJZDogYy5pZCwgY2F0ZWdvcnlOYW1lOiBjLm5hbWUsIHRvbmU6IGMudG9uZSB9KSlcbiAgICApO1xuICB9IGVsc2UgaWYgKGhhc2hTdGF0ZS52aWV3ID09PSAncmVjZW50Jykge1xuICAgIHRpdGxlID0gJ1x1NjcwMFx1OEZEMVx1NzAwRlx1ODlCRCc7XG4gICAgY29uc3QgYWxsID0gd2luZG93LkNBVEVHT1JJRVMuZmxhdE1hcChjID0+XG4gICAgICAoYy50b3BpY3MgfHwgW10pLm1hcCh0ID0+ICh7IC4uLnQsIGNhdGVnb3J5SWQ6IGMuaWQsIGNhdGVnb3J5TmFtZTogYy5uYW1lLCB0b25lOiBjLnRvbmUgfSkpXG4gICAgKTtcbiAgICB0b3BpY3MgPSByZWNlbnQubWFwKGlkID0+IGFsbC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKS5maWx0ZXIoQm9vbGVhbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2F0ID0gd2luZG93LkNBVEVHT1JJRVMuZmluZChjID0+IGMuaWQgPT09IGhhc2hTdGF0ZS5jYXRlZ29yeUlkKTtcbiAgICBpZiAoIWNhdCkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzgwcHggMjRweCcgfX0+XHU2MjdFXHU0RTBEXHU1MjMwXHU2QjY0XHU1MjA2XHU5ODVFPC9kaXY+O1xuICAgIHRpdGxlID0gY2F0Lm5hbWU7XG4gICAgdG9waWNzID0gKGNhdC50b3BpY3MgfHwgW10pLm1hcCh0ID0+ICh7IC4uLnQsIGNhdGVnb3J5SWQ6IGNhdC5pZCwgY2F0ZWdvcnlOYW1lOiBjYXQubmFtZSwgdG9uZTogY2F0LnRvbmUgfSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgci1zZWN0aW9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzY0cHggMjRweCcgfX0+XG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICdjbGFtcCgyOHB4LDN2dywzNnB4KScsIGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luOiAnMCAwIDEycHgnLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJyB9fT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgZm9udFNpemU6IDE1LCBtYXJnaW5Cb3R0b206IDQwIH19Plx1NTE3MSB7dG9waWNzLmxlbmd0aH0gXHU3QkM3PC9wPlxuXG4gICAgICB7dG9waWNzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA0OCwgdGV4dEFsaWduOiAnY2VudGVyJywgYmFja2dyb3VuZDogJ3ZhcigtLWNyZWFtLTEpJywgYm9yZGVyUmFkaXVzOiAxNiwgY29sb3I6ICd2YXIoLS1tdXRlZCknIH19PlxuICAgICAgICAgIHtoYXNoU3RhdGUudmlldyA9PT0gJ2Zhdm9yaXRlcycgJiYgJ1x1NjBBOFx1OTA4NFx1NkM5Mlx1NjcwOVx1NjUzNlx1ODVDRlx1NEVGQlx1NEY1NVx1NjU4N1x1N0FFMFx1MzAwMlx1NzAwRlx1ODlCRFx1NjU4N1x1N0FFMFx1NjY0Mlx1OUVERVx1NjRDQVx1NjExQlx1NUZDM1x1NTM3M1x1NTNFRlx1NjUzNlx1ODVDRlx1MzAwMid9XG4gICAgICAgICAge2hhc2hTdGF0ZS52aWV3ID09PSAncmVjZW50JyAmJiAnXHU2MEE4XHU5MDg0XHU2QzkyXHU2NzA5XHU3MDBGXHU4OUJEXHU3RDAwXHU5MzA0XHUzMDAyJ31cbiAgICAgICAgICB7IWhhc2hTdGF0ZS52aWV3ICYmICdcdTkwMTlcdTUwMEJcdTUyMDZcdTk4NUVcdTc2RUVcdTUyNERcdTZDOTJcdTY3MDlcdTY1ODdcdTdBRTBcdTMwMDInfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6IDE2IH19PlxuICAgICAgICAgIHt0b3BpY3MubWFwKHQgPT4gKFxuICAgICAgICAgICAgPGEga2V5PXt0LmlkfSBocmVmPXtgIy8ke3QuY2F0ZWdvcnlJZH0vJHt0LmlkfWB9IGNsYXNzTmFtZT1cInItbGlzdC1jYXJkIHRvcGljLWNhcmRcIiBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGdhcDogMjAsIHBhZGRpbmc6IDI0LCBib3JkZXJSYWRpdXM6IDE0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tYmcpJywgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAndmFyKC0tZmcpJywgYm94U2hhZG93OiAndmFyKC0tc2hhZG93LXNvZnQpJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgZmxleFNocmluazogMCwgYm9yZGVyUmFkaXVzOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHt0LnRvbmV9MTVgLCBkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogdC50b25lIH19PlxuICAgICAgICAgICAgICAgIDxJY29uLkFycm93UmlnaHQgc3R5bGU9e3sgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4xZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIGNvbG9yOiB0LnRvbmUsIG1hcmdpbkJvdHRvbTogNiB9fT57dC5jYXRlZ29yeU5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJywgbWFyZ2luOiAwLCBsaW5lSGVpZ2h0OiAxLjQ1IH19PlxuICAgICAgICAgICAgICAgICAge3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICB7dC5zdW1tYXJ5ICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS1tdXRlZCknLCBtYXJnaW5Ub3A6IDgsIGxpbmVIZWlnaHQ6IDEuNiB9fT57dC5zdW1tYXJ5fTwvcD59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgU0VPIGhlbHBlcnMgXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiB1cGRhdGVNZXRhKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpO1xuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgZWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgZWwuc2V0QXR0cmlidXRlKCdjb250ZW50JywgZGVzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVKc29uTGQodG9waWMsIGNhdGVnb3J5KSB7XG4gIGNvbnN0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc29uLWxkJyk7XG4gIGlmIChvbGQpIG9sZC5yZW1vdmUoKTtcbiAgaWYgKCF0b3BpYykgcmV0dXJuO1xuICBjb25zdCBkYXRhID0ge1xuICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLCAnQHR5cGUnOiAnTWVkaWNhbFdlYlBhZ2UnLFxuICAgIG5hbWU6IHRvcGljLnRpdGxlLCBkZXNjcmlwdGlvbjogdG9waWMuc3VtbWFyeSB8fCAnJywgaW5MYW5ndWFnZTogJ3poLVRXJyxcbiAgICBhYm91dDogeyAnQHR5cGUnOiAnTWVkaWNhbENvbmRpdGlvbicsIG5hbWU6IHRvcGljLnRpdGxlIH0sXG4gICAgcHVibGlzaGVyOiB7ICdAdHlwZSc6ICdNZWRpY2FsT3JnYW5pemF0aW9uJywgbmFtZTogKHdpbmRvdy5DT05GSUcgfHwge30pLmNsaW5pY05hbWUgfHwgJycgfSxcbiAgICBicmVhZGNydW1iOiB7XG4gICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxuICAgICAgaXRlbUxpc3RFbGVtZW50OiBbXG4gICAgICAgIHsgJ0B0eXBlJzogJ0xpc3RJdGVtJywgcG9zaXRpb246IDEsIG5hbWU6ICdcdTk5OTZcdTk4MDEnLCBpdGVtOiAnIy8nIH0sXG4gICAgICAgIHsgJ0B0eXBlJzogJ0xpc3RJdGVtJywgcG9zaXRpb246IDIsIG5hbWU6IGNhdGVnb3J5Lm5hbWUsIGl0ZW06IGAjLyR7Y2F0ZWdvcnkuaWR9YCB9LFxuICAgICAgICB7ICdAdHlwZSc6ICdMaXN0SXRlbScsIHBvc2l0aW9uOiAzLCBuYW1lOiB0b3BpYy50aXRsZSB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHMuaWQgPSAnanNvbi1sZCc7IHMudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgcy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xufVxuXG5jb25zdCBfX2NvbnRlbnRDYWNoZSA9IHt9O1xuXG4vLyBTYWZlSHRtbDogc2FuaXRpemUgd2l0aCBET01QdXJpZnksIHRoZW4gbW91bnQgdmlhIERvY3VtZW50RnJhZ21lbnQuXG4vLyBVc2VzIHJlZiArIHJlcGxhY2VDaGlsZHJlbiBcdTIwMTQgTk9UIFJlYWN0J3MgcHJvcC1iYXNlZCBIVE1MIGluamVjdGlvbi5cbmZ1bmN0aW9uIFNhZmVIdG1sKHsgaHRtbCB9KSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbCA9IHJlZi5jdXJyZW50O1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCBjbGVhbiA9IHdpbmRvdy5ET01QdXJpZnlcbiAgICAgID8gd2luZG93LkRPTVB1cmlmeS5zYW5pdGl6ZShodG1sLCB7IFVTRV9QUk9GSUxFUzogeyBodG1sOiB0cnVlIH0gfSlcbiAgICAgIDogJyc7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChjbGVhbik7XG4gICAgZWwucmVwbGFjZUNoaWxkcmVuKGZyYWdtZW50KTtcbiAgfSwgW2h0bWxdKTtcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiLz47XG59XG5cbmZ1bmN0aW9uIEFydGljbGVQYWdlKHsgY3R4IH0pIHtcbiAgY29uc3QgeyBoYXNoU3RhdGUsIGZhdm9yaXRlcywgdG9nZ2xlRmF2b3JpdGUsIGFkZFJlY2VudCB9ID0gY3R4O1xuICBjb25zdCBbaHRtbCwgIHNldEh0bWxdICA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGNhdGVnb3J5ID0gd2luZG93LkNBVEVHT1JJRVMuZmluZChjID0+IGMuaWQgPT09IGhhc2hTdGF0ZS5jYXRlZ29yeUlkKTtcbiAgY29uc3QgdG9waWMgICAgPSBjYXRlZ29yeT8udG9waWNzLmZpbmQodCA9PiB0LmlkID09PSBoYXNoU3RhdGUudG9waWNJZCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRvcGljKSByZXR1cm47XG4gICAgYWRkUmVjZW50KHRvcGljLmlkKTtcbiAgICB1cGRhdGVNZXRhKGAke3RvcGljLnRpdGxlfSB8ICR7d2luZG93LkNPTkZJRz8uc2l0ZU5hbWVTaG9ydCB8fCAnJ31gLCB0b3BpYy5zdW1tYXJ5IHx8ICcnKTtcbiAgICB1cGRhdGVKc29uTGQodG9waWMsIGNhdGVnb3J5KTtcblxuICAgIGlmIChfX2NvbnRlbnRDYWNoZVt0b3BpYy5pZF0pIHsgc2V0SHRtbChfX2NvbnRlbnRDYWNoZVt0b3BpYy5pZF0pOyByZXR1cm47IH1cbiAgICBjb25zdCBwYXRoID0gdG9waWMuY29udGVudFBhdGg7XG4gICAgaWYgKCFwYXRoKSB7IHNldEVycm9yKCdcdTY3MkNcdTY1ODdcdTVDMUFcdTcxMjFcdTUxNjdcdTVCQjlcdTZBOTRcdTY4NDgnKTsgcmV0dXJuOyB9XG4gICAgZmV0Y2gocGF0aClcbiAgICAgIC50aGVuKHIgPT4geyBpZiAoIXIub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Iuc3RhdHVzfWApOyByZXR1cm4gci50ZXh0KCk7IH0pXG4gICAgICAudGhlbih0ZXh0ID0+IHsgX19jb250ZW50Q2FjaGVbdG9waWMuaWRdID0gdGV4dDsgc2V0SHRtbCh0ZXh0KTsgc2V0RXJyb3IobnVsbCk7IH0pXG4gICAgICAuY2F0Y2goZSA9PiBzZXRFcnJvcihgXHU4RjA5XHU1MTY1XHU1OTMxXHU2NTU3XHVGRjFBJHtlLm1lc3NhZ2V9YCkpO1xuICB9LCBbdG9waWM/LmlkXSk7XG5cbiAgaWYgKCFjYXRlZ29yeSB8fCAhdG9waWMpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnODBweCAyNHB4JyB9fT5cdTYyN0VcdTRFMERcdTUyMzBcdTZCNjRcdTY1ODdcdTdBRTA8L2Rpdj47XG4gIH1cbiAgY29uc3QgaXNGYXYgPSBmYXZvcml0ZXMuaW5jbHVkZXModG9waWMuaWQpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwici1hcnRpY2xlLXBhZFwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2NHB4IDI0cHgnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgci1hcnRpY2xlLWdyaWRcIiBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMjQwcHgnLCBnYXA6IDY0LCBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICAgICAgfX0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInItYXJ0aWNsZS1ib2R5XCIgc3R5bGU9e3sgbWF4V2lkdGg6ICd2YXIoLS1tYXgtYXJ0aWNsZSknIH19PlxuICAgICAgICAgIDxhIGhyZWY9e2AjLyR7Y2F0ZWdvcnkuaWR9YH0gc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4xMmVtJyxcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLCBjb2xvcjogY2F0ZWdvcnkudG9uZSwgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICB9fT5cdTIxOTAge2NhdGVnb3J5Lm5hbWV9PC9hPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyLWFydGljbGUtaDFcIiBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICdjbGFtcCgyOHB4LDMuMnZ3LDQwcHgpJywgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAnMTJweCAwIDIwcHgnLCBsaW5lSGVpZ2h0OiAxLjI1LCBsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWZnLWhlYWRpbmcpJyxcbiAgICAgICAgICB9fT57dG9waWMudGl0bGV9PC9oMT5cbiAgICAgICAgICB7dG9waWMuc3VtbWFyeSAmJiAoXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTcsIGNvbG9yOiAndmFyKC0tbXV0ZWQpJywgbGluZUhlaWdodDogMS43LCBtYXJnaW46IDAgfX0+XG4gICAgICAgICAgICAgIHt0b3BpYy5zdW1tYXJ5fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzI4cHggMCcsIHBhZGRpbmdCb3R0b206IDI0LCBib3JkZXJCb3R0b206ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUodG9waWMuaWQpfSBhcmlhLXByZXNzZWQ9e2lzRmF2fSBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLCBib3JkZXJSYWRpdXM6IDk5OSwgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzRmF2ID8gJ3JnYmEoMjMyLDE1MCw5NywwLjEyKScgOiAndmFyKC0tYmcpJyxcbiAgICAgICAgICAgICAgY29sb3I6IGlzRmF2ID8gJ3ZhcigtLXBlYWNoKScgOiAndmFyKC0tbXV0ZWQpJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxJY29uLkhlYXJ0IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCB9fS8+XG4gICAgICAgICAgICAgIHtpc0ZhdiA/ICdcdTVERjJcdTY1MzZcdTg1Q0YnIDogJ1x1NjUzNlx1ODVDRid9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHt0b3BpYy5sYXN0VXBkYXRlZCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6ICd2YXIoLS1tdXRlZC0zKScgfX0+XG4gICAgICAgICAgICAgICAgXHU2NzAwXHU1RjhDXHU2NkY0XHU2NUIwXHVGRjFBe3RvcGljLmxhc3RVcGRhdGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiY2FsbG91dCBjYWxsb3V0LWRhbmdlclwiPjxzdHJvbmc+XHU4RjA5XHU1MTY1XHU5MzJGXHU4QUE0PC9zdHJvbmc+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICB7IWVycm9yICYmIGh0bWwgPT09IG51bGwgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW11dGVkKScgfX0+XHU4RjA5XHU1MTY1XHU0RTJEXHUyMDI2PC9kaXY+fVxuICAgICAgICAgIHtodG1sICE9PSBudWxsICYmIDxTYWZlSHRtbCBodG1sPXtodG1sfS8+fVxuICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInItYXJ0aWNsZS10b2NcIiBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAxMDAsIGZvbnRTaXplOiAxMywgY29sb3I6ICd2YXIoLS1tdXRlZCknLFxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIG1hcmdpbkJvdHRvbTogMTIgfX0+XHU2NzJDXHU5ODAxXHU5MUNEXHU5RURFPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW11dGVkLTMpJywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5cbiAgICAgICAgICAgIChcdTgxRUFcdTUyRDVcdTc2RUVcdTkzMDRcdTUyOUZcdTgwRkRcdTVDMDdcdTY1QkNcdTVGOENcdTdFOENcdTUyQTBcdTUxNjUpXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRhY3RQYWdlKHsgY3R4IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17eyBwYWRkaW5nOiAnNjRweCAwJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzAgMjRweCcsIG1hcmdpbkJvdHRvbTogNDAgfX0+XG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogMzYsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIG1hcmdpbjogJzAgMCAzMnB4JyB9fT5cbiAgICAgICAgICBcdTgwNkZcdTdENjFcdTYyMTFcdTUwMTFcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAge3dpbmRvdy5JbmZvU2VjdGlvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvdy5JbmZvU2VjdGlvbil9XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N0b3JzUGFnZSgpIHtcbiAgY29uc3QgZG9jdG9ycyA9IHdpbmRvdy5ET0NUT1JTIHx8IFtdO1xuICBjb25zdCB7IGg6IF9oIH0gPSB7IGg6IFJlYWN0LmNyZWF0ZUVsZW1lbnQgfTtcblxuICBmdW5jdGlvbiBTZWN0aW9uKHsgbGFiZWwsIGl0ZW1zLCBodWUgfSkge1xuICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE4IH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiA3MDAsIGxldHRlclNwYWNpbmc6ICcwLjA4ZW0nLFxuICAgICAgICAgIGNvbG9yOiBodWUsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLCBtYXJnaW5Cb3R0b206IDYsXG4gICAgICAgIH19PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbjogMCwgcGFkZGluZzogJzAgMCAwIDE2cHgnLCBsaXN0U3R5bGU6ICdkaXNjJyB9fT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiAndmFyKC0tZmcpJywgbGluZUhlaWdodDogMS43IH19PntpdGVtfTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tY3JlYW0tMSknLCBtaW5IZWlnaHQ6ICcxMDB2aCcsIHBhZGRpbmc6ICc2NHB4IDAgODBweCcgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDI0cHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDggfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDcwMCwgbGV0dGVyU3BhY2luZzogJzAuMWVtJywgY29sb3I6ICd2YXIoLS10ZWFsKScsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICAgIERPQ1RPUlMgXHUwMEI3IFx1OTFBQlx1NUUyQlx1NTcxOFx1OTY4QVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogMzYsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScsIG1hcmdpbjogMCB9fT5cbiAgICAgICAgICAgIFx1OEE4RFx1OEI1OFx1NjBBOFx1NzY4NFx1OTFBQlx1NUUyQlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSknLFxuICAgICAgICAgIGdhcDogMjQsXG4gICAgICAgIH19PlxuICAgICAgICAgIHtkb2N0b3JzLm1hcChkID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtkLmlkfSBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTgsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KScsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgey8qIENhcmQgaGVhZGVyICovfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7ZC5odWV9MTggMCUsICR7ZC5odWV9MDggMTAwJSlgLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDNweCBzb2xpZCAke2QuaHVlfWAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHggMjRweCAxNnB4JyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS1mZy1oZWFkaW5nKScgfX0+XG4gICAgICAgICAgICAgICAgICB7ZC5uYW1lfSA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6ICd2YXIoLS1tdXRlZCknIH19Plx1OTFBQlx1NUUyQjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IGQuaHVlLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblRvcDogNCwgbGluZUhlaWdodDogMS42IH19PlxuICAgICAgICAgICAgICAgICAge2QudGl0bGU/LnNwbGl0KCcgXHUwMEI3ICcpLm1hcCgocGFydCwgaSkgPT4gPGRpdiBrZXk9e2l9PntwYXJ0fTwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBQaG90byBhcmVhICovfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICR7ZC5odWV9MjIgMCUsICR7ZC5odWV9MDYgMTAwJSlgLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjRweCAwJyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpJyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2QucGhvdG9cbiAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9e2QucGhvdG99IGFsdD17YCR7ZC5uYW1lfSBcdTkxQUJcdTVFMkJgfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDAsIGhlaWdodDogMjQwLCBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJywgb2JqZWN0UG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDNweCBzb2xpZCAke2QuaHVlfTQ0YCxcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGAwIDhweCAyNHB4IC04cHggJHtkLmh1ZX02NmAsXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgIDogPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDAsIGhlaWdodDogMjQwLCBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAke2QuaHVlfSAwJSwgJHtkLmh1ZX1iYiAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLCBwbGFjZUl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGAwIDhweCAyNHB4IC04cHggJHtkLmh1ZX02NmAsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDY0LCBoZWlnaHQ6IDY0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dpbmRvdy5JbGxvICYmIDx3aW5kb3cuSWxsby5Eb2N0b3IgdG9uZT1cInJnYmEoMjU1LDI1NSwyNTUsMC44NSlcIi8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBDYXJkIGJvZHkgKi99XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzE2cHggMjRweCAyNHB4JywgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBsYWJlbD1cIlx1OTFBQlx1NUUyQlx1N0Q5M1x1NkI3N1wiIGl0ZW1zPXtkLmV4cGVyaWVuY2V9IGh1ZT17ZC5odWV9IC8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gbGFiZWw9XCJcdTVDMDhcdTc5RDFcdThDQzdcdTY4M0NcIiBpdGVtcz17ZC5jZXJ0aWZpY2F0aW9ufSBodWU9e2QuaHVlfSAvPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGxhYmVsPVwiXHU1QzA4XHU5NTc3XCIgaXRlbXM9e2Quc3BlY2lhbHR5fSBodWU9e2QuaHVlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgTGlzdFBhZ2UsIEFydGljbGVQYWdlLCBDb250YWN0UGFnZSwgRG9jdG9yc1BhZ2UgfSk7XG4iLCAiLy8gQXBwIHJvb3QgXHUyMDE0IGhhc2ggcm91dGVyLCB0aGVtZS9mb250U2NhbGUvY3ZkTW9kZSBzdGF0ZSwgZmF2b3JpdGVzL3JlY2VudCxcbi8vIG1vdW50cyBOYXZiYXIgKyByb3V0ZSBjb250ZW50ICsgRm9vdGVyICsgQTExeSBGQUIuXG5cbi8vIEltcG9ydCBzaWJsaW5nIGZpbGVzIGZvciB0aGVpciBzaWRlIGVmZmVjdHMgKE9iamVjdC5hc3NpZ24gdG8gd2luZG93KVxuaW1wb3J0ICcuL3NoYXJlZC5qc3gnO1xuaW1wb3J0ICcuL2RhdGEuanN4JztcbmltcG9ydCAnLi9uYXZiYXIuanN4JztcbmltcG9ydCAnLi9oZXJvZXMuanN4JztcbmltcG9ydCAnLi9zZWN0aW9ucy5qc3gnO1xuaW1wb3J0ICcuL3BhZ2VzLmpzeCc7XG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlRWxlbWVudDogaCwgRnJhZ21lbnQgfSA9IFJlYWN0O1xuY29uc3QgeyBjcmVhdGVSb290IH0gPSBSZWFjdERPTTtcblxuZnVuY3Rpb24gcGFyc2VIYXNoKCkge1xuICBjb25zdCByYXcgPSAod2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJykucmVwbGFjZSgvXiMvLCAnJyk7XG4gIGNvbnN0IHBhcnRzID0gcmF3LnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAocGFydHMubGVuZ3RoID09PSAwKSByZXR1cm4geyByb3V0ZTogJ2hvbWUnIH07XG4gIGlmIChwYXJ0c1swXSA9PT0gJ2Zhdm9yaXRlcycpIHJldHVybiB7IHJvdXRlOiAnbGlzdCcsIHZpZXc6ICdmYXZvcml0ZXMnIH07XG4gIGlmIChwYXJ0c1swXSA9PT0gJ3JlY2VudCcpICAgIHJldHVybiB7IHJvdXRlOiAnbGlzdCcsIHZpZXc6ICdyZWNlbnQnIH07XG4gIGlmIChwYXJ0c1swXSA9PT0gJ2NvbnRhY3QnKSAgIHJldHVybiB7IHJvdXRlOiAnY29udGFjdCcgfTtcbiAgaWYgKHBhcnRzWzBdID09PSAnZG9jdG9ycycpICAgcmV0dXJuIHsgcm91dGU6ICdkb2N0b3JzJyB9O1xuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSAgICAgICByZXR1cm4geyByb3V0ZTogJ2xpc3QnLCBjYXRlZ29yeUlkOiBwYXJ0c1swXSB9O1xuICByZXR1cm4geyByb3V0ZTogJ2FydGljbGUnLCBjYXRlZ29yeUlkOiBwYXJ0c1swXSwgdG9waWNJZDogcGFydHNbMV0gfTtcbn1cbmZ1bmN0aW9uIHJlYWRMcyhrZXksIGZhbGxiYWNrKSB7XG4gIHRyeSB7IGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IHJldHVybiByYXcgIT09IG51bGwgPyBKU09OLnBhcnNlKHJhdykgOiBmYWxsYmFjazsgfVxuICBjYXRjaCB7IHJldHVybiBmYWxsYmFjazsgfVxufVxuZnVuY3Rpb24gd3JpdGVMcyhrZXksIHZhbCkgeyB0cnkgeyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbCkpOyB9IGNhdGNoIHt9IH1cblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaGFzaFN0YXRlLCBzZXRIYXNoU3RhdGVdID0gdXNlU3RhdGUocGFyc2VIYXNoKTtcbiAgY29uc3QgW3RoZW1lLCAgICAgc2V0VGhlbWVdICAgICA9IHVzZVN0YXRlKCgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpICAgICB8fCAnbGlnaHQnKTtcbiAgY29uc3QgW2ZvbnRTY2FsZSwgc2V0Rm9udFNjYWxlXSA9IHVzZVN0YXRlKCgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb250U2NhbGUnKSB8fCAnbm9ybWFsJyk7XG4gIGNvbnN0IFtjdmRNb2RlLCAgIHNldEN2ZE1vZGVdICAgPSB1c2VTdGF0ZSgoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3ZkTW9kZScpICAgPT09ICdvbicpO1xuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoKCkgPT4gcmVhZExzKCdneF9mYXZvcml0ZXMnLCBbXSkpO1xuICBjb25zdCBbcmVjZW50LCAgICBzZXRSZWNlbnRdICAgID0gdXNlU3RhdGUoKCkgPT4gcmVhZExzKCdneF9yZWNlbnQnLCBbXSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25IYXNoID0gKCkgPT4geyBzZXRIYXNoU3RhdGUocGFyc2VIYXNoKCkpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2gpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaCk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpOyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWUpOyB9LCBbdGhlbWVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbnRTY2FsZScsIGZvbnRTY2FsZSk7IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzZW5pb3InLCBmb250U2NhbGUgPT09ICdzZW5pb3InKTsgfSwgW2ZvbnRTY2FsZV0pO1xuXG4gIC8vIGN2ZE1vZGU6IGFwcGx5IHN5bmNocm9ub3VzbHkgZHVyaW5nIHJlbmRlciBzbyBQcm94eSBzZWVzIGN1cnJlbnQgdmFsdWUgb24gZmlyc3QgcGFpbnRcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoY3ZkTW9kZSkgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jdmQnLCAnb24nKTtcbiAgICBlbHNlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY3ZkJyk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N2ZE1vZGUnLCBjdmRNb2RlID8gJ29uJyA6ICdvZmYnKTsgfSwgW2N2ZE1vZGVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHdyaXRlTHMoJ2d4X2Zhdm9yaXRlcycsIGZhdm9yaXRlcyksIFtmYXZvcml0ZXNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHdyaXRlTHMoJ2d4X3JlY2VudCcsIHJlY2VudCksIFtyZWNlbnRdKTtcblxuICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IGlkID0+IHNldEZhdm9yaXRlcyhwcmV2ID0+IHByZXYuaW5jbHVkZXMoaWQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSBpZCkgOiBbLi4ucHJldiwgaWRdKTtcbiAgY29uc3QgYWRkUmVjZW50ID0gaWQgPT4gc2V0UmVjZW50KHByZXYgPT4gW2lkLCAuLi5wcmV2LmZpbHRlcih4ID0+IHggIT09IGlkKV0uc2xpY2UoMCwgMTApKTtcblxuICBjb25zdCBjdHggPSB7IHRoZW1lLCBzZXRUaGVtZSwgZm9udFNjYWxlLCBzZXRGb250U2NhbGUsIGN2ZE1vZGUsIHNldEN2ZE1vZGUsIGZhdm9yaXRlcywgdG9nZ2xlRmF2b3JpdGUsIHJlY2VudCwgYWRkUmVjZW50LCBoYXNoU3RhdGUgfTtcblxuICAvLyBMYXRlLWJpbmQ6IGVhY2ggb3RoZXIgSlNYIGZpbGUgYXNzaWducyBpdHMgY29tcG9uZW50IHRvIHdpbmRvdyB2aWEgT2JqZWN0LmFzc2lnblxuICBjb25zdCB7IE5hdmJhciwgSG9tZVBhZ2UsIExpc3RQYWdlLCBBcnRpY2xlUGFnZSwgQ29udGFjdFBhZ2UsIERvY3RvcnNQYWdlLCBGb290ZXIgfSA9IHdpbmRvdztcblxuICByZXR1cm4gaChGcmFnbWVudCwgbnVsbCxcbiAgICBOYXZiYXIgJiYgaChOYXZiYXIsIHsgY3R4IH0pLFxuICAgIGhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2hvbWUnICAgICYmIEhvbWVQYWdlICAgICYmIGgoSG9tZVBhZ2UsICAgIHsgY3R4IH0pLFxuICAgIGhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2xpc3QnICAgICYmIExpc3RQYWdlICAgICYmIGgoTGlzdFBhZ2UsICAgIHsgY3R4IH0pLFxuICAgIGhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2FydGljbGUnICYmIEFydGljbGVQYWdlICYmIGgoQXJ0aWNsZVBhZ2UsIHsgY3R4IH0pLFxuICAgIGhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2NvbnRhY3QnICYmIENvbnRhY3RQYWdlICYmIGgoQ29udGFjdFBhZ2UsIHsgY3R4IH0pLFxuICAgIGhhc2hTdGF0ZS5yb3V0ZSA9PT0gJ2RvY3RvcnMnICYmIERvY3RvcnNQYWdlICYmIGgoRG9jdG9yc1BhZ2UsIHsgY3R4IH0pLFxuICAgIEZvb3RlciAmJiBoKEZvb3RlciwgeyBjdHggfSksXG4gICAgaCgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiBgYTExeS1mYWIgJHtjdmRNb2RlID8gJ29uJyA6ICcnfWAsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBzZXRDdmRNb2RlKHYgPT4gIXYpLFxuICAgICAgJ2FyaWEtcHJlc3NlZCc6IGN2ZE1vZGUsXG4gICAgICB0aXRsZTogJ1x1NTIwN1x1NjNEQlx1ODI3Mlx1NUYzMVx1NTNDQlx1NTU4NFx1NkEyMVx1NUYwRicsXG4gICAgfSxcbiAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2RvdCcsICdhcmlhLWhpZGRlbic6IHRydWUgfSksXG4gICAgICBgXHU4MjcyXHU1RjMxXHU1M0NCXHU1NTg0XHU2QTIxXHU1RjBGJHtjdmRNb2RlID8gJyBcdTAwQjcgXHU1REYyXHU5NThCXHU1NTVGJyA6ICcnfWBcbiAgICApXG4gICk7XG59XG5cbmNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5pZiAocm9vdEVsKSBjcmVhdGVSb290KHJvb3RFbCkucmVuZGVyKGgoQXBwKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUVBLE1BQU1BLFFBQU87QUFBQSxJQUNYLFFBQVEsQ0FBQyxNQUNQLG9DQUFDLFNBQUksU0FBUSxhQUFZLE1BQUssUUFBTyxRQUFPLGdCQUFlLGFBQVksT0FBTSxlQUFjLFNBQVEsZ0JBQWUsU0FBUyxHQUFHLEtBQzVILG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUksR0FBRSxvQ0FBQyxVQUFLLEdBQUUsa0JBQWlCLENBQzNEO0FBQUEsSUFFRixNQUFNLENBQUMsTUFDTCxvQ0FBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLE9BQU0sZUFBYyxTQUFTLEdBQUcsS0FDckcsb0NBQUMsVUFBSyxHQUFFLDJCQUEwQixDQUNwQztBQUFBLElBRUYsWUFBWSxDQUFDLE1BQ1gsb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxTQUFTLEdBQUcsS0FDNUgsb0NBQUMsVUFBSyxHQUFFLHlCQUF3QixDQUNsQztBQUFBLElBRUYsY0FBYyxDQUFDLE1BQ2Isb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxTQUFTLEdBQUcsS0FDNUgsb0NBQUMsVUFBSyxHQUFFLHNCQUFxQixDQUMvQjtBQUFBLElBRUYsT0FBTyxDQUFDLE1BQ04sb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxTQUFTLEdBQUcsS0FDNUgsb0NBQUMsVUFBSyxHQUFFLHlSQUF3UixDQUNsUztBQUFBLElBRUYsT0FBTyxDQUFDLE1BQ04sb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxTQUFTLEdBQUcsS0FDNUgsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsS0FBSSxHQUFFLG9DQUFDLFVBQUssR0FBRSxlQUFjLENBQ3hEO0FBQUEsSUFFRixLQUFLLENBQUMsTUFDSixvQ0FBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFNBQVMsR0FBRyxLQUM1SCxvQ0FBQyxVQUFLLEdBQUUsa0RBQWlELEdBQUUsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsS0FBSSxDQUMzRjtBQUFBLElBRUYsVUFBVSxDQUFDLE1BQ1Qsb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxTQUFTLEdBQUcsS0FDNUgsb0NBQUMsVUFBSyxHQUFFLEtBQUksR0FBRSxLQUFJLE9BQU0sTUFBSyxRQUFPLE1BQUssSUFBRyxLQUFHLEdBQUUsb0NBQUMsVUFBSyxHQUFFLHlCQUF1QixDQUNsRjtBQUFBLElBRUYsTUFBTSxDQUFDLE1BQ0wsb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxPQUFNLGVBQWMsU0FBUyxHQUFHLEtBQ3JHLG9DQUFDLFVBQUssR0FBRSxvQkFBa0IsQ0FDNUI7QUFBQSxJQUVGLE9BQU8sQ0FBQyxNQUNOLG9DQUFDLFNBQUksU0FBUSxhQUFZLE1BQUssUUFBTyxRQUFPLGdCQUFlLGFBQVksT0FBTSxlQUFjLFNBQVMsR0FBRyxLQUNyRyxvQ0FBQyxVQUFLLEdBQUUsWUFBVSxDQUNwQjtBQUFBLElBRUYsTUFBTSxDQUFDLE1BQ0wsb0NBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxnQkFBZ0IsR0FBRyxLQUMvQyxvQ0FBQyxVQUFLLEdBQUUsOEhBQTRILENBQ3RJO0FBQUEsSUFFRixPQUFPLENBQUMsTUFDTixvQ0FBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFNBQVMsR0FBRyxLQUM1SCxvQ0FBQyxVQUFLLEdBQUUsNElBQTBJLENBQ3BKO0FBQUEsSUFFRixVQUFVLENBQUMsTUFDVCxvQ0FBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFNBQVMsR0FBRyxLQUM1SCxvQ0FBQyxVQUFLLEdBQUUsdURBQXFELENBQy9EO0FBQUEsSUFFRixTQUFTLENBQUMsTUFDUixvQ0FBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFNBQVMsR0FBRyxLQUM1SCxvQ0FBQyxVQUFLLEdBQUUsZ0JBQWMsQ0FDeEI7QUFBQSxJQUVGLEdBQUcsQ0FBQyxNQUNGLG9DQUFDLFNBQUksU0FBUSxhQUFZLE1BQUssUUFBTyxRQUFPLGdCQUFlLGFBQVksT0FBTSxlQUFjLFNBQVMsR0FBRyxLQUNyRyxvQ0FBQyxVQUFLLEdBQUUsd0JBQXNCLENBQ2hDO0FBQUEsRUFFSjtBQUdBLFdBQVNDLFlBQVcsRUFBRSxPQUFPLEdBQUcsR0FBRztBQUNqQyxXQUNFO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxLQUFJO0FBQUEsUUFDSixLQUFJO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixPQUFPLEVBQUUsT0FBTyxNQUFNLFFBQVEsTUFBTSxjQUFjLElBQUksV0FBVyxXQUFXLFlBQVksT0FBTztBQUFBO0FBQUEsSUFDakc7QUFBQSxFQUVKO0FBR0EsTUFBTUMsUUFBTztBQUFBLElBQ1gsYUFBYSxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQy9CLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxVQUFLLEdBQUUsaUNBQStCLEdBQ3ZDLG9DQUFDLFVBQUssR0FBRSxxQkFBbUIsR0FDM0Isb0NBQUMsVUFBSyxHQUFFLGlDQUErQixHQUN2QyxvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxLQUFHLEdBQzdCLG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUksTUFBTSxNQUFNLFFBQU8sUUFBTSxDQUN6RDtBQUFBLElBRUYsT0FBTyxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQ3pCLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxVQUFLLEdBQUUsTUFBSyxHQUFFLE1BQUssT0FBTSxNQUFLLFFBQU8sTUFBSyxJQUFHLE1BQUssV0FBVSxxQkFBbUIsR0FDaEYsb0NBQUMsVUFBSyxHQUFFLGdCQUFlLEdBQ3ZCLG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE1BQUksR0FDOUIsb0NBQUMsVUFBSyxHQUFFLGFBQVcsQ0FDckI7QUFBQSxJQUVGLFdBQVcsQ0FBQyxFQUFFLE9BQU8sVUFBVSxNQUM3QixvQ0FBQyxTQUFJLFNBQVEsZUFBYyxNQUFLLFFBQU8sUUFBUSxNQUFNLGFBQVksT0FBTSxlQUFjLFNBQVEsZ0JBQWUsV0FDMUcsb0NBQUMsVUFBSyxHQUFFLHFDQUFtQyxHQUMzQyxvQ0FBQyxVQUFLLEdBQUUsNEVBQTBFLENBQ3BGO0FBQUEsSUFFRixNQUFNLENBQUMsRUFBRSxPQUFPLFVBQVUsTUFDeEIsb0NBQUMsU0FBSSxTQUFRLGVBQWMsTUFBSyxRQUFPLFFBQVEsTUFBTSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFdBQzFHLG9DQUFDLFVBQUssR0FBRSx5RUFBdUUsR0FDL0Usb0NBQUMsVUFBSyxHQUFFLGlCQUFlLENBQ3pCO0FBQUEsSUFFRixRQUFRLENBQUMsRUFBRSxPQUFPLFVBQVUsTUFDMUIsb0NBQUMsU0FBSSxTQUFRLGVBQWMsTUFBSyxRQUFPLFFBQVEsTUFBTSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFdBQzFHLG9DQUFDLFVBQUssR0FBRSwrREFBNkQsR0FDckUsb0NBQUMsVUFBSyxHQUFFLG9CQUFrQixDQUM1QjtBQUFBLElBRUYsYUFBYSxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQy9CLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxVQUFLLEdBQUUsc0VBQW9FLEdBQzVFLG9DQUFDLFVBQUssR0FBRSxhQUFXLEdBQ25CLG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUksTUFBTSxNQUFNLFFBQU8sUUFBTSxDQUN6RDtBQUFBLElBRUYsT0FBTyxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQ3pCLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxVQUFLLEdBQUUsYUFBVyxHQUNuQixvQ0FBQyxVQUFLLEdBQUUsMkRBQXlELEdBQ2pFLG9DQUFDLFVBQUssR0FBRSwwREFBd0QsR0FDaEUsb0NBQUMsVUFBSyxHQUFFLGFBQVcsQ0FDckI7QUFBQSxJQUVGLE1BQU0sQ0FBQyxFQUFFLE9BQU8sVUFBVSxNQUN4QixvQ0FBQyxTQUFJLFNBQVEsZUFBYyxNQUFLLFFBQU8sUUFBUSxNQUFNLGFBQVksT0FBTSxlQUFjLFNBQVEsZ0JBQWUsV0FDMUcsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsTUFBSSxHQUM5QixvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxLQUFJLE1BQU0sTUFBTSxRQUFPLFFBQU0sR0FDdkQsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsS0FBSSxNQUFNLE1BQU0sUUFBTyxRQUFNLEdBQ3ZELG9DQUFDLFVBQUssR0FBRSx3QkFBc0IsR0FDOUIsb0NBQUMsVUFBSyxHQUFFLHdDQUFzQyxDQUNoRDtBQUFBLElBRUYsT0FBTyxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQ3pCLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxVQUFLLEdBQUUsdUhBQXFILEdBQzdILG9DQUFDLFVBQUssR0FBRSwwQkFBd0IsQ0FDbEM7QUFBQSxJQUVGLE1BQU0sQ0FBQyxFQUFFLE9BQU8sVUFBVSxNQUN4QixvQ0FBQyxTQUFJLFNBQVEsZUFBYyxNQUFLLFFBQU8sUUFBUSxNQUFNLGFBQVksT0FBTSxlQUFjLFNBQVEsZ0JBQWUsV0FDMUcsb0NBQUMsVUFBSyxHQUFFLHFMQUFtTCxDQUM3TDtBQUFBLElBRUYsUUFBUSxDQUFDLEVBQUUsT0FBTyxVQUFVLE1BQzFCLG9DQUFDLFNBQUksU0FBUSxlQUFjLE1BQUssUUFBTyxRQUFRLE1BQU0sYUFBWSxPQUFNLGVBQWMsU0FBUSxnQkFBZSxXQUMxRyxvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxNQUFJLEdBQzlCLG9DQUFDLFVBQUssR0FBRSx3Q0FBc0MsR0FDOUMsb0NBQUMsVUFBSyxHQUFFLHNCQUFvQixHQUM1QixvQ0FBQyxVQUFLLEdBQUUsYUFBVyxHQUNuQixvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxLQUFHLENBQy9CO0FBQUEsSUFFRixRQUFRLENBQUMsRUFBRSxPQUFPLFVBQVUsTUFDMUIsb0NBQUMsU0FBSSxTQUFRLGVBQWMsTUFBSyxRQUFPLFFBQVEsTUFBTSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFdBQzFHLG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE1BQUksR0FDOUIsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsTUFBSSxHQUM5QixvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxLQUFHLEdBQzdCLG9DQUFDLFVBQUssR0FBRSx3Q0FBc0MsR0FDOUMsb0NBQUMsVUFBSyxHQUFFLHdDQUFzQyxHQUM5QyxvQ0FBQyxVQUFLLEdBQUUsc0NBQW9DLENBQzlDO0FBQUEsSUFFRixPQUFPLENBQUMsRUFBRSxPQUFPLFVBQVUsTUFDekIsb0NBQUMsU0FBSSxTQUFRLGVBQWMsTUFBSyxRQUFPLFFBQVEsTUFBTSxhQUFZLE9BQU0sZUFBYyxTQUFRLGdCQUFlLFdBQzFHLG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE1BQUksR0FDOUIsb0NBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsS0FBSSxNQUFNLE1BQU0sUUFBTyxRQUFNLEdBQ3ZELG9DQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE9BQU0sTUFBTSxNQUFNLFFBQU8sUUFBTSxHQUN6RCxvQ0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxPQUFNLE1BQU0sTUFBTSxRQUFPLFFBQU0sR0FDeEQsQ0FBQyxHQUFFLElBQUcsSUFBRyxLQUFJLEtBQUksS0FBSSxLQUFJLEdBQUcsRUFBRSxJQUFJLE9BQUs7QUFDdEMsWUFBTSxNQUFNLElBQUUsS0FBSyxLQUFHO0FBQ3RCLFlBQU0sS0FBSyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUUsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBRTtBQUMxRCxZQUFNLEtBQUssS0FBSyxLQUFLLElBQUksR0FBRyxJQUFFLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUU7QUFDMUQsWUFBTSxLQUFLLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBRSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksR0FBRyxJQUFFO0FBQzFELGFBQU8sb0NBQUMsT0FBRSxLQUFLLEtBQUcsb0NBQUMsVUFBSyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFHLEdBQUUsb0NBQUMsWUFBTyxJQUFRLElBQVEsR0FBRSxLQUFHLENBQUU7QUFBQSxJQUN6RixDQUFDLENBQ0g7QUFBQSxFQUVKO0FBRUEsU0FBTyxPQUFPLFFBQVEsRUFBRSxNQUFBRixPQUFNLE1BQUFFLE9BQU0sWUFBQUQsWUFBVyxDQUFDOzs7QUN6TWhELFdBQVMsY0FBYztBQUNyQixVQUFNLGFBQWEsT0FBTyxjQUFjLENBQUM7QUFDekMsVUFBTSxNQUFNLFdBQVc7QUFBQSxNQUFRLFVBQzVCLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxRQUFNO0FBQUEsUUFDM0IsR0FBRztBQUFBLFFBQUcsS0FBSyxJQUFJO0FBQUEsUUFBTSxZQUFZLElBQUk7QUFBQSxRQUFJLFFBQVEsSUFBSTtBQUFBLE1BQ3ZELEVBQUU7QUFBQSxJQUNKLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFDekUsV0FBTyxFQUFFLFVBQVUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQUEsRUFDOUQ7QUFDQSxNQUFNLEVBQUUsVUFBVSxPQUFPLElBQUksWUFBWTtBQUN6QyxTQUFPLE9BQU8sUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLE9BQU8sRUFBRSxDQUFDOzs7QUNSdEQsV0FBUyxXQUFXO0FBQ2xCLFVBQU0sUUFBVSxPQUFPLFFBQVEsU0FBUztBQUN4QyxVQUFNLFVBQVUsT0FBTyxRQUFRLFNBQVM7QUFDeEMsVUFBTSxVQUFVLE9BQU8sUUFBUSxTQUFTO0FBRXhDLFVBQU0sY0FBYyxNQUFNLFFBQVEsTUFBTTtBQUN0QyxZQUFNLFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDL0IsWUFBTSxXQUFXLENBQUMsc0JBQU0sc0JBQU0sc0JBQU0sc0JBQU0sc0JBQU0sc0JBQU0sb0JBQUs7QUFHM0QsWUFBTSxPQUFPLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQUssb0JBQUksS0FBSyxHQUFFLGtCQUFrQixLQUFLLEdBQUs7QUFDcEYsWUFBTSxTQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxXQUFXO0FBQ3RELFlBQU0sWUFBWSxTQUFTLEtBQUssT0FBTyxDQUFDO0FBRXhDLFlBQU0sUUFBUSxNQUFNLEtBQUssQ0FBQUUsT0FBS0EsR0FBRSxRQUFRLFNBQVM7QUFDakQsVUFBSSxDQUFDLE1BQU8sUUFBTztBQUNuQixVQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsRUFBRSxNQUFNLE9BQUssQ0FBQyxLQUFLLE1BQU0sTUFBTSxFQUFHLFFBQU87QUFFMUUsWUFBTSxXQUFXLE9BQUs7QUFBRSxjQUFNLENBQUNBLElBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLElBQUksTUFBTTtBQUFHLGVBQU9BLEtBQUksS0FBSztBQUFBLE1BQUc7QUFDM0YsWUFBTSxVQUFVLE9BQUssS0FBSyxNQUFNLGtCQUFRLE1BQU07QUFFOUMsWUFBTSxXQUFXO0FBQUEsUUFDZixFQUFFLE9BQU8sc0JBQU8sTUFBTSxNQUFNLEdBQUc7QUFBQSxRQUMvQixFQUFFLE9BQU8sc0JBQU8sTUFBTSxNQUFNLEdBQUc7QUFBQSxRQUMvQixFQUFFLE9BQU8sZ0JBQVEsTUFBTSxNQUFNLEdBQUc7QUFBQSxNQUNsQztBQUVBLFVBQUksZ0JBQWdCO0FBQ3BCLGlCQUFXLEtBQUssVUFBVTtBQUN4QixZQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRztBQUN0QixjQUFNLFFBQVEsRUFBRSxLQUFLLE1BQU0sUUFBRztBQUM5QixZQUFJLE1BQU0sU0FBUyxFQUFHO0FBQ3RCLHdCQUFnQjtBQUNoQixZQUFJLFVBQVUsU0FBUyxNQUFNLENBQUMsQ0FBQyxLQUFLLFNBQVMsU0FBUyxNQUFNLENBQUMsQ0FBQyxHQUFHO0FBQy9ELGlCQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU8sRUFBRSxNQUFNO0FBQUEsUUFDdEM7QUFBQSxNQUNGO0FBRUEsYUFBTyxFQUFFLE1BQU0sT0FBTyxRQUFRLENBQUMsY0FBYztBQUFBLElBQy9DLEdBQUcsQ0FBQyxDQUFDO0FBRUwsV0FDRSxvQ0FBQyxTQUFJLFdBQVUsa0JBQWlCLE9BQU87QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFBb0QsT0FBTztBQUFBLE1BQ3ZFLFVBQVU7QUFBQSxNQUFJLGVBQWU7QUFBQSxNQUFLLGNBQWM7QUFBQSxJQUNsRCxLQUNFLG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU87QUFBQSxNQUNoQyxTQUFTO0FBQUEsTUFBUSxnQkFBZ0I7QUFBQSxNQUFpQixZQUFZO0FBQUEsTUFDOUQsU0FBUztBQUFBLE1BQVksS0FBSztBQUFBLElBQzVCLEtBQ0Usb0NBQUMsU0FBSSxPQUFPLEVBQUUsU0FBUyxRQUFRLEtBQUssSUFBSSxZQUFZLFNBQVMsS0FDMUQsU0FDQyxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxTQUFTLGVBQWUsS0FBSyxHQUFHLFlBQVksU0FBUyxLQUNsRSxvQ0FBQyxLQUFLLE9BQUwsRUFBVyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsSUFBSSxTQUFTLEtBQUssR0FBRSxHQUMzRCxLQUNILEdBRUQsV0FDQyxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxTQUFTLGVBQWUsS0FBSyxHQUFHLFlBQVksU0FBUyxLQUNsRSxvQ0FBQyxLQUFLLEtBQUwsRUFBUyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsSUFBSSxTQUFTLEtBQUssR0FBRSxHQUN6RCxPQUNILEdBRUQsZUFDQyxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxTQUFTLGVBQWUsS0FBSyxHQUFHLFlBQVksVUFBVSxPQUFPLFlBQVksT0FBTyxnQkFBZ0IsVUFBVSxLQUN2SCxvQ0FBQyxVQUFLLE9BQU87QUFBQSxNQUNYLE9BQU87QUFBQSxNQUFHLFFBQVE7QUFBQSxNQUFHLGNBQWM7QUFBQSxNQUFJLFlBQVk7QUFBQSxNQUNuRCxZQUFZLFlBQVksT0FBTyxZQUFZO0FBQUEsTUFDM0MsV0FBVyxZQUFZLE9BQU8sb0NBQW9DO0FBQUEsSUFDcEUsR0FBRSxHQUNELFlBQVksT0FBTyx1Q0FBVyxZQUFZLEtBQUssS0FBSyxZQUFZLFNBQVMsNkJBQVMsb0JBQ3JGLENBRUosR0FDQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLFFBQVEsS0FBSyxJQUFJLFlBQVksU0FBUyxLQUMxRCxXQUNDLG9DQUFDLE9BQUUsTUFBTSxTQUFTLFFBQU8sVUFBUyxLQUFJLGNBQWEsT0FBTyxhQUFXLCtCQUFTLENBRWxGLENBQ0YsQ0FDRjtBQUFBLEVBRUo7QUFDQSxNQUFNLFlBQVksRUFBRSxPQUFPLFdBQVcsZ0JBQWdCLFFBQVEsU0FBUyxJQUFJO0FBRTNFLE1BQU0sTUFBTTtBQUFBLElBQ1YsRUFBRSxLQUFLLE9BQVcsT0FBTyw0QkFBUSxNQUFNLE1BQU0sUUFBUSxLQUFLO0FBQUEsSUFDMUQsRUFBRSxLQUFLLFdBQVcsT0FBTyw0QkFBUSxRQUFRLFlBQVk7QUFBQSxJQUNyRCxFQUFFLEtBQUssUUFBVyxPQUFPLDRCQUFRLFVBQVUsT0FBTztBQUFBLElBQ2xELEVBQUUsS0FBSyxPQUFXLE9BQU8sNEJBQVEsVUFBVSxNQUFNO0FBQUEsSUFDakQsRUFBRSxLQUFLLFdBQVcsT0FBTyw0QkFBUSxVQUFVLE9BQU87QUFBQSxFQUNwRDtBQUVBLFdBQVMsT0FBTyxFQUFFLElBQUksR0FBRztBQUN2QixVQUFNLEVBQUUsT0FBTyxVQUFVLFdBQVcsY0FBYyxVQUFVLElBQUk7QUFDaEUsVUFBTSxVQUFVLElBQUksVUFBVSxVQUFVLFNBQVMsUUFBUTtBQUV6RCxVQUFNLENBQUMsVUFBVSxXQUFXLElBQUksTUFBTSxTQUFTLEtBQUs7QUFDcEQsVUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLE1BQU0sU0FBUyxLQUFLO0FBQ3BELFVBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSSxNQUFNLFNBQVMsS0FBSztBQUN4RCxVQUFNLGFBQWEsTUFBTSxPQUFPLElBQUk7QUFFcEMsVUFBTSxvQkFBb0IsTUFBTTtBQUM5QixpQkFBVyxVQUFVLFdBQVcsTUFBTSxZQUFZLEtBQUssR0FBRyxHQUFHO0FBQUEsSUFDL0Q7QUFDQSxVQUFNLGtCQUFrQixNQUFNO0FBQzVCLFVBQUksV0FBVyxTQUFTO0FBQUUscUJBQWEsV0FBVyxPQUFPO0FBQUcsbUJBQVcsVUFBVTtBQUFBLE1BQU07QUFBQSxJQUN6RjtBQUVBLFVBQU0sVUFBVSxNQUFNLE1BQU07QUFBRSxVQUFJLFdBQVcsUUFBUyxjQUFhLFdBQVcsT0FBTztBQUFBLElBQUcsR0FBRyxDQUFDLENBQUM7QUFFN0YsVUFBTSxVQUFVLE1BQU07QUFDcEIsWUFBTSxLQUFLLE1BQU0sWUFBWSxPQUFPLFVBQVUsQ0FBQztBQUMvQyxTQUFHO0FBQUcsYUFBTyxpQkFBaUIsVUFBVSxFQUFFO0FBQzFDLGFBQU8sTUFBTSxPQUFPLG9CQUFvQixVQUFVLEVBQUU7QUFBQSxJQUN0RCxHQUFHLENBQUMsQ0FBQztBQUVMLFVBQU0sVUFBVSxNQUFNO0FBQ3BCLGVBQVMsS0FBSyxNQUFNLFdBQVcsYUFBYSxXQUFXO0FBQ3ZELGFBQU8sTUFBTTtBQUFFLGlCQUFTLEtBQUssTUFBTSxXQUFXO0FBQUEsTUFBSTtBQUFBLElBQ3BELEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFZixVQUFNLGtCQUFrQixDQUFDLEdBQUcsYUFBYTtBQUN2QyxRQUFFLGVBQWU7QUFDakIsb0JBQWMsS0FBSztBQUNuQixVQUFJLElBQUksVUFBVSxVQUFVLFFBQVE7QUFDbEMsbUJBQVcsUUFBUTtBQUFBLE1BQ3JCLE9BQU87QUFDTCxlQUFPLGlCQUFpQjtBQUN4QixlQUFPLFNBQVMsT0FBTztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUVBLFdBQ0Usb0NBQUMsWUFBTyxPQUFPLEVBQUUsVUFBVSxVQUFVLEtBQUssR0FBRyxRQUFRLEdBQUcsS0FDdEQsb0NBQUMsY0FBUSxHQUNULG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQWEsZ0JBQWdCO0FBQUEsTUFDekMsY0FBYyxXQUFXLGlDQUFpQztBQUFBLE1BQzFELFlBQVk7QUFBQSxJQUNkLEtBQ0Usb0NBQUMsU0FBSSxXQUFVLHdCQUF1QixPQUFPO0FBQUEsTUFDM0MsU0FBUztBQUFBLE1BQVEscUJBQXFCO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQVUsU0FBUztBQUFBLE1BQWEsS0FBSztBQUFBLElBQ25ELEtBRUU7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFFLE1BQUs7QUFBQSxRQUNMLE9BQU8sRUFBRSxTQUFTLFFBQVEsS0FBSyxJQUFJLFlBQVksVUFBVSxnQkFBZ0IsT0FBTztBQUFBO0FBQUEsTUFDakYsb0NBQUMsU0FBSSxLQUFJLHlCQUF3QixLQUFJLHdDQUFTLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxJQUFJLFdBQVcsVUFBVSxHQUFFO0FBQUEsTUFDckcsb0NBQUMsU0FBSSxPQUFPLEVBQUUsWUFBWSxJQUFJLEtBQzVCLG9DQUFDLFNBQUksV0FBVSxnQkFBZSxPQUFPLEVBQUUsVUFBVSxJQUFJLFlBQVksS0FBSyxPQUFPLHFCQUFxQixlQUFlLFNBQVMsS0FBRyxzQ0FFN0gsR0FDQSxvQ0FBQyxTQUFJLFdBQVUsY0FBYSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8saUJBQWlCLFlBQVksS0FBSyxlQUFlLFVBQVUsV0FBVyxFQUFFLEtBQUcsdUJBRXJJLENBQ0Y7QUFBQSxJQUNGLEdBR0E7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFJLFdBQVU7QUFBQSxRQUFnQixPQUFPLEVBQUUsU0FBUyxRQUFRLGdCQUFnQixVQUFVLEtBQUssRUFBRTtBQUFBLFFBQ3JGLGNBQWM7QUFBQTtBQUFBLE1BQ2hCLElBQUksSUFBSSxVQUFRO0FBQ2YsY0FBTSxTQUFTLFlBQVksS0FBSztBQUNoQyxlQUNFO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBRSxLQUFLLEtBQUs7QUFBQSxZQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSztBQUFBLFlBQ2xELGNBQWMsTUFBTTtBQUFFLDhCQUFnQjtBQUFHLDBCQUFZLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSztBQUFBLFlBQUc7QUFBQSxZQUNwRixTQUFTLENBQUMsTUFBTTtBQUNkLGtCQUFJLEtBQUssVUFBVTtBQUFFLGdDQUFnQixHQUFHLEtBQUssUUFBUTtBQUFHO0FBQUEsY0FBUTtBQUNoRSxrQkFBSSxDQUFDLEtBQUssS0FBTSxhQUFZLEtBQUs7QUFBQSxZQUNuQztBQUFBLFlBQ0EsT0FBTztBQUFBLGNBQ0wsU0FBUztBQUFBLGNBQWEsY0FBYztBQUFBLGNBQUcsZ0JBQWdCO0FBQUEsY0FDdkQsT0FBTyxTQUFTLGdCQUFnQjtBQUFBLGNBQXFCLFlBQVk7QUFBQSxjQUNqRSxZQUFZLFNBQVMsMEJBQTBCO0FBQUEsY0FDL0MsVUFBVTtBQUFBLGNBQUksU0FBUztBQUFBLGNBQWUsS0FBSztBQUFBLGNBQUcsWUFBWTtBQUFBLGNBQzFELFlBQVk7QUFBQSxZQUNkO0FBQUE7QUFBQSxVQUNDLEtBQUs7QUFBQSxVQUNMLEtBQUssUUFBUSxvQ0FBQyxLQUFLLFNBQUwsRUFBYSxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsSUFBSSxTQUFTLElBQUksR0FBRTtBQUFBLFFBQzdFO0FBQUEsTUFFSixDQUFDO0FBQUEsSUFDSCxHQUdBLG9DQUFDLFNBQUksV0FBVSxpQkFBZ0IsT0FBTyxFQUFFLFNBQVMsUUFBUSxLQUFLLEdBQUcsWUFBWSxTQUFTLEtBRXBGO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFBTyxjQUFXO0FBQUEsUUFBTyxPQUFNO0FBQUEsUUFDeEIsU0FBUyxNQUFNLFNBQVMsVUFBVSxTQUFTLFVBQVUsTUFBTTtBQUFBLFFBQzNELE9BQU87QUFBQTtBQUFBLE1BQ1osVUFBVSxTQUFTLFdBQU07QUFBQSxJQUM1QixHQUVBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFBTyxjQUFXO0FBQUEsUUFBTyxPQUFNO0FBQUEsUUFDeEIsU0FBUyxNQUFNLGFBQWEsY0FBYyxXQUFXLFdBQVcsUUFBUTtBQUFBLFFBQ3hFLE9BQU8sRUFBRSxHQUFHLFNBQVMsWUFBWSxLQUFLLFVBQVUsY0FBYyxXQUFXLEtBQUssR0FBRztBQUFBO0FBQUEsTUFBRztBQUFBLElBRTVGLEdBRUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFFLE1BQUs7QUFBQSxRQUFjLGNBQVksaUNBQVEsVUFBVSxNQUFNO0FBQUEsUUFDdkQsT0FBTyxFQUFFLEdBQUcsU0FBUyxVQUFVLFlBQVksZ0JBQWdCLE9BQU87QUFBQTtBQUFBLE1BQ25FLG9DQUFDLEtBQUssT0FBTCxFQUFXLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUU7QUFBQSxNQUM1QyxVQUFVLFNBQVMsS0FDbEIsb0NBQUMsVUFBSyxPQUFPO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFBWSxLQUFLO0FBQUEsUUFBSSxPQUFPO0FBQUEsUUFDdEMsWUFBWTtBQUFBLFFBQWdCLE9BQU87QUFBQSxRQUFRLGNBQWM7QUFBQSxRQUN6RCxVQUFVO0FBQUEsUUFBSSxZQUFZO0FBQUEsUUFBSyxVQUFVO0FBQUEsUUFBSSxRQUFRO0FBQUEsUUFDckQsU0FBUztBQUFBLFFBQVEsWUFBWTtBQUFBLFFBQVUsU0FBUztBQUFBLE1BQ2xELEtBQ0csVUFBVSxNQUNiO0FBQUEsSUFFSixHQUVDLE9BQU8sUUFBUSxTQUFTLFdBQ3ZCO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFBRSxNQUFNLE9BQU8sT0FBTyxRQUFRO0FBQUEsUUFBUyxRQUFPO0FBQUEsUUFBUyxLQUFJO0FBQUEsUUFDekQsT0FBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFVBQWEsWUFBWTtBQUFBLFVBQVcsT0FBTztBQUFBLFVBQ3BELGNBQWM7QUFBQSxVQUFLLGdCQUFnQjtBQUFBLFVBQVEsWUFBWTtBQUFBLFVBQUssVUFBVTtBQUFBLFVBQ3RFLFNBQVM7QUFBQSxVQUFlLFlBQVk7QUFBQSxVQUFVLEtBQUs7QUFBQSxRQUNyRDtBQUFBO0FBQUEsTUFDRCxvQ0FBQyxLQUFLLE1BQUwsRUFBVSxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBRyxHQUFFO0FBQUEsTUFDNUMsb0NBQUMsVUFBSyxXQUFVLGdCQUFhLG1CQUFPO0FBQUEsSUFDdEMsR0FHRjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQU8sV0FBVTtBQUFBLFFBQWtCLFNBQVMsTUFBTSxjQUFjLElBQUk7QUFBQSxRQUFHLGNBQVc7QUFBQSxRQUNqRixPQUFPLEVBQUUsR0FBRyxTQUFTLFlBQVksRUFBRTtBQUFBO0FBQUEsTUFDbkMsb0NBQUMsS0FBSyxNQUFMLEVBQVUsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEdBQUcsR0FBRTtBQUFBLElBQzlDLENBQ0YsQ0FDRixHQUdDLGFBQWEsU0FDWjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQUksY0FBYztBQUFBLFFBQWlCLGNBQWM7QUFBQSxRQUM3QyxPQUFPO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFBWSxNQUFNO0FBQUEsVUFBRyxPQUFPO0FBQUEsVUFBRyxLQUFLO0FBQUEsVUFDOUMsWUFBWTtBQUFBLFVBQVcsV0FBVztBQUFBLFVBQ2xDLFdBQVc7QUFBQSxRQUNiO0FBQUE7QUFBQSxNQUNFLG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFlBQVksS0FDdkQsb0NBQUMsU0FBSSxXQUFVLGVBQWMsT0FBTztBQUFBLFFBQ2xDLFNBQVM7QUFBQSxRQUFRLHFCQUFxQjtBQUFBLFFBQWtCLEtBQUs7QUFBQSxNQUMvRCxNQUNJLE9BQU8sY0FBYyxDQUFDLEdBQUcsSUFBSSxPQUFLO0FBQ2xDLGNBQU0sSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNyQixlQUNFO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBRSxLQUFLLEVBQUU7QUFBQSxZQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7QUFBQSxZQUMxQixTQUFTLE1BQU0sWUFBWSxLQUFLO0FBQUEsWUFDaEMsT0FBTztBQUFBO0FBQUEsVUFDUixvQ0FBQyxTQUFJLE9BQU87QUFBQSxZQUNWLE9BQU87QUFBQSxZQUFJLFFBQVE7QUFBQSxZQUFJLGNBQWM7QUFBQSxZQUNyQyxZQUFZLEdBQUcsRUFBRSxJQUFJO0FBQUEsWUFBTSxTQUFTO0FBQUEsWUFBUSxZQUFZO0FBQUEsWUFDeEQsWUFBWTtBQUFBLFVBQ2QsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEtBQ2pDLElBQUksb0NBQUMsS0FBRSxNQUFNLEVBQUUsTUFBSyxJQUFLLElBQzVCLENBQ0Y7QUFBQSxVQUNBLG9DQUFDLGFBQ0Msb0NBQUMsU0FBSSxPQUFPLEVBQUUsWUFBWSxLQUFLLE9BQU8scUJBQXFCLFVBQVUsR0FBRyxLQUNyRSxFQUFFLE1BQ0gsb0NBQUMsVUFBSyxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsWUFBWSxLQUFLLFlBQVksR0FBRyxVQUFVLEdBQUcsTUFDakYsRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFPLFNBQzNCLENBQ0YsR0FDQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxrQkFBa0IsV0FBVyxFQUFFLEtBQUksRUFBRSxJQUFLLENBQy9FO0FBQUEsUUFDRjtBQUFBLE1BRUosQ0FBQyxDQUNILENBQ0Y7QUFBQSxJQUNGLENBRUosR0FHQSxvQ0FBQyxTQUFJLFdBQVcsaUJBQWlCLGFBQWEsU0FBUyxFQUFFLElBQUksU0FBUyxNQUFNLGNBQWMsS0FBSyxLQUM3RixvQ0FBQyxTQUFJLFdBQVUsdUJBQXNCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEtBQ3JFLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsUUFBUSxnQkFBZ0IsaUJBQWlCLFlBQVksVUFBVSxTQUFTLGFBQWEsY0FBYywrQkFBK0IsS0FDdkosb0NBQUMsU0FBSSxPQUFPLEVBQUUsU0FBUyxRQUFRLEtBQUssSUFBSSxZQUFZLFNBQVMsS0FDM0Qsb0NBQUMsU0FBSSxLQUFJLHlCQUF3QixLQUFJLHdDQUFTLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxJQUFJLFdBQVcsVUFBVSxHQUFFLEdBQ3JHLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssT0FBTyxvQkFBb0IsS0FBRyxzQ0FBTSxDQUNuRixHQUNBLG9DQUFDLFlBQU8sU0FBUyxNQUFNLGNBQWMsS0FBSyxHQUFHLGNBQVcsZ0JBQUssT0FBTyxFQUFFLEdBQUcsU0FBUyxPQUFPLElBQUksUUFBUSxHQUFHLEtBQ3RHLG9DQUFDLEtBQUssR0FBTCxFQUFPLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUUsQ0FDM0MsQ0FDRixHQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsR0FBRyxLQUV2QixJQUFJLE9BQU8sVUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksVUFDbEM7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFFLEtBQUssS0FBSztBQUFBLFFBQ1YsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLO0FBQUEsUUFDbEMsU0FBUyxDQUFDLE1BQU07QUFDZCxjQUFJLEtBQUssVUFBVTtBQUFFLDRCQUFnQixHQUFHLEtBQUssUUFBUTtBQUFHO0FBQUEsVUFBUTtBQUNoRSx3QkFBYyxLQUFLO0FBQUEsUUFDckI7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUFTLFNBQVM7QUFBQSxVQUFhLGNBQWM7QUFBQSxVQUFJLGdCQUFnQjtBQUFBLFVBQzFFLE9BQU87QUFBQSxVQUFxQixZQUFZO0FBQUEsVUFBSyxVQUFVO0FBQUEsUUFDekQ7QUFBQTtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1IsQ0FDRCxHQUNELG9DQUFDLFNBQUksT0FBTyxFQUFFLFFBQVEsWUFBWSxXQUFXLCtCQUErQixHQUFFLElBRTVFLE9BQU8sY0FBYyxDQUFDLEdBQUcsSUFBSSxPQUFLO0FBQ2xDLFlBQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHO0FBQy9CLGFBQ0U7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUFFLEtBQUssRUFBRTtBQUFBLFVBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtBQUFBLFVBQzFCLFNBQVMsTUFBTSxjQUFjLEtBQUs7QUFBQSxVQUNsQyxPQUFPO0FBQUEsWUFDTCxTQUFTO0FBQUEsWUFBUyxTQUFTO0FBQUEsWUFBYSxjQUFjO0FBQUEsWUFBSSxnQkFBZ0I7QUFBQSxZQUMxRSxPQUFPO0FBQUEsWUFBcUIsWUFBWTtBQUFBLFlBQUssVUFBVTtBQUFBLFVBQ3pEO0FBQUE7QUFBQSxRQUNBLEVBQUU7QUFBQSxRQUFLO0FBQUEsUUFBRztBQUFBLFFBQU07QUFBQSxNQUNuQjtBQUFBLElBRUosQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUNGO0FBQUEsRUFFSjtBQUVBLFdBQVMsV0FBVyxJQUFJO0FBQ3RCLFVBQU0sS0FBSyxTQUFTLGVBQWUsRUFBRTtBQUNyQyxRQUFJLENBQUMsR0FBSTtBQUNULFVBQU0sT0FBTyxTQUFTLGNBQWMsUUFBUSxHQUFHLGdCQUFnQjtBQUMvRCxVQUFNLE1BQU0sR0FBRyxzQkFBc0IsRUFBRSxNQUFNLE9BQU8sVUFBVSxPQUFPO0FBQ3JFLFdBQU8sU0FBUyxFQUFFLEtBQUssVUFBVSxTQUFTLENBQUM7QUFBQSxFQUM3QztBQUVBLE1BQU0sVUFBVTtBQUFBLElBQ2QsT0FBTztBQUFBLElBQUksUUFBUTtBQUFBLElBQUksY0FBYztBQUFBLElBQUksUUFBUTtBQUFBLElBQ2pELFlBQVk7QUFBQSxJQUFlLE9BQU87QUFBQSxJQUFxQixRQUFRO0FBQUEsSUFDL0QsU0FBUztBQUFBLElBQVEsWUFBWTtBQUFBLEVBQy9CO0FBQ0EsTUFBTSxXQUFXO0FBQUEsSUFDZixTQUFTO0FBQUEsSUFBUSxLQUFLO0FBQUEsSUFBSSxTQUFTO0FBQUEsSUFBYSxjQUFjO0FBQUEsSUFDOUQsZ0JBQWdCO0FBQUEsSUFBUSxZQUFZO0FBQUEsSUFDcEMsWUFBWTtBQUFBLEVBQ2Q7QUFFQSxTQUFPLE9BQU8sUUFBUSxFQUFFLE9BQU8sQ0FBQzs7O0FDNVZoQyxXQUFTQyxTQUFRLEVBQUUsSUFBSSxHQUFHO0FBRXhCLFVBQU0sYUFBYSxPQUFPLFdBQVcsT0FBTyxDQUFDLEdBQUcsTUFBTSxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ3BGLFVBQU0sZ0JBQWdCLE9BQU8sV0FBVztBQUN4QyxVQUFNLGdCQUFnQjtBQUd0QixVQUFNLGFBQWE7QUFBQSxNQUNqQixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxXQUFXO0FBQUEsSUFDYjtBQUVBLFVBQU0sZUFBZTtBQUFBLE1BQ25CLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxJQUNWO0FBR0EsVUFBTSxjQUFjLE9BQU8sUUFBUSxTQUFTO0FBRTVDLFdBQ0U7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLE9BQU87QUFBQSxVQUNMLFlBQVk7QUFBQSxVQUNaLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxRQUNaO0FBQUE7QUFBQSxNQUdBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxlQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxZQUFZO0FBQUEsVUFDZDtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLGVBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLFlBQVk7QUFBQSxVQUNkO0FBQUE7QUFBQSxNQUNGO0FBQUEsTUFFQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsT0FBTztBQUFBLFlBQ0wsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLFlBQ1QscUJBQXFCO0FBQUEsWUFDckIsS0FBSztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFVBQ1o7QUFBQTtBQUFBLFFBRUEsb0NBQUMsYUFFQztBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsT0FBTztBQUFBLGNBQ0wsU0FBUztBQUFBLGNBQ1QsWUFBWTtBQUFBLGNBQ1osS0FBSztBQUFBLGNBQ0wsU0FBUztBQUFBLGNBQ1QsY0FBYztBQUFBLGNBQ2QsWUFBWTtBQUFBLGNBQ1osUUFBUTtBQUFBLGNBQ1IsVUFBVTtBQUFBLGNBQ1YsT0FBTztBQUFBLGNBQ1AsWUFBWTtBQUFBLFlBQ2Q7QUFBQTtBQUFBLFVBRUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLE9BQU87QUFBQSxnQkFDTCxPQUFPO0FBQUEsZ0JBQ1AsUUFBUTtBQUFBLGdCQUNSLGNBQWM7QUFBQSxnQkFDZCxZQUFZO0FBQUEsY0FDZDtBQUFBO0FBQUEsVUFDRjtBQUFBLFVBQUU7QUFBQSxRQUVKLEdBR0E7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU87QUFBQSxjQUNMLFVBQVU7QUFBQSxjQUNWLFlBQVk7QUFBQSxjQUNaLFFBQVE7QUFBQSxjQUNSLE9BQU87QUFBQSxjQUNQLFlBQVk7QUFBQSxjQUNaLGVBQWU7QUFBQSxZQUNqQjtBQUFBO0FBQUEsVUFDRDtBQUFBLFVBRUMsb0NBQUMsVUFBRztBQUFBLFVBQUU7QUFBQSxRQUVSLEdBR0E7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU87QUFBQSxjQUNMLFVBQVU7QUFBQSxjQUNWLFlBQVk7QUFBQSxjQUNaLE9BQU87QUFBQSxjQUNQLFVBQVU7QUFBQSxjQUNWLFFBQVE7QUFBQSxZQUNWO0FBQUE7QUFBQSxVQUVDLE9BQU8sUUFBUSxlQUFlO0FBQUEsUUFDakMsR0FHQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLFFBQVEsS0FBSyxJQUFJLFVBQVUsT0FBTyxLQUN2RCxvQ0FBQyxPQUFFLE1BQUssYUFBWSxPQUFPLGNBQVksd0NBQzlCLEtBQ1Asb0NBQUMsS0FBSyxZQUFMLEVBQWdCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FDckQsR0FDQyxlQUNDLG9DQUFDLE9BQUUsTUFBTSxPQUFPLE9BQU8sUUFBUSxTQUFTLE9BQU8sZ0JBQzdDLG9DQUFDLEtBQUssTUFBTCxFQUFVLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRSxvQkFDakQsQ0FFSixHQUdBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPO0FBQUEsY0FDTCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsY0FDVCxLQUFLO0FBQUEsY0FDTCxXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsWUFDZDtBQUFBO0FBQUEsVUFFQSxvQ0FBQyxRQUFLLEdBQUcsR0FBRyxVQUFVLEtBQUssT0FBTSw0QkFBTztBQUFBLFVBQ3hDLG9DQUFDLFFBQUssR0FBRyxlQUFlLE9BQU0sNEJBQU87QUFBQSxVQUNyQyxvQ0FBQyxRQUFLLEdBQUcsZUFBZSxPQUFNLGtDQUFRO0FBQUEsUUFDeEMsQ0FDRjtBQUFBLFFBR0Esb0NBQUMsU0FBSSxXQUFVLGtCQUNiLG9DQUFDLHNCQUFpQixDQUNwQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFFSjtBQUVBLFdBQVMsS0FBSyxFQUFFLEdBQUcsTUFBTSxHQUFHO0FBQzFCLFdBQ0Usb0NBQUMsYUFDQztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFVBQ0wsVUFBVTtBQUFBLFVBQ1YsWUFBWTtBQUFBLFVBQ1osT0FBTztBQUFBLFVBQ1AsZUFBZTtBQUFBLFFBQ2pCO0FBQUE7QUFBQSxNQUVDO0FBQUEsSUFDSCxHQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGtCQUFrQixXQUFXLEVBQUUsS0FDL0QsS0FDSCxDQUNGO0FBQUEsRUFFSjtBQUVBLFdBQVMsbUJBQW1CO0FBQzFCLFVBQU1DLEtBQUksT0FBTyxRQUFRLENBQUM7QUFDMUIsVUFBTSxXQUFXQSxHQUFFLFlBQVksQ0FBQztBQUNoQyxVQUFNLFdBQVdBLEdBQUUsWUFBWSxDQUFDO0FBQ2hDLFVBQU0sT0FBV0EsR0FBRSxRQUFZLENBQUM7QUFFaEMsVUFBTSxjQUFjLFNBQVMsU0FBUyxJQUFJLE1BQU0sSUFBSTtBQUVwRCxVQUFNLFdBQVc7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUFZLGNBQWM7QUFBQSxNQUFJLGdCQUFnQjtBQUFBLE1BQVEsU0FBUztBQUFBLElBQzNFO0FBRUEsV0FDRTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFVBQ0wsVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFVBQ1YsWUFBWTtBQUFBLFFBQ2Q7QUFBQTtBQUFBLE1BR0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVU7QUFBQSxVQUNWLE1BQU0sU0FBUyxRQUFRO0FBQUEsVUFDdkIsT0FBTztBQUFBLFlBQ0wsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFlBQU0sS0FBSztBQUFBLFlBQU0sT0FBTztBQUFBLFlBQU8sYUFBYTtBQUFBLFlBQ2xELFlBQVk7QUFBQSxZQUFRLFNBQVM7QUFBQSxZQUM3QixXQUFXO0FBQUEsWUFBc0IsUUFBUTtBQUFBLFVBQzNDO0FBQUE7QUFBQSxRQUVBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGlCQUFpQixZQUFZLEtBQUssZUFBZSxTQUFTLEtBQzFGLFNBQVMsV0FBVywwQkFDdkI7QUFBQSxRQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssT0FBTyxxQkFBcUIsV0FBVyxHQUFHLFlBQVksSUFBSSxLQUNwRyxTQUFTLFNBQVMsRUFDckI7QUFBQSxRQUNBLG9DQUFDLFNBQUksT0FBTztBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQUksUUFBUTtBQUFBLFVBQUssWUFBWTtBQUFBLFVBQ3hDLGNBQWM7QUFBQSxVQUFJLFNBQVM7QUFBQSxVQUFJLFNBQVM7QUFBQSxVQUFRLGtCQUFrQjtBQUFBLFVBQVksS0FBSztBQUFBLFFBQ3JGLEtBQ0Usb0NBQUMsU0FBSSxTQUFRLGNBQWEsT0FBTyxFQUFFLE9BQU8sUUFBUSxRQUFRLE9BQU8sR0FBRyxxQkFBb0IsVUFDdEYsb0NBQUMsY0FDQyxvQ0FBQyxvQkFBZSxJQUFHLE1BQUssSUFBRyxLQUFJLElBQUcsS0FBSSxJQUFHLEtBQUksSUFBRyxPQUM5QyxvQ0FBQyxVQUFLLFFBQU8sTUFBSyxXQUFVLGlCQUFnQixhQUFZLFFBQU8sR0FDL0Qsb0NBQUMsVUFBSyxRQUFPLFFBQU8sV0FBVSxpQkFBZ0IsYUFBWSxLQUFJLENBQ2hFLENBQ0YsR0FDQSxvQ0FBQyxVQUFLLEdBQUUsbUZBQWtGLE1BQUssWUFBVyxHQUMxRztBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQUssR0FBRTtBQUFBLFlBQ04sUUFBTztBQUFBLFlBQWMsYUFBWTtBQUFBLFlBQUksTUFBSztBQUFBLFlBQU8sZUFBYztBQUFBLFlBQVEsZ0JBQWU7QUFBQTtBQUFBLFFBQVEsR0FDL0YsQ0FBQyxDQUFDLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLEVBQUUsR0FBRSxDQUFDLEtBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsTUFDN0Msb0NBQUMsWUFBTyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFFLE9BQU0sTUFBSyxRQUFPLFFBQU8sZUFBYyxhQUFZLE9BQU0sQ0FDMUYsQ0FDSCxHQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsUUFBUSxnQkFBZ0IsaUJBQWlCLFVBQVUsSUFBSSxPQUFPLGlCQUFpQixLQUNwRyxvQ0FBQyxjQUFLLGNBQUUsR0FBTyxvQ0FBQyxjQUFLLGNBQUUsR0FBTyxvQ0FBQyxjQUFLLGNBQUUsR0FBTyxvQ0FBQyxjQUFLLGNBQUUsQ0FDdkQsQ0FDRjtBQUFBLFFBQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsU0FBUyxRQUFRLFlBQVksVUFBVSxLQUFLLEdBQUcsV0FBVyxJQUFJLFVBQVUsSUFBSSxVQUFVLE9BQU8sTUFDdkcsU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxNQUMvQixvQ0FBQyxVQUFLLEtBQUssR0FBRyxPQUFPO0FBQUEsVUFDbkIsTUFBTSxJQUFJLHNCQUFzQjtBQUFBLFVBQ2hDLE1BQU0sSUFBSSxnQkFBc0I7QUFBQSxRQUNsQyxLQUFJLEdBQUksQ0FDVCxHQUNBLFNBQVMsa0JBQ1Isb0NBQUMsVUFBSyxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsWUFBWSxPQUFPLEtBQUksU0FBUyxnQkFBZSxlQUFHLENBRTlGO0FBQUEsTUFDRjtBQUFBLE1BR0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVU7QUFBQSxVQUNWLE1BQU0sU0FBUyxRQUFRO0FBQUEsVUFDdkIsT0FBTztBQUFBLFlBQ0wsR0FBRztBQUFBLFlBQ0gsT0FBTztBQUFBLFlBQU0sUUFBUTtBQUFBLFlBQU0sT0FBTztBQUFBLFlBQU8sYUFBYTtBQUFBLFlBQ3RELFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUFJLE9BQU87QUFBQSxZQUFRLFdBQVc7QUFBQSxVQUN6QztBQUFBO0FBQUEsUUFFQSxvQ0FBQyxTQUFJLE9BQU87QUFBQSxVQUFFLE9BQU87QUFBQSxVQUFJLFFBQVE7QUFBQSxVQUFJLGNBQWM7QUFBQSxVQUFJLFlBQVk7QUFBQSxVQUNqRSxTQUFTO0FBQUEsVUFBUSxZQUFZO0FBQUEsVUFBVSxPQUFPO0FBQUEsVUFBcUIsWUFBWTtBQUFBLFVBQUssVUFBVTtBQUFBLFFBQUcsS0FBRyxHQUV0RztBQUFBLFFBQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sV0FBVyxXQUFXLElBQUksZUFBZSxRQUFRLEtBQ2pGLFNBQVMsV0FBVyxFQUN2QjtBQUFBLFFBQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLFlBQVksS0FBSyxZQUFZLEtBQUssV0FBVyxFQUFFLEtBQ3hFLFdBQVcsSUFBSSxDQUFDLE1BQU0sTUFDckIsb0NBQUMsTUFBTSxVQUFOLEVBQWUsS0FBSyxLQUFJLE1BQU0sSUFBSSxXQUFXLFNBQVMsS0FBSyxvQ0FBQyxVQUFFLENBQUcsQ0FDbkUsQ0FDSDtBQUFBLFFBQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxZQUFZLFFBQVEsSUFBSSxNQUFNLElBQUksT0FBTyxHQUFHLEtBQ2xFLG9DQUFDLFNBQUksT0FBTyxFQUFFLFFBQVEsR0FBRyxZQUFZLHdCQUF3QixHQUFHLEdBQ2hFLG9DQUFDLFNBQUksT0FBTyxFQUFFLFdBQVcsSUFBSSxVQUFVLElBQUksU0FBUyxRQUFRLGdCQUFnQixnQkFBZ0IsS0FDMUYsb0NBQUMsY0FBTSxTQUFTLFVBQVUsRUFBRyxHQUM1QixTQUFTLGtCQUNSLG9DQUFDLFVBQUssT0FBTyxFQUFFLFNBQVMsSUFBSSxLQUFJLFNBQVMsZ0JBQWUsMkJBQUssQ0FFakUsQ0FDRjtBQUFBLE1BQ0Y7QUFBQSxNQUdBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixPQUFPO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFBWSxNQUFNO0FBQUEsWUFBTyxRQUFRO0FBQUEsWUFDM0MsWUFBWTtBQUFBLFlBQVEsY0FBYztBQUFBLFlBQUksU0FBUztBQUFBLFlBQy9DLFdBQVc7QUFBQSxZQUFzQixTQUFTO0FBQUEsWUFBUSxZQUFZO0FBQUEsWUFDOUQsS0FBSztBQUFBLFlBQUksVUFBVTtBQUFBLFlBQUksUUFBUTtBQUFBLFVBQ2pDO0FBQUE7QUFBQSxRQUVBLG9DQUFDLFNBQUksT0FBTztBQUFBLFVBQUUsT0FBTztBQUFBLFVBQUksUUFBUTtBQUFBLFVBQUksY0FBYztBQUFBLFVBQUcsWUFBWTtBQUFBLFVBQ2hFLFNBQVM7QUFBQSxVQUFRLFlBQVk7QUFBQSxRQUFTLEtBQ3RDLG9DQUFDLEtBQUssT0FBTCxFQUFXLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxJQUFJLE9BQU8sVUFBVSxHQUFHLENBQ2xFO0FBQUEsUUFDQSxvQ0FBQyxhQUNDLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGlCQUFpQixLQUFHLG9CQUFHLEdBQzFELG9DQUFDLFNBQUksT0FBTyxFQUFFLFlBQVksS0FBSyxPQUFPLG9CQUFvQixLQUN2RCxLQUFLLFNBQVMsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssWUFBTyxFQUN2RCxDQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUVKO0FBRUEsV0FBUyxRQUFRLElBQUksSUFBSTtBQUN2QixXQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFFQSxTQUFPLE9BQU8sUUFBUSxFQUFFLFNBQUFELFNBQVEsQ0FBQzs7O0FDdlZqQyxXQUFTLGNBQWMsRUFBRSxTQUFTLE9BQU8sTUFBTSxRQUFRLFVBQVUsU0FBUyxHQUFHO0FBQzNFLFdBQ0Usb0NBQUMsU0FBSSxPQUFPO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFBUSxZQUFZO0FBQUEsTUFBWSxnQkFBZ0I7QUFBQSxNQUN6RCxjQUFjO0FBQUEsTUFBSSxLQUFLO0FBQUEsTUFBSSxVQUFVO0FBQUEsSUFDdkMsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLElBQUksS0FDekIsV0FDQyxvQ0FBQyxTQUFJLE9BQU87QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUFJLE9BQU87QUFBQSxNQUFlLFlBQVk7QUFBQSxNQUFLLGVBQWU7QUFBQSxNQUNwRSxjQUFjO0FBQUEsTUFBRyxlQUFlO0FBQUEsSUFDbEMsS0FBSSxPQUFRLEdBRWQsb0NBQUMsUUFBRyxXQUFVLHdCQUF1QixPQUFPO0FBQUEsTUFDMUMsVUFBVTtBQUFBLE1BQTBCLFlBQVk7QUFBQSxNQUFLLE9BQU87QUFBQSxNQUM1RCxlQUFlO0FBQUEsTUFBVyxZQUFZO0FBQUEsTUFBSyxRQUFRO0FBQUEsSUFDckQsS0FBSSxLQUFNLEdBQ1QsUUFBUSxvQ0FBQyxPQUFFLE9BQU8sRUFBRSxPQUFPLGdCQUFnQixVQUFVLElBQUksV0FBVyxJQUFJLFlBQVksS0FBSyxLQUFJLElBQUssQ0FDckcsR0FDQyxVQUNDLG9DQUFDLE9BQUUsTUFBTSxZQUFZLEtBQUssU0FBUyxXQUFXLFNBQVksQ0FBQyxNQUFNO0FBQUUsUUFBRSxlQUFlO0FBQUcsaUJBQVc7QUFBQSxJQUFHLEdBQUcsT0FBTztBQUFBLE1BQzdHLE9BQU87QUFBQSxNQUFlLFlBQVk7QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFJLGdCQUFnQjtBQUFBLE1BQ3JFLFNBQVM7QUFBQSxNQUFlLFlBQVk7QUFBQSxNQUFVLEtBQUs7QUFBQSxNQUFHLGVBQWU7QUFBQSxNQUNyRSxjQUFjO0FBQUEsSUFDaEIsS0FDRyxRQUFPLEtBQUMsb0NBQUMsS0FBSyxZQUFMLEVBQWdCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUUsQ0FDN0QsQ0FFSjtBQUFBLEVBRUo7QUFHQSxXQUFTLGtCQUFrQjtBQUN6QixVQUFNLFdBQVcsT0FBTyxRQUFRLFlBQVksQ0FBQztBQUM3QyxRQUFJLFNBQVMsV0FBVyxFQUFHLFFBQU87QUFFbEMsVUFBTSxNQUFNLFNBQVMsQ0FBQztBQUN0QixVQUFNLE9BQU8sU0FBUyxNQUFNLENBQUM7QUFFN0IsV0FDRSxvQ0FBQyxhQUFRLFdBQVUsYUFBWSxPQUFPLEVBQUUsWUFBWSxPQUFPLEtBQ3pELG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFlBQVksS0FDdkQ7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLE1BQUs7QUFBQTtBQUFBLElBQ1AsR0FFQSxvQ0FBQyxTQUFJLFdBQVUsZUFBYyxPQUFPO0FBQUEsTUFDbEMsU0FBUztBQUFBLE1BQVEscUJBQXFCO0FBQUEsTUFBaUIsS0FBSztBQUFBLElBQzlELEtBQ0Usb0NBQUMsb0JBQWlCLFNBQVMsS0FBSSxHQUM5QixLQUFLLElBQUksQ0FBQyxNQUFNLG9DQUFDLHFCQUFrQixLQUFLLEVBQUUsSUFBSSxTQUFTLEdBQUUsQ0FBRSxDQUM5RCxDQUNGLENBQ0Y7QUFBQSxFQUVKO0FBRUEsV0FBUyxpQkFBaUIsRUFBRSxRQUFRLEdBQUc7QUFDckMsVUFBTSxPQUFPLEtBQUssUUFBUSxVQUFVLElBQUksUUFBUSxFQUFFO0FBQ2xELFdBQ0U7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFFO0FBQUEsUUFDRCxXQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxVQUNoQixZQUFZO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFBSSxTQUFTO0FBQUEsVUFBSSxPQUFPO0FBQUEsVUFBUSxVQUFVO0FBQUEsVUFDeEQsVUFBVTtBQUFBLFVBQVUsU0FBUztBQUFBLFVBQVEsZUFBZTtBQUFBLFVBQVUsV0FBVztBQUFBLFFBQzNFO0FBQUE7QUFBQSxNQUNDLFFBQVEsUUFBUSw4QkFDZixvQ0FBQyxTQUFJLE9BQU87QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUFZLEtBQUs7QUFBQSxRQUFJLE9BQU87QUFBQSxRQUN0QyxZQUFZO0FBQUEsUUFBZSxPQUFPO0FBQUEsUUFBcUIsWUFBWTtBQUFBLFFBQUssVUFBVTtBQUFBLFFBQ2xGLFNBQVM7QUFBQSxRQUFZLGNBQWM7QUFBQSxRQUFLLGVBQWU7QUFBQSxNQUN6RCxLQUFHLDBCQUFJO0FBQUEsTUFFVCxvQ0FBQyxTQUFJLE9BQU87QUFBQSxRQUNWLE9BQU87QUFBQSxRQUFJLFFBQVE7QUFBQSxRQUFJLGNBQWM7QUFBQSxRQUFJLFlBQVk7QUFBQSxRQUNyRCxTQUFTO0FBQUEsUUFBUSxZQUFZO0FBQUEsUUFBVSxjQUFjO0FBQUEsTUFDdkQsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxJQUFJLE9BQU8sY0FBYyxLQUN4RCxvQ0FBQyxLQUFLLE9BQUwsRUFBVyxNQUFLLGVBQWEsQ0FDaEMsQ0FDRjtBQUFBLE1BQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8seUJBQXlCLFlBQVksS0FBSyxlQUFlLFNBQVMsS0FDbEcsUUFBUSxHQUNYO0FBQUEsTUFDQSxvQ0FBQyxRQUFHLE9BQU87QUFBQSxRQUNULFVBQVU7QUFBQSxRQUFJLFlBQVk7QUFBQSxRQUFLLFlBQVk7QUFBQSxRQUFLLFFBQVE7QUFBQSxRQUN4RCxlQUFlO0FBQUEsUUFBWSxPQUFPO0FBQUEsTUFDcEMsS0FBSSxRQUFRLEtBQU07QUFBQSxNQUNsQixvQ0FBQyxPQUFFLE9BQU8sRUFBRSxPQUFPLDBCQUEwQixVQUFVLElBQUksWUFBWSxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsS0FDN0YsUUFBUSxXQUFXLFFBQVEsV0FBVyxFQUN6QztBQUFBLE1BQ0Esb0NBQUMsU0FBSSxPQUFPO0FBQUEsUUFDVixXQUFXO0FBQUEsUUFBSSxZQUFZO0FBQUEsUUFBSSxXQUFXO0FBQUEsUUFDMUMsU0FBUztBQUFBLFFBQVEsZ0JBQWdCO0FBQUEsUUFBWSxZQUFZO0FBQUEsUUFBVSxVQUFVO0FBQUEsTUFDL0UsS0FDRSxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxTQUFTLGVBQWUsS0FBSyxHQUFHLFlBQVksVUFBVSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQUcsNkJBQ2hHLG9DQUFDLEtBQUssWUFBTCxFQUFnQixPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBRyxHQUFFLENBQ3pELENBQ0Y7QUFBQSxJQUNGO0FBQUEsRUFFSjtBQUVBLFdBQVMsa0JBQWtCLEVBQUUsUUFBUSxHQUFHO0FBQ3RDLFVBQU0sT0FBTyxLQUFLLFFBQVEsVUFBVSxJQUFJLFFBQVEsRUFBRTtBQUNsRCxVQUFNLE9BQU8sT0FBTyxjQUFjLENBQUMsR0FBRyxLQUFLLE9BQUssRUFBRSxPQUFPLFFBQVEsVUFBVSxLQUFLLENBQUM7QUFDakYsVUFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSztBQUNqQyxVQUFNLE9BQU8sSUFBSSxRQUFRO0FBQ3pCLFdBQ0U7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFFO0FBQUEsUUFDRCxXQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxVQUFRLE9BQU87QUFBQSxVQUMvQixZQUFZO0FBQUEsVUFBa0IsY0FBYztBQUFBLFVBQUksU0FBUztBQUFBLFVBQ3pELFFBQVE7QUFBQSxVQUFnQyxTQUFTO0FBQUEsVUFBUSxlQUFlO0FBQUEsVUFDeEUsV0FBVztBQUFBLFVBQUssWUFBWTtBQUFBLFFBQzlCO0FBQUE7QUFBQSxNQUNBLG9DQUFDLFNBQUksT0FBTztBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQUksUUFBUTtBQUFBLFFBQUksY0FBYztBQUFBLFFBQUksWUFBWTtBQUFBLFFBQ3JELFNBQVM7QUFBQSxRQUFRLFlBQVk7QUFBQSxRQUFVLGNBQWM7QUFBQSxRQUNyRCxRQUFRO0FBQUEsTUFDVixLQUNFLG9DQUFDLFNBQUksT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEdBQUcsS0FDbEMsb0NBQUMsS0FBRSxNQUFXLENBQ2hCLENBQ0Y7QUFBQSxNQUNBLG9DQUFDLFVBQUssT0FBTztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQWdCLFVBQVU7QUFBQSxRQUFJLE9BQU87QUFBQSxRQUM5QyxZQUFZO0FBQUEsUUFBaUIsU0FBUztBQUFBLFFBQVksY0FBYztBQUFBLFFBQ2hFLFlBQVk7QUFBQSxRQUFLLE9BQU87QUFBQSxRQUFlLGVBQWU7QUFBQSxNQUN4RCxLQUFJLFFBQVEsR0FBSTtBQUFBLE1BQ2hCLG9DQUFDLFFBQUcsT0FBTztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQUksWUFBWTtBQUFBLFFBQUssWUFBWTtBQUFBLFFBQU0sUUFBUTtBQUFBLFFBQ3pELE9BQU87QUFBQSxNQUNULEtBQUksUUFBUSxLQUFNO0FBQUEsTUFDbEIsb0NBQUMsT0FBRSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsVUFBVSxJQUFJLFlBQVksS0FBSyxRQUFRLEdBQUcsTUFBTSxFQUFFLEtBQ2xGLFFBQVEsV0FBVyxRQUFRLFdBQVcsRUFDekM7QUFBQSxNQUNBLG9DQUFDLFNBQUksT0FBTztBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQUksWUFBWTtBQUFBLFFBQUksV0FBVztBQUFBLFFBQzFDLFVBQVU7QUFBQSxRQUFJLE9BQU87QUFBQSxRQUFrQixTQUFTO0FBQUEsUUFBUSxnQkFBZ0I7QUFBQSxNQUMxRSxLQUNFLG9DQUFDLGNBQUssaUNBQU0sQ0FDZDtBQUFBLElBQ0Y7QUFBQSxFQUVKO0FBR0EsV0FBUyxvQkFBb0I7QUFDM0IsVUFBTSxhQUFhLE9BQU8sY0FBYyxDQUFDO0FBQ3pDLFdBQ0Usb0NBQUMsYUFBUSxXQUFVLGFBQVksT0FBTyxFQUFFLFlBQVksaUJBQWlCLEtBQ25FLG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFlBQVksS0FDekQ7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLE1BQUs7QUFBQTtBQUFBLElBQ1AsR0FFQSxvQ0FBQyxTQUFJLFdBQVUsY0FBYSxPQUFPO0FBQUEsTUFDakMsU0FBUztBQUFBLE1BQVEscUJBQXFCO0FBQUEsTUFBa0IsS0FBSztBQUFBLElBQy9ELEtBQ0csV0FBVyxJQUFJLENBQUMsTUFBTTtBQUNyQixZQUFNLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxLQUFLO0FBQy9CLFlBQU0sT0FBTyxFQUFFLFFBQVE7QUFDdkIsWUFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLEdBQUc7QUFDL0IsYUFDRTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQUUsS0FBSyxFQUFFO0FBQUEsVUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFO0FBQUEsVUFDM0IsV0FBVTtBQUFBLFVBQ1YsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQVEsY0FBYztBQUFBLFlBQUksU0FBUztBQUFBLFlBQy9DLFFBQVE7QUFBQSxZQUFnQyxnQkFBZ0I7QUFBQSxZQUN4RCxPQUFPO0FBQUEsWUFBVyxVQUFVO0FBQUEsWUFBWSxVQUFVO0FBQUEsWUFDbEQsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFVBQ2I7QUFBQTtBQUFBLFFBQ0Esb0NBQUMsU0FBSSxPQUFPLEVBQUUsU0FBUyxRQUFRLGdCQUFnQixpQkFBaUIsWUFBWSxhQUFhLEtBQ3ZGLG9DQUFDLFNBQUksT0FBTztBQUFBLFVBQ1YsT0FBTztBQUFBLFVBQUksUUFBUTtBQUFBLFVBQUksY0FBYztBQUFBLFVBQ3JDLFlBQVksR0FBRyxJQUFJO0FBQUEsVUFDbkIsU0FBUztBQUFBLFVBQVEsWUFBWTtBQUFBLFFBQy9CLEtBQ0Usb0NBQUMsU0FBSSxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBRyxLQUNsQyxvQ0FBQyxLQUFFLE1BQVcsQ0FDaEIsQ0FDRixHQUNBLG9DQUFDLFVBQUssT0FBTztBQUFBLFVBQ1gsVUFBVTtBQUFBLFVBQUksT0FBTztBQUFBLFVBQWtCLFlBQVk7QUFBQSxRQUNyRCxLQUFJLE9BQU0sU0FBRSxDQUNkO0FBQUEsUUFDQSxvQ0FBQyxTQUFJLFdBQVUsbUJBQWtCLE9BQU8sRUFBRSxVQUFVLElBQUksWUFBWSxLQUFLLE9BQU8scUJBQXFCLFdBQVcsR0FBRyxLQUNoSCxFQUFFLE1BQ0gsb0NBQUMsVUFBSyxPQUFPLEVBQUUsWUFBWSxLQUFLLFVBQVUsSUFBSSxPQUFPLGtCQUFrQixZQUFZLEVBQUUsS0FBRyxLQUFFLE9BQU0sR0FBQyxDQUNuRztBQUFBLFFBQ0Esb0NBQUMsU0FBSSxXQUFVLG1CQUFrQixPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sZ0JBQWdCLFdBQVcsR0FBRyxZQUFZLEtBQUssS0FDM0csRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUM5QjtBQUFBLFFBQ0Esb0NBQUMsU0FBSSxXQUFVLG9CQUFtQixPQUFPO0FBQUEsVUFDdkMsVUFBVTtBQUFBLFVBQVksUUFBUTtBQUFBLFVBQUksT0FBTztBQUFBLFVBQ3pDLE9BQU87QUFBQSxVQUFJLFFBQVE7QUFBQSxVQUFJLGNBQWM7QUFBQSxVQUFJLFlBQVksR0FBRyxJQUFJO0FBQUEsVUFDNUQsU0FBUztBQUFBLFVBQVEsWUFBWTtBQUFBLFVBQVUsT0FBTztBQUFBLFVBQzlDLFNBQVM7QUFBQSxRQUNYLEtBQ0Usb0NBQUMsS0FBSyxZQUFMLEVBQWdCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUUsQ0FDcEQ7QUFBQSxNQUNGO0FBQUEsSUFFSixDQUFDLENBQ0gsQ0FDQSxDQUNGO0FBQUEsRUFFSjtBQUdBLFdBQVMsZ0JBQWdCO0FBQ3ZCLFVBQU0sU0FBUyxPQUFPLFFBQVEsVUFBVSxDQUFDO0FBQ3pDLFFBQUksT0FBTyxXQUFXLEVBQUcsUUFBTztBQUVoQyxVQUFNLGFBQWEsT0FBTyxjQUFjLENBQUM7QUFFekMsV0FDRSxvQ0FBQyxhQUFRLFdBQVUsYUFBWSxPQUFPLEVBQUUsWUFBWSxPQUFPLEtBQ3pELG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFlBQVksS0FDdkQ7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFVBQVM7QUFBQTtBQUFBLElBQ1gsR0FFQSxvQ0FBQyxTQUFJLFdBQVUsaUJBQWdCLE9BQU87QUFBQSxNQUNwQyxTQUFTO0FBQUEsTUFBUSxxQkFBcUI7QUFBQSxNQUFrQixLQUFLO0FBQUEsTUFDN0QsUUFBUTtBQUFBLE1BQWdDLGNBQWM7QUFBQSxNQUFJLFVBQVU7QUFBQSxJQUN0RSxLQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsTUFBTTtBQUNwQixZQUFNLE1BQU0sV0FBVyxLQUFLLE9BQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDN0UsWUFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSztBQUNqQyxZQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUUsVUFBVTtBQUNyQyxZQUFNLE1BQU0sSUFBSSxHQUFHLE1BQU0sS0FBSyxNQUFNLElBQUksQ0FBQztBQUN6QyxZQUFNLFlBQVksS0FBSyxLQUFLLE9BQU8sU0FBUyxDQUFDO0FBQzdDLGFBQ0U7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUFFLEtBQUssRUFBRTtBQUFBLFVBQUksTUFBTSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsRUFBRTtBQUFBLFVBQzNDLFdBQVU7QUFBQSxVQUNWLE9BQU87QUFBQSxZQUNMLFNBQVM7QUFBQSxZQUFhLGdCQUFnQjtBQUFBLFlBQVEsT0FBTztBQUFBLFlBQ3JELGFBQWEsTUFBTSxJQUFJLGlDQUFpQztBQUFBLFlBQ3hELGNBQWMsTUFBTSxZQUFZLElBQUksaUNBQWlDO0FBQUEsWUFDckUsU0FBUztBQUFBLFlBQVEsS0FBSztBQUFBLFlBQUksWUFBWTtBQUFBLFlBQ3RDLFlBQVk7QUFBQSxVQUNkO0FBQUE7QUFBQSxRQUNBLG9DQUFDLFNBQUksT0FBTztBQUFBLFVBQ1YsT0FBTztBQUFBLFVBQUksUUFBUTtBQUFBLFVBQUksY0FBYztBQUFBLFVBQUksWUFBWSxHQUFHLElBQUk7QUFBQSxVQUM1RCxTQUFTO0FBQUEsVUFBUSxZQUFZO0FBQUEsVUFBVSxZQUFZO0FBQUEsUUFDckQsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEtBQUcsb0NBQUMsS0FBRSxNQUFXLENBQUUsQ0FDekQ7QUFBQSxRQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUNwQixvQ0FBQyxVQUFLLE9BQU87QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUFJLE9BQU87QUFBQSxVQUFNLFlBQVk7QUFBQSxVQUN2QyxlQUFlO0FBQUEsUUFDakIsS0FBSSxFQUFFLEdBQUksR0FDVixvQ0FBQyxTQUFJLE9BQU87QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUFJLFlBQVk7QUFBQSxVQUFLLE9BQU87QUFBQSxVQUFxQixXQUFXO0FBQUEsVUFDdEUsWUFBWTtBQUFBLFFBQ2QsS0FBSSxFQUFFLEtBQU0sR0FDWCxFQUFFLGVBQ0Qsb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sa0JBQWtCLFdBQVcsR0FBRyxLQUNoRSxFQUFFLFdBQ0wsQ0FFSjtBQUFBLE1BQ0Y7QUFBQSxJQUVKLENBQUMsQ0FDSCxDQUNGLENBQ0Y7QUFBQSxFQUVKO0FBR0EsV0FBUyxpQkFBaUI7QUFDeEIsVUFBTSxVQUFVLE9BQU8sV0FBVyxDQUFDO0FBQ25DLFFBQUksUUFBUSxXQUFXLEVBQUcsUUFBTztBQUNqQyxXQUNFLG9DQUFDLGFBQVEsV0FBVSxhQUFZLE9BQU8sRUFBRSxZQUFZLGlCQUFpQixLQUNuRSxvQ0FBQyxTQUFJLFdBQVUsYUFBWSxPQUFPLEVBQUUsU0FBUyxZQUFZLEtBQ3ZEO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxTQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsUUFDTixNQUFLO0FBQUE7QUFBQSxJQUNQLEdBRUEsb0NBQUMsU0FBSSxXQUFVLGVBQWMsT0FBTyxFQUFFLFNBQVMsUUFBUSxxQkFBcUIsa0JBQWtCLEtBQUssR0FBRyxLQUNuRyxRQUFRLElBQUksT0FDWCxvQ0FBQyxTQUFJLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDL0IsWUFBWTtBQUFBLE1BQVEsY0FBYztBQUFBLE1BQUksVUFBVTtBQUFBLE1BQ2hELFFBQVE7QUFBQSxJQUNWLEtBRUUsb0NBQUMsU0FBSSxPQUFPO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFBTyxZQUFZLDJCQUEyQixFQUFFLEdBQUcsVUFBVSxFQUFFLEdBQUc7QUFBQSxNQUMvRSxVQUFVO0FBQUEsTUFBWSxTQUFTO0FBQUEsTUFBUSxZQUFZO0FBQUEsTUFDbkQsVUFBVTtBQUFBLElBQ1osS0FDRyxFQUFFLFFBQ0Msb0NBQUMsU0FBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLEdBQUcsRUFBRSxJQUFJLGlCQUFPLE9BQU87QUFBQSxNQUM3QyxPQUFPO0FBQUEsTUFBUSxRQUFRO0FBQUEsTUFDdkIsV0FBVztBQUFBLE1BQVMsZ0JBQWdCO0FBQUEsSUFDdEMsR0FBRSxJQUNGLG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQU8sYUFBYTtBQUFBLE1BQUssY0FBYztBQUFBLE1BQzlDLFlBQVksMkJBQTJCLEVBQUUsR0FBRyxRQUFRLE1BQU0sRUFBRSxHQUFHLENBQUM7QUFBQSxNQUNoRSxTQUFTO0FBQUEsTUFBUSxZQUFZO0FBQUEsTUFBVSxPQUFPO0FBQUEsTUFDOUMsV0FBVyxxQkFBcUIsRUFBRSxHQUFHO0FBQUEsSUFDdkMsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEtBQ2xDLG9DQUFDLEtBQUssUUFBTCxFQUFZLE1BQUssMEJBQXdCLENBQzVDLENBQ0YsQ0FFTixHQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsaUJBQWlCLEtBQ3RDLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssT0FBTyxvQkFBb0IsS0FDckUsRUFBRSxNQUFLLEtBQUMsb0NBQUMsVUFBSyxPQUFPLEVBQUUsWUFBWSxLQUFLLE9BQU8sZ0JBQWdCLFVBQVUsR0FBRyxLQUFHLGNBQUUsQ0FDcEYsR0FDQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxlQUFlLFlBQVksS0FBSyxXQUFXLEdBQUcsWUFBWSxJQUFJLEtBQzlGLEVBQUUsT0FBTyxNQUFNLFFBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxNQUFNLG9DQUFDLFNBQUksS0FBSyxLQUFJLElBQUssQ0FBTSxDQUNuRSxHQUNBLG9DQUFDLE9BQUUsT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGdCQUFnQixZQUFZLE1BQU0sUUFBUSxXQUFXLEtBQUksRUFBRSxHQUFJLEdBQ2hHLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsUUFBUSxVQUFVLFFBQVEsS0FBSyxHQUFHLFdBQVcsR0FBRyxNQUNuRSxFQUFFLGFBQWEsQ0FBQyxHQUFHLElBQUksT0FDdkIsb0NBQUMsVUFBSyxLQUFLLEdBQUcsT0FBTztBQUFBLE1BQ25CLFVBQVU7QUFBQSxNQUFJLE9BQU87QUFBQSxNQUFnQixZQUFZO0FBQUEsTUFDakQsU0FBUztBQUFBLE1BQVcsY0FBYztBQUFBLElBQ3BDLEtBQUksQ0FBRSxDQUNQLENBQ0gsQ0FDRixDQUNGLENBQ0QsQ0FDSCxDQUNGLENBQ0Y7QUFBQSxFQUVKO0FBRUEsV0FBUyxNQUFNLEtBQUs7QUFDbEIsV0FBTyxJQUFJLFFBQVEsTUFBTSxFQUFFLEVBQUUsTUFBTSxPQUFPLEVBQ3ZDLElBQUksT0FBSyxLQUFLLElBQUksR0FBRyxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLEVBQ3hFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxHQUFHLEdBQUc7QUFBQSxFQUNoQztBQUdBLFdBQVMsYUFBYTtBQUNwQixVQUFNLENBQUMsTUFBTSxPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7QUFDeEMsVUFBTSxPQUFPLE9BQU8sUUFBUSxDQUFDO0FBQzdCLFVBQU0sVUFBVSxPQUFPLFFBQVEsU0FBUyxXQUFXO0FBRW5ELFdBQ0Usb0NBQUMsYUFBUSxJQUFHLE9BQU0sV0FBVSxhQUFZLE9BQU8sRUFBRSxZQUFZLE9BQU8sS0FDbEUsb0NBQUMsU0FBSSxXQUFVLGFBQVksT0FBTyxFQUFFLFNBQVMsWUFBWSxLQUN6RCxvQ0FBQyxTQUFJLFdBQVUsY0FBYSxPQUFPO0FBQUEsTUFDakMsU0FBUztBQUFBLE1BQVEscUJBQXFCO0FBQUEsTUFBYSxLQUFLO0FBQUEsTUFBSSxZQUFZO0FBQUEsSUFDMUUsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLFVBQVUsS0FBSyxJQUFJLEtBQ3pDLG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQUksT0FBTztBQUFBLE1BQWUsWUFBWTtBQUFBLE1BQUssZUFBZTtBQUFBLE1BQ3BFLGNBQWM7QUFBQSxNQUFHLGVBQWU7QUFBQSxJQUNsQyxLQUFHLG1DQUFVLEdBQ2Isb0NBQUMsUUFBRyxPQUFPO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFBMEIsWUFBWTtBQUFBLE1BQUssT0FBTztBQUFBLE1BQzVELGVBQWU7QUFBQSxNQUFXLFlBQVk7QUFBQSxNQUFLLFFBQVE7QUFBQSxJQUNyRCxLQUFHLDRCQUFJLG9DQUFDLFVBQUUsR0FBRSxzQ0FBTSxHQUNsQixvQ0FBQyxPQUFFLE9BQU8sRUFBRSxPQUFPLGdCQUFnQixVQUFVLElBQUksV0FBVyxJQUFJLFlBQVksSUFBSSxLQUFHLDBHQUVoRixVQUNHLHFKQUNBLG9IQUNOLEdBQ0MsV0FDQyxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxXQUFXLEdBQUcsS0FDMUIsb0NBQUMsT0FBRSxNQUFNLFNBQVMsUUFBTyxVQUFTLEtBQUksdUJBQXNCLE9BQU87QUFBQSxNQUNqRSxTQUFTO0FBQUEsTUFBZSxZQUFZO0FBQUEsTUFBVSxLQUFLO0FBQUEsTUFDbkQsU0FBUztBQUFBLE1BQWEsWUFBWTtBQUFBLE1BQVcsT0FBTztBQUFBLE1BQ3BELGNBQWM7QUFBQSxNQUFLLGdCQUFnQjtBQUFBLE1BQVEsWUFBWTtBQUFBLE1BQUssVUFBVTtBQUFBLElBQ3hFLEtBQ0Usb0NBQUMsS0FBSyxNQUFMLEVBQVUsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEdBQUcsR0FBRSxHQUFFLGdDQUVoRCxHQUNDLE9BQU8sUUFBUSxTQUFTLGNBQ3ZCO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxLQUFLLE9BQU8sT0FBTyxRQUFRO0FBQUEsUUFDM0IsS0FBSTtBQUFBLFFBQ0osT0FBTyxFQUFFLFNBQVMsU0FBUyxXQUFXLElBQUksT0FBTyxLQUFLLFFBQVEsS0FBSyxjQUFjLEVBQUU7QUFBQTtBQUFBLElBQ3JGLENBRUosQ0FFSixHQUVBLG9DQUFDLGFBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNO0FBQ2xCLFlBQU0sU0FBUyxTQUFTO0FBQ3hCLGFBQ0Usb0NBQUMsU0FBSSxLQUFLLEVBQUUsTUFBTSxHQUFHLE9BQU87QUFBQSxRQUMxQixXQUFXLE1BQU0sSUFBSSxpQ0FBaUM7QUFBQSxRQUN0RCxjQUFjO0FBQUEsTUFDaEIsS0FDRSxvQ0FBQyxZQUFPLFNBQVMsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDLEdBQUcsT0FBTztBQUFBLFFBQ3RELE9BQU87QUFBQSxRQUFRLFlBQVk7QUFBQSxRQUFlLFFBQVE7QUFBQSxRQUNsRCxTQUFTO0FBQUEsUUFBVSxTQUFTO0FBQUEsUUFBUSxnQkFBZ0I7QUFBQSxRQUNwRCxZQUFZO0FBQUEsUUFBVSxLQUFLO0FBQUEsUUFBSSxRQUFRO0FBQUEsUUFDdkMsV0FBVztBQUFBLFFBQVEsT0FBTztBQUFBLFFBQXFCLFVBQVU7QUFBQSxRQUFJLFlBQVk7QUFBQSxNQUMzRSxLQUNFLG9DQUFDLGNBQU0sRUFBRSxDQUFFLEdBQ1gsb0NBQUMsVUFBSyxPQUFPO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFBSSxRQUFRO0FBQUEsUUFBSSxjQUFjO0FBQUEsUUFBSSxZQUFZO0FBQUEsUUFDckQsUUFBUTtBQUFBLFFBQWdDLE9BQU87QUFBQSxRQUMvQyxTQUFTO0FBQUEsUUFBUSxZQUFZO0FBQUEsUUFDN0IsWUFBWSxTQUFTLGdCQUFnQjtBQUFBLE1BQ3ZDLEtBQ0csU0FDRyxvQ0FBQyxLQUFLLE9BQUwsRUFBVyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsSUFBSSxPQUFPLE9BQU8sR0FBRSxJQUM1RCxvQ0FBQyxLQUFLLE1BQUwsRUFBVSxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBRyxHQUFFLENBQ2xELENBQ0YsR0FDQyxVQUNDLG9DQUFDLFNBQUksT0FBTztBQUFBLFFBQ1YsZUFBZTtBQUFBLFFBQUksT0FBTztBQUFBLFFBQWdCLFVBQVU7QUFBQSxRQUFJLFlBQVk7QUFBQSxRQUNwRSxVQUFVO0FBQUEsTUFDWixLQUFJLEVBQUUsQ0FBRSxDQUVaO0FBQUEsSUFFSixDQUFDLENBQ0gsQ0FDRixDQUNBLENBQ0Y7QUFBQSxFQUVKO0FBR0EsTUFBTSxVQUFVO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFBYSxjQUFjO0FBQUEsSUFDcEMsVUFBVTtBQUFBLElBQUksT0FBTztBQUFBLElBQWtCLGVBQWU7QUFBQSxJQUFVLGVBQWU7QUFBQSxJQUFhLFlBQVk7QUFBQSxFQUMxRztBQUNBLE1BQU0sT0FBTztBQUFBLElBQ1gsU0FBUztBQUFBLElBQWEsY0FBYztBQUFBLElBQ3BDLG9CQUFvQjtBQUFBLEVBQ3RCO0FBRUEsV0FBUyxjQUFjO0FBQ3JCLFVBQU0sUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUMvQixVQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsQ0FBQztBQUMzQyxVQUFNLGFBQWEsUUFBUSxXQUFXLFFBQVEsWUFBWTtBQUMxRCxVQUFNLFdBQVcsUUFBUSxTQUFTLFFBQVEsVUFBVTtBQUNwRCxVQUFNLFVBQVUsUUFBUSxXQUFXO0FBRW5DLFdBQ0U7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLElBQUc7QUFBQSxRQUNILFdBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLE9BQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxVQUFZLFVBQVU7QUFBQSxRQUNsQztBQUFBO0FBQUEsTUFFQSxvQ0FBQyxTQUFJLGVBQVcsTUFBQyxPQUFPLEVBQUUsVUFBVSxZQUFZLE9BQU8sR0FBRyxTQUFTLEtBQUssR0FBRyxPQUFNLFFBQU8sUUFBTyxVQUM3RixvQ0FBQyxjQUNDLG9DQUFDLGFBQVEsSUFBRyxTQUFRLE9BQU0sTUFBSyxRQUFPLE1BQUssY0FBYSxvQkFDdEQsb0NBQUMsVUFBSyxHQUFFLHNCQUFxQixRQUFPLGVBQWMsYUFBWSxLQUFJLGVBQWMsU0FBTyxDQUN6RixDQUNGLEdBQ0Esb0NBQUMsVUFBSyxPQUFNLFFBQU8sUUFBTyxRQUFPLE1BQUssZUFBYSxDQUNyRDtBQUFBLE1BRUEsb0NBQUMsU0FBSSxXQUFVLHlCQUF3QixPQUFPO0FBQUEsUUFDNUMsU0FBUztBQUFBLFFBQVUsU0FBUztBQUFBLFFBQVEscUJBQXFCO0FBQUEsUUFBYSxLQUFLO0FBQUEsUUFDM0UsVUFBVTtBQUFBLFFBQVksWUFBWTtBQUFBLE1BQ3BDLEtBRUUsb0NBQUMsYUFDQyxvQ0FBQyxTQUFJLE9BQU87QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUFJLE9BQU87QUFBQSxRQUFlLFlBQVk7QUFBQSxRQUFLLGVBQWU7QUFBQSxRQUNwRSxjQUFjO0FBQUEsUUFBRyxlQUFlO0FBQUEsTUFDbEMsS0FBRyxvQ0FBVyxHQUNkLG9DQUFDLFFBQUcsT0FBTztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQTBCLFlBQVk7QUFBQSxRQUNoRCxlQUFlO0FBQUEsUUFBVyxZQUFZO0FBQUEsUUFBSyxRQUFRO0FBQUEsUUFBRyxPQUFPO0FBQUEsTUFDL0QsS0FBRyw4Q0FBTyxvQ0FBQyxVQUFFLEdBQUUsZ0NBQUssR0FFcEIsb0NBQUMsU0FBSSxPQUFPLEVBQUUsV0FBVyxJQUFJLFNBQVMsUUFBUSxLQUFLLEdBQUcsS0FDbkQsY0FDQyxvQ0FBQyxXQUFRLE1BQU0sS0FBSyxLQUFLLE9BQU0sNEJBQU8sT0FBTyxRQUFRLFNBQVMsS0FBSyxRQUFRLGNBQWMsSUFBRyxHQUU3RixZQUNDLG9DQUFDLFdBQVEsTUFBTSxLQUFLLE9BQU8sT0FBTSw0QkFBTyxPQUFPLFFBQVEsT0FBTyxLQUFLLFFBQVEsWUFBWSxJQUFHLEdBRTNGLFdBQ0Msb0NBQUMsV0FBUSxNQUFNLEtBQUssTUFBTSxPQUFNLDRCQUFPLE9BQU0saUNBQVksS0FBSSx3Q0FBUSxDQUV6RSxHQUVBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFdBQVcsSUFBSSxTQUFTLFFBQVEsS0FBSyxJQUFJLFVBQVUsT0FBTyxLQUNyRSxXQUNDLG9DQUFDLE9BQUUsTUFBTSxTQUFTLFFBQU8sVUFBUyxLQUFJLHVCQUFzQixPQUFPO0FBQUEsUUFDakUsU0FBUztBQUFBLFFBQWEsWUFBWTtBQUFBLFFBQWUsT0FBTztBQUFBLFFBQVEsY0FBYztBQUFBLFFBQzlFLGdCQUFnQjtBQUFBLFFBQVEsWUFBWTtBQUFBLFFBQUssVUFBVTtBQUFBLFFBQ25ELFNBQVM7QUFBQSxRQUFlLFlBQVk7QUFBQSxRQUFVLEtBQUs7QUFBQSxNQUNyRCxLQUNFLG9DQUFDLEtBQUssTUFBTCxFQUFVLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUUsR0FBRSwyQkFDaEQsR0FFRixvQ0FBQyxPQUFFLE1BQUssYUFBWSxPQUFPO0FBQUEsUUFDekIsU0FBUztBQUFBLFFBQWEsWUFBWTtBQUFBLFFBQVEsT0FBTztBQUFBLFFBQXFCLGNBQWM7QUFBQSxRQUNwRixnQkFBZ0I7QUFBQSxRQUFRLFlBQVk7QUFBQSxRQUFLLFVBQVU7QUFBQSxRQUNuRCxRQUFRO0FBQUEsTUFDVixLQUFHLDBCQUFJLENBQ1QsQ0FDRixHQUdBLG9DQUFDLFNBQUksT0FBTztBQUFBLFFBQ1YsWUFBWTtBQUFBLFFBQVEsY0FBYztBQUFBLFFBQUksU0FBUztBQUFBLFFBQy9DLFFBQVE7QUFBQSxRQUFnQyxXQUFXO0FBQUEsTUFDckQsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLFFBQVEsZ0JBQWdCLGlCQUFpQixZQUFZLFVBQVUsY0FBYyxHQUFHLEtBQ3JHLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssT0FBTyxvQkFBb0IsS0FBRyxzQ0FBTSxHQUNqRixvQ0FBQyxVQUFLLE9BQU87QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUFJLE9BQU87QUFBQSxRQUFXLFFBQVE7QUFBQSxRQUN4QyxTQUFTO0FBQUEsUUFBWSxjQUFjO0FBQUEsUUFBRyxlQUFlO0FBQUEsUUFBVSxZQUFZO0FBQUEsUUFDM0UsWUFBWTtBQUFBLE1BQ2QsS0FBRyxjQUFFLENBQ1AsR0FDQSxvQ0FBQyxTQUFJLE9BQU87QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUFRLHFCQUFxQjtBQUFBLFFBQXlCLEtBQUs7QUFBQSxRQUNwRSxVQUFVO0FBQUEsTUFDWixLQUNFLG9DQUFDLFNBQUksT0FBTyxTQUFTLEdBQ3JCLG9DQUFDLFNBQUksT0FBTyxXQUFTLG9CQUFHLEdBQ3hCLG9DQUFDLFNBQUksT0FBTyxXQUFTLG9CQUFHLEdBQ3hCLG9DQUFDLFNBQUksT0FBTyxXQUFTLGNBQUUsR0FDdEIsTUFBTSxJQUFJLENBQUNFLE9BQU07QUFDaEIsY0FBTSxVQUFVLENBQUMsTUFBTSxNQUFNLGtCQUFRLE1BQU07QUFDM0MsZUFDRSxvQ0FBQyxNQUFNLFVBQU4sRUFBZSxLQUFLQSxHQUFFLE9BQ3JCLG9DQUFDLFNBQUksT0FBTyxFQUFFLEdBQUcsTUFBTSxZQUFZLEtBQUssT0FBTyxvQkFBb0IsS0FBSUEsR0FBRSxHQUFJLEdBQzdFLG9DQUFDLFNBQUksT0FBTyxFQUFFLEdBQUcsTUFBTSxPQUFPLFFBQVFBLEdBQUUsRUFBRSxJQUFJLG1CQUFtQixlQUFlLEtBQUlBLEdBQUUsRUFBRyxHQUN6RixvQ0FBQyxTQUFJLE9BQU87QUFBQSxVQUNWLEdBQUc7QUFBQSxVQUNILE9BQU9BLEdBQUUsWUFBWSxZQUFZLFFBQVFBLEdBQUUsRUFBRSxJQUFJLG1CQUFtQjtBQUFBLFVBQ3BFLFlBQVlBLEdBQUUsWUFBWSxNQUFNO0FBQUEsUUFDbEMsS0FBSUEsR0FBRSxFQUFHLEdBQ1Qsb0NBQUMsU0FBSSxPQUFPLEVBQUUsR0FBRyxNQUFNLE9BQU8sUUFBUUEsR0FBRSxFQUFFLElBQUksbUJBQW1CLGVBQWUsS0FBSUEsR0FBRSxFQUFHLENBQzNGO0FBQUEsTUFFSixDQUFDLENBQ0gsQ0FDRixDQUNGO0FBQUEsSUFDRjtBQUFBLEVBRUo7QUFFQSxXQUFTLFFBQVEsRUFBRSxNQUFNLEdBQUcsT0FBTyxPQUFPLElBQUksR0FBRztBQUMvQyxXQUNFLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsUUFBUSxLQUFLLElBQUksWUFBWSxhQUFhLEtBQy9ELG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQUksUUFBUTtBQUFBLE1BQUksY0FBYztBQUFBLE1BQUksWUFBWTtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUFXLE9BQU87QUFBQSxNQUM5QixTQUFTO0FBQUEsTUFBUSxZQUFZO0FBQUEsTUFBVSxRQUFRO0FBQUEsSUFDakQsS0FDRSxvQ0FBQyxLQUFFLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxHQUFHLEdBQUUsQ0FDdEMsR0FDQSxvQ0FBQyxhQUNDLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGdCQUFnQixlQUFlLFVBQVUsWUFBWSxLQUFLLGVBQWUsWUFBWSxLQUFJLEtBQU0sR0FDbEksb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLFlBQVksS0FBSyxXQUFXLEdBQUcsT0FBTyxvQkFBb0IsS0FBSSxLQUFNLEdBQy9GLE9BQU8sb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sa0JBQWtCLFdBQVcsRUFBRSxLQUFJLEdBQUksQ0FDcEYsQ0FDRjtBQUFBLEVBRUo7QUFHQSxXQUFTLE9BQU8sRUFBRSxJQUFJLEdBQUc7QUFDdkIsVUFBTSxTQUFTLE9BQU8sVUFBVSxDQUFDO0FBQ2pDLFVBQU0sYUFBYSxPQUFPLGNBQWMsQ0FBQztBQUN6QyxVQUFNLGFBQWEsT0FBTyxjQUFjO0FBQ3hDLFVBQU0sUUFBTyxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUVwQyxXQUNFLG9DQUFDLFlBQU8sT0FBTztBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQWdCLFNBQVM7QUFBQSxNQUFlLFVBQVU7QUFBQSxNQUN6RCxXQUFXO0FBQUEsSUFDYixLQUNFLG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFNBQVMsS0FDcEQsb0NBQUMsU0FBSSxXQUFVLGlCQUFnQixPQUFPO0FBQUEsTUFDcEMsU0FBUztBQUFBLE1BQVEscUJBQXFCO0FBQUEsTUFBcUIsS0FBSztBQUFBLE1BQUksY0FBYztBQUFBLElBQ3BGLEtBRUUsb0NBQUMsYUFDQyxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLFFBQVEsS0FBSyxJQUFJLFlBQVksU0FBUyxLQUMzRCxvQ0FBQyxjQUFXLE1BQU0sSUFBRyxHQUNyQixvQ0FBQyxhQUNDLG9DQUFDLFNBQUksT0FBTyxFQUFFLE9BQU8scUJBQXFCLFlBQVksS0FBSyxVQUFVLEdBQUcsS0FBSSxVQUFXLEdBQ3RGLE9BQU8sZ0JBQ04sb0NBQUMsU0FBSSxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsVUFBVSxJQUFJLGVBQWUsU0FBUyxLQUFJLE9BQU8sWUFBYSxDQUV6RyxDQUNGLEdBQ0Esb0NBQUMsT0FBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLFlBQVksSUFBSSxLQUN4QyxPQUFPLGVBQWUsOFBBQ3pCLENBQ0YsR0FHQSxvQ0FBQyxhQUNDLG9DQUFDLFNBQUksT0FBTyxFQUFFLE9BQU8scUJBQXFCLFlBQVksS0FBSyxjQUFjLElBQUksVUFBVSxJQUFJLGVBQWUsU0FBUyxLQUFHLDBCQUFJLEdBQ3pILFdBQVcsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLE9BQzFCLG9DQUFDLE9BQUUsS0FBSyxFQUFFLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRSxJQUFJLE9BQU87QUFBQSxNQUN0QyxTQUFTO0FBQUEsTUFBUyxPQUFPO0FBQUEsTUFBZ0IsZ0JBQWdCO0FBQUEsTUFDekQsU0FBUztBQUFBLE1BQVMsVUFBVTtBQUFBLElBQzlCLEtBQUksRUFBRSxJQUFLLENBQ1osQ0FDSCxHQUdBLG9DQUFDLGFBQ0Msb0NBQUMsU0FBSSxPQUFPLEVBQUUsT0FBTyxxQkFBcUIsWUFBWSxLQUFLLGNBQWMsSUFBSSxVQUFVLElBQUksZUFBZSxTQUFTLEtBQUcsY0FBRSxHQUN2SDtBQUFBLE1BQ0MsRUFBRSxPQUFPLDRCQUFRLE1BQU0sYUFBYTtBQUFBLE1BQ3BDLEVBQUUsT0FBTyw0QkFBUSxNQUFNLFVBQVU7QUFBQSxNQUNqQyxFQUFFLE9BQU8sNEJBQVEsTUFBTSxTQUFTO0FBQUEsTUFDaEMsRUFBRSxPQUFPLDRCQUFRLE1BQU0sWUFBWTtBQUFBLElBQ3JDLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxLQUFLLE1BQ25CLG9DQUFDLE9BQUUsS0FBSyxPQUFPLE1BQVksT0FBTztBQUFBLE1BQ2hDLFNBQVM7QUFBQSxNQUFTLE9BQU87QUFBQSxNQUFnQixnQkFBZ0I7QUFBQSxNQUN6RCxTQUFTO0FBQUEsTUFBUyxVQUFVO0FBQUEsSUFDOUIsS0FBSSxLQUFNLENBQ1gsQ0FDSCxHQUdBLG9DQUFDLGFBQ0Msb0NBQUMsU0FBSSxPQUFPLEVBQUUsT0FBTyxxQkFBcUIsWUFBWSxLQUFLLGNBQWMsSUFBSSxVQUFVLElBQUksZUFBZSxTQUFTLEtBQUcsb0JBQUcsR0FDeEg7QUFBQSxNQUNDLEVBQUUsT0FBTyw0QkFBUSxNQUFNLGNBQWM7QUFBQSxNQUNyQyxFQUFFLE9BQU8sNEJBQVEsTUFBTSxXQUFXO0FBQUEsSUFDcEMsRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEtBQUssTUFDbkIsb0NBQUMsT0FBRSxLQUFLLE9BQU8sTUFBWSxPQUFPO0FBQUEsTUFDaEMsU0FBUztBQUFBLE1BQVMsT0FBTztBQUFBLE1BQWdCLGdCQUFnQjtBQUFBLE1BQ3pELFNBQVM7QUFBQSxNQUFTLFVBQVU7QUFBQSxJQUM5QixLQUFJLEtBQU0sQ0FDWCxDQUNILENBQ0YsR0FFQSxvQ0FBQyxTQUFJLE9BQU87QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUFJLFdBQVc7QUFBQSxNQUMzQixTQUFTO0FBQUEsTUFBUSxnQkFBZ0I7QUFBQSxNQUFpQixVQUFVO0FBQUEsTUFBUSxLQUFLO0FBQUEsTUFDekUsVUFBVTtBQUFBLE1BQUksU0FBUztBQUFBLElBQ3pCLEtBQ0Usb0NBQUMsY0FBSyxTQUFHLE1BQUssS0FBRSxZQUFXLHdCQUFzQixHQUNqRCxvQ0FBQyxjQUFLLGdGQUFhLENBQ3JCLENBQ0YsQ0FDRjtBQUFBLEVBRUo7QUFHQSxXQUFTLFNBQVMsRUFBRSxJQUFJLEdBQUc7QUFDekIsVUFBTSxVQUFVLE1BQU07QUFDcEIsWUFBTSxJQUFJLE9BQU87QUFDakIsVUFBSSxDQUFDLEVBQUc7QUFDUixhQUFPLGlCQUFpQjtBQUN4QixpQkFBVyxNQUFNO0FBQ2YsY0FBTSxLQUFLLFNBQVMsZUFBZSxDQUFDO0FBQ3BDLFlBQUksQ0FBQyxHQUFJO0FBQ1QsY0FBTSxPQUFPLFNBQVMsY0FBYyxRQUFRLEdBQUcsZ0JBQWdCO0FBQy9ELGVBQU8sU0FBUyxFQUFFLEtBQUssR0FBRyxzQkFBc0IsRUFBRSxNQUFNLE9BQU8sVUFBVSxPQUFPLElBQUksVUFBVSxTQUFTLENBQUM7QUFBQSxNQUMxRyxHQUFHLEVBQUU7QUFBQSxJQUNQLEdBQUcsQ0FBQyxDQUFDO0FBRUwsV0FDRSxvQ0FBQyxjQUNDLG9DQUFDLFdBQVEsS0FBUyxHQUNsQixvQ0FBQyxxQkFBZSxHQUNoQixvQ0FBQyx1QkFBaUIsR0FDbEIsb0NBQUMsbUJBQWEsR0FDZCxvQ0FBQyxvQkFBYyxHQUNmLG9DQUFDLGdCQUFVLEdBQ1gsb0NBQUMsaUJBQVcsQ0FDZDtBQUFBLEVBRUo7QUFFQSxTQUFPLE9BQU8sUUFBUTtBQUFBLElBQ3BCO0FBQUEsSUFDQTtBQUFBLElBQWlCO0FBQUEsSUFBbUI7QUFBQSxJQUNwQztBQUFBLElBQWdCO0FBQUEsSUFBWTtBQUFBLElBQWE7QUFBQSxFQUMzQyxDQUFDOzs7QUMxc0JELFdBQVMsU0FBUyxFQUFFLElBQUksR0FBRztBQUN6QixVQUFNLEVBQUUsV0FBVyxXQUFXLE9BQU8sSUFBSTtBQUN6QyxRQUFJLE9BQU87QUFFWCxRQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLGNBQVE7QUFDUixlQUFTLE9BQU8sV0FBVztBQUFBLFFBQVEsUUFDaEMsRUFBRSxVQUFVLENBQUMsR0FBRyxPQUFPLE9BQUssVUFBVSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQ2xELElBQUksUUFBTSxFQUFFLEdBQUcsR0FBRyxZQUFZLEVBQUUsSUFBSSxjQUFjLEVBQUUsTUFBTSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUEsTUFDOUU7QUFBQSxJQUNGLFdBQVcsVUFBVSxTQUFTLFVBQVU7QUFDdEMsY0FBUTtBQUNSLFlBQU0sTUFBTSxPQUFPLFdBQVc7QUFBQSxRQUFRLFFBQ25DLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBSSxRQUFNLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxJQUFJLGNBQWMsRUFBRSxNQUFNLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBQSxNQUM1RjtBQUNBLGVBQVMsT0FBTyxJQUFJLFFBQU0sSUFBSSxLQUFLLE9BQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUFBLElBQ3RFLE9BQU87QUFDTCxZQUFNLE1BQU0sT0FBTyxXQUFXLEtBQUssT0FBSyxFQUFFLE9BQU8sVUFBVSxVQUFVO0FBQ3JFLFVBQUksQ0FBQyxJQUFLLFFBQU8sb0NBQUMsU0FBSSxXQUFVLGFBQVksT0FBTyxFQUFFLFNBQVMsWUFBWSxLQUFHLHNDQUFNO0FBQ25GLGNBQVEsSUFBSTtBQUNaLGdCQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxRQUFNLEVBQUUsR0FBRyxHQUFHLFlBQVksSUFBSSxJQUFJLGNBQWMsSUFBSSxNQUFNLE1BQU0sSUFBSSxLQUFLLEVBQUU7QUFBQSxJQUM3RztBQUVBLFdBQ0Usb0NBQUMsVUFBSyxXQUFVLHVCQUFzQixPQUFPLEVBQUUsU0FBUyxZQUFZLEtBQ2xFLG9DQUFDLFFBQUcsT0FBTyxFQUFFLFVBQVUsd0JBQXdCLFlBQVksS0FBSyxRQUFRLFlBQVksT0FBTyxvQkFBb0IsS0FDNUcsS0FDSCxHQUNBLG9DQUFDLE9BQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQWdCLFVBQVUsSUFBSSxjQUFjLEdBQUcsS0FBRyxXQUFHLE9BQU8sUUFBTyxTQUFFLEdBRXZGLE9BQU8sV0FBVyxJQUNqQixvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLElBQUksV0FBVyxVQUFVLFlBQVksa0JBQWtCLGNBQWMsSUFBSSxPQUFPLGVBQWUsS0FDbkgsVUFBVSxTQUFTLGVBQWUsMEpBQ2xDLFVBQVUsU0FBUyxZQUFZLDBEQUMvQixDQUFDLFVBQVUsUUFBUSxvRUFDdEIsSUFFQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxTQUFTLFFBQVEsS0FBSyxHQUFHLEtBQ3BDLE9BQU8sSUFBSSxPQUNWLG9DQUFDLE9BQUUsS0FBSyxFQUFFLElBQUksTUFBTSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsRUFBRSxJQUFJLFdBQVUsMEJBQXlCLE9BQU87QUFBQSxNQUN6RixTQUFTO0FBQUEsTUFBUSxLQUFLO0FBQUEsTUFBSSxTQUFTO0FBQUEsTUFBSSxjQUFjO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQWEsUUFBUTtBQUFBLE1BQ2pDLGdCQUFnQjtBQUFBLE1BQVEsT0FBTztBQUFBLE1BQWEsV0FBVztBQUFBLElBQ3pELEtBQ0Usb0NBQUMsU0FBSSxPQUFPO0FBQUEsTUFBRSxPQUFPO0FBQUEsTUFBSSxRQUFRO0FBQUEsTUFBSSxZQUFZO0FBQUEsTUFBRyxjQUFjO0FBQUEsTUFDcEQsWUFBWSxHQUFHLEVBQUUsSUFBSTtBQUFBLE1BQU0sU0FBUztBQUFBLE1BQVEsWUFBWTtBQUFBLE1BQVUsT0FBTyxFQUFFO0FBQUEsSUFBSyxLQUM1RixvQ0FBQyxLQUFLLFlBQUwsRUFBZ0IsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEdBQUcsR0FBRSxDQUNwRCxHQUNBLG9DQUFDLFNBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUNwQixvQ0FBQyxTQUFJLE9BQU87QUFBQSxNQUFFLFVBQVU7QUFBQSxNQUFJLFlBQVk7QUFBQSxNQUFLLGVBQWU7QUFBQSxNQUM5QyxlQUFlO0FBQUEsTUFBYSxPQUFPLEVBQUU7QUFBQSxNQUFNLGNBQWM7QUFBQSxJQUFFLEtBQUksRUFBRSxZQUFhLEdBQzVGLG9DQUFDLFFBQUcsT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssT0FBTyxxQkFBcUIsUUFBUSxHQUFHLFlBQVksS0FBSyxLQUNqRyxFQUFFLEtBQ0wsR0FDQyxFQUFFLFdBQVcsb0NBQUMsT0FBRSxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sZ0JBQWdCLFdBQVcsR0FBRyxZQUFZLElBQUksS0FBSSxFQUFFLE9BQVEsQ0FDN0csQ0FDRixDQUNELENBQ0gsQ0FFSjtBQUFBLEVBRUo7QUFHQSxXQUFTLFdBQVcsT0FBTyxhQUFhO0FBQ3RDLGFBQVMsUUFBUTtBQUNqQixRQUFJLEtBQUssU0FBUyxjQUFjLDBCQUEwQjtBQUMxRCxRQUFJLENBQUMsSUFBSTtBQUNQLFdBQUssU0FBUyxjQUFjLE1BQU07QUFDbEMsU0FBRyxhQUFhLFFBQVEsYUFBYTtBQUNyQyxlQUFTLEtBQUssWUFBWSxFQUFFO0FBQUEsSUFDOUI7QUFDQSxPQUFHLGFBQWEsV0FBVyxXQUFXO0FBQUEsRUFDeEM7QUFFQSxXQUFTLGFBQWEsT0FBTyxVQUFVO0FBQ3JDLFVBQU0sTUFBTSxTQUFTLGVBQWUsU0FBUztBQUM3QyxRQUFJLElBQUssS0FBSSxPQUFPO0FBQ3BCLFFBQUksQ0FBQyxNQUFPO0FBQ1osVUFBTSxPQUFPO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFBc0IsU0FBUztBQUFBLE1BQzNDLE1BQU0sTUFBTTtBQUFBLE1BQU8sYUFBYSxNQUFNLFdBQVc7QUFBQSxNQUFJLFlBQVk7QUFBQSxNQUNqRSxPQUFPLEVBQUUsU0FBUyxvQkFBb0IsTUFBTSxNQUFNLE1BQU07QUFBQSxNQUN4RCxXQUFXLEVBQUUsU0FBUyx1QkFBdUIsT0FBTyxPQUFPLFVBQVUsQ0FBQyxHQUFHLGNBQWMsR0FBRztBQUFBLE1BQzFGLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULGlCQUFpQjtBQUFBLFVBQ2YsRUFBRSxTQUFTLFlBQVksVUFBVSxHQUFHLE1BQU0sZ0JBQU0sTUFBTSxLQUFLO0FBQUEsVUFDM0QsRUFBRSxTQUFTLFlBQVksVUFBVSxHQUFHLE1BQU0sU0FBUyxNQUFNLE1BQU0sS0FBSyxTQUFTLEVBQUUsR0FBRztBQUFBLFVBQ2xGLEVBQUUsU0FBUyxZQUFZLFVBQVUsR0FBRyxNQUFNLE1BQU0sTUFBTTtBQUFBLFFBQ3hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxVQUFNLElBQUksU0FBUyxjQUFjLFFBQVE7QUFDekMsTUFBRSxLQUFLO0FBQVcsTUFBRSxPQUFPO0FBQzNCLE1BQUUsY0FBYyxLQUFLLFVBQVUsSUFBSTtBQUNuQyxhQUFTLEtBQUssWUFBWSxDQUFDO0FBQUEsRUFDN0I7QUFFQSxNQUFNLGlCQUFpQixDQUFDO0FBSXhCLFdBQVMsU0FBUyxFQUFFLEtBQUssR0FBRztBQUMxQixVQUFNLE1BQU0sTUFBTSxPQUFPLElBQUk7QUFDN0IsVUFBTSxVQUFVLE1BQU07QUFDcEIsWUFBTSxLQUFLLElBQUk7QUFDZixVQUFJLENBQUMsR0FBSTtBQUNULFlBQU0sUUFBUSxPQUFPLFlBQ2pCLE9BQU8sVUFBVSxTQUFTLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUNoRTtBQUNKLFlBQU0sV0FBVyxTQUFTLFlBQVksRUFBRSx5QkFBeUIsS0FBSztBQUN0RSxTQUFHLGdCQUFnQixRQUFRO0FBQUEsSUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNULFdBQU8sb0NBQUMsU0FBSSxLQUFVLFdBQVUsbUJBQWlCO0FBQUEsRUFDbkQ7QUFFQSxXQUFTLFlBQVksRUFBRSxJQUFJLEdBQUc7QUFDNUIsVUFBTSxFQUFFLFdBQVcsV0FBVyxnQkFBZ0IsVUFBVSxJQUFJO0FBQzVELFVBQU0sQ0FBQyxNQUFPLE9BQU8sSUFBSyxNQUFNLFNBQVMsSUFBSTtBQUM3QyxVQUFNLENBQUMsT0FBTyxRQUFRLElBQUksTUFBTSxTQUFTLElBQUk7QUFFN0MsVUFBTSxXQUFXLE9BQU8sV0FBVyxLQUFLLE9BQUssRUFBRSxPQUFPLFVBQVUsVUFBVTtBQUMxRSxVQUFNLFFBQVcsVUFBVSxPQUFPLEtBQUssT0FBSyxFQUFFLE9BQU8sVUFBVSxPQUFPO0FBRXRFLFVBQU0sVUFBVSxNQUFNO0FBQ3BCLFVBQUksQ0FBQyxNQUFPO0FBQ1osZ0JBQVUsTUFBTSxFQUFFO0FBQ2xCLGlCQUFXLEdBQUcsTUFBTSxLQUFLLE1BQU0sT0FBTyxRQUFRLGlCQUFpQixFQUFFLElBQUksTUFBTSxXQUFXLEVBQUU7QUFDeEYsbUJBQWEsT0FBTyxRQUFRO0FBRTVCLFVBQUksZUFBZSxNQUFNLEVBQUUsR0FBRztBQUFFLGdCQUFRLGVBQWUsTUFBTSxFQUFFLENBQUM7QUFBRztBQUFBLE1BQVE7QUFDM0UsWUFBTSxPQUFPLE1BQU07QUFDbkIsVUFBSSxDQUFDLE1BQU07QUFBRSxpQkFBUyxrREFBVTtBQUFHO0FBQUEsTUFBUTtBQUMzQyxZQUFNLElBQUksRUFDUCxLQUFLLE9BQUs7QUFBRSxZQUFJLENBQUMsRUFBRSxHQUFJLE9BQU0sSUFBSSxNQUFNLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFBRyxlQUFPLEVBQUUsS0FBSztBQUFBLE1BQUcsQ0FBQyxFQUM5RSxLQUFLLFVBQVE7QUFBRSx1QkFBZSxNQUFNLEVBQUUsSUFBSTtBQUFNLGdCQUFRLElBQUk7QUFBRyxpQkFBUyxJQUFJO0FBQUEsTUFBRyxDQUFDLEVBQ2hGLE1BQU0sT0FBSyxTQUFTLGlDQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFBQSxJQUM3QyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFZCxRQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87QUFDdkIsYUFBTyxvQ0FBQyxTQUFJLFdBQVUsYUFBWSxPQUFPLEVBQUUsU0FBUyxZQUFZLEtBQUcsc0NBQU07QUFBQSxJQUMzRTtBQUNBLFVBQU0sUUFBUSxVQUFVLFNBQVMsTUFBTSxFQUFFO0FBRXpDLFdBQ0Usb0NBQUMsVUFBSyxXQUFVLGlCQUFnQixPQUFPLEVBQUUsU0FBUyxZQUFZLEtBQzVELG9DQUFDLFNBQUksV0FBVSw0QkFBMkIsT0FBTztBQUFBLE1BQy9DLFNBQVM7QUFBQSxNQUFRLHFCQUFxQjtBQUFBLE1BQWEsS0FBSztBQUFBLE1BQUksWUFBWTtBQUFBLElBQzFFLEtBQ0Usb0NBQUMsYUFBUSxXQUFVLGtCQUFpQixPQUFPLEVBQUUsVUFBVSxxQkFBcUIsS0FDMUUsb0NBQUMsT0FBRSxNQUFNLEtBQUssU0FBUyxFQUFFLElBQUksT0FBTztBQUFBLE1BQ2xDLFVBQVU7QUFBQSxNQUFJLFlBQVk7QUFBQSxNQUFLLGVBQWU7QUFBQSxNQUM5QyxlQUFlO0FBQUEsTUFBYSxPQUFPLFNBQVM7QUFBQSxNQUFNLGdCQUFnQjtBQUFBLElBQ3BFLEtBQUcsV0FBRyxTQUFTLElBQUssR0FDcEIsb0NBQUMsUUFBRyxXQUFVLGdCQUFlLE9BQU87QUFBQSxNQUNsQyxVQUFVO0FBQUEsTUFBMEIsWUFBWTtBQUFBLE1BQ2hELFFBQVE7QUFBQSxNQUFlLFlBQVk7QUFBQSxNQUFNLGVBQWU7QUFBQSxNQUN4RCxPQUFPO0FBQUEsSUFDVCxLQUFJLE1BQU0sS0FBTSxHQUNmLE1BQU0sV0FDTCxvQ0FBQyxPQUFFLE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxnQkFBZ0IsWUFBWSxLQUFLLFFBQVEsRUFBRSxLQUN6RSxNQUFNLE9BQ1QsR0FFRixvQ0FBQyxTQUFJLE9BQU87QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUFRLEtBQUs7QUFBQSxNQUFJLFlBQVk7QUFBQSxNQUN0QyxRQUFRO0FBQUEsTUFBVSxlQUFlO0FBQUEsTUFBSSxjQUFjO0FBQUEsSUFDckQsS0FDRSxvQ0FBQyxZQUFPLFNBQVMsTUFBTSxlQUFlLE1BQU0sRUFBRSxHQUFHLGdCQUFjLE9BQU8sT0FBTztBQUFBLE1BQzNFLFNBQVM7QUFBQSxNQUFlLFlBQVk7QUFBQSxNQUFVLEtBQUs7QUFBQSxNQUNuRCxTQUFTO0FBQUEsTUFBWSxjQUFjO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFDaEQsWUFBWSxRQUFRLDBCQUEwQjtBQUFBLE1BQzlDLE9BQU8sUUFBUSxpQkFBaUI7QUFBQSxNQUNoQyxVQUFVO0FBQUEsTUFBSSxZQUFZO0FBQUEsTUFBSyxRQUFRO0FBQUEsSUFDekMsS0FDRSxvQ0FBQyxLQUFLLE9BQUwsRUFBVyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBRyxHQUFFLEdBQzVDLFFBQVEsdUJBQVEsY0FDbkIsR0FDQyxNQUFNLGVBQ0wsb0NBQUMsVUFBSyxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8saUJBQWlCLEtBQUcsa0NBQ2hELE1BQU0sV0FDZCxDQUVKLEdBRUMsU0FBUyxvQ0FBQyxTQUFJLFdBQVUsNEJBQXlCLG9DQUFDLGdCQUFPLDBCQUFJLEdBQVUsS0FBTSxHQUM3RSxDQUFDLFNBQVMsU0FBUyxRQUFRLG9DQUFDLFNBQUksT0FBTyxFQUFFLE9BQU8sZUFBZSxLQUFHLDBCQUFJLEdBQ3RFLFNBQVMsUUFBUSxvQ0FBQyxZQUFTLE1BQVcsQ0FDekMsR0FFQSxvQ0FBQyxXQUFNLFdBQVUsaUJBQWdCLE9BQU87QUFBQSxNQUN0QyxVQUFVO0FBQUEsTUFBVSxLQUFLO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBSSxPQUFPO0FBQUEsSUFDckQsS0FDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxZQUFZLEtBQUssT0FBTyxxQkFBcUIsY0FBYyxHQUFHLEtBQUcsMEJBQUksR0FDbkYsb0NBQUMsU0FBSSxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsV0FBVyxTQUFTLEtBQUcsNEVBRTlELENBQ0YsQ0FDRixDQUNGO0FBQUEsRUFFSjtBQUVBLFdBQVMsWUFBWSxFQUFFLElBQUksR0FBRztBQUM1QixXQUNFLG9DQUFDLFVBQUssT0FBTyxFQUFFLFNBQVMsU0FBUyxLQUMvQixvQ0FBQyxTQUFJLFdBQVUsYUFBWSxPQUFPLEVBQUUsU0FBUyxVQUFVLGNBQWMsR0FBRyxLQUN0RSxvQ0FBQyxRQUFHLE9BQU8sRUFBRSxVQUFVLElBQUksWUFBWSxLQUFLLE9BQU8scUJBQXFCLFFBQVEsV0FBVyxLQUFHLDBCQUU5RixDQUNGLEdBQ0MsT0FBTyxlQUFlLE1BQU0sY0FBYyxPQUFPLFdBQVcsQ0FDL0Q7QUFBQSxFQUVKO0FBRUEsV0FBUyxjQUFjO0FBQ3JCLFVBQU0sVUFBVSxPQUFPLFdBQVcsQ0FBQztBQUNuQyxVQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLE1BQU0sY0FBYztBQUUzQyxhQUFTLFFBQVEsRUFBRSxPQUFPLE9BQU8sSUFBSSxHQUFHO0FBQ3RDLFVBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxFQUFHLFFBQU87QUFDekMsYUFDRSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxXQUFXLEdBQUcsS0FDMUIsb0NBQUMsU0FBSSxPQUFPO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFBSSxZQUFZO0FBQUEsUUFBSyxlQUFlO0FBQUEsUUFDOUMsT0FBTztBQUFBLFFBQUssZUFBZTtBQUFBLFFBQWEsY0FBYztBQUFBLE1BQ3hELEtBQUksS0FBTSxHQUNWLG9DQUFDLFFBQUcsT0FBTyxFQUFFLFFBQVEsR0FBRyxTQUFTLGNBQWMsV0FBVyxPQUFPLEtBQzlELE1BQU0sSUFBSSxDQUFDLE1BQU0sTUFDaEIsb0NBQUMsUUFBRyxLQUFLLEdBQUcsT0FBTyxFQUFFLFVBQVUsSUFBSSxPQUFPLGFBQWEsWUFBWSxJQUFJLEtBQUksSUFBSyxDQUNqRixDQUNILENBQ0Y7QUFBQSxJQUVKO0FBRUEsV0FDRSxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxZQUFZLGtCQUFrQixXQUFXLFNBQVMsU0FBUyxjQUFjLEtBQ3RGLG9DQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFNBQVMsS0FDcEQsb0NBQUMsU0FBSSxPQUFPLEVBQUUsY0FBYyxHQUFHLEtBQzdCLG9DQUFDLFNBQUksT0FBTyxFQUFFLFVBQVUsSUFBSSxZQUFZLEtBQUssZUFBZSxTQUFTLE9BQU8sZUFBZSxjQUFjLEVBQUUsS0FBRyx1Q0FFOUcsR0FDQSxvQ0FBQyxRQUFHLE9BQU8sRUFBRSxVQUFVLElBQUksWUFBWSxLQUFLLE9BQU8scUJBQXFCLFFBQVEsRUFBRSxLQUFHLHNDQUVyRixDQUNGLEdBRUEsb0NBQUMsU0FBSSxPQUFPO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxxQkFBcUI7QUFBQSxNQUNyQixLQUFLO0FBQUEsSUFDUCxLQUNHLFFBQVEsSUFBSSxPQUNYLG9DQUFDLFNBQUksS0FBSyxFQUFFLElBQUksT0FBTztBQUFBLE1BQ3JCLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxJQUNqQixLQUVFLG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsWUFBWSwyQkFBMkIsRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHO0FBQUEsTUFDM0QsY0FBYyxhQUFhLEVBQUUsR0FBRztBQUFBLE1BQ2hDLFNBQVM7QUFBQSxJQUNYLEtBQ0Usb0NBQUMsU0FBSSxPQUFPLEVBQUUsVUFBVSxJQUFJLFlBQVksS0FBSyxPQUFPLG9CQUFvQixLQUNyRSxFQUFFLE1BQUssS0FBQyxvQ0FBQyxVQUFLLE9BQU8sRUFBRSxVQUFVLElBQUksWUFBWSxLQUFLLE9BQU8sZUFBZSxLQUFHLGNBQUUsQ0FDcEYsR0FDQSxvQ0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLEtBQUssWUFBWSxLQUFLLFdBQVcsR0FBRyxZQUFZLElBQUksS0FDdEYsRUFBRSxPQUFPLE1BQU0sUUFBSyxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU0sb0NBQUMsU0FBSSxLQUFLLEtBQUksSUFBSyxDQUFNLENBQ25FLENBQ0YsR0FHQSxvQ0FBQyxTQUFJLE9BQU87QUFBQSxNQUNWLFlBQVksMkJBQTJCLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRztBQUFBLE1BQzNELFNBQVM7QUFBQSxNQUFRLGdCQUFnQjtBQUFBLE1BQVUsWUFBWTtBQUFBLE1BQ3ZELFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxJQUNoQixLQUNHLEVBQUUsUUFDQyxvQ0FBQyxTQUFJLEtBQUssRUFBRSxPQUFPLEtBQUssR0FBRyxFQUFFLElBQUksaUJBQU8sT0FBTztBQUFBLE1BQzdDLE9BQU87QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFLLGNBQWM7QUFBQSxNQUN2QyxXQUFXO0FBQUEsTUFBUyxnQkFBZ0I7QUFBQSxNQUNwQyxRQUFRLGFBQWEsRUFBRSxHQUFHO0FBQUEsTUFDMUIsV0FBVyxtQkFBbUIsRUFBRSxHQUFHO0FBQUEsSUFDckMsR0FBRSxJQUNGLG9DQUFDLFNBQUksT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQUssUUFBUTtBQUFBLE1BQUssY0FBYztBQUFBLE1BQ3ZDLFlBQVksMkJBQTJCLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRztBQUFBLE1BQ3pELFNBQVM7QUFBQSxNQUFRLFlBQVk7QUFBQSxNQUM3QixXQUFXLG1CQUFtQixFQUFFLEdBQUc7QUFBQSxJQUNyQyxLQUNFLG9DQUFDLFNBQUksT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEdBQUcsS0FDakMsT0FBTyxRQUFRLG9DQUFDLE9BQU8sS0FBSyxRQUFaLEVBQW1CLE1BQUssMEJBQXdCLENBQ25FLENBQ0YsQ0FFTixHQUdBLG9DQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsa0JBQWtCLE1BQU0sRUFBRSxLQUMvQyxvQ0FBQyxXQUFRLE9BQU0sNEJBQU8sT0FBTyxFQUFFLFlBQVksS0FBSyxFQUFFLEtBQUssR0FDdkQsb0NBQUMsV0FBUSxPQUFNLDRCQUFPLE9BQU8sRUFBRSxlQUFlLEtBQUssRUFBRSxLQUFLLEdBQzFELG9DQUFDLFdBQVEsT0FBTSxnQkFBSyxPQUFPLEVBQUUsV0FBVyxLQUFLLEVBQUUsS0FBSyxDQUN0RCxDQUNGLENBQ0QsQ0FDSCxDQUNGLENBQ0Y7QUFBQSxFQUVKO0FBRUEsU0FBTyxPQUFPLFFBQVEsRUFBRSxVQUFVLGFBQWEsYUFBYSxZQUFZLENBQUM7OztBQ3ZUekUsTUFBTSxFQUFFLFVBQVUsV0FBVyxlQUFlLEdBQUcsU0FBUyxJQUFJO0FBQzVELE1BQU0sRUFBRSxXQUFXLElBQUk7QUFFdkIsV0FBUyxZQUFZO0FBQ25CLFVBQU0sT0FBTyxPQUFPLFNBQVMsUUFBUSxNQUFNLFFBQVEsTUFBTSxFQUFFO0FBQzNELFVBQU0sUUFBUSxJQUFJLE1BQU0sR0FBRyxFQUFFLE9BQU8sT0FBTztBQUMzQyxRQUFJLE1BQU0sV0FBVyxFQUFHLFFBQU8sRUFBRSxPQUFPLE9BQU87QUFDL0MsUUFBSSxNQUFNLENBQUMsTUFBTSxZQUFhLFFBQU8sRUFBRSxPQUFPLFFBQVEsTUFBTSxZQUFZO0FBQ3hFLFFBQUksTUFBTSxDQUFDLE1BQU0sU0FBYSxRQUFPLEVBQUUsT0FBTyxRQUFRLE1BQU0sU0FBUztBQUNyRSxRQUFJLE1BQU0sQ0FBQyxNQUFNLFVBQWEsUUFBTyxFQUFFLE9BQU8sVUFBVTtBQUN4RCxRQUFJLE1BQU0sQ0FBQyxNQUFNLFVBQWEsUUFBTyxFQUFFLE9BQU8sVUFBVTtBQUN4RCxRQUFJLE1BQU0sV0FBVyxFQUFTLFFBQU8sRUFBRSxPQUFPLFFBQVEsWUFBWSxNQUFNLENBQUMsRUFBRTtBQUMzRSxXQUFPLEVBQUUsT0FBTyxXQUFXLFlBQVksTUFBTSxDQUFDLEdBQUcsU0FBUyxNQUFNLENBQUMsRUFBRTtBQUFBLEVBQ3JFO0FBQ0EsV0FBUyxPQUFPLEtBQUssVUFBVTtBQUM3QixRQUFJO0FBQUUsWUFBTSxNQUFNLGFBQWEsUUFBUSxHQUFHO0FBQUcsYUFBTyxRQUFRLE9BQU8sS0FBSyxNQUFNLEdBQUcsSUFBSTtBQUFBLElBQVUsUUFDekY7QUFBRSxhQUFPO0FBQUEsSUFBVTtBQUFBLEVBQzNCO0FBQ0EsV0FBUyxRQUFRLEtBQUssS0FBSztBQUFFLFFBQUk7QUFBRSxtQkFBYSxRQUFRLEtBQUssS0FBSyxVQUFVLEdBQUcsQ0FBQztBQUFBLElBQUcsUUFBUTtBQUFBLElBQUM7QUFBQSxFQUFFO0FBRTlGLFdBQVMsTUFBTTtBQUNiLFVBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSSxTQUFTLFNBQVM7QUFDcEQsVUFBTSxDQUFDLE9BQVcsUUFBUSxJQUFRLFNBQVMsTUFBTSxhQUFhLFFBQVEsT0FBTyxLQUFTLE9BQU87QUFDN0YsVUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQVMsTUFBTSxhQUFhLFFBQVEsV0FBVyxLQUFLLFFBQVE7QUFDOUYsVUFBTSxDQUFDLFNBQVcsVUFBVSxJQUFNLFNBQVMsTUFBTSxhQUFhLFFBQVEsU0FBUyxNQUFRLElBQUk7QUFDM0YsVUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQVMsTUFBTSxPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUMzRSxVQUFNLENBQUMsUUFBVyxTQUFTLElBQU8sU0FBUyxNQUFNLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQztBQUV4RSxjQUFVLE1BQU07QUFDZCxZQUFNLFNBQVMsTUFBTTtBQUFFLHFCQUFhLFVBQVUsQ0FBQztBQUFHLGVBQU8sU0FBUyxHQUFHLENBQUM7QUFBQSxNQUFHO0FBQ3pFLGFBQU8saUJBQWlCLGNBQWMsTUFBTTtBQUM1QyxhQUFPLE1BQU0sT0FBTyxvQkFBb0IsY0FBYyxNQUFNO0FBQUEsSUFDOUQsR0FBRyxDQUFDLENBQUM7QUFDTCxjQUFVLE1BQU07QUFBRSxtQkFBYSxRQUFRLFNBQVMsS0FBSztBQUFHLGVBQVMsZ0JBQWdCLGFBQWEsY0FBYyxLQUFLO0FBQUEsSUFBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQzlILGNBQVUsTUFBTTtBQUFFLG1CQUFhLFFBQVEsYUFBYSxTQUFTO0FBQUcsZUFBUyxnQkFBZ0IsVUFBVSxPQUFPLFVBQVUsY0FBYyxRQUFRO0FBQUEsSUFBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBRzNKLFFBQUksT0FBTyxhQUFhLGFBQWE7QUFDbkMsVUFBSSxRQUFTLFVBQVMsZ0JBQWdCLGFBQWEsWUFBWSxJQUFJO0FBQUEsVUFDOUQsVUFBUyxnQkFBZ0IsZ0JBQWdCLFVBQVU7QUFBQSxJQUMxRDtBQUNBLGNBQVUsTUFBTTtBQUFFLG1CQUFhLFFBQVEsV0FBVyxVQUFVLE9BQU8sS0FBSztBQUFBLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN2RixjQUFVLE1BQU0sUUFBUSxnQkFBZ0IsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQy9ELGNBQVUsTUFBTSxRQUFRLGFBQWEsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO0FBRXRELFVBQU0saUJBQWlCLFFBQU0sYUFBYSxVQUFRLEtBQUssU0FBUyxFQUFFLElBQUksS0FBSyxPQUFPLE9BQUssTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ2hILFVBQU0sWUFBWSxRQUFNLFVBQVUsVUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sT0FBSyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFFMUYsVUFBTSxNQUFNLEVBQUUsT0FBTyxVQUFVLFdBQVcsY0FBYyxTQUFTLFlBQVksV0FBVyxnQkFBZ0IsUUFBUSxXQUFXLFVBQVU7QUFHckksVUFBTSxFQUFFLFFBQUFDLFNBQVEsVUFBQUMsV0FBVSxVQUFBQyxXQUFVLGFBQUFDLGNBQWEsYUFBQUMsY0FBYSxhQUFBQyxjQUFhLFFBQUFDLFFBQU8sSUFBSTtBQUV0RixXQUFPO0FBQUEsTUFBRTtBQUFBLE1BQVU7QUFBQSxNQUNqQk4sV0FBVSxFQUFFQSxTQUFRLEVBQUUsSUFBSSxDQUFDO0FBQUEsTUFDM0IsVUFBVSxVQUFVLFVBQWFDLGFBQWUsRUFBRUEsV0FBYSxFQUFFLElBQUksQ0FBQztBQUFBLE1BQ3RFLFVBQVUsVUFBVSxVQUFhQyxhQUFlLEVBQUVBLFdBQWEsRUFBRSxJQUFJLENBQUM7QUFBQSxNQUN0RSxVQUFVLFVBQVUsYUFBYUMsZ0JBQWUsRUFBRUEsY0FBYSxFQUFFLElBQUksQ0FBQztBQUFBLE1BQ3RFLFVBQVUsVUFBVSxhQUFhQyxnQkFBZSxFQUFFQSxjQUFhLEVBQUUsSUFBSSxDQUFDO0FBQUEsTUFDdEUsVUFBVSxVQUFVLGFBQWFDLGdCQUFlLEVBQUVBLGNBQWEsRUFBRSxJQUFJLENBQUM7QUFBQSxNQUN0RUMsV0FBVSxFQUFFQSxTQUFRLEVBQUUsSUFBSSxDQUFDO0FBQUEsTUFDM0I7QUFBQSxRQUFFO0FBQUEsUUFBVTtBQUFBLFVBQ1YsV0FBVyxZQUFZLFVBQVUsT0FBTyxFQUFFO0FBQUEsVUFDMUMsU0FBUyxNQUFNLFdBQVcsT0FBSyxDQUFDLENBQUM7QUFBQSxVQUNqQyxnQkFBZ0I7QUFBQSxVQUNoQixPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0UsRUFBRSxRQUFRLEVBQUUsV0FBVyxPQUFPLGVBQWUsS0FBSyxDQUFDO0FBQUEsUUFDbkQsdUNBQVMsVUFBVSw2QkFBVyxFQUFFO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLE1BQU0sU0FBUyxTQUFTLGVBQWUsTUFBTTtBQUM3QyxNQUFJLE9BQVEsWUFBVyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQzsiLAogICJuYW1lcyI6IFsiSWNvbiIsICJDbGluaWNNYXJrIiwgIklsbG8iLCAiaCIsICJIZXJvQmlnIiwgImgiLCAiaCIsICJOYXZiYXIiLCAiSG9tZVBhZ2UiLCAiTGlzdFBhZ2UiLCAiQXJ0aWNsZVBhZ2UiLCAiQ29udGFjdFBhZ2UiLCAiRG9jdG9yc1BhZ2UiLCAiRm9vdGVyIl0KfQo=
