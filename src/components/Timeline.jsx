function Timeline() {
  const events = [
    {
      time: "Day 1 · 9:00 AM",
      title: "Registration & Check-in",
      desc: "Teams arrive, verify registration, collect kits, and get access to the hacking space.",
    },
    {
      time: "Day 1 · 10:00 AM",
      title: "Inauguration & Kickoff",
      desc: "Problem statements released. The 24-hour clock starts ticking.",
    },
    {
      time: "Day 1 · 1:00 PM",
      title: "Mentorship Rounds",
      desc: "Domain experts visit teams, provide guidance, and answer technical questions.",
    },
    {
      time: "Day 2 · 8:00 AM",
      title: "Final Submissions",
      desc: "Code freeze. All submissions due. Teams prepare final presentations.",
    },
    {
      time: "Day 2 · 10:00 AM",
      title: "Judging & Demos",
      desc: "Teams present to the panel. Judges evaluate innovation, impact, and execution.",
    },
    {
      time: "Day 2 · 2:00 PM",
      title: "Valedictory & Prize Distribution",
      desc: "Winners announced. Certificates distributed. Celebrate your creation!",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      
      <div style={{ textAlign: "center" }} className="reveal">
        <p className="section-label">&gt; Event Schedule</p>
        <h2 className="section-title">April 15–16, 2025</h2>
      </div>

      <div className="timeline">
        {events.map((e, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div key={index} className="tl-item reveal">

              {/* LEFT SIDE (only for odd items) */}
              {isOdd && <div className="tl-spacer"></div>}

              <div className="tl-dot"></div>

              <div className="tl-content">
                <div className="tl-time">{e.time}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-desc">{e.desc}</div>
              </div>

              {/* RIGHT SIDE (only for even items) */}
              {!isOdd && <div className="tl-spacer"></div>}

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Timeline;