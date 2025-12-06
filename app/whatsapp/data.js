export const industryData = {
    'e-commerce': {
        title: "Turn Chats into Revenue",
        subtitle: "WhatsApp for E-commerce",
        description: "Deploy an AI assistant on WhatsApp that lets customers browse products, place orders, and pay directly in the chat.",
        heroBadge: "WhatsApp for E-commerce",
        features: [
            {
                icon: "MessageSquare",
                title: "Boost Conversion Rates",
                description: "Engage customers with interactive product catalogs and enable one-click ordering right in the chat.",
                gradient: "from-green-accent to-emerald-500"
            },
            {
                icon: "ShoppingBag",
                title: "Increase Order Value",
                description: "Automatically offer personalized upsells and cross-sells based on cart items and purchase history.",
                gradient: "from-blue-accent to-cyan-500"
            },
            {
                icon: "Zap",
                title: "Build Customer Loyalty",
                description: "Provide an effortless shopping experience with proactive updates and 24/7 support on their favorite app.",
                gradient: "from-purple-500 to-pink-500"
            }
        ],
        useCases: [
            { icon: "ShoppingCart", title: "In-Chat Ordering", desc: "Enable customers to browse your full catalog, select variants, and complete checkout without ever leaving WhatsApp.", color: "text-blue-400" },
            { icon: "CreditCard", title: "Secure Payments", desc: "Process payments instantly and securely using native integrations with Stripe, Razorpay, and WhatsApp Pay.", color: "text-green-400" },
            { icon: "RefreshCw", title: "Abandoned Cart", desc: "Automatically re-engage customers who left items behind with personalized reminders and one-click recovery links.", color: "text-red-400" },
            { icon: "Truck", title: "Order Updates", desc: "Keep customers informed with real-time automated notifications for order confirmation, shipping, and delivery.", color: "text-yellow-400" },
            { icon: "Megaphone", title: "Promotions", desc: "Drive sales with targeted broadcast campaigns announcing new arrivals, flash sales, and exclusive offers.", color: "text-orange-400" },
            { icon: "Headphones", title: "24/7 Support", desc: "Resolve customer queries instantly with an AI assistant that handles FAQs, returns, and order tracking around the clock.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects directly to the e-commerce platforms and tools you already use, enabling a powerful, unified system for conversational commerce.",
            items: [
                { title: "E-commerce Platforms", description: "Native support for Shopify, WooCommerce, Magento, and BigCommerce to sync products, orders, and customers." },
                { title: "Payment Gateways", description: "Enable direct in-chat payments through integrations with Stripe, Razorpay, PayPal, and WhatsApp Pay." },
                { title: "Robust API & Webhooks", description: "Use our developer-friendly API to build custom connections to any CRM, ERP, or logistics software." }
            ]
        },
        faqs: [
            { question: "Can customers really order and pay without leaving WhatsApp?", answer: "Yes. Our AI integrates with your e-commerce backend (like Shopify) to pull product catalogs and manage carts. Through payment gateway integrations, customers can complete their purchase directly within the secure WhatsApp interface." },
            { question: "How does abandoned cart recovery work?", answer: "By integrating with your e-commerce platform, our AI can detect when a customer adds items to their cart but doesn't complete the purchase. It automatically sends a personalized WhatsApp message with a reminder and a direct link to their cart." },
            { question: "Is it secure to process payments via WhatsApp?", answer: "Security is paramount. We leverage the native security of the WhatsApp Business Platform and integrate with PCI-compliant payment gateways. Customer payment details are tokenized and handled directly by the payment processor." }
        ],
        mockConversation: [
            { isUser: true, text: "I'm looking for Air Jordans.", time: "10:00 AM" },
            { isUser: false, text: "Of course! The \"Air Jordan 1 Retro High OG\" is a classic. Here are the details. You can add to cart directly.", time: "10:00 AM", product: { title: "Air Jordan 1 Retro High OG", price: "$185.00", image: "https://placehold.co/200x200/202C33/FFFFFF?text=Shoe" } },
            { isUser: false, text: "Great choice! Your cart is ready. Shall we proceed to payment?", time: "10:01 AM", actions: ["Pay Now"] }
        ],
        contactName: "SyncFlo Store",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=S"
    },
    'real-estate': {
        title: "Close Deals Faster with AI",
        subtitle: "WhatsApp for Real Estate",
        description: "Automate lead qualification, property showings, and client communication directly on WhatsApp, 24/7.",
        heroBadge: "WhatsApp for Real Estate",
        features: [
            {
                icon: "MessageSquare",
                title: "24/7 Lead Qualification",
                description: "Automatically engage new leads, gather requirements, and pre-qualify them before human intervention.",
                gradient: "from-blue-accent to-indigo-500"
            },
            {
                icon: "Calendar",
                title: "Automated Scheduling",
                description: "Clients can view availability and book property tours directly via WhatsApp, reducing back-and-forth.",
                gradient: "from-green-accent to-emerald-500"
            },
            {
                icon: "Home",
                title: "Instant Property Info",
                description: "Provide instant access to property details, photos, and virtual tours based on client preferences.",
                gradient: "from-purple-500 to-pink-500"
            }
        ],
        useCases: [
            { icon: "UserCheck", title: "Lead Nurturing", desc: "Automatically qualify and nurture leads with personalized follow-ups, ensuring no potential buyer slips through the cracks.", color: "text-blue-400" },
            { icon: "Key", title: "Open Houses", desc: "Streamline event management by allowing clients to register for open houses and receive digital brochures instantly.", color: "text-green-400" },
            { icon: "FileText", title: "Documents", desc: "Securely share property documents, contracts, and disclosures, and facilitate e-signatures directly within the chat.", color: "text-red-400" },
            { icon: "HelpCircle", title: "Client Support", desc: "Provide instant answers to common questions about listings, neighborhoods, and financing, available 24/7.", color: "text-yellow-400" },
            { icon: "Bell", title: "Market Alerts", desc: "Keep clients engaged by sending automated alerts for new listings that match their specific criteria and budget.", color: "text-orange-400" },
            { icon: "Smile", title: "Post-Sale", desc: "Maintain long-term relationships with automated move-in check-ins, anniversary greetings, and referral requests.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects directly to the real estate platforms and tools you already use, enabling a powerful, unified system for client management.",
            items: [
                { title: "CRM Systems", description: "Sync leads, contacts, and property interests with popular real estate CRMs like Salesforce, HubSpot, and Zoho CRM." },
                { title: "Property Listing Platforms", description: "Integrate with MLS, Zillow, Realtor.com, and custom property databases to pull and push listing information." },
                { title: "Calendar Tools", description: "Connect with Google Calendar, Outlook Calendar, and Calendly for seamless appointment booking." }
            ]
        },
        faqs: [
            { question: "How does the AI qualify leads for real estate?", answer: "Our AI engages leads with a series of questions to understand their property preferences, budget, timeline, and pre-approval status. It scores leads and passes the most qualified ones to your agents." },
            { question: "Can clients schedule property viewings through WhatsApp?", answer: "Yes. The AI can display your available showing slots (synced with your calendar) and allow clients to book appointments directly within the chat." },
            { question: "How does the AI handle property information requests?", answer: "The AI can instantly retrieve and send detailed property information, including descriptions, photos, virtual tour links, and floor plans, based on client queries." }
        ],
        mockConversation: [
            { isUser: true, text: "I'm interested in properties in downtown.", time: "10:00 AM" },
            { isUser: false, text: "Great! We have several listings in the downtown area. What kind of property are you looking for (e.g., apartment, house, commercial)?", time: "10:00 AM" },
            { isUser: true, text: "An apartment, 2 bedrooms, budget around $500k.", time: "10:01 AM" },
            { isUser: false, text: "I found a perfect 2-bedroom apartment for $480,000. Would you like to see more details or schedule a virtual tour?", time: "10:01 AM", product: { title: "Luxury Downtown Apartment", price: "2 Bed | 2 Bath | 1200 sqft", image: "https://placehold.co/200x150/202C33/FFFFFF?text=Apartment" } },
            { isUser: false, text: "Ready to take the next step? We can connect you with an agent for a personalized consultation.", time: "10:02 AM", actions: ["Connect with Agent"] }
        ],
        contactName: "SyncFlo Realty",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=R"
    },
    'healthcare': {
        title: "Modernize Patient Engagement",
        subtitle: "WhatsApp for Healthcare",
        description: "Automate appointment booking, patient support, and information dissemination securely and efficiently, 24/7.",
        heroBadge: "WhatsApp for Healthcare",
        features: [
            {
                icon: "Calendar",
                title: "Appointment Management",
                description: "Allow patients to book, reschedule, and receive reminders for appointments directly via WhatsApp.",
                gradient: "from-blue-accent to-cyan-500"
            },
            {
                icon: "Heart",
                title: "Enhanced Patient Support",
                description: "Provide instant answers to FAQs, pre-visit instructions, and post-appointment follow-ups, 24/7.",
                gradient: "from-red-400 to-pink-500"
            },
            {
                icon: "ShieldCheck",
                title: "Secure Info Delivery",
                description: "Securely send lab results, prescription reminders, and health tips directly to patients' WhatsApp.",
                gradient: "from-green-accent to-emerald-500"
            }
        ],
        useCases: [
            { icon: "CalendarCheck", title: "Booking & Reminders", desc: "Streamline scheduling with automated appointment booking, rescheduling, and timely reminders to reduce no-shows.", color: "text-blue-400" },
            { icon: "Pill", title: "Prescription Refills", desc: "Allow patients to easily request prescription refills and receive notifications when their medication is ready for pickup.", color: "text-green-400" },
            { icon: "FileText", title: "Lab Results", desc: "Securely deliver lab results and medical reports directly to patients' WhatsApp, protected by end-to-end encryption.", color: "text-red-400" },
            { icon: "Info", title: "Patient Education", desc: "Empower patients with instant access to FAQs, pre-operative instructions, and post-care guidelines.", color: "text-yellow-400" },
            { icon: "Video", title: "Virtual Triage", desc: "Use AI to perform initial symptom assessment and route patients to the appropriate level of care or specialist.", color: "text-orange-400" },
            { icon: "ClipboardList", title: "Feedback", desc: "Automatically collect patient feedback and satisfaction surveys after appointments to continuously improve service quality.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects directly to the healthcare platforms and tools you already use, enabling a powerful, unified system for patient management.",
            items: [
                { title: "EMR/EHR Systems", description: "Sync patient records, appointment data, and medical history with Electronic Medical/Health Record systems." },
                { title: "Practice Management", description: "Integrate with systems for billing, scheduling, and administrative tasks to streamline operations." },
                { title: "Telemedicine Platforms", description: "Connect with virtual consultation platforms to facilitate seamless patient-provider interactions." }
            ]
        },
        faqs: [
            { question: "Is patient data handled securely and compliantly?", answer: "Absolutely. SyncFlo Ai operates through the official WhatsApp Business API, ensuring end-to-end encryption. We prioritize data security and compliance with healthcare regulations." },
            { question: "Can patients book and manage appointments via WhatsApp?", answer: "Yes, our AI can integrate with your existing scheduling systems, allowing patients to check doctor availability, book new appointments, and reschedule or cancel existing ones." },
            { question: "How does the AI handle emergency queries?", answer: "For urgent or emergency queries, the AI is programmed to immediately direct the patient to appropriate emergency services or a human agent, ensuring critical situations are handled safely." }
        ],
        mockConversation: [
            { isUser: true, text: "I need to book an appointment with a dermatologist.", time: "10:00 AM" },
            { isUser: false, text: "Certainly! What is your preferred date and time for the appointment?", time: "10:00 AM" },
            { isUser: true, text: "Next Tuesday morning, if possible.", time: "10:01 AM" },
            { isUser: false, text: "We have an opening at 10:30 AM on Tuesday. Shall I book that for you?", time: "10:01 AM", actions: ["Yes, book it", "Check other times"] },
            { isUser: true, text: "Yes, book it.", time: "10:02 AM" },
            { isUser: false, text: "Confirmed! Your appointment is set for Tuesday at 10:30 AM. We'll send a reminder 24 hours before.", time: "10:02 AM" }
        ],
        contactName: "SyncFlo Health",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=H"
    },
    'education': {
        title: "Transform Student Engagement",
        subtitle: "WhatsApp for Education",
        description: "Automate admissions inquiries, provide instant student support, and streamline communication for educational institutions.",
        heroBadge: "WhatsApp for Education",
        features: [
            {
                icon: "MessageSquare",
                title: "24/7 Student Support",
                description: "Instantly answer student and parent FAQs, provide course information, and resolve common queries.",
                gradient: "from-yellow-400 to-orange-500"
            },
            {
                icon: "FileCheck",
                title: "Automated Admissions",
                description: "Guide prospective students through the application process, answer admissions questions, and send reminders.",
                gradient: "from-blue-accent to-indigo-500"
            },
            {
                icon: "Bell",
                title: "Personalized Updates",
                description: "Send targeted course updates, assignment reminders, and personalized announcements to students and parents.",
                gradient: "from-green-accent to-emerald-500"
            }
        ],
        useCases: [
            { icon: "HelpCircle", title: "Admissions FAQ", desc: "Reduce administrative burden by automating answers to common questions about application deadlines, requirements, and fees.", color: "text-blue-400" },
            { icon: "BookOpen", title: "Course Info", desc: "Provide prospective students with instant access to detailed course catalogs, syllabi, and faculty information.", color: "text-green-400" },
            { icon: "DollarSign", title: "Fee Reminders", desc: "Ensure timely payments with automated fee reminders and secure payment links sent directly to parents or students.", color: "text-red-400" },
            { icon: "LifeBuoy", title: "Student Support", desc: "Offer 24/7 academic and administrative support, helping students with everything from library hours to exam schedules.", color: "text-yellow-400" },
            { icon: "Users", title: "Parent Comms", desc: "Keep parents informed and engaged with direct updates on student attendance, grades, and school events.", color: "text-orange-400" },
            { icon: "GraduationCap", title: "Alumni", desc: "Build a strong alumni network by sharing news, event invitations, and fundraising opportunities via WhatsApp.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects directly to the educational platforms and tools you already use, enabling a powerful, unified system.",
            items: [
                { title: "LMS/SIS Systems", description: "Sync student data, course enrollments, and grades with Learning Management Systems (LMS) and Student Information Systems (SIS)." },
                { title: "CRM Systems", description: "Integrate with CRM platforms to manage prospective student inquiries and track admissions progress." },
                { title: "Calendar Tools", description: "Connect with Google Calendar, Outlook Calendar, and Calendly for seamless appointment booking for counseling." }
            ]
        },
        faqs: [
            { question: "How does the AI handle admissions inquiries?", answer: "Our AI can answer common questions about programs, requirements, deadlines, and financial aid. It can also guide prospective students through the application process." },
            { question: "Can students receive course updates via WhatsApp?", answer: "Yes, institutions can use SyncFlo Ai to send automated course announcements, assignment reminders, schedule changes, and other important updates." },
            { question: "Is student data secure?", answer: "Security and privacy are paramount. We operate through the official WhatsApp Business API with end-to-end encryption and adhere to strict data protection protocols." }
        ],
        mockConversation: [
            { isUser: true, text: "I'm interested in the computer science program.", time: "10:00 AM" },
            { isUser: false, text: "Great choice! Our Computer Science program offers specializations in AI, Cybersecurity, and Software Engineering. What are your academic goals?", time: "10:00 AM" },
            { isUser: true, text: "What are the admission requirements for the AI specialization?", time: "10:01 AM" },
            { isUser: false, text: "For the AI specialization, you'll need a strong background in mathematics and programming. We require a minimum GPA of 3.5. Would you like a link to the application portal?", time: "10:01 AM", product: { title: "Computer Science: AI Specialization", price: "Degrees: BS, MS, PhD", image: "https://placehold.co/200x120/00A3FF/FFFFFF?text=Course" } },
            { isUser: false, text: "Ready to learn more? We can schedule a call with an admissions advisor.", time: "10:02 AM", actions: ["Schedule a Call"] }
        ],
        contactName: "SyncFlo Academy",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=A"
    },
    'automotive': {
        title: "Drive Sales & Service",
        subtitle: "WhatsApp for Automotive",
        description: "Automate test drive bookings, service appointments, and lead qualification for your dealership or service center.",
        heroBadge: "WhatsApp for Automotive",
        features: [
            {
                icon: "Filter",
                title: "24/7 Lead Qualification",
                description: "Never miss a lead. Our AI qualifies potential buyers and service customers around the clock.",
                gradient: "from-red-500 to-orange-500"
            },
            {
                icon: "Calendar",
                title: "Automated Booking",
                description: "Allow customers to book test drives and service appointments instantly, reducing administrative overhead.",
                gradient: "from-blue-accent to-cyan-500"
            },
            {
                icon: "Bell",
                title: "Service Reminders",
                description: "Increase customer retention by sending automated reminders for routine maintenance and inspections.",
                gradient: "from-green-accent to-emerald-500"
            }
        ],
        useCases: [
            { icon: "Car", title: "Test Drives", desc: "Enable potential buyers to browse inventory and book test drives instantly, syncing directly with your dealership's calendar.", color: "text-blue-400" },
            { icon: "Wrench", title: "Service Booking", desc: "Simplify maintenance with automated service scheduling, allowing customers to book slots for repairs and tune-ups 24/7.", color: "text-green-400" },
            { icon: "Info", title: "Vehicle Info", desc: "Provide instant, detailed specifications, pricing, and brochures for any vehicle in your inventory upon request.", color: "text-red-400" },
            { icon: "UserPlus", title: "Lead Nurturing", desc: "Keep potential buyers engaged with personalized follow-ups, financing options, and new arrival notifications.", color: "text-yellow-400" },
            { icon: "DollarSign", title: "Trade-in", desc: "Offer preliminary trade-in valuations by collecting vehicle details and photos through a guided WhatsApp conversation.", color: "text-orange-400" },
            { icon: "Star", title: "Feedback", desc: "Automatically request and collect customer reviews and feedback after every service visit or vehicle purchase.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects with your existing Dealership Management System (DMS), CRM, and other tools.",
            items: [
                { title: "DMS & CRM Integration", description: "Sync customer data, vehicle inventory, and service history with your existing systems." },
                { title: "Scheduling Tools", description: "Connect with your calendar software to manage test drives and service appointments seamlessly." }
            ]
        },
        faqs: [
            { question: "How does the AI handle test drive scheduling?", answer: "The AI can access your dealership's calendar to offer available slots for test drives. It can also collect necessary customer information before the appointment." },
            { question: "Can it provide vehicle trade-in estimates?", answer: "Yes, the AI can be programmed to ask for key vehicle details (make, model, year, mileage, condition) to provide customers with an initial trade-in estimate." }
        ],
        mockConversation: [
            { isUser: true, text: "Hi, I'd like to book a service for my car.", time: "10:00 AM" },
            { isUser: false, text: "Of course. What is the make and model of your vehicle?", time: "10:00 AM" },
            { isUser: true, text: "It's a 2023 Tesla Model 3.", time: "10:01 AM" },
            { isUser: false, text: "Great. We have openings tomorrow at 9 AM and 2 PM. Which time works for you?", time: "10:01 AM", actions: ["9:00 AM", "2:00 PM"] },
            { isUser: true, text: "9:00 AM works for me.", time: "10:02 AM" },
            { isUser: false, text: "Perfect. Your service appointment is confirmed for tomorrow at 9:00 AM. We look forward to seeing you!", time: "10:02 AM" }
        ],
        contactName: "SyncFlo Motors",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=S"
    },
    'gyms-fitness': {
        title: "Boost Member Engagement",
        subtitle: "WhatsApp for Fitness",
        description: "Automate class bookings, membership inquiries, and workout reminders for your gym or fitness center.",
        heroBadge: "WhatsApp for Fitness",
        features: [
            {
                icon: "CalendarCheck",
                title: "Effortless Booking",
                description: "Allow members to view schedules and book classes 24/7, filling your classes and reducing admin work.",
                gradient: "from-cyan-400 to-blue-500"
            },
            {
                icon: "Heart",
                title: "Member Retention",
                description: "Keep members engaged with personalized reminders, motivational messages, and community updates.",
                gradient: "from-red-400 to-pink-500"
            },
            {
                icon: "DollarSign",
                title: "24/7 Sales",
                description: "Answer questions about membership plans and pricing, and guide new members through the sign-up process.",
                gradient: "from-green-accent to-emerald-500"
            }
        ],
        useCases: [
            { icon: "Calendar", title: "Class Scheduling", desc: "Empower members to view class schedules, book their spots, and manage cancellations effortlessly via WhatsApp.", color: "text-blue-400" },
            { icon: "Users", title: "Memberships", desc: "Automate membership inquiries, renewals, and plan upgrades, making it easy for prospects to join and members to stay.", color: "text-green-400" },
            { icon: "User", title: "Personal Training", desc: "Facilitate direct booking of personal training sessions, syncing availability between trainers and clients.", color: "text-red-400" },
            { icon: "Megaphone", title: "Broadcasts", desc: "Keep your community active with instant updates on new classes, schedule changes, and exclusive gym challenges.", color: "text-yellow-400" },
            { icon: "MessageSquare", title: "Feedback", desc: "Gather valuable insights by automatically asking members for feedback after classes or training sessions.", color: "text-orange-400" },
            { icon: "LifeBuoy", title: "Support", desc: "Provide round-the-clock answers to questions about facility hours, amenities, and gym policies.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects with popular gym management and booking software.",
            items: [
                { title: "Membership Management", description: "Sync member data, class schedules, and booking information." },
                { title: "Payment Gateways", description: "Handle membership payments and class fees directly through WhatsApp." }
            ]
        },
        faqs: [
            { question: "How does the AI handle class bookings with limited spots?", answer: "By integrating with your booking software, the AI has real-time access to class availability. It will only offer classes with open spots and can manage waitlists." },
            { question: "Can we send broadcast messages to all our members?", answer: "Yes, you can send broadcast messages to all your members who have opted-in. This is perfect for announcing new classes, promotions, or important updates." }
        ],
        mockConversation: [
            { isUser: false, text: "Welcome to SyncFlo Fitness! Ready to book a class or have questions about memberships?", time: "09:55 AM" },
            { isUser: true, text: "I'd like to book a yoga class for tomorrow.", time: "10:00 AM" },
            { isUser: false, text: "We have a Vinyasa Flow class at 6 PM and a Restorative Yoga class at 8 PM. Which one would you like to join?", time: "10:00 AM", actions: ["Vinyasa Flow - 6 PM", "Restorative - 8 PM"] },
            { isUser: true, text: "Vinyasa Flow, please.", time: "10:01 AM" },
            { isUser: false, text: "You are all booked for Vinyasa Flow tomorrow at 6 PM. We'll send you a reminder an hour before the class. See you on the mat!", time: "10:01 AM" }
        ],
        contactName: "SyncFlo Fitness",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=F"
    },
    'hospitality': {
        title: "Elevate Guest Experiences",
        subtitle: "WhatsApp for Hospitality",
        description: "Automate bookings, room service, and guest inquiries for hotels and restaurants, providing seamless 24/7 service.",
        heroBadge: "WhatsApp for Hospitality",
        features: [
            {
                icon: "Bell",
                title: "24/7 Concierge",
                description: "Provide instant responses to guest inquiries, handle bookings, and offer recommendations around the clock.",
                gradient: "from-purple-500 to-indigo-500"
            },
            {
                icon: "TrendingUp",
                title: "Direct Bookings",
                description: "Drive more direct bookings through WhatsApp, reducing reliance on third-party platforms and commissions.",
                gradient: "from-green-accent to-emerald-500"
            },
            {
                icon: "Heart",
                title: "Guest Loyalty",
                description: "Provide a seamless and personalized guest experience that encourages repeat business and positive reviews.",
                gradient: "from-red-400 to-pink-500"
            }
        ],
        useCases: [
            { icon: "Calendar", title: "Reservations", desc: "Enable guests to check availability and book rooms or tables instantly, with real-time confirmation.", color: "text-blue-400" },
            { icon: "Coffee", title: "Room Service", desc: "Streamline in-stay dining with a digital menu and ordering system that lets guests place orders directly from their chat.", color: "text-green-400" },
            { icon: "Info", title: "Instant FAQs", desc: "Enhance the guest experience by providing instant answers to questions about amenities, pool hours, and local attractions.", color: "text-red-400" },
            { icon: "Star", title: "Feedback", desc: "Capture guest sentiment in real-time by requesting feedback and reviews immediately after checkout.", color: "text-yellow-400" },
            { icon: "Tag", title: "Promotions", desc: "Drive revenue with targeted offers for spa treatments, dining specials, and future stay packages.", color: "text-orange-400" },
            { icon: "ArrowUp", title: "Upselling", desc: "Maximize revenue by offering personalized room upgrades, late checkouts, and special packages prior to arrival.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects directly to the hospitality platforms and tools you already use.",
            items: [
                { title: "Booking Engines & PMS", description: "Sync reservations, guest data, and availability with your Property Management System (PMS) and booking engines." },
                { title: "POS Systems", description: "Integrate with Point of Sale (POS) systems for seamless ordering and billing for restaurants and room service." }
            ]
        },
        faqs: [
            { question: "How does the AI handle booking and reservation requests?", answer: "Our AI can integrate with your existing booking system to check real-time availability, make reservations, and send instant confirmations to guests, all within WhatsApp." }
        ],
        mockConversation: [
            { isUser: true, text: "I'd like to book a table for 2 tonight.", time: "05:00 PM" },
            { isUser: false, text: "Of course! What time would you like to book for?", time: "05:00 PM" },
            { isUser: true, text: "8:00 PM please.", time: "05:01 PM" },
            { isUser: false, text: "Your table for 2 at 8:00 PM is confirmed. We look forward to seeing you!", time: "05:01 PM" },
            { isUser: false, text: "While you're here, would you like to see our menu or request any special arrangements?", time: "05:02 PM", actions: ["View Menu"] }
        ],
        contactName: "SyncFlo Hotel",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=H"
    },
    'salons-spas': {
        title: "Effortless Booking",
        subtitle: "WhatsApp for Salons & Spas",
        description: "Automate appointment scheduling, service inquiries, and client reminders on WhatsApp.",
        heroBadge: "WhatsApp for Salons",
        features: [
            {
                icon: "Calendar",
                title: "24/7 Booking",
                description: "Allow clients to book, reschedule, or cancel appointments anytime, directly through WhatsApp.",
                gradient: "from-pink-500 to-rose-500"
            },
            {
                icon: "CheckCircle",
                title: "Reduce No-Shows",
                description: "Send automated appointment reminders and confirmations to reduce no-shows and keep your schedule full.",
                gradient: "from-green-accent to-emerald-500"
            },
            {
                icon: "Tag",
                title: "Promote Offers",
                description: "Send targeted promotions, last-minute availability, and special offers to your client list to boost revenue.",
                gradient: "from-purple-500 to-indigo-500"
            }
        ],
        useCases: [
            { icon: "CalendarCheck", title: "Scheduling", desc: "Eliminate phone tag with fully automated appointment booking, rescheduling, and cancellations available 24/7.", color: "text-blue-400" },
            { icon: "DollarSign", title: "Pricing Info", desc: "Provide instant access to your full service menu and price list, helping clients choose the right treatments.", color: "text-green-400" },
            { icon: "Clipboard", title: "Prep Info", desc: "Ensure clients are ready for their treatments by automatically sending pre-appointment instructions and care tips.", color: "text-red-400" },
            { icon: "Star", title: "Reviews", desc: "Build your online reputation by automatically requesting reviews from satisfied clients shortly after their service.", color: "text-yellow-400" },
            { icon: "Heart", title: "Loyalty", desc: "Keep clients coming back by tracking loyalty points and sending automated reward notifications and birthday offers.", color: "text-orange-400" },
            { icon: "ArrowUp", title: "Upsell", desc: "Increase average ticket value by suggesting add-on services and retail products based on booking history.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects with popular salon and spa management software to streamline your operations.",
            items: [
                { title: "Booking Systems", description: "Sync appointments, client data, and staff availability with your existing management software." },
                { title: "Payment Gateways", description: "Accept deposits or full payments for services directly through WhatsApp." }
            ]
        },
        faqs: [
            { question: "Can the AI handle bookings for different services and staff members?", answer: "Yes, our AI can be configured to understand your different services and staff availability. It can guide clients to book the right service with the right professional." },
            { question: "How are appointment reminders sent?", answer: "You can set up automated reminders to be sent via WhatsApp a specified time before the appointment (e.g., 24 hours). This helps to significantly reduce no-shows." }
        ],
        mockConversation: [
            { isUser: true, text: "Hi, I'd like to book a haircut.", time: "10:00 AM" },
            { isUser: false, text: "Certainly! When would you like to come in?", time: "10:00 AM" },
            { isUser: true, text: "Tomorrow afternoon.", time: "10:01 AM" },
            { isUser: false, text: "We have openings at 2:00 PM and 4:00 PM. Which do you prefer?", time: "10:01 AM", actions: ["2:00 PM", "4:00 PM"] },
            { isUser: true, text: "4:00 PM please", time: "10:02 AM" },
            { isUser: false, text: "Great! Your haircut with our senior stylist is booked for 4:00 PM tomorrow. We look forward to seeing you!", time: "10:02 AM" }
        ],
        contactName: "SyncFlo Salon & Spa",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=S"
    },
    'travel': {
        title: "Your 24/7 AI Travel Agent",
        subtitle: "WhatsApp for Travel & Tourism",
        description: "Automate trip bookings, manage itineraries, and provide real-time support to travelers on their favorite messaging app.",
        heroBadge: "WhatsApp for Travel & Tourism",
        features: [
            {
                icon: "MessageSquare",
                title: "24/7 Traveler Support",
                description: "Provide instant assistance to travelers across different time zones, answering questions about bookings, destinations, and more.",
                gradient: "from-blue-accent to-indigo-500"
            },
            {
                icon: "Calendar",
                title: "Automated Booking & Itineraries",
                description: "Allow travelers to book flights, hotels, and tours, and receive instant confirmations and detailed itineraries on WhatsApp.",
                gradient: "from-green-accent to-emerald-500"
            },
            {
                icon: "Tag",
                title: "Personalized Travel Offers",
                description: "Send targeted travel deals, destination guides, and personalized recommendations to inspire and convert travelers.",
                gradient: "from-purple-500 to-pink-500"
            }
        ],
        useCases: [
            { icon: "Map", title: "Trip Planning & Booking", desc: "Assist travelers in planning their trips, from destination discovery to booking flights, hotels, and activities.", color: "text-blue-400" },
            { icon: "Bell", title: "Real-Time Travel Alerts", desc: "Send proactive notifications about flight delays, gate changes, and other important travel updates.", color: "text-green-400" },
            { icon: "FileText", title: "Itinerary Management", desc: "Deliver digital itineraries, booking confirmations, and travel documents directly to travelers' phones.", color: "text-red-400" },
            { icon: "TrendingUp", title: "Upselling Ancillary Services", desc: "Offer travel insurance, airport transfers, tours, and other add-ons to increase revenue per booking.", color: "text-yellow-400" },
            { icon: "Star", title: "Post-Trip Feedback", desc: "Automatically send follow-up messages after a trip to collect valuable feedback and encourage reviews.", color: "text-orange-400" },
            { icon: "Compass", title: "Destination Guides", desc: "Provide travelers with curated guides, tips, and recommendations for their destination.", color: "text-purple-400" }
        ],
        integrations: {
            description: "SyncFlo Ai connects with Global Distribution Systems (GDS), booking engines, and CRMs.",
            items: [
                { title: "GDS & Booking Engines", description: "Sync flight, hotel, and car rental availability with your existing systems." },
                { title: "CRM Integration", description: "Manage customer relationships and track booking history by syncing with your CRM." }
            ]
        },
        faqs: [
            { question: "How does the AI handle complex travel bookings?", answer: "The AI can handle a wide range of booking requests. For highly complex or multi-stop itineraries, it can gather all the necessary information from the traveler and seamlessly hand over the conversation to a human agent to finalize the booking." },
            { question: "Can it provide real-time flight status updates?", answer: "Yes, by integrating with flight tracking APIs, our AI can provide real-time updates on flight status, delays, and gate changes directly to travelers on WhatsApp." }
        ],
        mockConversation: [
            { isUser: false, text: "Welcome to SyncFlo Travel! How can I help you plan your next adventure?", time: "10:00 AM" },
            { isUser: true, text: "I'm looking for a beach vacation in Southeast Asia.", time: "10:01 AM" },
            { isUser: false, text: "Great choice! Do you have a specific country in mind, like Thailand or Vietnam?", time: "10:01 AM" },
            { isUser: true, text: "Thailand sounds good.", time: "10:02 AM" },
            { isUser: false, text: "Perfect. We have amazing packages for Phuket and Koh Samui. Are you looking for a relaxing getaway or something more adventurous?", time: "10:02 AM", actions: ["Relaxing", "Adventurous"] },
            { isUser: true, text: "Relaxing", time: "10:03 AM" },
            { isUser: false, text: "I recommend our 5-night luxury villa package in Phuket. It includes a private pool and daily spa treatments. Would you like to see the details?", time: "10:03 AM", product: { title: "Samsara Phuket", price: "Luxury Villa", image: "https://placehold.co/200x150/202C33/FFFFFF?text=Villa" } }
        ],
        contactName: "SyncFlo Travel",
        contactImage: "https://placehold.co/40x40/00FF87/0B0F19?text=T"
    }
}

