import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Package, Anchor, Vote, Languages, Sprout, ShoppingCart, Check } from "lucide-react";

const tools = [
  {
    icon: Package,
    name: "SME AI Productivity Suite",
    price: "$49-$499/month",
    description:
      "The complete AI toolkit for Canadian small businesses. Customer service automation, inventory optimization, marketing assistance, and more.",
    features: [
      "AI-powered customer service chatbot",
      "Inventory forecasting & optimization",
      "Marketing content generation",
      "Automated scheduling & staffing",
      "Email & document automation",
      "Business analytics dashboard",
    ],
    status: "Available Now",
    cta: "Start Free Trial",
  },
  {
    icon: Anchor,
    name: "TideWatch",
    price: "$29/month",
    description:
      "Maritime AI for small-scale fishers. Predict optimal catch times, weather patterns, and sustainable fishing practices.",
    features: [
      "Catch time predictions",
      "Weather & tide forecasting",
      "Sustainable quota tracking",
      "Market price alerts",
      "Community knowledge sharing",
    ],
    status: "Beta",
    cta: "Join Beta",
  },
  {
    icon: Vote,
    name: "CivicPulse",
    price: "$199/month",
    description:
      "Democratic engagement for municipalities. AI-powered citizen feedback analysis, town hall insights, and policy impact prediction.",
    features: [
      "Citizen sentiment analysis",
      "Town hall transcription & summary",
      "Policy impact modeling",
      "Engagement trend tracking",
      "Multi-language support",
    ],
    status: "Beta",
    cta: "Request Demo",
  },
  {
    icon: Languages,
    name: "KeepersAI",
    price: "Free for Communities",
    description:
      "Indigenous language preservation tools. Speech recognition, translation assistance, and digital archiving—community-controlled, OCAP®-compliant.",
    features: [
      "Speech-to-text for Indigenous languages",
      "Digital dictionary builder",
      "Language learning app generator",
      "Secure community archives",
      "Elder knowledge documentation",
    ],
    status: "Pilot",
    cta: "Learn More",
  },
  {
    icon: Sprout,
    name: "AgriSmart",
    price: "Coming 2026",
    description:
      "AI tools for Canadian farmers. Crop yield prediction, soil health monitoring, and climate adaptation strategies.",
    features: [
      "Yield forecasting",
      "Soil health analysis",
      "Weather pattern prediction",
      "Pest & disease detection",
      "Market price optimization",
    ],
    status: "In Development",
    cta: "Join Waitlist",
  },
  {
    icon: ShoppingCart,
    name: "RetailEdge",
    price: "Coming 2026",
    description:
      "Retail AI for Main Street shops. Smart inventory, personalized marketing, and foot traffic prediction.",
    features: [
      "Smart inventory management",
      "Personalized promotions",
      "Foot traffic forecasting",
      "Competitor price tracking",
      "Local event integration",
    ],
    status: "In Development",
    cta: "Join Waitlist",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Affordable AI Tools for Canadian Businesses
            </h1>
            <p className="text-2xl text-purple-100 leading-relaxed">
              Enterprise-level AI at Main Street prices. $49-$499/month for tools that used to cost $10,000+.
            </p>
          </div>
        </Container>
      </Section>

      {/* Tools Grid */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                        <p className="text-lg font-semibold text-purple-600">{tool.price}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        tool.status === "Available Now"
                          ? "bg-green-100 text-green-700"
                          : tool.status === "Beta"
                          ? "bg-blue-100 text-blue-700"
                          : tool.status === "Pilot"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{tool.description}</p>

                  <div className="flex-1 mb-6">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="/contact"
                    variant={tool.status === "Available Now" ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tool.cta}
                  </Button>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing Philosophy */}
      <Section className="bg-white">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Why Our Pricing Is Different</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700">
              <strong>Enterprise AI solutions cost $10,000-$100,000+ per year.</strong> That's fine for Fortune 500 companies, but impossible for a bakery in Moncton or a bookstore in Kelowna.
            </p>

            <p className="text-xl text-gray-700">
              As a non-profit, we use a Robin Hood model: Revenue from government and enterprise customers subsidizes affordable tools for SMEs. It's like how university tuition from wealthy students funds scholarships.
            </p>

            <p className="text-xl text-gray-700">
              Result? <strong>80% cost savings</strong> compared to enterprise solutions, without sacrificing quality or features.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-black text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Give Your Business an AI Advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of Canadian SMEs already using our tools. No long-term contracts, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Schedule a Demo
              </Button>
              <Button href="/courses" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                Start with Training
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              30-day money-back guarantee • No credit card required for demos
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
