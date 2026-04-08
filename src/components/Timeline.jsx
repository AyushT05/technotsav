import { useEffect, useRef } from "react";

const TIMELINE_STYLES = `
  .timeline-section {
    padding: 80px 5%;
    background: var(--beige);
    position: relative;
    overflow: hidden;
  }

  .tl-bg-stripes {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 48px,
      rgba(26,58,42,0.03) 48px,
      rgba(26,58,42,0.03) 49px
    );
    pointer-events: none;
  }

  .tl-spine-track {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
      to bottom,
      rgba(45,94,62,0.15) 0px,
      rgba(45,94,62,0.15) 8px,
      transparent 8px,
      transparent 14px
    );
  }

  @keyframes spineGrow {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }

  .tl-spine-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    transform-origin: top center;
    transform: scaleY(0);
    background: repeating-linear-gradient(
      to bottom,
      var(--mid-green) 0px,
      var(--mid-green) 8px,
      transparent 8px,
      transparent 14px
    );
  }

  .tl-spine-fill.tl-spine-animate {
    animation: spineGrow 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .tl-row {
    display: grid;
    grid-template-columns: 1fr 48px 1fr;
    align-items: start;
    margin-bottom: 52px;
    position: relative;
  }

  .tl-card {
    background: #fff;
    border: 2px solid var(--dark-green);
    border-radius: 6px;
    padding: 20px 22px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    opacity: 0;
    will-change: transform, opacity;
  }
  .tl-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 5px 5px 0 var(--dark-green);
  }

  .tl-card.tl-right {
    transform: translateX(48px);
  }
  .tl-card.tl-left {
    transform: translateX(-48px);
  }

  .tl-card.tl-right.tl-visible,
  .tl-card.tl-left.tl-visible {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 0.55s cubic-bezier(0.22,1,0.36,1),
      transform 0.55s cubic-bezier(0.22,1,0.36,1),
      box-shadow 0.2s ease;
  }

  /* ── Past event grayscale ── */
  .tl-card.tl-past {
    filter: grayscale(1) opacity(0.55);
    border-color: #aaa !important;
    border-bottom-color: #aaa !important;
  }
  .tl-card.tl-past:hover {
    filter: grayscale(0.6) opacity(0.75);
    box-shadow: 5px 5px 0 #aaa;
  }
  .tl-row.tl-row-past .tl-dot-outer {
    background: #ccc !important;
    border-color: #aaa !important;
  }
  .tl-row.tl-row-past .tl-time-col {
    filter: grayscale(1) opacity(0.55);
  }
  .tl-row.tl-row-past .tl-connector {
    filter: grayscale(1) opacity(0.55);
  }

  /* Past badge */
  .tl-past-badge {
    display: inline-block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.58rem;
    letter-spacing: 2px;
    padding: 2px 7px;
    background: #ccc;
    color: #666;
    border-radius: 3px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .tl-card.tl-right::before {
    content: '';
    position: absolute;
    top: 16px; right: -11px;
    border: 10px solid transparent;
    border-left-color: var(--dark-green);
  }
  .tl-card.tl-right::after {
    content: '';
    position: absolute;
    top: 18px; right: -8px;
    border: 8px solid transparent;
    border-left-color: #fff;
    z-index: 2;
  }
  .tl-card.tl-left::before {
    content: '';
    position: absolute;
    top: 16px; left: -11px;
    border: 10px solid transparent;
    border-right-color: var(--dark-green);
  }
  .tl-card.tl-left::after {
    content: '';
    position: absolute;
    top: 18px; left: -8px;
    border: 8px solid transparent;
    border-right-color: #fff;
    z-index: 2;
  }

  .tl-card.tl-past::before {
    border-left-color: #aaa !important;
    border-right-color: #aaa !important;
  }

  .tl-node {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 15px;
  }
  .tl-dot-outer {
    width: 18px; height: 18px;
    border-radius: 50%;
    border: 3px solid var(--dark-green);
    background: var(--yellow);
    z-index: 2;
    transition: transform 0.2s, background 0.2s;
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0.4);
  }
  .tl-dot-outer.tl-dot-visible {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
  }
  .tl-row:hover .tl-dot-outer.tl-dot-visible {
    transform: scale(1.25);
    background: var(--coral);
  }

  .tl-connector {
    position: absolute;
    top: 26px;
    height: 2px;
    width: 32px;
    background: repeating-linear-gradient(
      to right,
      var(--mid-green) 0px,
      var(--mid-green) 4px,
      transparent 4px,
      transparent 8px
    );
    z-index: 1;
    transform-origin: left center;
    transform: scaleX(0);
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.15s,
                opacity 0.3s ease 0.15s;
  }
  .tl-connector.right { left: -32px; transform-origin: right center; }
  .tl-connector.left  { right: -32px; transform-origin: left center; }

  .tl-connector.tl-conn-visible {
    transform: scaleX(1);
    opacity: 1;
  }

  .tl-time-col {
    display: flex;
    align-items: flex-start;
    padding-top: 10px;
    opacity: 0;
    transition: opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.3s;
  }
  .tl-time-col.push-right {
    justify-content: flex-end;
    padding-right: 36px;
    transform: translateX(20px);
  }
  .tl-time-col.push-left {
    justify-content: flex-start;
    padding-left: 36px;
    transform: translateX(-20px);
  }
  .tl-time-col.tl-time-visible {
    opacity: 1;
    transform: translateX(0);
  }

  .tl-time-tag {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;
  }
  .tl-time-col.push-right .tl-time-tag { align-items: flex-end; }
  .tl-time-col.push-left  .tl-time-tag { align-items: flex-start; }

  .tl-day-pill {
    font-family: 'Lovelo', sans-serif;
    font-size: 0.58rem;
    letter-spacing: 3px;
    padding: 3px 9px;
    background: var(--dark-green);
    color: var(--cream);
    border-radius: 3px;
    display: inline-block;
    text-transform: uppercase;
  }

  .tl-clock {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.15rem;
    letter-spacing: 2px;
    color: var(--dark-green);
    line-height: 1;
  }

  .tl-dots-row {
    display: flex;
    gap: 4px;
  }
  .tl-time-col.push-right .tl-dots-row { justify-content: flex-end; }
  .tl-dots-row i {
    display: inline-block;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--dark-green);
    font-style: normal;
  }
  .tl-dots-row i:nth-child(1) { opacity: 0.7; }
  .tl-dots-row i:nth-child(2) { opacity: 0.35; }
  .tl-dots-row i:nth-child(3) { opacity: 0.15; }
  .tl-time-col.push-right .tl-dots-row i:nth-child(1) { opacity: 0.15; }
  .tl-time-col.push-right .tl-dots-row i:nth-child(2) { opacity: 0.35; }
  .tl-time-col.push-right .tl-dots-row i:nth-child(3) { opacity: 0.7; }

  .tl-card.tl-left .tl-title,
  .tl-card.tl-left .tl-desc { text-align: right; }

  .tl-mobile-time { display: none; }

  .tl-section-divider {
    width: 100%;
    max-width: 860px;
    margin: 0 auto 72px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .tl-section-divider::before,
  .tl-section-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      rgba(45,94,62,0.25) 0px,
      rgba(45,94,62,0.25) 6px,
      transparent 6px,
      transparent 12px
    );
  }
  .tl-divider-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: rgba(45,94,62,0.4);
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .tl-spine-track { left: 20px; }
    .tl-row { grid-template-columns: 48px 1fr; }
    .tl-time-col { display: none; }
    .tl-card.tl-left .tl-title,
    .tl-card.tl-left .tl-desc { text-align: left; }
    .tl-card.tl-left::before {
      left: -11px; right: auto;
      border: 10px solid transparent;
      border-right-color: var(--dark-green);
    }
    .tl-card.tl-left::after {
      left: -8px; right: auto;
      border: 8px solid transparent;
      border-right-color: #fff;
    }
    .tl-card.tl-left { transform: translateX(48px); }
    .tl-connector { display: none; }
    .tl-mobile-time {
      display: block;
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }
  }
`;

