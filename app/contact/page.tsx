import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Mail, MessageSquare, Users, Briefcase } from "lucide-react";

const contactReasons = [
  {
    icon: MessageSquare,
    title: "Course Questions",
    description: "Want to know if a course is right for you? Have questions about content or certification?",
  },
  {
    icon: Briefcase,
    title: "Partnership Inquiries",
    description: "Interested in partnering with us? Let's explore how we can work together.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Looking to bring AI training to your community or organization?",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Any other questions, feedback, or just want to say hi?",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
            <p className="text-2xl text-purple-100">
              Whether you have a question, an idea, or want to partner with us—we'd love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Reasons */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select a topic...</option>
                    <option value="courses">Course Questions</option>
                    <option value="tools">AI Tools & Pricing</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="community">Community Program</option>
                    <option value="media">Media Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:hello@cognitivecommons.ca"
                      className="text-purple-600 hover:underline"
                    >
                      hello@cognitivecommons.ca
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Course Support</h4>
                    <a
                      href="mailto:courses@cognitivecommons.ca"
                      className="text-purple-600 hover:underline"
                    >
                      courses@cognitivecommons.ca
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Partnerships</h4>
                    <a
                      href="mailto:partnerships@cognitivecommons.ca"
                      className="text-purple-600 hover:underline"
                    >
                      partnerships@cognitivecommons.ca
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Media Inquiries</h4>
                    <a
                      href="mailto:media@cognitivecommons.ca"
                      className="text-purple-600 hover:underline"
                    >
                      media@cognitivecommons.ca
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond within <strong>24-48 hours</strong> during business days. For urgent course-related questions, please email courses@cognitivecommons.ca directly.
                </p>
              </Card>

              <Card className="bg-black text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 5:00 PM (Atlantic Time)
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Based in Halifax, Nova Scotia 🇨🇦
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Prefer to Start with Our Courses?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Browse our free and affordable AI training programs designed for Canadians.
            </p>
            <a
              href="/courses"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
