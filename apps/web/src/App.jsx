import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
// import LatestReleasesPage from './pages/LatestReleasesPage'; // hidden until later release
import UpcomingPage from './pages/UpcomingPage';
import ArtistStoryPage from './pages/ArtistStoryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Page not found</p>
        <a href="/" className="text-primary hover:underline">
          Back to home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Latest Releases — hidden until later release */}
        <Route path="/releases" element={<Navigate to="/" replace />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/story" element={<ArtistStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
