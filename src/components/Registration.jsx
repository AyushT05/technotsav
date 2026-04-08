import { useState } from "react";

function Registration() {
  const isTemplateAvailable = false;
  const isRegistrationOpen = false;

  return (
    <section className="reg-section" id="register">

      {/* HEADER */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 0 }}>
        <p className="section-label">&gt; Register Now</p>
        <h2 className="section-title">Join the Hackathon</h2>
      </div>

      <div className="reg-grid">

        {/* LEFT CARD */}
        <div className={`reg-card reveal ${!isRegistrationOpen ? "disabled-card" : ""}`}>
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
            href={isRegistrationOpen ? "https://docs.google.com/forms/d/e/1FAIpQLScNL5k6rIkWgJW6vDy2zkgjG-76oth5cLgl30ijKgkrnp3-jA/viewform" : "#"}
            className={`reg-btn ${!isRegistrationOpen ? "disabled-btn" : ""}`}
            onClick={(e) => {
              if (!isRegistrationOpen) e.preventDefault();
            }}
          >
            {isRegistrationOpen ? "Register Online →" : "REGISTRATIONS CLOSED :("}
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="reg-card reveal">
          <h3>Prizes & Perks</h3>

          <div className="fee-big">₹60,000+</div>
          <div className="fee-sub">Total prize pool</div>

          <ul className="reg-list" style={{ marginTop: "24px" }}>
            <li>Cash prizes for top 2 teams per domain</li>
            <li>Certificates for all participants</li>
            <li>Networking with IEEE & industry professionals</li>
            <li>Swag kits and goodies</li>
          </ul>
        </div>

        {/* TEMPLATE CARD */}
        <div className={`reg-card reveal ${!isTemplateAvailable ? "disabled-card" : ""}`}>
          <h3>Submission Guidelines</h3>

          <ul className="reg-list">
            <li>Use the official presentation template provided</li>
            <li>Follow all instructions mentioned in the template</li>
            <li>Keep slides clear, visually engaging, and avoid excessive text</li>
            <li>Use the same presentation for the Mentorship Round (15 April, 2:00 PM)</li>
            <li>Ensure all team members actively participate during the presentation</li>
            <li>The presentation will be part of final evaluation — prepare accordingly</li>
          </ul>



          <a
            href={isTemplateAvailable ? "/Technotsav%20Presentation%20Template.pptx" : "#"}
            download="Technotsav_Presentation_Template.pptx"
            className={`reg-btn ${!isTemplateAvailable ? "disabled-btn" : ""}`}
            onClick={(e) => {
              if (!isTemplateAvailable) e.preventDefault();
            }}
          >
            {isTemplateAvailable ? "Download Template!" : "Template removed :("}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Registration;