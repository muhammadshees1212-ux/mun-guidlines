import React, { useState } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  Phone, 
  BookOpen, 
  FolderDown, 
  MessageSquare, 
  Calculator, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { HEAD_DELEGATES } from '../data/hdsData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hdDropdownOpen, setHdDropdownOpen] = useState(false);

  const navItems = [
    { id: 'archive', label: 'Rules of Procedure', icon: BookOpen },
    { id: 'documents', label: 'Downloadable Docs', icon: FolderDown },
    { id: 'chat', label: 'Parliamentary Chat', icon: MessageSquare, badge: 'Live' },
    { id: 'hds', label: 'HDs Directory', icon: Phone },
    { id: 'calculator', label: 'Motion Calculator', icon: Calculator },
    { id: 'precedence', label: 'Precedence Matrix', icon: Layers }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(
      id === 'archive' ? 'rules-archive' :
      id === 'documents' ? 'documents-library' :
      id === 'chat' ? 'parliamentary-chat' :
      id === 'hds' ? 'hds-directory' :
      id === 'calculator' ? 'motion-calculator' :
      id === 'precedence' ? 'precedence-matrix' : ''
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('archive')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-lg shadow-amber-950/50">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wider">
                  DIPLOMATIA
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  MUN
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide">
                Guidelines Group & Parliamentary Archive
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-white bg-slate-800/80 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* HD Quick Contact Hotline Trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setHdDropdownOpen(!hdDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>HDs Hotline</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </button>

              {/* HDs Mini Dropdown */}
              {hdDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5 border-b border-slate-800">
                    Direct Head Delegates
                  </div>
                  <div className="divide-y divide-slate-800/60">
                    {HEAD_DELEGATES.map(hd => (
                      <a
                        key={hd.id}
                        href={hd.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg hover:bg-slate-800 flex items-center justify-between text-xs transition-colors group block"
                      >
                        <div>
                          <div className="font-semibold text-white group-hover:text-amber-300">
                            {hd.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {hd.phoneDisplay}
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                          Chat
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-left ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Mobile HD Hotline list */}
          <div className="pt-3 border-t border-slate-800 mt-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Head Delegates Contacts:
            </div>
            <div className="space-y-1.5">
              {HEAD_DELEGATES.map(hd => (
                <a
                  key={hd.id}
                  href={`tel:${hd.phone}`}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800/80 text-xs text-white"
                >
                  <span>{hd.name}</span>
                  <span className="font-mono text-amber-400">{hd.phoneDisplay}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
