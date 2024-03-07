/* eslint-disable react/prop-types */
import { truncate } from "../utils/truncate";

const TableDesriptionTrending = ({ coin }) => {
  const priceChangeedIsNegative = truncate(
    coin.data.price_change_percentage_24h.btc
  );
  return (
    <td>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <img src={coin.small} alt={coin.name} className="w-6 rounded-full" />
          <span className="text-black">
            {coin.name}({coin.symbol})
          </span>
        </div>
        <div
          className={` ${
            priceChangeedIsNegative < 0 ? "bg-red-100" : "bg-emerald-100"
          } flex items-center gap-2 px-2 py-1 rounded-md`}
        >
          <div>
            {priceChangeedIsNegative < 0 ? (
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
              >
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
              </svg>
            )}
          </div>
          <span
            className={
              priceChangeedIsNegative < 0 ? "text-red-500" : "text-emerald-500"
            }
          >
            {truncate(coin.data.price_change_percentage_24h.btc)}%
          </span>
        </div>
      </div>
    </td>
  );
};

export default TableDesriptionTrending;
