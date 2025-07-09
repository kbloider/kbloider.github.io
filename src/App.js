import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedVideos from './components/FeaturedVideos';
import CastMembers from './components/CastMembers';
import BookStore from './components/BookStore';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedVideos />
      <CastMembers />
      <BookStore />
      <Chatbot />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;