import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════
   KEYFRAMES  (original + CRT additions)
═══════════════════════════════════════════════════ */
const STYLES = `
  @keyframes grainShift {
    0%,100% { transform: translate(0,0); }
    10%  { transform: translate(-2%,-3%); }
    20%  { transform: translate(3%,1%); }
    30%  { transform: translate(-1%,4%); }
    40%  { transform: translate(4%,-1%); }
    50%  { transform: translate(-3%,2%); }
    60%  { transform: translate(1%,-4%); }
    70%  { transform: translate(-4%,3%); }
    80%  { transform: translate(2%,-2%); }
    90%  { transform: translate(-2%,4%); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes spinSlowRev {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes floatA {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    50%     { transform: translateY(-18px) rotate(5deg); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    50%     { transform: translateY(-12px) rotate(-6deg); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0px); }
    33%     { transform: translateY(-20px) rotate(8deg); }
    66%     { transform: translateY(6px) rotate(-3deg); }
  }
  @keyframes marchDot {
    0%,100% { opacity: 0.08; transform: scale(1); }
    50%     { opacity: 0.28; transform: scale(1.5); }
  }
  @keyframes tickerScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes halfBreathe {
    0%,100% { opacity: 0.06; }
    50%     { opacity: 0.14; }
  }
  @keyframes titleIn {
    0%   { opacity:0; transform: translateY(22px); }
    100% { opacity:1; transform: translateY(0); }
  }
  @keyframes spanFlicker {
    0%,100% { opacity:1; }
    92%     { opacity:1; }
    93%     { opacity:0.55; }
    94%     { opacity:1; }
    97%     { opacity:0.7; }
    98%     { opacity:1; }
  }
  @keyframes scratchIn {
    from { transform: scaleX(0); transform-origin: left; }
    to   { transform: scaleX(1); transform-origin: left; }
  }
  @keyframes badgePulse {
    0%,100% { box-shadow: 6px 6px 0 #A03820; }
    50%     { box-shadow: 9px 9px 0 #A03820, 0 0 0 5px rgba(216,90,48,0.15); }
  }

  /* ── CRT wavy warp: slow vertical undulation ── */
  @keyframes crtWave {
    0%   { d: path("M0,0 Q50,1 100,0 Q150,-1 200,0 L200,100 L0,100 Z"); }
    25%  { d: path("M0,0 Q50,2 100,0 Q150,-2 200,0 L200,100 L0,100 Z"); }
    50%  { d: path("M0,0 Q50,-1 100,0 Q150,1.5 200,0 L200,100 L0,100 Z"); }
    75%  { d: path("M0,0 Q50,1.5 100,-1 Q150,2 200,0 L200,100 L0,100 Z"); }
    100% { d: path("M0,0 Q50,1 100,0 Q150,-1 200,0 L200,100 L0,100 Z"); }
  }

  /* ── CRT scanline drift ── */
  @keyframes scanDrift {
    from { background-position: 0 0; }
    to   { background-position: 0 -8px; }
  }

  /* ── Rolling scan bar ── */
  @keyframes rollBar {
    0%   { top: -8%; }
    100% { top: 108%; }
  }

  /* ── Intermittent static burst ── */
  @keyframes staticBurst {
    0%,82%,84%,87%,89%,92%,94%,100% { opacity: 0; }
    83%,88%,93% { opacity: 0.18; }
  }

  /* ── RGB shift: slight chromatic aberration pulse ── */
  @keyframes rgbShift {
    0%,100% { text-shadow:
      -1px 0 0 rgba(255,50,50,0.35),
       1px 0 0 rgba(50,200,255,0.35),
       3px  3px 0 rgba(140,48,20,0.5),
       5px  5px 0 rgba(0,0,0,0.15); }
    50% { text-shadow:
      -2px 0 0 rgba(255,50,50,0.2),
       2px 0 0 rgba(50,200,255,0.2),
       3px  3px 0 rgba(140,48,20,0.5),
       5px  5px 0 rgba(0,0,0,0.15); }
  }

  /* ── Phosphor glow on the title ── */
@keyframes phosphorGlow {
  0%,100% {
    text-shadow:
      0 0 2px #FFD84D,
      0 0 6px #FFD84D,
      0 0 12px #FFD84D,
      0 0 24px #FFB300,
      0 0 48px #FF8C00,
      0 0 90px rgba(255,140,0,0.5);
  }
  50% {
    text-shadow:
      0 0 3px #FFD84D,
      0 0 8px #FFD84D,
      0 0 18px #FFD84D,
      0 0 36px #FFB300,
      0 0 70px #FF8C00,
      0 0 120px rgba(255,140,0,0.6);
  }
}

  /* ── Cream text phosphor glow ── */
  @keyframes phosphorGlowCream {
    0%,100% {
      text-shadow:
        0 0  4px #fff,
        0 0 10px rgba(237,224,192,1),
        0 0 24px rgba(237,224,192,0.9),
        0 0 50px rgba(237,224,192,0.7),
        0 0 90px rgba(200,185,150,0.45),
        0 0 140px rgba(180,165,120,0.25),
        3px  3px 0 rgba(10,30,18,0.7),
        6px  6px 0 rgba(0,0,0,0.2);
    }
    50% {
      text-shadow:
        0 0  6px #fff,
        0 0 14px rgba(237,224,192,1),
        0 0 34px rgba(237,224,192,1),
        0 0 65px rgba(237,224,192,0.8),
        0 0 110px rgba(200,185,150,0.6),
        0 0 170px rgba(180,165,120,0.35),
        3px  3px 0 rgba(10,30,18,0.7),
        6px  6px 0 rgba(0,0,0,0.2);
    }
  }

  /* ── B&W → colour desaturation fade on load ── */
  @keyframes colourReveal {
    0%   { filter: grayscale(1) brightness(0.85) contrast(1.1); }
    60%  { filter: grayscale(1) brightness(0.85) contrast(1.1); }
    100% { filter: grayscale(0) brightness(1)    contrast(1);   }
  }
  .hero-bw-reveal {
    animation: colourReveal 2.4s ease-out forwards;
  }

  @keyframes spanFlickerGlow {
    0%,100% { opacity:1; }
    92%     { opacity:1; }
    93%     { opacity:0.55; }
    94%     { opacity:1; }
    97%     { opacity:0.7; }
    98%     { opacity:1; }
  }
`;

