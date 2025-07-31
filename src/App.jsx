import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [hasShownModal, setHasShownModal] = useState(false)

  useEffect(() => {
    // Show contact modal after 3 seconds on first visit to homepage
    const timer = setTimeout(() => {
      if (!hasShownModal && window.location.pathname === '/') {
        setShowContactModal(true)
        setHasShownModal(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasShownModal])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header onContactClick={() => setShowContactModal(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onContactClick={() => setShowContactModal(true)} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactModal 
          isOpen={showContactModal} 
          onClose={() => setShowContactModal(false)} 
        />
      </div>
    </Router>
  )
}

export default App

