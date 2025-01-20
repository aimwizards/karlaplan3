import React, { useEffect, useState } from 'react';
import { ChevronRight, Wrench, ShowerHead, HardHat, X, Phone, Mail, User, Paintbrush, Plug, Ruler, Footprints, Waves, Lightbulb, Blocks, Construction, ChevronDown, Menu } from 'lucide-react';
import Projects from './pages/Projects';
import About from './pages/About';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import { sendQuoteForm } from './utils/api';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quoteFormStatus, setQuoteFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [quoteFormError, setQuoteFormError] = useState('');
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const slides = [
    'https://images.unsplash.com/photo-1564540583246-934409427776?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteFormStatus('loading');
    try {
      await sendQuoteForm(quoteFormData);
      setQuoteFormStatus('success');
      setQuoteFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setIsPopupOpen(false);
        setQuoteFormStatus('idle');
      }, 2000);
    } catch (error: any) {
      setQuoteFormStatus('error');
      setQuoteFormError(error.message || 'Ett fel uppstod. Försök igen senare.');
    }
  };

  const handleQuoteFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuoteFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.ibb.co/31JkF54/full-trimmed-transparent-white.png" 
                alt="Solna Byggprojekt Logo" 
                className="h-8 w-auto"
              />
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gray-200 transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="nav-link">Startsida</a>
              <button onClick={() => setShowAbout(true)} className="nav-link">Om oss</button>
              <button onClick={() => setShowProjects(true)} className="nav-link">Projekt</button>
              <button onClick={() => setShowContact(true)} className="nav-link">Kontakta oss</button>
              <button onClick={() => setShowPartners(true)} className="nav-link">Partners</button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-200"
            >
              <X className="w-8 h-8" />
            </button>
            <a 
              href="#" 
              className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Startsida
            </a>
            <button 
              onClick={() => {
                setShowAbout(true);
                setIsMobileMenuOpen(false);
              }} 
              className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors"
            >
              Om oss
            </button>
            <button 
              onClick={() => {
                setShowProjects(true);
                setIsMobileMenuOpen(false);
              }} 
              className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors"
            >
              Projekt
            </button>
            <button 
              onClick={() => {
                setShowContact(true);
                setIsMobileMenuOpen(false);
              }} 
              className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors"
            >
              Kontakta oss
            </button>
            <button 
              onClick={() => {
                setShowPartners(true);
                setIsMobileMenuOpen(false);
              }} 
              className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors"
            >
              Partners
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide}')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          </div>
        ))}

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl backdrop-blur-sm bg-black/20 p-4 sm:p-8 rounded-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Experter på badrumsrenovering och stambyten
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Vi är proffs på badrum och stambyten med års av erfarenhet och hundratals nöjda kunder. 
                Kvalitet och precision i varje projekt.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowProjects(true)}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold 
                           hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Se våra projekt</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="tel:070-464-38-88"
                  className="group bg-black/30 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold 
                           hover:bg-black/40 hover:border-white/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>070-464 38 88</span>
                </a>
                
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://www.facebook.com/karlaplanentreprenad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black/30 backdrop-blur-sm text-white border-2 border-white/20 p-4 rounded-full
                             hover:bg-black/40 hover:border-white/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/karlaplanentreprenad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black/30 backdrop-blur-sm text-white border-2 border-white/20 p-4 rounded-full
                             hover:bg-black/40 hover:border-white/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Om Karlaplan Entreprenad AB
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Erfarenhet, hög kvalitet och mycket goda referenser gör att vi är väldigt omtyckta med rimliga priser samt fullt ROT-avdrag. 
                Vi utför även arbeten åt privatpersoner, såsom byggnationer av våtutrymmen, snickeriarbeten, målningsarbeten, elarbeten och VVS-arbeten.
              </p>
              <p className="text-gray-700 mb-6">
                Vi sätter alltid kunden i första hand, tillsammans med er så skräddarsyr vi professionella lösningar. 
                Vår vision är nämligen att ingenting är omöjligt.
              </p>
              <p className="text-gray-700 mb-6">
                Alla som jobbar med hos med oss har behörighet inom sina områden och lång erfarenhet inom sin bransch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {/* Other Services */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Ruler className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Snickerier</h4>
                  <p className="text-gray-600 text-sm">Gedigen hantverkskunskap med moderna lösningar</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Footprints className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Golvläggning</h4>
                  <p className="text-gray-600 text-sm">Professionell installation av alla typer av golv</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Blocks className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Våtrum & Klinker</h4>
                  <p className="text-gray-600 text-sm">Specialister på kakel och klinker för våtutrymmen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Paintbrush className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Målning</h4>
                  <p className="text-gray-600 text-sm">Professionell målning med högsta finish</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">VVS</h4>
                  <p className="text-gray-600 text-sm">Komplett VVS-service med nöjd kund garanti</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">El</h4>
                  <p className="text-gray-600 text-sm">Säkra och moderna elinstallationer</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Plug className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Puts</h4>
                  <p className="text-gray-600 text-sm">Alla typer av putssystem och renovering</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Construction className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Gjutning</h4>
                  <p className="text-gray-600 text-sm">Gedigen erfarenhet av gjutning och renovering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Certifierade & Garanterade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              För att du som kund ska känna dig trygg och nöjd med att anlita oss för dina projekt ger vi alltid följande garantier.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-id06.png" alt="ID06 Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-uc.png" alt="UC Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-per.png" alt="PER Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/gjensidige.jpg" alt="Gjensidige Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-bkr.png" alt="BKR Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src="https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-heta-arbeten.png" alt="Heta Arbeten Certifikat" className="h-12 w-auto mx-auto object-contain" />
            </div>
          </div>

          {/* Guarantees Grid */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              1 års garanti
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Ansvarsförsäkring
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Fast pris
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Skriftliga avtal
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Förmånliga Rabatter
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Kostnadsfria konsultationer
            </span>
            <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300">
              Behöriga hantverkare
            </span>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Följ vårt arbete</h2>
            <p className="text-xl text-gray-600">Se våra senaste projekt på Instagram</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Instagram Post 1 */}
            <a href="https://www.instagram.com/karlaplanentreprenad/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative aspect-square overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://fancyhouse-design.com/wp-content/uploads/2023/11/A-floating-vanity-counter-is-the-star-of-this-minimalist-bathroom-design..jpg"
                alt="Bathroom renovation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>

            {/* Instagram Post 2 */}
            <a href="https://www.instagram.com/karlaplanentreprenad/"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative aspect-square overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://images.pexels.com/photos/6207947/pexels-photo-6207947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kitchen renovation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>

            {/* Instagram Post 3 */}
            <a href="https://www.instagram.com/karlaplanentreprenad/"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative aspect-square overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
                alt="Bathroom tiles"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>

            {/* Instagram Post 4 */}
            <a href="https://www.instagram.com/karlaplanentreprenad/"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative aspect-square overflow-hidden bg-gray-100 rounded-xl">
              <img
                src="https://images.pexels.com/photos/6186825/pexels-photo-6186825.jpeg"
                alt="Modern bathroom"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/karlaplanentreprenad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors"
            >
              <span className="font-semibold">@Karlaplanentreprenad</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg
                   hover:bg-blue-700 transition-all duration-300 flex items-center space-x-3 z-50"
      >
        <HardHat className="w-5 h-5" />
        <span className="font-semibold">Gratis Offert</span>
      </button>

      {/* Contact Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Begär offert</h3>
              
              <form className="space-y-4" onSubmit={handleQuoteSubmit}>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={quoteFormData.name}
                    onChange={handleQuoteFormChange}
                    required
                    placeholder="Ditt namn"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={quoteFormData.email}
                    onChange={handleQuoteFormChange}
                    placeholder="Din e-post"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    required
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    value={quoteFormData.phone}
                    onChange={handleQuoteFormChange}
                    placeholder="Ditt telefonnummer"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    required
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                
                <textarea
                  id="message"
                  value={quoteFormData.message}
                  onChange={handleQuoteFormChange}
                  placeholder="Beskriv ditt projekt"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                ></textarea>
                
                {quoteFormStatus === 'error' && (
                  <div className="text-red-600 text-sm">
                    {quoteFormError}
                  </div>
                )}

                {quoteFormStatus === 'success' && (
                  <div className="text-green-600 text-sm">
                    Tack för din förfrågan! Vi återkommer så snart som möjligt.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={quoteFormStatus === 'loading'}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                           hover:bg-blue-700 transition-all duration-300
                           disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {quoteFormStatus === 'loading' ? 'Skickar...' : 'Skicka förfrågan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`bg-black/80 backdrop-blur-md text-white py-8 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 relative text-center">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center justify-center space-x-2">
                <span className="h-px w-4 bg-white/30"></span>
                <span>Information</span>
                <span className="h-px w-4 bg-white/30"></span>
              </h3>
              <p className="text-gray-300 text-sm">Karlaplan Entrepenad AB</p>
              <p className="text-gray-300 text-sm">556992-2205</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center justify-center space-x-2">
                <span className="h-px w-4 bg-white/30"></span>
                <span>Företagsadress</span>
                <span className="h-px w-4 bg-white/30"></span>
              </h3>
              <p className="text-gray-300 text-sm">Luntmakargatan 92</p>
              <p className="text-gray-300 text-sm">113 51 Stockholm</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center justify-center space-x-2">
                <span className="h-px w-4 bg-white/30"></span>
                <span>Kontakta oss</span>
                <span className="h-px w-4 bg-white/30"></span>
              </h3>
              <a href="tel:070-464-38-88" className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm group">
                <Phone className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">070-464 38 88</span>
              </a>
              <a href="mailto:info@karlaplanentreprenad.se" className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm group mt-1">
                <Mail className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">info@karlaplanentreprenad.se</span>
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center justify-center space-x-2">
                <span className="h-px w-4 bg-white/30"></span>
                <span>Följ oss</span>
                <span className="h-px w-4 bg-white/30"></span>
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Karlaplan Entrepenad AB</p>
          </div>
        </div>
      </footer>
      
      {/* Projects Modal */}
      {showProjects && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen">
            <button
              onClick={() => setShowProjects(false)}
              className="fixed top-6 right-6 text-white hover:text-gray-200 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <Projects />
          </div>
        </div>
      )}
      
      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen">
            <button
              onClick={() => setShowAbout(false)}
              className="fixed top-6 right-6 text-gray-900 hover:text-gray-700 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <About />
          </div>
        </div>
      )}
      
      {/* Partners Modal */}
      {showPartners && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen">
            <button
              onClick={() => setShowPartners(false)}
              className="fixed top-6 right-6 text-gray-900 hover:text-gray-700 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <Partners />
          </div>
        </div>
      )}
      
      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen">
            <button
              onClick={() => setShowContact(false)}
              className="fixed top-6 right-6 text-gray-900 hover:text-gray-700 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;