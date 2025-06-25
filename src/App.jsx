import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Materials from './pages/Materials';
import Labor from './pages/Labor';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AppProvider>
      <Router>
      <ScrollToTop/>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceType" element={<Services />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/labor" element={<Labor />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
       <WhatsAppFloatingButton  phoneNumber="+919906772162"/>
    </AppProvider>
  );
}

export default App;