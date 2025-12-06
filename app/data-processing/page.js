'use client'

import LegalLayout from '../../components/LegalLayout'

export default function DataProcessingPage() {
    return (
        <LegalLayout
            title="Data Processing"
            subtitle="Agreement"
            lastUpdated="July 29, 2025"
        >
            <p>This Data Processing Agreement (&quot;DPA&quot;) is entered into between SyncFlo Ai (&quot;Processor&quot;) and the customer (&quot;Controller&quot;) and is incorporated into the Terms of Service. This DPA reflects the parties’ agreement with regard to the processing of Personal Data.</p>

            <h2>1. Definitions</h2>
            <p><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person.</p>
            <p><strong>&quot;Data Subject&quot;</strong> means the individual to whom Personal Data relates.</p>
            <p><strong>&quot;Processing&quot;</strong> means any operation or set of operations which is performed on Personal Data.</p>
            <p><strong>&quot;Controller&quot;</strong> means the entity which determines the purposes and means of the Processing of Personal Data.</p>
            <p><strong>&quot;Processor&quot;</strong> means the entity which Processes Personal Data on behalf of the Controller.</p>

            <h2>2. Processing of Personal Data</h2>
            <p>The Processor shall only process Personal Data on behalf of and in accordance with the Controller&apos;s documented instructions. The subject-matter, duration, nature, and purpose of the Processing, as well as the types of Personal Data and categories of Data Subjects, are determined by the services provided by the Processor.</p>

            <h2>3. Data Subject Rights</h2>
            <p>The Processor shall, to the extent legally permitted, promptly notify the Controller if it receives a request from a Data Subject to exercise their rights (e.g., access, rectification, erasure). The Processor shall assist the Controller with appropriate technical and organizational measures for the fulfilment of the Controller&apos;s obligation to respond to such requests.</p>

            <h2>4. Technical and Organizational Measures</h2>
            <p>The Processor shall implement and maintain appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including measures to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</p>

            <h2>5. Sub-processors</h2>
            <p>The Controller provides a general authorization for the Processor to engage sub-processors. The Processor shall maintain a list of sub-processors and shall inform the Controller of any intended changes concerning the addition or replacement of sub-processors.</p>

            <h2>6. Term and Termination</h2>
            <p>This DPA shall remain in effect for as long as the Processor processes Personal Data on behalf of the Controller under the Terms of Service. Upon termination of the services, the Processor shall, at the Controller&apos;s choice, delete or return all Personal Data.</p>

            <h2>7. Governing Law</h2>
            <p>This DPA shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this DPA, please contact us at <a href="mailto:support@syncflo.ai">support@syncflo.ai</a></p>
        </LegalLayout>
    )
}
