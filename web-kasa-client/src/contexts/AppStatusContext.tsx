import React from "react";
import { AppStatusModel } from "../models/AppStatusModel";

// interfaces
interface IAppStatusContext {
  state?: {
    status: AppStatusModel | null;
    isOnline: boolean;
  };
  actions?: {
    updateAppStatus: (status: AppStatusModel) => any;
  };
}

interface ProviderProps {
  status: AppStatusModel | null;
  children: React.ReactNode;
}

// context
const AppStatusContext = React.createContext<IAppStatusContext>({});

// provider
function AppStatusContextProvider(props: ProviderProps) {
  const [status, setStatus] = React.useState<AppStatusModel | null>(
    props.status
  );

  const context: IAppStatusContext = {
    state: {
      status: status,
      isOnline: status?.isOnline ?? false,
    },
    actions: {
      updateAppStatus: (status) => {
        setStatus(status);
      },
    },
  };

  return (
    <AppStatusContext.Provider value={context}>
      {props.children}
    </AppStatusContext.Provider>
  );
}

// hooks
function useAppStatus() {
  return React.useContext(AppStatusContext).state!;
}

function useAppStatusActions() {
  return React.useContext(AppStatusContext).actions!;
}

// export
export { AppStatusContextProvider, useAppStatus, useAppStatusActions };
