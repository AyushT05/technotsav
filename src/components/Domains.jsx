import { useState, useEffect } from "react";

// ─── DATA STRUCTURE ────────────────────────────────────────────────────────────
// Each problem has: id, title, sections[]
// Section types: "text" | "text+table" | "table"
// Each section: { num, label, type, content?, table?: { headers[], rows[][] } }

const problemStatements = {
  d1: [
    {
      id: "FT-001",
      title: "AI-Powered Regulatory Compliance Monitoring",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
"Financial institutions operate under a constantly evolving web of regulations — MiFID II, Basel III,Dodd-Frank, GDPR, AML/KYC directives, and more. Manual compliance monitoring is slow, error-prone, andfails to keep pace with regulatory amendments. Participants must build an AI-powered regulatory compliance monitoring system that ingests regulatory documents and transaction data, automatically maps transactions to applicable rules, flags potential violations in real time, and generates audit-ready compliance reports — reducing human review burden by at least 60%"
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Regulatory compliance monitoring involves two interlinked challenges: regulatory intelligence (understanding what rules apply and how they change) and transaction surveillance (checking whether each transaction adheres to those rules). An AI system must bridge both using NLP for rule extraction and ML classifiers for transaction screening.",
          contentAfter:
            "The system should use NLP/LLM techniques to parse regulatory text and extract enforceable rules as structured data. A rules engine then evaluates incoming transactions against the extracted rules, scores violation probability, and routes high-risk cases to a compliance officer dashboard. The system must handle regulatory updates incrementally — without a full pipeline restart.",
          table: {
            headers: ["Regulation", "Domain", "Key Requirement"],
            rows: [
              ["MiFID II",  "Markets / Trading",    "Best execution, trade reporting, transparency"],
              ["Basel III", "Capital / Banking",     "Capital adequacy ratios, liquidity coverage"],
              ["AML / KYC", "Anti-money laundering", "Customer due diligence, suspicious tx reporting"],
              ["GDPR",      "Data Privacy",          "Consent management, data minimisation"],
            ],
          },
        },
      ],
    },
{
  "id": "FT-002",
  "title": "Liquidity Risk Detection in Banking Systems",
  "sections": [
    {
      "num": "1",
      "label": "PROBLEM_STATEMENT",
      "type": "text",
      "content": "Liquidity risk — the inability of a bank to meet its short-term financial obligations without incurring unacceptable losses — was a core driver of the 2008 financial crisis and the 2023 SVB collapse. Traditional liquidity monitoring relies on static thresholds and end-of-day snapshots. Participants must build an AI-driven liquidity risk detection system that monitors intraday cash flows, models stress scenarios, predicts liquidity shortfalls up to 30 days ahead, and issues early warning signals before a bank breaches its Liquidity Coverage Ratio (LCR) or Net Stable Funding Ratio (NSFR) limits."
    },
    {
      "num": "2",
      "label": "EXPLANATION",
      "type": "text+table",
      "contentBefore": "Liquidity risk manifests across multiple time horizons and is driven by both internal cash flow patterns and external market conditions. A robust detection system must model all three risk dimensions simultaneously:",
      "contentAfter": "The AI model should use time-series forecasting (LSTM, Transformer, or Prophet) on historical cash flow data, enriched with macroeconomic signals (interest rates, credit spreads, central bank liquidity ops). A stress-testing module must simulate idiosyncratic shocks (sudden deposit outflow) and systemic shocks (market-wide liquidity freeze) to quantify survival horizon — the number of days the bank can operate before breaching regulatory minimums.",
      "table": {
        "headers": ["Risk dimension", "Time horizon", "Key indicators", "Regulatory metric"],
        "rows": [
          ["Funding liquidity", "Intraday – 30 days", "Cash outflow rate, deposit withdrawal spikes", "LCR"],
          ["Market liquidity", "Intraday – 7 days", "Bid-ask spreads, asset sale haircuts, repo rates", "NSFR"],
          ["Structural liquidity", "1 month – 1 year", "Loan-to-deposit ratio, wholesale funding dependency", "NSFR / ILAAP"]
        ]
      }
    },
  ]
},
 {
  "id": "FT-003",
  "title": "AI System for Detecting Market Manipulation in High Frequency Trading",
  "sections": [
    {
      "num": "1",
      "label": "PROBLEM_STATEMENT",
      "type": "text",
      "content": "High Frequency Trading (HFT) accounts for over 50% of equity market volume globally. The speed and volume of HFT activity creates opportunities for sophisticated manipulation strategies — spoofing, layering, quote stuffing, and momentum ignition — that are nearly impossible for human analysts to detect in real time. Participants must build an AI system that ingests Level 2 order book data and trade feeds, identifies statistically anomalous patterns indicative of manipulation, classifies manipulation type, and generates regulatory-grade evidence packages within milliseconds of detection."
    },
    {
      "num": "2",
      "label": "EXPLANATION",
      "type": "text+table",
      "contentBefore": "HFT manipulation exploits the speed asymmetry between algorithmic traders and market surveillance systems. Each manipulation technique leaves a distinct statistical fingerprint in the order book that an AI system must learn to recognize under extreme time pressure (microsecond to millisecond resolution):",
      "contentAfter": "The core technical challenge is the extreme class imbalance — manipulative events are rare relative to legitimate HFT activity — combined with the need for sub-second latency. Models must achieve high precision (to avoid drowning compliance teams in false alerts) while maintaining recall sufficient for regulatory defensibility. Graph neural networks or attention-based sequence models operating on order book snapshots are among the leading approaches. The evidence package must include reconstructed order sequences, timestamp chains, and a manipulation probability score with confidence intervals.",
      "table": {
        "headers": ["Manipulation type", "Mechanism", "Order book signature"],
        "rows": [
          [
            "Spoofing",
            "Place large orders to move price, cancel before execution",
            "High order-to-trade ratio; large orders vanishing within ms"
          ],
          [
            "Layering",
            "Stack multiple fake orders at multiple price levels",
            "Asymmetric bid/ask depth that disappears on price approach"
          ],
          [
            "Quote stuffing",
            "Flood exchange with orders to slow competitors' systems",
            "Sudden message rate spike with near-zero fill rates"
          ],
          [
            "Momentum ignition",
            "Trigger other algos' stop-losses to create artificial momentum",
            "Rapid aggressive trades followed by immediate position reversal"
          ]
        ]
      }
    },
  ]
},
    {
      id: "FT-004",
      title: "Intelligent Collateral Optimization System",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "In the derivatives and secured lending markets, financial institutions must pledge assets (collateral) to mitigate counterparty credit risk. However, fragmented data, varying haircuts, and complex eligibility criteria across multiple clearinghouses (CCPs) often lead to \"collateral drag\" — where high-quality liquid assets (HQLA) are trapped or inefficiently allocated. Participants must build an AI-driven collateral optimization system that analyzes real-time inventory, predicts margin requirements, and executes an automated \"cheapest-to-deliver\" (CTD) strategy. The system must minimize funding costs while ensuring 100% compliance with evolving regulatory mandates like UMRE (Uncleared Margin Rules).",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Collateral optimization requires balancing asset liquidity against the cost of carry while navigating a web of shifting constraints. An effective AI system must move beyond static rule-based allocation to dynamic, predictive routing based on three core optimization pillars:",
          contentAfter:
            "The AI model should leverage Linear Programming (LP) or Reinforcement Learning (RL) to solve the multi-constraint optimization problem in real-time. By processing historical volatility and settlement data, the system should predict \"margin calls\" before they occur, allowing for proactive asset substitution. Crucially, the engine must handle \"wrong-way risk\" (where the collateral value is positively correlated with the counterparty's probability of default) by adjusting risk weights dynamically.",
          table: {
            headers: ["Optimization Pillar", "Focus Area", "Key Decision Variable", "Efficiency Goal"],
            rows: [
              ["Inventory Rationalization", "Asset Eligibility",    "Haircut levels & Concentration limits",       "Minimize \"Liquidity Trap\" scenarios"],
              ["Margin Forecasting",        "Predictive Analytics", "Initial Margin (IM) & Variation Margin (VM)", "Reduce buffer capital requirements"],
              ["Cost Minimization",         "Cheapest-to-Deliver",  "Opportunity cost of HQLA vs. Cash",          "Maximize Return on Assets (RoA)"],
            ],
          },
        },
      ],
    },
    {
      id: "FT-005",
      title: "AI System for Predicting Counterparty Default Risk",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Counterparty Credit Risk (CCR) is the risk that a partner in a financial transaction — such as a derivative, repo, or foreign exchange contract — will default before the final settlement of the transaction's cash flows. Unlike standard lending, CCR is dynamic; the exposure fluctuates with market volatility, often leading to \"Wrong-Way Risk\" where the probability of a counterparty's default increases as the exposure to them rises. Participants must build an AI-powered predictive system that integrates multi-source data (financial statements, market sentiment, and macroeconomic indicators) to estimate the Probability of Default (PD) in real-time. The system must provide early warning signals and calculate Credit Valuation Adjustments (CVA) to price this risk into active trades.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Predicting counterparty default requires a shift from static, lagging credit scores to a forward-looking, high-frequency risk assessment. An effective AI solution must continuously evaluate the \"health\" of a counterparty across various data dimensions to stay ahead of sudden market shifts:",
          contentAfter:
            "The system should employ Ensemble Learning (XGBoost/Random Forest) for high-accuracy classification and Graph Neural Networks (GNN) to model the interconnectedness of counterparties, identifying \"hidden\" contagion paths. The output must include an explainability layer (SHAP or LIME) so that risk managers can justify why a counterparty's risk level was upgraded or downgraded. Furthermore, the engine must calculate Potential Future Exposure (PFE) to ensure the institution maintains sufficient capital buffers during periods of high volatility.",
          table: {
            headers: ["Risk Category", "Data Input", "Predictive Output", "Regulatory / Risk Impact"],
            rows: [
              ["Financial Solvency", "Balance sheets, Cash flow, Debt-to-Equity ratios",          "Distance-to-Default (DtD)",          "Capital Adequacy (Basel III/IV)"],
              ["Market Sentiment",   "Credit Default Swap (CDS) spreads, Stock volatility",        "Market-implied PD",                  "Real-time CVA pricing"],
              ["Macroeconomic",      "GDP growth, Interest rate hikes, Geopolitical news",         "Systematic Risk Score",              "Stress Testing & Scenarios"],
              ["Network Risk",       "Interbank exposure, Contagion mapping",                      "Systemic Spillover probability",     "Concentration Limit breach alerts"],
            ],
          },
        },
      ],
    },
  ],
  d2: [
    {
      id: "AIOT-001",
      title: "Crop Disease Early Warning via Leaf Image + IoT Sensor Fusion",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "India loses an estimated Rs 90,000 crore annually to plant diseases, yet most smallholder farmers lack access to agronomists or diagnostic labs. Participants must build a field-deployable IoT system that combines a low-cost camera module with environmental sensors to provide autonomous, on-device crop disease detection. A pre-trained TensorFlow Lite leaf disease classifier (PlantVillage dataset) runs directly on the ESP32-CAM. When disease probability exceeds a set threshold AND environmental conditions (humidity, soil moisture) are favorable for fungal spread, the system sends the farmer a photo with diagnosis via Telegram — no internet beyond SMS required in the field.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The core innovation is sensor fusion for alert confidence: a visual detection alone may trigger false alarms from lighting or leaf damage. By gating alerts on both vision and environmental conditions, the system dramatically reduces false positives. The system pipeline operates across three stages:",
          contentAfter:
            "The PlantVillage dataset (54,306 images, 38 disease classes) is publicly available and pre-trained MobileNetV2 TFLite models are downloadable, making this feasible within a hackathon timeline. Teams are encouraged to quantize the model to INT8 to fit within the ESP32-CAM's constrained memory footprint.",
          table: {
            headers: ["Stage", "Component", "Function", "Output"],
            rows: [
              ["Capture",      "ESP32-CAM",       "Periodic leaf image capture (every 30 min or on trigger)", "JPEG frame buffer"],
              ["Inference",    "TFLite model",    "On-device classification: Healthy / Early Blight / Late Blight / Rust", "Disease class + confidence score"],
              ["Fusion gate",  "DHT22 + Soil",    "Alert only if confidence > threshold AND humidity > 70% or soil wet", "Boolean: send alert?"],
              ["Notification", "Telegram Bot",    "Push image + disease label + recommended action to farmer's phone", "Farmer receives diagnosis"],
            ],
          },
          deliverables: [
            "Live disease classification demo on real or printed leaf images",
            "Sensor-fused alert logic — show a case where high humidity triggers vs suppresses alert",
            "Telegram notification demo with photo + diagnosis message",
            "Model accuracy report with confusion matrix (min 75% accuracy on test set)",
          ],
        },
      ],
    },
    {
      id: "AIOT-002",
      title: "Edge AI Sound Classifier for Industrial Safety (TinyML)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Industrial accidents caused by undetected auditory signals — emergency sirens, glass breaks, or abnormal machine sounds — result in thousands of preventable injuries annually. Cloud-dependent sound detection introduces unacceptable latency and privacy risks in factory environments. Participants must train a TinyML sound classification model on Edge Impulse and deploy it onto the Arduino Nano 33 BLE Sense's onboard microphone. The deployed model must classify four sound classes in real time with sub-1ms inference latency and trigger safety alerts locally — zero cloud dependency required.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "TinyML (machine learning on microcontrollers) is one of the fastest-growing fields in embedded systems. The Arduino Nano 33 BLE Sense has only 256KB RAM and 1MB Flash — deploying a functional neural network within these constraints requires careful model design, quantization, and feature engineering. The four target sound classes and their industrial relevance are:",
          contentAfter:
            "Edge Impulse (free tier) provides a full MLOps pipeline: data collection via the browser, MFCC / MFE audio feature extraction, neural network training, and one-click Arduino library export. The key technical challenge is achieving minimum 80% accuracy across all four classes while keeping the model footprint under 200KB. INT8 quantization typically reduces model size 4x with less than 2% accuracy loss — teams should document this trade-off explicitly.",
          table: {
            headers: ["Sound class", "Industrial scenario", "Required response"],
            rows: [
              ["Normal machine hum",  "Baseline operating state — motor, conveyor, HVAC",          "No action — log as normal"],
              ["Glass break",         "Safety panel shattered, equipment impact, intrusion",         "Immediate alert + buzzer"],
              ["Emergency siren",     "Fire alarm, evacuation signal, chemical leak warning",        "Alert + relay trigger for evacuation light"],
              ["Silence / anomaly",   "Machine stopped unexpectedly — possible fault or shutdown",   "Maintenance alert after 10s silence window"],
            ],
          },
          deliverables: [
            "4-class real-time inference demo — live audio classification on device",
            "Confusion matrix with minimum 80% overall accuracy across all classes",
            "Latency measurement — inference time in ms printed to serial monitor",
            "Edge vs cloud trade-off analysis: latency, privacy, and cost comparison",
          ],
        },
      ],
    },
    {
      id: "AIOT-003",
      title: "Blind Navigation Assistant with Obstacle + Object Announcement",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "India has 15 million visually impaired people — the largest blind population in the world — yet affordable, intelligent assistive navigation technology remains largely inaccessible. Participants must build a wearable chest-mounted navigation assistant that provides real-time, fully offline guidance. The system uses ultrasonic sensors for close-range obstacle avoidance (haptic + audio beep) and a Pi Camera running YOLOv5-nano for object detection, announcing detected items (door, stairs, person, chair, vehicle) through a bone-conduction earpiece via text-to-speech. No cloud connectivity required — all inference runs on the Raspberry Pi 4 at the edge.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table+table",
          contentBefore:
            "The system operates across two complementary sensing modalities that work at different ranges and serve different safety needs. Getting both to work simultaneously in real time — without audio conflicts or processing bottlenecks — is the core engineering challenge:",
          contentMiddle:
            "YOLOv5-nano is the smallest variant in the YOLO family — only 1.9M parameters, ~4MB model size — making it feasible on a Raspberry Pi 4 at 10–15 FPS. The audio pipeline must manage announcement priority: obstacle warnings always interrupt object announcements, and repeated detections of the same object within 3 seconds are suppressed to avoid audio fatigue. The bone-conduction earpiece is critical — it leaves the ear canal open so the user retains ambient sound awareness, unlike standard earphones.",
          contentAfter:
            "",
          table: {
            headers: ["Modality", "Range", "Output", "Latency target"],
            rows: [
              ["Obstacle avoidance (HC-SR04 Ultrasonic)", "0 – 200 cm", "Haptic buzz + proximity beep frequency", "< 50ms"],
              ["Object announcement (Pi Camera v2)",      "0.6 – 6 m",  "TTS audio: 'Person ahead', 'Stairs detected'", "< 500ms"],
            ],
          },
          table2: {
            headers: ["Component", "Role", "Key technical constraint"],
            rows: [
              ["YOLOv5-nano",            "Real-time object detection and class labeling",    "Must run at minimum 5 FPS on RPi 4 without GPU"],
              ["gTTS / pyttsx3",         "Convert detection labels to spoken audio output",  "Offline TTS (pyttsx3) preferred; gTTS fallback for Wi-Fi scenarios"],
              ["HC-SR04",                "Continuous distance polling for near-field obstacle warning", "Runs on separate GPIO thread to avoid blocking vision pipeline"],
              ["Bone-conduction earpiece","Audio output keeping ambient hearing intact",     "3.5mm AUX or Bluetooth; latency < 100ms for BT variant"],
            ],
          },
          deliverables: [
            "Live navigation demo through an obstacle course (minimum 5 obstacles)",
            "Object announcement demo — 5 distinct classes correctly identified and spoken",
            "Latency + false-positive measurement report for both sensing modalities",
            "Accessibility impact report — deployment scenario and cost analysis for Indian users",
          ],
        },
      ],
    },
  ],
  d3: [
    {
  "id": "CS-001",
  "title": "Cookie Security Flags",
  "sections": [
    {
      "num": "1",
      "label": "PROBLEM_STATEMENT",
      "type": "text",
      "content": "Web applications use HTTP cookies to maintain session state and store user-specific data. When cookies are not configured with proper security flags, they become vulnerable to interception, theft, and cross-site attacks. This problem requires participants to identify missing or misconfigured cookie security attributes (HttpOnly, Secure, and SameSite) in a provided web application and demonstrate exploitable attack paths that arise from these misconfigurations."
    },
    {
      "num": "2",
      "label": "EXPLANATION",
      "type": "text+table",
      "contentBefore": "Cookie security flags control how browsers handle cookies during transmission and script execution. Three critical flags govern this behavior:",
      "contentAfter": "A common attack chain: an attacker injects a script via XSS (possible because HttpOnly is absent), steals the session cookie, and replays it from a different machine. If SameSite is also missing, Cross-Site Request Forgery (CSRF) allows state-changing actions (fund transfers, password changes) without the victim's direct interaction.",
      "table": {
        "headers": ["Flag", "Purpose", "Missing impact"],
        "rows": [
          [
            "HttpOnly",
            "Blocks JavaScript access to the cookie",
            "XSS payloads can steal session tokens via document.cookie"
          ],
          [
            "Secure",
            "Restricts cookie to HTTPS connections only",
            "Cookie transmitted in plaintext over HTTP, visible to network sniffers"
          ],
          [
            "SameSite",
            "Controls cross-origin cookie sending (Strict/Lax/None)",
            "CSRF attacks can forge authenticated requests from external sites"
          ]
        ]
      }
    },
  ]
},
    {
  "id": "CS-002",
  "title": "Broken Object Level Authorization (BOLA)",
  "sections": [
    {
      "num": "1",
      "label": "PROBLEM_STATEMENT",
      "type": "text",
      "content": "Modern REST APIs expose resources via object identifiers in URLs (e.g., /api/orders/1042). Broken Object Level Authorization (BOLA) — also known as Insecure Direct Object Reference (IDOR) — occurs when the server fails to verify that the requesting user actually owns or has permission to access the requested object. Participants must identify BOLA vulnerabilities in a sample API, demonstrate unauthorized data access across user boundaries, and implement server-side authorization checks to remediate the issue."
    },
    {
      "num": "2",
      "label": "EXPLANATION",
      "type": "text+table",
      "contentBefore": "BOLA is ranked #1 in the OWASP API Security Top 10 because it is pervasive and often simple to exploit. The root cause is trusting the client-supplied object ID without verifying ownership on the server side.\n\nTypical attack flow: an authenticated attacker observes that GET /api/invoices/500 returns their invoice. By incrementing the ID to 501, 502, etc., the attacker retrieves other users' invoices — no privilege escalation required, just enumeration. The same pattern applies to PUT/DELETE requests, allowing modification or deletion of other users' records.",
      "contentAfter": "The fix is not client-side validation. The server must compare the object's owner field against the authenticated user's identity on every request. Randomized UUIDs slow enumeration but do not fix the underlying authorization gap.",
      "table": {
        "headers": ["Scenario", "Request", "Vulnerable response"],
        "rows": [
          [
            "Read another user's record",
            "GET /api/users/9/profile",
            "200 OK — returns victim data"
          ],
          [
            "Modify another user's order",
            "PUT /api/orders/301 {status:cancelled}",
            "200 OK — order cancelled"
          ],
          [
            "Delete another user's file",
            "DELETE /api/files/88",
            "204 No Content — file deleted"
          ]
        ]
      }
    },
  ]
},
  {
    "id": "CS-003",
    "title": "CSRF Mitigation in Modern JSON-based APIs",
    "sections": [
      {
        "num": "1",
        "label": "PROBLEM_STATEMENT",
        "type": "text",
        "content": "Cross-Site Request Forgery (CSRF) is increasingly relevant in modern JSON-based APIs used by SPAs and mobile applications. Many developers assume JSON and token-based authentication provide inherent protection, but misconfigurations in CORS, content-type validation, and browser credential handling still expose APIs to CSRF attacks. Participants must design and implement a defense engine that validates request authenticity, enforces strict content-type policies, applies secure CORS configurations, and integrates cryptographic CSRF tokens and SameSite cookie protections."
      },
      {
        "num": "2",
        "label": "EXPLANATION",
        "type": "text+table",
        "contentBefore": "Mitigating CSRF in JSON APIs requires a defense-in-depth approach beyond simple origin checks. The system must distinguish legitimate cross-origin requests from malicious ones and enforce strict validation mechanisms across headers, cookies, and request patterns.",
        "contentAfter": "The system should also include heuristic analysis and behavioral fingerprinting to detect anomalies, enforce nonce-based validation for state-changing requests, and maintain audit logs for rejected requests to support incident response and forensic analysis.",
        "table": {
          "headers": ["Attack Vector", "Vulnerability Mechanism", "Mitigation Strategy", "Security Impact"],
          "rows": [
            [
              "Simple Request Bypass",
              "Exploiting text/plain or form-encoded payloads parsed as JSON",
              "Strict Content-Type enforcement & schema validation",
              "Prevents unintended parsing of forged requests"
            ],
            [
              "CORS Misconfiguration",
              "Overly permissive Access-Control-Allow-Origin",
              "Dynamic whitelist validation & credential-restricted origins",
              "Stops unauthorized domains from accessing data"
            ],
            [
              "Token Hijacking",
              "Predictable or long-lived session tokens",
              "Double Submit Cookies or synchronizer token pattern",
              "Ensures request authenticity per session"
            ],
            [
              "Ambient Auth Abuse",
              "Browser-managed cookies auto-attached to requests",
              "Custom headers + SameSite=Strict cookies",
              "Decouples browser state from API execution"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "CS-004",
    "title": "JWT Algorithm Confusion and Key Manipulation",
    "sections": [
      {
        "num": "1",
        "label": "PROBLEM_STATEMENT",
        "type": "text",
        "content": "JSON Web Tokens (JWTs) are widely used for stateless authentication, but improper validation can lead to critical vulnerabilities such as algorithm confusion and key manipulation. Attackers exploit weak verification logic by modifying the alg field, forcing downgrades or bypassing signature validation entirely. Participants must implement a hardened JWT validation engine that enforces strict algorithm pinning, validates key integrity, prevents header injection attacks, and detects misuse such as 'none' algorithm exploits in real time."
      },
      {
        "num": "2",
        "label": "EXPLANATION",
        "type": "text+table",
        "contentBefore": "Algorithm confusion arises when the server trusts client-supplied JWT headers without enforcing expected cryptographic constraints. This allows attackers to manipulate verification logic and bypass authentication controls.",
        "contentAfter": "A robust solution requires a positive security model with strict algorithm allowlists, trusted key sources, and validation of critical claims like exp, nbf, and iss. Detailed logging of failed validations is essential to detect brute-force and manipulation attempts.",
        "table": {
          "headers": ["Attack Vector", "Vulnerability Mechanism", "Mitigation Strategy", "Security Impact"],
          "rows": [
            [
              "Algorithm Downgrade",
              "Switching RS256 to HS256 using public key as secret",
              "Explicit algorithm pinning in verification logic",
              "Prevents signature forgery via key confusion"
            ],
            [
              "\"None\" Algorithm Exploit",
              "Setting alg to 'none' to bypass signature checks",
              "Strict rejection of unsigned tokens",
              "Ensures all tokens are cryptographically verified"
            ],
            [
              "KID/JWK Injection",
              "Manipulating key ID to reference malicious key स्रोत",
              "Key ID whitelisting and header sanitization",
              "Prevents directory traversal and malicious key loading"
            ],
            [
              "Key Confusion",
              "Using incorrect key types or lengths",
              "Pre-validation of key type and size",
              "Avoids verification bypass due to weak/mismatched keys"
            ]
          ]
        }
      }
    ]
  },
{
  "id": "CS-005",
  "title": "SSRF with Redirects",
  "sections": [
    {
      "num": "1",
      "label": "PROBLEM_STATEMENT",
      "type": "text",
      "content": "Server-Side Request Forgery (SSRF) occurs when an attacker causes the server to make HTTP requests to an unintended destination — typically an internal service unreachable from the internet. When combined with open redirects, naive URL-allowlist defenses can be bypassed: the server follows a redirect from a trusted external URL directly to an internal endpoint. Participants must exploit this chained vulnerability, reach a simulated cloud metadata endpoint, and implement defense-in-depth mitigations that survive redirect chains."
    },
    {
      "num": "2",
      "label": "EXPLANATION",
      "type": "text+table",
      "contentBefore": "A basic SSRF defense blocklists internal IP ranges (10.x, 192.168.x, 169.254.x). An attacker defeats this by supplying a URL on an allowlisted external domain that immediately 302-redirects to the internal target. The server validates the original URL (passes the check), then follows the redirect to the internal address — completely bypassing the allowlist.\n\nIn cloud environments this is critical: 169.254.169.254 (AWS IMDSv1, GCP, Azure) serves IAM credentials, account IDs, and SSH keys with no authentication. A single successful SSRF request can exfiltrate credentials granting full cloud account access.",
      "contentAfter": "A robust fix combines: (1) an allowlist of permitted destinations with final-URL re-verification after any redirects, (2) blocking all link-local and private IP ranges post-resolution, and (3) deploying AWS IMDSv2 (token-gated) to limit metadata endpoint exposure even if SSRF succeeds.",
      "table": {
        "headers": ["Bypass technique", "Mechanism", "Mitigated by"],
        "rows": [
          [
            "Open redirect chain",
            "Allowed domain → 302 → internal IP",
            "Resolve final URL before allowlist check"
          ],
          [
            "DNS rebinding",
            "Domain resolves to public IP at check, internal IP at fetch",
            "Pin DNS resolution; re-verify post-connect IP"
          ],
          [
            "Protocol switch",
            "http:// → file:// or gopher:// in redirect",
            "Allowlist only http/https; block scheme changes"
          ],
          [
            "Decimal / octal IP",
            "http://2130706433/ equals 127.0.0.1",
            "Canonicalize IP before blocklist comparison"
          ]
        ]
      }
    },
  ]
},
  ],
  d4: [
    {
      id: "SD-001",
      title: "Autonomous Carbon Footprint Intelligence System (ACFIS)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "The ACFIS is a next-generation framework designed to automate the lifecycle of carbon accounting within industrial ecosystems. As global regulations tighten, the challenge lies in moving from \"estimated\" footprints to \"autonomous\" footprints — data that is captured, verified, and reported without human bias. Participants must analyze the integration of AI-driven forecasting and Blockchain-backed auditing to ensure that carbon credits are representative of true environmental savings. The goal is to design a system that not only monitors emissions but proactively suggests \"Carbon-Neutral\" operational shifts based on real-time sensor intelligence.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The intelligence of ACFIS is derived from its ability to correlate industrial output with environmental cost. Unlike traditional reporting, which is often retrospective and prone to error, an autonomous system uses a Continuous Verification Loop. This ensures that every unit of energy consumed and every kilogram of CO₂ emitted is mathematically linked to a specific production event.\n\nThe table below outlines the primary Intelligence Modules required to maintain a high-integrity carbon monitoring system:",
          table: {
            headers: ["Intelligence Module", "Core Function", "Sustainability Impact"],
            rows: [
              ["Real-Time Emission Telemetry",    "Automated ingestion of NOₓ, CO₂, and CH₄ data from IoT edge devices.",                          "Eliminates manual reporting lag and \"greenwashing\" data gaps."],
              ["Geo-Fenced Asset Tracking",       "Linking emission data to specific geographic \"Green Zones\" or high-impact areas.",              "Enables localized environmental policy enforcement and precision auditing."],
              ["Predictive Decarbonization",      "AI models that forecast peak emission periods based on production schedules.",                    "Allows for proactive energy shifting to off-peak, renewable-heavy hours."],
              ["Immutable Ledger Integration",    "Cryptographic anchoring of footprint data onto a distributed ledger (Blockchain).",              "Provides a \"Single Source of Truth\" for international carbon credit trading."],
            ],
          },
          strategy: {
            title: "Core Implementation Strategy",
            intro: "To achieve a truly sustainable architecture, ACFIS must prioritize:",
            points: [
              { label: "Interoperability", text: "The system must communicate across different industrial protocols (e.g., Modbus, OPC-UA) to gather a holistic view of the carbon chain." },
              { label: "Data Integrity", text: "Ensuring that the \"Intelligence\" is based on raw, untampered data through the use of decentralized Oracles." },
              { label: "Scalability", text: "The framework should be able to scale from a single manufacturing plant to a global supply chain without losing granularity in the carbon footprint calculations." },
            ],
          },
        },
      ],
    },
    {
      id: "SD-002",
      title: "AI System for Predicting Environmental Disasters from Industrial Waste (ASP-EDIW)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Industrial waste management is a reactive process, where environmental damage is often only identified after catastrophic leakage or chemical runoff occurs. The ASP-EDIW is a predictive framework designed to transition from post-incident response to pre-emptive disaster prevention. By synthesizing historical discharge data, real-time chemical sensor feeds, and local hydrological patterns, the system aims to forecast high-risk \"disaster windows.\" Participants must analyze the integration of Deep Learning models for anomaly detection and Predictive Modeling to identify the exact thresholds where routine industrial waste disposal escalates into an environmental emergency.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The core challenge in predicting industrial disasters lies in the \"Cascade Effect.\" A single chemical leak might be manageable, but when combined with specific environmental variables — such as heavy rainfall, soil saturation, or rising water tables — it can lead to irreversible ecosystem collapse.\n\nThe system operates by monitoring Predictive Indicators across different industrial and environmental vectors. The table below outlines the primary data categories and their role in identifying a potential disaster before it manifests:",
          table: {
            headers: ["Predictive Indicator", "Data Source", "Disaster Significance"],
            rows: [
              ["Chemical Concentration Spikes",   "Effluent IoT sensors (pH, Heavy Metals, TDS).",                         "Identifies breach of safe operational limits in real-time."],
              ["Hydrological Correlation",         "Local weather stations and groundwater flow models.",                    "Predicts the speed and direction of toxic plume migration."],
              ["Structural Integrity Monitoring",  "Acoustic and seismic sensors on waste dams/pipelines.",                 "Detects micro-fractures that precede a catastrophic containment failure."],
              ["Anomaly Detection (AI)",           "Historical discharge vs. Current output patterns.",                     "Flags \"silent\" leaks or intentional illegal dumping during off-hours."],
            ],
          },
          strategy: {
            title: "Predictive Implementation Strategy",
            intro: "To ensure the system provides actionable intelligence, ASP-EDIW must incorporate:",
            points: [
              { label: "Threshold-Based Alerting", text: "Dynamic alerting systems that adjust sensitivity based on the proximity of industrial sites to \"High-Sensitivity Zones\" (e.g., residential areas or protected wetlands)." },
              { label: "Early-Warning Propagation", text: "Automated communication protocols that notify local environmental agencies and downstream communities the moment a \"High-Probability\" disaster state is detected." },
              { label: "Simulation Loop", text: "A digital-twin environment that constantly runs \"What-If\" scenarios (e.g., \"What happens if a leak occurs during a Level 5 storm?\") to refine the AI's predictive accuracy." },
            ],
          },
        },
      ],
    },
    {
      id: "SD-003",
      title: "Self-Optimizing Smart Grid for Renewable Energy Chaos (S-OSG)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "The integration of variable renewable energy (VRE) sources like solar and wind introduces \"Renewable Energy Chaos\" — unpredictable fluctuations in power supply that can destabilize traditional electrical grids. The S-OSG is an autonomous management layer designed to balance this volatility in real-time. Unlike static grids, this system must dynamically redistribute loads, manage battery storage cycles, and predict weather-induced surges to prevent grid frequency collapse. Participants must analyze the Reinforcement Learning (RL) models and Distributed Energy Resource (DER) protocols required to maintain grid equilibrium amidst high-penetration renewable instability.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The fundamental challenge of a renewable-heavy grid is the \"Duck Curve\" and the \"Intermittency Gap.\" Because sun and wind are non-dispatchable, the grid must possess the \"intelligence\" to self-correct when supply suddenly drops or peaks.\n\nThe S-OSG functions as a digital nervous system, treating every household solar panel and industrial battery as a controllable node. The table below illustrates the core Optimization Vectors that the system uses to mitigate energy chaos:",
          table: {
            headers: ["Optimization Vector", "Operational Mechanism", "Grid Stability Impact"],
            rows: [
              ["Demand-Side Response",         "AI-driven throttling of non-essential industrial loads during supply dips.",                           "Prevents brownouts by \"shaving\" peak demand in milliseconds."],
              ["Virtual Power Plants (VPP)",   "Aggregating thousands of small-scale residential batteries into a single resource.",                   "Creates a massive \"buffer\" to absorb sudden renewable surges."],
              ["Frequency Regulation",         "High-speed monitoring of Hz levels with sub-second correction.",                                       "Prevents catastrophic equipment damage caused by power quality swings."],
              ["Weather-to-Load Forecasting",  "Correlating satellite cloud-cover data with localized energy consumption.",                            "Pre-emptively charges storage before predicted \"Renewable Lulls.\""],
            ],
          },
          strategy: {
            title: "Self-Optimization Strategy",
            intro: "To manage a chaotic energy landscape, the S-OSG architecture prioritizes:",
            points: [
              { label: "Decentralized Control", text: "Moving away from a central \"Command and Control\" center to edge-computing nodes that can make local balancing decisions if the main network is congested." },
              { label: "Automated Arbitrage", text: "Using Blockchain-based smart contracts to automatically buy and sell energy between neighbors (P2P trading) to balance local microgrids." },
              { label: "Resiliency Loops", text: "Implementing \"Black Start\" capabilities where the AI can restart isolated sections of the grid using only local renewable and storage assets." },
            ],
          },
        },
      ],
    },
    {
      id: "SD-004",
      title: "Circular Economy Intelligence for Global Waste Supply Chains (CEI-GWSC)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "The global transition from a \"take-make-dispose\" linear model to a circular economy is hindered by the fragmentation of waste supply chains across international borders. Current systems lack the end-to-end visibility required to treat waste as a high-value raw material. The CEI-GWSC is an integrated intelligence layer designed to track, certify, and optimize the recovery of materials — such as rare earth metals, polymers, and textiles — at a global scale. Participants must bridge the gap between waste generation and remanufacturing, utilizing Digital Product Passports (DPP) and Reverse Logistics AI to ensure that materials remain in a closed-loop system indefinitely.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The intelligence behind a circular supply chain relies on the \"Material Fingerprint.\" For a global chain to function, every stakeholder — from the initial manufacturer to the final recycler — must have access to the material's composition, repair history, and recycling potential.\n\nThe system uses a Circularity Intelligence Matrix to transform discarded products back into industrial feedstocks. The table below outlines the primary mechanisms used to maintain material value across the global lifecycle:",
          table: {
            headers: ["Circularity Driver", "Technical Mechanism", "Supply Chain Impact"],
            rows: [
              ["Digital Product Passport",   "Blockchain-based ledger recording material origin and toxicity data.",                              "Enables border-crossing \"Waste-to-Resource\" certification."],
              ["Reverse Logistics AI",        "Automated routing for \"Product-as-a-Service\" and take-back schemes.",                            "Reduces the carbon overhead of returning used goods to factories."],
              ["Material Composition AI",     "Spectroscopic analysis to identify pure vs. contaminated waste streams.",                           "Increases the purity (and market value) of recycled secondary raw materials."],
              ["Value-Retention Tracking",    "Real-time monitoring of product \"Utility\" and \"Lifetime\" extension.",                         "Prioritizes Refurbishment and Reuse over energy-intensive recycling."],
            ],
          },
          strategy: {
            title: "Circular Integration Strategy",
            intro: "To operationalize global waste intelligence, the CEI-GWSC framework focuses on:",
            points: [
              { label: "Cradle-to-Cradle Design", text: "Integrating end-of-life intelligence into the initial CAD/CAM design phase to ensure products are physically \"easy to harvest.\"" },
              { label: "Decentralized Recovery Hubs", text: "Using AI to identify optimal regional locations for \"Micro-Remanufacturing\" centers, reducing the need for long-distance waste transport." },
              { label: "Transparency & Ethics", text: "Ensuring that global waste flows do not result in \"waste colonialism\" by using cryptographic proof-of-recovery to verify ethical labor and environmental standards in developing nations." },
            ],
          },
        },
      ],
    },
    {
      id: "SD-005",
      title: "Sustainable AI: Energy-Aware Machine Learning Models (S-AIM)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "As AI models grow exponentially in complexity, their environmental cost — measured in Megawatt-hours (MWh) and CO₂ equivalents — has become a critical barrier to sustainable digital transformation. Traditional machine learning focuses exclusively on maximizing accuracy, often at the expense of massive computational overhead. S-AIM is a framework designed to treat Energy Efficiency as a primary objective rather than a secondary constraint. Participants must move beyond \"Red AI\" (heavy-compute) toward \"Green AI\" by implementing energy-conscious training cycles, optimizing model architectures for low-power inference, and establishing a \"Performance-per-Watt\" benchmark for all intelligent workloads.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The sustainability of an AI system is determined by its lifecycle energy footprint, which is split between the Training Phase (one-time high intensity) and the Inference Phase (continuous daily usage). An \"Energy-Aware\" model uses intelligence to identify where marginal gains in accuracy no longer justify the exponential increase in power consumption.\n\nThe system utilizes Efficiency Levers to minimize the carbon intensity of the ML pipeline. The table below outlines the key strategies for balancing model intelligence with environmental responsibility:",
          table: {
            headers: ["Efficiency Lever", "Technical Implementation", "Sustainability Benefit"],
            rows: [
              ["Model Pruning & Quantization",  "Removing redundant neurons and reducing weight precision (e.g., FP32 to INT8).",                   "Decreases memory footprint and energy used per inference by 30–70%."],
              ["Knowledge Distillation",         "Training a compact \"Student\" model to mimic a massive \"Teacher\" model.",                       "Retains high accuracy while running on low-power edge hardware."],
              ["Carbon-Aware Scheduling",        "Automating training to run during hours when the local grid is powered by renewables.",              "Minimizes the CO₂ intensity of the model's development lifecycle."],
              ["Early-Exit Architectures",       "Allowing the model to stop processing once a high-confidence prediction is reached.",               "Reduces cumulative \"FLOPs\" (Floating Point Operations) during real-time use."],
            ],
          },
          strategy: {
            title: "Sustainable Implementation Strategy",
            intro: "To build a truly Green AI ecosystem, the S-AIM framework prioritizes:",
            points: [
              { label: "Metric Transparency", text: "Moving from reporting \"Accuracy\" to reporting \"Accuracy-per-kg-CO₂,\" ensuring that the environmental cost of every decimal point of progress is visible." },
              { label: "Hardware-Software Co-Design", text: "Optimizing algorithms specifically for energy-efficient accelerators like TPUs or specialized NPU (Neural Processing Unit) chips rather than general-purpose GPUs." },
              { label: "Data Minimalism", text: "Shifting toward \"Small Data\" approaches that require fewer training iterations, reducing the overall \"Compute-Hours\" required to reach a production-ready state." },
            ],
          },
        },
      ],
    },
  ],
};

