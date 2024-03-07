/* eslint-disable react/prop-types */
import React from "react";
import { truncate } from "../utils/truncate";

const TableDesriptionTrending = ({ coin }) => {
  return (
    <td>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <img src={coin.small} alt={coin.name} className="w-6 rounded-full" />
          <span className="text-black">
            {coin.name}({coin.symbol})
          </span>
        </div>
        <div className="">
          <div>
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
            </svg>
          </div>
          <span>{truncate()}</span>
        </div>
      </div>
    </td>
  );
};

export default TableDesriptionTrending;
