import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TeamContainer from './components/TeamContainer.jsx';
import ProductContainer from './components/ProductContainer.jsx';

const App = () => {


  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path = "/team" element = {<TeamContainer />}/>
          <Route path = "/" element = {<ProductContainer/>}/>
          <Route path = "product" element = {<ProductContainer/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
  
};


export default App;