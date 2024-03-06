const CryptoChart = () => {
  return (
    <div>
      <div className="flex items-start gap-8 pb-6 border-b-2">
        <div className="block">
          <p className="text-3xl font-semibold">$16,953.04</p>
          <p className="text-base leading-7 font-medium">₹ 13,42,343</p>
        </div>
        <div className="flex items-center gap-3  px-2 py-1 ">
          <span className="text-emerald-500 bg-emerald-100 px-1 py-0 rounded-sm flex items-center gap-2 text-base ">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
            </svg>
            2.5%
          </span>
          <span>(24H)</span>
        </div>
      </div>

      <div className="pt-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="pb-2 font-bold">Bitcoin Price Chart (USD)</p>
          <ul className="flex gap-2 font-bold text-xs text-gray-500">
            <li>1H</li>
            <li>24H</li>
            <li>7D</li>
            <li>1M</li>
            <li>3M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>ALL</li>
          </ul>
        </div>
        <div>chart</div>
      </div>
    </div>
  );
};

export default CryptoChart;
