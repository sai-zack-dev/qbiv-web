import { useTheme } from "../context/ThemeContext";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { PiSunFill, PiMoonFill  } from "react-icons/pi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarButton
      onClick={() => {
        console.log("Toggle button clicked");
        toggleTheme();
      }}
      className={`p-2 rounded-lg gap-3 justify-center items-center flex border md:border-none bg-transparent h-[50px] cursor-pointer flex-1 text-xl dark:text-white aspect-square shadow md:shadow-none`}
    >
      {theme === "dark" ? <PiSunFill /> : <PiMoonFill />}
      <span className="text-sm inline md:hidden">Theme</span>
    </NavbarButton>
  );
};

export default ThemeToggle;
