import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Builder from './components/Builder';

function App() {
  return (
    <Router>
      <header className="app-header" style={styles.header}>
        <Link to="/" style={styles.logo}>
          <h1>ProResume</h1>
        </Link>
        
      </header>
      <main className="container" style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    flexWrap: 'wrap',
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
  container: {
    padding: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  },
};

export default App;