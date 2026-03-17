import DishanImg from "../assets/dishanImg.jpg";
import KeerthanImg from "../assets/KeerthanImg.jpeg";

function Coordinators() {
  const studentCoordinators = [
    {
      img: DishanImg,
      role: "President",
      name: "Dishan Hari Seelam",
      phone: "+91 99865 92905",
    },
    {
      img: KeerthanImg,
      role: "Secretary",
      name: "Keerthan S Gangadikar",
      phone: "+91 94817 12179",
    },
  ];

  const facultyCoordinators = [
    {
      avatar: "HC",
      name: "Prof. Harshith C",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },
    {
      avatar: "HV",
      name: "Prof. Harshith V",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },
    {
      avatar: "MG",
      name: "Prof. MohanKumar G",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },
    {
      avatar: "SG",
      name: "Prof. Soumya G V",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },
    {
      avatar: "KS",
      name: "Prof. Kruthika S G",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },
    {
      avatar: "RS",
      name: "Prof. Rachana S",
      phone: "Assistant Professor, VVCE CSE Dept.",
    },


  ];

  return (
    <section className="coord-section" id="contact">

      <div style={{ textAlign: "center" }} className="reveal">
        <p className="section-label">&gt; Get in Touch</p>
        <h2 className="section-title">Coordinators</h2>
      </div>

      {/* STUDENT COORDINATORS */}
      <h3 className="coord-subtitle">Student Coordinators</h3>
      <div className="coord-grid">
        {studentCoordinators.map((c, index) => (
          <div key={index} className="coord-card reveal">

            <div className="coord-avatar">
              <img src={c.img} alt={c.name} />
            </div>

            <div className="coord-role">{c.role}</div>
            <div className="coord-name">{c.name}</div>
            <div className="coord-phone">{c.phone}</div>

          </div>
        ))}
      </div>

      {/* FACULTY COORDINATORS */}
      <h3 className="coord-subtitle">Faculty Coordinators</h3>
      <div className="coord-grid">
        {facultyCoordinators.map((c, index) => (
          <div key={index} className="coord-card reveal">

            <div className="coord-avatar">
              {c.avatar}
            </div>

            <div className="coord-role">Faculty Coordinator</div>
            <div className="coord-name">{c.name}</div>
            <div className="coord-phone">{c.phone}</div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Coordinators;