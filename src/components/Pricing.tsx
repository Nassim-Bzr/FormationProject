'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "L'Essentiel Juridique",
      price: "249€",
      features: [
        "Le socle indispensable pour démarrer en toute légalité.",
        "Bail profesionnel a titre d’habitation",
        "Mises à jour régulières"
      ],
      buttonText: "Commencer maintenant",
      link: "https://buy.stripe.com/3cIcN43I7c6AbXTfj2cjS01",
      popular: false
    },
    {
      name: "La Méthode Reproductible", 
      price: "499€",
      features: [
        "Notion complet : outils, fournisseurs, gestion...",
        "Scripts réels de prospection, accueil et relation client",
        "Vidéos de démarchage téléphonique en conditions réelles",
        "Mises à jour exclusives"
      ],
      buttonText: "Commencer maintenant",
      link: "https://buy.stripe.com/7sY4gy92r5Ic1jfb2McjS02",
      popular: true
    },
    {
      name: "Le Pack Clé en Main",
      subtitle: "Sur candidature uniquement",
      price: null,
      features: [
        "Accès complet aux ressources",
        "Consultation personnalisée",
        
        "Service commercial",
        "Accès à des événements",
        "Formation sur mesure",
        "Support 24/7"
      ],
      buttonText: "Planifier un appel",
      link: "inscription",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-white/70 text-lg font-medium">Tarifs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins leading-tight">
            Lancez vous dès maintenant
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choisissez le plan qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-neutral-900 border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 flex flex-col min-h-[500px] ${
                plan.popular ? 'border-[#E63946] bg-gradient-to-b from-neutral-900 to-neutral-800' : 'border-neutral-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#E63946] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}

              <div className="space-y-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-white font-poppins mb-2">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-white/70 text-sm mb-4">{plan.subtitle}</p>
                  )}
                  {plan.price && (
                    <div className="text-4xl font-bold text-white font-poppins">
                      {plan.price}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#E63946] mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={plan.link}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 text-center inline-block mt-auto ${
                    plan.popular 
                      ? 'bg-[#E63946] hover:bg-[#E63946]/90 text-white' 
                      : 'bg-[#E63946] hover:bg-[#E63946]/90 text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 