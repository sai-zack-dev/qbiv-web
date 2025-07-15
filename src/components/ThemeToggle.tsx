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
      className={`p-2 rounded bg-transparent h-[50px] cursor-pointer ${
        theme === "dark" ? "text-3xl" : "text-xl"
      } dark:text-white aspect-square shadow-none`}
    >
      {theme === "dark" ? "☼" : "☾"}
    </NavbarButton>
  );
};

export default ThemeToggle;
