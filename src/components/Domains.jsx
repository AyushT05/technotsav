import { useState, useEffect } from "react";

// ─── DATA STRUCTURE ────────────────────────────────────────────────────────────
// Each problem has: id, title, difficulty, sections[]
// Section types: "text" | "text+table" | "table"
// Each section: { num, label, type, content?, table?: { headers[], rows[][] } }

const problemStatements = {
  d1: [
    {
      id: "FT-001",
      title: "AI-Powered Regulatory Compliance Monitoring",
      difficulty: "Medium",
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
          content:
            "Regulatory compliance monitoring involves two interlinked challenges: regulatory intelligence (understanding what rules apply and how they change) and transaction surveillance (checking whether each transaction adheres to those rules). An AI system must bridge both using NLP for rule extraction and ML classifiers for transaction screening.\n\nThe system should use NLP/LLM techniques to parse regulatory text and extract enforceable rules as structured data. A rules engine then evaluates incoming transactions against the extracted rules, scores violation probability, and routes high-risk cases to a compliance officer dashboard. The system must handle regulatory updates incrementally — without a full pipeline restart.",
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
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Rule extraction accuracy",      "NLP precision/recall on enforceable rules",        "20%"],
              ["2", "Real-time tx flagging",         "Correct violation rate, low false-positives",      "25%"],
              ["3", "Audit report quality",          "Structured, traceable to regulatory clauses",      "20%"],
              ["4", "Regulatory update handling",    "Adapts to new/amended rule without retraining",    "20%"],
              ["5", "Explainability",                "Each flag cites specific rule + evidence trail",   "15%"],
            ],
          },
        },
      ],
    },
{
  "id": "FT-002",
  "title": "Liquidity Risk Detection in Banking Systems",
  "difficulty": "Medium",
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
      "content": "Liquidity risk manifests across multiple time horizons and is driven by both internal cash flow patterns and external market conditions. A robust detection system must model all three risk dimensions simultaneously. The AI model should use time-series forecasting (LSTM, Transformer, or Prophet) on historical cash flow data, enriched with macroeconomic signals (interest rates, credit spreads, central bank liquidity ops). A stress-testing module must simulate idiosyncratic shocks (sudden deposit outflow) and systemic shocks (market-wide liquidity freeze) to quantify survival horizon — the number of days the bank can operate before breaching regulatory minimums.",
      "table": {
        "headers": ["Risk dimension", "Time horizon", "Key indicators", "Regulatory metric"],
        "rows": [
          ["Funding liquidity", "Intraday – 30 days", "Cash outflow rate, deposit withdrawal spikes", "LCR"],
          ["Market liquidity", "Intraday – 7 days", "Bid-ask spreads, asset sale haircuts, repo rates", "NSFR"],
          ["Structural liquidity", "1 month – 1 year", "Loan-to-deposit ratio, wholesale funding dependency", "NSFR / ILAAP"]
        ]
      }
    },
    {
      "num": "3",
      "label": "JUDGING_CRITERIA",
      "type": "table",
      "table": {
        "headers": ["#", "Criterion", "Description", "Weight"],
        "rows": [
          ["1", "Forecast accuracy", "MAE/RMSE of 30-day liquidity shortfall predictions vs held-out data", "25%"],
          ["2", "Early warning precision", "Lead time of LCR/NSFR breach warnings; false alarm rate minimized", "25%"],
          ["3", "Stress scenario coverage", "Idiosyncratic and systemic shocks both modeled with survival horizon output", "20%"],
          ["4", "Regulatory metric alignment", "Correct LCR and NSFR computation from input cash flow data", "15%"],
          ["5", "Dashboard usability", "Risk officers can drill into contributing factors for each alert", "15%"]
        ]
      }
    }
  ]
},
 {
  "id": "FT-003",
  "title": "AI System for Detecting Market Manipulation in High Frequency Trading",
  "difficulty": "Hard",
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
      "content": "HFT manipulation exploits the speed asymmetry between algorithmic traders and market surveillance systems. Each manipulation technique leaves a distinct statistical fingerprint in the order book that an AI system must learn to recognize under extreme time pressure (microsecond to millisecond resolution). The core technical challenge is the extreme class imbalance — manipulative events are rare relative to legitimate HFT activity — combined with the need for sub-second latency. Models must achieve high precision (to avoid drowning compliance teams in false alerts) while maintaining recall sufficient for regulatory defensibility. Graph neural networks or attention-based sequence models operating on order book snapshots are among the leading approaches. The evidence package must include reconstructed order sequences, timestamp chains, and a manipulation probability score with confidence intervals.",
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
    {
      "num": "3",
      "label": "JUDGING_CRITERIA",
      "type": "table",
      "table": {
        "headers": ["#", "Criterion", "Description", "Weight"],
        "rows": [
          [
            "1",
            "Detection accuracy",
            "F1 score on held-out labeled manipulation events across all four types",
            "25%"
          ],
          [
            "2",
            "Latency performance",
            "Detection pipeline completes within required sub-second time budget",
            "20%"
          ],
          [
            "3",
            "Manipulation classification",
            "System distinguishes between spoofing, layering, stuffing, and ignition",
            "20%"
          ],
          [
            "4",
            "Evidence package quality",
            "Regulatory-grade output with order sequence, timestamps, and confidence score",
            "20%"
          ],
          [
            "5",
            "Class imbalance handling",
            "Precision-recall tradeoff explicitly addressed; no naive majority-class bias",
            "15%"
          ]
        ]
      }
    }
  ]
},
  ],
  d2: [
    {
      id: "IOT-001",
      title: "Smart Grid Load Balancing Network",
      difficulty: "Hard",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Develop a distributed IoT network of smart meters and edge devices that predicts and balances electricity demand in real time across a residential neighbourhood. The system should autonomously negotiate energy sharing between prosumers, integrate renewable sources, and survive partial network failures without central coordination.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Traditional grid management is centralised and reactive. A distributed peer-to-peer energy mesh requires consensus protocols, real-time demand forecasting at the edge, and secure value-exchange between nodes. Each device must operate with limited compute and bandwidth while maintaining grid stability.",
          table: {
            headers: ["Layer", "Role", "Protocol"],
            rows: [
              ["Smart meter",  "Sense + report consumption",  "MQTT / Zigbee"],
              ["Edge node",    "Local forecasting + control", "ONNX runtime"],
              ["P2P mesh",     "Energy trading negotiation",  "libp2p / CoAP"],
              ["Cloud sync",   "Aggregate analytics + audit", "REST / gRPC"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Forecast accuracy",    "MAE on 15-min ahead demand prediction",          "25%"],
              ["2", "Fault tolerance",      "Grid stability with 30% of nodes offline",       "25%"],
              ["3", "Renewable integration","% of renewable energy successfully absorbed",     "20%"],
              ["4", "Latency",              "P2P negotiation round-trip under 500ms",          "20%"],
              ["5", "Energy saved",         "kWh reduction vs baseline centralised dispatch",  "10%"],
            ],
          },
        },
      ],
    },
    {
      id: "IOT-002",
      title: "Predictive Maintenance for Rural Water Systems",
      difficulty: "Medium",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Engineer a low-power sensor network that monitors pipeline pressure, flow rates, and water quality across rural water distribution infrastructure. The system must operate on solar harvesting, transmit over LoRaWAN or NB-IoT, and predict pipe failures 48 hours in advance using on-device anomaly detection models.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Rural water networks suffer from undetected leaks and pipe bursts that can disrupt supply for thousands of people. The key constraints are extreme power budgets (< 50mW per node), low-bandwidth wireless links, and the need for on-device ML inference to reduce backhaul. TinyML models must fit within microcontroller SRAM.",
          table: {
            headers: ["Constraint", "Limit", "Approach"],
            rows: [
              ["Power budget",   "< 50mW per node",   "Solar + supercapacitor harvesting"],
              ["Bandwidth",      "< 250 bytes/msg",   "LoRaWAN SF7, compressed payload"],
              ["Model size",     "< 64 KB SRAM",      "TinyML / ONNX quantised model"],
              ["Prediction lead","48 hours ahead",    "LSTM anomaly detection on edge"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Prediction accuracy",  "F1-score on 48h-ahead pipe failure detection",   "30%"],
              ["2", "Power efficiency",     "Average node power draw vs 50mW budget",          "25%"],
              ["3", "Network reliability",  "Uptime % across simulated poor-coverage zones",   "20%"],
              ["4", "Deployment ease",      "Time to deploy a new node from unboxing",         "15%"],
              ["5", "Data quality",         "% of sensor readings passing validity checks",    "10%"],
            ],
          },
        },
      ],
    },
    {
      id: "IOT-003",
      title: "Ambient Assisted Living Platform",
      difficulty: "Hard",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Design a non-intrusive smart home system for elderly residents that detects falls, monitors medication adherence, and identifies behavioural deviations indicative of cognitive decline. Privacy is paramount — all processing must occur locally, with only anonymised alerts sent to caregivers.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Ambient assisted living requires passive sensing (no cameras in bedrooms, no wearables) combined with on-device AI. Sensor fusion across motion, door, and appliance sensors can model daily routines. Deviations from a learned baseline trigger alerts. All inference must run on a local hub with no cloud dependency.",
          table: {
            headers: ["Sensor", "Signal", "Event Detected"],
            rows: [
              ["PIR motion",      "Room occupancy pattern",  "Fall / inactivity anomaly"],
              ["Door contact",    "Entry/exit timestamps",   "Routine deviation"],
              ["Smart plug",      "Appliance power draw",    "Missed meal / medication"],
              ["Bed pressure",    "Sleep duration + restlessness", "Sleep quality decline"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Fall detection",       "Sensitivity / specificity on test scenarios",     "30%"],
              ["2", "Privacy compliance",   "Zero PII leaves local hub — verified by audit",   "25%"],
              ["3", "Routine modelling",    "Baseline learning time + deviation accuracy",     "20%"],
              ["4", "Alert quality",        "False alert rate over 30-day simulation",         "15%"],
              ["5", "Caregiver UX",         "Alert clarity and response time in user test",    "10%"],
            ],
          },
        },
      ],
    },
  ],
  d3: [
    {
  "id": "CS-001",
  "title": "Cookie Security Flags",
  "difficulty": "Medium",
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
      "content": "Cookie security flags control how browsers handle cookies during transmission and script execution. Three critical flags govern this behavior. A common attack chain: an attacker injects a script via XSS (possible because HttpOnly is absent), steals the session cookie, and replays it from a different machine. If SameSite is also missing, Cross-Site Request Forgery (CSRF) allows state-changing actions (fund transfers, password changes) without the victim's direct interaction.",
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
    {
      "num": "3",
      "label": "JUDGING_CRITERIA",
      "type": "table",
      "table": {
        "headers": ["#", "Criterion", "Description", "Weight"],
        "rows": [
          [
            "1",
            "Exploit demonstration",
            "Working PoC showing session theft or CSRF via missing flags",
            "25%"
          ],
          [
            "2",
            "Attack chain clarity",
            "Clear narrative from missing flag → attack vector → impact",
            "20%"
          ],
          [
            "3",
            "Remediation quality",
            "Correct flag combination applied; explains why each flag is needed",
            "20%"
          ],
          [
            "4",
            "Code-level evidence",
            "Before/after HTTP response headers shown in the submission",
            "20%"
          ],
          [
            "5",
            "Impact articulation",
            "CVSS-aligned severity reasoning and business risk described",
            "15%"
          ]
        ]
      }
    }
  ]
},
    {
  "id": "CS-002",
  "title": "Broken Object Level Authorization (BOLA)",
  "difficulty": "Medium",
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
      "content": "BOLA is ranked #1 in the OWASP API Security Top 10 because it is pervasive and often simple to exploit. The root cause is trusting the client-supplied object ID without verifying ownership on the server side. A typical attack flow: an authenticated attacker observes that GET /api/invoices/500 returns their invoice. By incrementing the ID to 501, 502, etc., the attacker retrieves other users' invoices — no privilege escalation required, just enumeration. The same pattern applies to PUT/DELETE requests, allowing modification or deletion of other users' records. The fix is not client-side validation. The server must compare the object's owner field against the authenticated user's identity on every request. Randomized UUIDs slow enumeration but do not fix the underlying authorization gap.",
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
    {
      "num": "3",
      "label": "JUDGING_CRITERIA",
      "type": "table",
      "table": {
        "headers": ["#", "Criterion", "Description", "Weight"],
        "rows": [
          [
            "1",
            "Unauthorized access proof",
            "Demonstrated User A accessing User B's object via ID manipulation",
            "25%"
          ],
          [
            "2",
            "Scope of exposure",
            "Enumerated how many endpoints/records are affected in the target app",
            "20%"
          ],
          [
            "3",
            "Authorization logic fix",
            "Server-side ownership check implemented and verified in code",
            "25%"
          ],
          [
            "4",
            "OWASP API alignment",
            "Correctly mapped to OWASP API Security Top 10 — API1:2023",
            "15%"
          ],
          [
            "5",
            "Automated test coverage",
            "Regression test or scan script that confirms the fix holds",
            "15%"
          ]
        ]
      }
    }
  ]
},
{
  "id": "CS-003",
  "title": "SSRF with Redirects",
  "difficulty": "Hard",
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
      "content": "A basic SSRF defense blocklists internal IP ranges (10.x, 192.168.x, 169.254.x). An attacker defeats this by supplying a URL on an allowlisted external domain that immediately 302-redirects to the internal target. The server validates the original URL (passes the check), then follows the redirect to the internal address — completely bypassing the allowlist. In cloud environments this is critical: 169.254.169.254 (AWS IMDSv1, GCP, Azure) serves IAM credentials, account IDs, and SSH keys with no authentication. A single successful SSRF request can exfiltrate credentials granting full cloud account access. A robust fix combines: (1) an allowlist of permitted destinations with final-URL re-verification after any redirects, (2) blocking all link-local and private IP ranges post-resolution, and (3) deploying AWS IMDSv2 (token-gated) to limit metadata endpoint exposure even if SSRF succeeds.",
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
    {
      "num": "3",
      "label": "JUDGING_CRITERIA",
      "type": "table",
      "table": {
        "headers": ["#", "Criterion", "Description", "Weight"],
        "rows": [
          [
            "1",
            "Redirect chain exploit",
            "Demonstrated bypass of URL allowlist via open redirect to internal IP",
            "25%"
          ],
          [
            "2",
            "Internal asset discovery",
            "Successfully reached metadata endpoint or internal service",
            "20%"
          ],
          [
            "3",
            "Bypass sophistication",
            "Use of DNS rebinding, 302 chains, or protocol switching techniques",
            "20%"
          ],
          [
            "4",
            "Defense depth",
            "Allowlist + redirect-resolution fix; not just blocklist patching",
            "20%"
          ],
          [
            "5",
            "Cloud metadata awareness",
            "Demonstrates credential theft risk via 169.254.x IMDSv1 endpoint",
            "15%"
          ]
        ]
      }
    }
  ]
},
  ],
  d4: [
    {
      id: "SD-001",
      title: "Carbon-Aware Compute Scheduler",
      difficulty: "Medium",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Design a workload orchestration layer for cloud and on-premises compute clusters that shifts non-urgent computational tasks (batch ML training, video transcoding, backups) to time windows with the lowest grid carbon intensity. Provide real-time dashboards showing embodied carbon savings and integrate with WattTime or Electricity Maps APIs.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Data centres account for ~1% of global electricity consumption. Carbon intensity of the grid varies by up to 10× across hours and regions depending on renewable generation. Temporal and spatial shifting of flexible workloads can dramatically reduce Scope 2 emissions without impacting SLAs, if the scheduler has accurate carbon forecasts.",
          table: {
            headers: ["Workload Type", "Flexibility", "Shift Window"],
            rows: [
              ["Batch ML training",    "High",   "Up to 24 hours"],
              ["Video transcoding",    "High",   "Up to 12 hours"],
              ["Database backups",     "Medium", "Up to 6 hours"],
              ["Real-time inference",  "None",   "Must run immediately"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Carbon reduction",   "gCO₂eq saved vs baseline unaware scheduler",      "30%"],
              ["2", "SLA compliance",     "% of jobs completing within deadline",             "25%"],
              ["3", "Forecast accuracy",  "MAE on carbon intensity prediction",              "20%"],
              ["4", "API integration",    "WattTime / ElectricityMaps live data working",    "15%"],
              ["5", "Dashboard quality",  "Real-time carbon savings visualisation",          "10%"],
            ],
          },
        },
      ],
    },
    {
      id: "SD-002",
      title: "Precision Agriculture Water Intelligence",
      difficulty: "Medium",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Build an AI-powered irrigation decision system that fuses soil moisture sensor data, satellite NDVI imagery, hyperlocal weather forecasts, and crop growth models to deliver field-specific, day-ahead irrigation schedules. The system must reduce water consumption by at least 30% compared to traditional calendar-based methods.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Agriculture accounts for 70% of global freshwater withdrawals. Over-irrigation is common due to lack of real-time soil and crop data. A precision system that integrates multiple data streams can optimise irrigation timing and volume per zone, accounting for evapotranspiration, crop stage, and forecast rainfall to avoid unnecessary watering.",
          table: {
            headers: ["Data Source", "Resolution", "Contribution"],
            rows: [
              ["Soil moisture sensors", "Per field zone / hourly",  "Ground truth water content"],
              ["Satellite NDVI",        "10m / 5-day revisit",      "Crop stress + growth stage"],
              ["Weather forecast",      "1km / hourly, 7-day",      "ET₀ + rainfall prediction"],
              ["Crop growth model",     "Variety-specific",         "Water demand curve"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Water savings",      "% reduction vs calendar baseline on test plots",  "30%"],
              ["2", "Yield preservation", "Crop yield vs well-irrigated control group",      "25%"],
              ["3", "Forecast accuracy",  "MAE on ET₀ and rainfall predictions",            "20%"],
              ["4", "Sensor fusion",      "Improvement from multi-source vs single source",  "15%"],
              ["5", "Farmer UX",          "Schedule clarity + mobile app usability score",  "10%"],
            ],
          },
        },
      ],
    },
    {
      id: "SD-003",
      title: "Informal Waste Ecosystem Optimiser",
      difficulty: "Easy",
      sections: [
        {
          num: "1",
          label: "PROBLEM_STATEMENT",
          type: "text",
          content:
            "Create a platform that formalises and optimises the informal waste collection economy in dense urban areas. Connect waste generators, informal collectors (kabadiwalas / waste pickers), and recycling facilities through a marketplace with dynamic pricing, route optimisation, and verified impact reporting for ESG compliance.",
        },
        {
          num: "2",
          label: "EXPLANATION",
          type: "text+table",
          content:
            "Informal waste collectors process up to 50% of recyclable waste in developing-world cities, yet remain invisible to formal supply chains. A digital platform can improve their income predictability, reduce collection inefficiencies, and generate verified waste diversion data for corporate ESG reporting — bridging the informal and formal economies.",
          table: {
            headers: ["Stakeholder", "Problem", "Platform Solution"],
            rows: [
              ["Waste generator",    "No visibility on recyclable value",    "Price estimator + pickup scheduling"],
              ["Waste collector",    "Unpredictable income + inefficient routes", "Route optimisation + demand forecast"],
              ["Recycling facility", "Inconsistent feedstock supply",        "Aggregated supply commitments"],
              ["Corporate buyer",    "Unverifiable ESG waste claims",        "Blockchain-anchored impact certificates"],
            ],
          },
        },
        {
          num: "3",
          label: "JUDGING_CRITERIA",
          type: "table",
          table: {
            headers: ["#", "Criterion", "Description", "Wt."],
            rows: [
              ["1", "Waste diverted",      "kg of recyclables kept from landfill in pilot",   "25%"],
              ["2", "Collector income",    "% income increase for enrolled collectors",        "25%"],
              ["3", "Route efficiency",    "km reduction per kg collected vs baseline",       "20%"],
              ["4", "ESG report quality",  "Audit-readiness of impact certificates",          "20%"],
              ["5", "Platform adoption",   "# of active users across all stakeholder types",  "10%"],
            ],
          },
        },
      ],
    },
  ],
};

