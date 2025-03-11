import React, {createContext, useContext, useState, ReactNode} from 'react';
import {BigCalendar} from '@/bigCalendar';

// Define the context type
interface ViewContextType {
  view: BigCalendar;
  setView: (view: BigCalendar) => void;
}

// Create the context with a default value
const ViewContext = createContext<ViewContextType | undefined>(undefined);

// Provider component
export const ViewProvider: React.FC<{children: ReactNode; initialView?: BigCalendar}> = ({
  children,
  initialView = undefined,
}) => {
  const [view, setView] = useState<BigCalendar>(initialView);

  const value = {
    view,
    setView,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};

// Hook to use the view context
export const useView = (): ViewContextType => {
  const context = useContext(ViewContext);

  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }

  return context;
};
