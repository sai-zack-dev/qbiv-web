import { Compare } from "./ui/compare";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute z-60 top-1/2 -translate-y-1/3 left-0 px-4 md:px-8 lg:px-10 w-full flex flex-col gap-5 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Unlock Your Data's Potential <br className="hidden sm:block"  />
          From Complex Data <br className="hidden sm:block"  />
          To Actionable Insights Instantly
        </h1>
        <span className="text-sm sm:text-lg lg:text-xl font-normal">
          The AI-powered BI tool that speaks your language. <br className="hidden sm:block" />
          Connect, query in human language, and visualize your data across
          platforms.
        </span>
        <div className="flex gap-5 flex-col sm:flex-row items-center">
          <button className="bg-blue-500 px-10 sm:py-5 py-3 text-white rounded-lg cursor-pointer">
            Download for MacOS
          </button>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-slate-300 text-sm">Supported on all platforms -</span>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <FaWindows className="w-6 h-6"/>
                <span>Windows</span>
                </div>
              <div className="flex flex-col items-center">
                <FaApple className="w-6 h-6"/>
                <span>MacOS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux className="w-6 h-6"/>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl mx-auto w-1/2 min-w-[300px] h-1/2 absolute -right-5 top-20 overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 z-50 bg-gradient-to-b from-black/0 dark:to-black"></div>
        <Compare
          firstImage="/Get.png"
          secondImage="/Ask.png"
          firstImageClassName="object-cover object-top w-full"
          secondImageClassname="object-cover object-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}

export default HeroSection;
