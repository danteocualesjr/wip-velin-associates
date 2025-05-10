
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TaxOrganizer = () => {
  const organizers = [
    {
      title: "Tax Organizer",
      description: "General tax organizer to help gather all necessary information for your individual tax return.",
      items: [
        "Personal information",
        "Income details",
        "Deductions and credits",
        "Previous year tax information"
      ]
    },
    {
      title: "Schedule C Self-Employment",
      description: "Detailed organizer for self-employed individuals and sole proprietors.",
      items: [
        "Business income",
        "Business expenses",
        "Home office information",
        "Vehicle expenses",
        "Asset purchases"
      ]
    },
    {
      title: "Schedule E Rental Income",
      description: "Comprehensive organizer for rental property income and expenses.",
      items: [
        "Rental property details",
        "Rental income",
        "Rental expenses",
        "Property improvements",
        "Depreciation information"
      ]
    },
    {
      title: "Due Diligence",
      description: "Organizer to ensure compliance with IRS due diligence requirements for certain credits.",
      items: [
        "Earned Income Tax Credit",
        "Child Tax Credit",
        "American Opportunity Tax Credit",
        "Supporting documentation"
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
                Tax <span className="gradient-text">Organizers</span>
              </h1>
              <p className="text-xl text-gray-600">
                Maryland Tax Service provides various tax organizers to assist clients in gathering necessary information for tax preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {organizers.map((organizer, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold mb-4">{organizer.title}</h2>
                  <p className="text-gray-600 mb-6">{organizer.description}</p>
                  <h3 className="text-lg font-semibold mb-3">Information Collected:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {organizer.items.map((item, idx) => (
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
                  <h2 className="text-3xl font-bold mb-6">Need Assistance with Tax Organization?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Using our tax organizers can help ensure you don't miss any important deductions or credits on your tax return.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us for Help</Link>
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

export default TaxOrganizer;
