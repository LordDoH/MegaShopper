import React from 'react';
import './App.css';
// Importar componentes de Layout
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
// import Landing from './pages/Landing/Landing';
import P404 from './pages/404/P404';

function App() {
  return (
    <div className="App">
      <Header />
      <P404 />
      <Footer />
    </div>
  );
}

export default App;
