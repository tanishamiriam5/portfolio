// App.js
import React from 'react';
import Home from './component1/Home'; 
import Abt from './component1/Abt';
import Skills from './component1/Skills';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Contact from './component1/Contact';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
     
      </Routes>
      <Routes>
      <Route path="/Abt" element={<Abt />} />
     </Routes>
     <Routes>
     <Route path="/Skills" element={<Skills/>} />
     
      </Routes>
      <Routes>
     <Route path="/Contact" element={<Contact/>} />
     
      </Routes>
      </Router>
  );
}

export default App;