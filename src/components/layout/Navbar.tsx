import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NAVIGATION } from '@/src/constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center transition-transform group-hover:scale-105">
            <Microscope className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Prima<span className="text-blue-600">Lab</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "pb-1 transition-colors hover:text-blue-600",
                  location.pathname === item.path 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/clinician" 
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
          >
            Clinician Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 focus:outline-none hover:bg-slate-50 rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-slate-200 py-4 shadow-xl z-40"
          >
            <div className="px-4 space-y-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-2 px-4">
                <Link 
                  to="/clinician" 
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-md font-bold text-sm"
                >
                  Clinician Portal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
