import React from 'react';
import Nav from './components/Nav';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';



function App() {
   

  return (
     <>
        <HashRouter>
           <Nav />
           <Routes>
              <Route path="/" element={<Hero />}> </Route>
            
           </Routes>
       </HashRouter>
    </>
  );
}

export default App;
