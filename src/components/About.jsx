import VisitorCount from "./VisitorCount";

function About() {
  return (
    <section className="section about-section" id="about">

      {/* SAME background stripes as timeline */}
      <div className="tl-bg-stripes"></div>

      <div className="about-grid">

        <div className="about-text reveal">
          <p className="section-label">&gt; About the Event</p>

          <h2 className="section-title">
            Build. Break.<br />Innovate.
          </h2>

          <p>
            TECHNOTSAV is the flagship 24-hour hackathon organized by the
            Department of CSE (Artificial Intelligence & Machine Learning) at
            Vidyavardhaka College of Engineering, Mysuru.
          </p>

          <p>
            Compete with the brightest minds, tackle real-world problem
            statements, and build solutions that matter — all in one
            adrenaline-fueled day. Supported by IEEE and the Computational
            Intelligence Society.
          </p>

          <a
            href="https://vvce.ac.in/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Learn more about VVCE →
          </a>
        </div>

        <div className="about-stats reveal">

          <div className="stat-card">
            <span className="stat-num">24</span>
            <span className="stat-label">Hours of Coding</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">4</span>
            <span className="stat-label">Problem Domains</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">60,000+</span>
            <span className="stat-label">Prize Pool (₹)</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">2–4</span>
            <span className="stat-label">Members / Team</span>
          </div>

          <div className="visitor-center">
            <VisitorCount />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;