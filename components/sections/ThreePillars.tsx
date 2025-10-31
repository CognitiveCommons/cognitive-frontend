import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Package, Users, Shield } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "ACCESS",
    subtitle: "Practical Digital Services",
    description:
      "Interoperable, modular tools addressing real friction points. Community Notify for deadline reminders, Service Navigator for benefits discovery, Grants Studio for funding applications, Report & Route for issue tracking, Housing Access for tenant tools.",
    features: [
      "Community Notify (consent-based messaging, SLA tracking)",
      "Service Navigator (HSDS-compatible service directories)",
      "Grants Studio (360Giving-compatible, proposal drafting)",
      "Report & Route (FixMyStreet-style structured intake)",
      "Housing Access (listings + tenant tools)",
      "Sector tools (TideWatch, AgriSmart, RetailEdge)",
    ],
    metrics: "≥45% message open rates, ≥85% directory freshness, ≥70% SLA compliance",
  },
  {
    icon: Users,
    title: "AGENCY",
    subtitle: "Building Capacity",
    description:
      "Empowering people to use technology confidently through practical education. Teacher Support Network with workshops and peer circles, SME Quick-Wins cohorts with 4-week sprints, Community Tech Stewards training for local governance.",
    features: [
      "Teacher Support Network (workshops, classroom-ready units)",
      "SME Quick-Wins Cohorts (4-week implementation sprints)",
      "Community Tech Stewards (local data governance)",
      "Plain-language coaching with reviewer gates",
      "Sector-specific training programs",
    ],
    metrics: "≥30% time saved per task, ≥60% adoption persistence at 90 days",
  },
  {
    icon: Shield,
    title: "ASSURANCE",
    subtitle: "Earning Trust Through Transparency",
    description:
      "Verifiable behavior and transparent operations. WCAG 2.2 AA accessibility as release gate, CASL/PIPEDA compliance, Canadian data residency, open methods with published ethics notes and incident runbooks, quarterly impact reports.",
    features: [
      "WCAG 2.2 AA accessibility (release gate)",
      "CASL compliance (consent tracking, opt-out, quiet hours)",
      "PIPEDA implementation (DPIAs, audit logs, access requests)",
      "Canadian data residency (encrypted in transit & at rest)",
      "Open standards (HSDS, 360Giving, FixMyStreet, Alaveteli)",
      "Quarterly impact notes and annual replication reports",
    ],
    metrics: "Privacy requests within SLA, audit anomalies investigated, incident-free operation",
  },
];

export function ThreePillars() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            ACCESS → AGENCY → ASSURANCE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars for delivering practical, trustworthy tools to underserved communities. People—not only large institutions—benefit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} hover className="relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">{pillar.subtitle}</p>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-2 mb-4">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2 flex-shrink-0">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium">Success Metrics:</p>
                    <p className="text-xs text-gray-600 mt-1">{pillar.metrics}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
