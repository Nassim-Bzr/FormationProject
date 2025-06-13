'use client'

import { motion } from 'framer-motion'
import { Check, Shield, FileText, Clock, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EssentielJuridique() {
  const features = [
    "Le socle indispensable pour démarrer en toute légalité",
    "Modèles de baux professionnels à titre d'habitation",
    "Guide juridique complet et sécurisé",
    "Mises à jour régulières des réglementations",
    "Checklist de conformité légale",
    "Support juridique de base"
  ]

  const modules = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cadre Juridique",
      description: "Comprendre la législation de la sous-location"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documents Légaux",
      description: "Tous les modèles de contrats nécessaires"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Procédures",
      description: "Étapes légales à respecter absolument"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  L'Essentiel
                  <span className="block text-[#E63946]">Juridique</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Le socle indispensable pour démarrer la sous-location en toute légalité. 
                  Tous les documents et connaissances juridiques nécessaires.
                </motion.p>

                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-5xl font-bold text-[#E63946]">249€</div>
                  <div className="text-white/70">
                    <div>Paiement unique</div>
                    <div className="text-sm">Accès à vie</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Ce que vous obtenez :</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#E63946] mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="https://buy.stripe.com/3cIcN43I7c6AbXTfj2cjS01"
                  className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 text-center inline-block mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer maintenant - 249€
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Modules de Formation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Une formation structurée pour maîtriser tous les aspects juridiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-neutral-700 p-8 rounded-2xl hover:border-[#E63946]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E63946] rounded-2xl flex items-center justify-center text-white mb-6">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {module.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E63946] to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              Prêt à Démarrer Légalement ?
            </h2>
            <p className="text-xl opacity-90">
              Sécurisez votre activité de sous-location avec notre formation juridique complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://buy.stripe.com/3cIcN43I7c6AbXTfj2cjS01"
                className="bg-white text-[#E63946] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Acheter maintenant - 249€
              </motion.a>
              <motion.a
                href="/"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E63946] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retour à l'accueil
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 