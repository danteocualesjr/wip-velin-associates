
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TaxServices = () => {
  const taxPreparationServices = [
    {
      title: "Tax Preparation",
      description: "Expert preparation of individual and business tax returns to ensure compliance and maximize deductions."
    },
    {
      title: "Tax Planning",
      description: "Proactive strategies to maximize your after-tax income and minimize your tax liability."
    },
    {
      title: "Electronic Filing",
      description: "Fast and secure electronic filing for quicker refunds and immediate confirmation."
    },
    {
      title: "Payroll Withholding Adjustment",
      description: "Assistance in adjusting payroll withholding to optimize your tax situation."
    },
    {
      title: "Deduction Identification",
      description: "Expert identification of potential deductions to reduce your tax liability."
    }
  ];

  const taxResolutionServices = [
    {
      title: "IRS Audit Representation",
      description: "Professional representation during IRS audits to protect your rights."
    },
    {
      title: "Non-Filed Tax Returns",
      description: "Assistance with filing past-due tax returns to get back into compliance."
    },
    {
      title: "Back Taxes Owed",
      description: "Help with resolving back taxes and developing a payment strategy."
    },
    {
      title: "Payroll Tax Problems",
      description: "Resolution of payroll tax issues with the IRS and state agencies."
    },
    {
      title: "IRS Liens and Levies",
      description: "Assistance with removing or subordinating IRS tax liens and stopping levies."
    },
    {
      title: "IRS Wage Garnishment",
      description: "Help with stopping IRS wage garnishments and protecting your income."
    },
    {
      title: "IRS Seizures",
      description: "Representation in cases of IRS property seizures to protect your assets."
    },
    {
      title: "IRS Payment Plans",
      description: "Negotiation of affordable IRS payment plans to resolve tax debt."
    },
    {
      title: "Offer in Compromise",
      description: "Assistance with submitting an Offer in Compromise to settle tax debt for less."
    },
    {
      title: "Bankruptcy",
      description: "Guidance on tax implications of bankruptcy filings."
    },
    {
      title: "Innocent Spouse Relief",
      description: "Help with requesting relief from tax liability for an ex-spouse's actions."
    },
    {
      title: "Accessing IRS Files",
      description: "Assistance with requesting and reviewing your IRS file for accuracy."
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
                Tax <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Complete personal and business tax preparation services in Maryland; we make tax returns easy for you.
              </p>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden mb-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Expert Tax Preparation</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "Preparing your own income tax return can be a task that leaves you with more questions than answers. We go beyond tax compliance and proactively recommend tax saving strategies to maximize your after-tax income."
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Tax Preparation Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {taxPreparationServices.map((service, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Tax Problem Resolution Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {taxResolutionServices.map((service, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready for Tax Season?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Don't let tax preparation stress you out. Contact our team today to ensure your taxes are filed accurately and efficiently.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Schedule a Tax Consultation</Link>
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

export default TaxServices;
