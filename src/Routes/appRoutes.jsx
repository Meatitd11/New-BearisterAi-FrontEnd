import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/homePage';
import SignIn from '../userAuth/login';
import Signup from '../userAuth/signup';
import ResetPassword from '../userAuth/resetPassword';
import EmailSent from '../userAuth/emailSent';
import ForgotPassword from '../userAuth/forgotPassword';
import AdminSignin from '../adminAuth/adminSignin';
import UserDashboard from '../pages/userDashboard';
import AdminDashboard from '../pages/adminDashboard';
import Users from '../adminDashboard/users';
import VerifyEmail from '../userAuth/verifyEmail';
import ProfileSettings from '../userDashboard/profileSettings';
import SecuritySettings from '../userDashboard/securitySettings';
import AdminProfileSettings from '../adminDashboard/profileSettings';
import AdminSecuritySettings from '../adminDashboard/securitySettings';
import SubscriptionPage from '../userDashboard/SubscriptionPage';
import PaymentSuccess from '../userDashboard/PaymentSuccess';
import PaymentCancel from '../userDashboard/PaymentCancel';
import ProtectedRoute from './protectedRoutes';
import GuestRoute from './guestRoute';
import ResetSuccess from '../userAuth/resetSuccess';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes accessible to all */}
      <Route path="/" element={<HomePage/>} />
      
      {/* Guest routes - only accessible when not authenticated */}
      <Route 
        path="/signin" 
        element={
          <GuestRoute>
            <SignIn />
          </GuestRoute>
        } 
      />
      <Route 
        path="/signup" 
        element={
          <GuestRoute>
            <Signup />
          </GuestRoute>
        } 
      />
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      <Route 
        path="/email-sent" 
        element={
          <GuestRoute>
            <EmailSent />
          </GuestRoute>
        } 
      />
      <Route 
        path="/forgot-password" 
        element={
          <GuestRoute>
            <ForgotPassword />
          </GuestRoute>
        } 
      />
      <Route 
        path="/reset-password" 
        element={
          <GuestRoute>
            <ResetPassword />
          </GuestRoute>
        } 
      />
         <Route 
        path="/reset-success" 
        element={
          <GuestRoute>
            <ResetSuccess/>
          </GuestRoute>
        } 
      />
      <Route 
        path="/admin-login" 
        element={
          <GuestRoute>
            <AdminSignin />
          </GuestRoute>
        } 
      />
      
      {/* Protected user routes - accessible ONLY to regular users (no role) */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/profile-settings" 
        element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/security-settings" 
        element={
          <ProtectedRoute>
            <SecuritySettings />
          </ProtectedRoute>
        }
      />
        <Route 
        path="/subscription" 
        element={
          <ProtectedRoute>
            <SubscriptionPage />
          </ProtectedRoute>
        }
      />
       <Route 
        path="/payment-success" 
        element={
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        }
      />
       <Route 
        path="/payment-cancel" 
        element={
          <ProtectedRoute>
            <PaymentCancel />
          </ProtectedRoute>
        }
      />
      
      {/* Protected admin routes - accessible ONLY to superadmin */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requiredRole="superadmin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/admin/users" 
        element={
          <ProtectedRoute requiredRole="superadmin">
            <Users />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/admin/profile-settings" 
        element={
          <ProtectedRoute requiredRole="superadmin">
            <AdminProfileSettings />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/admin/security-settings" 
        element={
          <ProtectedRoute requiredRole="superadmin">
            <AdminSecuritySettings />
          </ProtectedRoute>
        }
      />
      
      {/* Add more admin routes as needed */}
      
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;