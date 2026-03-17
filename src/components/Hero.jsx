function Hero() {
  return (
    <section className="hero">

      {/* FLOATING CODE */}
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

      {/* MAIN CONTENT */}
      <p className="hero-dept">
        VVCE · Dept. of CSE (AI & ML) · IEEE CIS
      </p>

      <h1 className="hero-title">
        TECH<span>NOT</span>SAV
      </h1>

      <p className="hero-sub">
        24HR HACKATHON <span className="cursor">|</span>
      </p>

      <div className="hero-date-badge">
        15TH — 16TH APRIL 2025
      </div>

      <div className="hero-prize">
        <div className="prize-chip">
          <p>Prize Pool</p>
          <span>₹1,00,000+</span>
        </div>
      </div>

      <div className="hero-cta-row">
        <a href="#register" className="btn-primary">
          Register Now
        </a>

        <a href="#domains" className="btn-outline">
          Explore Domains
        </a>
      </div>

      {/* STRIPES */}
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