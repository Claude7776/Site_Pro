import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechBar from './components/TechBar'
import Services from './components/Services'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Process from './components/Process'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Chatbot from './components/Chatbot'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <TechBar />
        <Services />
        <About />
        <Expertise />
        <Projects />
        <Stack />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
