import { useState } from "react";

const problemStatements = {
  d1: [
    {
      id: "FT-001",
      title: "gnirocS tiderC dezilartneceD",
      detail:
        ".noitamrofni lanosrep evitisnes gnisopxe tuohtiw yletarucca ksir ssessa ot srednel gnilbane elihw sresu rof ytnierevos atad erusne tsum noitulos ehT .noitalupop dekabnu eht ot ssecca tiderc riaf edivorp ot )yrotsih noitcasnart ,egasu elibom ,stnemyap ytilitu( secruos atad evitanretla segarevel taht metsys gnirocs tiderc gnivreserp-ycavirp a ngiseD",
    },
    {
      id: "FT-002",
      title: "stnemyaP-orciM redroB-ssorC emiT-laeR",
      detail:
        ".stekram gnipoleved ni sresu lacinhcet-non ot elbissecca XU a gniniatniam elihw noitneverp duarf dna ,snoitcidsiruj ssorca ecnailpmoc yrotaluger ,noisrevnoc ycnerruc fo segnellahc eht sserddA .01$ rednu stnuoma rof srefsnart yenom lanoitanretni eef-orez raen ,dnoces-bus selbane taht reyal erutcurtsarfni na dliuB",
    },
    {
      id: "FT-003",
      title: "hcoaC ecnaniF lanosreP nevirD-IA",
      detail:
        ".secafretni lanoitasrevnoc hguorht snoitadnemmocer reviled dna ,seicnerruc elpitlum troppus ,)srekrow ymonoce gig( smaerts emocni ralugerri eldnah tsum metsys ehT .ecivda elbanoitca dezilanosrep-repyh sedivorp dna ,sserts laicnanif erutuf stciderp ,snrettap gnidneps sezylana taht rosivda laicnanif tnegilletni na etaerC",
    },
  ],
  d2: [
    {
      id: "IOT-001",
      title: "krowteN gnicnalaB daoL dirG tramS",
      detail:
        ".noitanidrooc lartnec tuohtiw seruliaf krowten laitrap evivrus dna ,secruos elbawener etargetni ,sremusorp neewteb gnirahs ygrene etaitogen ylsuomonotua dluohs metsys ehT .doohrobhgien laitnediser a ssorca emit laer ni dnamed yticirtcele secnalab dna stciderp taht secived egde dna sretem trams fo krowten ToI detubirtsid a poleveD",
    },
    {
      id: "IOT-002",
      title: "smetsyS retaW larur rof ecnanetniaM evitciderP",
      detail:
        ".ecived-no gninnur sledom noitceted ylamona gnisu ecnavda ni sruoh 84 seruliaf epip tciderp dna ,ToI-BN ro NAWaroL revo timsnart ,gnitsevrah ralos no etarepo tsum metsys ehT .erutcurtsarfni noitubirtsid retaw larur ssorca ytilauq retaw dna ,setar wolf ,erusserp enilepip srotinom taht krowten rosnes rewop-wol a reenignE",
    },
    {
      id: "IOT-003",
      title: "mroftalP gniviL detsissA tneibmA",
      detail:
        ".srevigeraC ot tnes strela dezimynona ylno htiw ,yllacol rucco tsum gnissecorp lla — tnuomarap si ycavirP .enilced evitinogoc fo evitacidni snoitaived laroivaheb seitifitnedi dna ,ecnerehda noitacidem srotinom ,sllaf stceted taht stnediser yldredle rof metsys emoh trams evisurtni-non a ngiseD",
    },
  ],
  d3: [
    {
      id: "CS-001",
      title: "secrofkroW dirbyH rof hseM ytitnedI tsurT-oreZ",
      detail:
        ".tseuqer ssecca yreve rof serocs ksir elbanialpxe etareneg dna ,noitacitnehtua sseldrowssap troppus ,erutcurtsarfni NPV ycagel htiw etargetni ylssemaelss tsum noitulos ehT .secruoser esirpretne ot ssecca gnitnarg erofeb txetnoc krowten dna ,roivaheb resu ,erutsop ecived seifirev ylsuounitnoc taht metsys lortnoc ssecca tsurt-orez a dliuB",
    },
    {
      id: "CS-002",
      title: "rotagerggA ecnegilletnI taerhT derewoP-MLL",
      detail:
        ".noitargetni MEIS maertsnwod rof stroper IIXAT/XITS etareneg-otua dna ,srotca taerht nwonk ot skcatta etubirtta ,esimorpmoc fo srotacidni etalerroc ot sledom egaugnal egral sesu neht ,sgol lanretni dna ,sdeef TNISO ,smurof bew krad morf ecnegilletni taerht derutcurtsnu stsegni taht mroftalp a etaerC",
    },
    {
      id: "CS-003",
      title: "reifireV ytirgetnI erawmriF niahC ylppuS",
      detail:
        ".erutcurtsarfni lacitirc ni deyolped era secived erofeb stnenopmoc tiefretnuoc dna ,snoitacifidom erawmrif dezirohtuanu ,stnalpmi erawdrah tceted tsum noitulos ehT .regdel tnedive-rep mat a gnisu niahc ylppus erawdrah xelpmoc a ssorca erawmrif fo ytirgetni eht stsetta yllacihpargotpyrc taht metsys a poleveD",
    },
  ],
  d4: [
    {
      id: "SD-001",
      title: "reludehcS etupmoC erawA-nobraC",
      detail:
        ".sIPA spaM yticirtcelE ro emiTttaW htiw etargetni dna sgnivas nobrac deidobme gniwohs sdraobhsad emit-laer edivorP .ytisnetni nobrac dirg tsewol eht htiw swodniw emit ot )spukcab ,gnidocsnart oediv ,gniniart LM hctab( sksat lanoitatupmoc tnegru-non stfihs taht sretsulc etupmoc esimerp-no dna duolc rof reyal noitartsehcro daolkrow a ngiseD",
    },
    {
      id: "SD-002",
      title: "ecnegilletnI retaW erutlucirgA noisicerP",
      detail:
        ".sdohtem desab-radnelac lanoitidart ot derapmoc %03 tsael ta yb noitpmusnoc retaw ecuder tsum metsys ehT .seludehcs noitagirri daeha-yad ,cificeps-dleif reviled ot sledom htworg porc dna ,stacerof rehtaew lacolrepyh ,yregami IVDN etilletas ,atad rosnes erutsiom lios sesuf taht metsys noisiced noitagirri derewop-IA na dliuB",
    },
    {
      id: "SD-003",
      title: "rezimitpO metsysocE etsaW lamrofnI",
      detail:
        ".ecnailpmoc GSE rof gnitroper tcapmi deifirev dna ,noitazimitpo etuor ,gnicirp cimanyd htiw ecalptekram a hguorht seitilicaf gnilcycer dna ,)srekcip etsaW/salawidabak( srotcelloc lamrofni ,srotareneg etsaW tcennoc .saera nabrU esned ni ymonoce noitcelloc etsaW lamrofni eht sezimitpo dna sezilamrof taht mroftalp a etaerC",
    },
  ],
};
const domainMeta = {
  d1: { label: "FINTECH", color: "#1DBFA3", prefix: "FT" },
  d2: { label: "IOT", color: "#F0B429", prefix: "IOT" },
  d3: { label: "CYBERSECURITY", color: "#E8698A", prefix: "CS" },
  d4: { label: "SUSTAIN-DEV", color: "#6B7C2D", prefix: "SD" },
};

