import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Package, GraduationCap, Users } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "AI Tools & SaaS",
    percentage: "60%",
    description:
      "Affordable business automation for Canadian SMEs. From $49/month, our tools make enterprise-level AI accessible to Main Street businesses—not just Bay Street.",
    features: [
      "SME AI Productivity Suite",
      "Sector-Specific Tools (Maritime, Civic, Indigenous)",
      "AgriSmart & RetailEdge",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    percentage: "25%",
    description:
      "Practical AI skills for real Canadians. Two-day bootcamps, online courses, and K-12 programs that demystify AI and make it actionable—no coding required.",
    features: [
      "2-Day SME AI Bootcamps",
      "K-12 AI Literacy Programs",
      "Teacher Professional Development",
    ],
  },
  {
    icon: Users,
    title: "Consulting & Advisory",
    percentage: "15%",
    description:
      "Expert guidance without the enterprise price tag. AI readiness assessments, bias auditing, and implementation support tailored for Canadian organizations.",
    features: [
      "AI Readiness Assessments",
      "Bias Auditing & Ethics Certification",
      "Government AI Advisory",
    ],
  },
];

export function ThreePillars() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Three-Pillar Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to democratizing AI across Canada—from tools to training to transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} hover className="relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-gray-100 select-none">
                  {pillar.percentage}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
