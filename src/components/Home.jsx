import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fade-in"
      >
        <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem' }}>
          Craft Your Professional Story
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--accent-color)', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
          Build a standout resume with our AI-powered builder. Create, customize, and download a professional, ATS-friendly resume in minutes.
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
          onClick={() => navigate('/builder')}
          className="btn btn-primary"
          style={{ fontSize: '1.1rem' }}
        >
          Create My Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;