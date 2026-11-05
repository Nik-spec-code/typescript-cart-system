import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/useTheme";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className="bg-transparent" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Moon className="size-5.75" strokeWidth={3} />
      ) : (
        <Sun className="size-5.75" strokeWidth={3} />
      )}
    </Button>
  );
};

export default ToggleTheme;
