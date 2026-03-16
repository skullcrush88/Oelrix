import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [navOpacity, setNavOpacity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Only fade nav on desktop (md and up)
      if (window.innerWidth >= 768) {
        const opacity = Math.max(0, 1 - window.scrollY / 300);
        setNavOpacity(opacity);
      } else {
        setNavOpacity(1);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 py-5 md:px-12 md:py-8 flex justify-between items-center transition-opacity duration-300 bg-white/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
        style={{ opacity: navOpacity, pointerEvents: navOpacity === 0 ? 'none' : 'auto' }}
      >
        <div className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-light">ARCUS</div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] tracking-[0.4em] font-light">
          <button
            className="hover:opacity-50 transition-opacity duration-300"
            onClick={() => scrollToSection('projects-section')}
          >
            PROJECTS
          </button>
          <button
            className="hover:opacity-50 transition-opacity duration-300"
            onClick={() => scrollToSection('philosophy-section')}
          >
            PHILOSOPHY
          </button>
          <button
            className="hover:opacity-50 transition-opacity duration-300"
            onClick={() => scrollToSection('contact-section')}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 flex flex-col gap-1.5 justify-center items-center w-10 h-10"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-[#1A1A1A] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-px bg-[#1A1A1A] transition-transform ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-[#1A1A1A] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20 pb-8 px-4 bg-white md:hidden">
          <div className="flex flex-col gap-8 text-center text-sm tracking-[0.4em] font-light">
            <button className="py-3 hover:opacity-50" onClick={() => scrollToSection('projects-section')}>PROJECTS</button>
            <button className="py-3 hover:opacity-50" onClick={() => scrollToSection('philosophy-section')}>PHILOSOPHY</button>
            <button className="py-3 hover:opacity-50" onClick={() => scrollToSection('contact-section')}>CONTACT</button>
          </div>
        </div>
      )}

      <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden pt-16">
        <div className="text-center z-10 px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 md:mb-6" style={{ color: '#1A1A1A' }}>Space. Refined.</h1>
          <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] font-light px-2" style={{ color: '#1A1A1A' }}>
            ARCHITECTURE & INTERIOR DESIGN STUDIO
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[45vh] w-full overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=95"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section
        id="philosophy-section"
        className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-12"
        style={{ backgroundColor: '#F5F2EE' }}
      >
        <div className="h-px mb-12 md:mb-32 mx-auto" style={{ backgroundColor: '#1A1A1A', opacity: 0.15, maxWidth: '1400px' }}></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <div className="flex items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight italic" style={{ color: '#1A1A1A' }}>
              We design spaces that speak before anyone enters the room.
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-sm sm:text-base leading-loose font-light" style={{ color: '#1A1A1A', opacity: 0.75 }}>
              Our approach transcends conventional design. Every project begins with understanding the essence of space itself—its light, its breath, its silent dialogue with those who inhabit it. We craft environments where architecture and interior design merge into singular, timeless expressions of refined living.
            </p>
          </div>
        </div>
      </section>

      <section id="projects-section" className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-10 md:mb-20" style={{ color: '#1A1A1A', opacity: 0.5 }}>
            SELECTED PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[280px]">
            <div className="md:col-span-7 md:row-span-2 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=95"
                alt="Villa Serena"
                className="w-full h-56 sm:h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-4">
                <p className="text-xs tracking-[0.3em] font-light" style={{ color: '#1A1A1A' }}>VILLA SERENA</p>
                <p className="text-xs font-light mt-1" style={{ color: '#1A1A1A', opacity: 0.5 }}>Mallorca, Spain</p>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-1 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=95"
                alt="Concrete House"
                className="w-full h-56 sm:h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-4">
                <p className="text-xs tracking-[0.3em] font-light" style={{ color: '#1A1A1A' }}>CONCRETE HOUSE</p>
                <p className="text-xs font-light mt-1" style={{ color: '#1A1A1A', opacity: 0.5 }}>Copenhagen, Denmark</p>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-1 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=95"
                alt="Loft 47"
                className="w-full h-56 sm:h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-4">
                <p className="text-xs tracking-[0.3em] font-light" style={{ color: '#1A1A1A' }}>LOFT 47</p>
                <p className="text-xs font-light mt-1" style={{ color: '#1A1A1A', opacity: 0.5 }}>New York, USA</p>
              </div>
            </div>

            <div className="md:col-span-7 md:row-span-1 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=95"
                alt="The Pavilion"
                className="w-full h-56 sm:h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-4">
                <p className="text-xs tracking-[0.3em] font-light" style={{ color: '#1A1A1A' }}>THE PAVILION</p>
                <p className="text-xs font-light mt-1" style={{ color: '#1A1A1A', opacity: 0.5 }}>Kyoto, Japan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-12" style={{ backgroundColor: '#F5F2EE' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/15">
            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center first:pt-0 md:first:pt-0">
              <h3 className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-4 md:mb-6" style={{ color: '#1A1A1A' }}>
                ARCHITECTURE
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: '#1A1A1A' }}>
                Structural integrity meets<br />aesthetic innovation
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center">
              <h3 className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-4 md:mb-6" style={{ color: '#1A1A1A' }}>
                INTERIOR DESIGN
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: '#1A1A1A' }}>
                Curated environments of<br />refined materiality
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center last:pb-0 md:last:pb-0">
              <h3 className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-4 md:mb-6" style={{ color: '#1A1A1A' }}>
                SPATIAL CONSULTING
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: '#1A1A1A' }}>
                Strategic guidance for<br />extraordinary spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-16 sm:py-24 md:py-40 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12" style={{ color: '#1A1A1A' }}>Let's Create</h2>

          <p className="text-sm sm:text-base font-light mb-10 md:mb-16 leading-relaxed px-2" style={{ color: '#1A1A1A', opacity: 0.7 }}>
            We welcome inquiries for residential, commercial, and institutional projects.<br className="hidden sm:block" />
            <span className="sm:block">For new project discussions, please reach us at</span>
          </p>

          <a
            href="mailto:studio@arcus.design"
            className="text-xl sm:text-2xl font-light hover:opacity-50 transition-opacity duration-300 inline-block border-b pb-1 break-all"
            style={{ color: '#C9B99A', borderColor: '#C9B99A' }}
          >
            studio@arcus.design
          </a>

          <div className="mt-16 md:mt-24 pt-10 md:pt-16 border-t" style={{ borderColor: '#1A1A1A', opacity: 0.1 }}>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-xs tracking-[0.2em] md:tracking-[0.3em] font-light" style={{ color: '#1A1A1A', opacity: 0.5 }}>
              <p>LONDON</p>
              <p>NEW YORK</p>
              <p>TOKYO</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white" style={{ backgroundColor: '#F5F2EE' }}>
        <div className="border-t" style={{ borderColor: '#1A1A1A', opacity: 0.1 }}></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">
            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-6 md:mb-8" style={{ color: '#1A1A1A' }}>STUDIO</p>
              <div className="space-y-4 text-xs font-light" style={{ color: '#1A1A1A', opacity: 0.6 }}>
                <p>Crafting exceptional spaces<br />through architecture and<br />interior design</p>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-6 md:mb-8" style={{ color: '#1A1A1A' }}>LOCATIONS</p>
              <div className="space-y-3 text-xs font-light" style={{ color: '#1A1A1A', opacity: 0.6 }}>
                <p>London<br />121 Regent Street</p>
                <p>New York<br />432 Park Avenue</p>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-6 md:mb-8" style={{ color: '#1A1A1A' }}>CONNECT</p>
              <div className="space-y-3 text-xs font-light">
                <button className="block hover:opacity-50 transition-opacity duration-300 text-left break-all" style={{ color: '#1A1A1A', opacity: 0.6 }}>studio@arcus.design</button>
                <button className="block hover:opacity-50 transition-opacity duration-300 text-left" style={{ color: '#1A1A1A', opacity: 0.6 }}>+44 (0) 20 XXXX XXXX</button>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light mb-6 md:mb-8" style={{ color: '#1A1A1A' }}>FOLLOW</p>
              <div className="space-y-3 text-xs font-light">
                <button className="block hover:opacity-50 transition-opacity duration-300 text-left" style={{ color: '#1A1A1A', opacity: 0.6 }}>Instagram</button>
                <button className="block hover:opacity-50 transition-opacity duration-300 text-left" style={{ color: '#1A1A1A', opacity: 0.6 }}>LinkedIn</button>
              </div>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: '#1A1A1A', opacity: 0.1 }}></div>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs font-light order-2 sm:order-1" style={{ color: '#1A1A1A', opacity: 0.4 }}>
              © 2024 ARCUS Studio. All rights reserved.
            </p>
            <div className="flex gap-8 sm:gap-12 text-xs tracking-[0.2em] md:tracking-[0.3em] font-light order-1 sm:order-2" style={{ color: '#1A1A1A', opacity: 0.4 }}>
              <button className="hover:opacity-70 transition-opacity duration-300">PRIVACY</button>
              <button className="hover:opacity-70 transition-opacity duration-300">TERMS</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
