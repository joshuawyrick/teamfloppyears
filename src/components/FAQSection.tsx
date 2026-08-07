import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              type="button"
            >
              {item.question}
              <Plus size={20} aria-hidden="true" />
            </button>
            <div
              className="faq-answer-wrapper"
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows var(--duration) var(--ease)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
