function Ticker() {
  const items = [
    "Registrations Closed!",
    "Thank you for the overwhelming response!",
    "Results Announcement: 9th April 8:00 PM on our Instagram handle!",
    "Hackathon Starts: APRIL 15–16 2026",
    "Innovation Begins with you!",
    "Get ready to code, create, and conquer!",
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