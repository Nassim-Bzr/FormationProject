'use client'

import { motion } from 'framer-motion'
import { Box, Users, Target, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function APropos() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins">
              À Propos de Nous
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Découvrez comment la Sous-Loc Académie révolutionne l'investissement immobilier
              et accompagne ses étudiants vers le succès.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  Notre Mission
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4 text-lg text-white/90 leading-relaxed"
                >
                  <p>
                    La Sous-Loc Académie est née d'une vision simple : démocratiser l'investissement 
                    immobilier et rendre la sous-location accessible à tous, quel que soit votre 
                    niveau de départ.
                  </p>
                  <p>
                    Notre formule vous donne bien plus qu'un cadre ou des outils : elle vous 
                    livre votre premier bien sous-loué, prêt à exploiter. Nous gérons l'analyse du 
                    marché, la prospection, les échanges avec les propriétaires et la 
                    sécurisation du bail. Vous n'espérez plus : vous commencez.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="People working together around a table"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlays for smooth integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E63946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Nos Valeurs
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ce qui nous guide dans notre mission d'accompagnement vers le succès
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Accompagnement Personnalisé",
                description: "Chaque étudiant bénéficie d'un suivi individuel adapté à ses objectifs et son niveau."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Résultats Concrets",
                description: "Nous nous engageons sur des résultats mesurables et vous accompagnons jusqu'à votre premier succès."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence Pédagogique",
                description: "Nos méthodes sont éprouvées et constamment améliorées pour garantir votre réussite."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-neutral-700 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-[#E63946]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E63946] rounded-2xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Success story"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlays for smooth integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E63946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-white leading-relaxed">
                <p>
                  Tout a commencé par une passion : celle de rendre l'investissement immobilier 
                  accessible à tous. Nos fondateurs, forts de leur expérience dans la sous-location, 
                  ont décidé de partager leurs connaissances et leurs méthodes.
                </p>
                <p>
                  Aujourd'hui, la Sous-Loc Académie compte plus de 1000 étudiants accompagnés 
                  vers le succès, avec un taux de réussite exceptionnel de 95% sur les 6 premiers mois.
                </p>
                <p>
                  Notre approche unique combine formation théorique, pratique sur le terrain et 
                  accompagnement personnalisé pour garantir votre réussite.
                </p>
              </div>
            </motion.div>
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
              Prêt à Rejoindre l'Aventure ?
            </h2>
            <p className="text-xl opacity-90">
              Découvrez nos formations et commencez votre parcours vers l'indépendance financière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/inscription"
                className="bg-white text-[#E63946] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'inscrire maintenant
              </motion.a>
              <motion.a
                href="/#pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E63946] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos offres
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 