export default function ClinicianResources() {
  return (
    <div className="pb-24 bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Clinician Resources</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Supporting our medical partners with integrated tools, documentation, and real-time diagnostic data access.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold flex items-center shadow-sm hover:bg-blue-700 transition-colors">
               <UserPlus className="mr-2 w-5 h-5" />
               New Partner Signup
             </button>
             <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold flex items-center hover:bg-slate-800 transition-colors">
               LIS Login Access
             </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Documentation List */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
               <FileArchive className="w-6 h-6 text-blue-600" />
               Resource Downloads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RESOURCES.map((res) => (
                <div key={res.title} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group flex flex-col">
                   <div className="p-3 bg-slate-50 text-slate-400 rounded-lg w-fit mb-4 group-hover:text-blue-600 transition-colors">
                      <FileText className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-slate-800 mb-2 truncate text-sm">{res.title}</h3>
                   <p className="text-slate-500 text-[11px] mb-6 line-clamp-2 leading-relaxed">{res.desc}</p>
                   <div className="flex items-center justify-between mt-auto">
                      <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{res.type} • {res.size}</span>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                         <Download className="w-5 h-5" />
                      </button>
                   </div>
                </div>
              ))}
            </div>

            {/* Preparation Guidelines */}
            <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm group">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                     <span className="p-4 bg-slate-50 rounded-xl inline-block mb-6 text-slate-600 group-hover:text-blue-600 transition-colors">
                        <ShieldCheck className="w-10 h-10" />
                     </span>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">Preparation Protocols</h3>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                     {[
                       { num: '01', title: 'Fastening Requirements', text: 'Ensure patients have fasted for 8-12 hours for lipid profiles and glucose tests.' },
                       { num: '02', title: 'Labeling Standards', text: 'Use standard barcoding. Essential: Patient Name, ID, Collection Time, & Clinician ID.' },
                       { num: '03', title: 'Transport Environment', text: 'Maintain cold chain (2-8°C) for specific metabolic panels during transit.' }
                     ].map(step => (
                       <div key={step.num} className="flex gap-5">
                          <div className="shrink-0 w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs">{step.num}</div>
                          <div>
                             <h4 className="font-bold text-slate-800 text-sm mb-1">{step.title}</h4>
                             <p className="text-slate-500 text-xs leading-relaxed">{step.text}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 mb-8">Partner FAQ</h3>
               <div className="space-y-8">
                  {[
                    'How to request emergency TAT?',
                    'Sample pickup schedule enquiries',
                    'Accessing report history archive',
                    'Adding new clinicians to portal'
                  ].map(q => (
                    <div key={q} className="group cursor-pointer">
                       <p className="text-xs font-bold text-slate-700 flex items-center group-hover:text-blue-600 transition-colors">
                        <HelpCircle className="mr-3 w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                        {q}
                        <ArrowRight className="ml-auto w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                       </p>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors shadow-sm">
                  Contact Support
               </button>
            </div>

            <div className="bg-blue-50/50 p-10 rounded-2xl border border-blue-100">
               <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Quality Performance</h3>
               <p className="text-xs text-blue-700/70 text-center mb-8 leading-relaxed">View integrated EQAS results and real-time Internal QC performance charts.</p>
               <div className="aspect-video bg-white rounded-xl flex items-center justify-center overflow-hidden border border-blue-100 p-6">
                  <div className="w-full h-full flex items-end justify-between gap-1">
                     {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                       <div key={i} className="bg-blue-600/20 w-full rounded-t hover:bg-blue-600/40 transition-colors" style={{height: `${h}%`}} />
                     ))}
                  </div>
               </div>
               <button className="w-full mt-6 py-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-80 transition-opacity text-center">
                  Full QC Archive
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { FileText, Download, ShieldCheck, HelpCircle, ArrowRight, UserPlus, FileArchive } from 'lucide-react';
import { motion } from 'motion/react';

const RESOURCES = [
  { 
    title: 'Sample Collection Manual', 
    desc: 'Guidelines for specimen collection, labeling, and transportation for all departments.',
    type: 'PDF',
    size: '4.2 MB'
  },
  { 
    title: 'Test Directory 2026', 
    desc: 'Comprehensive list of available tests, referral criteria, and TAT values.',
    type: 'PDF',
    size: '12.8 MB'
  },
  { 
    title: 'Critical Values Policy', 
    desc: 'Protocol for reporting urgent results and communication channels.',
    type: 'PDF',
    size: '1.5 MB'
  },
  { 
    title: 'Request Form v4.1', 
    desc: 'Printable general diagnostic request form for off-line sample submission.',
    type: 'PDF',
    size: '0.8 MB'
  }
];
