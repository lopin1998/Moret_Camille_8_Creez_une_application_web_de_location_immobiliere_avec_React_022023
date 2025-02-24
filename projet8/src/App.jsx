import React from 'react';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Propos from '../pages/Propos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from '../_utils/Error';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route index element={<Home/>}/>
          
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/propos" element={<Propos/>}/>

          <Route path='*' element={<Error/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;