const domainMeta = {
  d1: { label: "FINTECH",       color: "#1DBFA3", prefix: "FT"  },
  d2: { label: "IOT",           color: "#F0B429", prefix: "IOT" },
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
  return (
    <div style={styles.sectionBlock}>
      {/* Section header */}
      <div style={{ ...styles.sectionNum, color }}>
        {">> [ " + section.num + " ] " + section.label}
        <span style={styles.sectionLine} />
      </div>

      {/* Text paragraphs */}
      {(section.type === "text" || section.type === "text+table") &&
        section.content.split("\n\n").map((para, i) => (
          <p key={i} style={styles.sectionText}>
            {para.trim()}
          </p>
        ))}

      {/* ASCII table */}
      {(section.type === "text+table" || section.type === "table") &&
        section.table && (
          <pre style={styles.asciiTable}>
            {buildAsciiTable(section.table.headers, section.table.rows)}
          </pre>
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

  const difficultyColor = (d) =>
    d === "Hard" ? "#E8698A" : d === "Easy" ? "#1DBFA3" : "#F0B429";

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
                      <span
                        style={{
                          ...styles.diffBadge,
                          color: difficultyColor(ps.difficulty),
                          borderColor: difficultyColor(ps.difficulty),
                        }}
                      >
                        {ps.difficulty}
                      </span>
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
                        <span style={{ color: "rgba(0,255,70,0.4)" }}> | </span>
                        <span style={{ color: difficultyColor(ps.difficulty) }}>
                          DIFFICULTY: {ps.difficulty.toUpperCase()}
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
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  diffBadge: {
    fontSize: "0.62rem",
    letterSpacing: "2px",
    border: "1px solid",
    padding: "1px 6px",
    borderRadius: "3px",
    flexShrink: 0,
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
};

export default Domains;