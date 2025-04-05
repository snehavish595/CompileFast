"use client"
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h2 className="text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          { question: "What languages are supported?", answer: "We support JavaScript, Python, Java, C++, and more." },
          { question: "Is there a free trial?", answer: "Yes, we offer a free tier with limited features." },
          { question: "How do I contact support?", answer: "You can contact us via the support section or email." }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              <button 
                className="text-2xl font-bold text-indigo-600 focus:outline-none">
                {openIndex === index ? "–" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-3">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