const REG_ACCENTS = [
  "var(--teal)",
  "var(--coral)",
  "var(--yellow)",
];

const EVENT_ACCENTS = [
  "var(--yellow)",
  "var(--teal)",
  "var(--coral)",
  "var(--pink)",
  "var(--yellow)",
  "var(--teal)",
  "var(--coral)",
  "var(--pink)",
  "var(--yellow)",
];

/**
 * Parses an event time string into a Date object for comparison.
 *
 * Registration events use:   "25 Mar 2026 · 7:00 PM"
 * Schedule events use:       "Day 1 · 8:30 AM"  (resolved against eventStartDate)
 *
 * @param {string} raw         - The event.time string
 * @param {Date|null} eventStartDate - The real-world date of Day 1 (required for Day N events)
 * @returns {Date|null}
 */
function parseEventDate(raw, eventStartDate = null) {
  // ── Registration-style: "25 Mar 2026 · 7:00 PM" ──
  const absMatch = raw.match(
    /(\d{1,2}\s+\w+\s+\d{4})\s*·\s*(\d{1,2}:\d{2}\s*[AP]M)/i
  );
  if (absMatch) {
    return new Date(`${absMatch[1]} ${absMatch[2]}`);
  }

  // ── Schedule-style: "Day N · H:MM AM/PM" ──
  const relMatch = raw.match(/Day\s*(\d+)\s*·\s*(\d{1,2}:\d{2}\s*[AP]M)/i);
  if (relMatch && eventStartDate) {
    const dayOffset = parseInt(relMatch[1], 10) - 1;
    const base = new Date(eventStartDate);
    base.setDate(base.getDate() + dayOffset);
    const [time, meridiem] = relMatch[2].trim().split(/\s+/);
    const [h, m] = time.split(":").map(Number);
    let hours = h % 12;
    if (meridiem.toUpperCase() === "PM") hours += 12;
    base.setHours(hours, m, 0, 0);
    return base;
  }

  return null;
}

