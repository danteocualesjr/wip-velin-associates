
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialGuides = () => {
  const guideCategories = [
    {
      title: "Life Events",
      description: "Financial guidance for major life transitions and events.",
      guides: [
        "Marriage and Family",
        "Education Planning",
        "Retirement",
        "Estate Planning",
        "Major Purchases"
      ]
    },
    {
      title: "Business Strategies",
      description: "Strategic financial advice for business owners and entrepreneurs.",
      guides: [
        "Starting a Business",
        "Business Growth",
        "Business Succession",
        "Selling a Business",
        "Mergers and Acquisitions"
      ]
    },
    {
      title: "Investment Strategies",
      description: "Guidance on making informed investment decisions.",
      guides: [
        "Investment Basics",
        "Portfolio Management",
        "Retirement Accounts",
        "Risk Management",
        "Tax-Efficient Investing"
      ]
    },
    {
      title: "Tax Strategies",
      description: "Tax planning and optimization techniques for individuals and businesses.",
      guides: [
        "Individual Tax Planning",
        "Business Tax Planning",
        "Tax Credits and Deductions",
        "Year-End Tax Strategies",
        "Tax Law Updates"
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
                Financial <span className="gradient-text">Guides</span>
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive guides on various financial topics to help you make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {guideCategories.map((category, index) => (
                <Card key={index} className="glass border-transparent">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.guides.map((guide, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-accounting-700 mr-2"></div>
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                      View {category.title} Guides
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Personalized Financial Advice?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team of financial experts is ready to provide personalized guidance tailored to your specific needs.
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

export default FinancialGuides;
