function Ticker() {
  const items = [
    "CYBERSECURITY",
    "FINTECH",
    "INTERNET OF THINGS",
    "SUSTAINABLE DEVELOPMENT",
    "24HR HACKATHON",
    "₹1,00,000+ PRIZE POOL",
    "APRIL 15–16",
    "VVCE MYSURU",
  ];

  // duplicate for seamless loop (same as your HTML)
  const fullList = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner" id="ticker">
        {fullList.map((item, index) => (
          <span key={index}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;