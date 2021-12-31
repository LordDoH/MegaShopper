import React from 'react';
// Import React Router
import { Routes, Route } from 'react-router-dom';
// Import pages
import Landing from '../pages/Landing/Landing';
import P404 from '../pages/404/P404';
import About from '../pages/About/About';
// import Product from '../pages/Product/Product';
// import Detail from '../pages/Detail/Detail';

function Router() {
  return (
    // Making Router
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/products" element={<Products />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<P404 />} />
    </Routes>
  );
}

export default Router;
