import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fade-in"
      >
        <h1 className="home-title">
          Craft Your Professional Story
        </h1>
        <p className="home-subtitle">
          Build a standout resume with our AI-powered builder. Create, customize, and download a professional, ATS-friendly resume in minutes.
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
          onClick={() => navigate('/builder')}
          className="btn btn-primary home-button"
        >
          Create My Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;