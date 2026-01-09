import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FormSection = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <h3 style={{ marginTop: '0', marginBottom: '20px', color: 'var(--text-color)', fontSize: '1.4rem', borderBottom: '2px solid var(--muted-blue)', paddingBottom: '10px' }}>{title}</h3>
      {children}
    </motion.div>
  );
};

FormSection.propTypes = {
 title: PropTypes.string.isRequired,
 children: PropTypes.node.isRequired,
};

export default FormSection;