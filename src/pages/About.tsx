import React from 'react';
import { Shield, Heart, Star, Target, Wrench, Clock } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://renovationbydesign.org/wp-content/uploads/2023/05/transform-your-bathroom-remodeling-design-build.jpg')"
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vi förverkligar dina drömmar
            </h1>
            <p className="text-xl text-gray-200">
              Med passion för hantverk och öga för detaljer skapar vi utrymmen som överträffar förväntningar
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Vår Historia & Vision
            </h2>
            <p className="text-gray-700 mb-6">
              Sedan starten har AB Solna Byggprojekt drivits av en passion för kvalitet och kundnöjdhet. 
              Vi började som ett litet team av dedikerade hantverkare och har vuxit till att bli en av 
              Stockholms mest respekterade byggföretag, specialiserade på badrumsrenoveringar och stambyten.
            </p>
            <p className="text-gray-700 mb-12">
              Vår filosofi är enkel men kraftfull: varje projekt, oavsett storlek, förtjänar samma nivå 
              av engagemang och precision. Vi tror på att bygga långsiktiga relationer med våra kunder 
              genom att leverera resultat som står sig över tid.
            </p>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kvalitetsgaranti</h3>
                <p className="text-gray-600">
                  Vi använder endast premiumaterial och de senaste teknikerna för att säkerställa högsta kvalitet.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personlig Service</h3>
                <p className="text-gray-600">
                  Vi lyssnar på dina önskemål och skräddarsyr varje projekt efter dina specifika behov.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertis</h3>
                <p className="text-gray-600">
                  Vårt team består av certifierade experter med års av erfarenhet inom sina respektive områden.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Vårt Arbetssätt
            </h2>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Planering & Design</h3>
                  <p className="text-gray-600">
                    Vi börjar varje projekt med en grundlig planering där vi tillsammans med dig utformar 
                    den perfekta lösningen. Våra erfarna designers hjälper dig att visualisera slutresultatet 
                    och göra välgrundade materialval.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Genomförande</h3>
                  <p className="text-gray-600">
                    Med precision och yrkesstolthet genomför vi arbetet enligt plan. Vi använder endast 
                    de bästa materialen och arbetar effektivt för att minimera störningar i din vardag.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Uppföljning</h3>
                  <p className="text-gray-600">
                    Efter avslutat projekt gör vi en grundlig genomgång för att säkerställa att allt 
                    motsvarar dina förväntningar. Vi står bakom vårt arbete med omfattande garantier 
                    och support.
                  </p>
                </div>
              </div>
            </div>

            {/* Materials Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Material & Partners
              </h2>
              <p className="text-gray-700 mb-8">
                Vi samarbetar endast med de mest respekterade leverantörerna i branschen för att säkerställa 
                att varje detalj i ditt projekt håller högsta kvalitet. Från italiensk marmor till svensktillverkade 
                badrumsinredningar - vi kompromissar aldrig med kvaliteten.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-bkr.png" alt="BKR Certifikat" className="h-12 w-auto mx-auto object-contain" />
                <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-uc.png" alt="UC Certifikat" className="h-12 w-auto mx-auto object-contain" />
                <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-id06.png" alt="ID06 Certifikat" className="h-12 w-auto mx-auto object-contain" />
                <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/gjensidige.jpg" alt="Gjensidige Certifikat" className="h-12 w-auto mx-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;