/* ═══════════════════════════════════════════════════
   CRT OVERLAY  (sits above everything in the hero)
═══════════════════════════════════════════════════ */
function CRTOverlay() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      pointerEvents: "none", zIndex: 20,
      borderRadius: "inherit",
      overflow: "hidden",
    }}>

      {/* ① Scanlines — thin repeating horizontal stripes */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 3px)",
        backgroundSize: "100% 3px",
        animation: "scanDrift 0.18s linear infinite",
        mixBlendMode: "multiply",
      }} />

      {/* ② Rolling scan bar — a single bright semi-transparent band scrolling top→bottom */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        height: "8%",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.025) 40%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.025) 60%, transparent)",
        animation: "rollBar 7s linear infinite",
        top: "-8%",
      }} />

      {/* ③ Wavy SVG displacement filter — subtle horizontal warp */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 1 }}
        preserveAspectRatio="none">
        <defs>
          <filter id="crt-warp" x="-2%" y="-2%" width="104%" height="104%"
            color-interpolation-filters="linearRGB">
            {/* Turbulence drives a very gentle feTurbulence-based warp */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0025 0.11"
              numOctaves="2"
              seed="3"
              result="noise"
            >
              <animate attributeName="baseFrequency"
                values="0.0025 0.11; 0.003 0.115; 0.002 0.108; 0.0025 0.11"
                dur="4s" repeatCount="indefinite" />
              <animate attributeName="seed"
                values="3;5;2;4;3" dur="9s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic" in2="noise"
              scale="7"
              xChannelSelector="R" yChannelSelector="G"
            />
          </filter>
        </defs>
        {/* Apply the warp filter to a full-size transparent rect so it displaces content behind */}
        <rect width="100%" height="100%" fill="transparent" filter="url(#crt-warp)" />
      </svg>

      {/* ④ Static noise burst — random flicker of grain */}
      <svg style={{
        position: "absolute", inset: "-10%",
        width: "120%", height: "120%",
        animation: "staticBurst 5s steps(1) infinite",
        opacity: 0,
      }}>
        <filter id="crt-static">
          <feTurbulence type="turbulence" baseFrequency="0.85" numOctaves="1" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.9   0 0 0 0 0.85   0 0 0 0 0.7   0 0 0 0.55 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#crt-static)" />
      </svg>

      {/* ⑤ CRT corner vignette — dark edges, curved inward */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 58%, rgba(0,0,0,0.55) 100%)",
      }} />

      {/* ⑥ Subtle green phosphor tint */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 40%, rgba(20,80,30,0.06) 0%, transparent 70%)",
      }} />

    </div>
  );
}

