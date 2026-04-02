function Ticker() {
  const items = [
    "Registrations Opened!",
    "Last Date to submit ideas: 7th April",
    "Results Announcement: 8th April",
    "Hackathon Starts: APRIL 15–16 2026",
    "Innovation Begins with you!",
    "New Problem Statements Released for AIOT & Robotics Domain!",
    "Problem Statements are now available for downloading!"
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