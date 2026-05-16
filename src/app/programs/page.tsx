import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ProgramsHub() {
  const programs = [
    {
      id: "uylp-2026",
      title: "UYLP 2026: The Global Leadership Summit",
      theme: "Leading for Impact",
      date: "May 2026",
      location: "Nigeria",
      attendance: "500+",
      status: "Upcoming",
      description: "A world-class leadership conference designed to address the leadership gap by equipping, inspiring, and empowering the next generation of leaders with practical skills, networks, and opportunities to lead with purpose.",
      link: "/programs/uylp-2026",
      image: "https://imgur.com/T4h2nTW.jpg",
    },
    {
      id: "uylp-2025",
      title: "UYLP 2025 Impact",
      theme: "Unleash Your Leadership Potential",
      date: "2025",
      location: "Nigeria",
      attendance: "250+",
      status: "Completed",
      description: "Our inaugural conference established a strong foundation of positive change. Through structured bootcamps and networking, we empowered 200 amazing emerging leaders.",
      link: "/programs/uylp-2025",
      image: "https://imgur.com/oy2hDcy.jpg",
    }
  ];

  return (
    <div className="flex flex-col items-center pt-12 pb-24 min-h-screen">
      {/* Header */}
      <section className="w-full text-center px-4 mb-20">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
            Our <span className="text-iv-red">Programs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Discover how we translate potential into massive impact through immersive, practical, and highly engaging leadership experiences.
          </p>
        </AnimatedSection>
      </section>

      {/* Program Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.id} delay={idx * 0.1}>
              <Link href={program.link} className="group block bg-iv-blue/50 border border-white/10 rounded-3xl overflow-hidden hover:border-iv-red/40 transition-all shadow-xl hover:shadow-iv-red/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      program.status === 'Upcoming' ? 'bg-iv-red text-white' : 'bg-white/20 text-white backdrop-blur-md'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-iv-red-light font-semibold text-sm mb-1">{program.theme}</p>
                    <h2 className="text-2xl font-heading font-bold text-white shrink-0">{program.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-iv-red" />
                      {program.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-iv-red" />
                      {program.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-iv-red" />
                      {program.attendance}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center text-white font-semibold group-hover:text-iv-red-light transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
