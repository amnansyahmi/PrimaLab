import { Link } from 'react-router-dom';
import { Microscope, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { NAVIGATION } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 px-4 sm:px-12 py-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
           <Link to="/about" className="text-slate-900 transition-colors hover:text-blue-600">Quality Policy</Link>
           <Link to="/about" className="transition-colors hover:text-blue-600">Mission & Vision</Link>
           <Link to="/contact" className="transition-colors hover:text-blue-600">Terms of Service</Link>
           <Link to="/contact" className="transition-colors hover:text-blue-600">Privacy Policy</Link>
        </div>
        
        <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
           <span className="text-xs text-slate-500">
             24/7 Lab Support: <strong className="text-slate-900">+1 (555) 000-LABS</strong>
           </span>
           <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
             © 2026 PrimaLab. ISO 15189 Certified.
           </p>
        </div>
      </div>
    </footer>
  );
}