const domainMeta = {
  d1: { label: "FINTECH",       color: "#1DBFA3", prefix: "FT"  },
  d2: { label: "AIOT & ROBOTICS", color: "#F0B429", prefix: "AIOT" },
  d3: { label: "CYBERSECURITY", color: "#E8698A", prefix: "CS"  },
  d4: { label: "SUSTAIN-DEV",   color: "#6B7C2D", prefix: "SD"  },
};

// ─── ASCII TABLE BUILDER ──────────────────────────────────────────────────────
function buildAsciiTable(headers, rows) {
  const allRows = [headers, ...rows];
  const colWidths = headers.map((_, ci) =>
    Math.max(...allRows.map((r) => (r[ci] || "").length))
  );

  const hr = (l, m, r, f) =>
    l + colWidths.map((w) => f.repeat(w + 2)).join(m) + r;

  const rowStr = (cells) =>
    "│ " +
    cells.map((c, i) => (c || "").padEnd(colWidths[i])).join(" │ ") +
    " │";

  return [
    hr("┌", "┬", "┐", "─"),
    rowStr(headers),
    hr("├", "┼", "┤", "─"),
    ...rows.map((r) => rowStr(r)),
    hr("└", "┴", "┘", "─"),
  ].join("\n");
}

// ─── SECTION RENDERER ─────────────────────────────────────────────────────────
function Section({ section, color }) {
  const isDoubleTable = section.type === "text+table+table";
  const isTableSection = section.type === "text+table" || isDoubleTable;

  return (
    <div style={styles.sectionBlock}>
      {/* Section header */}
      <div style={{ ...styles.sectionNum, color }}>
        {">> [ " + section.num + " ] " + section.label}
        <span style={styles.sectionLine} />
      </div>

      {/* Text — plain "text" type */}
      {section.type === "text" && section.content &&
        section.content.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}

      {/* Text before first table */}
      {isTableSection && (section.contentBefore || section.content) &&
        (section.contentBefore || section.content).split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}

      {/* First (or only) ASCII table */}
      {isTableSection && section.table && (
        <pre style={styles.asciiTable}>
          {buildAsciiTable(section.table.headers, section.table.rows)}
        </pre>
      )}

      {/* Text between tables (double-table only) */}
      {isDoubleTable && section.contentMiddle &&
        section.contentMiddle.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}

      {/* Second table (double-table only) */}
      {isDoubleTable && section.table2 && (
        <pre style={styles.asciiTable}>
          {buildAsciiTable(section.table2.headers, section.table2.rows)}
        </pre>
      )}

      {/* Text after table(s) */}
      {isTableSection && section.contentAfter && section.contentAfter.trim() &&
        section.contentAfter.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}

      {/* Deliverables */}
      {section.deliverables && section.deliverables.length > 0 && (
        <div style={styles.deliverablesBlock}>
          <div style={{ ...styles.deliverablesLabel, color }}>DELIVERABLES:</div>
          <ul style={styles.deliverablesList}>
            {section.deliverables.map((item, i) => (
              <li key={i} style={styles.deliverableItem}>
                <span style={{ ...styles.deliverableBullet, color }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Strategy block (SD domain) */}
      {section.strategy && (
        <div style={styles.strategyBlock}>
          <div style={{ ...styles.strategyTitle, color }}>{section.strategy.title}</div>
          <p style={styles.strategyIntro}>{section.strategy.intro}</p>
          <ol style={styles.strategyList}>
            {section.strategy.points.map((pt, i) => (
              <li key={i} style={styles.strategyItem}>
                <span style={{ ...styles.strategyLabel, color }}>{pt.label}:</span>
                {" "}{pt.text}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}


// ─── TERMINAL SCREEN ──────────────────────────────────────────────────────────
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

  useEffect(() => {
    setBootLine(0);
    setOpenId(null);
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
        <div style={styles.scanlines} />
        <div style={styles.vignette} />

        {/* Header */}
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

        {/* Body */}
        <div style={styles.termBody}>
          {/* Boot sequence */}
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
              <div style={styles.separator}>{"═".repeat(62)}</div>
              <div style={{ ...styles.domainTag, color: meta.color }}>
                ◈ DOMAIN :: {meta.label} ◈
              </div>
              <div style={styles.separator}>{"═".repeat(62)}</div>

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
                    <span style={styles.psTitle}>
                      {ps.title}
                    </span>
                    <span style={{ ...styles.psArrow, color: meta.color }}>
                      {openId === ps.id ? "▼" : "▶"}
                    </span>
                  </button>

                  {/* Expanded detail */}
                  <div
                    style={{
                      ...styles.psDetail,
                      maxHeight: openId === ps.id ? "9999px" : "0",
                      opacity: openId === ps.id ? 1 : 0,
                      paddingTop: openId === ps.id ? "12px" : "0",
                      paddingBottom: openId === ps.id ? "16px" : "0",
                    }}
                  >
                    <div style={styles.detailInner}>
                      {ps.sections.map((s) => (
                        <Section key={s.num} section={s} color={meta.color} />
                      ))}
                      <div style={styles.detailFooter}>
                        <span style={{ color: meta.color }}>
                          STATUS: ACTIVE
                        </span>
                        <span style={{ color: "rgba(0,255,70,0.4)" }}> | </span>
                        <span style={{ color: "rgba(0,255,70,0.5)" }}>
                          TRACK: {meta.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {idx < statements.length - 1 && (
                    <div style={styles.psDiv}>{"─".repeat(55)}</div>
                  )}
                </div>
              ))}

              <div style={styles.separator}>{"═".repeat(62)}</div>
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

// ─── DOMAINS GRID ─────────────────────────────────────────────────────────────
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
      name: "AIoT & Robotics",
      desc: "Build intelligent edge systems that fuse AI with physical sensors and actuators. From TinyML to computer vision, create solutions that sense, think, and act in the real world.",
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
    <section
      className="domains-section"
      id="domains"
      style={{ position: "relative" }}
    >
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
            <div style={termHint}>
              <span style={termHintDot}>█</span> VIEW PROBLEM STATEMENTS
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
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
    maxWidth: "900px",
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
    borderBottom: "1px solid rgba(0,255,70,0.25)",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexShrink: 0,
    position: "relative",
    zIndex: 11,
  },
  termDots: { display: "flex", gap: "6px" },
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
    position: "relative",
    zIndex: 11,
  },
  bootBlock: { marginBottom: "8px" },
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
  statementsBlock: { marginTop: "4px" },
  separator: {
    color: "rgba(0,255,70,0.25)",
    fontSize: "0.72rem",
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
  psRow: { marginBottom: "4px" },
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
    fontSize: "0.85rem",
    color: "#00ff46",
    letterSpacing: "1px",
    flex: 1,
  },
  psArrow: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    flexShrink: 0,
  },
  psDetail: {
    overflow: "hidden",
    transition: "max-height 0.5s ease, opacity 0.35s ease, padding 0.3s ease",
  },
  detailInner: {
    background: "rgba(0,255,70,0.04)",
    border: "1px solid rgba(0,255,70,0.12)",
    borderRadius: "4px",
    padding: "20px",
    marginLeft: "16px",
  },
  // ── Section styles ──
  sectionBlock: {
    marginBottom: "22px",
  },
  sectionNum: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "3px",
    marginBottom: "10px",
    textShadow: "0 0 8px currentColor",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sectionLine: {
    flex: 1,
    height: "1px",
    background: "rgba(0,255,70,0.18)",
    display: "inline-block",
  },
  sectionText: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.79rem",
    color: "rgba(0,255,70,0.8)",
    lineHeight: "1.9",
    letterSpacing: "0.4px",
    marginBottom: "10px",
  },
  asciiTable: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.71rem",
    color: "rgba(0,255,70,0.85)",
    lineHeight: "1.65",
    margin: "12px 0 4px",
    overflowX: "auto",
    whiteSpace: "pre",
    letterSpacing: "0.2px",
    padding: "2px 0",
  },
  detailFooter: {
    marginTop: "16px",
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "2px",
    borderTop: "1px solid rgba(0,255,70,0.1)",
    paddingTop: "12px",
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
  deliverablesBlock: {
    marginTop: "16px",
    paddingTop: "14px",
    borderTop: "1px solid rgba(0,255,70,0.12)",
  },
  deliverablesLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "3px",
    marginBottom: "10px",
    textShadow: "0 0 8px currentColor",
  },
  deliverablesList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  deliverableItem: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(0,255,70,0.8)",
    lineHeight: "1.9",
    letterSpacing: "0.4px",
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "4px",
  },
  deliverableBullet: {
    flexShrink: 0,
    fontSize: "0.65rem",
    marginTop: "3px",
    textShadow: "0 0 8px currentColor",
  },
  strategyBlock: {
    marginTop: "18px",
    paddingTop: "14px",
    borderTop: "1px solid rgba(0,255,70,0.12)",
  },
  strategyTitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "2px",
    fontWeight: "bold",
    marginBottom: "8px",
    textShadow: "0 0 8px currentColor",
  },
  strategyIntro: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(0,255,70,0.8)",
    lineHeight: "1.8",
    letterSpacing: "0.4px",
    marginBottom: "10px",
  },
  strategyList: {
    margin: 0,
    paddingLeft: "20px",
  },
  strategyItem: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.77rem",
    color: "rgba(0,255,70,0.75)",
    lineHeight: "1.9",
    letterSpacing: "0.3px",
    marginBottom: "6px",
  },
  strategyLabel: {
    fontWeight: "bold",
    textShadow: "0 0 6px currentColor",
  },
};

export default Domains;