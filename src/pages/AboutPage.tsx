
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Our Firm</span>
              </h1>
              <p className="text-xl text-gray-600">
                Columbia Accounting and Tax Services is a full-service accounting firm with over 100 years of combined experience providing expert financial services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to provide exceptional accounting services to businesses and individuals, Columbia Accounting and Tax Services has grown to become a trusted name in the financial industry.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of experienced professionals brings together diverse expertise in tax preparation, financial planning, audit support, and payroll services to deliver comprehensive solutions tailored to each client's unique needs.
                </p>
                <p className="text-gray-600">
                  We pride ourselves on our commitment to excellence, integrity, and personalized service, ensuring that our clients receive the highest quality financial guidance and support.
                </p>
              </div>
              <div className="relative">
                <div className="relative w-full h-[400px]">
                  <div className="glass absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-accounting-700/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="my-20">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass p-8 rounded-2xl border-transparent">
                  <div className="w-16 h-16 rounded-xl bg-accounting-100 text-accounting-700 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Expertise & Experience</h3>
                  <p className="text-gray-600">
                    Our team brings over 100 years of combined experience, providing you with seasoned expertise across all areas of accounting and finance.
                  </p>
                </div>
                
                <div className="glass p-8 rounded-2xl border-transparent">
                  <div className="w-16 h-16 rounded-xl bg-accounting-100 text-accounting-700 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
                  <p className="text-gray-600">
                    We take the time to understand your unique financial situation and goals, creating customized solutions that work for you.
                  </p>
                </div>
                
                <div className="glass p-8 rounded-2xl border-transparent">
                  <div className="w-16 h-16 rounded-xl bg-accounting-100 text-accounting-700 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Proactive Solutions</h3>
                  <p className="text-gray-600">
                    We don't just react to financial issues – we anticipate challenges and opportunities to help you stay ahead.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="my-20">
              <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
                <div className="relative z-10">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Let our experienced team help you navigate your financial journey with confidence and clarity.
                    </p>
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                      Schedule a Consultation
                    </Button>
                  </div>
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

export default AboutPage;
