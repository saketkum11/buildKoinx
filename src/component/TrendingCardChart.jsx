/* eslint-disable react/prop-types */
import { truncate } from "../utils/truncate";
const TrendingCardChart = ({ coin }) => {
  const priceChangeedIsNegative = truncate(
    coin.data.price_change_percentage_24h.btc
  );
  return (
    <li className="border rounded-lg px-2 py-2   min-w-72 md:max-w-40  border-gray-200 shadow-sm border-solid">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <div>
            <img src={coin.small} className="w-6 rounded-full" alt="" />
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-xs">{coin.symbol}</span>
            <span
              className={` ${
                priceChangeedIsNegative < 0
                  ? "bg-red-100 text-red-500"
                  : "bg-emerald-100 text-emerald-500"
              } flex items-center gap-2 px-2 py-1 rounded-lg`}
            >
              {priceChangeedIsNegative < 0
                ? `${priceChangeedIsNegative}%`
                : `+${priceChangeedIsNegative}%`}
            </span>
          </div>
        </div>
        <p className="font-bold text-base">{coin.data.price}</p>
        <div className="flex justify-center">
          <img src={coin.data.sparkline} alt="" className="w-36 " />
        </div>
      </div>
    </li>
  );
};

export default TrendingCardChart;
("ml-1 font-bold text-xs text-emerald-500");
