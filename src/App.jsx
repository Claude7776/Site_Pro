import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechBar from './components/TechBar'
import Services from './components/Services'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Stack from './components/Stack'
import Blog from './components/Blog'
import Process from './components/Process'
import FAQ from './components/FAQ'
import ProjectTracker from './components/ProjectTracker'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Chatbot from './components/Chatbot'
import MatrixBackground from './components/MatrixBackground'

export default function App() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('loaded'))

  function handleLoaderDone() {
    sessionStorage.setItem('loaded', '1')
    setLoading(false)
  }

  useEffect(() => {
    if (loading) return
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
  }, [loading])

  if (loading) return <Loader onDone={handleLoaderDone} />

  return (
    <>
      <MatrixBackground />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <TechBar />
        <Services />
        <About />
        <Expertise />
        <Projects />
        <Testimonials />
        <Stack />
        <Blog />
        <Process />
        <FAQ />
        <ProjectTracker />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
