import React from 'react';
import Nav from './components/Nav';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
   

  return (
     <>
        <HashRouter>
           <Nav />
           <Routes>
              {/* <Route path="/" component={}> </Route> */}
           </Routes>
       </HashRouter>
    </>
  );
}

export default App;
