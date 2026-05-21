import Link from "next/link";
import { Calendar, MapPin, Users, Lightbulb, MessageSquare, HandHeart, CheckCircle2, ArrowRight, Clock, Target, Download, FileText } from "lucide-react";
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

  const agendaItems = [
    { time: "9:00 AM – 9:10 AM", title: "Opening Session", description: "Opening Prayer, National Anthem, Welcome Address", speaker: "Moderator: Oluwarantimi" },
    { time: "9:10 AM – 9:25 AM", title: "The Leadership Mandate: How IVLEAD is Bridging the Gap", description: "", speaker: "Executive Director", slideUrl: "https://gemini.google.com/share/c88e4fe12102" },
    { time: "9:25 AM – 9:55 AM", title: "Keynote Session 1: Building Resilient Systems", description: "", speaker: "Dr. Tobi Moody" },
    { time: "9:55 AM – 10:25 AM", title: "Keynote Session 2: Leading with Empathy", description: "", speaker: "Prof. Ehiz", slideUrl: "/slides/uylp-2026/prof-ehiz-Leading-with-Empathy-Presentation.pdf" },
    { time: "10:25 AM – 11:10 AM", title: "Panel Session 1: The Innovation Lab", description: "Solving Local Problems with Global Tools. Practical application of human-centered design in Nigerian communities.", speaker: "Moderator: Mimi K | Panelists: Phillip Idoko, Mr. Akin, Lucy Abeng" },
    { time: "11:10 AM – 11:40 AM", title: "Keynote Session 3: Future-Proofing Your Leadership", description: "", speaker: "Dr. Osagie Itamah", slideUrl: "/slides/uylp-2026/dr-osagie-itamah-Future-Proofing-Your-Leadership.pdf" },
    { time: "11:40 AM – 12:10 PM", title: "Keynote Session 4: Financial Intelligence for Purpose-Driven Leaders", description: "", speaker: "Mr. Taiwo Ajani", slideUrl: "/slides/uylp-2026/pastor-taiwo-ajani-Financial-Intelligence-for-Purpose-Driven-Leaders.pdf" },
    { time: "12:10 PM – 12:30 PM", title: "Interactive Questions & Answers Session", description: "", speaker: "" },
    { time: "12:30 PM – 12:40 PM", title: "Spoken Word Performance", description: "", speaker: "" },
    { time: "12:40 PM – 12:50 PM", title: "10-Minute Spotlight Session: Start Before You're Ready", description: "", speaker: "Divine Daniel; Host, The Morning Gear Podcast" },
    { time: "12:50 PM – 1:10 PM", title: "Wordplay & Leadership Games", description: "Interactive audience engagement activities", speaker: "" },
    { time: "1:10 PM – 1:55 PM", title: "Panel Session 2: Fireside Chat: Real Talk on Resilience & Impact", description: "A raw discussion on overcoming failure and driving community growth.", speaker: "Moderator: Shalom Lamishi Ishaku | Panelists: Tunde Rehma, Rose Danjuma" },
    { time: "1:55 PM – 2:15 PM", title: "Key Insights Session", description: "", speaker: "Barr. Chimdi Neliaku" },
    { time: "2:15 PM – 2:25 PM", title: "IVLEAD's Projects & Partnership Opportunities Pitch", description: "", speaker: "Managing Director" },
    { time: "2:25 PM – 2:40 PM", title: "Presentation of awards/certificates", description: "", speaker: "" },
    { time: "2:40 PM – 2:45 PM", title: "Closing Remarks", description: "", speaker: "" }
  ];

  const presentations = agendaItems.filter(item => item.slideUrl);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#050810]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050810] via-[#050810]/95 to-iv-red/10" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-iv-red/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-iv-red/20 text-iv-red-light mb-6 text-sm font-semibold tracking-wide border border-iv-red/30">
                Official Event Details
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-4 leading-[1.1]">
                Leading for Impact <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-iv-red to-orange-400">
                  UYLPC 2026
                </span>
              </h1>
              <p className="text-2xl font-light text-slate-300 mb-8 border-l-4 border-iv-red pl-4">
                The Global Leadership Summit
              </p>
              
              <div className="flex flex-col gap-4 mb-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full max-w-lg text-sm md:text-base">
                <div className="flex items-center text-slate-200">
                  <Calendar className="w-5 h-5 mr-4 text-iv-red shrink-0" />
                  <span className="font-semibold">21st May, 2026</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center text-slate-200">
                  <Clock className="w-5 h-5 mr-4 text-iv-red shrink-0" />
                  <span className="font-semibold">9:00 AM – 3:00 PM</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-start text-slate-200">
                  <MapPin className="w-5 h-5 mr-4 mt-0.5 text-iv-red shrink-0" />
                  <span className="font-semibold leading-snug">Cyprian Ekwensi Center for Arts and Culture, Garki, Abuja</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-start text-slate-200">
                  <Target className="w-5 h-5 mr-4 mt-0.5 text-iv-red shrink-0" />
                  <span className="font-semibold leading-snug">Emerging Leaders, Students, and Community Change-Makers (15–35)</span>
                </div>
              </div>

              <Link href="https://bit.ly/UYLPC2" className="inline-flex items-center px-8 py-4 bg-iv-red text-white hover:bg-iv-red-light rounded-full font-bold transition-all shadow-xl shadow-iv-red/20 group">
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            {/* Right Content: Flyer */}
            <AnimatedSection delay={0.2} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-iv-red/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://instagram.flos2-1.fna.fbcdn.net/v/t51.82787-15/692525434_17988471044970339_7183840300228266933_n.webp?_nc_cat=108&ig_cache_key=Mzg5NTI2NTcxNzk0MjA5ODU1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuODY0LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=T_PDGVOtirUQ7kNvwGUU3o8&_nc_oc=AdromywG-_5XoHbUFnv4s3OKq_6isFCRojoqREXoyHN-NK-If_4gkRq76Qpc5uxeol8&_nc_ad=z-m&_nc_cid=1361&_nc_zt=23&_nc_ht=instagram.flos2-1.fna&_nc_gid=qbqiRB3Q-7cTd60ERTsBdg&_nc_ss=7a22e&oh=00_Af5w9OEtO_IxN6-58ZhR6alCt1P-f5xWFhLKwIzaUPC4RQ&oe=6A0E8738" 
                  alt="UYLPC 2026 Flyer" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Event Agenda */}
      <section className="w-full py-24 bg-iv-blue border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Event Agenda</h2>
            <p className="text-slate-400">A full day packed with insights, networking, and transformational leadership experiences.</p>
          </AnimatedSection>
          
          <div className="space-y-6">
            {agendaItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-[#050810]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="inline-flex items-center px-4 py-2 bg-iv-red/10 text-iv-red-light rounded-lg font-bold border border-iv-red/20 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.time}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    )}
                    {item.speaker && (
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center text-sm font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                          <Users className="w-3.5 h-3.5 mr-2 text-iv-red-light" />
                          {item.speaker}
                        </div>
                        {item.slideUrl && (
                          <a href={item.slideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white bg-iv-red/20 hover:bg-iv-red/40 px-3 py-1.5 rounded-full border border-iv-red/30 transition-colors">
                            <Download className="w-3.5 h-3.5 mr-2 text-iv-red-light" />
                            View Slides
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Presentations Library */}
      <section className="w-full py-24 bg-[#0a101f] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-iv-red/10 rounded-full mb-6">
              <FileText className="w-8 h-8 text-iv-red-light" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Summit Resources</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Access and download the presentation slides from our esteemed speakers to review their insights and frameworks.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {presentations.map((pres, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-iv-blue/80 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:border-iv-red/30 transition-colors group">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-semibold mb-4 border border-white/10">
                      Presentation
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-iv-red-light transition-colors">{pres.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {pres.speaker}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                    <a 
                      href={pres.slideUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors"
                    >
                      View Slides
                    </a>
                    <a 
                      href={pres.slideUrl} 
                      download
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-iv-red hover:bg-iv-red-light text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-iv-red/20"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="w-full py-20 bg-[#050810] border-t border-white/5">
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
                  UYLPC 2026: The Global Leadership Summit is a world-class leadership conference designed to address this gap by equipping, inspiring, and empowering the next generation of leaders.
                </p>
                <p>
                  Building on the success of the 2025 edition, we are scaling our reach and outcomes. We are also introducing a <span className="text-iv-red-light font-bold">₦500,000 Leadership Grant</span>, providing ₦100,000 each to five outstanding participants.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-iv-blue border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
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
      <section className="w-full py-24 bg-[#0a101f] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Key Thematic Areas</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              UYLPC 2026 goes beyond traditional conferences, offering immersive experiences across three distinct pillars.
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://bit.ly/UYLPC2" className="inline-flex items-center justify-center px-10 py-5 bg-iv-blue text-white hover:bg-[#0a101f] rounded-full font-bold text-lg transition-all shadow-2xl">
                Register for UYLPC 2026
              </Link>
              <Link href="/partnerships" className="inline-flex items-center justify-center px-10 py-5 bg-white text-iv-red hover:bg-slate-100 rounded-full font-bold text-lg transition-all shadow-2xl">
                Explore Sponsorship
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
