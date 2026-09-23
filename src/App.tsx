import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import { Wash } from "./components/Wash";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import UrbanHeatStress from "./pages/UrbanHeatStress";
import EngineeringTechnology from "./pages/EngineeringTechnology";
import Research from "./pages/Research";
import LeadershipMentoring from "./pages/LeadershipMentoring";
import Cricket from "./pages/Cricket";
import AwardsRecognition from "./pages/AwardsRecognition";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { useScrollToHash } from "./hooks/use-scroll-to-hash";

const queryClient = new QueryClient();

function NavigationEffects() {
  useScrollToHash();
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationEffects />
        <div className="min-h-screen flex flex-col font-sans bg-background text-label">
          <Wash />
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Primary Navigation Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/urban-heat-stress" element={<UrbanHeatStress />} />
              <Route path="/engineering-technology" element={<EngineeringTechnology />} />
              <Route path="/research" element={<Research />} />
              <Route path="/leadership-mentoring" element={<LeadershipMentoring />} />
              <Route path="/cricket" element={<Cricket />} />
              <Route path="/awards-recognition" element={<AwardsRecognition />} />
              <Route path="/resume" element={<Resume />} />

              {/* Backward Compatibility Redirects */}
              <Route path="/impact" element={<Navigate to="/urban-heat-stress" replace />} />
              <Route path="/engineering" element={<Navigate to="/engineering-technology" replace />} />
              <Route path="/teaching" element={<Navigate to="/leadership-mentoring" replace />} />
              <Route path="/awards" element={<Navigate to="/awards-recognition" replace />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
