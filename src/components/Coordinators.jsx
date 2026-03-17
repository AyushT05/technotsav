function Coordinators() {
  const coordinators = [
    {
      avatar: "DS",
      role: "Student Coordinator",
      name: "Dishan Seelam",
      phone: "+91 99865 92905",
    },
    {
      avatar: "K",
      role: "Student Coordinator",
      name: "Keerthan",
      phone: "+91 94817 12179",
    },
    {
      avatar: "HC",
      role: "Faculty Coordinator",
      name: "Prof. Harshith C",
      phone: "VVCE CSE Dept.",
    },
  ];

  return (
    <section className="coord-section" id="contact">

      <div style={{ textAlign: "center" }} className="reveal">
        <p className="section-label">&gt; Get in Touch</p>
        <h2 className="section-title">Coordinators</h2>
      </div>

      <div className="coord-grid">
        {coordinators.map((c, index) => (
          <div key={index} className="coord-card reveal">
            
            <div className="coord-avatar">{c.avatar}</div>

            <div className="coord-role">{c.role}</div>

            <div className="coord-name">{c.name}</div>

            <div className="coord-phone">{c.phone}</div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Coordinators;