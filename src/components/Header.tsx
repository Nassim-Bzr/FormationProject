'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const formationsItems = [
    "Informatique",
    "Commerce & Marketing", 
    "Communication"
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
              href="#accueil" 
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
                onMouseEnter={() => setIsFormationsOpen(true)}
                onMouseLeave={() => setIsFormationsOpen(false)}
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
                  onMouseEnter={() => setIsFormationsOpen(true)}
                  onMouseLeave={() => setIsFormationsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50"
                >
                  {formationsItems.map((item, index) => (
                    <a
                      key={index}
                      href="#pricing"
                      className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item}
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
                href="#accueil" 
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
                    href="#pricing"
                    className="block text-white/80 hover:text-white transition-colors duration-200 pl-4 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
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