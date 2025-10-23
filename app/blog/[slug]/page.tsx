import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Clock, Calendar, User, Share2 } from "lucide-react";

// Mock blog post - will be replaced with Strapi API
const mockPost = {
  title: "Why Canadian SMEs Need Affordable AI (And How We're Fixing It)",
  content: `
    <p>Let's talk numbers. According to Statistics Canada, 85% of large Canadian firms have adopted some form of AI. Great news, right?</p>

    <p>Except here's the thing: Only 23% of small and medium enterprises (SMEs) are using AI. And SMEs make up 99.8% of Canadian businesses and employ 88% of private sector workers.</p>

    <p>So when we say "Canada is adopting AI," what we really mean is "Big companies are adopting AI, and everyone else is watching from the sidelines."</p>

    <p>That's not a technology gap—that's an access gap. And it's creating a two-tier economy where large firms get more efficient, more competitive, and more profitable, while SMEs struggle to keep up.</p>

    <h2>Why SMEs Aren't Adopting AI</h2>

    <p>It's not because SME owners don't see the value. They do. It's because:</p>

    <ol>
      <li><strong>Cost:</strong> Enterprise AI solutions cost $10,000-$100,000+ per year. A small bakery can't afford that.</li>
      <li><strong>Complexity:</strong> Most AI tools assume you have an IT department. Most SMEs don't.</li>
      <li><strong>Relevance:</strong> Solutions are built for Fortune 500 workflows, not Main Street realities.</li>
      <li><strong>Knowledge gap:</strong> No time to become an AI expert when you're running payroll, managing inventory, and serving customers.</li>
    </ol>

    <p>The market has failed SMEs. For-profit AI companies chase VC-funded growth and enterprise contracts. There's no money in serving a small restaurant in Moncton or a family-run bookstore in Kelowna.</p>

    <h2>How CognitiveCommons Is Different</h2>

    <p>We're a non-profit. That's not a feel-good detail—it's our business model.</p>

    <p>As a non-profit, we're not chasing quarterly revenue targets or VC valuations. We can:</p>

    <ul>
      <li>Price tools at $49-$499/month (80% cheaper than enterprise solutions)</li>
      <li>Offer free training to underserved communities</li>
      <li>Build tools for "unprofitable" sectors (like small-scale fishers or rural municipalities)</li>
      <li>Prioritize impact over growth metrics</li>
    </ul>

    <p>We fund this through a Robin Hood model: Revenue from government and enterprise customers subsidizes affordable tools for SMEs. Think of it like how university tuition from wealthy students funds scholarships.</p>
  `,
  author: "CognitiveCommons Team",
  publishedAt: "2025-10-15",
  readTime: 8,
  category: "Mission",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <Section className="bg-white" padding="md">
        <Container size="md">
          <div className="mb-8">
            <span className="text-sm font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
              {mockPost.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {mockPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{mockPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(mockPost.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{mockPost.readTime} min read</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Share:</span>
            <div className="flex gap-3">
              <button className="p-2 rounded-lg border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container size="md">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: mockPost.content }}
          />
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-black text-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl text-gray-300 mb-8">
              Help us democratize AI for all Canadians. Start with free training or explore our affordable tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Browse Courses
              </a>
              <a
                href="/tools"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Explore Tools
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
