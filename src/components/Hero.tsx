
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 bottom-0 w-1/3 h-1/3 bg-accounting-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 w-1/4 h-1/4 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Los Angeles <span className="gradient-text">CPA Firm</span> For Your Financial Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Velin & Associates, Inc. is a premier Los Angeles CPA firm offering a broad range of financial services to individuals and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                <Link to="/contact">Schedule A Consultation</Link>
              </Button>
              <Button variant="outline" className="border-accounting-700 text-accounting-700 hover:bg-accounting-50 px-8 py-6 text-lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="glass absolute w-[calc(100%-3rem)] h-[calc(100%-3rem)] top-6 -right-6 rounded-2xl"></div>
            <div className="glass rounded-2xl overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Professional accounting services in Los Angeles" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
