import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ServicesBody from './components/services/ServicesBody'
import QhseBody from './components/qhse/QhseBody'
import CarrieresBody from './components/carrieres/CarrieresBody'
import ContactBody from './components/contact/ContactBody'
import Error from './components/error/Error'

const App = () =>{
  return(
    <>
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/services/' element={<Body content={<ServicesBody/>}/>}/>
          <Route path='/qhse/' element={<Body content={<QhseBody/>}/>}/>
          <Route path='/carrieres/' element={<Body content={<CarrieresBody/>}/>}/>
          <Route path='/contact/' element={<Body content={<ContactBody/>}/>}/>
          
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter>
    </Suspense>
   
    </>
  )
}

export default App;
