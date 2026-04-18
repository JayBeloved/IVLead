import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Handshake, HeartHandshake, MapPin, Phone, Mail } from "lucide-react";

export default function PartnershipsPage() {
  const tiers = [
    {
      name: "Gold Partner",
      description: "Maximum visibility and strategic alignment with our vision.",
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/30"
    },
    {
      name: "Silver Partner",
      description: "Significant brand exposure and networking opportunities.",
      color: "bg-slate-300",
      textColor: "text-slate-300",
      borderColor: "border-slate-300/30"
    },
    {
      name: "Bronze Partner",
      description: "Meaningful contribution with core event recognition.",
      color: "bg-orange-700",
      textColor: "text-orange-700",
      borderColor: "border-orange-700/30"
    }
  ];

  const generalBenefits = [
    "Logo placement on event banners, brochures, programs, and digital assets",
    "Recognition across UYLP26 social media platforms",
    "Brand mention during the general sessions",
    "Access to a VIP networking session with speakers and key stakeholders",
    "Comprehensive Post-Event Impact & Data Report for your ESG metrics",
    "Inclusion in press releases and media mentions related to the summit"
  ];

  return (
    <div className="flex flex-col items-center pb-24">
      {/* Hero */}
      <section className="w-full bg-iv-blue pt-32 pb-20 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-iv-red/10 blur-[120px] rounded-full z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 mx-auto bg-iv-red/20 text-iv-red-light rounded-2xl flex flex-col items-center justify-center mb-6">
              <Handshake size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">Partner With Us</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We invite your organization to play a direct role in shaping leaders who will drive innovation, resilience, and positive change across Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grant Callout */}
      <section className="w-full max-w-5xl mx-auto px-4 -mt-10 relative z-20 mb-20">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-iv-red to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-white">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Fund the ₦500,000 Leadership Grant</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                For the 2026 edition, we are introducing a milestone grant. Empower 5 outstanding participants with ₦100,000 each to implement viable business or community-focused ideas. Your sponsorship can directly fund this initiative.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center text-center w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div>
                <p className="text-sm uppercase tracking-wider font-semibold opacity-80 mb-2">Total Grant</p>
                <p className="text-4xl font-heading font-black">₦500,000</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Benefits Layout */}
      <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold mb-8">General Sponsor Benefits</h2>
            <div className="bg-[#050810] border border-white/5 rounded-2xl p-8">
              <ul className="space-y-6">
                {generalBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-iv-red-light mr-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col">
            <h2 className="text-3xl font-heading font-bold mb-8">Sponsorship Tiers</h2>
            <div className="space-y-6 flex-1">
              {tiers.map((tier, idx) => (
                <div key={idx} className={`border bg-iv-blue/50 rounded-2xl p-6 flex items-center ${tier.borderColor}`}>
                  <div className={`w-3 h-3 rounded-full mr-6 ${tier.color}`} />
                  <div>
                    <h3 className={`text-2xl font-heading font-bold mb-2 ${tier.textColor}`}>{tier.name}</h3>
                    <p className="text-slate-400">{tier.description}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-slate-500 italic mt-6 px-2">
                * A detailed sponsorship tier breakdown with specific benefits will be shared upon expression of interest.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact & Banking */}
      <section className="w-full max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <div className="text-center mb-10">
              <HeartHandshake className="w-12 h-12 text-iv-red mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold mb-4">Let's Discuss Next Steps</h2>
              <p className="text-slate-400">
                We welcome the opportunity to explore bespoke activation opportunities tailored to your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-6 border-b border-white/10 pb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-300">
                    <Phone className="w-5 h-5 mr-4 text-iv-red" />
                    +234 816 975 0080
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Phone className="w-5 h-5 mr-4 text-iv-red" />
                    +234 809 301 2313
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Mail className="w-5 h-5 mr-4 text-iv-red" />
                    partnerships@ivlead.org
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-6 border-b border-white/10 pb-4">Donation Details</h3>
                <div className="bg-[#050810] p-6 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-400 mb-1">Account Name:</p>
                  <p className="text-base font-medium text-white mb-4">IVLeadership Foundation</p>
                  
                  <p className="text-xs text-slate-400 mb-1">Bank:</p>
                  <p className="text-base font-medium text-white mb-4">UBA</p>
                  
                  <p className="text-xs text-slate-400 mb-1">Account Number:</p>
                  <p className="text-2xl font-mono tracking-widest text-iv-red-light font-bold">1026785328</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
