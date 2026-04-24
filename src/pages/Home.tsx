export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="px-6 sm:px-12 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
        <div className="lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
              Precision Diagnostics for Better Outcomes.
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Combining state-of-the-art laboratory technology with clinical expertise to deliver accurate results when they matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md group">
                <input 
                  type="text" 
                  placeholder="Search for tests or services..." 
                  className="w-full pl-10 pr-4 py-4 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
                Find Service
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-2/5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
          >
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-lg">
              <ShieldCheck className="w-5 h-5" /> ISO 15189:2012
            </h3>
            <p className="text-xs text-blue-700/70 leading-relaxed font-medium">
              Certified Quality Management System for Medical Laboratories ensuring competence and consistent quality.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
          >
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Clinician Resources</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Download integrated request forms, sample collection guidelines, and clinical referral protocols.
            </p>
            <Link to="/clinician" className="text-blue-600 text-xs font-bold flex items-center gap-1 uppercase tracking-wider hover:translate-x-1 transition-transform">
              Access Library <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100/50 py-8 px-6 sm:px-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Accreditations & Partners</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-bold text-slate-400 text-xs sm:text-sm">
            <span>ISO CERTIFIED</span>
            <span>COLLEGE OF PATHOLOGISTS</span>
            <span>HEALTH QUALITY ASSURANCE</span>
            <span>GLOBAL DIAGNOSTICS NETWORK</span>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="flex-1 px-6 sm:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Laboratory Departments</h2>
              <p className="text-slate-500 max-w-lg">Specialized diagnostic services across 12 departments with rapid turnaround times.</p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-blue-600 flex items-center gap-1 group">
              View All Departments <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hematology', desc: 'Full blood counts, coagulation profiles, and bone marrow analysis.', icon: Activity },
              { title: 'Clinical Biochemistry', desc: 'Comprehensive metabolic panels, enzyme testing, and hormone assays.', icon: Beaker },
              { title: 'Molecular Pathology', desc: 'PCR-based testing, genetic screening, and infectious disease markers.', icon: Microscope },
              { title: 'Immunology', desc: 'Autoimmune panels, allergy testing, and serology screenings.', icon: Info },
            ].map((dept, i) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group cursor-pointer hover:shadow-md h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-lg mb-6 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <dept.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h4 className="font-bold text-slate-800 mb-3 text-lg">{dept.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clinician Portal CTA */}
      <section className="bg-slate-900 py-16 px-6 sm:px-12 text-center overflow-hidden relative">
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Partnering for better healthcare.</h2>
            <p className="text-slate-400 mb-10 text-lg">Are you a healthcare provider? Join our network for paperless reporting and streamlined patient diagnostics.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/clinician" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Partner Registration
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors">
                Contact Support
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

// Added imports for Home since it uses Link and Icons
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowRight, ShieldCheck, Activity, Beaker, Microscope, Info } from 'lucide-react';
