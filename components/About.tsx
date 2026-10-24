import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-accent z-0"></div>
            <img
              src="/dra-graciele-profile.jpg"
              alt="Dra. Graciele Calsavara da Rocha"
              className="relative z-10 w-full h-auto object-cover shadow-2xl"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl text-brand-dark mb-6">
              Dra. Graciele Calsavara da Rocha
            </h2>
            <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-2">CRO-MG 60320</p>
            <div className="w-20 h-1 bg-brand-accent mb-8"></div>

            <p className="font-sans text-brand-text text-lg leading-relaxed mb-6">
              Cirurgiã-dentista dedicada à odontologia de excelência em São João del-Rei. Acredito que cada sorriso conta uma história única e minha abordagem une a precisão científica à sensibilidade artística.
            </p>
            <p className="font-sans text-brand-text text-lg leading-relaxed mb-8">
              Meu compromisso é oferecer tratamentos de alta qualidade que realçam a beleza natural, sempre priorizando a saúde e o conforto em um ambiente acolhedor e exclusivo.
            </p>

            <ul className="space-y-4 font-serif text-brand-primary italic text-xl">
              <li>"Confiança se constrói com excelência."</li>
              <li>"Seu sorriso, nossa arte."</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};