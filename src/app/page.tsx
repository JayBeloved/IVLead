import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Zap, Camera, HeartHandshake } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background slideshow with kenburns effect */}
        <HeroSlideshow />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-iv-red/30 bg-iv-red/10 text-iv-red-light mb-6 text-sm font-medium">
            <Link href='https://bit.ly/UYLPC2'>
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-iv-red-light inline-block" />
              Register for UYLP 2026 Now
            </Link>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight">
              Inspiring Vision, <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-iv-red to-iv-red-light">
                Leading for Impact
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-sans">
              Equipping, inspiring, and empowering the next generation of leaders across Nigeria to translate potential into measurable community transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/programs/uylp-2026"
                className="w-full sm:w-auto px-8 py-4 bg-iv-red hover:bg-iv-red-light text-white rounded-full font-semibold transition-all shadow-lg shadow-iv-red/25 flex items-center justify-center group"
              >
                The 2026 Summit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/programs"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center justify-center"
              >
                Explore Programs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="w-full py-24 bg-[#0a101f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Approach to Leadership</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just host events; we build long-term movements focused on measurable impact and accountability.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-iv-blue/50 border border-white/5 p-8 rounded-2xl hover:border-iv-red/30 transition-colors">
              <div className="h-12 w-12 bg-iv-red/20 rounded-xl flex items-center justify-center text-iv-red-light mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Nurturing Purpose</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Developing leaders driven by a clear mission to create sustainable solutions and drive positive change in their communities.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-iv-blue/50 border border-white/5 p-8 rounded-2xl hover:border-iv-red/30 transition-colors">
              <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Practical Skills</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Providing real-world leadership training, mentorship, and capacity building that bridges the gap between potential and employability.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-iv-blue/50 border border-white/5 p-8 rounded-2xl hover:border-iv-red/30 transition-colors">
              <div className="h-12 w-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Collaboration</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Creating dynamic platforms where emerging problem-solvers can connect, iterate ideas, and form impactful partnerships.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights / UYLP 2025 Impact */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-iv-red/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <AnimatedSection className="w-full md:w-1/2">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden hidden md:block">
              {/* Replace with actual image later */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <img src="https://imgur.com/T4h2nTW.jpg" alt="Conference attendees" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-iv-blue to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-iv-blue/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl font-heading font-bold text-white mb-1">250+</p>
                  <p className="text-sm text-slate-300">Attendees reached & empowered in 2025.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full md:w-1/2" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              A Track Record of <span className="text-iv-red-light">Excellence</span>
            </h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              The inaugural UYLP 2025 conference set a new benchmark for youth empowerment. With over 250 attendees, 100 bootcamp enrollments, and 50 successful graduates, we demonstrated the power of structured leadership commitment.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300">
                <div className="h-2 w-2 rounded-full bg-iv-red mr-3" />
                Structured networking and collaboration
              </li>
              <li className="flex items-center text-slate-300">
                <div className="h-2 w-2 rounded-full bg-iv-red mr-3" />
                Interactive workshops & design thinking
              </li>
              <li className="flex items-center text-slate-300">
                <div className="h-2 w-2 rounded-full bg-iv-red mr-3" />
                Fireside chats with young successful leaders
              </li>
            </ul>
            <Link
              href="/programs/uylp-2025"
              className="inline-flex items-center font-semibold text-iv-red-light hover:text-white transition-colors group"
            >
              View the 2025 Impact Report
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="w-full py-24 bg-[#050810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold mb-4">Connect With Us</h2>
            <p className="text-slate-400 mb-12">Follow our journey and join the conversation on Instagram <a href="https://www.instagram.com/_ivlead?igsh=dnZtY3RiZXpzMHo5" className="text-iv-red-light hover:underline">@_ivLead</a></p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "CrwO8wOoRPm",
                "DXNNJNejI3s",
                "DWyRBh1DNxj",
                "DWoG7C8DFdd"
              ].map((postId) => (
                <div key={postId} className="w-full bg-white rounded-xl overflow-hidden shadow-xl h-[460px] border border-white/10 group hover:shadow-iv-red/20 transition-all">
                  <iframe
                    src={`https://www.instagram.com/p/${postId}/embed`}
                    className="w-full h-full border-0"
                    scrolling="no"
                    title="Instagram Post"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="https://www.instagram.com/_ivlead" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-pink-500/25 transition-all">
                <Camera className="mr-2" size={20} /> View on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
