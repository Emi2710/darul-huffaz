import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
}

const FAQComponent: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className='playfair p-5 opacity-80 text-lg'>
      <h3 className='text-2xl underline my-12'>Часто задаваемые вопросы </h3>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item border-bottom">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''} py-3 hover:cursor-pointer`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && <div className="faq-answer opacity-80 pl-3 py-2">{faq.answer}</div>}
        </div>
      ))}

      
    </div>
  );
};

export default FAQComponent;
