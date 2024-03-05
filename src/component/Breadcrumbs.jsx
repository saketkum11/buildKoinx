import { useState } from "react";

const Breadcrumbs = () => {
  const [breadCrumbList, setBreadCrumbList] = useState([
    {
      label: "Cryptocurency",
      tags: ">>",
    },
    {
      label: "Bitcoin",
      tags: ">>",
    },
  ]);
  setBreadCrumbList;
  return (
    <ul className="flex gap-2 pt-6 pb-4 ">
      {breadCrumbList.map((item) => {
        return (
          <>
            <li className="flex ">
              <span className="text-zinc-400 text-sm mr-2">{item.label}</span>
              <span className="text-zinc-400 text-sm">{item.tags}</span>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
