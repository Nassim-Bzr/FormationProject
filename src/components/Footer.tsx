'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Pour toute question, n'hésitez pas à nous contacter.",
      contact: "contact@livence.fr"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Nous sommes disponibles pour répondre à vos appels.",
      contact: "+33 6 12 43 08 66"
    },
    {
      icon: MapPin,
      title: "Bureau",
      description: "Venez nous rendre visite à notre bureau.",
      contact: "4 rue du qand-wad, 57000 Metz"
    }
  ]



  const legalLinks = [
    "Politique de Confidentialité",
    "Conditions d'Utilisation",
    "Paramètres des cookies"
  ]

  return (
    <footer className="bg-black text-white">
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    {info.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {info.description}
                  </p>
                  <div className="text-white font-medium">
                    {info.contact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >

          </motion.div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm"
              >
                © 2024 Relume. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-6"
              >
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 underline underline-offset-4"
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 