import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CourseCard } from "@/components/course/CourseCard";
import { Search, Filter } from "lucide-react";

// Mock data - will be replaced with Strapi API calls
const mockCourses = [
  {
    id: 1,
    title: "AI for Small Business: 2-Day Intensive Bootcamp",
    slug: "ai-small-business-bootcamp",
    shortDescription: "Learn practical AI tools you can use Monday morning. No coding required—just real, actionable skills for your business.",
    instructor: "Dr. Sarah Chen",
    price: 499,
    duration: "2 days",
    level: "Beginner",
  },
  {
    id: 2,
    title: "AI Literacy for K-12 Teachers",
    slug: "ai-literacy-teachers",
    shortDescription: "Bring AI into your classroom responsibly. Professional development designed for Canadian educators.",
    instructor: "Prof. James Wilson",
    price: 0,
    duration: "6 hours",
    level: "All Levels",
  },
  {
    id: 3,
    title: "Indigenous Language Preservation with AI",
    slug: "indigenous-language-ai",
    shortDescription: "Community-led AI tools for language revitalization. Free for Indigenous communities and organizations.",
    instructor: "Elder Mary Blackbird",
    price: 0,
    duration: "4 weeks",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Ethics & Bias in AI Systems",
    slug: "ai-ethics-bias",
    shortDescription: "Build responsible AI. Learn to identify, audit, and mitigate bias in machine learning systems.",
    instructor: "Dr. Ahmed Hassan",
    price: 199,
    duration: "1 day",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "SME AI Readiness Assessment Workshop",
    slug: "sme-ai-readiness",
    shortDescription: "Is your business ready for AI? Hands-on workshop to assess readiness and create your AI adoption roadmap.",
    instructor: "Jennifer Martinez",
    price: 99,
    duration: "4 hours",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Automating Customer Service with AI",
    slug: "automate-customer-service",
    shortDescription: "Implement AI chatbots and automation without losing the human touch. Real examples from Canadian SMEs.",
    instructor: "David Park",
    price: 299,
    duration: "1 day",
    level: "Intermediate",
  },
];

const categories = [
  "All Courses",
  "AI Fundamentals",
  "SME Bootcamps",
  "Teacher Development",
  "Ethics & Bias",
  "Indigenous Programs",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white" padding="md">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              🎓 Learn AI Skills That Matter
            </h1>
            <p className="text-xl text-purple-100">
              From SME owners to students—practical, affordable AI training designed for real Canadian businesses.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters and Search */}
      <Section padding="sm">
        <Container>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              {/* Level Filter */}
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                {levels.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{mockCourses.length}</span> courses
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're constantly developing new courses based on community needs.
              Tell us what AI skills you want to learn.
            </p>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Request a Course
            </button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
