import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import TeamContainer from './components/TeamContainer.jsx';
import ProductContainer from './components/ProductContainer.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/team' element={<TeamContainer />} />
          <Route path='product' element={<ProductContainer />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
