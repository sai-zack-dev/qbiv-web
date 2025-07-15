import { cn } from "@/lib/utils";
import {
  IconRobot,
  IconChartBar,
  IconSettingsCog,
  IconCode,
  IconDeviceDesktop,
  IconSourceCode
} from "@tabler/icons-react"

export default function KeyFeatures() {
  const features = [
    {
      title: "AI-Powered Query Builder",
      description:
        "Generate queries instantly using natural language with multi-language support.",
      icon: <IconRobot />,
    },
    {
      title: "100+ Chart Types Supported",
      description:
        "Choose from a wide variety of chart types, from bar to radar and beyond.",
      icon: <IconChartBar />,
    },
    {
      title: "Easy Customize Chart",
      description:
        "Modify chart colors, labels, axis, and styles with ease.",
      icon: <IconSettingsCog />,
    },
    {
      title: "Form-based Query Builder",
      description: "Build SQL queries using an intuitive, no-code form interface.",
      icon: <IconCode />,
    },
    {
      title: "Offline-first Desktop App",
      description: "Use QBIV anytime, anywhere — no internet connection required.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "Free & Open Source",
      description:
        "Use it without limits — QBIV is free to use and fully open-source.",
      icon: <IconSourceCode />,
    },
  ];
  return (
      <div className="relative max-w-7xl mx-auto pt-25 px-4 md:px-8 lg:px-10">
        
        <h2 className="text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Explore QBIV's Powerful Features
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg">
          From connecting data to visualizing results, everything is streamlined
          into just 3 intuitive steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
