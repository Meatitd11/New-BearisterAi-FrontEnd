import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // Check authentication
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // Strict role-based access control
  if (requiredRole === "superadmin") {
    // Only superadmin can access admin routes
    if (userRole !== "superadmin") {
      return <Navigate to="/dashboard" replace />;
    }
  } else {
    // User dashboard routes - only accessible to regular users (no role)
    if (userRole === "superadmin") {
      return <Navigate to="/admin" replace />;
    }
    // If user has any other role, also redirect to appropriate place
    if (userRole && userRole !== "user") {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;