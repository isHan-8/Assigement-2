import React from 'react';

const Modal = ({ image, text, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Story" className="modal-image" />
        <div className="modal-text">{text}</div>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
