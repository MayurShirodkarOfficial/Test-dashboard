import { createContext, useState, useEffect } from 'react';

interface DashBoardContextProps {
  applications: any[]; 
  setApplications: (applications: any[]) => void;
  currentApplication: any | null; 
  setCurrentApplication: (application: any | null) => void;
  currentSelectedDashboardMenu: string; 
  setCurrentSelectedDashboardMenu: (menu: string) => void;
  currentSelectedSubDashboardMenu: string;
  setCurrentSelectedSubDashboardMenu: (menu: string) => void;
}

const DashBoardContext = createContext<DashBoardContextProps>({
  applications: [],
  setApplications: () => {},
  currentApplication: null,
  setCurrentApplication: () => {},
  currentSelectedDashboardMenu: '',
  setCurrentSelectedDashboardMenu: () => {},
  currentSelectedSubDashboardMenu: '',
  setCurrentSelectedSubDashboardMenu: () => {},
});

const DashBoardContextProvider = ({ children }:any) => {
  // State for applications
  const [applications, setApplications] = useState<any[]>([]);
  
  // State for currently chosen application
  const [currentApplication, setCurrentApplication] = useState<any | null>(null);
  
  // State for dashboard menu
  const [currentSelectedDashboardMenu, setCurrentSelectedDashboardMenu] = useState<string>(''); // Change the type to string
  
  // State for sub dashboard menu
  const [currentSelectedSubDashboardMenu, setCurrentSelectedSubDashboardMenu] = useState<string>(''); // Change the type to string

  // Load context data from localStorage on component mount
  useEffect(() => {
    const storedContext = localStorage.getItem('dashboardContext');
    if (storedContext) {
      const parsedContext = JSON.parse(storedContext);
      setApplications(parsedContext.applications);
      setCurrentApplication(parsedContext.currentApplication);
      setCurrentSelectedDashboardMenu(parsedContext.currentSelectedDashboardMenu);
      setCurrentSelectedSubDashboardMenu(parsedContext.currentSelectedSubDashboardMenu);
    }
  }, []);

  // Save context data to localStorage whenever it changes
  useEffect(() => {
    const contextToStore = JSON.stringify({
      applications,
      currentApplication,
      currentSelectedDashboardMenu,
      currentSelectedSubDashboardMenu
    });
    localStorage.setItem('dashboardContext', contextToStore);
  }, [applications, currentApplication, currentSelectedDashboardMenu, currentSelectedSubDashboardMenu]);

  return (
    <DashBoardContext.Provider value={{
      applications,
      setApplications,
      currentApplication,
      setCurrentApplication,
      currentSelectedDashboardMenu,
      setCurrentSelectedDashboardMenu,
      currentSelectedSubDashboardMenu,
      setCurrentSelectedSubDashboardMenu
    }}>
      {children}
    </DashBoardContext.Provider>
  );
};
export {DashBoardContext,DashBoardContextProvider};