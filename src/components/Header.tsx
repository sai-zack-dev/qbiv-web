"use client";
// import ThemeToggle from "@/components/ThemeToggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useOS } from "@/hooks/useOS";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function Header() {
  const navItems = [
    // {
    //   name: "Journey",
    //   link: "#",
    // },
    // {
    //   name: "About",
    //   link: "#",
    // },
    // {
    //   name: "Assets",
    //   link: "#",
    // },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Flow",
      link: "#flow",
    },
    {
      name: "Audiences",
      link: "#audiences",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const os = useOS();

  const downloadLinks = {
    Windows: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV.Setup.1.0.0.exe",
    MacOS: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV-1.0.0-arm64.dmg",
    Linux: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/qbiv_1.0.0_amd64.deb",
    Unknown: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV-1.0.0.AppImage",
  };
  const link = downloadLinks[os];
  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <NavbarButton href={link} className="flex gap-2 dark:bg-white dark:text-black px-6 py-1.5 rounded-full justify-center items-center hover:bg-blue-500 hover:text-white font-normal">
            <FaDownload /> Download
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full gap-5">
            {/* <ThemeToggle /> */}
            <NavbarButton className="flex justify-center items-center flex-1 gap-3">
              <FaDownload /> Download
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
export default Header;