/**
 * Returns true if the event's datetime is strictly in the past relative to `now`.
 */
function isEventPast(raw, eventStartDate, now = new Date()) {
  const d = parseEventDate(raw, eventStartDate);
  if (!d) return false;
  return d < now;
}

function parseTime(raw) {
  const parts = raw.split("·").map(s => s.trim());
  return parts[1] || parts[0];
}

function TimelineCard({ event, index, side, accents, past }) {
  const isRight = side === "right";
  const accent = accents[index % accents.length];
  const accentColor = accent === "var(--yellow)" ? "var(--coral)" : accent;
  return (
    <div
      className={`tl-card ${isRight ? "tl-right" : "tl-left"}${past ? " tl-past" : ""}`}
      style={{ borderBottom: `4px solid ${past ? "#aaa" : accent}` }}
    >
      {past && <span className="tl-past-badge">Completed</span>}
      <div className="tl-mobile-time" style={{ color: past ? "#aaa" : accentColor }}>
        {event.time}
      </div>
      <div className="tl-title" style={{
        fontFamily: "'Lovelo', sans-serif",
        fontSize: "1.05rem",
        color: past ? "#888" : "var(--dark-green)",
        letterSpacing: "0.5px",
        marginBottom: "10px",
      }}>
        {event.title}
      </div>
      <div className="tl-desc" style={{
        fontSize: "0.87rem",
        color: past ? "#aaa" : "#4a5a3a",
        lineHeight: 1.65,
      }}>
        {event.desc}
      </div>
    </div>
  );
}

