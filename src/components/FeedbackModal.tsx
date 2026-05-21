import React from 'react';
import { X } from 'lucide-react';
import './FeedbackModal.css';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="feedback-overlay" onClick={onClose}>
      <div className="feedback-modal glass animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="feedback-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="feedback-content">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfE5_zPPtw2zsMwqlGSbvbayJnOBHeLkNUPpzlIbLwsVpAyhw/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title="Feedback Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