/* ═══════════════════════════════════════════════════
   RETRO BACKGROUND  (unchanged from original)
═══════════════════════════════════════════════════ */
function RetroBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>

      {/* Film grain */}
      <svg style={{
        position: "absolute", inset: "-30%", width: "160%", height: "160%",
        opacity: 0.035,
        animation: "grainShift 0.14s steps(1) infinite",
      }}>
        <filter id="fg">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fg)" fill="white" />
      </svg>

      {/* Big starburst — top right */}
      <div style={{
        position: "absolute", top: "-90px", right: "-90px",
        width: "360px", height: "360px",
        animation: "spinSlow 32s linear infinite",
        opacity: 0.09,
      }}>
        <svg viewBox="0 0 200 200" width="360" height="360">
          {Array.from({ length: 24 }, (_, i) => (
            <rect key={i} x="99" y="8" width="3" height="84" fill="#F0B429"
              transform={`rotate(${i * 15} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="14" fill="#F0B429" />
          <circle cx="100" cy="100" r="8" fill="#1A3A2A" />
        </svg>
      </div>

      {/* Small starburst — bottom left */}
      <div style={{
        position: "absolute", bottom: "100px", left: "-40px",
        width: "180px", height: "180px",
        animation: "spinSlowRev 22s linear infinite",
        opacity: 0.11,
      }}>
        <svg viewBox="0 0 200 200" width="180" height="180">
          {Array.from({ length: 16 }, (_, i) => (
            <rect key={i} x="99" y="18" width="3" height="64" fill="#D85A30"
              transform={`rotate(${i * 22.5} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="10" fill="#D85A30" />
        </svg>
      </div>

      {/* Halftone dots — bottom right */}
      <svg style={{
        position: "absolute", right: "-10px", bottom: "120px",
        width: "300px", height: "300px",
        animation: "halfBreathe 5s ease-in-out infinite",
      }} viewBox="0 0 200 200">
        {Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: 9 }, (_, col) => (
            <circle key={`${row}-${col}`}
              cx={11 + col * 22} cy={11 + row * 22}
              r={1.6 + (row + col) * 0.16}
              fill="#F0B429" opacity="0.7" />
          ))
        )}
      </svg>

      {/* Halftone dots — top left */}
      <svg style={{
        position: "absolute", left: "-10px", top: "60px",
        width: "200px", height: "200px",
        animation: "halfBreathe 6s ease-in-out 1.5s infinite",
      }} viewBox="0 0 160 160">
        {Array.from({ length: 7 }, (_, row) =>
          Array.from({ length: 7 }, (_, col) => (
            <circle key={`${row}-${col}`}
              cx={11 + col * 22} cy={11 + row * 22}
              r={2} fill="#1DBFA3" opacity="0.6" />
          ))
        )}
      </svg>

      {/* Diagonal stripes — top left corner */}
      <svg style={{
        position: "absolute", top: 0, left: 0,
        width: "220px", height: "220px", opacity: 0.055,
      }} viewBox="0 0 200 200">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i}
            x1={-30 + i * 22} y1="0" x2={i * 22 + 60} y2="200"
            stroke="#1DBFA3" strokeWidth="7" />
        ))}
      </svg>

      {/* Diagonal stripes — bottom right */}
      <svg style={{
        position: "absolute", bottom: "115px", right: 0,
        width: "180px", height: "180px", opacity: 0.06,
      }} viewBox="0 0 180 180">
        {Array.from({ length: 10 }, (_, i) => (
          <line key={i}
            x1={-20 + i * 22} y1="0" x2={i * 22 + 50} y2="180"
            stroke="#EDE0C0" strokeWidth="6" />
        ))}
      </svg>

      {/* Floating diamond */}
      <div style={{
        position: "absolute", left: "3.5%", top: "36%",
        animation: "floatA 7s ease-in-out infinite", opacity: 0.13,
      }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <rect x="9" y="9" width="32" height="32" fill="none"
            stroke="#F0B429" strokeWidth="2.5"
            transform="rotate(45 25 25)" />
          <rect x="18" y="18" width="14" height="14" fill="none"
            stroke="#F0B429" strokeWidth="1.2"
            transform="rotate(45 25 25)" />
        </svg>
      </div>

      {/* Floating concentric circles */}
      <div style={{
        position: "absolute", right: "4.5%", top: "28%",
        animation: "floatB 9s ease-in-out 0.8s infinite", opacity: 0.11,
      }}>
        <svg width="68" height="68" viewBox="0 0 68 68">
          <circle cx="34" cy="34" r="30" fill="none" stroke="#1DBFA3" strokeWidth="1.5" />
          <circle cx="34" cy="34" r="20" fill="none" stroke="#1DBFA3" strokeWidth="1" />
          <circle cx="34" cy="34" r="10" fill="none" stroke="#1DBFA3" strokeWidth="1" />
          <circle cx="34" cy="34" r="3" fill="#1DBFA3" />
        </svg>
      </div>

      {/* Floating plus */}
      <div style={{
        position: "absolute", right: "11%", top: "12%",
        animation: "floatC 8s ease-in-out 0.3s infinite", opacity: 0.15,
      }}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect x="15" y="3" width="6" height="30" fill="#D85A30" />
          <rect x="3" y="15" width="30" height="6" fill="#D85A30" />
        </svg>
      </div>

      {/* Floating plus — small */}
      <div style={{
        position: "absolute", left: "13%", top: "15%",
        animation: "floatB 10s ease-in-out 2.2s infinite", opacity: 0.13,
      }}>
        <svg width="26" height="26" viewBox="0 0 26 26">
          <rect x="10" y="2" width="6" height="22" fill="#F0B429" />
          <rect x="2" y="10" width="22" height="6" fill="#F0B429" />
        </svg>
      </div>

      {/* Floating triangle */}
      <div style={{
        position: "absolute", left: "7%", top: "62%",
        animation: "floatA 11s ease-in-out 1s infinite", opacity: 0.1,
      }}>
        <svg width="44" height="44" viewBox="0 0 44 44">
          <polygon points="22,4 40,38 4,38"
            fill="none" stroke="#EDE0C0" strokeWidth="2" />
        </svg>
      </div>

      {/* Marching dots row */}
      <div style={{
        position: "absolute", bottom: "148px", left: "50%",
        transform: "translateX(-50%)", display: "flex", gap: "10px",
      }}>
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} style={{
            display: "inline-block", width: "5px", height: "5px",
            borderRadius: "50%", background: "#EDE0C0",
            animation: `marchDot 2s ease-in-out ${i * 0.16}s infinite`,
            opacity: 0.15,
          }} />
        ))}
      </div>

      {/* Ghost ticker tape */}
      <div style={{
        position: "absolute", top: "44%", left: 0, right: 0,
        height: "26px", overflow: "hidden", opacity: 0.045,
        pointerEvents: "none",
      }}>
        <div style={{
          display: "inline-flex", gap: "60px", whiteSpace: "nowrap",
          animation: "tickerScroll 20s linear infinite",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "0.7rem", letterSpacing: "4px", color: "#F5EFD8",
          lineHeight: "26px",
        }}>
          {Array(4).fill("HACK · BUILD · SHIP · 24 HOURS · NATIONAL LEVEL · IEEE VVCE · TECHNOTSAV 2026").join("          ")}
        </div>
      </div>

      {/* Dashed vintage frame */}
      <svg style={{
        position: "absolute", inset: "14px",
        width: "calc(100% - 28px)", height: "calc(100% - 28px)",
        opacity: 0.055, overflow: "visible",
      }}>
        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
          fill="none" stroke="#EDE0C0" strokeWidth="1" strokeDasharray="5 9" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ANIMATED TITLE  — with phosphor glow
