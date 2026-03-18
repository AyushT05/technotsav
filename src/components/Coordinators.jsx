import DishanImg from "../assets/dishanImg.jpg";
import KeerthanImg from "../assets/KeerthanImg.jpeg";
import AbhilashImg from "../assets/AbhilashImg.jpeg";
import DhanushImg from "../assets/DhanushImg.jpeg";
import HarshaImg from "../assets/HarshaImg.jpeg";

function Coordinators() {
  const studentCoordinators = [
    {
      img: DishanImg,
      role: "President",
      name: "Dishan Hari Seelam",
      phone: "+91 99865 92905",
    },
    {
      img: DhanushImg,
      role: "Vice President",
      name: "Dhanush",
      phone: "+91 63628 28422"

    },
    {
      img: KeerthanImg,
      role: "Secretary",
      name: "Keerthan S Gangadikar",
      phone: "+91 94817 12179",
    },
    {
      img: AbhilashImg,
      role: "Social Media Lead",
      name: "Abhilash S",
      phone: "+91 96068 38375"
    },
    {
      img: HarshaImg,
      role: "Treasurer",
      name: "Harsha M",
      phone: "+91 91085 50891"
    },

  ];

  const facultyCoordinators = [
    {
      avatar: "HC",
      name: "Prof. Harshith C",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "HV",
      name: "Prof. Harshith V",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "MG",
      name: "Prof. MohanKumar G",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "SG",
      name: "Prof. Soumya G V",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "KS",
      name: "Prof. Kruthika S G",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "RS",
      name: "Prof. Rachana S",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    },
    {
      avatar: "IJ",
      name: "Prof. Indu J",
      phone: "Assistant Professor, VVCE CSE(AI&ML) Dept.",
    }


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

            
            <div className="coord-name">{c.name}</div>
            <div className="coord-phone">{c.phone}</div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Coordinators;