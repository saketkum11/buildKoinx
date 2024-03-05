import { useState } from "react";

const Tab = () => {
  const [tabList, setTabList] = useState([
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ]);
  setTabList;
  const listTab = "Overview";
  return (
    <ul className="flex items-center overflow-auto gap-8 font-medium text-base w-full">
      {tabList.map((tab) => {
        return (
          <>
            <li
              className={
                tab === listTab
                  ? `border-b-2 flex-1 border-blue-800 border-solid text-blue-800 py-4`
                  : `flex-1 `
              }
              key={tab}
            >
              <span className="flex flex-nowrap">{tab}</span>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Tab;
