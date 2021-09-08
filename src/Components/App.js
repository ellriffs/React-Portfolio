import React from 'react'
import '../Styles/App.css';
import Home from './Home';
import Navbar from './Nav'
import About from './About'
import Footer from './footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
      

    </div>
  );
}

export default App;
