import React from "react";
import { UserModel } from "../models/UserModel";

// interfaces
interface IAuthContext {
  state?: {
    isAuthenticated: boolean;
    user: UserModel | null;
  };
  actions?: {
    login: (user: UserModel) => any;
    logout: () => any;
  };
}

// context
const AuthContext = React.createContext<IAuthContext>({});

// initial states
function getInitialUser() {
  const user: UserModel | null = JSON.parse(
    localStorage.getItem("CASH_REGISTER_AUTH")!
  );

  return user;
}

// provider
function AuthContextProvider({ children }: any) {
  const [user, setUser] = React.useState<UserModel | null>(getInitialUser());
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(
    user !== null ? true : false
  );

  const context: IAuthContext = {
    state: {
      user: user,
      isAuthenticated: isAuthenticated,
    },
    actions: {
      login: (user: UserModel) => {
        localStorage.setItem("CASH_REGISTER_AUTH", JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
      },
      logout: () => {
        localStorage.removeItem("CASH_REGISTER_AUTH");
        setUser(null);
        setIsAuthenticated(false);
      },
    },
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

// hooks
function useAuth() {
  return React.useContext(AuthContext).state!;
}

function useAuthActions() {
  return React.useContext(AuthContext).actions!;
}

// export
export { AuthContextProvider, useAuth, useAuthActions };
