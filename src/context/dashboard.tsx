import React, { createContext, useState } from "react";

type Tab = string;
type SubTab = string;

interface DashBoardContextType {
    dashboardState: {
        currentTab: Tab;
        currentSubTab: SubTab;
    };
    updateCurrentTab: (tab: Tab) => void;
    updateCurrentSubTab: (subTab: SubTab) => void;
}

const DashBoardContext = createContext<DashBoardContextType | undefined>(undefined);

const DashBoardContextProvider: React.FC = ({ children }:any) => {
  
    const [dashboardState, setDashboardState] = useState({
        currentTab: "",
        currentSubTab: ""
    });

    const updateCurrentTab = (tab: Tab) => {
        setDashboardState((prevState) => ({
            ...prevState,
            currentTab: tab
        }));
    };

    const updateCurrentSubTab = (subTab: SubTab) => {
        setDashboardState((prevState) => ({
            ...prevState,
            currentSubTab: subTab
        }));
    };

    const contextValue: DashBoardContextType = {
        dashboardState,
        updateCurrentTab,
        updateCurrentSubTab
    };

    return <DashBoardContext.Provider value={contextValue}>{children}</DashBoardContext.Provider>;
};

export { DashBoardContext, DashBoardContextProvider };