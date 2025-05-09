
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RecordRetention = () => {
  const records = [
    {
      category: "Tax Records",
      items: [
        { name: "Tax Returns", retention: "Keep indefinitely" },
        { name: "Supporting Documents", retention: "7 years" },
        { name: "W-2 Statements", retention: "7 years" },
        { name: "1099 Forms", retention: "7 years" }
      ]
    },
    {
      category: "Financial Records",
      items: [
        { name: "Bank Statements", retention: "7 years" },
        { name: "Credit Card Statements", retention: "7 years" },
        { name: "Investment Records", retention: "7 years after sale" },
        { name: "Retirement Plan Statements", retention: "Keep indefinitely" }
      ]
    },
    {
      category: "Business Records",
      items: [
        { name: "Financial Statements", retention: "Keep indefinitely" },
        { name: "General Ledgers", retention: "Keep indefinitely" },
        { name: "Business Expenses", retention: "7 years" },
        { name: "Payroll Records", retention: "7 years" }
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
                Record <span className="gradient-text">Retention Guide</span>
              </h1>
              <p className="text-xl text-gray-600">
                Recommendations on how long to retain various financial and tax records for individuals and businesses.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {records.map((category, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left pb-4 pr-6">Document</th>
                          <th className="text-left pb-4">Retention Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr key={idx} className="border-b border-gray-100">
                            <td className="py-3 pr-6">{item.name}</td>
                            <td className="py-3">{item.retention}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Help Managing Your Records?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    We recommend maintaining backup sets of records and storing them electronically for ease of access and security.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us For Assistance</Link>
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

export default RecordRetention;
