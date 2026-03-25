import { useState } from "react";

function Registration() {
  const isTemplateAvailable = true;

  return (
    <section className="reg-section" id="register">

      {/* HEADER */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 0 }}>
        <p className="section-label">&gt; Register Now</p>
        <h2 className="section-title">Join the Hackathon</h2>
      </div>

      <div className="reg-grid">

        {/* LEFT CARD */}
        <div className="reg-card reveal">
          <h3>Registration Details</h3>

          <ul className="reg-list">
            <li>Team size: 2 to 4 members</li>
            <li>Registration fee: ₹600 per team</li>
            <li>Students from any college are welcome</li>
            <li>Each team must choose one problem domain</li>
            <li>Bring your own laptops and required hardware</li>
            <li>Meals & refreshments provided throughout the event</li>
          </ul>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNL5k6rIkWgJW6vDy2zkgjG-76oth5cLgl30ijKgkrnp3-jA/viewform"
            className="reg-btn"
          >
            Register Online →
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="reg-card reveal">
          <h3>Prizes & Perks</h3>

          <div className="fee-big">₹60,000+</div>
          <div className="fee-sub">Total prize pool</div>

          <ul className="reg-list" style={{ marginTop: "24px" }}>
            <li>Cash prizes for top 3 teams per domain</li>
            <li>Certificates for all participants</li>
            <li>Networking with IEEE & industry professionals</li>
            <li>Swag kits and goodies</li>
          </ul>
        </div>

        {/* TEMPLATE CARD */}
        <div className={`reg-card reveal ${!isTemplateAvailable ? "disabled-card" : ""}`}>
          <h3>Submission Guidelines</h3>

          <ul className="reg-list">
            <li>Follow the official presentation template</li>
            <li>Include problem statement, solution & impact</li>
            <li>Demo must be functional or well-simulated</li>
            <li>Maximum presentation time: 8–10 minutes</li>
            <li>Code and documentation must be submitted</li>
            <li>Follow the judging criteria given for each problem domain</li>
          </ul>

          {!isTemplateAvailable && (
            <p className="template-msg" style={{ textAlign: "center" }}>
              Template to be shared soon!
            </p>
          )}

          <a
            href={isTemplateAvailable ? "/Technotsav%20Presentation%20Template.pptx" : "#"}
            download="Technotsav_Presentation_Template.pptx"
            className={`reg-btn ${!isTemplateAvailable ? "disabled-btn" : ""}`}
            onClick={(e) => {
              if (!isTemplateAvailable) e.preventDefault();
            }}
          >
            Download Template!
          </a>
        </div>

      </div>
    </section>
  );
}

export default Registration;