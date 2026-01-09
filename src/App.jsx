import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Builder from './components/Builder';

function App() {
  return (
    <Router>
      <header className="app-header">
        
          <h1>ProResume</h1>
        
        
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;