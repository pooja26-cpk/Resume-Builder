import React from 'react';
import PropTypes from 'prop-types';
import './TemplateSwitcher.css';

const TemplateSwitcher = ({ setTemplate }) => {
  return (
    <div className="template-switcher">
      <h4>Template</h4>
      <div className="templates">
        <div className="template" onClick={() => setTemplate('classic')}>
          Classic
        </div>
        <div className="template" onClick={() => setTemplate('modern')}>
          Modern
        </div>
      </div>
    </div>
  );
};

TemplateSwitcher.propTypes = {
 setTemplate: PropTypes.func.isRequired,
};

export default TemplateSwitcher;