
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Links = () => {
  const linkCategories = [
    {
      category: "Government Resources",
      links: [
        {
          title: "Internal Revenue Service (IRS)",
          url: "https://www.irs.gov/",
          description: "Official website of the U.S. Internal Revenue Service."
        },
        {
          title: "Social Security Administration",
          url: "https://www.ssa.gov/",
          description: "Information on retirement, Medicare, and disability benefits."
        },
        {
          title: "U.S. Department of the Treasury",
          url: "https://home.treasury.gov/",
          description: "Official website of the U.S. Department of the Treasury."
        },
        {
          title: "Maryland Comptroller",
          url: "https://www.marylandtaxes.gov/",
          description: "Maryland state tax information and resources."
        }
      ]
    },
    {
      category: "Financial Resources",
      links: [
        {
          title: "Financial Accounting Standards Board (FASB)",
          url: "https://www.fasb.org/",
          description: "The organization that establishes financial accounting and reporting standards."
        },
        {
          title: "American Institute of CPAs (AICPA)",
          url: "https://www.aicpa.org/",
          description: "The national professional organization of Certified Public Accountants."
        },
        {
          title: "Securities and Exchange Commission (SEC)",
          url: "https://www.sec.gov/",
          description: "Federal agency that regulates securities markets and protects investors."
        },
        {
          title: "National Association of Tax Professionals",
          url: "https://www.natptax.com/",
          description: "Organization providing education, resources, and professional connections for tax preparers."
        }
      ]
    },
    {
      category: "Business Resources",
      links: [
        {
          title: "Small Business Administration (SBA)",
          url: "https://www.sba.gov/",
          description: "Resources, funding opportunities, and guidance for small businesses."
        },
        {
          title: "U.S. Chamber of Commerce",
          url: "https://www.uschamber.com/",
          description: "Advocacy and resources for businesses of all sizes."
        },
        {
          title: "SCORE",
          url: "https://www.score.org/",
          description: "Free business mentoring and education for small businesses."
        },
        {
          title: "Maryland Department of Commerce",
          url: "https://commerce.maryland.gov/",
          description: "Resources for businesses operating in Maryland."
        }
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
                Useful <span className="gradient-text">Links</span>
              </h1>
              <p className="text-xl text-gray-600">
                A collection of valuable resources and websites related to accounting, taxation, and finance.
              </p>
            </div>

            {linkCategories.map((category, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.links.map((link, idx) => (
                    <div key={idx} className="glass border-transparent rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2">
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accounting-700 hover:underline flex items-center"
                        >
                          {link.title}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </h3>
                      <p className="text-gray-600">{link.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="glass border-transparent rounded-2xl p-8 text-center mt-12">
              <h3 className="text-xl font-bold mb-4">Need More Resources?</h3>
              <p className="text-gray-600 mb-6">
                This is just a selection of useful resources. If you're looking for specific information or recommendations, please don't hesitate to contact us.
              </p>
              <a href="/contact" className="text-accounting-700 font-semibold hover:underline">
                Contact Us For More Information
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Links;