function TerminalScreen({ domainId, onClose }) {
  const [openId, setOpenId] = useState(null);
  const [bootLine, setBootLine] = useState(0);
  const statements = problemStatements[domainId];
  const meta = domainMeta[domainId];

  const bootLines = [
    `> INITIALIZING ${meta.label} MODULE...`,
    `> LOADING PROBLEM REGISTRY v2.4.1`,
    `> DECRYPTING DATASET... OK`,
    `> ${statements.length} PROBLEM STATEMENTS FOUND`,
    `> READY_`,
  ];

  // Animate boot on mount
  useState(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setBootLine(i);
      if (i >= bootLines.length) clearInterval(interval);
    }, 180);
    return () => clearInterval(interval);
  }, [domainId]);

  return (
    <div style={styles.overlay}>
      <div style={styles.terminal}>
        {/* Scanline overlay */}
        <div style={styles.scanlines} />
        {/* CRT vignette */}
        <div style={styles.vignette} />

        {/* Terminal header */}
        <div style={styles.termHeader}>
          <div style={styles.termDots}>
            <span style={{ ...styles.dot, background: "#ff5f57" }} />
            <span style={{ ...styles.dot, background: "#febc2e" }} />
            <span style={{ ...styles.dot, background: "#28c840" }} />
          </div>
          <span style={styles.termTitle}>
            HACKATHON_TERMINAL — {meta.label}_PROBLEMS.db
          </span>
          <button onClick={onClose} style={styles.closeBtn}>
            [ESC]
          </button>
        </div>

        {/* Boot sequence */}
        <div style={styles.termBody}>
          <div style={styles.bootBlock}>
            {bootLines.slice(0, bootLine).map((line, i) => (
              <div key={i} style={styles.bootLine}>
                {line}
                {i === bootLine - 1 && bootLine < bootLines.length && (
                  <span style={styles.cursor}>█</span>
                )}
              </div>
            ))}
          </div>

          {bootLine >= bootLines.length && (
            <div style={styles.statementsBlock}>
              <div style={styles.separator}>
                {"═".repeat(58)}
              </div>
              <div style={{ ...styles.domainTag, color: meta.color }}>
                ◈ DOMAIN :: {meta.label} ◈
              </div>
              <div style={styles.separator}>
                {"═".repeat(58)}
              </div>

              {statements.map((ps, idx) => (
                <div key={ps.id} style={styles.psRow}>
                  {/* Title row */}
                  <button
                    style={styles.psTitleRow}
                    onClick={() =>
                      setOpenId(openId === ps.id ? null : ps.id)
                    }
                  >
                    <span style={{ ...styles.psId, color: meta.color }}>
                      [{ps.id}]
                    </span>
                    <span style={styles.psTitle}>{ps.title}</span>
                    <span style={{ ...styles.psArrow, color: meta.color }}>
                      {openId === ps.id ? "▼" : "▶"}
                    </span>
                  </button>

                  {/* Expanded detail */}
                  <div
                    style={{
                      ...styles.psDetail,
                      maxHeight: openId === ps.id ? "400px" : "0",
                      opacity: openId === ps.id ? 1 : 0,
                      paddingTop: openId === ps.id ? "12px" : "0",
                      paddingBottom: openId === ps.id ? "16px" : "0",
                    }}
                  >
                    <div style={styles.detailInner}>
                      <div style={{ ...styles.detailLabel, color: meta.color }}>
                        &gt;&gt; PROBLEM_DESCRIPTION
                      </div>
                      <p style={styles.detailText}>{ps.detail}</p>
                      <div style={styles.detailFooter}>
                        <span style={{ color: meta.color }}>
                          STATUS: ENCRYPTED FOR SECURITY REASONS
                        </span>
                        <span style={{ color: "rgba(0,255,70,0.4)" }}>
                          {" "}
                          |{" "}
                        </span>
                        <span style={{ color: "rgba(0,255,70,0.5)" }}>
                          DIFFICULTY: TBD
                        </span>
                      </div>
                    </div>
                  </div>

                  {idx < statements.length - 1 && (
                    <div style={styles.psDiv}>{"─".repeat(50)}</div>
                  )}
                </div>
              ))}

              <div style={styles.separator}>{"═".repeat(58)}</div>
              <div style={styles.prompt}>
                root@hackathon:~$ <span style={styles.cursor}>█</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Domains() {
  const [activeTerminal, setActiveTerminal] = useState(null);

  const domains = [
    {
      id: "d1",
      num: "01 ///",
      icon: "💳",
      name: "Fintech",
      desc: "Reimagine financial systems. Build tools for payments, lending, investments, and financial inclusion that shape tomorrow's economy.",
    },
    {
      id: "d2",
      num: "02 ///",
      icon: "📡",
      name: "Internet of Things",
      desc: "Connect the physical and digital. Create smart devices, sensor networks, and automation platforms that redefine how we interact with our world.",
    },
    {
      id: "d3",
      num: "03 ///",
      icon: "🔐",
      name: "Cybersecurity",
      desc: "Design systems to defend, detect, and respond. From threat intelligence to secure architectures, protect the digital world.",
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
    <section className="domains-section" id="domains" style={{ position: "relative" }}>
      {/* Terminal overlay — spans entire section */}
      {activeTerminal && (
        <TerminalScreen
          domainId={activeTerminal}
          onClose={() => setActiveTerminal(null)}
        />
      )}

      <div className="reveal">
        <p className="section-label">&gt; Problem Domains</p>
        <h2 className="section-title">Choose Your Arena</h2>
      </div>
      <div className="domains-grid">
        {domains.map((d, index) => (
          <div
            key={index}
            className={`domain-card ${d.id} reveal`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTerminal(d.id)}
          >
            <div className="domain-num">{d.num}</div>
            <span className="domain-icon">{d.icon}</span>
            <div className="domain-name">{d.name}</div>
            <p className="domain-desc">{d.desc}</p>

            {/* View Problems hint */}
            <div style={termHint}>
              <span style={termHintDot}>█</span> VIEW PROBLEM STATEMENTS
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── inline hint on each card ── */
const termHint = {
  marginTop: "20px",
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "0.7rem",
  color: "rgba(29,191,163,0.6)",
  letterSpacing: "2px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  borderTop: "1px solid rgba(29,191,163,0.15)",
  paddingTop: "12px",
};

const termHintDot = {
  color: "#1DBFA3",
  animation: "blink 1s step-end infinite",
};

/* ── terminal styles ── */
const styles = {
  overlay: {
    position: "absolute",
    inset: 0,
    zIndex: 50,
    background: "rgba(0,0,0,0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    backdropFilter: "blur(4px)",
  },
  terminal: {
    width: "100%",
    maxWidth: "860px",
    background: "#0a0f0a",
    border: "2px solid #00ff46",
    borderRadius: "8px",
    boxShadow:
      "0 0 0 1px #003312, 0 0 40px rgba(0,255,70,0.25), inset 0 0 80px rgba(0,255,70,0.03)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Share Tech Mono', monospace",
    maxHeight: "88vh",
    display: "flex",
    flexDirection: "column",
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
    pointerEvents: "none",
    zIndex: 10,
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.6) 100%)",
    pointerEvents: "none",
    zIndex: 9,
  },
  termHeader: {
    background: "#0d150d",
    borderBottom: "1px solid #00ff4640",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexShrink: 0,
  },
  termDots: {
    display: "flex",
    gap: "6px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
  termTitle: {
    flex: 1,
    color: "rgba(0,255,70,0.5)",
    fontSize: "0.72rem",
    letterSpacing: "2px",
    textAlign: "center",
  },
  closeBtn: {
    background: "none",
    border: "1px solid rgba(0,255,70,0.3)",
    color: "#00ff46",
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    letterSpacing: "2px",
    padding: "3px 10px",
    cursor: "pointer",
    borderRadius: "3px",
    transition: "all 0.2s",
  },
  termBody: {
    padding: "20px 24px",
    overflowY: "auto",
    flex: 1,
    color: "#00ff46",
  },
  bootBlock: {
    marginBottom: "8px",
  },
  bootLine: {
    fontSize: "0.78rem",
    letterSpacing: "1.5px",
    lineHeight: "1.9",
    color: "rgba(0,255,70,0.65)",
    textShadow: "0 0 8px rgba(0,255,70,0.4)",
  },
  cursor: {
    display: "inline-block",
    animation: "blink 1s step-end infinite",
    color: "#00ff46",
    marginLeft: "2px",
  },
  statementsBlock: {
    marginTop: "4px",
  },
  separator: {
    color: "rgba(0,255,70,0.25)",
    fontSize: "0.72rem",
    letterSpacing: "0.5px",
    margin: "8px 0",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  domainTag: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    letterSpacing: "4px",
    textAlign: "center",
    padding: "6px 0",
    textShadow: "0 0 12px currentColor",
  },
  psRow: {
    marginBottom: "4px",
  },
  psTitleRow: {
    width: "100%",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 0",
    cursor: "pointer",
    textAlign: "left",
    borderRadius: "4px",
    transition: "background 0.15s",
  },
  psId: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    letterSpacing: "1px",
    flexShrink: 0,
    textShadow: "0 0 8px currentColor",
  },
  psTitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.88rem",
    color: "#00ff46",
    letterSpacing: "1.5px",
    flex: 1,
    textShadow: "0 0 6px rgba(0,255,70,0.3)",
  },
  psArrow: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    flexShrink: 0,
  },
  psDetail: {
    overflow: "hidden",
    transition: "max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease",
  },
  detailInner: {
    background: "rgba(0,255,70,0.04)",
    border: "1px solid rgba(0,255,70,0.12)",
    borderRadius: "4px",
    padding: "16px",
    marginLeft: "16px",
  },
  detailLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "3px",
    marginBottom: "10px",
    textShadow: "0 0 8px currentColor",
  },
  detailText: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.8rem",
    color: "rgba(0,255,70,0.75)",
    lineHeight: "1.85",
    letterSpacing: "0.5px",
  },
  detailFooter: {
    marginTop: "14px",
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "2px",
  },
  psDiv: {
    color: "rgba(0,255,70,0.12)",
    fontSize: "0.7rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "2px 0",
  },
  prompt: {
    marginTop: "12px",
    fontSize: "0.78rem",
    color: "rgba(0,255,70,0.5)",
    letterSpacing: "1px",
  },
};

export default Domains;