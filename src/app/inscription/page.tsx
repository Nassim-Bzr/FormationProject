'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Inscription() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState<any>({
    businessType: '',
    previousExperience: '',
    currentSituation: '',
    dreamLife: '',
    phoneNumber: '',
    currentIncome: '',
    dreamIncome: '',
    investmentBudget: '',
    trainingHistory: '',
    missingSkills: [],
    firstName: '',
    email: ''
  })

  const [stripeUrl, setStripeUrl] = useState('')

  useEffect(() => {
    // Configuration de l'URL Stripe avec redirection
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    setStripeUrl(`https://buy.stripe.com/7sY7sKdiH2w01jfb2McjS00?success_url=${encodeURIComponent(baseUrl + '/confirmation-achat')}`)
  }, [])

  const questions = [
    {
      id: 2,
      type: 'radio',
      question: "T'as déjà essayé d'autres modèles de business en ligne ou pas encore ?",
      field: 'previousExperience',
      options: [
        { id: 'A', text: 'Oui, j\'ai déjà essayé plusieurs modèles' },
        { id: 'B', text: 'Oui, j\'ai testé un seul modèle' },
        { id: 'C', text: 'Non, jamais essayé' },
        { id: 'D', text: 'Je ne suis pas sûr de ce que ça veut dire' }
      ]
    },
    {
      id: 3,
      type: 'radio',
      question: "Dis-moi, toi, t'as envie de faire de l'argent comment ?",
      field: 'businessType',
      options: [
        { id: 'A', text: 'En créant mon propre business en ligne (Sans montrer mon visage)' },
        { id: 'B', text: 'En créant un business physique (Restaurant, etc)' },
        { id: 'C', text: 'En automatisant un système qui tourne tout seul' },
        { id: 'D', text: 'En créant du contenu' },
        { id: 'E', text: 'Je sais pas encore, je cherche une idée' },
        { id: 'F', text: 'Other' }
      ]
    },
    {
      id: 4,
      type: 'radio',
      question: "Qu'est-ce qui te pèse le plus en ce moment dans ta vie ou ta situation financière ? (question obligatoire)",
      field: 'currentSituation',
      options: [
        { id: 'A', text: 'J\'ai pas assez d\'argent pour vivre comme je veux' },
        { id: 'B', text: 'J\'ai l\'impression de stagner, je progresse pas' },
        { id: 'C', text: 'J\'ai trop de charges / de dettes' },
        { id: 'D', text: 'J\'ai pas de sécurité financière, je vis au jour le jour' },
        { id: 'E', text: 'Je gagne de l\'argent, mais je suis pas libre (pas de temps, trop de pression)' },
        { id: 'F', text: 'Je suis bloqué, je sais pas quoi faire pour avancer' },
        { id: 'G', text: 'Je dépends des autres (parents, patron, aides...) et ça me frustre' },
        { id: 'H', text: 'J\'ai peur de jamais réussir vraiment' },
        { id: 'I', text: 'Other' }
      ]
    },
    {
      id: 5,
      type: 'textarea',
      question: "Si tu devais décrire ta vie de rêve, genre en détail, ce serait quoi ?",
      field: 'dreamLife'
    },
    {
      id: 6,
      type: 'phone',
      question: "Ton numéro Whatsapp?",
      subtitle: "C'est juste pour te recontacter si jamais tu es qualifié",
      field: 'phoneNumber'
    },
    {
      id: 7,
      type: 'number',
      question: "Tu gagnes combien en ce moment par mois (en euro) ?",
      field: 'currentIncome'
    },
    {
      id: 8,
      type: 'number',
      question: "Et pour vivre cette vie dont t'as toujours rêvé, t'aurais besoin de combien chaque mois ?",
      field: 'dreamIncome'
    },
    {
      id: 9,
      type: 'radio',
      question: "T'es prêt à investir combien pour atteindre cette vie-là ?",
      field: 'investmentBudget',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '500-1000€' },
        { id: 'C', text: '1000-2000€' },
        { id: 'D', text: '2000-5000€' },
        { id: 'E', text: '5000-10000€' }
      ]
    },
    {
      id: 10,
      type: 'radio',
      question: "T'as déjà acheté des formations ou pas ?",
      field: 'trainingHistory',
      options: [
        { id: 'A', text: 'Oui plusieurs' },
        { id: 'B', text: 'Oui, une.' },
        { id: 'C', text: 'Non.' }
      ]
    },
    {
      id: 11,
      type: 'checkbox',
      question: "Et aujourd'hui, qu'est-ce qui te manque concrètement pour réussir ?",
      subtitle: "Choose as many as you like",
      field: 'missingSkills',
      options: [
        { id: 'A', text: 'Une vraie méthode claire, étape par étape' },
        { id: 'B', text: 'De la discipline / motivation' },
        { id: 'C', text: 'Plus de temps à y consacrer' },
        { id: 'D', text: 'Des compétences concrètes (business, marketing, vente...)' },
        { id: 'E', text: 'Un bon accompagnement / être bien entouré' },
        { id: 'F', text: 'Du capital pour démarrer' },
        { id: 'G', text: 'Une idée de business qui me parle' },
        { id: 'H', text: 'La confiance en moi' },
        { id: 'I', text: 'Rien, je suis prêt, j\'attends juste le bon moment' },
        { id: 'J', text: 'Other' }
      ]
    },
    {
      id: 12,
      type: 'text',
      question: "C'est quoi ton prénom?",
      field: 'firstName'
    },
    {
      id: 13,
      type: 'email',
      question: "C'est quoi ton e-mail?",
      field: 'email'
    }
  ]

  const currentQuestion = questions[currentStep]

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Formulaire terminé, afficher le calendrier
      setShowCalendar(true)
    }
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const finalData = {
        ...formData,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime
      }
      console.log('Données complètes:', finalData)
      // Redirection vers Stripe avec l'URL de succès
      window.location.href = stripeUrl
    }
  }

  // Générer les dates disponibles (prochains 30 jours, sauf weekends)
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Exclure les weekends (samedi = 6, dimanche = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          day: date.getDate(),
          month: date.toLocaleDateString('fr-FR', { month: 'short' }),
          weekday: date.toLocaleDateString('fr-FR', { weekday: 'short' })
        })
      }
    }
    return dates
  }

  const availableSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const canProceed = () => {
    const current = formData[currentQuestion.field as keyof typeof formData]
    if (currentQuestion.type === 'checkbox') {
      return Array.isArray(current) && current.length > 0
    }
    return current && current.toString().trim() !== ''
  }

  const renderQuestion = () => {
    const currentValue = formData[currentQuestion.field as keyof typeof formData]

    switch (currentQuestion.type) {
      case 'radio':
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option) => (
              <motion.label
                key={option.id}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  currentValue === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name={currentQuestion.field}
                  value={option.id}
                  checked={currentValue === option.id}
                  onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                  currentValue === option.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {currentValue === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-800 font-medium">{option.id}</span>
                <span className="text-gray-700 ml-4">{option.text}</span>
                {currentValue === option.id && (
                  <div className="ml-auto">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.label>
            ))}
          </div>
        )

      case 'checkbox':
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option) => {
              const isSelected = Array.isArray(currentValue) && currentValue.includes(option.id)
              return (
                <motion.label
                  key={option.id}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="checkbox"
                    value={option.id}
                    checked={isSelected}
                    onChange={(e) => {
                      const currentArray = Array.isArray(currentValue) ? [...currentValue] : []
                      if (e.target.checked) {
                        currentArray.push(option.id)
                      } else {
                        const index = currentArray.indexOf(option.id)
                        if (index > -1) currentArray.splice(index, 1)
                      }
                      handleInputChange(currentQuestion.field, currentArray)
                    }}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-800 font-medium">{option.id}</span>
                  <span className="text-gray-700 ml-4">{option.text}</span>
                </motion.label>
              )
            })}
          </div>
        )

      case 'textarea':
        return (
          <textarea
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none h-32"
            placeholder="Tapez votre réponse ici..."
            value={currentValue as string || ''}
            onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
          />
        )

      case 'phone':
        return (
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-100 px-3 py-3 rounded-lg">
              <span className="mr-2">🇫🇷</span>
              <span className="text-gray-600">▼</span>
            </div>
            <input
              type="tel"
              className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="06 12 43 08 66"
              value={currentValue as string || ''}
              onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
            />
          </div>
        )

      case 'number':
        return (
          <input
            type="number"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-center text-xl"
            placeholder="0"
            value={currentValue as string || ''}
            onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
          />
        )

      case 'text':
        return (
          <input
            type="text"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="Tapez votre réponse ici..."
            value={currentValue as string || ''}
            onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
          />
        )

      case 'email':
        return (
          <input
            type="email"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="votre.email@exemple.com"
            value={currentValue as string || ''}
            onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
          />
        )

      default:
        return null
    }
  }

  if (showCalendar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Tu es qualifié ! Réserve un appel avec notre équipe.
            </h1>
            <p className="text-gray-600">
              L'appel est gratuit et ne présente aucune obligation d'achat.
            </p>
            <p className="text-gray-500 text-sm">
              S'il n'y a aucune option, c'est que nous sommes complets. ---&gt;
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendrier */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">14 →</span>
                Select a Date & Time
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Juin 2025</h4>
                  <div className="text-sm text-gray-500">
                    Fuseau horaire: Central European Time (16:23)
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {generateAvailableDates().slice(0, 14).map((dateInfo) => (
                    <motion.button
                      key={dateInfo.date}
                      onClick={() => setSelectedDate(dateInfo.date)}
                      className={`p-2 text-sm rounded-lg transition-all ${
                        selectedDate === dateInfo.date
                          ? 'bg-blue-500 text-white'
                          : 'bg-white hover:bg-blue-50 text-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {dateInfo.day}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Créneaux horaires */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Créneaux disponibles
              </h3>
              
              {selectedDate ? (
                <div className="space-y-2">
                  {availableSlots.map(slot => (
                    <motion.button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                        selectedTime === slot
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Sélectionnez d'abord une date
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className={`px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                selectedDate && selectedTime
                  ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={selectedDate && selectedTime ? { scale: 1.05 } : {}}
              whileTap={selectedDate && selectedTime ? { scale: 0.95 } : {}}
            >
              Réserver l'appel
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Formulaire d'inscription
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-blue-600 font-semibold">{currentQuestion.id}</span>
            <span className="text-gray-400">→</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-gray-800 text-lg font-medium">
              {currentQuestion.question}
            </h2>
            {currentQuestion.subtitle && (
              <p className="text-gray-600 text-sm">
                {currentQuestion.subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="mb-8">
          {renderQuestion()}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {currentStep + 1} / {questions.length}
          </div>
          <motion.button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              canProceed()
                ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            whileHover={canProceed() ? { scale: 1.05 } : {}}
            whileTap={canProceed() ? { scale: 0.95 } : {}}
          >
            {currentStep === questions.length - 1 ? 'Terminer' : 'OK'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
} 