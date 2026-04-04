import { useState, useEffect } from "react";

// ─── DATA STRUCTURE ────────────────────────────────────────────────────────────
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
              ["MiFID II", "Markets / Trading", "Best execution, trade reporting, transparency"],
              ["Basel III", "Capital / Banking", "Capital adequacy ratios, liquidity coverage"],
              ["AML / KYC", "Anti-money laundering", "Customer due diligence, suspicious tx reporting"],
              ["GDPR", "Data Privacy", "Consent management, data minimisation"],
            ],
          },
        },
      ],
    },
    {
      id: "FT-002",
      title: "Liquidity Risk Detection in Banking Systems",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "Liquidity risk — the inability of a bank to meet its short-term financial obligations without incurring unacceptable losses — was a core driver of the 2008 financial crisis and the 2023 SVB collapse. Traditional liquidity monitoring relies on static thresholds and end-of-day snapshots. Participants must build an AI-driven liquidity risk detection system that monitors intraday cash flows, models stress scenarios, predicts liquidity shortfalls up to 30 days ahead, and issues early warning signals before a bank breaches its Liquidity Coverage Ratio (LCR) or Net Stable Funding Ratio (NSFR) limits."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "Liquidity risk manifests across multiple time horizons and is driven by both internal cash flow patterns and external market conditions. A robust detection system must model all three risk dimensions simultaneously:",
          contentAfter: "The AI model should use time-series forecasting (LSTM, Transformer, or Prophet) on historical cash flow data, enriched with macroeconomic signals (interest rates, credit spreads, central bank liquidity ops). A stress-testing module must simulate idiosyncratic shocks (sudden deposit outflow) and systemic shocks (market-wide liquidity freeze) to quantify survival horizon — the number of days the bank can operate before breaching regulatory minimums.",
          table: {
            headers: ["Risk dimension", "Time horizon", "Key indicators", "Regulatory metric"],
            rows: [
              ["Funding liquidity", "Intraday – 30 days", "Cash outflow rate, deposit withdrawal spikes", "LCR"],
              ["Market liquidity", "Intraday – 7 days", "Bid-ask spreads, asset sale haircuts, repo rates", "NSFR"],
              ["Structural liquidity", "1 month – 1 year", "Loan-to-deposit ratio, wholesale funding dependency", "NSFR / ILAAP"]
            ]
          }
        },
      ]
    },
    {
      id: "FT-003",
      title: "AI System for Detecting Market Manipulation in High Frequency Trading",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "High Frequency Trading (HFT) accounts for over 50% of equity market volume globally. The speed and volume of HFT activity creates opportunities for sophisticated manipulation strategies — spoofing, layering, quote stuffing, and momentum ignition — that are nearly impossible for human analysts to detect in real time. Participants must build an AI system that ingests Level 2 order book data and trade feeds, identifies statistically anomalous patterns indicative of manipulation, classifies manipulation type, and generates regulatory-grade evidence packages within milliseconds of detection."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "HFT manipulation exploits the speed asymmetry between algorithmic traders and market surveillance systems. Each manipulation technique leaves a distinct statistical fingerprint in the order book that an AI system must learn to recognize under extreme time pressure (microsecond to millisecond resolution):",
          contentAfter: "The core technical challenge is the extreme class imbalance — manipulative events are rare relative to legitimate HFT activity — combined with the need for sub-second latency. Models must achieve high precision (to avoid drowning compliance teams in false alerts) while maintaining recall sufficient for regulatory defensibility. Graph neural networks or attention-based sequence models operating on order book snapshots are among the leading approaches.",
          table: {
            headers: ["Manipulation type", "Mechanism", "Order book signature"],
            rows: [
              ["Spoofing", "Place large orders to move price, cancel before execution", "High order-to-trade ratio; large orders vanishing within ms"],
              ["Layering", "Stack multiple fake orders at multiple price levels", "Asymmetric bid/ask depth that disappears on price approach"],
              ["Quote stuffing", "Flood exchange with orders to slow competitors' systems", "Sudden message rate spike with near-zero fill rates"],
              ["Momentum ignition", "Trigger other algos' stop-losses to create artificial momentum", "Rapid aggressive trades followed by immediate position reversal"]
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
            "The AI model should leverage Linear Programming (LP) or Reinforcement Learning (RL) to solve the multi-constraint optimization problem in real-time. By processing historical volatility and settlement data, the system should predict \"margin calls\" before they occur, allowing for proactive asset substitution.",
          table: {
            headers: ["Optimization Pillar", "Focus Area", "Key Decision Variable", "Efficiency Goal"],
            rows: [
              ["Inventory Rationalization", "Asset Eligibility", "Haircut levels & Concentration limits", "Minimize \"Liquidity Trap\" scenarios"],
              ["Margin Forecasting", "Predictive Analytics", "Initial Margin (IM) & Variation Margin (VM)", "Reduce buffer capital requirements"],
              ["Cost Minimization", "Cheapest-to-Deliver", "Opportunity cost of HQLA vs. Cash", "Maximize Return on Assets (RoA)"],
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
            "Counterparty Credit Risk (CCR) is the risk that a partner in a financial transaction — such as a derivative, repo, or foreign exchange contract — will default before the final settlement of the transaction's cash flows. Participants must build an AI-powered predictive system that integrates multi-source data (financial statements, market sentiment, and macroeconomic indicators) to estimate the Probability of Default (PD) in real-time.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Predicting counterparty default requires a shift from static, lagging credit scores to a forward-looking, high-frequency risk assessment. An effective AI solution must continuously evaluate the \"health\" of a counterparty across various data dimensions:",
          contentAfter:
            "The system should employ Ensemble Learning (XGBoost/Random Forest) for high-accuracy classification and Graph Neural Networks (GNN) to model the interconnectedness of counterparties, identifying \"hidden\" contagion paths.",
          table: {
            headers: ["Risk Category", "Data Input", "Predictive Output", "Regulatory / Risk Impact"],
            rows: [
              ["Financial Solvency", "Balance sheets, Cash flow, Debt-to-Equity ratios", "Distance-to-Default (DtD)", "Capital Adequacy (Basel III/IV)"],
              ["Market Sentiment", "Credit Default Swap (CDS) spreads, Stock volatility", "Market-implied PD", "Real-time CVA pricing"],
              ["Macroeconomic", "GDP growth, Interest rate hikes, Geopolitical news", "Systematic Risk Score", "Stress Testing & Scenarios"],
              ["Network Risk", "Interbank exposure, Contagion mapping", "Systemic Spillover probability", "Concentration Limit breach alerts"],
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
          num: "AIOT-001",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "India loses an estimated Rs 90,000 crore annually to plant diseases, yet most smallholder farmers lack access to agronomists or diagnostic labs. Participants must build a field-deployable IoT system that combines a low-cost camera module with environmental sensors to provide autonomous, on-device crop disease detection.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Crop disease detection in real-world farm conditions is often unreliable due to factors like lighting variations, physical leaf damage, and environmental noise, which can lead to incorrect predictions.",
          contentAfter:
            "Participants are expected to improve the reliability of such systems by leveraging additional contextual information and making more informed decisions under uncertain conditions. The solution should be practical for on-field deployment, considering constraints like cost, efficiency, and usability for smallholder farmers.",
          table: {
            headers: ["Aspect", "Description", "Objective"],
            rows: [
              ["Problem Context", "Disease detection fails under real-world inconsistencies", "Highlight limitations of ideal lab conditions"],
              ["Reliability Gap", "Predictions may be affected by noise and ambiguous inputs", "Encourage more dependable decision-making"],
              ["Context Usage", "Additional information can support better interpretation of observations", "Improve confidence in outputs"],
              ["Decision Making", "Handling uncertain or conflicting inputs effectively", "Reduce incorrect or unnecessary alerts"],
              ["Deployment Focus", "System must work in practical farm environments", "Ensure usability, affordability, and efficiency"]
            ],
          },
          deliverables: [
            "Live disease classification demo on real or printed leaf images",
            "Sensor-fused alert logic — show a case where contextual conditions influence alert decisions",
            "Notification demo with image + diagnosis message",
            "Model accuracy report with confusion matrix (min 75% accuracy on test set)"
          ],
        },
      ],
    },
    {
      id: "AIOT-002",
      title: "Edge AI Sound Classifier for Industrial Safety (Tiny ML)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Industrial accidents caused by undetected auditory signals — emergency sirens, glass breaks, or abnormal machine sounds — result in thousands of preventable injuries annually. Participants must train a TinyML sound classification model and deploy it onto a resource-constrained embedded device with an onboard microphone for real-time audio monitoring.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Detecting critical sound events in industrial environments is challenging due to background noise, overlapping signals, and varying acoustic conditions, which can lead to missed or incorrect detections.",
          contentAfter:
            "Participants are expected to design a system capable of reliably distinguishing between different types of audio signals under constrained computational resources. The challenge lies in balancing model accuracy, responsiveness, and efficiency within a resource-limited embedded environment, while ensuring the system remains practical for real-world deployment.",
          table: {
            headers: ["Aspect", "Description", "Objective"],
            rows: [
              ["Problem Context", "Industrial environments contain complex and noisy audio patterns", "Highlight challenges in real-world sound interpretation"],
              ["Detection Challenge", "Different sound events may overlap or resemble each other", "Ensure reliable differentiation between classes"],
              ["Resource Constraints", "Limited memory and processing capability on embedded devices", "Encourage efficient model design"],
              ["Real-time Response", "Timely detection is critical for safety-related events", "Minimize latency in decision-making"],
              ["Deployment Focus", "System must operate reliably in practical industrial settings", "Ensure robustness and usability"]
            ],
          },
          deliverables: [
            "4-class real-time inference demo — live audio classification on device",
            "Confusion matrix with minimum 80% overall accuracy across all classes",
            "Latency measurement — inference time in ms printed to serial monitor",
            "Edge vs cloud trade-off analysis: latency, privacy, and cost comparison"
          ],
        },
      ],
    },

    {
      id: "AIOT-003",
      title: "Blind Navigation Assistant with Obstacle + Object Detection",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "India has 15 million visually impaired people — the largest blind population in the world — yet affordable, intelligent assistive navigation technology remains largely inaccessible. Participants must build a wearable chest-mounted navigation assistant that provides real-time, fully offline guidance.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "Designing a reliable navigation assistant for visually impaired users is challenging due to dynamic environments, varying obstacle distances, and the need for immediate and accurate feedback to ensure user safety.",
          contentAfter:
            "Participants are expected to develop a system that can interpret surroundings and provide timely, intuitive guidance while operating entirely offline. The challenge lies in balancing responsiveness, accuracy, and usability, ensuring that the system remains practical, non-intrusive, and dependable in real-world scenarios.",
          table: {
            headers: ["Aspect", "Description", "Objective"],
            rows: [
              ["Problem Context", "Users navigate through dynamic and unpredictable environments", "Highlight real-world mobility challenges"],
              ["Safety Requirement", "System must detect and respond to nearby obstacles and hazards", "Ensure user safety through timely feedback"],
              ["Multi-range Awareness", "Different types of information are needed at varying distances", "Encourage comprehensive environmental understanding"],
              ["User Interaction", "Feedback must be intuitive and non-intrusive", "Enable seamless and safe user experience"],
              ["Deployment Focus", "System should be wearable and operate without external dependencies", "Ensure practicality, portability, and accessibility"]
            ],
          },
          deliverables: [
            "Live navigation demo through an obstacle course (minimum 5 obstacles)",
            "Object announcement demo — 5 distinct classes correctly identified and conveyed",
            "Latency + false-positive measurement report for system responsiveness",
            "Accessibility impact report — deployment scenario and cost analysis for Indian users"
          ],
        },
      ],
    },

    {
      "id": "AIOT-004",
      "title": "Predictive Maintenance System using Vibration + Edge AI",
      "sections": [
        {
          "num": "1",
          "label": "PROBLEM_STATEMENT",
          "type": "text",
          "content": "Industrial machines often exhibit subtle changes in vibration patterns before failure occurs. However, traditional maintenance approaches rely on periodic inspection or reactive repair after breakdown, leading to costly downtime, safety risks, and inefficient operations. Participants must design a real-time predictive maintenance system that uses vibration sensor data to detect early anomalies in machine behavior. The system should run on edge hardware, continuously monitor vibration signals, identify deviations from normal patterns, and trigger alerts before a potential failure occurs without relying on cloud processing."
        },
        {
          "num": "2",
          "label": "EXPLANATION",
          "type": "text+table",
          "contentBefore": "The system focuses on time-series signal analysis at the edge. Instead of waiting for visible failure, the system learns baseline vibration patterns of a machine and continuously compares incoming data against this baseline. Vibration data is captured using sensors such as MPU6050 or piezoelectric sensors and processed into meaningful statistical and frequency-domain features.",
          "contentAfter": "The primary challenge is distinguishing actual fault patterns from normal operational variations under noisy conditions. The system must operate within strict memory and compute limits while maintaining low latency and reliable detection.",
          "table": {
            "headers": ["Stage", "Input Signal", "Processing Method", "Output"],
            "rows": [
              ["Data Acquisition", "Vibration signal from sensor", "Continuous sampling (100–1000 Hz)", "Raw time-series data"],
              ["Signal Processing", "Raw waveform", "Feature extraction (RMS, FFT, variance)", "Feature vector"],
              ["Detection Model", "Feature vector", "Anomaly detection (TinyML / thresholding)", "Normal / anomaly classification"],
              ["Decision Engine", "Model output", "Threshold comparison and rule logic", "Trigger condition"],
              ["Alert System", "Anomaly detected", "LED / buzzer / dashboard notification", "Maintenance alert"]
            ]
          },
          "deliverables": [
            "Working prototype with live vibration monitoring",
            "Real-time anomaly detection demo showing normal vs faulty conditions",
            "Edge-deployed model or logic on microcontroller or Raspberry Pi",
            "Accuracy evaluation including false positives and true detections",
            "Latency measurement from signal capture to anomaly detection",
            "Brief report explaining feature extraction and detection approach"
          ]
        }
      ]
    },
    {
      "id": "AIOT-005",
      "title": "Digital Twin Dashboard for a Small Manufacturing Cell",
      "sections": [
        {
          "num": "1",
          "label": "PROBLEM_STATEMENT",
          "type": "text",
          "content": "Small-scale manufacturing systems often lack real-time monitoring and intelligent control, leading to inefficiencies, delayed fault detection, and reduced productivity. Participants must build a digital twin system that mirrors a physical manufacturing setup (such as a conveyor belt or robotic arm) in real time. The system should collect live sensor data, visualize it on a dashboard, and allow remote control of the physical system, enabling seamless synchronization between the physical and digital environments."
        },
        {
          "num": "2",
          "label": "EXPLANATION",
          "type": "text+table",
          "contentBefore": "The digital twin system integrates sensors, communication protocols, and visualization tools to create a real-time virtual representation of a physical system. Data from sensors is transmitted via MQTT to a processing layer, where it is visualized using dashboards such as Grafana and controlled via Node-RED.",
          "contentAfter": "The main challenge lies in ensuring low-latency synchronization, reliable communication, and accurate representation of physical states in the digital model.",
          "table": {
            "headers": ["Layer", "Physical Element", "Digital Tool", "Function"],
            "rows": [
              ["Sensing", "Temperature, vibration, speed sensors", "ESP32 data acquisition", "Capture real-time system parameters"],
              ["Communication", "WiFi module", "MQTT protocol", "Transmit data between physical and digital systems"],
              ["Processing", "Microcontroller logic", "Node-RED flows", "Handle data routing and logic"],
              ["Visualization", "—", "Grafana dashboard", "Display real-time metrics and trends"],
              ["Control", "Motors / actuators", "Dashboard controls", "Enable remote operation and commands"]
            ]
          },
          "deliverables": [
            "Functional mini manufacturing setup with sensors",
            "Real-time digital twin dashboard using Node-RED and Grafana",
            "Live sensor data visualization (temperature, speed, vibration, etc.)",
            "Remote control of physical system from dashboard",
            "Demonstration of real-time synchronization between physical and digital systems",
            "Historical data logging and playback",
            "System architecture and design report"
          ]
        }
      ]
    }
  ],
  d3: [
    {
      id: "CS-001",
      title: "Cookie Security Flags",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "Web applications use HTTP cookies to maintain session state and store user-specific data. When cookies are not configured with proper security flags, they become vulnerable to interception, theft, and cross-site attacks. This problem requires participants to identify missing or misconfigured cookie security attributes (HttpOnly, Secure, and SameSite) in a provided web application and demonstrate exploitable attack paths that arise from these misconfigurations."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "Cookie security flags control how browsers handle cookies during transmission and script execution. Three critical flags govern this behavior:",
          contentAfter: "A common attack chain: an attacker injects a script via XSS (possible because HttpOnly is absent), steals the session cookie, and replays it from a different machine.",
          table: {
            headers: ["Flag", "Purpose", "Missing impact"],
            rows: [
              ["HttpOnly", "Blocks JavaScript access to the cookie", "XSS payloads can steal session tokens via document.cookie"],
              ["Secure", "Restricts cookie to HTTPS connections only", "Cookie transmitted in plaintext over HTTP, visible to network sniffers"],
              ["SameSite", "Controls cross-origin cookie sending (Strict/Lax/None)", "CSRF attacks can forge authenticated requests from external sites"]
            ]
          }
        },
      ]
    },
    {
      id: "CS-002",
      title: "Broken Object Level Authorization (BOLA)",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "Modern REST APIs expose resources via object identifiers in URLs (e.g., /api/orders/1042). Broken Object Level Authorization (BOLA) — also known as Insecure Direct Object Reference (IDOR) — occurs when the server fails to verify that the requesting user actually owns or has permission to access the requested object."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "BOLA is ranked #1 in the OWASP API Security Top 10 because it is pervasive and often simple to exploit. The root cause is trusting the client-supplied object ID without verifying ownership on the server side.",
          contentAfter: "The fix is not client-side validation. The server must compare the object's owner field against the authenticated user's identity on every request.",
          table: {
            headers: ["Scenario", "Request", "Vulnerable response"],
            rows: [
              ["Read another user's record", "GET /api/users/9/profile", "200 OK — returns victim data"],
              ["Modify another user's order", "PUT /api/orders/301 {status:cancelled}", "200 OK — order cancelled"],
              ["Delete another user's file", "DELETE /api/files/88", "204 No Content — file deleted"]
            ]
          }
        },
      ]
    },
    {
      id: "CS-003",
      title: "CSRF Mitigation in Modern JSON-based APIs",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "Cross-Site Request Forgery (CSRF) is increasingly relevant in modern JSON-based APIs used by SPAs and mobile applications. Participants must design and implement a defense engine that validates request authenticity, enforces strict content-type policies, applies secure CORS configurations, and integrates cryptographic CSRF tokens and SameSite cookie protections."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "Mitigating CSRF in JSON APIs requires a defense-in-depth approach beyond simple origin checks.",
          contentAfter: "The system should also include heuristic analysis and behavioral fingerprinting to detect anomalies.",
          table: {
            headers: ["Attack Vector", "Vulnerability Mechanism", "Mitigation Strategy", "Security Impact"],
            rows: [
              ["Simple Request Bypass", "Exploiting text/plain or form-encoded payloads parsed as JSON", "Strict Content-Type enforcement & schema validation", "Prevents unintended parsing of forged requests"],
              ["CORS Misconfiguration", "Overly permissive Access-Control-Allow-Origin", "Dynamic whitelist validation & credential-restricted origins", "Stops unauthorized domains from accessing data"],
              ["Token Hijacking", "Predictable or long-lived session tokens", "Double Submit Cookies or synchronizer token pattern", "Ensures request authenticity per session"],
              ["Ambient Auth Abuse", "Browser-managed cookies auto-attached to requests", "Custom headers + SameSite=Strict cookies", "Decouples browser state from API execution"]
            ]
          }
        }
      ]
    },
    {
      id: "CS-004",
      title: "JWT Algorithm Confusion and Key Manipulation",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "JSON Web Tokens (JWTs) are widely used for stateless authentication, but improper validation can lead to critical vulnerabilities such as algorithm confusion and key manipulation. Participants must implement a hardened JWT validation engine that enforces strict algorithm pinning, validates key integrity, prevents header injection attacks, and detects misuse such as 'none' algorithm exploits in real time."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "Algorithm confusion arises when the server trusts client-supplied JWT headers without enforcing expected cryptographic constraints.",
          contentAfter: "A robust solution requires a positive security model with strict algorithm allowlists, trusted key sources, and validation of critical claims like exp, nbf, and iss.",
          table: {
            headers: ["Attack Vector", "Vulnerability Mechanism", "Mitigation Strategy", "Security Impact"],
            rows: [
              ["Algorithm Downgrade", "Switching RS256 to HS256 using public key as secret", "Explicit algorithm pinning in verification logic", "Prevents signature forgery via key confusion"],
              ["\"None\" Algorithm Exploit", "Setting alg to 'none' to bypass signature checks", "Strict rejection of unsigned tokens", "Ensures all tokens are cryptographically verified"],
              ["KID/JWK Injection", "Manipulating key ID to reference malicious key source", "Key ID whitelisting and header sanitization", "Prevents directory traversal and malicious key loading"],
              ["Key Confusion", "Using incorrect key types or lengths", "Pre-validation of key type and size", "Avoids verification bypass due to weak/mismatched keys"]
            ]
          }
        }
      ]
    },
    {
      id: "CS-005",
      title: "SSRF with Redirects",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content: "Server-Side Request Forgery (SSRF) occurs when an attacker causes the server to make HTTP requests to an unintended destination — typically an internal service unreachable from the internet. Participants must exploit this chained vulnerability, reach a simulated cloud metadata endpoint, and implement defense-in-depth mitigations that survive redirect chains."
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore: "A basic SSRF defense blocklists internal IP ranges (10.x, 192.168.x, 169.254.x). An attacker defeats this by supplying a URL on an allowlisted external domain that immediately 302-redirects to the internal target.",
          contentAfter: "A robust fix combines: (1) an allowlist of permitted destinations with final-URL re-verification after any redirects, (2) blocking all link-local and private IP ranges post-resolution.",
          table: {
            headers: ["Bypass technique", "Mechanism", "Mitigated by"],
            rows: [
              ["Open redirect chain", "Allowed domain → 302 → internal IP", "Resolve final URL before allowlist check"],
              ["DNS rebinding", "Domain resolves to public IP at check, internal IP at fetch", "Pin DNS resolution; re-verify post-connect IP"],
              ["Protocol switch", "http:// → file:// or gopher:// in redirect", "Allowlist only http/https; block scheme changes"],
              ["Decimal / octal IP", "http://2130706433/ equals 127.0.0.1", "Canonicalize IP before blocklist comparison"]
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
            "The ACFIS is a next-generation framework designed to automate the lifecycle of carbon accounting within industrial ecosystems. Participants must analyze the integration of AI-driven forecasting and Blockchain-backed auditing to ensure that carbon credits are representative of true environmental savings.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The intelligence of ACFIS is derived from its ability to correlate industrial output with environmental cost. Unlike traditional reporting, which is often retrospective and prone to error, an autonomous system uses a Continuous Verification Loop.",
          table: {
            headers: ["Intelligence Module", "Core Function", "Sustainability Impact"],
            rows: [
              ["Real-Time Emission Telemetry", "Automated ingestion of NOₓ, CO₂, and CH₄ data from IoT edge devices.", "Eliminates manual reporting lag and \"greenwashing\" data gaps."],
              ["Geo-Fenced Asset Tracking", "Linking emission data to specific geographic \"Green Zones\" or high-impact areas.", "Enables localized environmental policy enforcement and precision auditing."],
              ["Predictive Decarbonization", "AI models that forecast peak emission periods based on production schedules.", "Allows for proactive energy shifting to off-peak, renewable-heavy hours."],
              ["Immutable Ledger Integration", "Cryptographic anchoring of footprint data onto a distributed ledger (Blockchain).", "Provides a \"Single Source of Truth\" for international carbon credit trading."],
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
            "Industrial waste management is a reactive process, where environmental damage is often only identified after catastrophic leakage or chemical runoff occurs. Participants must analyze the integration of Deep Learning models for anomaly detection and Predictive Modeling to identify the exact thresholds where routine industrial waste disposal escalates into an environmental emergency.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The core challenge in predicting industrial disasters lies in the \"Cascade Effect.\" A single chemical leak might be manageable, but when combined with specific environmental variables it can lead to irreversible ecosystem collapse.",
          table: {
            headers: ["Predictive Indicator", "Data Source", "Disaster Significance"],
            rows: [
              ["Chemical Concentration Spikes", "Effluent IoT sensors (pH, Heavy Metals, TDS).", "Identifies breach of safe operational limits in real-time."],
              ["Hydrological Correlation", "Local weather stations and groundwater flow models.", "Predicts the speed and direction of toxic plume migration."],
              ["Structural Integrity Monitoring", "Acoustic and seismic sensors on waste dams/pipelines.", "Detects micro-fractures that precede a catastrophic containment failure."],
              ["Anomaly Detection (AI)", "Historical discharge vs. Current output patterns.", "Flags \"silent\" leaks or intentional illegal dumping during off-hours."],
            ],
          },
          strategy: {
            title: "Predictive Implementation Strategy",
            intro: "To ensure the system provides actionable intelligence, ASP-EDIW must incorporate:",
            points: [
              { label: "Threshold-Based Alerting", text: "Dynamic alerting systems that adjust sensitivity based on the proximity of industrial sites to \"High-Sensitivity Zones\"." },
              { label: "Early-Warning Propagation", text: "Automated communication protocols that notify local environmental agencies and downstream communities." },
              { label: "Simulation Loop", text: "A digital-twin environment that constantly runs \"What-If\" scenarios to refine the AI's predictive accuracy." },
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
            "The integration of variable renewable energy (VRE) sources like solar and wind introduces \"Renewable Energy Chaos\" — unpredictable fluctuations in power supply that can destabilize traditional electrical grids. Participants must analyze the Reinforcement Learning (RL) models and Distributed Energy Resource (DER) protocols required to maintain grid equilibrium amidst high-penetration renewable instability.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The fundamental challenge of a renewable-heavy grid is the \"Duck Curve\" and the \"Intermittency Gap.\" The S-OSG functions as a digital nervous system, treating every household solar panel and industrial battery as a controllable node.",
          table: {
            headers: ["Optimization Vector", "Operational Mechanism", "Grid Stability Impact"],
            rows: [
              ["Demand-Side Response", "AI-driven throttling of non-essential industrial loads during supply dips.", "Prevents brownouts by \"shaving\" peak demand in milliseconds."],
              ["Virtual Power Plants (VPP)", "Aggregating thousands of small-scale residential batteries into a single resource.", "Creates a massive \"buffer\" to absorb sudden renewable surges."],
              ["Frequency Regulation", "High-speed monitoring of Hz levels with sub-second correction.", "Prevents catastrophic equipment damage caused by power quality swings."],
              ["Weather-to-Load Forecasting", "Correlating satellite cloud-cover data with localized energy consumption.", "Pre-emptively charges storage before predicted \"Renewable Lulls.\""],
            ],
          },
          strategy: {
            title: "Self-Optimization Strategy",
            intro: "To manage a chaotic energy landscape, the S-OSG architecture prioritizes:",
            points: [
              { label: "Decentralized Control", text: "Moving away from a central \"Command and Control\" center to edge-computing nodes that can make local balancing decisions." },
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
            "The global transition from a \"take-make-dispose\" linear model to a circular economy is hindered by the fragmentation of waste supply chains across international borders. Participants must bridge the gap between waste generation and remanufacturing, utilizing Digital Product Passports (DPP) and Reverse Logistics AI to ensure that materials remain in a closed-loop system indefinitely.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The intelligence behind a circular supply chain relies on the \"Material Fingerprint.\" The system uses a Circularity Intelligence Matrix to transform discarded products back into industrial feedstocks.",
          table: {
            headers: ["Circularity Driver", "Technical Mechanism", "Supply Chain Impact"],
            rows: [
              ["Digital Product Passport", "Blockchain-based ledger recording material origin and toxicity data.", "Enables border-crossing \"Waste-to-Resource\" certification."],
              ["Reverse Logistics AI", "Automated routing for \"Product-as-a-Service\" and take-back schemes.", "Reduces the carbon overhead of returning used goods to factories."],
              ["Material Composition AI", "Spectroscopic analysis to identify pure vs. contaminated waste streams.", "Increases the purity (and market value) of recycled secondary raw materials."],
              ["Value-Retention Tracking", "Real-time monitoring of product \"Utility\" and \"Lifetime\" extension.", "Prioritizes Refurbishment and Reuse over energy-intensive recycling."],
            ],
          },
          strategy: {
            title: "Circular Integration Strategy",
            intro: "To operationalize global waste intelligence, the CEI-GWSC framework focuses on:",
            points: [
              { label: "Cradle-to-Cradle Design", text: "Integrating end-of-life intelligence into the initial CAD/CAM design phase to ensure products are physically \"easy to harvest.\"" },
              { label: "Decentralized Recovery Hubs", text: "Using AI to identify optimal regional locations for \"Micro-Remanufacturing\" centers, reducing the need for long-distance waste transport." },
              { label: "Transparency & Ethics", text: "Ensuring that global waste flows do not result in \"waste colonialism\" by using cryptographic proof-of-recovery to verify ethical labor and environmental standards." },
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
            "As AI models grow exponentially in complexity, their environmental cost — measured in Megawatt-hours (MWh) and CO₂ equivalents — has become a critical barrier to sustainable digital transformation. S-AIM is a framework designed to treat Energy Efficiency as a primary objective rather than a secondary constraint.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          contentBefore:
            "The sustainability of an AI system is determined by its lifecycle energy footprint, which is split between the Training Phase (one-time high intensity) and the Inference Phase (continuous daily usage).",
          table: {
            headers: ["Efficiency Lever", "Technical Implementation", "Sustainability Benefit"],
            rows: [
              ["Model Pruning & Quantization", "Removing redundant neurons and reducing weight precision (e.g., FP32 to INT8).", "Decreases memory footprint and energy used per inference by 30–70%."],
              ["Knowledge Distillation", "Training a compact \"Student\" model to mimic a massive \"Teacher\" model.", "Retains high accuracy while running on low-power edge hardware."],
              ["Carbon-Aware Scheduling", "Automating training to run during hours when the local grid is powered by renewables.", "Minimizes the CO₂ intensity of the model's development lifecycle."],
              ["Early-Exit Architectures", "Allowing the model to stop processing once a high-confidence prediction is reached.", "Reduces cumulative \"FLOPs\" (Floating Point Operations) during real-time use."],
            ],
          },
          strategy: {
            title: "Sustainable Implementation Strategy",
            intro: "To build a truly Green AI ecosystem, the S-AIM framework prioritizes:",
            points: [
              { label: "Metric Transparency", text: "Moving from reporting \"Accuracy\" to reporting \"Accuracy-per-kg-CO₂,\" ensuring that the environmental cost of every decimal point of progress is visible." },
              { label: "Hardware-Software Co-Design", text: "Optimizing algorithms specifically for energy-efficient accelerators like TPUs or specialized NPU chips rather than general-purpose GPUs." },
              { label: "Data Minimalism", text: "Shifting toward \"Small Data\" approaches that require fewer training iterations, reducing the overall \"Compute-Hours\" required to reach a production-ready state." },
            ],
          },
        },
      ],
    },
  ],
};

const domainMeta = {
  d1: { label: "FINTECH", color: "#1DBFA3", prefix: "FT" },
  d2: { label: "AIOT & ROBOTICS", color: "#F0B429", prefix: "AIOT" },
  d3: { label: "CYBERSECURITY", color: "#E8698A", prefix: "CS" },
  d4: { label: "SUSTAIN-DEV", color: "#6B7C2D", prefix: "SD" },
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
    "│ " + cells.map((c, i) => (c || "").padEnd(colWidths[i])).join(" │ ") + " │";
  return [
    hr("┌", "┬", "┐", "─"),
    rowStr(headers),
    hr("├", "┼", "┤", "─"),
    ...rows.map((r) => rowStr(r)),
    hr("└", "┴", "┘", "─"),
  ].join("\n");
}

// ─── DOWNLOAD GENERATOR ──────────────────────────────────────────────────────
function generateDownloadHTML(domainId) {
  const statements = problemStatements[domainId];
  const meta = domainMeta[domainId];

  const renderSectionHTML = (section) => {
    const isDoubleTable = section.type === "text+table+table";
    const isTableSection = section.type === "text+table" || isDoubleTable;

    const renderText = (text) =>
      text
        ? text
          .split("\n\n")
          .map((p) => `<p class="body-text">${p.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>`)
          .join("")
        : "";

    const renderTable = (table) =>
      table
        ? `<pre class="ascii-table">${buildAsciiTable(table.headers, table.rows)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</pre>`
        : "";

    const renderDeliverables = (deliverables) =>
      deliverables && deliverables.length
        ? `<div class="deliverables-block">
            <div class="deliverables-label">DELIVERABLES:</div>
            <ul class="deliverables-list">
              ${deliverables.map((d) => `<li><span class="bullet">◆</span>${d}</li>`).join("")}
            </ul>
          </div>`
        : "";

    const renderStrategy = (strategy) =>
      strategy
        ? `<div class="strategy-block">
            <div class="strategy-title">${strategy.title}</div>
            <p class="body-text">${strategy.intro}</p>
            <ol class="strategy-list">
              ${strategy.points
          .map(
            (pt) =>
              `<li><span class="strategy-label">${pt.label}:</span> ${pt.text}</li>`
          )
          .join("")}
            </ol>
          </div>`
        : "";

    return `
      <div class="section-block">
        <div class="section-header">&gt;&gt; [ ${section.num} ] ${section.label}</div>
        ${section.type === "text" ? renderText(section.content) : ""}
        ${isTableSection ? renderText(section.contentBefore || section.content) : ""}
        ${isTableSection ? renderTable(section.table) : ""}
        ${isDoubleTable ? renderText(section.contentMiddle) : ""}
        ${isDoubleTable ? renderTable(section.table2) : ""}
        ${isTableSection && section.contentAfter ? renderText(section.contentAfter) : ""}
        ${renderDeliverables(section.deliverables)}
        ${renderStrategy(section.strategy)}
      </div>`;
  };

  const problemsHTML = statements
    .map(
      (ps) => `
    <div class="problem-block">
      <div class="problem-header">
        <span class="problem-id">[${ps.id}]</span>
        <span class="problem-title">${ps.title}</span>
      </div>
      ${ps.sections.map(renderSectionHTML).join("")}
    </div>`
    )
    .join(`<div class="divider">${"─".repeat(70)}</div>`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>HACKATHON :: ${meta.label} Problem Statements</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --accent: ${meta.color};
      --bg: #060c06;
      --surface: #0a110a;
      --green: #00ff46;
      --green-dim: rgba(0,255,70,0.6);
      --green-faint: rgba(0,255,70,0.12);
      --mono: 'Share Tech Mono', monospace;
    }

    body {
      background: var(--bg);
      color: var(--green);
      font-family: var(--mono);
      padding: 40px 24px;
      min-height: 100vh;
      line-height: 1.7;
    }

    /* scanlines */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: repeating-linear-gradient(
        0deg, transparent, transparent 2px,
        rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px
      );
      pointer-events: none;
      z-index: 9999;
    }

    .page-wrapper {
      max-width: 900px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .page-header {
      border: 1px solid var(--accent);
      padding: 24px 32px;
      margin-bottom: 32px;
      background: var(--surface);
      position: relative;
    }
    .page-header::before {
      content: 'HACKATHON_TERMINAL — OFFLINE_COPY';
      position: absolute;
      top: -10px; left: 20px;
      background: var(--bg);
      padding: 0 8px;
      font-size: 0.65rem;
      letter-spacing: 3px;
      color: var(--green-dim);
    }
    .header-domain {
      font-size: 1.4rem;
      letter-spacing: 6px;
      color: var(--accent);
      text-shadow: 0 0 16px var(--accent);
      margin-bottom: 8px;
    }
    .header-meta {
      font-size: 0.7rem;
      letter-spacing: 2px;
      color: var(--green-dim);
    }
    .header-count {
      font-size: 0.75rem;
      letter-spacing: 2px;
      color: var(--green-dim);
      margin-top: 6px;
    }

    /* ── Problem blocks ── */
    .problem-block {
      background: var(--surface);
      border: 1px solid var(--green-faint);
      border-left: 3px solid var(--accent);
      padding: 24px 28px;
      margin-bottom: 20px;
    }
    .problem-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--green-faint);
    }
    .problem-id {
      font-size: 0.72rem;
      letter-spacing: 1px;
      color: var(--accent);
      text-shadow: 0 0 8px var(--accent);
      flex-shrink: 0;
    }
    .problem-title {
      font-size: 0.92rem;
      letter-spacing: 1px;
      color: var(--green);
    }

    /* ── Section ── */
    .section-block { margin-bottom: 22px; }
    .section-header {
      font-size: 0.68rem;
      letter-spacing: 3px;
      color: var(--accent);
      text-shadow: 0 0 8px var(--accent);
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--green-faint);
    }
    .body-text {
      font-size: 0.79rem;
      color: rgba(0,255,70,0.82);
      line-height: 1.9;
      letter-spacing: 0.4px;
      margin-bottom: 10px;
    }

    /* ── ASCII Table ── */
    .ascii-table {
      font-family: var(--mono);
      font-size: 0.69rem;
      color: rgba(0,255,70,0.88);
      line-height: 1.65;
      margin: 14px 0;
      overflow-x: auto;
      white-space: pre;
      letter-spacing: 0.2px;
    }

    /* ── Deliverables ── */
    .deliverables-block {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid var(--green-faint);
    }
    .deliverables-label {
      font-size: 0.68rem;
      letter-spacing: 3px;
      color: var(--accent);
      text-shadow: 0 0 8px var(--accent);
      margin-bottom: 10px;
    }
    .deliverables-list {
      list-style: none;
    }
    .deliverables-list li {
      font-size: 0.78rem;
      color: rgba(0,255,70,0.8);
      line-height: 1.9;
      letter-spacing: 0.4px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 4px;
    }
    .bullet {
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ── Strategy ── */
    .strategy-block {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--green-faint);
    }
    .strategy-title {
      font-size: 0.75rem;
      letter-spacing: 2px;
      color: var(--accent);
      text-shadow: 0 0 8px var(--accent);
      margin-bottom: 8px;
    }
    .strategy-list {
      padding-left: 20px;
    }
    .strategy-list li {
      font-size: 0.77rem;
      color: rgba(0,255,70,0.75);
      line-height: 1.9;
      letter-spacing: 0.3px;
      margin-bottom: 6px;
    }
    .strategy-label {
      color: var(--accent);
      font-weight: bold;
    }

    /* ── Divider ── */
    .divider {
      color: rgba(0,255,70,0.1);
      font-size: 0.7rem;
      overflow: hidden;
      white-space: nowrap;
      margin: 8px 0 20px;
    }

    /* ── Footer ── */
    .page-footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid var(--green-faint);
      font-size: 0.68rem;
      letter-spacing: 2px;
      color: var(--green-dim);
      display: flex;
      justify-content: space-between;
    }

    @media print {
      body::before { display: none; }
      .problem-block { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="header-domain">◈ ${meta.label} ◈</div>
      <div class="header-meta">DOMAIN :: ${meta.label} &nbsp;|&nbsp; PREFIX :: ${meta.prefix}</div>
      <div class="header-count">${statements.length} PROBLEM STATEMENTS — OFFLINE COPY</div>
    </div>

    ${problemsHTML}

    <div class="page-footer">
      <span>HACKATHON_TERMINAL — OFFLINE EXPORT</span>
      <span>TRACK: ${meta.label} &nbsp;|&nbsp; STATUS: ACTIVE</span>
    </div>
  </div>
</body>
</html>`;
}

// ─── SECTION RENDERER ─────────────────────────────────────────────────────────
function Section({ section, color }) {
  const isDoubleTable = section.type === "text+table+table";
  const isTableSection = section.type === "text+table" || isDoubleTable;

  return (
    <div style={styles.sectionBlock}>
      <div style={{ ...styles.sectionNum, color }}>
        {">> [ " + section.num + " ] " + section.label}
        <span style={styles.sectionLine} />
      </div>
      {section.type === "text" && section.content &&
        section.content.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}
      {isTableSection && (section.contentBefore || section.content) &&
        (section.contentBefore || section.content).split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}
      {isTableSection && section.table && (
        <pre style={styles.asciiTable}>
          {buildAsciiTable(section.table.headers, section.table.rows)}
        </pre>
      )}
      {isDoubleTable && section.contentMiddle &&
        section.contentMiddle.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}
      {isDoubleTable && section.table2 && (
        <pre style={styles.asciiTable}>
          {buildAsciiTable(section.table2.headers, section.table2.rows)}
        </pre>
      )}
      {isTableSection && section.contentAfter && section.contentAfter.trim() &&
        section.contentAfter.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>{para.trim()}</p>
        ))}
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
  const [downloading, setDownloading] = useState(false);

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

  const handleDownload = () => {
    setDownloading(true);
    try {
      const html = generateDownloadHTML(domainId);
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `hackathon_${meta.prefix.toLowerCase()}_problems.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Download failed", e);
    }
    setTimeout(() => setDownloading(false), 1200);
  };

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
          <span className="term-title" style={styles.termTitle}>
            HACKATHON_TERMINAL — {meta.label}_PROBLEMS.db
          </span>

          {/* Download button — only visible after boot */}
          {bootLine >= bootLines.length && (
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{
                ...styles.downloadBtn,
                borderColor: meta.color,
                color: meta.color,
                boxShadow: downloading ? `0 0 12px ${meta.color}55` : "none",
              }}
              title={`Download all ${meta.label} problems as offline HTML`}
            >
              {downloading ? "SAVING…" : "[EXPORT]"}
            </button>
          )}

          <button onClick={onClose} style={styles.closeBtn}>
            [ESC]
          </button>
        </div>

        {/* Body */}
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
              <div style={styles.separator}>{"═".repeat(62)}</div>
              <div style={{ ...styles.domainTag, color: meta.color }}>
                ◈ DOMAIN :: {meta.label} ◈
              </div>
              <div style={styles.separator}>{"═".repeat(62)}</div>

              {statements.map((ps, idx) => (
                <div key={ps.id} style={styles.psRow}>
                  <button
                    style={styles.psTitleRow}
                    onClick={() => setOpenId(openId === ps.id ? null : ps.id)}
                  >
                    <span style={{ ...styles.psId, color: meta.color }}>
                      [{ps.id}]
                    </span>
                    <span style={styles.psTitle}>{ps.title}</span>
                    <span style={{ ...styles.psArrow, color: meta.color }}>
                      {openId === ps.id ? "▼" : "▶"}
                    </span>
                  </button>

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
                        <span style={{ color: meta.color }}>STATUS: ACTIVE</span>
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

              {/* Bottom export hint */}
              <div style={styles.exportHint}>
                <span style={{ color: "rgba(0,255,70,0.35)" }}>
                  TIP: Use{" "}
                </span>
                <span style={{ color: meta.color }}>[EXPORT]</span>
                <span style={{ color: "rgba(0,255,70,0.35)" }}>
                  {" "}in the header to download all {statements.length} problems as a
                  self-contained offline HTML file.
                </span>
              </div>
              {domainId === "d2" && (
                <div style={styles.exportHint}>
                  <span style={{ color: meta.color }}>
      NOTE: THE COMPONENTS MENTIONED ARE JUST EXAMPLES — YOU'RE FREE TO USE WHATEVER YOU'RE COMFORTABLE WITH. NO RESTRICTIONS!                  </span>
                </div>
              )}

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
      isNew: true,
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
            {/* 🔥 NEW TAG goes HERE */}
            {d.isNew && (
              <div style={styles.newTag}>NEW</div>
            )}

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
    gap: "8px",
    flexShrink: 0,
    position: "relative",
    zIndex: 11,
    flexWrap: "wrap",
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
    minWidth: 0,
    textOverflow: "ellipsis",
    fontSize: "0.65rem",
    whiteSpace: "nowrap",
    color: "rgba(0,255,70,0.5)",
    fontSize: "0.72rem",
    letterSpacing: "2px",
    textAlign: "center",

  },
  downloadBtn: {
    background: "none",
    border: "1px solid",
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "2px",
    padding: "3px 12px",
    cursor: "pointer",
    borderRadius: "3px",
    transition: "all 0.2s",
    flexShrink: 0,
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
  newTag: {
    position: "absolute",
    top: "12px",
    right: "12px", // ✅ move to left
    fontSize: "0.65rem",
    letterSpacing: "2px",
    padding: "4px 10px",
    border: "1px solid #f4ebd0",
    color: "#f4ebd0", // ✅ your color
    background: "rgba(0,0,0,0.35)", // ✅ contrast boost
    fontFamily: "'Share Tech Mono', monospace",
    backdropFilter: "blur(2px)",
    background: "transparent",
    border: "1px solid rgba(244,235,208,0.6)",
    animation: "blink 1.2s infinite",
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
  sectionBlock: { marginBottom: "22px" },
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
  exportHint: {
    margin: "10px 0 14px",
    fontSize: "0.68rem",
    letterSpacing: "1px",
    lineHeight: "1.7",
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
  deliverablesList: { listStyle: "none", margin: 0, padding: 0 },
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
  strategyList: { margin: 0, paddingLeft: "20px" },
  strategyItem: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.77rem",
    color: "rgba(0,255,70,0.75)",
    lineHeight: "1.9",
    letterSpacing: "0.3px",
    marginBottom: "6px",
  },
  strategyLabel: { fontWeight: "bold", textShadow: "0 0 6px currentColor" },

};


export default Domains;