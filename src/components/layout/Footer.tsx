import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050810] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-heading font-bold text-3xl tracking-tighter text-white mb-4 block">
              <span className="text-iv-red">IV</span>Lead
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of leaders across Nigeria to drive innovation and sustained community transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/_IVLead" className="text-slate-400 hover:text-iv-red transition-colors flex items-center justify-center p-1">
               <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/iv-lead-0497ab276" className="font-semibold text-slate-400 hover:text-iv-red transition-colors flex items-center justify-center p-1">
               <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100091979174903" className="font-semibold text-slate-400 hover:text-iv-red transition-colors flex items-center justify-center p-1">
               <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/_ivlead" className="font-semibold text-slate-400 hover:text-iv-red transition-colors flex items-center justify-center p-1">
               <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-slate-400 hover:text-white transition-colors text-sm">Programs</Link>
              </li>
              <li>
                <Link href="/programs/uylp-2025" className="text-slate-400 hover:text-white transition-colors text-sm">UYLP 2025 Impact</Link>
              </li>
              <li>
                <Link href="/programs/uylp-2026" className="text-slate-400 hover:text-white transition-colors text-sm">UYLP 2026 Summit</Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-slate-400 hover:text-white transition-colors text-sm">Partner With Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin size={16} className="mr-2 mt-0.5 min-w-[16px] text-iv-red" />
                <span>Nigeria</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Phone size={16} className="mr-2 min-w-[16px] text-iv-red" />
                <span>+234 816 975 0080</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail size={16} className="mr-2 min-w-[16px] text-iv-red" />
                {/* Placeholder email, none provided in text */}
                <span>info@ivlead.org</span>
              </li>
            </ul>
          </div>

          {/* Bank Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Support Our Cause</h3>
            <div className="bg-iv-blue p-4 rounded-xl border border-white/10">
              <p className="text-xs text-slate-400 mb-1">Account Name:</p>
              <p className="text-sm font-medium text-white mb-3">IVLeadership Foundation</p>
              <p className="text-xs text-slate-400 mb-1">Bank Name:</p>
              <p className="text-sm font-medium text-white mb-3">UBA</p>
              <p className="text-xs text-slate-400 mb-1">Account Number:</p>
              <p className="text-lg font-mono tracking-wider text-iv-red-light font-bold">1026785328</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} IVLeague Foundation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
