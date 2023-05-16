import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Jobs from './pages/Jobs'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
   
  return (
    <React.Fragment>
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Servicos' element={<Jobs/>}/>
              <Route path='/SobreNos' element={<AboutUs/>}/>
              <Route path='/Contato' element={<Contact/>}/>
              <Route path='/Adm1n' element={<Admin/>}/>
          </Routes>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
