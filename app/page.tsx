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
                  <a href="https://www.caidp.org/reports/aidv-2024/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-600 dark:text-green-400 hover:underline">#1</a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">AI Policy Leadership</h3>
                  <p className="text-gray-600 dark:text-gray-400">Canada ranks first globally in AI policy aligned with democratic values (tied with South Korea and Japan) <a href="https://www.caidp.org/reports/aidv-2024/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-orange-600 dark:text-orange-400 hover:underline">32nd</a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Digital Government Services</h3>
                  <p className="text-gray-600 dark:text-gray-400">Down from 3rd place in 2010. Citizens can't access what policy promises. <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-red-600 dark:text-red-400 hover:underline">12%</a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Business Adoption</h3>
                  <p className="text-gray-600 dark:text-gray-400">Only 12% of Canadian businesses actually use AI in operations <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
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
                The local business that can't compete. The community organization that can't scale. The student who can't
                learn the skills employers need. The service buried in paper processes. The gap between
                what we promise and what we deliver is costing Canadian competitiveness.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 block hover:underline">1.2M</a>
              <p className="text-sm text-gray-600 dark:text-gray-400">Businesses lacking tech capability <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <a href="https://digital.canada.ca/2025/01/23/how-can-civic-tech-help-improve-government-service-delivery/" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 block hover:underline">7,000+</a>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unfilled government tech positions (2022) <a href="https://digital.canada.ca/2025/01/23/how-can-civic-tech-help-improve-government-service-delivery/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 block hover:underline">88%</a>
              <p className="text-sm text-gray-600 dark:text-gray-400">Of businesses not using AI <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 block hover:underline">29↓</a>
              <p className="text-sm text-gray-600 dark:text-gray-400">Places fallen in digital gov (2010-2022) <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">(source)</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="belief" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Four principles for Day One. Execution over philosophy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-2">Start with Who Needs Help</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The business that can't compete. The citizen trying to understand complex policy. The student lacking job skills. The community organization that can't scale.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Build for real Canadians with real problems, not theoretical users.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-2">Ship Working Tools, Not Perfect Plans</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Canada ranks #1 in AI policy. We don't need more frameworks.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Launch early, improve constantly, measure actual capability. Small working systems beat large perfect plans.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-2">Close the Gap, Track the Gap</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                From 12% business adoption → measure monthly gains. From 32nd in digital gov → track ranking progress. From 7,000 unfilled positions → count skills built.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If we're closing the gap, we can prove it.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-2">Make it Work for Everyone</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Technology that only works for 12% of businesses isn't working. Government services ranked 32nd aren't serving citizens.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Build for the machine shop in Medicine Hat, the community group in rural Saskatchewan, the student in Thunder Bay, the small business in a remote town. If it doesn't work for them, it doesn't work.
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
              Regularly updated with current status.
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
                  <li>• Organizational structure</li>
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
            <p className="text-sm opacity-75">Updates coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
