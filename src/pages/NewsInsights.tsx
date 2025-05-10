
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const NewsInsights = () => {
  const articles = [
    {
      title: "A Note about Health Savings Accounts",
      date: "January 6, 2023",
      description: "Helpful reminders regarding Health Savings Accounts (HSAs).",
      content: `
        Health Savings Accounts (HSAs) offer several benefits for eligible individuals. Here are some important reminders:
        
        • HSAs are only available with high-deductible health plans
        • Contributions are tax-deductible
        • Funds grow tax-free
        • Withdrawals for qualified medical expenses are tax-free
        • Annual contribution limits for 2023 are $3,850 for individuals and $7,750 for families
        • Account holders 55 and older can make an additional $1,000 catch-up contribution
        
        Contact us to learn more about how HSAs can benefit your overall financial strategy.
      `
    },
    {
      title: "Update Regarding Retirement Account Inheritances after 2019",
      date: "December 12, 2023",
      description: "Clarifications on Required Minimum Distributions (RMDs) concerning inherited retirement accounts.",
      content: `
        The SECURE Act of 2019 significantly changed the rules for inherited retirement accounts. Here are key points to understand:
        
        • Non-spouse beneficiaries can no longer "stretch" distributions over their lifetime
        • Most non-spouse beneficiaries must withdraw all funds within 10 years
        • Exceptions exist for certain eligible designated beneficiaries
        • Recent IRS guidance clarifies RMD requirements during the 10-year period
        
        If you've inherited a retirement account, we can help you navigate these complex rules to maintain compliance and optimize your tax strategy.
      `
    },
    {
      title: "Basic Estate Planning: Retirement Plan Assets, IRAs, and Other Beneficiary Designated Assets",
      date: "September 17, 2021",
      description: "Foundations for estate planning and keeping it updated for the benefit of oneself and loved ones.",
      content: `
        Estate planning for retirement assets requires special attention. Consider these important factors:
        
        • Beneficiary designations supersede will provisions
        • Different types of retirement accounts have different distribution rules
        • Review and update beneficiary designations regularly
        • Consider tax implications for different types of beneficiaries
        • Coordinate your retirement account planning with your overall estate plan
        
        Our team can help ensure your retirement assets are properly integrated into your comprehensive estate plan.
      `
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
                News & <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed with our latest articles on tax strategies, retirement planning, and more.
              </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {articles.map((article, index) => (
                <Card key={index} className="glass border-transparent">
                  <CardHeader>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 whitespace-pre-line">{article.content}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-6">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-gray-500">James Magno CPA LLC</p>
                      <Button variant="outline" className="text-accounting-700 border-accounting-700">
                        Share Article
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team of experts is ready to help you understand how these topics might affect your specific situation.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    Contact Us Today
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

export default NewsInsights;
