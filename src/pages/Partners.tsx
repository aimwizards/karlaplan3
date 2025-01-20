import React from 'react';
import { Building2, Shield, Award } from 'lucide-react';

function Partners() {
  const partners = [
    {
      name: 'Söderorts VVS & Bygg',
      description: 'Experter inom VVS och byggnation med fokus på kvalitet och kundnöjdhet.',
      logo: 'https://i.ibb.co/BBzrqR2/thumbnail-logga1.jpg',
      website: 'https://vvsochbygg.nu/'
    },
    {
      name: 'Pro Kakel',
      description: 'Pro kakel är specialister på kakel, klinker och design.',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/pro-kakel.jpg',
      website: 'https://prokakel.se/'
    },
    {
      name: 'Sara Bygger AB',
      description: 'Professionell byggpartner med fokus på kvalitet och kundservice.',
      logo: 'https://i.ibb.co/kMf4kP9/thumbnail-base-logo-white-background.png',
      website: 'https://sarabygger.se/'
    },
    {
      name: 'HRB Service',
      description: 'Specialister inom service och underhåll av fastigheter.',
      logo: 'https://i.ibb.co/k0fQYqg/ey-Jid-WNr-ZXQi-Oi-Jzd-GF0a-WMucm-Vjby5z-ZSIs-Imtle-SI6-Imxv-Z29z-Lz-E1-Mj-Y5-Nz-Q1-NDQw-Njlfb281-ZX.webp',
      website: 'https://hrbgruppen.se/'
    },
    {
      name: 'Recondo',
      description: 'Experter på renovering och byggnadstjänster.',
      logo: 'https://i.ibb.co/sQz1Snr/partners.png',
      website: 'https://www.recondoperfekt.com/'
    }
  ];

  const certificates = [
    {
      name: 'ID06',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-id06.png'
    },
    {
      name: 'UC',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-uc.png'
    },
    {
      name: 'PER',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-per.png'
    },
    {
      name: 'Gjensidige',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/gjensidige.jpg'
    },
    {
      name: 'BKR',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-bkr.png'
    },
    {
      name: 'Heta Arbeten',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-heta-arbeten.png'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1688985596577-57cb8e4144cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="w-16 h-16 text-white opacity-90" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Våra partners
            </h1>
            <p className="text-xl text-gray-200">
              Vi är stolta över våra samarbetspartners
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
            {partners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video relative mb-6 flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Certifieringar & Kvalitetssäkring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi är stolta över våra certifieringar som garanterar högsta kvalitet och säkerhet i alla våra projekt
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-50 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 relative">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} Certifikat`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Vårt kvalitetslöfte
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Genom våra starka partnerskap och certifieringar kan vi garantera högsta kvalitet 
              i varje projekt. Vi väljer våra samarbetspartners med omsorg för att säkerställa 
              att vi alltid levererar enligt, eller överträffar, dina förväntningar.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Certifierad Kompetens</h3>
                <p className="text-gray-300">
                  Alla våra hantverkare är certifierade och har gedigen erfarenhet
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Kvalitetssäkring</h3>
                <p className="text-gray-300">
                  Omfattande garantier och försäkringar för din trygghet
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Premium Material</h3>
                <p className="text-gray-300">
                  Samarbete med marknadens ledande materialleverantörer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;