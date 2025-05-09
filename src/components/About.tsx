
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <div className="glass absolute top-8 -left-8 right-24 bottom-24 rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass border-transparent shadow-xl">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="glass absolute right-4 -bottom-8 p-6 rounded-lg max-w-xs shadow-xl">
                <p className="text-xl font-bold mb-2">40+</p>
                <p className="text-gray-700">Years of experience in accounting and tax services</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Katz & Co., P.A.</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Katz & Co., P.A. is a full-service accounting firm based in Bethesda, Maryland, offering a comprehensive range of financial services for both businesses and individuals.
            </p>
            <p className="text-gray-600 mb-6">
              With over 40 years of experience in tax and accounting, our team is equipped to handle all of your financial needs with precision and care, both domestically and internationally.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Expert Team</h4>
                <p className="text-gray-600">Highly qualified professionals with decades of experience</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Personalized Service</h4>
                <p className="text-gray-600">Tailored solutions to meet your specific financial needs</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">IRS Support</h4>
                <p className="text-gray-600">Strong representation and expert guidance in audits</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">QuickBooks Experts</h4>
                <p className="text-gray-600">Specialized setup, training and ongoing support</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
