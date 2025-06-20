
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientCenter from "./pages/ClientCenter";
import QuickBooksServices from "./pages/QuickBooksServices";
import AccountingServices from "./pages/AccountingServices";
import TaxServices from "./pages/TaxServices";
import NewsInsights from "./pages/NewsInsights";
import TaxTools from "./pages/TaxTools"; 
import FinancialGuides from "./pages/FinancialGuides";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Specialties from "./pages/Specialties";
import NonprofitOrganizations from "./pages/NonprofitOrganizations";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-center" element={<ClientCenter />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accounting-services" element={<AccountingServices />} />
          <Route path="/tax-services" element={<TaxServices />} />
          <Route path="/quickbooks-services" element={<QuickBooksServices />} />
          <Route path="/tax-tools" element={<TaxTools />} />
          <Route path="/news" element={<NewsInsights />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/financial-guides" element={<FinancialGuides />} />
          <Route path="/links" element={<Links />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/nonprofit-organizations" element={<NonprofitOrganizations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
