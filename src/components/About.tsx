'use client'

import { motion } from 'framer-motion'
import { Box } from 'lucide-react'

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Box className="w-8 h-8 text-black" />
                </div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Découvrez notre accompagnement
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-lg text-white/90 leading-relaxed"
              >
                <p>
                  Cette formule vous donne bien plus qu'un cadre ou des outils : elle vous 
                  livre votre premier bien sous-loué, prêt à exploiter. Nous gérons l'analyse du 
                  marché, la prospection, les échanges avec les propriétaires et la 
                  sécurisation du bail. Vous n'espérez plus : vous commencez.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="/inscription"
                  className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscrivez-vous
                </motion.a>
                
                <motion.a
                  href="/a-propos"
                  className="border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  En savoir plus
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="People working together around a table"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 