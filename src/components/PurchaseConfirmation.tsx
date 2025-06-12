'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Play, Mail, BookOpen } from 'lucide-react'

const PurchaseConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
      </div>
      
      <div className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Message de remerciement avec icône */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Félicitations !
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Votre inscription a été confirmée avec succès. Bienvenue dans la communauté Sous-Loc Académie !
            </motion.p>
          </motion.div>

          {/* Section Vidéo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 mb-12 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <Play className="w-8 h-8 text-[#E63946] mr-3" />
              <h2 className="text-3xl font-bold text-white font-poppins">
                Vidéo de bienvenue
              </h2>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
                src="https://www.youtube.com/embed/b0d37mRiYIs"
                title="Vidéo de bienvenue - Formation Sous-Location"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-white/80 text-center mt-4 text-lg">
              Regardez cette vidéo pour découvrir les prochaines étapes de votre parcours
            </p>
          </motion.div>

          {/* Instructions importantes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 mb-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white font-poppins mb-8 text-center">
              Prochaines étapes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] rounded-full mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Étape 1</h3>
                <p className="text-white/80 leading-relaxed">
                  Regardez la vidéo de bienvenue pour comprendre votre parcours de formation
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Étape 2</h3>
                <p className="text-white/80 leading-relaxed">
                  Vérifiez votre email pour recevoir vos accès à la plateforme de formation
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Étape 3</h3>
                <p className="text-white/80 leading-relaxed">
                  Commencez votre formation et rejoignez notre communauté d'apprenants
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bouton de redirection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-center"
          >
            <motion.a
              href="/"
              className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-[#E63946]/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Retour à l'accueil
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseConfirmation 