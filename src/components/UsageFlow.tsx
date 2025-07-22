import { Timeline } from "@/components/ui/timeline";

export function UsageFlow() {
  const data = [
    {
      title: "Connect",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Connect data from popular sources like MySQL, CSV, or Excel
            files. QBIV handles the setup so you can focus on what
            matters—insights, not configurations.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              src="/sql-connection.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <img
              src="/excel-connection.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Ask or Build",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Ask the AI assistant to describe what data you want in easy human language.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
            <img
              src="ai-query1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
            <img
              src="ai-query2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
          </div>
          <hr />
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-5">
            Or, use the form-based builder for full control over tables, filters, and conditions. Whether you're a beginner or a pro, QBIV adapts to your comfort level.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              src="manual-query1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
            <img
              src="manual-query2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Generate",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Transform your query results into interactive charts and dashboards. Then export them as PNG, Excel, or CSV to share insights with others or include them in reports.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              src="select-chart.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
            <img
              src="config-chart.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-44 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="flow" className="relative w-full overflow-clip bg-gradient-to-b from-white/0 dark:via-black via-white to-black/0">
      <div className="max-w-7xl mx-auto pt-25 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Get Insights in 3 Simple Steps
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg">
          From connecting data to visualizing results, everything is streamlined
          into just 3 intuitive steps.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
