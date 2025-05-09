
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import PersonalServices from "./pages/PersonalServices";
import ClientCenter from "./pages/ClientCenter";
import TaxCenter from "./pages/TaxCenter";
import BusinessServices from "./pages/BusinessServices";
import NonprofitOrganizations from "./pages/NonprofitOrganizations";
import RecordRetention from "./pages/RecordRetention";
import FinancialGuides from "./pages/FinancialGuides";
import Newsletter from "./pages/Newsletter";
import QuickBooksServices from "./pages/QuickBooksServices";
import OtherServices from "./pages/OtherServices";

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
          <Route path="/services" element={<Services />} />
          <Route path="/personal-services" element={<PersonalServices />} />
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/nonprofit-organizations" element={<NonprofitOrganizations />} />
          <Route path="/quickbooks-services" element={<QuickBooksServices />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/client-center" element={<ClientCenter />} />
          <Route path="/tax-center" element={<TaxCenter />} />
          <Route path="/record-retention" element={<RecordRetention />} />
          <Route path="/financial-guides" element={<FinancialGuides />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
