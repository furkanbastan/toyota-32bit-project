import React from "react";

// interfaces
interface ISidebarContext {
  state?: {};
  actions?: {
    openSidebar: () => any;
    closeSidebar: () => any;
  };
}

// context
const SidebarContext = React.createContext<ISidebarContext>({});

// provider
function SidebarContextProvider({ children }: any) {
  const context: ISidebarContext = {
    actions: {
      openSidebar: () => {
        if (typeof window !== "undefined") {
          document.body.style.overflow = "hidden";
          document.documentElement.style.setProperty(
            "--SideNavigation-slideIn",
            "1"
          );
        }
      },

      closeSidebar: () => {
        if (typeof window !== "undefined") {
          document.documentElement.style.removeProperty(
            "--SideNavigation-slideIn"
          );
          document.body.style.removeProperty("overflow");
        }
      },
    },
  };
  return (
    <SidebarContext.Provider value={context}>
      {children}
    </SidebarContext.Provider>
  );
}

// hooks
function useSidebarActions() {
  return React.useContext(SidebarContext).actions;
}

// export
export { SidebarContextProvider, useSidebarActions };
