import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════
   KEYFRAMES
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

  /* ── Title fade-up entrance (whole word) ── */
  @keyframes titleIn {
    0%   { opacity:0; transform: translateY(22px); }
    100% { opacity:1; transform: translateY(0); }
  }

  /* ── Slow ghost flicker on the yellow span ── */
  @keyframes spanFlicker {
    0%,100% { opacity:1; }
    92%     { opacity:1; }
    93%     { opacity:0.55; }
    94%     { opacity:1; }
    97%     { opacity:0.7; }
    98%     { opacity:1; }
  }

  /* ── Scratch underline draw ── */
  @keyframes scratchIn {
    from { transform: scaleX(0); transform-origin: left; }
    to   { transform: scaleX(1); transform-origin: left; }
  }

  /* ── Badge pulse ── */
  @keyframes badgePulse {
    0%,100% { box-shadow: 6px 6px 0 #A03820; }
    50%     { box-shadow: 9px 9px 0 #A03820, 0 0 0 5px rgba(216,90,48,0.15); }
  }
`;

/* ═══════════════════════════════════════════════════
   RETRO BACKGROUND
═══════════════════════════════════════════════════ */
function RetroBackground() {
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:1 }}>

      {/* Film grain */}
      <svg style={{
        position:"absolute", inset:"-30%", width:"160%", height:"160%",
        opacity:0.035,
        animation:"grainShift 0.14s steps(1) infinite",
      }}>
        <filter id="fg">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#fg)" fill="white"/>
      </svg>

      {/* Big starburst — top right */}
      <div style={{
        position:"absolute", top:"-90px", right:"-90px",
        width:"360px", height:"360px",
        animation:"spinSlow 32s linear infinite",
        opacity:0.09,
      }}>
        <svg viewBox="0 0 200 200" width="360" height="360">
          {Array.from({length:24}, (_,i) => (
            <rect key={i} x="99" y="8" width="3" height="84" fill="#F0B429"
              transform={`rotate(${i*15} 100 100)`}/>
          ))}
          <circle cx="100" cy="100" r="14" fill="#F0B429"/>
          <circle cx="100" cy="100" r="8"  fill="#1A3A2A"/>
        </svg>
      </div>

      {/* Small starburst — bottom left */}
      <div style={{
        position:"absolute", bottom:"100px", left:"-40px",
        width:"180px", height:"180px",
        animation:"spinSlowRev 22s linear infinite",
        opacity:0.11,
      }}>
        <svg viewBox="0 0 200 200" width="180" height="180">
          {Array.from({length:16}, (_,i) => (
            <rect key={i} x="99" y="18" width="3" height="64" fill="#D85A30"
              transform={`rotate(${i*22.5} 100 100)`}/>
          ))}
          <circle cx="100" cy="100" r="10" fill="#D85A30"/>
        </svg>
      </div>

      {/* Halftone dots — bottom right */}
      <svg style={{
        position:"absolute", right:"-10px", bottom:"120px",
        width:"300px", height:"300px",
        animation:"halfBreathe 5s ease-in-out infinite",
      }} viewBox="0 0 200 200">
        {Array.from({length:9}, (_,row) =>
          Array.from({length:9}, (_,col) => (
            <circle key={`${row}-${col}`}
              cx={11+col*22} cy={11+row*22}
              r={1.6 + (row+col)*0.16}
              fill="#F0B429" opacity="0.7"/>
          ))
        )}
      </svg>

      {/* Halftone dots — top left */}
      <svg style={{
        position:"absolute", left:"-10px", top:"60px",
        width:"200px", height:"200px",
        animation:"halfBreathe 6s ease-in-out 1.5s infinite",
      }} viewBox="0 0 160 160">
        {Array.from({length:7}, (_,row) =>
          Array.from({length:7}, (_,col) => (
            <circle key={`${row}-${col}`}
              cx={11+col*22} cy={11+row*22}
              r={2} fill="#1DBFA3" opacity="0.6"/>
          ))
        )}
      </svg>

      {/* Diagonal stripes — top left corner */}
      <svg style={{
        position:"absolute", top:0, left:0,
        width:"220px", height:"220px", opacity:0.055,
      }} viewBox="0 0 200 200">
        {Array.from({length:12}, (_,i) => (
          <line key={i}
            x1={-30+i*22} y1="0" x2={i*22+60} y2="200"
            stroke="#1DBFA3" strokeWidth="7"/>
        ))}
      </svg>

      {/* Diagonal stripes — bottom right */}
      <svg style={{
        position:"absolute", bottom:"115px", right:0,
        width:"180px", height:"180px", opacity:0.06,
      }} viewBox="0 0 180 180">
        {Array.from({length:10}, (_,i) => (
          <line key={i}
            x1={-20+i*22} y1="0" x2={i*22+50} y2="180"
            stroke="#EDE0C0" strokeWidth="6"/>
        ))}
      </svg>

      {/* Floating diamond */}
      <div style={{
        position:"absolute", left:"3.5%", top:"36%",
        animation:"floatA 7s ease-in-out infinite", opacity:0.13,
      }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <rect x="9" y="9" width="32" height="32" fill="none"
            stroke="#F0B429" strokeWidth="2.5"
            transform="rotate(45 25 25)"/>
          <rect x="18" y="18" width="14" height="14" fill="none"
            stroke="#F0B429" strokeWidth="1.2"
            transform="rotate(45 25 25)"/>
        </svg>
      </div>

      {/* Floating concentric circles */}
      <div style={{
        position:"absolute", right:"4.5%", top:"28%",
        animation:"floatB 9s ease-in-out 0.8s infinite", opacity:0.11,
      }}>
        <svg width="68" height="68" viewBox="0 0 68 68">
          <circle cx="34" cy="34" r="30" fill="none" stroke="#1DBFA3" strokeWidth="1.5"/>
          <circle cx="34" cy="34" r="20" fill="none" stroke="#1DBFA3" strokeWidth="1"/>
          <circle cx="34" cy="34" r="10" fill="none" stroke="#1DBFA3" strokeWidth="1"/>
          <circle cx="34" cy="34" r="3"  fill="#1DBFA3"/>
        </svg>
      </div>

      {/* Floating plus */}
      <div style={{
        position:"absolute", right:"11%", top:"12%",
        animation:"floatC 8s ease-in-out 0.3s infinite", opacity:0.15,
      }}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect x="15" y="3"  width="6" height="30" fill="#D85A30"/>
          <rect x="3"  y="15" width="30" height="6"  fill="#D85A30"/>
        </svg>
      </div>

      {/* Floating plus — small */}
      <div style={{
        position:"absolute", left:"13%", top:"15%",
        animation:"floatB 10s ease-in-out 2.2s infinite", opacity:0.13,
      }}>
        <svg width="26" height="26" viewBox="0 0 26 26">
          <rect x="10" y="2"  width="6" height="22" fill="#F0B429"/>
          <rect x="2"  y="10" width="22" height="6"  fill="#F0B429"/>
        </svg>
      </div>

      {/* Floating triangle */}
      <div style={{
        position:"absolute", left:"7%", top:"62%",
        animation:"floatA 11s ease-in-out 1s infinite", opacity:0.1,
      }}>
        <svg width="44" height="44" viewBox="0 0 44 44">
          <polygon points="22,4 40,38 4,38"
            fill="none" stroke="#EDE0C0" strokeWidth="2"/>
        </svg>
      </div>

      {/* Marching dots row */}
      <div style={{
        position:"absolute", bottom:"148px", left:"50%",
        transform:"translateX(-50%)", display:"flex", gap:"10px",
      }}>
        {Array.from({length:11}, (_,i) => (
          <span key={i} style={{
            display:"inline-block", width:"5px", height:"5px",
            borderRadius:"50%", background:"#EDE0C0",
            animation:`marchDot 2s ease-in-out ${i*0.16}s infinite`,
            opacity: 0.15,
          }}/>
        ))}
      </div>

      {/* Ghost ticker tape */}
      <div style={{
        position:"absolute", top:"44%", left:0, right:0,
        height:"26px", overflow:"hidden", opacity:0.045,
        pointerEvents:"none",
      }}>
        <div style={{
          display:"inline-flex", gap:"60px", whiteSpace:"nowrap",
          animation:"tickerScroll 20s linear infinite",
          fontFamily:"'Share Tech Mono', monospace",
          fontSize:"0.7rem", letterSpacing:"4px", color:"#F5EFD8",
          lineHeight:"26px",
        }}>
          {Array(4).fill("HACK · BUILD · SHIP · 24 HOURS · NATIONAL LEVEL · IEEE VVCE · TECHNOTSAV 2025").join("          ")}
        </div>
      </div>

      {/* Dashed vintage frame */}
      <svg style={{
        position:"absolute", inset:"14px",
        width:"calc(100% - 28px)", height:"calc(100% - 28px)",
        opacity:0.055, overflow:"visible",
      }}>
        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
          fill="none" stroke="#EDE0C0" strokeWidth="1" strokeDasharray="5 9"/>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ANIMATED TITLE
═══════════════════════════════════════════════════ */
function AnimatedTitle() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{ position:"relative", display:"inline-flex", justifyContent:"center" }}>
      <h1 style={{
        fontFamily:"'Etna', sans-serif",
        fontSize:"clamp(3.5rem, 12vw, 8rem)",
        lineHeight:0.95, letterSpacing:"2px",
        display:"inline-flex", margin:0, position:"relative",
        opacity: go ? 1 : 0,
        animation: go ? "titleIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" : "none",
      }}>
        {/* TECH */}
        

        {/* NOT — yellow, slow analog flicker loop */}
        <span style={{
          color:"var(--yellow)",
          textShadow:"3px 3px 0 rgba(140,48,20,0.5), 5px 5px 0 rgba(0,0,0,0.15)",
          animation: go ? "spanFlicker 6s ease-in-out 2s infinite" : "none",
        }}>TECH</span>

        {/* SAV */}
        <span style={{
          color:"var(--cream)",
          textShadow:"3px 3px 0 rgba(10,30,18,0.7), 5px 5px 0 rgba(0,0,0,0.15)",
        }}>NOTSAV</span>
      </h1>

      {/* Coral scratch underline draws in after title lands */}
      <span style={{
        position:"absolute", bottom:"-6px", left:0, right:0,
        height:"4px", background:"var(--coral)", borderRadius:"2px",
        display:"block",
        animation: go ? "scratchIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.1s both" : "none",
        transformOrigin:"left",
        transform:"scaleX(0)",
      }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero" style={{ position:"relative", overflow:"hidden" }}>
      <style>{STYLES}</style>
      <RetroBackground />

      <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center" }}>
        {/* existing floating code snippets */}
        <div className="code-float cf1">
          function ID[] {"{"}<br/>
          &nbsp;&nbsp;... /)<br/>
          &nbsp;&nbsp;{"{"}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log({"{}"})<br/>
          &nbsp;&nbsp;{"}"}<br/>
          {"}"}
        </div>
        <div className="code-float cf2">
          &lt;&gt; /?<br/>
          def init()<br/>
          console.log()<br/><br/>
          [ ]
        </div>
        <div className="code-float cf3">
          &gt; TECHNOTSAV<br/>
          &gt; LOADING...<br/>
          &gt; <span className="cursor">_</span>
        </div>

        <p className="hero-dept">
          DEPARTMENT OF CSE (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)<br/>
        </p>

        <AnimatedTitle />

        <p className="hero-sub">
          24HR NATIONAL-LEVEL HACKATHON <span className="cursor">|</span>
        </p>

        <div className="hero-date-badge" style={{ animation:"badgePulse 2.8s ease-in-out 1.8s infinite" }}>
          15TH — 16TH APRIL 2025
        </div>

        <div className="hero-cta-row">
          <a href="#register" className="btn-primary">Register Now</a>
          <a href="#domains" className="btn-outline">Explore Domains</a>
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