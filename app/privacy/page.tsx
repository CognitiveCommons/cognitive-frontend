import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy | CognitiveCommons",
  description: "Our commitment to privacy, data protection, and PIPEDA/CASL compliance for all Canadians.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA')}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
                <p className="text-gray-700 mb-4">
                  CognitiveCommons is committed to protecting your privacy and complying with Canadian privacy laws,
                  including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada's
                  Anti-Spam Legislation (CASL).
                </p>
                <p className="text-gray-700">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                  you use our services. We believe privacy is a fundamental right, not an afterthought.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">PIPEDA Compliance</h2>
                <p className="text-gray-700 mb-4">
                  We adhere to all ten PIPEDA principles for fair information practices:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">1. Accountability</h3>
                    <p className="text-sm text-gray-700">
                      We have a designated Privacy Official responsible for ensuring PIPEDA compliance and
                      handling all privacy-related matters.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">2. Identifying Purposes</h3>
                    <p className="text-sm text-gray-700">
                      We identify the purposes for which personal information is collected before or at
                      the time of collection.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">3. Consent</h3>
                    <p className="text-sm text-gray-700">
                      We obtain your knowledge and consent before collecting, using, or disclosing your
                      personal information. Consent is always opt-in, never assumed.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">4. Limiting Collection</h3>
                    <p className="text-sm text-gray-700">
                      We only collect personal information that is necessary for the identified purposes.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">5. Limiting Use, Disclosure, and Retention</h3>
                    <p className="text-sm text-gray-700">
                      Personal information is used or disclosed only for the purposes for which it was
                      collected, unless you consent otherwise. We retain information only as long as necessary.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">6. Accuracy</h3>
                    <p className="text-sm text-gray-700">
                      We keep personal information accurate, complete, and up-to-date.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">7. Safeguards</h3>
                    <p className="text-sm text-gray-700">
                      We protect personal information with security safeguards appropriate to the sensitivity
                      of the information (encryption in transit and at rest, access controls, audit logs).
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">8. Openness</h3>
                    <p className="text-sm text-gray-700">
                      We make information about our privacy policies and practices readily available (this document).
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">9. Individual Access</h3>
                    <p className="text-sm text-gray-700">
                      Upon request, you can access your personal information and challenge its accuracy and completeness.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">10. Challenging Compliance</h3>
                    <p className="text-sm text-gray-700">
                      You can challenge our compliance with these principles by contacting our Privacy Official.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">CASL Compliance (Anti-Spam)</h2>
                <p className="text-gray-700 mb-4">
                  For all electronic messaging (email, SMS, etc.), we comply with Canada's Anti-Spam Legislation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Express Consent:</strong> We only send messages to individuals who have explicitly opted in.</li>
                  <li><strong>Clear Identification:</strong> All messages clearly identify the sender and provide contact information.</li>
                  <li><strong>One-Click Unsubscribe:</strong> Every message includes an easy unsubscribe mechanism.</li>
                  <li><strong>Quiet Hours:</strong> We respect quiet hours and do not send messages during inappropriate times.</li>
                  <li><strong>Frequency Caps:</strong> We limit message frequency to avoid overwhelming recipients.</li>
                  <li><strong>Consent Tracking:</strong> We maintain detailed records of consent with timestamps and methods.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Canadian Data Residency</h2>
                <p className="text-gray-700 mb-4">
                  All data is stored within Canadian borders to ensure compliance with Canadian privacy laws and
                  data sovereignty requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Data centers located exclusively in Canada</li>
                  <li>Encrypted in transit (TLS 1.3)</li>
                  <li>Encrypted at rest (AES-256)</li>
                  <li>No cross-border data transfers without explicit consent</li>
                  <li>Tamper-evident audit logs for all data access</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Data Protection Impact Assessments (DPIAs)</h2>
                <p className="text-gray-700 mb-4">
                  We conduct DPIAs before launching any new service or feature that collects personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Risk assessment for privacy impact</li>
                  <li>Mitigation strategies for identified risks</li>
                  <li>Review by Privacy Official before deployment</li>
                  <li>Regular audits of existing services</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under PIPEDA, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of your personal information we hold</li>
                  <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data collection at any time</li>
                  <li><strong>File Complaints:</strong> File a complaint with the Privacy Commissioner of Canada</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise any of these rights, contact our Privacy Official at{" "}
                  <a href="mailto:privacy@cognitivecommons.ca" className="text-purple-600 hover:underline">
                    privacy@cognitivecommons.ca
                  </a>
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain personal information only as long as necessary for the purposes identified:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Active user accounts: Retained while account is active</li>
                  <li>Inactive accounts: Deleted after 2 years of inactivity</li>
                  <li>Transaction records: 7 years (legal requirement)</li>
                  <li>Audit logs: 2 years</li>
                  <li>Consent records: 7 years (CASL requirement)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Incident Response</h2>
                <p className="text-gray-700 mb-4">
                  In the event of a privacy breach:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We will notify affected individuals as soon as practicable</li>
                  <li>We will report breaches to the Privacy Commissioner of Canada as required</li>
                  <li>We will publish incident runbooks and lessons learned</li>
                  <li>We will take immediate steps to mitigate harm</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For privacy-related inquiries, complaints, or requests:
                </p>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <p className="font-bold mb-2">Privacy Official</p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <a href="mailto:privacy@cognitivecommons.ca" className="text-purple-600 hover:underline">
                      privacy@cognitivecommons.ca
                    </a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Response time: Within 30 days (as required by PIPEDA)
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We will notify you of any material changes to this Privacy Policy by posting the updated
                  policy on this page and updating the "Last updated" date. Continued use of our services
                  after changes constitutes acceptance of the updated policy.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
