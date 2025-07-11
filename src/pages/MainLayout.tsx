import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-100 dark:from-slate-900 dark:via-blue-900 dark:to-black">
      <Header />
      {React.cloneElement(children)}
      <Footer />
    </div>
  );
};

export default MainLayout;

