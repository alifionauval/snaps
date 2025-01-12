import React, { useState } from 'react';
import '../styles/Chatbot.css';
import smileLogo from '../assets/Smilelogo.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Sample FAQ data - you can expand this
  const faqData = {
    "What services do you offer?": "We offer comprehensive event organizing services in Indonesia, including creative production and brand strategy.",
    "How can I contact you?": "You can reach us through our contact form or email at contact@example.com",
    "Where are you located?": "We are based in Indonesia and serve clients nationwide.",
    "How do I book an event?": "You can start by reaching out to us with your event details and requirements.",
    // Add more FAQ items as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const answer = faqData[question] || "I'm sorry, I don't have an answer to that question. Please contact our team directly for more information.";
    
    setChatHistory([...chatHistory, {
      question: question,
      answer: answer
    }]);
    
    setQuestion('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h3>FAQ Chatbot</h3>
            <button className="close-btn" onClick={toggleChat}>&times;</button>
          </div>
          
          <div className="chat-messages">
            {chatHistory.map((chat, index) => (
              <div key={index} className="message-group">
                <div className="user-message">
                  <p>{chat.question}</p>
                </div>
                <div className="bot-message">
                  <p>{chat.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="chat-input"
            />
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      )}
      
      <img 
        src={smileLogo} 
        alt="Smile Logo" 
        className="chatbot-logo" 
        onClick={toggleChat}
      />
    </div>
  );
};

export default Chatbot;