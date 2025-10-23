import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Heart, Shield, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Accessibility Over Exclusivity",
    description:
      "AI should empower everyone, not just those who can afford enterprise solutions. We price our tools for Main Street, not Bay Street.",
  },
  {
    icon: Shield,
    title: "Ethics Over Speed",
    description:
      "We won't sacrifice responsible AI practices for rapid growth. Bias auditing and ethical guardrails are built into everything we do.",
  },
  {
    icon: Users,
    title: "Community Over Competition",
    description:
      "We complete the ecosystem, we don't compete. Partnerships amplify impact—collaboration over market domination.",
  },
  {
    icon: TrendingUp,
    title: "Impact Over Revenue",
    description:
      "As a non-profit, our success metric is Canadians empowered, not quarterly profits. Mission drives every decision.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Hi! We're CognitiveCommons
            </h1>
            <p className="text-2xl leading-relaxed">
              A team of technologists, educators, and community builders who believe AI should belong to everyone, not just the privileged few.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission Story */}
      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Picture this: A fisher in Nova Scotia using AI to predict optimal catch times. A teacher in Nunavut preserving Indigenous languages with machine learning. A small bakery in Quebec automating inventory to reduce food waste.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              That's the Canada we're building—where AI democratizes opportunity instead of concentrating it. Where innovation serves Main Street, not just Bay Street.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              We're a non-profit (yes, really!) because our mission isn't quarterly profits—it's ensuring 1.2 million Canadian SMEs can thrive in an AI-powered economy.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Join us on this journey. Let's unlock shared intelligence, together.</strong>
            </p>
          </div>
        </Container>
      </Section>

      {/* Three Pillars */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Three-Pillar Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to democratizing AI across Canada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card hover>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">60%</div>
                <h3 className="text-xl font-bold mb-3">AI Tools & SaaS</h3>
                <p className="text-gray-600">
                  Affordable business automation for Canadian SMEs. $49-$499/month pricing that actually makes sense for small businesses.
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">25%</div>
                <h3 className="text-xl font-bold mb-3">Training & Education</h3>
                <p className="text-gray-600">
                  Practical AI skills for real Canadians. Two-day bootcamps, online courses, and K-12 programs that demystify AI.
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">15%</div>
                <h3 className="text-xl font-bold mb-3">Consulting & Advisory</h3>
                <p className="text-gray-600">
                  Expert guidance without enterprise price tags. AI readiness assessments and bias auditing tailored for you.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision, every partnership, every line of code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Non-Profit */}
      <Section className="bg-black text-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Why We're a Non-Profit</h2>
            <div className="text-xl leading-relaxed space-y-4">
              <p>
                <strong>62% of Canadians trust non-profits.</strong> Only 31% trust tech companies. That matters when we're asking communities to share their challenges and adopt new tools.
              </p>
              <p>
                <strong>Access to $200M+ in annual Canadian non-profit funding.</strong> Grants, foundations, and government programs that wouldn't be available to for-profit startups.
              </p>
              <p>
                <strong>Mission alignment without investor pressure.</strong> We serve "market failures" where for-profits won't go—like $49/month AI tools for small bakeries.
              </p>
              <p className="text-purple-300">
                <strong>Bottom line:</strong> A non-profit can democratize AI for Canadian SMEs by building affordable tools, delivering practical training, and maintaining ethical guardrails—something for-profits won't/can't do profitably.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Want to Join the Movement?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're an SME owner, educator, funder, or someone who believes AI should belong to everyone—let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/courses"
                className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
