import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Terms of Service | CognitiveCommons",
  description: "Terms of service and user agreements for CognitiveCommons services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA')}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing or using CognitiveCommons services, you agree to be bound by these Terms of
                  Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-700 mb-4">
                  CognitiveCommons operates as a Canadian non-profit organization providing three types of services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>ACCESS:</strong> Practical digital services (Community Notify, Service Navigator, Grants Studio, Report & Route, Housing Access, sector-specific tools)</li>
                  <li><strong>AGENCY:</strong> Capacity building programs (Teacher Support Network, SME Quick-Wins cohorts, Community Tech Stewards training)</li>
                  <li><strong>ASSURANCE:</strong> Transparent operations with verified compliance (WCAG 2.2 AA, CASL, PIPEDA, open standards)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">User Responsibilities</h2>
                <p className="text-gray-700 mb-4">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Not attempt to bypass security or access controls</li>
                  <li>Not interfere with or disrupt services</li>
                  <li>Not impersonate others or misrepresent your identity</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">What We Will Not Do</h2>
                <p className="text-gray-700 mb-4">
                  CognitiveCommons explicitly commits to the following constraints:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold mb-2">No Lock-in Platforms</h3>
                    <p className="text-sm text-gray-700">
                      We will not build lock-in platforms or harvest data for unrelated purposes. You can
                      export your data at any time in portable formats.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold mb-2">No Bypassing Consent</h3>
                    <p className="text-sm text-gray-700">
                      We will not ship features that bypass consent or obscure data use. All data collection
                      requires explicit opt-in consent.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold mb-2">No Replacing Human Judgment</h3>
                    <p className="text-sm text-gray-700">
                      We will not replace human judgment in sensitive decisions. AI assists—humans decide.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold mb-2">No Over-Promising Transformation</h3>
                    <p className="text-sm text-gray-700">
                      We will not over-promise transformation when reliable small wins are needed first.
                      We focus on evidence-based progress over aspirational hype.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Data Usage and Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our data practices are governed by our Privacy Policy, which includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>PIPEDA compliance (all 10 principles)</li>
                  <li>CASL compliance for all electronic messaging</li>
                  <li>Canadian data residency (data stored in Canada)</li>
                  <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Tamper-evident audit logs</li>
                  <li>Data Protection Impact Assessments (DPIAs) before new features</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  See our{" "}
                  <a href="/privacy" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  for complete details.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Our Content:</strong> All content, features, and functionality of CognitiveCommons
                  services are owned by CognitiveCommons and protected by copyright and other intellectual
                  property laws.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Your Content:</strong> You retain ownership of any content you create or upload.
                  By using our services, you grant us a license to use, store, and display your content
                  solely for providing services to you.
                </p>
                <p className="text-gray-700">
                  <strong>Open Standards:</strong> We commit to using open standards (HSDS, 360Giving,
                  FixMyStreet, Alaveteli) to ensure data portability and avoid lock-in.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Service Availability</h2>
                <p className="text-gray-700 mb-4">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Services may be unavailable during maintenance windows</li>
                  <li>We will provide advance notice of planned downtime when possible</li>
                  <li>We publish Service Level Objectives (SLOs) for each service</li>
                  <li>We track and report on SLA compliance metrics</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Accessibility Commitment</h2>
                <p className="text-gray-700">
                  All CognitiveCommons services meet WCAG 2.2 AA accessibility standards as a release gate.
                  If you encounter accessibility barriers, please contact us at{" "}
                  <a href="mailto:accessibility@cognitivecommons.ca" className="text-purple-600 hover:underline">
                    accessibility@cognitivecommons.ca
                  </a>
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  CognitiveCommons is provided on an "as is" and "as available" basis. To the maximum
                  extent permitted by Canadian law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We disclaim all warranties, express or implied</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount you paid for services (if any)</li>
                  <li>This does not limit liability for gross negligence or willful misconduct</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may suspend or terminate your access to services if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You violate these Terms of Service</li>
                  <li>Your account has been inactive for 2+ years</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>Required by law or legal process</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Upon termination, you can export your data within 30 days before permanent deletion.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of Canada and the province in which CognitiveCommons
                  is registered. Any disputes will be resolved in Canadian courts.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We may update these Terms from time to time. We will notify you of material changes by
                  email and by posting the updated Terms on this page. Continued use after changes
                  constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <p className="font-bold mb-2">CognitiveCommons</p>
                  <p className="text-gray-700">
                    General inquiries:{" "}
                    <a href="mailto:hello@cognitivecommons.ca" className="text-purple-600 hover:underline">
                      hello@cognitivecommons.ca
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Legal inquiries:{" "}
                    <a href="mailto:legal@cognitivecommons.ca" className="text-purple-600 hover:underline">
                      legal@cognitivecommons.ca
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Privacy inquiries:{" "}
                    <a href="mailto:privacy@cognitivecommons.ca" className="text-purple-600 hover:underline">
                      privacy@cognitivecommons.ca
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
