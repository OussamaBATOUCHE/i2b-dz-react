import React, { Suspense, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ServicesBody from './components/services/ServicesBody'
import QhseBody from './components/qhse/QhseBody'
import TalentsBody from './components/talents/TalentsBody'
import ContactBody from './components/contact/ContactBody'
import Error from './components/error/Error'
import { useTranslation } from "react-i18next";
import AdminHome from './components/admin/AdminHome';
import Login from './components/admin/Login';


const App = () =>{
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();  

  if (i18n.dir() === 'rtl') {
    document.body.style.textAlign = 'right'
  }else{
    document.body.style.textAlign = 'left';
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // Set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };


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

          {/* Admin */}
          <Route
            path="/moderator/"
            element={isLoggedIn ? 
                                  <Body content={<AdminHome />}/> : 
                                  <Body content={<Login onLogin={handleLogin}/>}/>}
          />
          
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter>
    </Suspense>
    </>
  )
}

export default App;
