import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import FindQuestionPage from './components/FindQuestionPage';
import PostPage from './components/PostPage';
import PricingPlans from './components/PricingPlans';
import PaymentPage from './components/PaymentPage';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Question" element={<FindQuestionPage />} />
        <Route path='/post' element={<PostPage/>}/>
        <Route path="/pricing" element={<PricingPlans />} /> 
        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
    </Router>
  );
}

export default App;
