import { truncate } from "../utils/truncate";
import TradingViewWidget from "./TradeingViewChart";

/* eslint-disable react/prop-types */
const CryptoChart = ({ cryptoCoinData }) => {
  return (
    <div>
      <div className="flex items-start gap-8 pb-6 border-b-2">
        <div className="block">
          <p className="text-3xl font-semibold">${cryptoCoinData.usd}</p>
          <p className="text-base leading-7 font-medium">
            ₹ {cryptoCoinData.inr}
          </p>
        </div>
        <div className="flex items-center gap-3  px-2 py-1 ">
          <span
            className={`${
              cryptoCoinData.usd_24h_change < 0
                ? "text-red-500 bg-red-100 "
                : "text-emerald-500 bg-emerald-100"
            }  px-1 py-0 rounded-sm flex items-center gap-2 text-base `}
          >
            {cryptoCoinData.usd_24h_change < 0 ? (
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.47173 8.99995L0.0284022 0.961277L11.0281 1.03902L5.47173 8.99995Z"
                  fill="#B01414"
                />
              </svg>
            ) : (
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-500"
              >
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
              </svg>
            )}
            {truncate(cryptoCoinData?.usd_24h_change) ?? 2.5} %
          </span>
          <span>(24H)</span>
        </div>
      </div>

      <div className="pt-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="pb-2 font-bold">Bitcoin Price Chart (USD)</p>
          <ul className="flex gap-4 font-bold text-xs text-gray-500 items-center">
            <li>1H</li>
            <li className="text-blue-500 px-2 py-1 bg-blue-100 rounded-xl">
              24H
            </li>
            <li>7D</li>
            <li>1M</li>
            <li>3M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>ALL</li>
          </ul>
        </div>
        <div className="h-full">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;
