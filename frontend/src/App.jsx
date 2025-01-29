import { useState } from 'react'
import './App.css'
import Headers from './layouts/Headers'
import Footers from './layouts/Footers'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import BaseSetCollection from './layouts/BaseSetCollection';

function App() {

  return (
    <div className="min-h-screen flex flex-col mx-10 ">
      <Router>
      <Headers/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/cards' element={<BaseSetCollection/>}/>
        </Routes>
      </Router>
      <Footers/>
    </div>
  )
}

export default App
