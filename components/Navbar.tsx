import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl font-bold tracking-tighter ${isScrolled ? 'text-brand-dark' : 'text-brand-dark lg:text-white'}`}>
          DRA. GRACIELE CALSAVARA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#1a2e26' : '#d4af37'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-light shadow-lg py-8 md:hidden flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark font-sans font-bold text-lg hover:text-brand-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};