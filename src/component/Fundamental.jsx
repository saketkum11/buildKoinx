const Fundamental = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-start items-center gap-2">
        <span className="text-2xl font-bold text-left text-gray-700">
          Fundamentals
        </span>
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_615)">
              <path
                d="M10.04 1.66675C5.44 1.66675 1.70667 5.40008 1.70667 10.0001C1.70667 14.6001 5.44 18.3334 10.04 18.3334C14.64 18.3334 18.3733 14.6001 18.3733 10.0001C18.3733 5.40008 14.64 1.66675 10.04 1.66675ZM10.8733 14.1667H9.20667V9.16675H10.8733V14.1667ZM10.8733 7.50008H9.20667V5.83341H10.8733V7.50008Z"
                fill="#ABB9BF"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_615">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.039978)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <table className="w-full font-bold mt-1">
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Bitcoin Price</td>
          <td>$16,815.46</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">24h Low / 24h High</td>
          <td>$16,382.07 / $16,874.12</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">7d Low / 7d High</td>
          <td>$16,382.07 / $16,874.12</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Trading Volume</td>
          <td>$23,249,202,782</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Trading Volume</td>
          <td>$23,249,202,782</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Trading Volume</td>
          <td>$23,249,202,782</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Market Cap Rank</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Market Cap </td>
          <td>$323,507,290,047</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Market Cap Dominance </td>
          <td>38.343%</td>
        </tr>
        <tr className="flex justify-between border-b border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">Volume / Market Cap </td>
          <td className="text-sm">0.0718</td>
        </tr>
        <tr className="flex justify-between border-b items-center border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">All-Time High</td>
          <td>
            <div className="flex justify-end gap-2">
              <span>$69,044.77 </span>
              <span className="text-red-600"> -75.6%</span>
            </div>

            <p className="text-xs">Nov 10, 2021 (about 1 year)</p>
          </td>
        </tr>
        <tr className="flex justify-between border-b items-center border-gray-400 border-solid py-3 text-sm">
          <td className="text-gray-400 ">All-Time Low</td>
          <td>
            <div className="flex justify-end gap-2">
              <span>$69,044.77 </span>
              <span className="text-green-600"> 75.6%</span>
            </div>

            <p className="text-xs">Nov 10, 2021 (about 1 year)</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Fundamental;
