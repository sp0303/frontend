import React, { useState } from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import './Disclaimer.css';

const Disclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal glass animate-fade-in">
        <div className="disclaimer-header">
          <ShieldAlert size={28} className="warning-icon" />
          <h2>Research & Development Disclaimer</h2>
        </div>
        
        <div className="disclaimer-content">
          <p>
            Welcome to Nifty 500 Elite. Please be aware that this platform is strictly a <strong>personal Research & Development (R&D) project</strong> and is not a commercial product.
          </p>
          <div className="disclaimer-alert">
            <AlertCircle size={20} style={{ flexShrink: 0 }} />
            <p>
              <strong>Important Notice:</strong> The signals, analytics, and data presented here are for experimental purposes only. Results may include false positives or inaccuracies. 
            </p>
          </div>
          <p className="legal-text">
            <strong>Legal Disclaimer:</strong> Information provided does not constitute financial, investment, or trading advice. We bear no responsibility for any financial losses or damages incurred. Always conduct your own thorough research and exercise extreme caution before making any financial decisions.
          </p>
        </div>

        <div className="disclaimer-footer">
          <button 
            className="accept-btn"
            onClick={() => setIsOpen(false)}
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
