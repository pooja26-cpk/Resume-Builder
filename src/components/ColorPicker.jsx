import React from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';

const ColorPicker = ({ accentColor, setAccentColor }) => {
  return (
    <div className="color-picker">
      <h4>Accent Color</h4>
      <input
        type="color"
        value={accentColor}
        onChange={(e) => setAccentColor(e.target.value)}
      />
    </div>
  );
};

ColorPicker.propTypes = {
 accentColor: PropTypes.string.isRequired,
 setAccentColor: PropTypes.func.isRequired,
};

export default ColorPicker;