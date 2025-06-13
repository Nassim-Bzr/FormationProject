'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setIsFormationsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsFormationsOpen(false)
    }, 200) // Délai de 200ms avant fermeture
    setHoverTimeout(timeout)
  }

  const formationsItems = [
    { name: "L'Essentiel Juridique", price: "249€", href: "/formations/essentiel-juridique" },
    { name: "La Méthode Reproductible", price: "499€", href: "/formations/methode-reproductible" },
    { name: "Le Pack Clé en Main", price: "Sur devis", href: "/formations/pack-cle-en-main" }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white hover:text-white/80 transition-colors duration-200 font-medium"
            >
              Accueil
            </a>
            <a 
              href="/a-propos" 
              className="text-white hover:text-white/80 transition-colors duration-200 font-medium"
            >
              À propos
            </a>
            
            {/* Formations Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors duration-200 font-medium"
              >
                <span>Formations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isFormationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50"
                >
                  {formationsItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[#E63946] transition-colors duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-[#E63946] font-semibold">{item.price}</span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-script text-white italic">Logo</h1>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex">
            <motion.a
              href="/inscription"
              className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Inscription
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <a 
                href="/" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="/a-propos" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </a>
              
              {/* Mobile Formations */}
              <div className="space-y-2">
                <div className="text-white font-medium py-2">Formations</div>
                {formationsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-white/80 hover:text-white transition-colors duration-200 pl-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-[#E63946] text-sm font-semibold">{item.price}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              <motion.a
                href="/inscription"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 mt-4 inline-block text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inscription
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 