
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FinancialReporting = () => {
  const services = [
    {
      title: "Review Statements",
      description: "Professional review of financial statements to provide limited assurance on their accuracy."
    },
    {
      title: "Summary Statements (Compilations)",
      description: "Compilation of financial information into standardized statements without providing assurance."
    },
    {
      title: "GAAP-Compliant Audited Statements",
      description: "Comprehensive audits resulting in financial statements that comply with Generally Accepted Accounting Principles."
    },
    {
      title: "Bookkeeping",
      description: "Systematic recording and organization of financial transactions for your business."
    },
    {
      title: "Chart of Accounts Creation",
      description: "Development of customized accounting frameworks tailored to your business structure and needs."
    },
    {
      title: "Financial Analysis",
      description: "In-depth analysis of financial data to identify trends, opportunities, and areas for improvement."
    },
    {
      title: "Management Reporting",
      description: "Specialized reports designed to provide actionable insights for business leadership."
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
                Financial <span className="gradient-text">Reporting</span>
              </h1>
              <p className="text-xl text-gray-600">
                GAAP-compliant financial reporting services to enhance your decision-making processes.
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

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Enhance Your Financial Clarity</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our reporting services provide the financial transparency you need to make informed business decisions.
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

export default FinancialReporting;
