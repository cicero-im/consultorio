import React from 'react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: '1',
    title: 'Lentes de Contato',
    description: 'Transformação estética do sorriso com lâminas ultrafinas de porcelana, desenhadas exclusivamente para sua face.',
    image: 'https://picsum.photos/400/300?1'
  },
  {
    id: '2',
    title: 'Invisalign®',
    description: 'Ortodontia invisível de alta performance. Alinhe seus dentes com conforto, rapidez e total discrição.',
    image: 'https://picsum.photos/400/300?2'
  },
  {
    id: '3',
    title: 'Harmonização Facial',
    description: 'Procedimentos integrados para equilibrar as proporções do rosto e rejuvenescer a expressão com naturalidade.',
    image: 'https://picsum.photos/400/300?3'
  },
  {
    id: '4',
    title: 'Implantes Premium',
    description: 'Reabilitação oral completa com materiais de ponta e técnicas cirúrgicas guiadas para recuperação rápida.',
    image: 'https://picsum.photos/400/300?4'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Especialidades</span>
          <h2 className="font-serif text-4xl text-brand-dark mt-2">Tratamentos Exclusivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 relative h-64">
                <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-serif text-2xl text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-brand-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};