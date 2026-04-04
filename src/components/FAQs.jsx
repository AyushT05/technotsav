import { useState, useEffect, useRef } from "react";


const faqData = [
  {
    id: 1,
    cat: "project",
    q: "Can we choose our own problem statement?",
    a: "Yes! While we have provided a list of problem statements, you’re not restricted to them. If you have a strong, meaningful problem you’d like to solve, feel free to propose your own."
  },
  {
    id: 2,
    cat: "project",
    q: "Are we restricted to specific technologies, components or tools?",
    a: "Not at all. You’re free to use any technologies or components you’re comfortable with. The ones mentioned in the AIoT & Robotics domain are just examples — not mandatory."
  },
  {
    id: 3,
    cat: "project",
    q: "Are pre-built projects allowed?",
    a: "No. Pre-built projects are strictly not allowed. Your solution should be developed during the hackathon. We do have ways to identify pre-built work, so it’s best to play fair."
  },
  {
    id: 4,
    cat: "project",
    q: "Can we use open-source libraries or APIs?",
    a: "Absolutely — in fact, we encourage it. Open-source tools can help you build faster and better, so make the most of them."
  },
  {
    id: 5,
    cat: "team",
    q: "Will there be mentors available during the hackathon?",
    a: "Yes, mentors will be available to guide you whenever needed."
  },
  {
    id: 6,
    cat: "team",
    q: "Can team members be from different colleges or branches?",
    a: "Yes, Team members can be from different branches or even different colleges."
  },
  {
    id: 7,
    cat: "project",
    q: "Can we change our problem statement after registering?",
    a: "No, changes are generally not allowed after registration. However, in rare cases (like when new problem statements are introduced), teams may be given an option to switch."
  },
  {
    id: 8,
    cat: "team",
    q: "Will prizes be awarded per domain or overall winners?",
    a: "Prizes will be awarded per domain, so you’ll be competing within your selected category."
  },
  {
    id: 9,
    cat: "logistics",
    q: "Will accommodation be provided?",
    a: "No, accommodation will not be provided."
  },
  {
    id: 10,
    cat: "logistics",
    q: "Will food and refreshments be provided?",
    a: `Yes! Meals and refreshments will be provided throughout the event, including breakfast, lunch, dinner, and snacks.

Note: Breakfast will not be provided on April 15th.`
  },
  {
    id: 11,
    cat: "logistics",
    q: "What should participants bring?",
    a: "There’s no strict requirement, but you should bring anything essential for your project — like your laptop, charger, and any hardware components you plan to use."
  },
  {
    id: 12,
    cat: "logistics",
    q: "How will updates or announcements be communicated?",
    a: "All important updates will be shared via email and through our Instagram page IEEE CIS VVCE."
  },
  {
    id: 13,
    cat: "logistics",
    q: "Is internet access provided?",
    a: "Yes, internet access will be available during the hackathon."
  },
  {
    id: 14,
    cat: "logistics",
    q: "Will hardware components or kits be provided?",
    a: "Participants are expected to bring their own hardware components if required. We will not be providing any kits."
  },
  {
    id: 15,
    cat: "project",
    q: "Can we use paid APIs or software tools?",
    a: "We strongly discourage the use of paid APIs or tools, as it creates an unfair advantage. We recommend sticking to free or open-source options."
  }
];

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState("all");
    const [openId, setOpenId] = useState(null);
    const revealRef = useRef([]);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const filteredFAQs =
        activeTab === "all"
            ? faqData
            : faqData.filter((item) => item.cat === activeTab);

    // Intersection reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("revealed");
                });
            },
            { threshold: 0.1 }
        );

        revealRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="faq" className="faq-section">
            

            {/* Header */}
            <div
                className="faq-header reveal"
                ref={(el) => (revealRef.current[0] = el)}
            >
                <p className="faq-label"> {'>'} Frequently Asked Questions</p>
                <h2 className="faq-title">
                    Got <span>Questions?</span>
                </h2>
                <div className="faq-rule-wrap">
                    <div className="faq-rule"></div>
                    <div className="faq-rule-center"></div>
                    <div className="faq-rule"></div>
                </div>
            </div>

            {/* Tabs */}
            <div
                className="faq-tabs reveal"
                ref={(el) => (revealRef.current[1] = el)}
            >
                {["all", "project", "team", "logistics"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "all"
                            ? "All"
                            : tab === "project"
                                ? "Project Rules"
                                : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* FAQ List */}
            <div
                className="faq-list reveal"
                ref={(el) => (revealRef.current[2] = el)}
            >
                {filteredFAQs.map((item, index) => (
                    <div
                        key={item.id}
                        className={`faq-item ${openId === item.id ? "open" : ""}`}
                    >
                        <button className="faq-q" onClick={() => toggleFAQ(item.id)}>
                            <span className="q-num">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="q-text">{item.q}</span>
                            <span className="q-icon">+</span>
                        </button>

                        <div className="faq-a">
                            <div className="faq-a-inner">
                                <p style={{ whiteSpace: "pre-line" }}>{item.a}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            {/* Footer */}
            <div
                className="faq-footer reveal"
                ref={(el) => (revealRef.current[3] = el)}
            >
                <div>
                    <p className="faq-footer-label">STILL HAVE ANY MORE QUESTIONS?</p>
                    <p className="faq-footer-title">
                        Reach out to our coordinators
                    </p>
                </div>
            </div>
        </section>
    );
}