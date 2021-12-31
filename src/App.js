import React from 'react';
import './App.css';
// Import Router
import Router from './router/Router';
// import Card from './pages/Products/Card/Card';
// import ProductCard from './pages/Detail/ProductCard/ProductCard';
// import Detail from './pages/Detail/Detail';
// Import Context
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  );
}

export default App;
