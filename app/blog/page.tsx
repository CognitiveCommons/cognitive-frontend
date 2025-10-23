import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

// Mock blog posts - will be replaced with Strapi API
const mockPosts = [
  {
    id: 1,
    title: "Why Canadian SMEs Need Affordable AI (And How We're Fixing It)",
    slug: "why-canadian-smes-need-affordable-ai",
    excerpt:
      "85% of large Canadian firms use AI. Only 23% of SMEs do. That's not a tech gap—it's an access gap. Here's how we're changing that.",
    author: "CognitiveCommons Team",
    publishedAt: "2025-10-15",
    readTime: 8,
    category: "Mission",
  },
  {
    id: 2,
    title: "From Nova Scotia to Nunavut: AI Success Stories",
    slug: "ai-success-stories-across-canada",
    excerpt:
      "Real Canadian businesses using AI to solve real problems. Meet the fisher, the teacher, and the bakery owner transforming their work with affordable tools.",
    author: "Sarah Chen",
    publishedAt: "2025-10-10",
    readTime: 6,
    category: "Case Studies",
  },
  {
    id: 3,
    title: "The Non-Profit Advantage: Building AI for Impact, Not Investors",
    slug: "nonprofit-advantage-ai-development",
    excerpt:
      "Why being a non-profit isn't just feel-good marketing—it's our competitive advantage. How mission-driven development changes everything.",
    author: "James Wilson",
    publishedAt: "2025-10-05",
    readTime: 7,
    category: "Mission",
  },
];

const categories = ["All Posts", "Mission", "Case Studies", "AI Education", "Product Updates"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              Stories from the AI Democratization Movement
            </h1>
            <p className="text-xl text-purple-100">
              Insights, case studies, and lessons from making AI accessible to all Canadians.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section padding="sm">
        <Container>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  category === "All Posts"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-purple-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 line-clamp-2">{post.title}</h2>

                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-purple-600 font-medium hover:underline">Read More →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-black text-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get monthly insights on AI democratization, new courses, and success stories from Canadian SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
