import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GuestRoute = ({ children }) => {
  const { isAuthenticated, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    // Redirect based on strict role separation
    if (userRole === "superadmin") {
      return <Navigate to="/admin" replace />;
    } else {
      // Regular users (no role) go to dashboard
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
};

export default GuestRoute;