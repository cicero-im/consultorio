import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-dark text-white pt-20 pb-10 border-t border-brand-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-6">Dra. Graciele Calsavara</h3>
            <p className="font-sans text-gray-400 text-sm leading-loose mb-6">
              Cirurgiã-Dentista | CRO-MG 60320<br/>
              Odontologia de excelência focada em resultados excepcionais e experiências transformadoras. Seu sorriso é nossa obra de arte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-accent hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-brand-accent hover:text-white transition-colors"><Facebook /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-accent">Contato</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>São João del-Rei - MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" size={18} />
                <span>(32) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={18} />
                <span>contato@dragraciele.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-accent">Horários</h4>
            <ul className="space-y-2 font-sans text-gray-300">
              <li className="flex justify-between border-b border-brand-primary pb-2">
                <span>Segunda - Sexta</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-primary pb-2 pt-2">
                <span>Sábado</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pt-2 text-brand-muted">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-brand-primary font-sans text-xs text-brand-muted tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Dra. Graciele Calsavara da Rocha. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};