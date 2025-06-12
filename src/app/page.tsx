import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Webinar from '@/components/Webinar'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Webinar />
      <Pricing />
      <Footer />
    </main>
  )
}
