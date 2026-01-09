import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');

  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput('');
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a skill and press Enter"
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button onClick={addTag} className="btn-primary" style={{ padding: '10px 15px' }}>Add</button>
      </div>
      <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{
              backgroundColor: 'var(--muted-blue)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              alignItems: 'center',
              fontWeight: '500'
            }}
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                marginLeft: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </>
  );
};

TagInput.propTypes = {
 tags: PropTypes.arrayOf(PropTypes.string).isRequired,
 setTags: PropTypes.func.isRequired,
};

export default TagInput;