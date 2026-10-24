import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Sorriso elegante" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-pattern mix-blend-multiply opacity-90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="md:w-2/3 lg:w-1/2">
          <span className="block text-brand-accent font-bold tracking-[0.2em] mb-4 uppercase text-sm">
            Odontologia de Excelência
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-light leading-tight mb-6">
            A Arte de um <br/>
            <span className="italic text-brand-accent">Sorriso Único</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
            Combinamos tecnologia avançada e estética refinada para transformar não apenas o seu sorriso, mas a sua autoconfiança.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="gold" onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
              Agendar Avaliação
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
              Conheça a Dra. Graciele
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};