
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ForensicAccounting = () => {
  const services = [
    {
      title: "Civil Litigation Matters",
      description: "Expert financial analysis and testimony to support civil litigation proceedings."
    },
    {
      title: "Partner Disputes",
      description: "Financial investigation and documentation to resolve disagreements between business partners."
    },
    {
      title: "Breach of Contracts",
      description: "Detailed financial analysis to determine damages resulting from contract breaches."
    },
    {
      title: "Tenant Disputes",
      description: "Financial examination of lease agreements and payment records to resolve conflicts."
    },
    {
      title: "Corporate Investigations",
      description: "Thorough examination of financial records to identify potential fraud or misconduct."
    },
    {
      title: "Marriage Dissolution",
      description: "Financial analysis and asset valuation for divorce proceedings and settlements."
    },
    {
      title: "Probate Matters",
      description: "Investigation of financial aspects in contested estate and inheritance cases."
    },
    {
      title: "Due Diligence Engagements",
      description: "Comprehensive financial review of businesses prior to acquisition or investment."
    },
    {
      title: "Fraud Investigations",
      description: "Specialized investigation techniques to identify and document financial fraud."
    },
    {
      title: "Analysis of Income Tax Returns in Litigation",
      description: "Expert review of tax documents to support legal proceedings."
    },
    {
      title: "Bankruptcy Proceedings",
      description: "Financial analysis and documentation for bankruptcy cases and restructuring."
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
                Forensic <span className="gradient-text">Accounting</span>
              </h1>
              <p className="text-xl text-gray-600">
                Specialized investigative accounting services for engagements resulting from real or anticipated litigation.
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
                  <h2 className="text-3xl font-bold mb-6">Need Forensic Accounting Expertise?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team provides meticulous financial investigation and expert testimony for legal proceedings.
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

export default ForensicAccounting;
