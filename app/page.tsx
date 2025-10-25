"use client";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <div className="inline-block px-4 py-2 mb-6 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
            Day One: Foundation Building
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Making Technology Work<br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              for All of Canada
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            For your business. Your community. Your classroom. Your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#join"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Involved
            </a>
            <a
              href="#divide"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('divide')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300"
            >
              See the Gap
            </a>
          </div>
        </div>
      </section>

      {/* The Capability Gap - Data */}
      <section id="divide" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              The Capability Gap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Canada leads the world in AI policy. But most Canadians can't actually use what we've built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">#1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">AI Policy Leadership</h3>
                  <p className="text-gray-600 dark:text-gray-400">Canada ranks first globally in responsible AI adoption frameworks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">32nd</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Digital Government Services</h3>
                  <p className="text-gray-600 dark:text-gray-400">Down from 3rd place in 2010. Citizens can't access what policy promises.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">12%</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Business Adoption</h3>
                  <p className="text-gray-600 dark:text-gray-400">Only 12% of Canadian businesses actually use AI in operations</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                The 30-Place Gap
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                From 1st in policy to 32nd in delivery. That's not a ranking problem. That's a capability crisis.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                The local business that can't compete. The non-profit that can't scale. The student who can't
                learn the skills employers need. The community service buried in paper processes. The gap between
                what we promise and what we deliver is costing Canadian competitiveness.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.2M</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Businesses lacking tech capability</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7,000</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unfilled government tech positions</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">88%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Of businesses not using AI</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">29↓</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Places fallen in digital gov (2010-2022)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section id="belief" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Shared Infrastructure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Like roads, internet, and public transit. Essential infrastructure that enables everyone to compete and thrive.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Capability Building</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Give people real skills and tools they can use. Practical knowledge that creates lasting value and competitive advantage.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Community-Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with Canadians, not for them. Real needs from real businesses inform everything we create.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Complete Transparency</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share our progress and challenges openly. Build in public. Clear about what works and what doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are - Journey */}
      <section id="journey" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Progress
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Updated monthly with transparent status.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div className="flex-1 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Established</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Mission and vision defined</li>
                  <li>• Core values established</li>
                  <li>• Understanding of the problem</li>
                  <li>• This website (v1)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ⏳
              </div>
              <div className="flex-1 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">In Progress</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Non-profit federal incorporation</li>
                  <li>• Community building and early engagement</li>
                  <li>• Partnership conversations</li>
                  <li>• First initiative design</li>
                  <li>• Team formation</li>
                  <li>• Funding pathways</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                —
              </div>
              <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-gray-300 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Not Started</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Product development</li>
                  <li>• Course creation</li>
                  <li>• Platform building</li>
                  <li>• Service delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get Involved at Day One
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help shape what we build. Share your expertise. Build Canada's technology commons together.
          </p>
          <div className="text-center">
            <p className="text-lg mb-4">Connect with us at <a href="mailto:hello@cognitivecommons.ca" className="underline hover:text-gray-100">hello@cognitivecommons.ca</a></p>
            <p className="text-sm opacity-75">Building in the open. Updates coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
