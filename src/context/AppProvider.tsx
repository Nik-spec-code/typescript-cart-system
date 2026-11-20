import { CartContextProvider } from "@/context/useCart";
import { ThemeProvider } from "@/context/useTheme";
import type React from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
