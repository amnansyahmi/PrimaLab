export default function About() {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Legacy of Precision.</h1>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Precision Diagnostics Lab combines state-of-the-art laboratory technology with clinical expertise to deliver accurate results when they matter most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm relative group">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-8">
                <Target className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
             <p className="text-slate-500 leading-relaxed text-sm">
               To provide uncompromising laboratory services through innovation, accuracy, and efficiency—empowering clinicians with reliable data and patients with peace of mind.
             </p>
          </div>
          <div className="bg-slate-900 p-10 rounded-2xl text-white shadow-sm relative group">
             <div className="p-3 bg-white/10 text-white rounded-lg w-fit mb-8">
                <Eye className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
             <p className="text-slate-400 leading-relaxed text-sm">
               To be the gold standard in diagnostic diagnostics globally, recognized for scientific leadership, quality benchmarks, and accessible healthcare solutions.
             </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Stats.map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
           <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Core Values</h2>
              <p className="text-slate-500">The standards we live by every day.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding honesty and ethics in every test we perform.' },
                { icon: Microscope, title: 'Precision', desc: 'Accuracy is not an option; it is our fundamental requirement.' },
                { icon: Users, title: 'Collaboration', desc: 'Working as one with healthcare providers for better outcomes.' },
                { icon: Heart, title: 'Compassion', desc: 'Understanding the patient journey beyond the test tube.' }
              ].map(value => (
                <div key={value.title} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                   <div className="p-3 bg-slate-50 text-slate-600 rounded-lg w-fit mb-6">
                      <value.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-800 mb-3">{value.title}</h3>
                   <p className="text-slate-500 text-xs leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Uncompromising Compliance</h2>
               <div className="grid gap-4">
                  {ACCREDITATIONS.map(item => (
                    <div key={item.name} className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200 group hover:border-blue-200 transition-colors">
                       <div className="flex items-center gap-4">
                          <Award className="w-5 h-5 text-blue-600" />
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                            <p className="text-[11px] text-slate-500">{item.description}</p>
                          </div>
                       </div>
                       <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Users, Microscope, Award, ArrowRight } from 'lucide-react';
import { ACCREDITATIONS } from '@/src/constants';

const Stats = [
  { label: 'Samples/Day', value: '5,000+' },
  { label: 'Lab Experts', value: '80+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Hospitals Partnered', value: '120+' },
];
