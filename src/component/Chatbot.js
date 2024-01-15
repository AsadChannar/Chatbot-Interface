import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
 const [isPopupOpen, setPopupOpen] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 320, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const startDrag = (e) => {
    setDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const endDrag = () => {
    setDragging(false);
  };

  const handleDrag = (e) => {
    if (dragging) {
      const deltaX = e.clientX - startPosition.x;
      const deltaY = e.clientY - startPosition.y;

      setPosition({ x: position.x + deltaX, y: position.y + deltaY });
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const sendMessage = () => {
    
  };

  return (
    <div className=" position-relative">
      <div className="chatbot-container" onClick={openPopup}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#34a8d6" className="bi bi-chat-fill" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
        </svg>
      </div>
      {isPopupOpen && (
        <div
          className="popup position-relative "
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onMouseDown={startDrag}
          onMouseUp={endDrag}
          onMouseMove={handleDrag}
        >
          <div className="chat-header">
            <span>Chatbot</span>
            <button type="button" onClick={closePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M8 9l4.646-4.646a.5.5 0 1 0-.708-.708L8 8.293 3.354 3.646a.5.5 0 1 0-.708.708L7.293 9l-4.647 4.646a.5.5 0 0 0 .708.708L8 9.707l4.646 4.647a.5.5 0 0 0 .708-.708L8.707 9z" />
              </svg>
            </button>
          </div>
          <div className="chat-body ">
            <div className="chat-message">Hello! How can I help you?</div>
          </div>
          <div className="chat-input position-absolute bottom-0">
            <input type="text" id="message" placeholder="Type your message..." />
            <button type="button" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;