
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "I haven't filed taxes in a few years. How should I proceed?",
      answer: "It's best to get current, one year at a time. The tax agencies, IRS and State Franchise Tax Board want to see that you're not evading taxes and are in the process of becoming compliant. We can help you file your past due returns and set up a plan to address any tax liabilities."
    },
    {
      question: "What services do you offer for small businesses?",
      answer: "I offer a comprehensive range of services for small businesses including bookkeeping, tax preparation, financial statement preparation, QuickBooks setup and training, and business consulting. I can also help with entity selection and formation, including setting up S corporations for tax savings."
    },
    {
      question: "How much do your bookkeeping services cost?",
      answer: "Bookkeeping is $60 per hour. I can set up your bookkeeping to automatically download all of your bank transactions. I record them, including your tax-deductions, to make the process efficient and accurate."
    },
    {
      question: "Do you work with clients outside of Los Angeles?",
      answer: "Yes, I am available to clients in all locations for bookkeeping, tax returns, and financial reports. Thanks to modern technology, I can provide comprehensive accounting services remotely."
    },
    {
      question: "How do I share my financial documents with you securely?",
      answer: "I provide a secure client portal that allows you to upload documents safely. The portal uses 256-bit encryption and SSL technology to ensure your sensitive financial information remains protected."
    },
    {
      question: "What types of tax returns can you prepare?",
      answer: "I can prepare tax returns for individuals, sole proprietors, S corporations, partnerships, and LLCs. I also handle tax returns for all types of income earned from all countries with proper foreign tax credit calculations."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about Gary's accounting and tax services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              {faqs.map((faq, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    If you don't see your question here, feel free to reach out directly to Gary for personalized assistance.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Gary</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
