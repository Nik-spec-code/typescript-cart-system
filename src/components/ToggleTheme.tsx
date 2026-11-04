import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <Button
      className="bg-transparent"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      {theme === "dark" ? (
        <Moon className="size-5.75" strokeWidth={3} />
      ) : (
        <Sun className="size-5.75" strokeWidth={3} />
      )}
    </Button>
  );
};

export default ToggleTheme;
