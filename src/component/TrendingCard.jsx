/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTrending } from "../context/TrendingContext";
import TableDesriptionTrending from "./TableDesriptionTrending";
const TrendingCard = ({ coin }) => {
  const { trendingData } = useTrending();
  const dataofCoins = [...trendingData].slice(0, 3);
  console.log("trending", trendingData);
  return (
    <div>
      <h2 className="text-2xl font-bold text-left ">Trending Coins (24h)</h2>
      <table className="w-full mt-4">
        <tr className="w-full flex flex-col justify-between gap-4">
          {[...dataofCoins].map((trendindItem) => {
            const { item } = trendindItem;

            return (
              <>
                <TableDesriptionTrending key={item.coin_id} coin={item} />
              </>
            );
          })}
        </tr>
      </table>
    </div>
  );
};

export default TrendingCard;
