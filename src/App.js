import React from 'react';
import './App.css';
// Importar componentes de Layout
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
// import Landing from './pages/Landing/Landing';
// import P404 from './pages/404/P404';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
