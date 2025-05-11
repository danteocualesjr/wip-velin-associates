
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      position: "Small Business Owner",
      content: "Gary is a highly innovative accountant, whose creative solutions make tax filing go smoothly. His work is impeccable and he has earned my trust."
    },
    {
      name: "Michael T.",
      position: "Entrepreneur",
      content: "Gary's dedication to his work is unmatched. He provided me with exceptional service and helped me save significantly on my taxes."
    },
    {
      name: "Laura B.",
      position: "Freelancer",
      content: "I've been working with Gary for my tax needs for the past three years. His attention to detail and knowledge of tax law makes him an invaluable asset to my business."
    },
    {
      name: "Robert K.",
      position: "Self-employed Professional",
      content: "Finding Gary was a game-changer for my business. His innovative approach to accounting and tax strategy has saved me thousands."
    },
    {
      name: "Jennifer L.",
      position: "Independent Contractor",
      content: "Gary's expertise with QuickBooks saved me countless hours of frustration. He set up my system efficiently and taught me how to use it effectively."
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
                Client <span className="gradient-text">Testimonials</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover what clients are saying about Gary Alan's accounting and tax services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accounting-100 rounded-full flex items-center justify-center text-accounting-700 font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Experience This Level of Service?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Join Gary's satisfied clients and experience professional, innovative accounting services tailored to your needs.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Gary Today</Link>
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

export default Reviews;
