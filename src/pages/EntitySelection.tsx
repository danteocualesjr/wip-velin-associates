
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EntitySelection = () => {
  const entities = [
    {
      title: "Sole Proprietorship",
      description: "The simplest option with little to no filing requirements or costs to get started.",
      features: [
        "No separate business entity",
        "Business income/expenses reported on Schedule C",
        "Self-employment tax applies to profits",
        "No liability protection"
      ]
    },
    {
      title: "Limited Liability Company (LLC)",
      description: "Offers limited liability and greater credibility for your small business, but with additional costs and filings.",
      features: [
        "Separates personal assets from business liabilities",
        "Can be taxed as a sole proprietorship, partnership, or corporation",
        "Requires Articles of Organization filing with state",
        "Annual fees and filings may apply"
      ]
    },
    {
      title: "S Corporation",
      description: "May offer the greatest tax savings but is the most complex with payroll and tax filing requirements.",
      features: [
        "Provides liability protection",
        "Avoids double taxation of C Corporations",
        "Can save on self-employment taxes",
        "Requires reasonable salary payment to owner-employees",
        "More complex compliance requirements"
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
                Entity <span className="gradient-text">Selection</span>
              </h1>
              <p className="text-xl text-gray-600">
                Guidance on choosing the appropriate business entity for your specific needs and circumstances.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-12 mb-16">
              {entities.map((entity, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold mb-4">{entity.title}</h2>
                  <p className="text-gray-600 mb-6">{entity.description}</p>
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    {entity.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Help Selecting the Right Entity?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Each business structure has advantages and disadvantages. Contact us to discuss which option is best for your specific situation.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us for Guidance</Link>
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

export default EntitySelection;
