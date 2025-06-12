'use client'

import { motion } from 'framer-motion'

const PurchaseConfirmation = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Message de remerciement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Merci pour votre achat !
          </h1>
          <p className="text-xl text-gray-600">
            Nous sommes ravis de vous compter parmi nos apprenants.
          </p>
        </motion.div>

        {/* Section Vidéo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Vidéo explicative
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src="VOTRE_URL_VIDEO_ICI"
              title="Vidéo explicative de la formation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Instructions importantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Instructions importantes
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E63946] text-white">
                  1
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">
                  Regardez la vidéo en entier pour comprendre tous les aspects de la formation
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E63946] text-white">
                  2
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">
                  Prenez des notes sur les points clés mentionnés dans la vidéo
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#E63946] text-white">
                  3
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">
                  Vous recevrez un email avec vos accès à la plateforme de formation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bouton de redirection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <motion.a
            href="/dashboard"
            className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Accéder à mon espace formation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PurchaseConfirmation 