function TimeTag({ event, index, align, accents, past }) {
  const accent = accents[index % accents.length];
  const clock = parseTime(event.time);
  const day = event.time.split("·")[0].trim();

  return (
    <div className={`tl-time-col ${align === "right" ? "push-right" : "push-left"}`}>
      <div className="tl-time-tag">
        <span className="tl-day-pill" style={{
          background: past
            ? "#aaa"
            : accent === "var(--yellow)" ? "var(--dark-green)" : accent,
        }}>
          {day}
        </span>
        <span className="tl-clock" style={{ color: past ? "#aaa" : undefined }}>
          {clock}
        </span>
        <div className="tl-dots-row"><i /><i /><i /></div>
      </div>
    </div>
  );
}

/* ── Reusable timeline body ── */
function TimelineBody({ events, accents, spineRef, eventStartDate }) {
  const now = new Date();

  return (
    <div style={{ position: "relative", maxWidth: "860px", margin: "48px auto 0", zIndex: 2 }}>
      <div className="tl-spine-track">
        <div className="tl-spine-fill" ref={spineRef} />
      </div>

      {events.map((e, i) => {
        const cardRight = i % 2 === 0;
        const past = isEventPast(e.time, eventStartDate, now);
        return (
          <div key={i} className={`tl-row${past ? " tl-row-past" : ""}`}>
            {/* Left column */}
            {cardRight
              ? <TimeTag event={e} index={i} align="right" accents={accents} past={past} />
              : (
                <div style={{ paddingRight: "32px", position: "relative" }}>
                  <div className="tl-connector left" />
                  <TimelineCard event={e} index={i} side="left" accents={accents} past={past} />
                </div>
              )
            }

            {/* Center dot */}
            <div className="tl-node">
              <div className="tl-dot-outer" />
            </div>

            {/* Right column */}
            {cardRight
              ? (
                <div style={{ paddingLeft: "32px", position: "relative" }}>
                  <div className="tl-connector right" />
                  <TimelineCard event={e} index={i} side="right" accents={accents} past={past} />
                </div>
              )
              : <TimeTag event={e} index={i} align="left" accents={accents} past={past} />
            }
          </div>
        );
      })}
    </div>
  );
}

/* ── Hook: wires up all the IntersectionObservers for a section ── */
function useTimelineReveal(sectionRef, spineRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const spineFill = spineRef.current;
    if (!section || !spineFill) return;

    const spineObs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        spineFill.classList.add("tl-spine-animate");
        spineObs.disconnect();
      }
    }, { threshold: 0.1 });
    spineObs.observe(section);

    const rows = section.querySelectorAll(".tl-row");
    const rowObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const row = entry.target;

        const card = row.querySelector(".tl-card");
        if (card) card.classList.add("tl-visible");

        const dot = row.querySelector(".tl-dot-outer");
        if (dot) setTimeout(() => dot.classList.add("tl-dot-visible"), 80);

        const conn = row.querySelector(".tl-connector");
        if (conn) conn.classList.add("tl-conn-visible");

        const tag = row.querySelector(".tl-time-col");
        if (tag) tag.classList.add("tl-time-visible");

        rowObs.unobserve(row);
      });
    }, { threshold: 0.25 });

    rows.forEach(r => rowObs.observe(r));

    const header = section.querySelector(".tl-header");
    if (header) {
      const hObs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { header.classList.add("revealed"); hObs.disconnect(); }
      }, { threshold: 0.2 });
      hObs.observe(header);
    }

    return () => { rowObs.disconnect(); };
  }, []);
}

/* ── Registration Timeline ── */
function RegistrationTimeline() {
  const sectionRef = useRef(null);
  const spineRef   = useRef(null);
  useTimelineReveal(sectionRef, spineRef);

  const events = [
    {
      time: "25 Mar 2026 · 7:00 PM",
      title: "Registrations Open",
      desc: "The registration portal goes live. Visit the official website to sign up your team and secure your spot.",
    },
    {
      time: "8 Apr 2026 · 11:59 PM",
      title: "Registrations Close",
      desc: "Last chance to register. All team details must be submitted before midnight. No late entries will be accepted.",
    },
    {
      time: "9 Apr 2026 · 8:00 PM",
      title: "Results Announcement",
      desc: "Shortlisted teams will be announced on our Instagram page. Selected teams will be notified via email.",
    },
  ];

  return (
    <section className="timeline-section" id="registration-timeline" ref={sectionRef}>
      <div className="tl-bg-stripes" />
      <div className="tl-header reveal" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <p className="section-label">&gt; Before You Arrive</p>
        <h2 className="section-title">Registration Timeline</h2>
      </div>
      {/* eventStartDate is null here — registration events use absolute dates */}
      <TimelineBody events={events} accents={REG_ACCENTS} spineRef={spineRef} eventStartDate={null} />
    </section>
  );
}

/* ── Event Schedule Timeline ── */
function EventTimeline() {
  const sectionRef = useRef(null);
  const spineRef   = useRef(null);
  useTimelineReveal(sectionRef, spineRef);

  // Day 1 of the event — change this to match the real start date.
  // Time is set to midnight so "Day 1 · 8:30 AM" resolves to Apr 15 08:30 local time.
  const eventStartDate = new Date("2026-04-15T00:00:00");

  const events = [
    {
      time: "Day 1 · 8:30 AM",
      title: "Registration & Check-in",
      desc: "Teams arrive, verify registration, collect kits, and get access to their coding space.",
    },
    {
      time: "Day 1 · 9:30 AM",
      title: "Inauguration",
      desc: "Welcome address, event overview, rules briefing, and introduction of mentors & judges.",
    },
    {
      time: "Day 1 · 10:00 AM",
      title: "Hackathon Kickoff",
      desc: "24hrs countdown begins. Teams brainstorm, plan, and start building their solutions.",
    },
    {
      time: "Day 1 · 2:00 PM",
      title: "Mentorship Rounds",
      desc: "Domain experts visit teams, provide guidance, and answer technical questions.",
    },
    {
      time: "Day 1 · 6:00 PM",
      title: "Checkpoint 1: Progress Update",
      desc: "Teams submit a brief update on their progress. Judges provide feedback and suggestions.",
    },
    {
      time: "Day 1 · 10:00 PM",
      title: "Checkpoint 2: Implementation Review",
      desc: "Teams incorporate feedback, refine their solutions, and prepare for final submission.",
    },
    {
      time: "Day 2 · 7:00 AM",
      title: "Checkpoint 3: Final Submission",
      desc: "All teams submit their final code, documentation, and presentation materials for judging.",
    },
    {
      time: "Day 2 · 10:00 AM",
      title: "Hackathon Ends",
      desc: "Coding stops. Judges begin evaluating projects based on innovation, impact, technical complexity, and presentation.",
    },
    {
      time: "Day 2 · 10:30 PM",
      title: "Valedictory & Awards Ceremony",
      desc: "Winners are announced, and certificates are distributed to all participants.",
    },
  ];

  return (
    <section className="timeline-section" id="timeline" ref={sectionRef}>
      <div className="tl-bg-stripes" />
      <div className="tl-header reveal" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <p className="section-label">&gt; Event Schedule</p>
        <h2 className="section-title">April 15–16, 2026</h2>
      </div>
      <TimelineBody events={events} accents={EVENT_ACCENTS} spineRef={spineRef} eventStartDate={eventStartDate} />
    </section>
  );
}

/* ── Default export: both timelines stacked ── */
function Timeline() {
  return (
    <>
      <style>{TIMELINE_STYLES}</style>
      <RegistrationTimeline />

      <div style={{ background: "var(--beige)", padding: "0 5%" }}>
        <div className="tl-section-divider">
          <span className="tl-divider-label">· · · event schedule below · · ·</span>
        </div>
      </div>

      <EventTimeline />
    </>
  );
}

export default Timeline;