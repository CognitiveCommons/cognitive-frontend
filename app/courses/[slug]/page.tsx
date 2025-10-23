import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Clock, Users, Award, CheckCircle, BookOpen } from "lucide-react";

export const runtime = 'edge';

// Mock data - will be replaced with Strapi API
const mockCourse = {
  title: "AI for Small Business: 2-Day Intensive Bootcamp",
  slug: "ai-small-business-bootcamp",
  description: `
    <p>Hey there! I'm thrilled you're here. Running a small business in Canada? Feeling like AI is this massive, expensive thing only tech giants can afford? I hear you—and that's exactly why we built this bootcamp.</p>

    <p>Over two days, we'll demystify AI together. You'll discover practical tools you can use Monday morning, learn how to automate tedious tasks (yes, really!), and connect with other SME owners facing the same challenges.</p>

    <p>No coding required. No tech jargon. Just real, actionable AI skills that'll make your business more competitive. Ready to join us?</p>
  `,
  instructor: "Dr. Sarah Chen",
  instructorBio: "Sarah has spent 15 years helping Canadian SMEs adopt technology. She believes AI should serve Main Street, not just Bay Street.",
  price: 499,
  duration: "2 days (16 hours)",
  level: "Beginner-Intermediate",
  certification: true,
  learningOutcomes: [
    "AI tools for customer service automation",
    "Inventory & supply chain optimization",
    "Marketing personalization (without creepiness!)",
    "Choosing the right AI tools for YOUR business",
    "Ethics & bias awareness",
  ],
  syllabus: [
    {
      title: "Day 1: AI Foundations for Business",
      topics: [
        "What is AI, really? (No PhD required)",
        "AI use cases in Canadian SMEs",
        "Customer service automation hands-on",
        "Building your AI roadmap",
      ],
    },
    {
      title: "Day 2: Implementation & Strategy",
      topics: [
        "Marketing automation with AI",
        "Inventory management tools",
        "Ethics & responsible AI use",
        "Your personalized AI action plan",
      ],
    },
  ],
  prerequisites: "No technical background required. Just bring your business challenges!",
};

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                {mockCourse.level}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {mockCourse.title}
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                Practical AI skills for real Canadian businesses. No coding required.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{mockCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Small Groups (Max 20)</span>
                </div>
                {mockCourse.certification && (
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificate Included</span>
                  </div>
                )}
              </div>
            </div>

            {/* Enrollment Card */}
            <Card className="bg-white text-black">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">${mockCourse.price}</div>
                <p className="text-gray-600">One-time investment in your business</p>
              </div>

              <Button href="#" variant="primary" size="lg" className="w-full mb-4">
                Enroll Now
              </Button>

              <Button href="#" variant="outline" size="md" className="w-full">
                Download Syllabus
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  💡 <strong>Group discount:</strong> Bring 3+ colleagues, save 20%
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Course Description */}
      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: mockCourse.description }} />
          </div>
        </Container>
      </Section>

      {/* Learning Outcomes */}
      <Section className="bg-white">
        <Container size="md">
          <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {mockCourse.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Syllabus */}
      <Section>
        <Container size="md">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Course Syllabus
          </h2>

          <div className="space-y-6">
            {mockCourse.syllabus.map((day, index) => (
              <Card key={index}>
                <h3 className="text-2xl font-bold mb-4">{day.title}</h3>
                <ul className="space-y-2">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Instructor */}
      <Section className="bg-white">
        <Container size="md">
          <h2 className="text-3xl font-bold mb-8">Your Instructor</h2>
          <Card>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {mockCourse.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{mockCourse.instructor}</h3>
                <p className="text-gray-700">{mockCourse.instructorBio}</p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Prerequisites */}
      <Section>
        <Container size="md">
          <Card className="bg-purple-50 border-purple-200">
            <h3 className="text-xl font-bold mb-3">Prerequisites</h3>
            <p className="text-gray-700">{mockCourse.prerequisites}</p>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-black text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make AI Work for Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of Canadian SME owners who've transformed their businesses with practical AI skills.
            </p>
            <Button href="#" variant="secondary" size="lg">
              Enroll in the Bootcamp - $499
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              30-day money-back guarantee • Certificate included
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
