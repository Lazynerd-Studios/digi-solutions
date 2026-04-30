'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div className={`faq-item${activeFaq === i ? ' active' : ''}`} key={i}>
          <button className="faq-question" onClick={() => toggleFaq(i)}>
            <span>{faq.q}</span>
            <span className="faq-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
