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
            Building Canada's<br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technology Commons
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            One community at a time. From the ground up. In the open.
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
              Join the Movement
            </a>
            <a
              href="#divide"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('divide')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300"
            >
              Understand the Problem
            </a>
          </div>

          {/* Reality Check */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-600 mb-2">NO</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Products to Sell</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Just a mission. And an invitation.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-600 mb-2">NO</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Courses to Buy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Just a beginning. And transparency.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-600 mb-2">NO</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Proven Track Record</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Just radical honesty. And a real problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Divide - Data */}
      <section id="divide" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              The Divide is Real
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology access determines economic survival. And it's not equal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">85%</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Large Enterprises</h3>
                  <p className="text-gray-600 dark:text-gray-400">Using advanced technology, AI, automation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">23%</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Small & Medium Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-400">Have access to the same capabilities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">1.2M</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Canadian Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-400">Falling behind. Right now. Today.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl">
              <blockquote className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                "This isn't just a statistic. It's 1.2 million Canadian businesses falling behind.
                Rural communities without infrastructure. Workers losing opportunities to automation
                they don't understand. Students in Northern territories with limited access."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">
                The gap isn't just about technology—it's about opportunity, equity, and Canada's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Not just words. These are our non-negotiables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Technology as Public Good</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Like libraries and healthcare—infrastructure for a functioning society, not just a commodity.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Equity Over Efficiency</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Serve those most in need, not most profitable. Rural before urban. Excluded before included.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Community Over Customers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building with people, not selling to them. Participants, not purchasers. Movement, not business.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Radical Transparency</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Show our progress and setbacks. Build in the open. No marketing BS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are - Journey */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Where We Honestly Are
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Updated monthly. No overpromises. Just truth.
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
                  <li>• Non-profit incorporated federally</li>
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

          <div className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              We're not selling products. We don't have courses to enroll in.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We're building a movement—from the ground up, in the open, with transparency about our progress and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Us at Day One
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help shape what we build. Be part of the solution. Build a different future for Canadian technology access.
          </p>
          <div className="text-center">
            <p className="text-lg mb-4">Join us at <a href="mailto:hello@cognitivecommons.ca" className="underline hover:text-gray-100">hello@cognitivecommons.ca</a></p>
            <p className="text-sm opacity-75">Updates coming soon. We'll build this movement together.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
