import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta es correcta
import Home from './views/Home';
import Ranking from './views/Ranking';
import Rules from './views/Rules';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
