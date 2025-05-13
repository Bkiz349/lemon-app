import React from 'react';
import Nav from './components/Nav';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
// import BookingForm from './components/BookingPage';
import BookingPage from './components/BookingPage';



function App() {
   

  return (
     <>
        <HashRouter>
           <Nav />
           <Routes>
              <Route path="/" element={<Hero />}> </Route>
              <Route path="/reservations" element={<BookingPage />}> </Route>
            
           </Routes>
       </HashRouter>
    </>
  );
}

export default App;
