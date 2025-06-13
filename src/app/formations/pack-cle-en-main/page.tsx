'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Headphones, Calendar, MapPin, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PackCleEnMain() {
  const features = [
    "Tout le contenu des formules précédentes",
    "Accompagnement 1-to-1 avec un expert",
    "Recherche et négociation de votre premier bien",
    "Service commercial et mise en relation propriétaires",
    "Formation sur mesure selon votre marché local",
    "Support prioritaire 7j/7",
    "Garantie de résultats sous 90 jours",
    "Suivi personnalisé pendant 6 mois",
    "Accès VIP à tous les événements exclusifs"
  ]

  const services = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Accompagnement VIP",
      description: "Un expert dédié vous accompagne personnellement dans votre projet"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Recherche de Biens",
      description: "Nous trouvons et négocions votre premier bien sous-loué"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Support 7j/7",
      description: "Assistance prioritaire et réponse garantie sous 2h"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Suivi 6 Mois",
      description: "Accompagnement continu jusqu'à votre autonomie complète"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Garantie Résultats",
      description: "Votre premier bien sous-loué sous 90 jours ou remboursé"
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
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  👑 Formule Premium
                </div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Le Pack
                  <span className="block text-[#E63946]">Clé en Main</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  L'accompagnement premium avec service complet. Nous nous occupons de tout : 
                  de la formation à votre premier bien sous-loué, clé en main.
                </motion.p>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-2xl font-bold text-white/70">Sur devis personnalisé</div>
                  <div className="text-4xl font-bold text-[#E63946]">2500€ - 3000€</div>
                  <div className="text-white/70">
                    <div>Selon vos besoins et votre marché</div>
                    <div className="text-sm">Paiement en plusieurs fois possible</div>
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
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-yellow-500 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Crown className="w-6 h-6 text-yellow-500 mr-2" />
                  Service Premium Inclus :
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="/inscription"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 text-center inline-block mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Planifier un appel découverte
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Services Premium Inclus
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Un accompagnement complet pour garantir votre succès en sous-location
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-yellow-500/30 p-8 rounded-2xl hover:border-yellow-500/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-black mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Comment ça fonctionne ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Appel Découverte",
                description: "Nous analysons votre situation et définissons ensemble votre stratégie personnalisée."
              },
              {
                step: "2", 
                title: "Formation Intensive",
                description: "Formation accélérée adaptée à votre marché local avec votre expert dédié."
              },
              {
                step: "3",
                title: "Mise en Pratique",
                description: "Nous trouvons et négocions votre premier bien. Vous êtes accompagné à chaque étape."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
              Notre Garantie Résultats
            </h2>
            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-500/50 rounded-2xl p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Votre premier bien sous-loué sous 90 jours
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Si nous ne trouvons pas et ne négocions pas votre premier bien sous-loué 
                dans les 90 jours suivant le début de l'accompagnement, nous vous remboursons intégralement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="text-5xl mb-6 opacity-80">💼</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 font-poppins mb-6">
                Prêt pour l'Accompagnement Premium ?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Planifiez votre appel découverte gratuit pour discuter de votre projet personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/inscription"
                  className="bg-slate-600 hover:bg-slate-500 text-slate-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Planifier un appel gratuit
                </motion.a>
                <motion.a
                  href="/"
                  className="border-2 border-slate-500/50 text-slate-300 hover:bg-slate-600/30 hover:border-slate-400/70 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Retour à l'accueil
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 