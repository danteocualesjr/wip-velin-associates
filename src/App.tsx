
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessServices from "./pages/BusinessServices";
import Contact from "./pages/Contact";
import PersonalServices from "./pages/PersonalServices";
import OtherServices from "./pages/OtherServices";
import About from "./pages/About";
import TaxCenter from "./pages/TaxCenter";
import ClientCenter from "./pages/ClientCenter";
import QuickBooksServices from "./pages/QuickBooksServices";

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
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/personal-services" element={<PersonalServices />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/quickbooks-services" element={<QuickBooksServices />} />
          <Route path="/tax-center" element={<TaxCenter />} />
          <Route path="/client-center" element={<ClientCenter />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
