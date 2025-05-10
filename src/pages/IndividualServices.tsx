
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IndividualServices = () => {
  const services = [
    {
      title: "Personal Financial Planning",
      description: "Comprehensive strategies to help you prepare for a secure and comfortable financial future."
    },
    {
      title: "Retirement Planning",
      description: "Expert guidance to help you prepare for a comfortable retirement based on your goals."
    },
    {
      title: "Divorce Tax Planning",
      description: "Strategic planning to minimize tax implications during divorce proceedings."
    },
    {
      title: "Insurance Review",
      description: "Evaluation of your insurance coverage to ensure adequate protection for your needs."
    },
    {
      title: "Tax Preparation",
      description: "Expert preparation of individual tax returns to maximize allowable deductions."
    },
    {
      title: "Taxpayer Representation",
      description: "Professional representation in dealings with tax authorities to resolve issues."
    },
    {
      title: "Back Taxes Help",
      description: "Assistance with resolving overdue tax obligations and filing past returns."
    },
    {
      title: "IRS Audits",
      description: "Professional guidance and representation during IRS audit proceedings."
    },
    {
      title: "Federal Tax Liens",
      description: "Help with resolving federal tax liens to protect your assets and credit."
    }
  ];

  const additionalServices = [
    {
      title: "IRS Settlement",
      description: "Negotiation with the IRS for favorable settlement terms for tax liabilities."
    },
    {
      title: "Currently Not Collectible",
      description: "Assistance with obtaining Currently Not Collectible status when appropriate."
    },
    {
      title: "Innocent Spouse Relief",
      description: "Help with seeking relief from tax liabilities incurred by a spouse."
    },
    {
      title: "Bankruptcy",
      description: "Guidance on tax implications of bankruptcy proceedings."
    },
    {
      title: "IRS Payment Plans",
      description: "Negotiation of manageable payment plans for tax obligations."
    },
    {
      title: "IRS Seizures",
      description: "Assistance with preventing or addressing IRS seizure of assets."
    },
    {
      title: "IRS Wage Garnishment",
      description: "Help with stopping or reducing wage garnishments by the IRS."
    },
    {
      title: "IRS Levies",
      description: "Assistance with preventing or removing IRS levies on bank accounts or assets."
    },
    {
      title: "Non-Filed Tax Returns",
      description: "Help with preparing and filing delinquent tax returns to regain compliance."
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
                Individual <span className="gradient-text">Tax Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Personalized tax services to ensure you pay only your fair share of taxes with comprehensive financial planning.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                "Our tax accountants have been helping residents in Maryland with their state and federal income taxes since 1987, and pride ourselves on the close personal relationships we've developed with our clients."
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Tax Problem <span className="gradient-text">Resolution</span>
              </h2>
              <p className="text-lg text-gray-600">
                We can help resolve your tax issues with the IRS and state tax authorities, providing expert representation and solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {additionalServices.map((service, index) => (
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
                  <h2 className="text-3xl font-bold mb-6">Take Control of Your Financial Future</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Let our experienced team help you navigate your personal financial journey with confidence.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    Schedule a Consultation
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

export default IndividualServices;
