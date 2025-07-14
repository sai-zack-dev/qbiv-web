import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Overview", href: "#about" },
    { name: "Features", href: "#services" },
    { name: "Technologies", href: "#portfolio" },
    { name: "Mission", href: "#blog" },
  ];

  const supportLinks = [
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#help" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#facebook" },
    { name: "Instagram", icon: FaInstagram, href: "#instagram" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#linkedin" },
    { name: "GitHub", icon: FaGithub, href: "#github" },
  ];
  return (
    <div className="flex flex-col sm:flex-row justify-between px-5 gap-5 pt-25">
      <div className="flex flex-col sm:flex-row gap-5 flex-grow justify-around">
        {/* Quick link */}
        <div className="flex flex-col sm:items-start items-center border-b pb-5">
          <h1 className="mb-5 text-lg">QUICK LINKS</h1>
          <ul className="space-y-2 flex sm:flex-col gap-x-5 sm:gap-0 flex-wrap justify-center">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Support link */}
        <div className="flex flex-col sm:items-start items-center border-b pb-5">
          <h1 className="mb-5 text-lg">SUPPORT LINKS</h1>
          <ul className="space-y-2 flex sm:flex-col gap-x-5 sm:gap-0 flex-wrap justify-center">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* socialLinks */}
        <div className="flex flex-col sm:items-start items-center">
          <h1 className="mb-5 text-lg">SOCIAL LINKS</h1>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="shadow-[inset_0_0_8px_0_#3B82F6] text-gray-700 dark:text-white rounded-full p-3 hover:text-blue-500 dark:hover:text-blue-500"
                  aria-label={social.name}
                >
                  <IconComponent className="w-7 h-7" />
                </a>
              );
            })}
          </div>
          <div className="pt-10 mt-10 border-t ">
            <span>Email: </span>
            <a
              href="mailto:saizlinh@gmail.com"
              className="hover:text-blue-500 hover:underline"
            >
              saizlinh@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 justify-center flex">
        <img
          src="/glowing-logo-light.png"
          alt="logo"
          height={200}
          className="dark:hidden"
        />
        <img
          src="/glowing-logo-dark.png"
          alt="logo"
          height={200}
          className="hidden dark:block"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-5 text-sm backdrop-blur-sm">
        © 2025 QBIV - A Final Year Project by SaiZ
      </div>
    </div>
  );
}

export default Footer;
