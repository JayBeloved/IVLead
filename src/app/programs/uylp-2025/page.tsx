import Link from "next/link";
import { ArrowLeft, Users, GraduationCap, Award } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function UYLP2025() {
  // Using generic unsplash gallery images for now per user request
  const galleryImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
    "https://images.unsplash.com/photo-1475721025592-720905f9cb4c?w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  ];

  return (
    <div className="flex flex-col items-center pb-24">
      {/* Hero Section */}
      <section className="w-full bg-[#0a101f] pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Programs
          </Link>
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">UYLP 2025 <span className="text-iv-red">Impact Report</span></h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Our inaugural summit was a massive success, proving the profound need for actionable leadership development among Nigeria's youth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full -mt-10 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-iv-blue border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-iv-red mb-4" />
                <h3 className="text-4xl font-heading font-black text-white mb-2">200+</h3>
                <p className="text-slate-400 font-medium">Summit Attendees</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-iv-blue border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center">
                <GraduationCap className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-4xl font-heading font-black text-white mb-2">100</h3>
                <p className="text-slate-400 font-medium">Bootcamp Enrollments</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-iv-blue border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center">
                <Award className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-4xl font-heading font-black text-white mb-2">50</h3>
                <p className="text-slate-400 font-medium">Bootcamp Graduates</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="w-full max-w-4xl mx-auto px-4 mb-20 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold mb-6">Demonstrating Commitment & Retention</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The 50 participants who successfully completed the structured leadership bootcamp demonstrated strong commitment, incredible retention, and measurable impact in their respective communities and fields. 
            This success rate solidifies our methodology for the upcoming 2026 summit.
          </p>
        </AnimatedSection>
      </section>

      {/* Gallery */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-heading font-bold">2025 Event Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:grid-cols-3 gap-4 auto-rows-[250px]">
            {galleryImages.map((src, idx) => (
              <div key={idx} className={`relative rounded-xl overflow-hidden group ${idx === 0 || idx === 3 ? "md:col-span-2" : ""}`}>
                <img 
                  src={src} 
                  alt={`UYLP 2025 Event Image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
