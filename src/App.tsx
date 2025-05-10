
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientCenter from "./pages/ClientCenter";
import BusinessServices from "./pages/BusinessServices";
import IndividualServices from "./pages/IndividualServices";
import NewsInsights from "./pages/NewsInsights";
import TaxTools from "./pages/TaxTools"; 
import FinancialGuides from "./pages/FinancialGuides";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import TaxCenter from "./pages/TaxCenter";
import EntitySelection from "./pages/EntitySelection";
import TaxOrganizer from "./pages/TaxOrganizer";
import SelfEmploymentPlanning from "./pages/SelfEmploymentPlanning";

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
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/individual-services" element={<IndividualServices />} />
          <Route path="/tax-tools" element={<TaxTools />} />
          <Route path="/news" element={<NewsInsights />} />
          <Route path="/financial-guides" element={<FinancialGuides />} />
          <Route path="/links" element={<Links />} />
          <Route path="/tax-center" element={<TaxCenter />} />
          <Route path="/entity-selection" element={<EntitySelection />} />
          <Route path="/tax-organizer" element={<TaxOrganizer />} />
          <Route path="/self-employment-planning" element={<SelfEmploymentPlanning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
