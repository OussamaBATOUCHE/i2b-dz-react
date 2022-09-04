import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ServicesBody from './components/services/ServicesBody'
import Error from './components/error/Error'

const App = () =>{
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/services' element={<Body content={<ServicesBody/>}/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
