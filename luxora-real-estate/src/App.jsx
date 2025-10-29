import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from './components/ContectUs';
import Villas from './components/Villas';
import SingleVilla from './components/SingleVilla';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVilla />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
