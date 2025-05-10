
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-accounting-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute left-1/4 top-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    
      <div className="container-custom relative">
        <div className="glass border-transparent rounded-2xl p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Professional <span className="gradient-text">Accounting Services?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                "Our firm is one of the leading firms in the area. By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention."
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button variant="outline" className="border-accounting-700 text-accounting-700 hover:bg-accounting-50 px-8 py-6 text-lg">
                  <Link to="/client-center">Client Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
