'use client'

import LegalLayout from '../../components/LegalLayout'

export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Privacy"
            subtitle="Policy"
            lastUpdated="July 20, 2024"
        >
            <h2>1. Introduction</h2>
            <p>Welcome to SyncFlo Ai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We provide intelligent AI automation tools to help businesses streamline their operations across various platforms, including WhatsApp, Instagram, LinkedIn, and Voice Calls (&quot;Services&quot;).</p>
            <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. It is crucial for us to be transparent about our data practices, especially concerning the data we access from third-party platforms you choose to integrate with our Services.</p>
            <p>By using our Services, you agree to the collection and use of information in accordance with this policy.</p>

            <h2>2. Information We Collect</h2>
            <h3>a) Information You Provide to Us:</h3>
            <ul>
                <li><strong>Account Information:</strong> When you register for an account, we collect personal information, such as your name, email address, phone number, and company name.</li>
                <li><strong>Payment Information:</strong> To process payments for our Services, we may collect billing details, which are processed securely by our third-party payment processors. We do not store your full credit card information on our servers.</li>
                <li><strong>Communications:</strong> If you contact us directly (e.g., via our support email), we may receive additional information about you, such as the contents of your message and any attachments.</li>
            </ul>

            <h3>b) Information We Access from Third-Party Integrations:</h3>
            <p>Our Services are designed to integrate with third-party platforms at your direction. To provide our automation features, we require you to authorize and connect these platforms to your SyncFlo Ai account. When you do so, we may access and process data from these services on your behalf. This includes:</p>
            <ul>
                <li><strong>WhatsApp & Instagram (Meta Platforms, Inc.):</strong> With your explicit permission, we access messages, contacts, and media to enable automated responses and customer management. Our use of this data is strictly governed by Meta&apos;s Developer Policies.</li>
                <li><strong>LinkedIn:</strong> With your authorization, we access your profile information, connections, messages, and posts to facilitate automated outreach and lead generation as directed by you.</li>
                <li><strong>Voice Call Services:</strong> When you use our AI Voice Sales Agent, we process call data, including transcripts and audio recordings, to perform the requested services.</li>
            </ul>
            <p>We only access the data necessary to provide the specific features you have enabled and only after you have granted explicit consent through the respective platform&apos;s authentication process.</p>

            <h3>c) Information We Collect Automatically:</h3>
            <ul>
                <li><strong>Usage Data:</strong> We automatically collect information about your interactions with our Services, such as the features you use, the pages you visit, and the time and date of your visits.</li>
                <li><strong>Device and Connection Information:</strong> We collect information about the computer or mobile device you use to access our Services, including the hardware model, operating system, IP address, and browser type.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
                <li>To provide, operate, and maintain our Services.</li>
                <li>To process your transactions and manage your account.</li>
                <li>To improve, personalize, and expand our Services.</li>
                <li>To understand and analyze how you use our Services.</li>
                <li>To develop new products, services, features, and functionality.</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes.</li>
                <li>To ensure the security of our platform and prevent fraud.</li>
                <li>To comply with legal obligations and enforce our terms and policies.</li>
            </ul>

            <h2>4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following limited circumstances:</p>
            <ul>
                <li><strong>On Your Behalf:</strong> The core function of our service is to act on your behalf. We will share information through your connected third-party accounts as you direct us to (e.g., sending an automated message from your WhatsApp account).</li>
                <li><strong>Service Providers:</strong> We may share information with third-party vendors and service providers who perform services for us, such as hosting, payment processing, and data analytics. These providers are contractually obligated to protect your data and are prohibited from using it for their own purposes.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We use a combination of technical, administrative, and physical controls to maintain the security of your data. This includes using encryption (such as SSL/TLS) to protect data in transit and at rest, and implementing strict access controls within our organization. While we take significant measures to protect your data, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you with our Services. We may also retain your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>

            <h2>7. Your Data Rights and Choices</h2>
            <p>You have certain rights regarding your personal information. Depending on your location, these may include the right to:</p>
            <ul>
                <li>Access, update, or delete the information we have on you.</li>
                <li>Object to the processing of your personal information.</li>
                <li>Request that we restrict the processing of your personal information.</li>
                <li>Withdraw your consent at any time. You can disconnect any third-party integration from your SyncFlo Ai dashboard at any time.</li>
            </ul>

            <h2>8. Children&apos;s Privacy</h2>
            <p>Our Services are not intended for use by anyone under the age of 18. We do not knowingly collect personally identifiable information from children.</p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top. We encourage you to review this Privacy Policy periodically for any changes.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@syncflo.ai">support@syncflo.ai</a></p>
        </LegalLayout>
    )
}
