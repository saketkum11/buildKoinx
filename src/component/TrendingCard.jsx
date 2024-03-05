const TrendingCard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-left ">Trending Coins (24h)</h2>
      <table className="w-full mt-4">
        <tr className="w-full flex justify-between">
          <td>
            <div className="flex gap-2">
              <div className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.0002"
                    cy="12.0002"
                    r="12.0002"
                    fill="#5A7BC6"
                  />
                  <path
                    d="M11.9335 4.45654L11.8323 4.80025L11.8323 14.7729L11.9335 14.8739L16.5626 12.1376L11.9335 4.45654Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M11.9396 4.45654L7.31042 12.1376L11.9396 14.8739L11.9396 10.0334V4.45654Z"
                    fill="white"
                  />
                  <path
                    d="M11.9336 15.7505L11.8765 15.8201L11.8765 19.3725L11.9336 19.5389L16.5655 13.0156L11.9336 15.7505Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M11.9396 19.5389V15.7505L7.31042 13.0156L11.9396 19.5389Z"
                    fill="white"
                  />
                  <path
                    d="M11.9351 14.8741L16.5642 12.1378L11.9351 10.0337V14.8741Z"
                    fill="#8198EE"
                  />
                  <path
                    d="M7.31042 12.1378L11.9396 14.8741V10.0337L7.31042 12.1378Z"
                    fill="#C1CCF7"
                  />
                </svg>
              </div>
              <span>Ethereum(ETH)</span>
            </div>
          </td>
          <td>
            <div className="flex items-center gap-2 bg-emerald-100 px-2 py-1 rounded-md text-emerald-500">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
              </svg>

              <span className="text-base">2.25%</span>
            </div>
          </td>
        </tr>
        <tr className="w-full flex justify-between mt-4">
          <td>
            <div className="flex gap-2">
              <div className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="24" height="24" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_45011_89"
                        transform="scale(0.015625)"
                      />
                    </pattern>
                    <image
                      id="image0_45011_89"
                      width="64"
                      height="64"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <span>Bitconin(BTC)</span>
            </div>
          </td>
          <td className="">
            <div className="flex items-center gap-2 bg-emerald-100 px-2 py-1 rounded-md text-emerald-500">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
              </svg>

              <span className="text-base">4.25%</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TrendingCard;
