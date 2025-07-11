import { useTheme } from "../context/ThemeContext";
import { NavbarButton } from "@/components/ui/resizable-navbar";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarButton
      onClick={() => {
        console.log("Toggle button clicked");
        toggleTheme();
      }}
      className={`p-2 rounded bg-transparent h-[50px] ${
        theme === "dark" ? "text-4xl" : "text-2xl"
      } dark:text-white aspect-square shadow-none`}
    >
      {theme === "dark" ? "☼" : "☾"}
    </NavbarButton>
  );
};

export default ThemeToggle;
