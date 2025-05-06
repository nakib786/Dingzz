import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './lib/ThemeContext'
import './App.css'

// Layout Components
const Header = lazy(() => import('./components/layout/Header'))
const Footer = lazy(() => import('./components/layout/Footer'))
const TawkToChat = lazy(() => import('./components/ui/TawkToChat'))

// Pages
const Home = lazy(() => import('./pages/home/Home'))
const Services = lazy(() => import('./pages/services/Services'))
const About = lazy(() => import('./pages/about/About'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Background = lazy(() => import('./pages/about/Background'))

// Service Subpages Placeholder
const ServiceDetail = lazy(() => import('./pages/services/Services'))

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen overflow-fix">
          <Suspense fallback={<div className="container-custom py-4 md:py-8 text-center">Loading...</div>}>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/background" element={<Background />} />
              </Routes>
            </main>
            <Footer />
            <TawkToChat />
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
