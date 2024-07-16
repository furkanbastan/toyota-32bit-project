import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ children }: any) {
  const auth = useAuth();

  if (!auth.isAuthenticated) return <Navigate to="/login" />;

  return children;
}

export { PrivateRoute };
