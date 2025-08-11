import { Compare } from "./ui/compare";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { useOS } from "@/hooks/useOS";

function HeroSection() {
  const os = useOS();

  const downloadLinks = {
    Windows: {
      label: "Download for Windows",
      url: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV.Setup.1.0.0.exe",
    },
    MacOS: {
      label: "Download for MacOS",
      url: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV-1.0.0-arm64.dmg",
    },
    Linux: {
      label: "Download for Linux",
      url: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/QBIV-1.0.0.AppImage",
    },
    Unknown: {
      label: "Download QBIV",
      url: "https://github.com/sai-zack-dev/query-based-intelligence-visualization/releases/latest/download/qbiv_1.0.0_amd64.deb",
    },
  };
  const { label, url } = downloadLinks[os];
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute z-60 bottom-5 sm:bottom-10 left-0 px-4 md:px-8 lg:px-10 flex flex-col gap-2 lg:gap-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Unlock Your Data's Potential <br className="hidden sm:block" />
          From Complex Data <br className="hidden sm:block" />
          To Actionable Insights Instantly
        </h1>
        <span className="text-xs sm:text-lg lg:text-xl font-normal">
          The AI-powered BI tool that speaks your language.{" "}
          <br className="hidden sm:block" />
          Connect, query in human language, and visualize your data across
          platforms.
        </span>
        <div className="flex gap-5 flex-col sm:flex-row">
          <a
            href={url}
            download
            className="bg-blue-500 px-10 py-5 items-center justify-center flex text-sm text-white rounded-lg cursor-pointer text-center"
          >
            {label}
          </a>
          <div className="flex flex-col gap-2 text-xs">
            <span className="text-gray-500 dark:text-slate-300">
              Supported on all platforms -
            </span>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <FaWindows className="w-6 h-6" />
                <span>Windows</span>
              </div>
              <div className="flex flex-col items-center">
                <FaApple className="w-6 h-6" />
                <span>MacOS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux className="w-6 h-6" />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full min-w-[300px] h-1/2 absolute top-15 overflow-hidden sm:right-0 sm:w-2/3 sm:rounded-2xl">
        <div className="absolute w-full h-full top-0 left-0 z-50 bg-gradient-to-b from-black/0 dark:to-slate-900 via-white/0 to-blue-100 sm:to-white sm:dark:to-[#334373]"></div>
        <Compare
          firstImage="/Get.png"
          secondImage="/Ask.png"
          firstImageClassName="object-cover object-top w-full"
          secondImageClassname="object-cover object-top w-full"
          className="w-full h-full"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}

export default HeroSection;
