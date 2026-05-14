import React, { useState, useEffect, useRef } from 'react';
import { Shield, Plus, Search, Languages, Loader2, ChevronDown, Activity, Globe, Zap, Cpu, History, Scale, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../services/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

import { Language, translations } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  category: string;
}

import Logo from './Logo';

export default function Navbar({ currentLang, onLangChange }: NavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  const t = translations[currentLang].common;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const queryText = searchQuery.trim().toLowerCase();
        
        const qKeywords = query(
          collection(db, 'search_index'),
          where('searchKeywords', 'array-contains', queryText),
          limit(5)
        );

        const qPrefix = query(
          collection(db, 'search_index'),
          where('title_lower', '>=', queryText),
          where('title_lower', '<=', queryText + '\uf8ff'),
          limit(5)
        );

        const [snapKeywords, snapPrefix] = await Promise.all([
          getDocs(qKeywords),
          getDocs(qPrefix)
        ]);

        const resultsMap = new Map();
        
        [...snapKeywords.docs, ...snapPrefix.docs].forEach(doc => {
          resultsMap.set(doc.id, { id: doc.id, ...doc.data() });
        });

        const results = Array.from(resultsMap.values()) as SearchResult[];
        setSearchResults(results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(performSearch, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <nav className="border-b border-green-100 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="h-[2px] bg-green-600 w-full" />
      <div className="corp-container flex items-center justify-between py-4">
        <div className="flex items-center gap-12">
          <motion.div 
            onClick={() => navigate('/')}
            className="shrink-0"
            whileHover="hover"
            initial="initial"
          >
            <Logo />
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#1a1a1a]/80">
            {/* Infrastructure - Mega Menu */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('infra')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="/network"
                className={`flex items-center gap-1.5 transition-colors ${activeMenu === 'infra' ? 'text-green-700' : 'hover:text-green-700'}`}
              >
                {t.network}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'infra' ? 'rotate-180' : ''}`} />
              </Link>
              
              <AnimatePresence>
                {activeMenu === 'infra' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 5 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -left-10 top-full pt-4"
                  >
                    <div className="w-[600px] bg-white border border-stone-100 shadow-2xl rounded-sm overflow-hidden flex">
                      <div className="w-1/3 bg-[#fbfcfb] p-10 border-r border-stone-100">
                        <div className="text-sm font-bold text-green-700 mb-6 tracking-tight">Institutional Network</div>
                        <p className="text-stone-500 text-xs leading-relaxed font-serif italic">
                          "Institutional Geography and Systems Assurance."
                        </p>
                      </div>
                      <div className="w-2/3 p-10 grid grid-cols-2 gap-10">
                        <Link to="/network/global" className="group block">
                          <div className="flex items-center gap-3 mb-3">
                             <Globe className="w-4 h-4 text-green-700" />
                             <span className="text-green-950 group-hover:text-green-700 transition-colors font-bold text-sm tracking-tight capitalize">Continental Reach</span>
                          </div>
                          <p className="text-xs text-stone-500 leading-relaxed font-medium">Jurisdictional clinical presence across established global territories.</p>
                        </Link>
                        <Link to="/network/monitoring" className="group block">
                          <div className="flex items-center gap-3 mb-3">
                             <Activity className="w-4 h-4 text-green-700" />
                             <span className="text-green-950 group-hover:text-green-700 transition-colors font-bold text-sm tracking-tight capitalize">Systems Oversight</span>
                          </div>
                          <p className="text-xs text-stone-500 leading-relaxed font-medium">Continuous administrative and clinical fidelity assurance protocols.</p>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Analysis - Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('intel')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="/analysis"
                className={`flex items-center gap-1.5 transition-colors ${activeMenu === 'intel' ? 'text-green-700' : 'hover:text-green-700'}`}
              >
                {t.advisory || 'Advisory'}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'intel' ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeMenu === 'intel' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 5 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-4"
                  >
                    <div className="w-56 bg-white border border-stone-100 shadow-xl rounded-sm py-2">
                      <Link to="/analysis/core" className="flex items-center gap-3 px-6 py-3 hover:bg-stone-50 group">
                        <Cpu className="w-3.5 h-3.5 text-stone-400 group-hover:text-green-700 transition-colors" />
                        <span className="text-stone-600 group-hover:text-green-950 transition-colors">Digital Analysis</span>
                      </Link>
                      <Link to="/analysis/ethics" className="flex items-center gap-3 px-6 py-3 hover:bg-stone-50 group">
                        <Scale className="w-3.5 h-3.5 text-stone-400 group-hover:text-green-700 transition-colors" />
                        <span className="text-stone-600 group-hover:text-green-950 transition-colors">Review Protocol</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Heritage - Mega Menu */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('inst')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="/heritage"
                className={`flex items-center gap-1.5 transition-colors ${activeMenu === 'inst' ? 'text-green-700' : 'hover:text-green-700'}`}
              >
                {t.institutional}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'inst' ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeMenu === 'inst' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 5 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -left-48 top-full pt-4"
                  >
                    <div className="w-[800px] bg-white border border-stone-100 shadow-2xl rounded-sm overflow-hidden flex">
                      <div className="w-1/4 bg-stone-900 text-white p-8">
                        <div className="text-sm font-bold text-green-500 mb-6">About</div>
                        <div className="space-y-6">
                           <div>
                             <div className="text-xl font-bold tracking-tight text-white italic">1926</div>
                             <div className="text-xs text-stone-500 font-medium">Establishment</div>
                           </div>
                           <div className="h-[1px] w-full bg-stone-800" />
                           <p className="text-xs text-stone-400 leading-relaxed">
                             Ensuring medical excellence for nearly a century.
                           </p>
                        </div>
                      </div>
                      <div className="w-3/4 p-10 grid grid-cols-3 gap-12">
                        <div>
                          <h4 className="text-sm font-bold text-stone-400 mb-6 tracking-tight">Institutional Records</h4>
                          <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/heritage/ethos" className="text-stone-600 hover:text-green-700 block transition-colors">Philosophy</Link></li>
                            <li><Link to="/heritage/directives" className="text-stone-600 hover:text-green-700 block transition-colors">Directives</Link></li>
                            <li><Link to="/heritage/review" className="text-stone-600 hover:text-green-700 block transition-colors">Review</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-stone-400 mb-6 tracking-tight">Administrative Board</h4>
                          <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/heritage/governance/board" className="text-stone-600 hover:text-green-700 block transition-colors">Medical Board</Link></li>
                            <li><Link to="/heritage/governance/rights" className="text-stone-600 hover:text-green-700 block transition-colors">Privacy Rights</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/support" className="hover:text-green-700 transition-colors py-2">{t.liaison}</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-300" />
            <input 
              type="text" 
              placeholder="Search Repository..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              className="pl-9 pr-10 py-2 bg-stone-50 border border-stone-100 rounded-sm text-sm font-medium placeholder:text-stone-300 focus:outline-none focus:ring-1 focus:ring-green-500/20 focus:border-green-500 transition-all w-48 lg:w-64"
            />
            {isSearching && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-green-600 animate-spin" />
            )}

            <AnimatePresence>
              {showResults && (searchQuery.length > 1) && (
                <>
                  <div 
                    className="fixed inset-0 z-0" 
                    onClick={() => setShowResults(false)}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-full min-w-[350px] bg-white border border-stone-100 rounded-sm shadow-2xl z-10 overflow-hidden"
                  >
                    {searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((result) => (
                          <div 
                            key={result.id}
                            onClick={() => {
                              navigate(result.url);
                              setShowResults(false);
                              setSearchQuery('');
                            }}
                            className="px-6 py-4 hover:bg-stone-50 cursor-pointer transition-colors border-b border-stone-100 last:border-0"
                          >
                            <div className="flex items-center justify-between gap-4 mb-1">
                              <div className="text-[13px] font-medium text-green-950">{result.title}</div>
                              <div className="text-[10px] font-medium text-green-700 px-1.5 py-0.5 bg-green-50 rounded-xs border border-green-100">{result.category}</div>
                            </div>
                            <div className="text-xs text-stone-500 line-clamp-1 truncate">{result.excerpt}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-stone-50/20">
                        <div className="text-xs font-medium text-stone-400">
                          {isSearching ? 'Analyzing network...' : `No records found for "${searchQuery}"`}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-[12px] font-medium text-stone-500 hover:text-green-700 transition-colors px-4 py-2"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-stone-100 rounded-sm shadow-xl z-20 py-1 overflow-hidden"
                  >
                    {['English', 'Deutsch', '日本語', 'Français'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          onLangChange(lang as Language);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 text-[12px] font-medium hover:bg-stone-50 transition-colors ${
                          currentLang === lang ? 'text-green-700 bg-green-50/30 font-semibold' : 'text-stone-600'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <Link to="/membership" className="group relative overflow-hidden bg-green-700 text-white px-8 py-2.5 rounded-full text-[13px] font-medium hover:bg-green-800 transition-all shadow-md hover:shadow-lg shadow-green-900/10 active:scale-95">
            <span className="relative z-10 text-white">{t.apply}</span>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