═══════════════════════════════════════════════════ */
function AnimatedTitle() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{ position: "relative", display: "inline-flex", justifyContent: "center" }}>
      <h1 style={{
        fontFamily: "'Etna', sans-serif",
        fontSize: "clamp(3.5rem, 12vw, 8rem)",
        lineHeight: 0.95, letterSpacing: "4px",
        display: "inline-flex", margin: 0, position: "relative",
        opacity: go ? 1 : 0,
        animation: go ? "titleIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" : "none",
        /* Slight chromatic aberration on the whole title */

      }}>

        {/* TECH — yellow with phosphor glow + flicker */}
        <span style={{
          color: "var(--yellow)",
          animation: go
            ? "phosphorGlow 2.8s ease-in-out 1.2s infinite, spanFlickerGlow 6s ease-in-out 2s infinite"
            : "none",
        }}>TECH</span>

        {/* NOTSAV — cream with phosphor glow */}
        <span style={{
          color: "var(--cream)",
          animation: go
            ? "phosphorGlowCream 3.2s ease-in-out 1.5s infinite"
            : "none",
        }}>NOTSAV</span>
      </h1>

      {/*
        Inline SVG filter for RGB channel split (chromatic aberration).
        Applied via filter:"url(#rgb-split)" on the h1.
        Only active in supporting browsers — degrades silently.
      */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="rgb-split" x="-5%" y="-5%" width="110%" height="110%"
            color-interpolation-filters="sRGB">
            {/* Red channel: shift left */}
            <feOffset in="SourceGraphic" dx="-1.5" dy="0" result="r-shift" />
            <feColorMatrix in="r-shift" type="matrix"
              values="1 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.5 0" result="r-only" />
            {/* Blue channel: shift right */}
            <feOffset in="SourceGraphic" dx="1.5" dy="0" result="b-shift" />
            <feColorMatrix in="b-shift" type="matrix"
              values="0 0 0 0 0   0 0 0 0 0   0 0 1 0 0   0 0 0 0.5 0" result="b-only" />
            {/* Merge: red + original + blue */}
            <feMerge>
              <feMergeNode in="r-only" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="b-only" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Coral scratch underline */}
      <span style={{
        position: "absolute", bottom: "-12px", left: 0, right: 0,
        height: "4px", background: "var(--coral)", borderRadius: "2px",
        display: "block",
        animation: go ? "scratchIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.1s both" : "none",
        transformOrigin: "left",
        transform: "scaleX(0)",
        /* Underline also glows */
        boxShadow: "0 0 8px rgba(216,90,48,0.7), 0 0 20px rgba(216,90,48,0.35)",
      }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="hero hero-bw-reveal"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{STYLES}</style>

      {/* Original retro decorative background */}
      <RetroBackground />

      {/* ← NEW: CRT overlay on top of everything */}
      <CRTOverlay />

      {/* Page content — sits above RetroBackground (z:1) but BELOW CRTOverlay (z:20) */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Floating code snippets — unchanged */}
        <div className="code-float cf1">
          function ID[] {"{"}<br />
          &nbsp;&nbsp;... /)<br />
          &nbsp;&nbsp;{"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;console.log({"{}"})<br />
          &nbsp;&nbsp;{"}"}<br />
          {"}"}
        </div>
        <div className="code-float cf2">
          &lt;&gt; /?<br />
          def init()<br />
          console.log()<br /><br />
          [ ]
        </div>
        <div className="code-float cf3">
          &gt; TECHNOTSAV<br />
          &gt; LOADING...<br />
          &gt; <span className="cursor">_</span>
        </div>

        <p className="hero-dept">
          DEPARTMENT OF CSE (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)<br />
        </p>

        <AnimatedTitle />

        <p className="hero-sub">
          24HR NATIONAL-LEVEL HACKATHON <span className="cursor">|</span>
        </p>

        <div className="hero-date-badge" style={{ animation: "badgePulse 2.8s ease-in-out 1.8s infinite" }}>
          15TH — 16TH APRIL 2026
        </div>

       

        <div className="hero-cta-row">
          <a href="#register" className="btn-primary">Register Now</a>
          <a
            href="https://instagram.com/ieee.cis.vvce"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ marginRight: "8px" }}
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>Follow us on Instagram for updates!</span>
          </a>
        </div>
      </div>

      <div className="hero-stripes">
        <div className="stripe s1"></div>
        <div className="stripe s2"></div>
        <div className="stripe s3"></div>
        <div className="stripe s4"></div>
        <div className="stripe s5"></div>
        <div className="stripe s6"></div>
        <div className="stripe s1"></div>
        <div className="stripe s2"></div>
      </div>
    </section>
  );
}

export default Hero;