
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SelfEmploymentPlanning = () => {
  const topics = [
    {
      title: "Tax Obligations",
      description: "Taxes for the self-employed can be daunting... you have the following taxes to account for:",
      items: [
        "Self-Employment Tax (15.3%)",
        "Federal Income Tax",
        "State Income Tax",
        "Local Income Tax (where applicable)"
      ]
    },
    {
      title: "Quarterly Estimated Payments",
      description: "When you are self-employed, you must pay your income and payroll taxes on your own via quarterly estimated tax payments.",
      items: [
        "April 15th (for January-March)",
        "June 15th (for April-May)",
        "September 15th (for June-August)",
        "January 15th (for September-December)"
      ]
    },
    {
      title: "Bookkeeping Recommendations",
      description: "The majority of self-employed individuals do not need QuickBooks or another software for their bookkeeping.",
      items: [
        "Separate business and personal expenses",
        "Keep track of all business receipts",
        "Simple spreadsheet tracking can be sufficient",
        "Consider a dedicated business bank account"
      ]
    },
    {
      title: "Retirement Options",
      description: "As a self-employed person, you have some great retirement options that not only help you save for retirement, but will also help lower your tax bill for the year.",
      items: [
        "SEP IRA",
        "SIMPLE IRA",
        "Solo 401(k)",
        "Traditional or Roth IRA"
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
                Self-Employment <span className="gradient-text">Planning</span>
              </h1>
              <p className="text-xl text-gray-600">
                Guidance and planning for self-employed individuals to manage tax obligations and maximize deductions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {topics.map((topic, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
                  <p className="text-gray-600 mb-6">{topic.description}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {topic.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Help With Self-Employment Taxes?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Self-employment taxes can be complex. Contact us for assistance with tax planning and preparation for your self-employed business.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Schedule a Consultation</Link>
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

export default SelfEmploymentPlanning;
