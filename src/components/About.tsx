
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                <p className="text-xl font-bold mb-2">Located in West Hollywood</p>
                <p className="text-gray-700">Serving businesses and individuals throughout the Los Angeles area with professional accounting services</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Velin & Associates</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Our foremost priority as the Los Angeles CPA is your success. At Velin & Associates, Inc. we strive to help you achieve your goals, whether they are financial or career-related.
            </p>
            <p className="text-gray-600 mb-6">
              We offer individuals and businesses a broad range of financial services, including: bookkeeping, accounting, compilation services and consulting services.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Integrity</h4>
                <p className="text-gray-600">We maintain the highest professional standards and ethical conduct</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Accountability</h4>
                <p className="text-gray-600">We take responsibility for our actions and commitments to clients</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Professionalism</h4>
                <p className="text-gray-600">We demonstrate expertise, competence, and respect in all client interactions</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-gray-600">We embrace new approaches and technologies to serve clients better</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
