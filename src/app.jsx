import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import TeamContainer from './components/TeamContainer.jsx';
import ProductContainer from './components/ProductContainer.jsx';
import Footer from './components/Footer.jsx';
import Terms from './components/Terms.jsx';
import Privacy from './components/Privacy.jsx';

const App = () => {
  return (
    <div>
      <HashRouter className='body-container'>
        <Header />
        <div className='wrapper-container'>
          <div className='body'>
            <Routes>
              <Route path='/' element={<ProductContainer />} />
              <Route path='/team' element={<TeamContainer />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/privacy' element={<Privacy />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
