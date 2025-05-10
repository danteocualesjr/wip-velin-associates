
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TaxTools = () => {
  const toolCategories = [
    {
      title: "Tax Tips",
      description: "Helpful advice for tax planning and preparation",
      tools: [
        "Year-End Tax Strategies",
        "Tax-Saving Tips for Individuals",
        "Business Tax Deductions",
        "Retirement Account Contributions",
        "Charitable Giving Strategies"
      ]
    },
    {
      title: "Tax Rates",
      description: "Current tax rate information for planning purposes",
      tools: [
        "Federal Income Tax Brackets",
        "State Income Tax Rates",
        "Capital Gains Tax Rates",
        "Self-Employment Tax Rates",
        "Corporate Tax Rates"
      ]
    },
    {
      title: "Due Dates",
      description: "Important tax deadlines to remember",
      tools: [
        "Individual Tax Returns",
        "Business Tax Returns",
        "Quarterly Estimated Payments",
        "Extension Deadlines",
        "Form Filing Dates"
      ]
    },
    {
      title: "Financial Tools",
      description: "Calculators and resources for financial planning",
      tools: [
        "Retirement Calculator",
        "Loan Payment Calculator",
        "Investment Growth Calculator",
        "College Savings Calculator",
        "Mortgage Refinance Calculator"
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
                Tax <span className="gradient-text">Tools</span>
              </h1>
              <p className="text-xl text-gray-600">
                Utilize our comprehensive tax tools and resources to help manage your finances and plan for tax season.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {toolCategories.map((category, index) => (
                <Card key={index} className="glass border-transparent">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-accounting-700 mr-2"></div>
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                      Access {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">Record Retention Guide</h2>
                  <p className="text-gray-600 mb-8">
                    How long should you keep your records? Here's a general guide for retaining important financial documents:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/50 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">Keep for 1 Year</h3>
                      <ul className="space-y-2">
                        <li>Bank statements</li>
                        <li>Paycheck stubs</li>
                        <li>Utility bills</li>
                        <li>Cancelled checks</li>
                        <li>Credit card statements</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">Keep for 7 Years</h3>
                      <ul className="space-y-2">
                        <li>Tax returns</li>
                        <li>Supporting tax documents</li>
                        <li>Investment statements</li>
                        <li>Property records</li>
                        <li>Home improvement receipts</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">Keep Permanently</h3>
                      <ul className="space-y-2">
                        <li>Birth certificates</li>
                        <li>Marriage certificates</li>
                        <li>Divorce decrees</li>
                        <li>Military discharge papers</li>
                        <li>Estate planning documents</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/50 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">Digital Storage Tips</h3>
                      <ul className="space-y-2">
                        <li>Use secure cloud storage</li>
                        <li>Encrypt sensitive documents</li>
                        <li>Create regular backups</li>
                        <li>Use strong passwords</li>
                        <li>Consider a password manager</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 italic">
                      Note: This is a general guide. Consult with us for specific recommendations tailored to your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                <Link to="/contact">Need Personalized Tax Advice?</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TaxTools;
