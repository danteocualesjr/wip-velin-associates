
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import BusinessServices from "./pages/BusinessServices";
import IndividualServices from "./pages/IndividualServices";
import InternationalServices from "./pages/InternationalServices";
import QuickBooksServices from "./pages/QuickBooksServices";
import ForensicAccounting from "./pages/ForensicAccounting";
import FinancialReporting from "./pages/FinancialReporting";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/individual-services" element={<IndividualServices />} />
          <Route path="/international-services" element={<InternationalServices />} />
          <Route path="/quickbooks-services" element={<QuickBooksServices />} />
          <Route path="/forensic-accounting" element={<ForensicAccounting />} />
          <Route path="/financial-reporting" element={<FinancialReporting />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
