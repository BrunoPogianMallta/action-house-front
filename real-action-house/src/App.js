import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResetPassword from './components/resetPassword/ResetPassword';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Dashboard from './pages/Dashboard';
import SessionExpired from './components/session/SessionExpired';
import ProtectedRoute from './components/ProtectedRoute';
import AuctionHouse from './pages/AuctionHouse';
import Footer from './components/footer/Footer'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Página inicial não protegida */}
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/session-expired" element={<SessionExpired />} />
            <Route path="/auction-house" element={<AuctionHouse />} />
            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute
                  element={<Dashboard />}
                />
              } 
            />
          </Routes>
        </main>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
