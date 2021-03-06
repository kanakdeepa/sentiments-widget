import React from 'react';
import './TellUsMore.scss';

const TellUsMore = ({ onClose, onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <div className="tellus-more-container">
      <div className="header">
        Tell us more
        <div className="close-btn" onClick={onClose}>
          <i className="im im-x-mark"></i>
        </div>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <label>
            What did you like the most?
            <textarea placeholder="Tell us your experience (optional)" />
          </label>
          <label>
            What did you like the most?
            <textarea placeholder="Let us know how we can improve (optional)" />
          </label>
          <label>
            What did you like the most?
            <input type="email" placeholder="Your email address (optional)" />
          </label>
          <div className="btn-section">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TellUsMore;
