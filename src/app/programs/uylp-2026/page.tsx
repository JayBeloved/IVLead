import Link from "next/link";
import { Calendar, MapPin, Users, Lightbulb, MessageSquare, HandHeart, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function UYLP2026() {
  const thematicAreas = [
    {
      icon: <Lightbulb className="text-iv-red w-8 h-8 mb-4" />,
      title: "Innovate & Create",
      description: "Design thinking, creativity, digital strategy, and human-centered problem solving."
    },
    {
      icon: <MessageSquare className="text-blue-500 w-8 h-8 mb-4" />,
      title: "Communicate & Influence",
      description: "Public speaking, storytelling for social change, and leadership communication."
    },
    {
      icon: <HandHeart className="text-emerald-500 w-8 h-8 mb-4" />,
      title: "Empower & Sustain",
      description: "Resilience, empathy, personal growth, and sustainable leadership."
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#050810]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="Conference Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-iv-red/20 text-iv-red-light mb-6 text-sm font-semibold tracking-wide border border-iv-red/30">
              Sponsorship Proposal
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-4 leading-[1.1]">
              Leading for Impact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-iv-red to-orange-400">
                UYLP 2026
              </span>
            </h1>
            <p className="text-2xl font-light text-slate-300 mb-8 border-l-4 border-iv-red pl-4">
              The Global Leadership Summit
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-fit">
              <div className="flex items-center text-slate-200">
                <Calendar className="w-5 h-5 mr-3 text-iv-red" />
                <span className="font-semibold">May 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center text-slate-200">
                <MapPin className="w-5 h-5 mr-3 text-iv-red" />
                <span className="font-semibold">Nigeria</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center text-slate-200">
                <Users className="w-5 h-5 mr-3 text-iv-red" />
                <span className="font-semibold">500+ Emerging Leaders</span>
              </div>
            </div>

            <Link href="/partnerships" className="inline-flex items-center px-8 py-4 bg-white text-iv-blue hover:bg-slate-200 rounded-full font-bold transition-all shadow-xl group">
              Become a Sponsor
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="w-full py-20 bg-iv-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">Executive Summary</h2>
              <div className="prose prose-invert prose-lg text-slate-300">
                <p>
                  Across Nigeria, many young people, entrepreneurs, artisans, and emerging community leaders possess the passion and ideas to drive positive change but lack access to leadership training, mentorship, funding, and platforms that can help them translate potential into impact.
                </p>
                <p>
                  This leadership gap continues to limit innovation, employability, and sustainable community development.
                </p>
                <p className="border-l-4 border-iv-red pl-6 py-2 my-8 font-semibold text-white bg-white/5 rounded-r-lg">
                  UYLP26: The Global Leadership Summit is a world-class leadership conference designed to address this gap by equipping, inspiring, and empowering the next generation of leaders.
                </p>
                <p>
                  Building on the success of the 2025 edition, we are scaling our reach and outcomes to 500+ participants. We are also introducing a <span className="text-iv-red-light font-bold">₦500,000 Leadership Grant</span>, providing ₦100,000 each to five outstanding participants.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-[#050810] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-iv-red/10 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-heading font-bold mb-6 text-iv-red-light">Why Partner With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Directly align with youth empowerment, innovation, and capacity building.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Fulfill Corporate Social Responsibility (CSR) and ESG mandates.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Connect with a pool of high-potential future decision-makers and influencers.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Thematic Areas */}
      <section className="w-full py-24 bg-[#0a101f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Key Thematic Areas</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              UYLP26 goes beyond traditional conferences, offering immersive experiences across three distinct pillars.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thematicAreas.map((area, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-iv-blue/80 border border-white/5 rounded-2xl p-8 h-full hover:bg-white/5 transition-colors">
                  {area.icon}
                  <h3 className="text-xl font-heading font-bold mb-3 text-white">{area.title}</h3>
                  <p className="text-slate-400">{area.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 bg-gradient-to-br from-iv-red to-[#990a10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-10 opacity-90 font-light">
              We believe that true leadership development requires collaboration between the private sector, civil society, and the next generation of leaders.
            </p>
            <Link href="/partnerships" className="inline-flex items-center px-10 py-5 bg-white text-iv-red hover:bg-iv-blue hover:text-white rounded-full font-bold text-lg transition-all shadow-2xl">
              Explore Sponsorship Options
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
