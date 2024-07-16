import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateLogin({ children }: any) {
  const auth = useAuth();

  if (auth.isAuthenticated) return <Navigate to="/" />;

  return children;
}

export { PrivateLogin };
