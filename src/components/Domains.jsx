function Domains() {
  const domains = [
    {
      id: "d1",
      num: "01 ///",
      icon: "🔐",
      name: "Cybersecurity",
      desc: "Design systems to defend, detect, and respond. From threat intelligence to secure architectures, protect the digital world.",
    },
    {
      id: "d2",
      num: "02 ///",
      icon: "💳",
      name: "Fintech",
      desc: "Reimagine financial systems. Build tools for payments, lending, investments, and financial inclusion that shape tomorrow's economy.",
    },
    {
      id: "d3",
      num: "03 ///",
      icon: "📡",
      name: "Internet of Things",
      desc: "Connect the physical and digital. Create smart devices, sensor networks, and automation platforms that redefine how we interact with our world.",
    },
    {
      id: "d4",
      num: "04 ///",
      icon: "🌱",
      name: "Sustainable Development",
      desc: "Engineer for the planet. Develop solutions for climate action, clean energy, smart agriculture, and resource efficiency.",
    },
  ];

  return (
    <section className="domains-section" id="domains">
      <div className="reveal">
        <p className="section-label">&gt; Problem Domains</p>
        <h2 className="section-title">Choose Your Arena</h2>
      </div>

      <div className="domains-grid">
        {domains.map((d, index) => (
          <div key={index} className={`domain-card ${d.id} reveal`}>
            <div className="domain-num">{d.num}</div>
            <span className="domain-icon">{d.icon}</span>
            <div className="domain-name">{d.name}</div>
            <p className="domain-desc">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Domains;