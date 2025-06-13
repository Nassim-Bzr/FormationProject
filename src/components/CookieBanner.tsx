'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      // Afficher le banner après un petit délai pour une meilleure UX
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50"
        >
          <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    🍪 Cookies & Confidentialité
                  </h3>
                  <button
                    onClick={declineCookies}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
                  En continuant, vous acceptez notre utilisation des cookies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.button
                    onClick={acceptCookies}
                    className="bg-gradient-to-r from-[#E63946] to-red-600 hover:from-[#E63946]/90 hover:to-red-600/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Accepter tous
                  </motion.button>
                  
                  <motion.button
                    onClick={declineCookies}
                    className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Refuser
                  </motion.button>
                </div>
                
                <p className="text-xs text-gray-500">
                  <a href="/privacy" className="underline hover:text-gray-700 transition-colors">
                    Politique de confidentialité
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner 