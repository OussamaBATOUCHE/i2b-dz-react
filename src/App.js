import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ServicesBody from './components/services/ServicesBody'
import QhseBody from './components/qhse/QhseBody'
import TalentsBody from './components/talents/TalentsBody'
import ContactBody from './components/contact/ContactBody'
import Error from './components/error/Error'
import { useTranslation } from "react-i18next";

const App = () =>{
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();  

  if (i18n.dir() === 'rtl') {
      document.body.style.textAlign = 'justify'
  }

  

  return(
    <>
    <Suspense fallback="loading">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/services/' element={<Body content={<ServicesBody/>}/>}/>
          <Route path='/qhse/' element={<Body content={<QhseBody/>}/>}/>
          <Route path='/talents/' element={<Body content={<TalentsBody/>}/>}/>
          <Route path='/contact/' element={<Body content={<ContactBody/>}/>}/>
          
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter>
    </Suspense>
    </>
  )
}

export default App;
