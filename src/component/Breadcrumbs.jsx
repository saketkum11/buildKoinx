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
  const breadLength = breadCrumbList.length;
  console.log(breadCrumbList.length);
  return (
    <ul className="flex gap-2 pt-6 pb-4 ">
      {breadCrumbList.map((item, index) => {
        console.log(item, index);
        return (
          <>
            <li className="flex ">
              <span
                className={`${
                  breadLength - index !== 1
                    ? "text-black font-bold"
                    : "text-zinc-400"
                }text-sm mr-2`}
              >
                {item.label}
              </span>
              {breadLength - index === 1 ? (
                " "
              ) : (
                <span className="text-zinc-400 text-sm">{item.tags}</span>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
