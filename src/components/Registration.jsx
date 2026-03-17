function Registration() {
  return (
    <section className="reg-section" id="register">
      
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

          <a href="https://docs.google.com/forms/d/e/1FAIpQLScNL5k6rIkWgJW6vDy2zkgjG-76oth5cLgl30ijKgkrnp3-jA/viewform" className="reg-btn">
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

      </div>

    </section>
  );
}

export default Registration;