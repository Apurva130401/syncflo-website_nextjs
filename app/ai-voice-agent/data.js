export const industryData = {
    'healthcare': {
        title: "Compassionate AI Receptionist",
        subtitle: "Voice AI for Healthcare",
        description: "Handle patient calls, scheduling, and triage 24/7 with a secure, empathetic AI voice agent.",
        heroBadge: "Voice AI for Healthcare",
        problem: {
            title: "MISSED CALLS = <br />MISSED CARE.",
            stat: "30% of patient calls go to voicemail during peak hours.",
            context: "Front desk burnout leads to long hold times and frustrated patients. SyncFlo ensures every patient feels heard instantly, 24/7."
        },
        capabilities: [
            {
                title: "EMR/EHR Intelligent Sync",
                description: "Read real-time doctor availability and write appointments directly into your EHR without double-booking.",
                icon: "🏥",
                color: "from-blue-400 to-cyan-500",
                points: ["Real-time availability check", "Patient record lookup", "Insurance verification prompt"]
            },
            {
                title: "Clinical Triage Logic",
                description: "Screen for emergencies using clinical protocols. Immediately route 'chest pain' or 'sob' to un-call nurses while handling routine refills.",
                icon: "🚑",
                color: "from-red-400 to-pink-500",
                points: ["Symptom checker", "Emergency routing protocols", "Routine query automation"]
            },
            {
                title: "HIPAA-Compliant Voice Layer",
                description: "Enterprise-grade security masking and encryption ensuring PHI is protected from the first 'Hello' to the final transfer.",
                icon: "🔒",
                color: "from-green-400 to-emerald-500",
                points: ["BAA available", "End-to-end encryption", "Redacted logs"]
            }
        ],
        integrations: [
            {
                title: "Epic / Cerner",
                description: "Deep HL7/FHIR integration for hospital-grade connectivity.",
                icon: "🏨"
            },
            {
                title: "DrChrono / Kareo",
                description: "Perfect for private practices to automate scheduling.",
                icon: "👨‍⚕️"
            },
            {
                title: "Twilio / Vonage",
                description: "SIP trunking reliability for crystal clear medical calls.",
                icon: "📞"
            }
        ],
        features: [
            {
                icon: "Calendar",
                title: "Automated Scheduling",
                description: "Patients can book, reschedule, or cancel appointments over the phone instantly, syncing with your EHR.",
                gradient: "from-blue-400 to-cyan-500"
            },
            {
                icon: "Heart",
                title: "Triage & Routing",
                description: "Intelligently assess caller needs and route urgent cases to on-call staff while handling routine queries.",
                gradient: "from-red-400 to-pink-500"
            },
            {
                icon: "ShieldCheck",
                title: "HIPAA Compliant",
                description: "Secure, private, and compliant voice interactions that protect patient data at every step.",
                gradient: "from-green-400 to-emerald-500"
            }
        ],
        useCases: [
            { icon: "PhoneIncoming", title: "Inbound Reception", desc: "Answer every call immediately, reducing hold times and ensuring no patient goes unheard.", color: "text-blue-400" },
            { icon: "CalendarCheck", title: "Appointment Reminders", desc: "Proactively call patients to confirm appointments, reducing no-shows and optimizing schedule density.", color: "text-green-400" },
            { icon: "FileText", title: "Pre-Visit Instructions", desc: "Automate delivery of fasting rules or procedural instructions via voice before the patient arrives.", color: "text-red-400" },
            { icon: "Activity", title: "Post-Discharge Follow-up", desc: "Check in on patients after surgery or discharge to monitor recovery and adherence to care plans.", color: "text-yellow-400" },
            { icon: "ClipboardList", title: "Prescription Refills", desc: "Allow patients to request refills over the phone, verifying details automatically before pharmacy submission.", color: "text-purple-400" },
            { icon: "HelpCircle", title: "FAQ Resolution", desc: "Answer common questions about clinic hours, insurance acceptance, and location 24/7.", color: "text-orange-400" }
        ],
        faqs: [
            { question: "Is the voice agent HIPAA compliant?", answer: "Yes, our voice infrastructure is fully HIPAA compliant. All call data is encrypted in transit and at rest, ensuring patient privacy." },
            { question: "Can it integrate with our EHR system?", answer: "Absolutely. We integrate with major EHR platforms to read availability and write appointments directly to your schedule." },
            { question: "How does it handle emergencies?", answer: "The AI is trained to detect keywords indicating an emergency (e.g., 'chest pain', 'breathing difficulty') and immediately transfer the call to emergency services or an on-call nurse." }
        ]
    },
    'real-estate': {
        title: "Never Miss a Property Lead",
        subtitle: "Voice AI for Real Estate",
        description: "Qualify leads, schedule viewings, and follow up with buyers instantly via intelligent voice calls.",
        heroBadge: "Voice AI for Real Estate",
        problem: {
            title: "SLOW RESPONSE = <br />LOST COMMISSIONS.",
            stat: "Leads responded to in 5 mins are 21x more likely to convert.",
            context: "You're driving to a showing while your leads are calling other agents. SyncFlo answers instantly, qualifies them, and books the showing for you."
        },
        capabilities: [
            {
                title: "Instant Lead Qualification",
                description: "Screen inbound calls to identify serious buyers. Ask about budget, timeline, and pre-approval status before you ever pick up the phone.",
                icon: "🏡",
                color: "from-orange-400 to-red-500",
                points: ["Budget & Timeline capture", "Pre-approval check", "Agent routing based on price"]
            },
            {
                title: "Open House Scheduling",
                description: "Automatically block out time for private viewings or direct callers to upcoming open house slots on your calendar.",
                icon: "📅",
                color: "from-blue-400 to-indigo-500",
                points: ["Calendar sync", "Instant confirmation SMS", "Rescheduling automation"]
            },
            {
                title: "Database Reactivation",
                description: "Turn your dead leads into gold. The AI calls old leads in your CRM to see if they are ready to re-enter the market.",
                icon: "♻️",
                color: "from-green-400 to-emerald-500",
                points: ["Cold lead outreach", "Market update calls", "Seller valuation offers"]
            }
        ],
        integrations: [
            {
                title: "Follow Up Boss",
                description: "Two-way sync to keep your lead stages perfectly updated.",
                icon: "🦁"
            },
            {
                title: "KvCore / BoomTown",
                description: "Feed AI-qualified leads directly into your smart CRM campaigns.",
                icon: "🏘️"
            },
            {
                title: "Zillow / Realtor",
                description: "Instant speed-to-lead for portal inquiries.",
                icon: "🔗"
            }
        ],
        features: [
            {
                icon: "Home",
                title: "Instant Lead Qual",
                description: "Screen inbound calls to identify serious buyers, their budget, and timeline before transferring to an agent.",
                gradient: "from-orange-400 to-red-500"
            },
            {
                icon: "Calendar",
                title: "Viewing Scheduling",
                description: "Automatically block out time for open houses or private viewings directly on your calendar.",
                gradient: "from-blue-400 to-indigo-500"
            },
            {
                icon: "Bell",
                title: "Follow-Up Calls",
                description: "Automate warm follow-up calls to leads who attended open houses to gauge interest and next steps.",
                gradient: "from-green-400 to-emerald-500"
            }
        ],
        useCases: [
            { icon: "UserCheck", title: "Inbound Qualification", desc: "Filter tire-kickers from serious buyers by asking key qualifying questions upfront.", color: "text-blue-400" },
            { icon: "Key", title: "Appointment Setting", desc: "Let the AI handle the back-and-forth of finding a time to meet, filling your calendar with qualified meetings.", color: "text-green-400" },
            { icon: "Megaphone", title: "Open House Invites", desc: "Blast personalized voice invites to your lead list for upcoming open houses in their area.", color: "text-purple-400" },
            { icon: "Database", title: "Database Reactivation", desc: "Call cold leads from your CRM to check if they are still in the market, reviving lost opportunities.", color: "text-yellow-400" },
            { icon: "Info", title: "Property Hotlines", desc: "Provide instant details, price, and specs for a property when a lead calls the sign rider number.", color: "text-red-400" },
            { icon: "Smile", title: "Post-Sale Check-in", desc: "Automate anniversary calls or move-in check-ins to maintain long-term client relationships.", color: "text-orange-400" }
        ],
        faqs: [
            { question: "Does it sound robotic?", answer: "No. We use ultra-low latency, human-like voice models that have natural pauses, intonation, and can even handle interruptions." },
            { question: "Can it transfer calls to me?", answer: "Yes. If a lead is qualified (e.g., cash buyer, ready now), the AI can warm-transfer the call to your mobile immediately." },
            { question: "How does it know my listings?", answer: "We ingest your listing data or connect to your CRM/MLS feed so the AI always has up-to-date information on your properties." }
        ]
    },
    'car-dealership': {
        title: "Drive More Test Drives",
        subtitle: "Voice AI for Automotive",
        description: "Automate service appointments, outbound recall notifications, and inbound sales inquiries.",
        heroBadge: "Voice AI for Automotive",
        features: [
            {
                icon: "Wrench",
                title: "Service Scheduling",
                description: "Handle hundreds of service calls a day, booking maintenance slots without overwhelming advisors.",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: "Car",
                title: "Sales Lead Response",
                description: "Instantly call web leads within seconds of submission to engage them while interest is highest.",
                gradient: "from-red-500 to-orange-500"
            },
            {
                icon: "RefreshCw",
                title: "Recall Outreach",
                description: "Automate outbound campaigns to notify customers of recalls and book them in for service immediately.",
                gradient: "from-green-500 to-emerald-500"
            }
        ],
        useCases: [
            { icon: "Calendar", title: "Service Booking", desc: "Allow customers to book oil changes, inspections, and repairs purely via voice command.", color: "text-blue-400" },
            { icon: "Zap", title: "Speed-to-Lead", desc: "Automatically dial internet leads the moment they hit your CRM ensuring you're the first dealership to make contact.", color: "text-orange-400" },
            { icon: "AlertTriangle", title: "Recall Notifications", desc: "Proactively call affected customers to schedule safety recalls, boosting compliance and service revenue.", color: "text-red-400" },
            { icon: "CheckSquare", title: "Appointment Confirmations", desc: "Reduce no-shows by calling to confirm tomorrow's appointments and offering easy rescheduling options.", color: "text-green-400" },
            { icon: "BarChart", title: "CSI Surveys", desc: "Conduct post-service satisfaction surveys via phone to gather feedback and catch negative sentiment early.", color: "text-purple-400" },
            { icon: "PhoneForwarded", title: "Reception Overflow", desc: "Ensure no call goes to voicemail during busy hours by letting AI handle spillover traffic.", color: "text-yellow-400" }
        ],
        faqs: [
            { question: "Can it check my service bay availability?", answer: "Yes, it integrates with your DMS (like Reynolds & Reynolds, CDK) to see real-time availability and book slots." },
            { question: "What if a customer gets frustrated?", answer: "The AI performs sentiment analysis in real-time. If frustration is detected, it escalates the call to a human manager immediately." },
            { question: "Does it work for parts inquiries?", answer: "It can handle basic inquiries and check inventory if connected, or route parts-specific calls directly to the parts department." }
        ]
    },
    'recruitment': {
        title: "AI Voice Agent for Recruitment",
        subtitle: "Screen Candidates at Scale",
        description: "Automate initial phone screens, interview scheduling, and candidate updates to find the best talent faster.",
        heroBadge: "Voice AI for Recruitment Agencies",
        problem: {
            title: "SLOW SCREENING = <br />LOST TALENT.",
            stat: "Top candidates are off the market in 10 days.",
            context: "Recruiters spend 60% of their time on phone screens with unqualified candidates. SyncFlo automates the first round, so your team only talks to the best."
        },
        capabilities: [
            {
                title: "Automated Candidate Screening",
                description: "Conduct standardized phone screens to verify qualifications, visa status, and availability automatically 24/7.",
                icon: "📋",
                color: "from-sales-orange to-orange-600",
                points: ["Verify skills & experience", "Check visa/work status", "Assess communication skills"]
            },
            {
                title: "Interview Scheduling",
                description: "Stop the email tennis. SyncFlo coordinates directly with hiring manager calendars to book interviews with qualified candidates instantly.",
                icon: "📅",
                color: "from-sales-red to-red-600",
                points: ["Sync with hiring managers", "Automated reminders", "Rescheduling handling"]
            },
            {
                title: "ATS Integration",
                description: "Automatically log call recordings, transcripts, and screening scores directly into your Applicant Tracking System.",
                icon: "💾",
                color: "from-blue-500 to-cyan-500",
                points: ["Log calls & notes", "Update candidate status", "Trigger next stage"]
            }
        ],
        integrations: [
            {
                title: "ATS Sync",
                description: "Deep integration with Greenhouse, Lever, Bullhorn and more.",
                icon: "📂"
            },
            {
                title: "Calendar Sync",
                description: "Book interviews directly into Outlook or Google Calendar.",
                icon: "📅"
            },
            {
                title: "HRIS Connect",
                description: "Seamlessly transfer new hire data to your HR system.",
                icon: "👥"
            }
        ],
        features: [
            {
                icon: "Filter",
                title: "First-Round Screening",
                description: "Conduct standardized phone screens to verify qualifications, visa status, and availability automatically.",
                gradient: "from-purple-500 to-indigo-500"
            },
            {
                icon: "Calendar",
                title: "Interview Coordination",
                description: "Stop the email tennis. Let AI find a time that works for both the hiring manager and the candidate.",
                gradient: "from-blue-400 to-cyan-500"
            },
            {
                icon: "Database",
                title: "Database Refresh",
                description: "Call past candidates in your ATS to see if they are open to new opportunities.",
                gradient: "from-green-400 to-emerald-500"
            }
        ],
        useCases: [
            { icon: "Phone", title: "Inbound Inquiries", desc: "Answer candidate questions about job descriptions, company culture, and application status 24/7.", color: "text-blue-400" },
            { icon: "CheckCircle", title: "Pre-Screening", desc: "Ask knock-out questions (experience, salary expectations) to filter candidates before a recruiter reviews them.", color: "text-green-400" },
            { icon: "Clock", title: "Scheduling", desc: "Automate the booking of face-to-face or Zoom interviews, syncing with recruiter calendars.", color: "text-yellow-400" },
            { icon: "Bell", title: "Application Updates", desc: "Proactively notify candidates of their status changes via a courteous voice call.", color: "text-orange-400" },
            { icon: "Globe", title: "Multilingual Screening", desc: "Screen candidates in multiple languages to assess fluency or support global hiring campaigns.", color: "text-purple-400" },
            { icon: "UserPlus", title: "Onboarding Check-ins", desc: "Call new hires before day one to answer questions and ensure they are ready to start.", color: "text-red-400" }
        ],
        faqs: [
            { question: "Does candidates hate talking to a bot?", answer: "Voice AI provides a transparent and efficient experience. Most candidates prefer a quick AI screen over waiting weeks for a human recruiter to reach out." },
            { question: "Can it record the interviews?", answer: "Yes, all screening calls are recorded and transcribed, so recruiters can review the answers and assess communication skills." },
            { question: "Does it integrate with my ATS?", answer: "We integrate with major ATS platforms (Greenhouse, Lever, Bullhorn) to log calls, update statuses, and add notes." }
        ]
    },
    'legal': {
        title: "Efficient Legal Intake",
        subtitle: "Voice AI for Law Firms",
        description: "Automate client intake, consultation booking, and after-hours call handling.",
        heroBadge: "Voice AI for Legal",
        problem: {
            title: "MISSED CALLS = <br />MISSED RETAINERS.",
            stat: "74% of consumers contact a competitor if you don't answer first.",
            context: "You're in court or depositions. Your front desk is busy. Calls go to voicemail, and high-value cases hang up and call the next firm on Google."
        },
        capabilities: [
            {
                title: "Automated Case Intake",
                description: "Screen calls for case type (PI, Family, Criminal). Gather key details like incident date or party names before you review.",
                icon: "⚖️",
                color: "from-slate-600 to-slate-800",
                points: ["Case type filtering", "Incident detail capture", "Conflict check routing"]
            },
            {
                title: "Retainer & Payment Collection",
                description: "Securely collect consultation fees or retainer payments over the phone, compliant with trust account rules (via integration).",
                icon: "💳",
                color: "from-emerald-500 to-green-600",
                points: ["Consultation fee capture", "Invoice reminders", "Secure PCI handling"]
            },
            {
                title: "Court Date Reminders",
                description: "Reduce no-shows for hearings and depositions. Proactively call clients to confirm attendance and remind them what to bring.",
                icon: "📅",
                color: "from-blue-500 to-indigo-600",
                points: ["Hearing confirmations", "Document reminders", "Location directions"]
            }
        ],
        integrations: [
            {
                title: "Clio / PracticePanther",
                description: "Push intake notes and new contacts directly into your practice management software.",
                icon: "💼"
            },
            {
                title: "LawPay",
                description: "Handle payments securely and compliant with IOLTA standards.",
                icon: "💲"
            },
            {
                title: "Google Calendar",
                description: "Book consultations only when you are truly free.",
                icon: "📆"
            }
        ],
        features: [
            {
                icon: "Clipboard",
                title: "Client Intake",
                description: "Gather essential case details (incident date, parties involved) automatically before a lawyer reviews the case.",
                gradient: "from-gray-700 to-gray-900"
            },
            {
                icon: "Clock",
                title: "24/7 Availability",
                description: "Never miss a potential case. Capture leads and inquiries even on nights and weekends.",
                gradient: "from-blue-600 to-indigo-700"
            },
            {
                icon: "Calendar",
                title: "Consultation Booking",
                description: "Qualify leads and book paid or free consultations directly into attorney calendars.",
                gradient: "from-yellow-500 to-amber-600"
            }
        ],
        useCases: [
            { icon: "PhoneIncoming", title: "After-Hours Reception", desc: "Ensure every caller gets a professional response, even at 2 AM on a Saturday.", color: "text-blue-400" },
            { icon: "FileText", title: "Case Qualification", desc: "Ask specific questions to determine if a case fits your firm's expertise before you spend time on it.", color: "text-red-400" },
            { icon: "Bell", title: "Court Date Reminders", desc: "Automate reminders to clients about upcoming court appearances or filing deadlines.", color: "text-yellow-400" },
            { icon: "DollarSign", title: "Payment Collections", desc: "Handle routine billing inquiries and collection calls politely and consistently.", color: "text-green-400" },
            { icon: "PenTool", title: "Retainer Sign-up", desc: "Guide clients on how to sign retainers digitally and answer process-related questions.", color: "text-purple-400" },
            { icon: "Globe", title: "Spanish Intake", desc: "Provide bilingual intake services instantly without needing a full-time Spanish speaker on staff.", color: "text-orange-400" }
        ],
        faqs: [
            { question: "Is client privilege protected?", answer: "Yes. Our platform uses enterprise-grade encryption and access controls. You own your data." },
            { question: "Does it sound professional?", answer: "Absolutely. We use high-fidelity, professional voice models suitable for a legal environment." },
            { question: "Can it route calls to specific lawyers?", answer: "Yes, based on the practice area (e.g., 'Press 1 for Family Law'), it can qualify and then route to the appropriate attorney." }
        ]
    },
    'insurance': {
        title: "Streamline Claims & Sales",
        subtitle: "Voice AI for Insurance",
        description: "Automate FNOL, policy renewals, and quote data gathering.",
        heroBadge: "Voice AI for Insurance",
        problem: {
            title: "SPEED TO QUOTE = <br />WINS THE POLICY.",
            stat: "78% of customers buy from the first insurer to respond.",
            context: "Leads get cold in minutes. SyncFlo calls inbound leads instantly to qualify them and transfer hot prospects to your best producers."
        },
        capabilities: [
            {
                title: "Instant Lead Qualification",
                description: "Call internet leads instantly. Verify driver history, vehicle details, or property specs before transferring to a licensed agent.",
                icon: "🏎️",
                color: "from-blue-500 to-cyan-500",
                points: ["Driver history check", "Asset verification", "Risk pre-assessment"]
            },
            {
                title: "Claims FNOL Automation",
                description: "Handle First Notice of Loss calls 24/7. Gather accident details, photos (via SMS link), and police report numbers automatically.",
                icon: "💥",
                color: "from-red-500 to-orange-500",
                points: ["Incident data capture", "Photo upload links", "Emergency assistance routing"]
            },
            {
                title: "Policy Renewal Retention",
                description: "Proactively call clients before renewal. Review coverage, update details, and process payments to prevent churn.",
                icon: "🔄",
                color: "from-green-500 to-emerald-500",
                points: ["Coverage review", "Payment processing", "Happy birthday calls"]
            }
        ],
        integrations: [
            {
                title: "Applied Epic / AMS360",
                description: "Log every call and update policy details in your agency management system.",
                icon: "🏢"
            },
            {
                title: "EZLynx",
                description: "Push qualified lead data directly into your rater.",
                icon: "🔢"
            },
            {
                title: "Docusign",
                description: "Trigger signature requests for policy binders via voice command.",
                icon: "✍️"
            }
        ],
        features: [
            {
                icon: "FileText",
                title: "Automated FNOL",
                description: "First Notice of Loss handling 24/7. Gather accident details immediately when customers call.",
                gradient: "from-blue-500 to-blue-700"
            },
            {
                icon: "RefreshCw",
                title: "Policy Renewals",
                description: "Proactively call customers about expiring policies and process renewals or schedule reviews.",
                gradient: "from-green-500 to-emerald-600"
            },
            {
                icon: "PieChart",
                title: "Quote Intake",
                description: "Collect risk data properties, vehicles, or drivers to prepare a quote before an agent steps in.",
                gradient: "from-purple-500 to-indigo-600"
            }
        ],
        useCases: [
            { icon: "AlertTriangle", title: "Claims Reporting", desc: "Let customers report incidents immediately via voice, ensuring accurate data collection on fresh memories.", color: "text-red-400" },
            { icon: "CheckSquare", title: "Payment Reminders", desc: "Reduce policies lapsing by automating friendly payment reminder calls.", color: "text-green-400" },
            { icon: "UserPlus", title: "Lead Qualification", desc: "Screen internet leads for intent and eligibility before routing to sales producers.", color: "text-blue-400" },
            { icon: "Info", title: "Policy FAQ", desc: "Answer simple questions about coverage limits, deductibles, and ID cards without agent time.", color: "text-yellow-400" },
            { icon: "Calendar", title: "Annual Reviews", desc: "Schedule annual coverage review appointments for agents to identify cross-sell opportunities.", color: "text-purple-400" },
            { icon: "CloudRain", title: "Catastrophe Response", desc: "Scale up capacity instantly during natural disasters to handle surge call volumes.", color: "text-orange-400" }
        ],
        faqs: [
            { question: "Can it update my agency management system?", answer: "Yes, we integrate with AMS360, Applied Epic, and others to log activites and claims." },
            { question: "Is it compliant with insurance regulations?", answer: "We adhere to strict data security and recording disclosure standards required in the insurance industry." },
            { question: "How fast can it answer during a storm?", answer: "Infinite scalability means zero hold times, even if call volume spikes 100x during a catastrophe." }
        ]
    },
    'mortgage': {
        title: "AI Voice Agent for Mortgage",
        subtitle: "Close More Loans with Instant Lead Qualification",
        description: "Automate lead qualification, schedule appointments, and streamline borrower communication to close more loans, faster.",
        heroBadge: "Voice AI for Mortgage Professionals",
        problem: {
            title: "MISSED CALLS = <br />LOST LOANS.",
            stat: "Speed to lead is everything.",
            context: "Every minute a borrower waits, they are calling another lender. SyncFlo answers instantly, qualifies the borrower, and transfers only serious leads to your officers."
        },
        capabilities: [
            {
                title: "Instant Lead Qualification",
                description: "Stop wasting time on unqualified leads. SyncFlo answers 24/7, collects financial details, screening for serious applicants, and hands off ready-to-go borrowers.",
                icon: "💰",
                color: "from-sales-orange to-orange-600",
                points: ["Credit score pre-check inquiry", "Loan amount & property capture", "Purchase vs Refinance ID"]
            },
            {
                title: "Automated Appointment Booking",
                description: "No more phone tag. SyncFlo connects directly to your loan officers' calendars to book and confirm consultations with qualified leads instantly.",
                icon: "📅",
                color: "from-sales-red to-red-600",
                points: ["Real-time calendar sync", "Automated confirmation texts", "Rescheduling handling"]
            },
            {
                title: "CRM & LOS Integration",
                description: "Seamlessly push call data, transcripts, and lead details into your CRM and Loan Origination System. Keep your pipeline up to date without manual entry.",
                icon: "📂",
                color: "from-blue-500 to-cyan-500",
                points: ["Auto-log call activities", "Update lead status", "Secure data transfer"]
            }
        ],
        integrations: [
            {
                title: "LOS Sync",
                description: "Direct integration with major Loan Origination Systems for seamless data flow.",
                icon: "🏦"
            },
            {
                title: "CRM Integration",
                description: "Keep your lead database pristine with automatic call logging and updates.",
                icon: "👥"
            },
            {
                title: "Calendar Link",
                description: "Book appointments directly into your team's real-time availability.",
                icon: "📅"
            }
        ],
        features: [ // Keep for backward compatibility or remove if fully switching? I'll keep generic features separate from capabilities just in case.
            {
                icon: "Percent",
                title: "Lead Response",
                description: "Call rate-shoppers immediately to lock in interest before competitors do.",
                gradient: "from-green-500 to-emerald-600"
            },
            {
                icon: "File",
                title: "Doc Collection",
                description: "Remind borrowers which documents are missing and answer questions about what they are.",
                gradient: "from-blue-500 to-indigo-600"
            },
            {
                icon: "Clock",
                title: "Status Updates",
                description: "Proactively notify borrowers and realtors of loan progression (Underwriting, Clear to Close).",
                gradient: "from-orange-500 to-red-500"
            }
        ],
        useCases: [
            { icon: "Phone", title: "Refi Campaigns", desc: "Call past clients when rates drop to see if they are interested in refinancing.", color: "text-green-400" },
            { icon: "CheckCircle", title: "Pre-Qual Survey", desc: "Run a scripted credit/income survey to pre-qualify inbound leads before loan officer assignment.", color: "text-blue-400" },
            { icon: "Calendar", title: "Appointment Setting", desc: "Book times for borrowers to speak with Loan Officers for application completion.", color: "text-purple-400" },
            { icon: "Bell", title: "Milestone Calls", desc: "Automated calls to celebrate milestones like 'Appraisal Received' or 'Approved'.", color: "text-yellow-400" },
            { icon: "Database", title: "Cold Database", desc: "Re-engage old leads that went cold to see if they are ready to buy now.", color: "text-orange-400" },
            { icon: "Lock", title: "Rate Lock Alerts", desc: "Notify applicants when their rate lock is expiring to drive urgency.", color: "text-red-400" }
        ],
        faqs: [
            { question: "Can it take a full 1003 application?", answer: "It's best for the initial data gathering. We recommend a human LO finalize the official 1003, but AI can get 80% of the way there." },
            { question: "Does it integrate with Encompass or Calyx?", answer: "Yes, we have APIs to sync call notes and status updates directly into your LOS." },
            { question: "Is it secure?", answer: "Bank-grade security ensures all borrower PII is protected." }
        ]
    },
    'agency': {
        title: "Scale Your Agency Offer",
        subtitle: "Voice AI for Agencies",
        description: "Offer conversational AI services to your clients or automate your own client acquisition and support.",
        heroBadge: "Voice AI for Agencies",
        problem: {
            title: "CHURN IS THE <br />ENEMY OF SCALE.",
            stat: "40% of agency time is spent on non-billable communication.",
            context: "Client updates, chasing assets, and late payments eat into your margins. SyncFlo automates the grunt work so you can focus on strategy and retention."
        },
        capabilities: [
            {
                title: "Automated Client Acquisition",
                description: "Use voice AI to handle your own agency's inbound leads, qualify them, and book strategy calls on your sales calendar.",
                icon: "⚡",
                color: "from-sales-orange to-orange-600",
                points: ["Inbound lead qualification", "Demo booking on autopilot", "Follow-up sequences"]
            },
            {
                title: "White-Label AI Services",
                description: "Resell our voice AI under your own brand. Add a high-ticket recurring revenue stream by offering AI receptionists to your local business clients.",
                icon: "💼",
                color: "from-indigo-500 to-purple-600",
                points: ["Resell to your clients", "Custom branding", "New revenue stream"]
            },
            {
                title: "Project Management Sync",
                description: "Keep projects moving without the meetings. Automated calls to update status or remind clients to send assets.",
                icon: "🏗️",
                color: "from-blue-500 to-cyan-500",
                points: ["Update project boards", "Automated status calls", "Asset collection reminders"]
            }
        ],
        integrations: [
            {
                title: "GoHighLevel",
                description: "The ultimate agency stack integration for seamless snapshots.",
                icon: "🚀"
            },
            {
                title: "Slack / Teams",
                description: "Get notified of hot leads or client issues in your team channels.",
                icon: "💬"
            },
            {
                title: "Stripe Connect",
                description: "Automate billing updates and handle failed payments.",
                icon: "💳"
            }
        ],
        features: [
            {
                icon: "Briefcase",
                title: "White Label Ready",
                description: "Resell our voice AI under your own brand to add a high-ticket recurring revenue stream.",
                gradient: "from-indigo-500 to-purple-600"
            },
            {
                icon: "Zap",
                title: "Client Acquisition",
                description: "Use voice AI to handle your own agency's inbound leads and book strategy calls.",
                gradient: "from-yellow-500 to-orange-600"
            },
            {
                icon: "BarChart",
                title: "Performance Reporting",
                description: "Prove ROI to clients with detailed call logs, recordings, and conversion metrics.",
                gradient: "from-blue-500 to-cyan-500"
            }
        ],
        useCases: [
            { icon: "PhoneOutgoing", title: "Cold Outreach", desc: "Automate initial outreach to local businesses to gauge interest in your services.", color: "text-blue-400" },
            { icon: "Calendar", title: "Demo Booking", desc: "Convert web traffic into booked demos for your sales team automatically.", color: "text-green-400" },
            { icon: "Headphones", title: "Support Automation", desc: "Handle routine support tickets for your clients (e.g., 'update my ad spend') via voice.", color: "text-purple-400" },
            { icon: "DollarSign", title: "Payment Collection", desc: "Automate chasing of late invoices from clients politely but persistently.", color: "text-red-400" },
            { icon: "Users", title: "Onboarding", desc: "Guide new clients through your onboarding checklist via automated welcome calls.", color: "text-yellow-400" },
            { icon: "Layers", title: "Reselling", desc: "Build voice bots for Dentists, Gyms, and Realtors and sell them as a service.", color: "text-indigo-400" }
        ],
        faqs: [
            { question: "Can I resell this?", answer: "Yes! We offer a white-label partner program specifically for agencies." },
            { question: "How hard is it to build a bot?", answer: "Our drag-and-drop builder makes it easy. You can build a custom bot for a client in minutes." },
            { question: "Do you handle the telephony?", answer: "Yes, we handle all the carrier complexity. You just provision a number and click 'Active'." }
        ]
    },
    'bpo': {
        title: "Next-Gen Call Center AI",
        subtitle: "Voice AI for BPOs",
        description: "Scale your operations infinitely, reduce wait times to zero, and deliver consistent quality across every call.",
        heroBadge: "Voice AI for BPOs & Call Centers",
        problem: {
            title: "SCALING HUMAN AGENTS = <br />PROFIT KILLER.",
            stat: "Average BPO attrition rate is 40% annually.",
            context: "Hiring, training, and retaining agents is expensive and slow. Spikes in call volume kill your SLAs and ruin customer satisfaction."
        },
        capabilities: [
            {
                title: "Infinite Elastic Scalability",
                description: "Handle 10 or 10,000 concurrent calls instantly. No more staffing headaches during seasonal peaks or marketing blasts.",
                icon: "📈",
                color: "from-sales-orange to-orange-600",
                points: ["Zero hold times", "Instant ramp-up", "24/7/365 availability"]
            },
            {
                title: "Real-Time Accent Localization",
                description: "Deploy agents with perfect native accents for any region (US, UK, AU) to increase trust and comprehension.",
                icon: "🌍",
                color: "from-indigo-500 to-purple-600",
                points: ["Neutralize accents", "Local dialects", "Cultural nuance adaptation"]
            },
            {
                title: "Automated QA & Compliance",
                description: "100% of calls are monitored and scored for compliance, script adherence, and sentiment. Not just a random sample.",
                icon: "✅",
                color: "from-blue-500 to-cyan-500",
                points: ["100% call coverage", "Red flag alerts", "Automated coaching insights"]
            }
        ],
        integrations: [
            {
                title: "Genesys / Five9",
                description: "Seamless SIP trunking and data passing to your existing contact center infrastructure.",
                icon: "🎧"
            },
            {
                title: "Zendesk",
                description: "Auto-create tickets and populate fields based on voice intent.",
                icon: "🎫"
            },
            {
                title: "Salesforce",
                description: "Deep CRM integration for personalized caller experiences.",
                icon: "☁️"
            }
        ],
        features: [
            {
                icon: "Users",
                title: "Elastic Staffing",
                description: "Scale up or down instantly. Handle Black Friday spikes without hiring temporary staff.",
                gradient: "from-blue-500 to-indigo-600"
            },
            {
                icon: "Globe",
                title: "Global Support",
                description: "Support customers in 30+ languages without hiring specialized bilingual agents.",
                gradient: "from-green-500 to-teal-500"
            },
            {
                icon: "Shield",
                title: "Compliance Guardrails",
                description: "Ensure every agent sticks to the script and compliance requirements every single time.",
                gradient: "from-red-500 to-rose-600"
            }
        ],
        useCases: [
            { icon: "Headphones", title: "Tier 1 Support", desc: "Deflect 70% of routine calls (password reset, order status) so humans handle complex issues.", color: "text-blue-400" },
            { icon: "PhoneForwarded", title: "Overflow Handling", desc: "Act as a safety net during high volume, taking calls that would otherwise wait on hold.", color: "text-orange-400" },
            { icon: "CheckSquare", title: "Surveys & QA", desc: "Conduct post-call satisfaction surveys (CSAT/NPS) automatically.", color: "text-green-400" },
            { icon: "AlertTriangle", title: "Outage Notifications", desc: "Proactively inform callers of known service outages prevents ticket floods.", color: "text-red-400" },
            { icon: "Database", title: "Data Verification", desc: "Verify customer identity and update contact details securely.", color: "text-purple-400" },
            { icon: "Calendar", title: "Reservations", desc: "Handle booking modifications and cancellations for hospitality clients.", color: "text-yellow-400" }
        ],
        faqs: [
            { question: "Can it replace my agents?", answer: "It replaces the robotic parts of their job, allowing your best agents to focus on high-value, complex empathy-driven tasks." },
            { question: "How does it handle angry callers?", answer: "It detects negative sentiment instantly and can be configured to de-escalate or transfer to a senior human lead." },
            { question: "Is it secure for banking clients?", answer: "Yes, we support PCI-DSS compliant payment collection and SOC2 Type II security standards." }
        ]
    },
    'saas': {
        title: "Support & Sales at Speed",
        subtitle: "Voice AI for SaaS",
        description: "Scale customer success and inbound sales without adding headcount.",
        heroBadge: "Voice AI for SaaS",
        problem: {
            title: "SLOW SUPPORT = <br />CHURN.",
            stat: "60% of customers unsubscribe after one bad support experience.",
            context: "Your CS team is drowning in 'reset password' calls while high-value enterprise deals slip through the cracks. SyncFlo automates the noise so you can focus on growth."
        },
        capabilities: [
            {
                title: "Tier 1 Technical Deflection",
                description: "Resolve 60% of common tickets instantly. The AI troubleshoots errors, guides users through UI steps, and resets accounts securely.",
                icon: "🛠️",
                color: "from-purple-500 to-pink-500",
                points: ["Password resets", "Feature walkthroughs", "Error code resolution"]
            },
            {
                title: "Inbound Lead Qualification",
                description: "Stop wasting AE time on students and non-buyers. Validate budget, authority, and need (BANT) before booking a demo.",
                icon: "🎯",
                color: "from-blue-500 to-indigo-500",
                points: ["BANT qualification", "Company size lookup", "Competitor usage checks"]
            },
            {
                title: "Proactive Churn Prevention",
                description: "Detect usage drops usage via API and proactively call users to offer help, training, or discounts to stay.",
                icon: "🛡️",
                color: "from-red-500 to-orange-500",
                points: ["Exit interviews", "Win-back offers", "Usage training scheduling"]
            }
        ],
        integrations: [
            {
                title: "Salesforce / HubSpot",
                description: "Sync every call log and lead status update instantly.",
                icon: "☁️"
            },
            {
                title: "Zendesk / Intercom",
                description: "Create, update, and resolve tickets via voice.",
                icon: "🎫"
            },
            {
                title: "Stripe",
                description: "Handle dunning and payment updates securely.",
                icon: "💳"
            }
        ],
        features: [
            {
                icon: "Headphones",
                title: "Tier 1 Support",
                description: "Deflect 60% of tickets by solving common technical issues and billing questions via voice.",
                gradient: "from-purple-500 to-pink-500"
            },
            {
                icon: "Filter",
                title: "Lead Qualification",
                description: "Qualify inbound sign-ups before they reach your Account Executives.",
                gradient: "from-blue-500 to-indigo-500"
            },
            {
                icon: "RefreshCw",
                title: "Churn Prevention",
                description: "Automate exit surveys and win-back offers for cancelled subscriptions.",
                gradient: "from-red-500 to-orange-500"
            }
        ],
        useCases: [
            { icon: "HelpCircle", title: "Technical Triage", desc: "Troubleshoot common errors with users visually/verbally before routing to engineering.", color: "text-blue-400" },
            { icon: "UserPlus", title: "Onboarding", desc: "Welcome new enterprise users and schedule their implementation kickoff calls.", color: "text-green-400" },
            { icon: "DollarSign", title: "Upsell Campaigns", desc: "Call freemium users who hit limits to offer them a discount on the Pro plan.", color: "text-yellow-400" },
            { icon: "CreditCard", title: "Dunning Mgmt", desc: "Call users with failed payments to update their card details securely.", color: "text-red-400" },
            { icon: "Calendar", title: "Demo Scheduling", desc: "Instant response to 'Request Demo' forms to book a time with an AE immediately.", color: "text-purple-400" },
            { icon: "MessageSquare", title: "Product Feedback", desc: "Conduct qualitative interviews at scale to gather feedback on new features.", color: "text-orange-400" }
        ],
        faqs: [
            { question: "Can it verify a user's account?", answer: "Yes, through API integrations, we can verify caller ID or ask for a PIN to access account-level data." },
            { question: "Does it work for enterprise sales?", answer: "It shines at qualifying inbound interest so your expensive AEs only talk to BANT-qualified prospects." },
            { question: "What languages does it speak?", answer: "Over 20 languages, allowing you to support a global user base 24/7." }
        ]
    },
    'e-commerce': {
        title: "Voice-Powered Commerce",
        subtitle: "Voice AI for E-commerce",
        description: "Handle order inquiries, returns, and sales support over the phone, automatically.",
        heroBadge: "Voice AI for E-commerce",
        problem: {
            title: "WISMO CALLS = <br />MARGIN KILLER.",
            stat: "Support costs eat up 15-20% of low-margin e-comm revenue.",
            context: "'Where is my order?' calls flood your lines, preventing your team from helping customers who actually want to buy. Automate the status updates and free up your staff."
        },
        capabilities: [
            {
                title: "WISMO Automation",
                description: "Instantly answer 'Where Is My Order?' by syncing with Shopify/WooCommerce. Provide real-time tracking updates without human intervention.",
                icon: "📦",
                color: "from-orange-400 to-yellow-500",
                points: ["Real-time carrier lookup", "Expected delivery dates", "Delay notifications"]
            },
            {
                title: "Returns & Exchanges",
                description: "Streamline the returns process. Validate eligibility, generate shipping labels, and email them to the customer instantly.",
                icon: "🔄",
                color: "from-blue-400 to-green-400",
                points: ["Policy validation", "Label generation", "Exchange processing"]
            },
            {
                title: "Abandoned Cart Recovery",
                description: "Call high-value cart abandoners within 15 minutes. Offer a personalized discount or answer questions to close the sale.",
                icon: "🛒",
                color: "from-pink-500 to-rose-500",
                points: ["Time-sensitive offers", "Objection handling", "Instant checkout help"]
            }
        ],
        integrations: [
            {
                title: "Shopify / WooCommerce",
                description: "Deep integration for order status, customer data, and product inventory.",
                icon: "🛍️"
            },
            {
                title: "Gorgias / Zendesk",
                description: "Log every voice interaction alongside email and chat tickets.",
                icon: "📝"
            },
            {
                title: "Klaviyo / Attentive",
                description: "Trigger SMS/Email flows based on call outcomes.",
                icon: "📧"
            }
        ],
        features: [
            {
                icon: "Package",
                title: "Order Tracking",
                description: "Customers can ask 'Where is my order?' and get real-time status updates instantly.",
                gradient: "from-orange-400 to-yellow-500"
            },
            {
                icon: "RefreshCcw",
                title: "Returns Automation",
                description: "Process return requests and issue shipping labels via voice without agent intervention.",
                gradient: "from-blue-400 to-green-400"
            },
            {
                icon: "ShoppingBag",
                title: "Sales Support",
                description: "Answer product questions and help customers checkout over the phone.",
                gradient: "from-pink-500 to-rose-500"
            }
        ],
        useCases: [
            { icon: "Truck", title: "WISMO Calls", desc: "Deflect the #1 support question: 'Where Is My Order?' with automated tracking integration.", color: "text-orange-400" },
            { icon: "AlertOctagon", title: "Issue Resolution", desc: "Handle 'damaged item' or 'missing package' reports by gathering details and opening tickets.", color: "text-red-400" },
            { icon: "CreditCard", title: "Phone Orders", desc: "Enable customers to place orders securely over the phone (great for older demographics).", color: "text-green-400" },
            { icon: "Bell", title: "Abandoned Cart", desc: "Call high-value cart abandoners to offer help or a discount to complete the purchase.", color: "text-blue-400" },
            { icon: "Star", title: "Review Requests", desc: "Call satisfied customers to thank them and ask for a review.", color: "text-yellow-400" },
            { icon: "User", title: "Loyalty Program", desc: "Answer questions about points balance and rewards tier status.", color: "text-purple-400" }
        ],
        faqs: [
            { question: "Does it integrate with Shopify?", answer: "Yes, deep integration with Shopify/WooCommerce to read order status and customer details." },
            { question: "Can it issue refunds?", answer: "You can set rules. For example, 'auto-refund if <$50', otherwise route to agent." },
            { question: "Is it available 24/7?", answer: "Yes, capture sales and support customers even when your team is asleep." }
        ]
    }
}
