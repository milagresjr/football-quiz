// import { useEffect } from 'react';
import './App.css'
import Footer from './components/Footer';
// import Home from './components/Home';
import RoundOne from './components/RoundOne';
// import swal from 'sweetalert';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RoundTwo from './components/RoundTwo';

function App() {

  // useEffect(() => {
  //   swal("Ola! Mundo","Oops!","success");
  // },[]);

  return (
    <BrowserRouter>
      <div className="containerMain">
        <Routes>
          <Route element={<RoundOne />} path='/' />
          <Route element={<RoundTwo />} path='second-fase' />
        </Routes>
        {/* <Home /> */} 
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
