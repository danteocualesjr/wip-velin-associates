
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "World Peace in 2025: Trump's Bold Moves Spark Global Prosperity",
      date: "April 12, 2025",
      excerpt: "The dream of world peace feels closer than ever in April 2025, and it's thanks to...",
      image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Tax Strategies for Small Business Owners in 2025",
      date: "March 15, 2025",
      excerpt: "With the tax landscape constantly evolving, small business owners need to stay informed about the latest strategies to minimize their tax burden...",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Understanding the Benefits of S Corporations",
      date: "February 28, 2025",
      excerpt: "For many small business owners, choosing the right business structure can have significant tax implications. S corporations offer unique advantages...",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
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
                Gary's <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-gray-600">
                Insights, updates, and expert advice on accounting, tax strategies, and financial planning.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-12 mb-16">
              {blogPosts.map((post, index) => (
                <div key={index} className="glass border-transparent rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="text-accounting-600 text-sm font-medium mb-2">{post.date}</div>
                      <h2 className="text-2xl font-bold mb-4 hover:text-accounting-700 transition-colors">
                        <a href="#">{post.title}</a>
                      </h2>
                      <p className="text-gray-700 mb-6">{post.excerpt}</p>
                      <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                        <a href="#">Read More</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Have Questions About Your Finances?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Gary is available to help you navigate your financial and tax challenges. Reach out today for personalized assistance.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Gary</Link>
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

export default Blog;
