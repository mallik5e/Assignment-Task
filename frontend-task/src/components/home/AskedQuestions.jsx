import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { assets } from "../../assets/assets";

const AskedQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time to suit your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription anytime with no extra fees.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoice as needed.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is monthly, and you'll receive an invoice at the start of each billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email in your profile settings.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center pt-20">
      <h2 className="text-3xl font-semibold mb-4">Frequently asked questions</h2>
      <p className="text-gray-600 mb-8">
        Everything you need to know about the product and billing.
      </p>

      <ul className="w-full max-w-3xl pt-5 space-y-6">
        {questions.map((item, index) => (
          <li key={index} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h4 className="text-lg font-medium">{item.question}</h4>
              {openQuestion === index ? (
                <CiCircleMinus className="text-2xl text-gray-500" />
              ) : (
                <CiCirclePlus className="text-2xl text-gray-500" />
              )}
            </div>
            {openQuestion === index && (
              <p className="mt-4 text-gray-600 text-left">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
 
      <div className="flex flex-col items-center justify-center bg-slate-50 mt-10 mb-5 px-4 sm:px-8 md:px-16 lg:px-80 py-6 sm:py-8 md:py-10 rounded-lg shadow-sm space-y-4">
      <img
        src={assets.Avatar_group}
        alt="Avatar Group"
        className="w-32 h-16 sm:w-40 sm:h-20 md:w-50 md:h-20 object-cover"
      />
      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Still have questions?
      </h4>
      <p className="text-gray-600 text-center text-sm sm:text-base">
        Can't find the answer you're looking for? Please chat with our friendly team.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-6 py-3 transition duration-300">
        Get in touch
      </button>
     </div>
    </div>
  );
};

export default AskedQuestions;
