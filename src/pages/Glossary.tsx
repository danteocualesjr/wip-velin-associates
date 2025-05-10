
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Glossary = () => {
  // Sample glossary terms
  const glossaryTerms = [
    {
      letter: "A",
      terms: [
        { 
          term: "Accounting", 
          definition: "The process of recording, summarizing, analyzing, and reporting financial transactions of a business."
        },
        { 
          term: "Accounts Payable", 
          definition: "Money owed by a business to its suppliers or vendors for goods or services purchased on credit."
        },
        { 
          term: "Accounts Receivable", 
          definition: "Money owed to a business by its customers for goods or services delivered on credit."
        },
        { 
          term: "Audit", 
          definition: "An official examination and verification of accounts and records, especially of financial accounts."
        }
      ]
    },
    {
      letter: "B",
      terms: [
        { 
          term: "Balance Sheet", 
          definition: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time."
        },
        { 
          term: "Bookkeeping", 
          definition: "The recording of financial transactions and is part of the process of accounting."
        },
        { 
          term: "Budget", 
          definition: "An estimation of revenue and expenses over a specified future period of time."
        }
      ]
    },
    {
      letter: "C",
      terms: [
        { 
          term: "Capital", 
          definition: "Wealth in the form of money or assets, taken as a sign of the financial strength of an individual or organization."
        },
        { 
          term: "Cash Flow", 
          definition: "The total amount of money being transferred into and out of a business, especially as affecting liquidity."
        },
        { 
          term: "CPA (Certified Public Accountant)", 
          definition: "A designation given to those who meet education, experience and ethical requirements, and have passed the Uniform CPA Examination."
        }
      ]
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
                Financial <span className="gradient-text">Glossary</span>
              </h1>
              <p className="text-xl text-gray-600">
                A comprehensive glossary of accounting and financial terms to help you understand industry-specific language.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                  <a 
                    key={letter} 
                    href={`#letter-${letter}`} 
                    className="w-10 h-10 rounded-full bg-accounting-100 text-accounting-700 flex items-center justify-center hover:bg-accounting-700 hover:text-white transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {glossaryTerms.map((letterSection) => (
              <div key={letterSection.letter} id={`letter-${letterSection.letter}`} className="mb-16">
                <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-2">
                  {letterSection.letter}
                </h2>
                
                <dl className="space-y-6">
                  {letterSection.terms.map((term) => (
                    <div key={term.term} className="glass border-transparent rounded-xl p-6">
                      <dt className="font-bold text-xl mb-2">{term.term}</dt>
                      <dd className="text-gray-600">{term.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <div className="text-center mt-12">
              <p className="text-gray-600">
                Don't see a term you're looking for? <a href="#" className="text-accounting-700 hover:underline">Contact us</a> and we'll be happy to help.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Glossary;
