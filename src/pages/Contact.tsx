import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24 bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How can we help?</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Reach out to our clinical support team for test enquiries, sample collection support, or partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Phone, title: 'Medical Support', info: '+1 (555) 012-3456', color: 'blue' },
                { icon: Mail, title: 'Lab Enquiries', info: 'support@precision.lab', color: 'slate' },
                { icon: MapPin, title: 'Main Facility', info: '772 Science Blvd, Bio-Tech Hub, NY', color: 'slate' },
                { icon: Clock, title: 'Operating Hours', info: '24/7 Diagnostics support', color: 'slate' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm group hover:border-blue-300 transition-colors">
                  <div className={`p-3 rounded-lg w-fit mb-6 ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-600'} transition-colors group-hover:bg-blue-50 group-hover:text-blue-600`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 truncate text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.info}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-2xl aspect-[16/9] flex items-center justify-center relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                 alt="Map" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform" 
               />
               <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl border border-slate-200 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-bold text-slate-900">Precision Labs Hub</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Secure Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@hospital.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none">
                  <option>General Enquiry</option>
                  <option>Test Result Support</option>
                  <option>Partnership Request</option>
                  <option>Billing Question</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="How can we assist you today?"
                  required
                />
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-sm flex items-center justify-center group hover:bg-slate-800 transition-colors shadow-sm">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
