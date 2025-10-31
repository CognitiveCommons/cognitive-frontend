"use client";

import { AnimatedAurora } from "@/components/effects/AnimatedAurora";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapleLeaf } from "@/components/canadian/MapleLeaf";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-northern-dark dark:via-northern-slate dark:to-northern-deep-forest overflow-hidden">
        {/* Animated Aurora Background (dark mode only) */}
        <div className="hidden dark:block">
          <AnimatedAurora />
        </div>

        {/* Maple Leaf Watermark - Canadian Identity (Rotated Asymmetric) */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0" style={{ paddingRight: '10%' }}>
          <MapleLeaf
            variant="outlined"
            size="xxl"
            color="red"
            opacity={0.05}
            className="text-canadian-red-dark transform rotate-[18deg]"
          />
        </div>

        {/* Background pattern overlay - subtle topographic lines */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C896' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="max-w-5xl mx-auto px-8 py-20 text-center relative z-10">
          <FadeIn delay={0.1} direction="down">
            <div className="inline-block px-4 py-2 mb-6 glass dark:glass backdrop-blur-sm bg-aurora-purple/10 dark:bg-aurora-purple/20 text-aurora-purple dark:text-aurora-purple border border-aurora-purple/30 text-sm font-medium rounded-full">
              Day One: Foundation Building
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-canadian-snow mb-6 leading-tight">
              <span className="text-gradient-canadian">
                Affordable AI tools. Practical training. Expert support.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create and run digital services that break down barriers—giving SMEs, Non-Profits, and communities more capacity to take action and drive meaningful change.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white font-semibold rounded-lg border-2 border-canadian-red-dark dark:border-canadian-red-dark hover:shadow-glow-red transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="#divide"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('divide')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/90 dark:bg-northern-surface dark:glass text-gray-900 dark:text-canadian-snow font-semibold rounded-lg border-2 border-gray-300 dark:border-aurora-blue/30 hover:border-aurora-blue dark:hover:border-aurora-green hover:shadow-glow-blue dark:hover:shadow-glow-aurora transition-all duration-300"
              >
                See the Gap
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Capability Gap - Data */}
      <section id="divide" className="py-20 bg-white dark:bg-northern-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">
              The Capability Gap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Canada leads the world in AI policy. But most Canadians haven't been able to benefit from what we've built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="group p-6 rounded-xl bg-white/50 dark:glass dark:bg-northern-surface/50 hover:dark:bg-northern-surface-hover border border-gray-200 dark:border-aurora-green/20 hover:dark:border-aurora-green/40 transition-all duration-300 hover:shadow-elevation-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-aurora-green/20 to-canadian-pine/20 dark:from-aurora-green/30 dark:to-canadian-pine/30 rounded-lg flex items-center justify-center border border-aurora-green/30">
                    <a href="https://www.caidp.org/reports/aidv-2024/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-canadian-pine dark:text-aurora-green hover:scale-110 transition-transform">#1</a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-1">AI Policy Leadership</h3>
                    <p className="text-gray-600 dark:text-gray-300">Canada ranks first globally in AI policy aligned with democratic values (tied with South Korea and Japan) <a href="https://www.caidp.org/reports/aidv-2024/" target="_blank" rel="noopener noreferrer" className="text-aurora-blue dark:text-aurora-blue hover:underline text-xs">(source)</a></p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/50 dark:glass dark:bg-northern-surface/50 hover:dark:bg-northern-surface-hover border border-gray-200 dark:border-canadian-maple/20 hover:dark:border-canadian-maple/40 transition-all duration-300 hover:shadow-elevation-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-canadian-maple/20 to-orange-500/20 dark:from-canadian-maple/30 dark:to-orange-500/30 rounded-lg flex items-center justify-center border border-canadian-maple/30">
                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-orange-600 dark:text-canadian-maple hover:scale-110 transition-transform">32nd</a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-1">Digital Government Services</h3>
                    <p className="text-gray-600 dark:text-gray-300">Down from 3rd place in 2010. Citizens can't access what policy promises. <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-aurora-blue dark:text-aurora-blue hover:underline text-xs">(source)</a></p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/50 dark:glass dark:bg-northern-surface/50 hover:dark:bg-northern-surface-hover border border-gray-200 dark:border-canadian-red/20 hover:dark:border-canadian-red/40 transition-all duration-300 hover:shadow-elevation-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-canadian-red/20 to-red-500/20 dark:from-canadian-red/30 dark:to-red-500/30 rounded-lg flex items-center justify-center border border-canadian-red/30">
                    <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-red-600 dark:text-canadian-red hover:scale-110 transition-transform">12%</a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-1">Business Adoption</h3>
                    <p className="text-gray-600 dark:text-gray-300">Only 12% of Canadian businesses actually use AI in operations <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-aurora-blue dark:text-aurora-blue hover:underline text-xs">(source)</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:glass dark:from-aurora-purple/10 dark:via-aurora-blue/10 dark:to-aurora-green/10 dark:border dark:border-aurora-purple/30 shadow-elevation-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow mb-4">
                The <span className="text-gradient-aurora">30-Place Gap</span>
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 font-medium">
                From 1st in policy to 32nd in delivery. That's not a ranking problem. That's a capability crisis.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The local business that can't compete. The community organization that can't scale. The teacher and student
                navigating AI tools in the classroom without support. The service buried in paper processes. The gap between
                what we promise and what we deliver is costing Canadian competitiveness.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 hover:dark:bg-northern-surface rounded-xl text-center border border-gray-200 dark:border-aurora-purple/20 hover:dark:border-aurora-purple/50 transition-all duration-300 hover:shadow-elevation-2">
              <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-purple-600 dark:text-aurora-purple mb-2 block hover:scale-110 transition-transform">1.2M</a>
              <p className="text-sm text-gray-600 dark:text-gray-300">Businesses lacking tech capability <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:underline text-xs">(source)</a></p>
            </div>
            <div className="group p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 hover:dark:bg-northern-surface rounded-xl text-center border border-gray-200 dark:border-aurora-blue/20 hover:dark:border-aurora-blue/50 transition-all duration-300 hover:shadow-elevation-2">
              <a href="https://www.lexpert.ca/news/technology-law/canadians-artificial-intelligence-literacy-among-the-lowest-in-the-world-kpmg-report/392825" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-blue-600 dark:text-aurora-blue mb-2 block hover:scale-110 transition-transform">44/47</a>
              <p className="text-sm text-gray-600 dark:text-gray-300">Canada's rank in AI literacy among nations (KPMG) <a href="https://www.lexpert.ca/news/technology-law/canadians-artificial-intelligence-literacy-among-the-lowest-in-the-world-kpmg-report/392825" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:underline text-xs">(source)</a></p>
            </div>
            <div className="group p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 hover:dark:bg-northern-surface rounded-xl text-center border border-gray-200 dark:border-canadian-pine/20 hover:dark:border-canadian-pine/50 transition-all duration-300 hover:shadow-elevation-2">
              <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-green-600 dark:text-canadian-pine mb-2 block hover:scale-110 transition-transform">88%</a>
              <p className="text-sm text-gray-600 dark:text-gray-300">Of businesses not using AI <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:underline text-xs">(source)</a></p>
            </div>
            <div className="group p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 hover:dark:bg-northern-surface rounded-xl text-center border border-gray-200 dark:border-canadian-maple/20 hover:dark:border-canadian-maple/50 transition-all duration-300 hover:shadow-elevation-2">
              <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-orange-600 dark:text-canadian-maple mb-2 block hover:scale-110 transition-transform">29↓</a>
              <p className="text-sm text-gray-600 dark:text-gray-300">Places fallen in digital gov (2010-2022) <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:underline text-xs">(source)</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="belief" className="py-20 bg-gray-50 dark:bg-northern-slate">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Four principles. Execution over philosophy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface hover:dark:bg-northern-surface-hover rounded-xl border-l-4 border-aurora-purple dark:border-aurora-purple transition-all duration-300 hover:shadow-elevation-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aurora-purple/10 dark:bg-aurora-purple/20 rounded-lg flex items-center justify-center border border-aurora-purple/30">
                  <span className="text-2xl font-bold text-aurora-purple">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow pt-2">Start with Who Needs Help</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                The business that can't compete. The citizen trying to understand complex policy. The teacher and student navigating technology in the classroom. The community organization that can't scale.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Build for real Canadians with real problems, not theoretical users.
              </p>
            </div>

            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface hover:dark:bg-northern-surface-hover rounded-xl border-l-4 border-aurora-blue dark:border-aurora-blue transition-all duration-300 hover:shadow-elevation-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aurora-blue/10 dark:bg-aurora-blue/20 rounded-lg flex items-center justify-center border border-aurora-blue/30">
                  <span className="text-2xl font-bold text-aurora-blue">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow pt-2">Ship Working Tools, Not Perfect Plans</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Canada ranks #1 in AI policy. We don't need more frameworks.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Launch early, improve constantly, measure actual capability. Small working systems beat large perfect plans.
              </p>
            </div>

            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface hover:dark:bg-northern-surface-hover rounded-xl border-l-4 border-aurora-green dark:border-aurora-green transition-all duration-300 hover:shadow-elevation-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-aurora-green/10 dark:bg-aurora-green/20 rounded-lg flex items-center justify-center border border-aurora-green/30">
                  <span className="text-2xl font-bold text-aurora-green">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow pt-2">Close the Gap, Track the Gap</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                From 12% business adoption → measure monthly gains. From 32nd in digital gov → track ranking progress. From 44th in AI literacy → track learning gains.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                If we're closing the gap, we can prove it.
              </p>
            </div>

            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface hover:dark:bg-northern-surface-hover rounded-xl border-l-4 border-canadian-maple dark:border-canadian-maple transition-all duration-300 hover:shadow-elevation-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-canadian-maple/10 dark:bg-canadian-maple/20 rounded-lg flex items-center justify-center border border-canadian-maple/30">
                  <span className="text-2xl font-bold text-canadian-maple">4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow pt-2">Make it Work for Everyone</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Technology that only works for 12% of businesses isn't working. Government services ranked 32nd aren't serving citizens.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Build for the machine shop in Medicine Hat, the community group in rural Saskatchewan, the classroom using AI tools in Thunder Bay, the small business in a remote town. If it doesn't work for them, it doesn't work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are - Journey */}
      <section id="journey" className="py-20 bg-white dark:bg-northern-dark">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">
              Our Progress
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Regularly updated with current status.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-aurora-green to-canadian-pine rounded-full flex items-center justify-center text-white font-bold shadow-glow-aurora">
                ✓
              </div>
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-green dark:border-aurora-green">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">Established</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Mission and vision defined</li>
                  <li>• Core values established</li>
                  <li>• Understanding of the problem</li>
                  <li>• This website (v1)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-aurora-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-glow-blue">
                ⏳
              </div>
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-blue dark:border-aurora-blue">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">In Progress</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
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
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface/50 rounded-xl border-l-4 border-gray-300 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">Not Started</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
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
      <section id="join" className="relative py-20 bg-gradient-to-br from-aurora-purple via-aurora-blue to-aurora-green text-white overflow-hidden">
        {/* Aurora effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-aurora-purple/20 to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-canadian-snow">
            Get Involved
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Help shape what we build. Share your expertise. Build Canada's technology commons together.
          </p>
          <div className="inline-block glass bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-elevation-4">
            <p className="text-lg mb-4">Connect with us at <a href="mailto:hello@cognitivecommons.ca" className="underline hover:text-canadian-snow font-semibold transition-colors">hello@cognitivecommons.ca</a></p>
            <p className="text-sm text-gray-200">Updates coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
