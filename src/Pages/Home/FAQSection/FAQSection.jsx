import {useState} from "react";

const faqs = [
  {
    question: "How does the matchmaking system work?",
    answer:
      "Our AI-powered system matches profiles based on interests, religion, location, and personal preferences.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes, your personal data is secured and never shared publicly without your permission.",
  },
  {
    question: "How do I verify my profile?",
    answer:
      "You can verify your profile using your national ID or a selfie with a timestamp. Verification helps build trust.",
  },
  {
    question: "Can I use this platform for free?",
    answer:
      "Yes, you can browse profiles for free. Some premium features like direct messaging require a subscription.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto my-10  dark:bg-gray-900 p-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-gray-700  focus:outline-none"
              >
                <span className="text-md font-semibold text-gray-800 dark:text-gray-100">
                  {faq.question}
                </span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600 mt-1 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
