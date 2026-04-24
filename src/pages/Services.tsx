export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(LAB_SERVICES.map(s => s.category))];

  const filteredServices = LAB_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-24 bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Laboratory Departments</h1>
          <p className="text-slate-500 text-lg max-w-2xl mb-12">
            Specialized diagnostic services across 12 departments delivering accurate results with rapid turnaround.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search services or tests..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-md text-xs font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-12">
        <AnimatePresence mode='popLayout'>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredServices.map((service) => {
              const IconComp = ICON_MAP[service.icon];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={service.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group flex flex-col hover:shadow-md"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                       {IconComp && <IconComp className="w-5 h-5" />}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                       {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors shrink-0">{service.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-wider gap-1 hover:translate-x-1 transition-transform">
                    View Subtests <ChevronRight className="w-3 h-3" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        
        {filteredServices.length === 0 && (
          <div className="py-20 text-center">
             <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
             <h3 className="text-lg font-bold text-slate-900">No services found</h3>
             <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </section>

      {/* Optimized Call to Action */}
      <section className="bg-white py-16 mx-6 sm:mx-12 rounded-2xl border border-slate-200 mb-24">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4">Corporate & Specialized</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">Dedicated solutions for organizations.</h2>
            <p className="text-slate-500 text-sm mb-10 max-w-lg mx-auto">
              Our lab also offers specialized screening packages for corporates, insurance providers, and government health bodies with dedicated account management.
            </p>
            <button className="px-10 py-3 bg-slate-900 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-slate-800 transition-colors">
               Request Corporate Quote
            </button>
         </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Activity, Beaker, Microscope, Info, Dna, ShieldAlert } from 'lucide-react';
import { LAB_SERVICES } from '@/src/constants';

const ICON_MAP: Record<string, any> = {
  Activity,
  Beaker,
  Microscope,
  Info,
  Dna,
  ShieldAlert
};
