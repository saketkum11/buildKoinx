import { useTrending } from "../context/TrendingContext";
import TrendingCardChart from "./TrendingCardChart";
const Cryptos = () => {
  const { trendingData } = useTrending();
  const handleRightCarousel = () => {
    console.log(trendingData.length);
  };
  const handleLeftCarousel = () => {};
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-left ">You May Also Like</h2>
      <div className="my-4 px-4 relative">
        <ul className="flex gap-4  overflow-x-auto relative">
          {[...trendingData].map((trendindItem) => {
            const { item } = trendindItem;
            return (
              <>
                <TrendingCardChart key={item.coin_id} coin={item} />
              </>
            );
          })}
        </ul>
        <button
          onClick={handleRightCarousel}
          className="absolute right-0 top-16"
        >
          <div className="flex justify-center items-center bg-white w-8 h-8 rounded-full border">
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.94238 5.56772C5.94238 5.70922 5.88308 5.84482 5.77798 5.94382L0.934181 10.5081C0.718081 10.7117 0.371281 10.7083 0.159581 10.5006C-0.0522188 10.2929 -0.0487188 9.95942 0.167381 9.75592L4.61198 5.56772L0.167381 1.37962C-0.0487188 1.17602 -0.0522188 0.842622 0.159581 0.634822C0.371281 0.427122 0.718081 0.423721 0.934181 0.627321L5.77798 5.19162C5.88308 5.29062 5.94238 5.42622 5.94238 5.56772Z"
                fill="#171717"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={handleLeftCarousel}
          className="absolute left-0  top-16"
        >
          <div className="flex justify-center items-center bg-white w-8 h-8 rounded-full  border ">
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00293159 5.56772C0.00293159 5.70922 0.0622315 5.84482 0.167332 5.94382L5.01113 10.5081C5.22723 10.7117 5.57403 10.7083 5.78573 10.5006C5.99753 10.2929 5.99403 9.95942 5.77793 9.75592L1.33333 5.56772L5.77793 1.37962C5.99403 1.17602 5.99753 0.842622 5.78573 0.634822C5.57403 0.427122 5.22723 0.423721 5.01113 0.627321L0.167332 5.19162C0.0622315 5.29062 0.00293159 5.42622 0.00293159 5.56772Z"
                fill="#171717"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cryptos;
