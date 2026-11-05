import { ThemeProvider } from "@/context/useTheme";
import type React from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
