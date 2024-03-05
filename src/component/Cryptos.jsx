const Cryptos = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-left ">You May Also Like</h2>
      <div className="my-4 ">
        <ul className="flex gap-2 overflow-x-auto">
          <li className="border rounded-lg px-2 py-2 max-w-40 border-gray-200 shadow-sm border-solid">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      x="0.723083"
                      y="0.723389"
                      width="16.4"
                      height="16.4"
                      rx="8.2"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_57_911"
                          transform="scale(0.0192308)"
                        />
                      </pattern>
                      <image
                        id="image0_57_911"
                        width="52"
                        height="52"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAACEVJREFUaEPlWn1sVeUZ/z3nnnNvWyhDWEuok+m2jEZ674WhbAhqwFJqrFuaJbANk21ZgtFlgnNTQHCdnfixLYJZWCRZtiXihsnCHDX9oGLAYY3gbHuLqft0MEvaysd62/t1Pp7lfc/96Mdt773n3ErMzh/Nvb3nfd7n9z7fz/MSivS8+cLn5i1ZOCdQ6sEqlfAFYq4GUxUT5gNcAhCBESHCFYAvmET9bHF3wqI3/zoQ61n7nffCxWCF3BB5/vmVWuOnEqtLNeWrAK8n0GcAlHEBRAmIMOEfIDp+JUJHmluUNw4efFsvgMSEVx0Bamq60fu9VVqjptL9CvFqZmhOGUitE4wwwTCZTyV0OnDgtP7HpqZ3E4XSLRjQcEtwnVfDjz2EWwuRRKGMmcwndZ2aKhp6Xitkbd6A3vn18vnXX4smDfxdBtRCNnH6LhEM3cIv3x+gx1Z8u/tKPnTyAvT+y8EVC0r5oAK6aTalko1hsjk8PZygrTfc1d2dC1ROQBfbAvUa4bdEVJmL2Gz+zuBB3cK3Ftb3ts20z4yARjqDDQrjEDPmzSaz+dImYMRSsGVebU/LdGumBfTfzkC9h+lwUcCwZe9PSr68T/seKRxOmLx5wcZQa1YVzfbPpM20EmiRaw7YBKlzJRk2RgHyuCfJPHQpRvXXf6XnncnEpkjo3y3+az7ppQ4LdJP7nQ1ALUeJ/ylJKh7aCTZGAHLvJBXwmQ8TXPfphtDl8XxOARTuCO4nwgPs1p1xEkxNM9TKWrmnMdSJeN8esBF2DUoGYuZ95Rt7H5wW0HBbcF2pBx3MLuOMBDMXJTV7oVaunyBoY+g4Yn27AKl+7iQl4lTURF1FfSb4piUk0pntq9VjHqLbXKkaG9JmfP4noVasy0rKGH4tqX7uQVnMrz/bZdSm0qQ0oIttNZt8iuewK01Lq9kTUyQzGZmQVLzvUdfqJwJvwuCvL7iz9/fSkYo/LzXd6K2/Re0g0O2OpSMlUw5fzU+gVt6RFxlj6FXE+3a7BsVMJ9u6Ehs2Nb2bkICG/+S/vbRU6XRsO2mbEZLJD0wKsQAV63vUlU0RQY8krNrKu0InJaDRzuX7wLzNkWebwQGkmNbPvSA/akvuyW5TUv12JeOUU0fBz5XX9W6j/peXll87x3cKFvnz0pPxL7FlOwCpZhO9WQbMIcT7n5ZffdWPQFuyZVpQsb7dSUk5yCiI+84ORtbQUGtwbZkH7QyUFQZIuA9CybJmqFV3Z12qn3sR8feeAcalPr6lD0Nb8o3soAaOInZ2j4gwKfPOmyVR+UZMbKTLbcGHNAU/c+Td2IS6aAN8Nc0gz5wJm2fAmJl0h+3P2UCxOSaDrjF4zHF6xCYeovCxwCEwZT+ybOcjTlvYjSKqbgLMODyL7kCJ/2mQaoPSzx1KSobthNRKtgjEGrGeKAnKVj82xhAPPQJj8FXA47MlJNaIwFtIQkv8Io12BM4waGVeshWu2XuNTGX0gaOAFbdP04zbkvLvhXGhBfH+J0VekgRj/yYeefqKLwOqeifUxQ2Ih3bZvwkwQoqKD1rV3TJV4sTlvDMKAr9Nox3BDxioygloUtC0pfBTmwEBig0o5dWwIucBM2qDkdKrRWngGUk+1vswjMHOJOMW4CmFUnYdrHC/zXRaJX8onUehwZeAAQq3B8dAORyC2EjmZplEM6NaApRQI8VWRVkekJSep7IWJf69MuDaqhW2pTHUaUtKqJYEIcDYNHxLbTCZOJVKaPMqPaIU7gjO7A/ERuocWQKoFVMTCf38YcT7RXkgirhkJmXpUJN2JaQw4TGjiKXsRdqhhApAga96B7TrNk9RFmP4BGKhHYAxlsOmmCncEbCtdLrnYwUIEBKKAJh0jJPQXXWVeyyZ7+WodkWruRCnIJNP/xNQK9YnXfMsO4Xh44iH8s/IpVMontuulTWQM7e9c5z3c+m2ixdYn0o3QwoPrKOIh3YUJ7COtAa/Tx78PGccypo1JFOfZc3pLCH1WsGpj8gWzjpPfYRX0y38gIaOBteW+VwkpyI2LS5OcqpfOCrzOVfJqRhULVtUdgpMNQVLSZQP2lz4lhWpfDi7G9BFAHVUPoQ+iMTXyPgT7gjsB+iBggHZ4X/aDk9G/Wa3wJNRlGj/3Nru7RLQ0Cv+28q8sgR3Nri6+iW4EY1atRVfDp3INEnWaJ3EuNWRlJKSumpNEvCJtjeMunSTRPBzqTXwNa9Kv3PUV0idwtVoY4kWs2VuXljf95JgY0Kj8cHVaqdC5FxKaUnlbjTGQjtddXpSZyhGl/u6jA1TGo3ihY9lKziOuvFz2KnN+vbAs6TQdleql/Z+5RNqqKI260kWxc+V1/VsG2/32ccpPqXdYtzs2EGMsylS58kcTzzFHKcQ4fTfRqluRePEYXLWOkgOvEq4rShz1dkYeIEHL44p9Tc0Th0iT1vYXWr33+lVxEiS7PrZzVPMkSQwYhI2fWJDT3s2lv5/hsYp9HKsr+A3RZm3upAyMw/pjG+6Guun9v/XK8uXL/TyQYVxs6MOqwsgQoUs8JlLUdqabUg8mXTOixepBfJqTBU/rim4z/HYpUBg9tUY/sX5D/nxwJaJw+HpSOUNKEVAXF7SNG5yPbqcAZxgyrTwesLAj2bt8tL4/cU89v5VWqNX5fs8RGsgLjO51EV5sgTdsKgrYfKBA2/pRz6S62XjgW3dulLb02DdMr+MG8G8nhifLWQsk1SPCIP/CdDxqG794ch/vF333vsRXwDMpi1//tXS8s9XlQQ1whcVD1Z4xBVN0GJmzLdbzcxgisormswXGNRvEP4SNfHWuYtjvV+65+8jBZpY1tf/Bzi4oaPmKUxzAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-xs">BNB</span>
                  <span className="ml-1 font-bold text-xs text-emerald-500">
                    +0.52%
                  </span>
                </div>
              </div>
              <p className="font-bold text-base">$319.34</p>
              <div>
                <svg
                  width="127"
                  height="39"
                  viewBox="0 0 127 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_57_919)">
                    <g clipPath="url(#clip1_57_919)">
                      <g clipPath="url(#clip2_57_919)">
                        <mask
                          id="mask0_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_57_919)">
                          <path
                            d="M19.7319 38.5388L20.2541 37.0022"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask1_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask1_57_919)">
                          <path
                            d="M20.2542 37.0022L20.7765 38.1224"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask2_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_57_919)">
                          <path
                            d="M20.7765 38.1223L21.3063 36.4873"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask3_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask3_57_919)">
                          <path
                            d="M21.3063 36.4873L21.8286 36.7976"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask4_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_57_919)">
                          <path
                            d="M21.8286 36.7979L22.3508 30.2278"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask5_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask5_57_919)">
                          <path
                            d="M22.3509 30.2277L22.8807 24.9216"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask6_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_57_919)">
                          <path
                            d="M22.8807 24.9216L23.403 24.8384"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask7_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask7_57_919)">
                          <path
                            d="M23.403 24.8382L23.9253 24.4294"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask8_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_57_919)">
                          <path
                            d="M23.9253 24.4294L24.4551 24.6641"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask9_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask9_57_919)">
                          <path
                            d="M24.4551 24.6643L24.9774 22.7114"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask10_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask10_57_919)">
                          <path
                            d="M24.9774 22.7114L25.4997 25.5045"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask11_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask11_57_919)">
                          <path
                            d="M25.4997 25.5045L26.022 24.5356"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask12_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask12_57_919)">
                          <path
                            d="M26.0219 24.5356L26.5518 22.5374"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask13_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask13_57_919)">
                          <path
                            d="M26.5518 22.5373L27.0741 21.2732"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask14_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask14_57_919)">
                          <path
                            d="M27.0741 21.2735L27.5964 21.0615"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask15_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask15_57_919)">
                          <path
                            d="M27.5964 21.0615L28.1263 23.1582"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask16_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask16_57_919)">
                          <path
                            d="M28.1262 23.1581L28.6485 17.8672"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask17_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask17_57_919)">
                          <path
                            d="M28.6484 17.8668L29.1707 12.6365"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask18_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask18_57_919)">
                          <path
                            d="M29.1708 12.6366L29.7006 11.1909"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask19_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask19_57_919)">
                          <path
                            d="M29.7006 11.1909L30.2229 12.0765"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask20_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask20_57_919)">
                          <path
                            d="M30.2228 12.0767L30.7451 13.0001"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask21_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask21_57_919)">
                          <path
                            d="M30.7452 13L31.275 10.7141"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask22_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask22_57_919)">
                          <path
                            d="M31.275 10.714L31.7973 9.13965"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask23_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask23_57_919)">
                          <path
                            d="M31.7973 9.13965L32.3196 14.2867"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask24_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask24_57_919)">
                          <path
                            d="M32.3195 14.2869L32.8494 12.1599"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask25_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask25_57_919)">
                          <path
                            d="M32.8494 12.1599L33.3717 12.9471"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask26_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask26_57_919)">
                          <path
                            d="M33.3718 12.9472L33.894 9.54102"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask27_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask27_57_919)">
                          <path
                            d="M33.8939 9.54102L34.4162 9.51074"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask28_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask28_57_919)">
                          <path
                            d="M34.4163 9.51083L34.9461 8.7312"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask29_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask29_57_919)">
                          <path
                            d="M34.9461 8.73093L35.4684 2.61499"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask30_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask30_57_919)">
                          <path
                            d="M35.4684 2.61499L35.9907 2.75881"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask31_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask31_57_919)">
                          <path
                            d="M35.9906 2.75885L36.5204 2.2063"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask32_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask32_57_919)">
                          <path
                            d="M36.5205 2.2063L37.0428 10.1767"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask33_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask33_57_919)">
                          <path
                            d="M37.0428 10.1768L37.5651 8.10278"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask34_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask34_57_919)">
                          <path
                            d="M37.565 8.10289L38.0948 7.1416"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask35_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask35_57_919)">
                          <path
                            d="M38.0948 7.14145L38.6171 6.36938"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask36_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask36_57_919)">
                          <path
                            d="M38.6172 6.36943L39.1395 5.95312"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask37_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask37_57_919)">
                          <path
                            d="M39.1395 5.95312L39.6693 6.10451"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask38_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask38_57_919)">
                          <path
                            d="M39.6693 6.10449L40.1915 11.9706"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask39_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask39_57_919)">
                          <path
                            d="M40.1916 11.9707L40.7139 12.9396"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask40_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask40_57_919)">
                          <path
                            d="M40.7139 12.9396L41.2437 11.6604"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask41_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask41_57_919)">
                          <path
                            d="M41.2437 11.6604L41.766 13.4543"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask42_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask42_57_919)">
                          <path
                            d="M41.7659 13.4541L42.2882 15.5962"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask43_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask43_57_919)">
                          <path
                            d="M42.2883 15.5962L42.8105 17.8745"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask44_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask44_57_919)">
                          <path
                            d="M42.8105 17.8749L43.3403 17.0498"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask45_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask45_57_919)">
                          <path
                            d="M43.3404 17.0496L43.8627 14.2793"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask46_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask46_57_919)">
                          <path
                            d="M43.8626 14.2793L44.3849 14.6502"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask47_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask47_57_919)">
                          <path
                            d="M44.3849 14.6504L44.9147 16.3232"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask48_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask48_57_919)">
                          <path
                            d="M44.9148 16.323L45.4371 17.1026"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask49_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask49_57_919)">
                          <path
                            d="M45.4371 17.1028L45.9593 19.5476"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask50_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask50_57_919)">
                          <path
                            d="M45.9593 19.5476L46.4891 21.0009"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask51_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask51_57_919)">
                          <path
                            d="M46.4892 21.0008L47.0115 18.238"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask52_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask52_57_919)">
                          <path
                            d="M47.0114 18.2382L47.5337 17.239"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask53_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask53_57_919)">
                          <path
                            d="M47.5338 17.239L48.0636 17.6553"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask54_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask54_57_919)">
                          <path
                            d="M48.0636 17.6553L48.5859 15.3997"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask55_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask55_57_919)">
                          <path
                            d="M48.5859 15.3997L49.1082 17.519"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask56_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask56_57_919)">
                          <path
                            d="M49.1082 17.519L49.638 18.5106"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask57_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask57_57_919)">
                          <path
                            d="M49.6379 18.5105L50.1602 23.2488"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask58_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask58_57_919)">
                          <path
                            d="M50.1602 23.249L50.6825 24.1043"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask59_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask59_57_919)">
                          <path
                            d="M50.6825 24.104L51.2048 23.7937"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask60_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask60_57_919)">
                          <path
                            d="M51.2048 23.7937L51.7347 21.47"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask61_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask61_57_919)">
                          <path
                            d="M51.7346 21.4701L52.2569 20.4028"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask62_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask62_57_919)">
                          <path
                            d="M52.2569 20.4028L52.7792 22.3784"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask63_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask63_57_919)">
                          <path
                            d="M52.7792 22.3785L53.309 22.0833"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask64_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask64_57_919)">
                          <path
                            d="M53.3091 22.0833L53.8314 23.0445"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask65_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask65_57_919)">
                          <path
                            d="M53.8313 23.0446L54.3536 21.3718"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask66_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask66_57_919)">
                          <path
                            d="M54.3536 21.3717L54.8834 20.3574"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask67_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask67_57_919)">
                          <path
                            d="M54.8835 20.3574L55.4058 18.8057"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask68_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask68_57_919)">
                          <path
                            d="M55.4058 18.8057L55.928 21.6517"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask69_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask69_57_919)">
                          <path
                            d="M55.928 21.6518L56.4578 19.7671"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask70_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask70_57_919)">
                          <path
                            d="M56.4578 19.767L56.9801 18.291"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask71_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask71_57_919)">
                          <path
                            d="M56.9801 18.291L57.5024 18.2305"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask72_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask72_57_919)">
                          <path
                            d="M57.5024 18.2303L58.0323 17.6021"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask73_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask73_57_919)">
                          <path
                            d="M58.0322 17.6021L58.5545 17.1631"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask74_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask74_57_919)">
                          <path
                            d="M58.5545 17.1631L59.0768 19.8577"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask75_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask75_57_919)">
                          <path
                            d="M59.0768 19.8577L59.5991 20.5389"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask76_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask76_57_919)">
                          <path
                            d="M59.5991 20.539L60.1289 19.3582"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask77_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask77_57_919)">
                          <path
                            d="M60.1289 19.3585L60.6512 18.541"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask78_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask78_57_919)">
                          <path
                            d="M60.6512 18.5409L61.1735 17.3752"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask79_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask79_57_919)">
                          <path
                            d="M61.1735 17.3752L61.7034 18.4198"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask80_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask80_57_919)">
                          <path
                            d="M61.7033 18.4196L62.2256 16.6636"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask81_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask81_57_919)">
                          <path
                            d="M62.2255 16.6636L62.7478 16.9891"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask82_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask82_57_919)">
                          <path
                            d="M62.7479 16.9891L63.2777 16.5425"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask83_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask83_57_919)">
                          <path
                            d="M63.2777 16.5425L63.8 17.3675"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask84_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask84_57_919)">
                          <path
                            d="M63.8 17.3674L64.3223 18.8888"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask85_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask85_57_919)">
                          <path
                            d="M64.3223 18.8892L64.8521 19.1465"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask86_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask86_57_919)">
                          <path
                            d="M64.8521 19.1465L65.3744 19.6915"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask87_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask87_57_919)">
                          <path
                            d="M65.3744 19.6912L65.8967 18.9722"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask88_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask88_57_919)">
                          <path
                            d="M65.8966 18.9722L66.4265 19.9486"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask89_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask89_57_919)">
                          <path
                            d="M66.4265 19.9487L66.9488 18.1472"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask90_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask90_57_919)">
                          <path
                            d="M66.9489 18.1473L67.4711 17.7007"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask91_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask91_57_919)">
                          <path
                            d="M67.4711 17.7007L68.0009 17.4434"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask92_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask92_57_919)">
                          <path
                            d="M68.0009 17.4434L68.5231 17.5796"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask93_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask93_57_919)">
                          <path
                            d="M68.5232 17.5797L69.0455 16.2097"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask94_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask94_57_919)">
                          <path
                            d="M69.0455 16.2095L69.5677 13.8176"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask95_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask95_57_919)">
                          <path
                            d="M69.5677 13.8176L70.0976 13.7192"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask96_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask96_57_919)">
                          <path
                            d="M70.0976 13.719L70.6199 13.5449"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask97_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask97_57_919)">
                          <path
                            d="M70.6199 13.5449L71.1422 13.9915"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask98_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask98_57_919)">
                          <path
                            d="M71.1422 13.9917L71.672 13.8782"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask99_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask99_57_919)">
                          <path
                            d="M71.6719 13.8782L72.1942 13.9463"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask100_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask100_57_919)">
                          <path
                            d="M72.1943 13.9463L72.7166 16.8075"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask101_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask101_57_919)">
                          <path
                            d="M72.7166 16.8074L73.2464 17.5416"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask102_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask102_57_919)">
                          <path
                            d="M73.2463 17.5417L73.7686 18.7755"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask103_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask103_57_919)">
                          <path
                            d="M73.7687 18.7756L74.291 18.874"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask104_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask104_57_919)">
                          <path
                            d="M74.291 18.8738L74.8208 18.8057"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask105_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask105_57_919)">
                          <path
                            d="M74.8209 18.8057L75.3431 19.5853"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask106_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask106_57_919)">
                          <path
                            d="M75.343 19.5851L75.8653 18.2983"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask107_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask107_57_919)">
                          <path
                            d="M75.8654 18.2983L76.3952 18.3589"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask108_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask108_57_919)">
                          <path
                            d="M76.3953 18.3591L76.9175 18.9041"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask109_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask109_57_919)">
                          <path
                            d="M76.9175 18.9041L77.4398 18.8586"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask110_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask110_57_919)">
                          <path
                            d="M77.4397 18.8586L77.962 21.8561"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask111_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask111_57_919)">
                          <path
                            d="M77.962 21.856L78.4919 21.4473"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask112_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask112_57_919)">
                          <path
                            d="M78.4919 21.4473L79.0142 22.7189"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask113_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask113_57_919)">
                          <path
                            d="M79.0142 22.7188L79.5364 22.0754"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask114_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask114_57_919)">
                          <path
                            d="M79.5365 22.0756L80.0663 20.4028"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask115_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask115_57_919)">
                          <path
                            d="M80.0663 20.4029L80.5886 19.6687"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask116_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask116_57_919)">
                          <path
                            d="M80.5885 19.6687L81.1108 22.9992"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask117_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask117_57_919)">
                          <path
                            d="M81.1108 22.9993L81.6407 24.5812"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask118_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask118_57_919)">
                          <path
                            d="M81.6407 24.5811L82.163 24.899"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask119_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask119_57_919)">
                          <path
                            d="M82.1629 24.8989L82.6852 25.232"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask120_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask120_57_919)">
                          <path
                            d="M82.6852 25.232L83.2151 24.3237"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask121_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask121_57_919)">
                          <path
                            d="M83.2151 24.3235L83.7374 23.9375"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask122_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask122_57_919)">
                          <path
                            d="M83.7373 23.9375L84.2596 23.6348"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask123_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask123_57_919)">
                          <path
                            d="M84.2596 23.6349L84.7894 22.1438"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask124_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask124_57_919)">
                          <path
                            d="M84.7895 22.1438L85.3118 23.4003"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask125_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask125_57_919)">
                          <path
                            d="M85.3118 23.4004L85.834 25.0126"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask126_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask126_57_919)">
                          <path
                            d="M85.834 25.0125L86.3563 24.6265"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask127_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask127_57_919)">
                          <path
                            d="M86.3563 24.6265L86.8862 24.1951"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask128_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask128_57_919)">
                          <path
                            d="M86.8862 24.1951L87.4084 24.1648"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask129_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask129_57_919)">
                          <path
                            d="M87.4084 24.1648L87.9307 22.2422"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask130_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask130_57_919)">
                          <path
                            d="M87.9307 22.2422L88.4605 22.8629"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask131_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask131_57_919)">
                          <path
                            d="M88.4606 22.8626L88.9828 22.3101"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask132_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask132_57_919)">
                          <path
                            d="M88.9828 22.3101L89.5051 22.6355"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask133_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask133_57_919)">
                          <path
                            d="M89.5051 22.6357L90.035 23.1429"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask134_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask134_57_919)">
                          <path
                            d="M90.0349 23.1429L90.5572 22.1135"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask135_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask135_57_919)">
                          <path
                            d="M90.5573 22.1135L91.0795 22.6661"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask136_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask136_57_919)">
                          <path
                            d="M91.0795 22.6659L91.6094 21.2959"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask137_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask137_57_919)">
                          <path
                            d="M91.6094 21.296L92.1317 20.8191"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask138_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask138_57_919)">
                          <path
                            d="M92.1317 20.819L92.6539 17.7156"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask139_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask139_57_919)">
                          <path
                            d="M92.6539 17.7156L93.1838 17.5793"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask140_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask140_57_919)">
                          <path
                            d="M93.1837 17.5794L93.706 16.9966"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask141_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask141_57_919)">
                          <path
                            d="M93.706 16.9967L94.2283 16.3835"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask142_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask142_57_919)">
                          <path
                            d="M94.2283 16.3835L94.7506 16.709"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask143_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask143_57_919)">
                          <path
                            d="M94.7506 16.709L95.2805 17.6854"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask144_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask144_57_919)">
                          <path
                            d="M95.2804 17.6855L95.8027 17.9732"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask145_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask145_57_919)">
                          <path
                            d="M95.8027 17.9732L96.325 17.8823"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask146_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask146_57_919)">
                          <path
                            d="M96.325 17.8822L96.8548 16.4365"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask147_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask147_57_919)">
                          <path
                            d="M96.8549 16.4365L97.3771 16.3154"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask148_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask148_57_919)">
                          <path
                            d="M97.3771 16.3154L97.8994 16.815"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask149_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask149_57_919)">
                          <path
                            d="M97.8994 16.8153L98.4292 16.187"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask150_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask150_57_919)">
                          <path
                            d="M98.4293 16.187L98.9515 17.3073"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask151_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask151_57_919)">
                          <path
                            d="M98.9515 17.307L99.4738 16.709"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask152_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask152_57_919)">
                          <path
                            d="M99.4738 16.709L100.004 20.4028"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask153_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask153_57_919)">
                          <path
                            d="M100.004 20.4028L100.526 24.74"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask154_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask154_57_919)">
                          <path
                            d="M100.526 24.7401L101.048 23.7107"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask155_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask155_57_919)">
                          <path
                            d="M101.048 23.7107L101.578 24.0362"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask156_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask156_57_919)">
                          <path
                            d="M101.578 24.0359L102.1 24.2251"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask157_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask157_57_919)">
                          <path
                            d="M102.1 24.2252L102.623 23.7332"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask158_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask158_57_919)">
                          <path
                            d="M102.623 23.7334L103.145 23.4458"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask159_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask159_57_919)">
                          <path
                            d="M103.145 23.4458L103.675 23.688"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask160_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask160_57_919)">
                          <path
                            d="M103.675 23.6878L104.197 23.2866"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask161_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask161_57_919)">
                          <path
                            d="M104.197 23.2867L104.719 22.8325"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask162_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask162_57_919)">
                          <path
                            d="M104.719 22.8326L105.249 21.8789"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask163_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask163_57_919)">
                          <path
                            d="M105.249 21.8785L105.771 21.1443"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask164_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask164_57_919)">
                          <path
                            d="M105.771 21.1443L106.294 21.659"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask165_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask165_57_919)">
                          <path
                            d="M106.294 21.6592L106.823 22.5448"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask166_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask166_57_919)">
                          <path
                            d="M106.823 22.5449L107.346 20.698"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask167_57_919"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.52 2.2063V38.5386H108.08V2.2063H19.52Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask167_57_919)">
                          <path
                            d="M107.346 20.6982L107.868 18.7983"
                            stroke="#0AB27D"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_919">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.723083 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip1_57_919">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.723083 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip2_57_919">
                      <rect
                        width="88.56"
                        height="37.8461"
                        fill="white"
                        transform="translate(19.52 0.692627)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </li>
          <li className="border rounded-lg px-2 py-2 max-w-40 border-gray-200 shadow-sm border-solid">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      x="0.984619"
                      y="0.723389"
                      width="16.4"
                      height="16.4"
                      rx="8.2"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_57_1607"
                          transform="scale(0.0192308)"
                        />
                      </pattern>
                      <image
                        id="image0_57_1607"
                        width="52"
                        height="52"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAADlZJREFUaEPVWmuMVdUV/vY+59xz5yVWnKZaUKhRBK1axcpDJD4i1j4SH6DGyK+2aoOYQo3G1iZVowXDGBWsTVprNC0KmthGg4/wUGScRpsIFtHERlptrKLAyLzuPWfv3Xxr3325M3PvzKBU7SHDnTnn3HP2t9da3/rW2ls55xwO8OBX8jxHFEXQWsu3+/v7sXXrVrz88st47bXXsHPnTrz77rvYtWsX+vr65J7m5ma0t7dj4sSJmDx5Mk455RScccYZ8tnU1CT3hGcnSXKAo/K3qwMFZIwREEopecBLL72Exx9/HM8//zzefvttlMvlYQMJ99abOw782GOPxXnnnYf58+fjzDPPrH6f7+KkHcgxZkDWWvAnjmN5PkGsWLECXV1dg97H62HgvL/eEaxKoBx0LVBabMmSJViwYIF8ldd5X/jOaODGBKh2pjZs2IBbbrkFnZ2d1WdzFjmoRgBGG0SwON8TjlmzZuG2227DOeecUwU2FmuNCoixwllnHNx4441YuXKlvICuEvx9tAEfyHW+ixbJsky+dt1112HZsmUSY2EsIz2vLqDgApwxvmDHjh247LLL8Prrr1fjh9b4FHwyJmzBxYLVTzrpJDz66KOYOnWqAA1uH2Kz9qENAfGLhUIBzz77LC6//HLs3btXHsRZ+jyP8M5x48ZhzZo1OP/886ugxgwomJaBz+DkTH0RYMLEhXcTwNq1a3HJJZc0dL9hFgpgnnnmGVx44YUChsFYG7Cfp4XCu8IYCIpjo6XqxdQgQIHN3njjDckHe/bs+VKAGQrq0EMPFZZlTA3NVVVAtATRk81mzpyJbdu2DXIzpjejNJT8s7Bw0ErDaf6tAUvB4QDJt158+NTL/52c8X+Hg+dqk+Z+wWKhEDlAK4VcOcBZOONzWnA/EgVVCdVHGLu8LSiFgJQ0SWoeGjNK+YQauxx8oWXuMZ4gKH44HC+Chg58+LmRtBavESbBEwI/+RarFAQb9sfzokWLcN999w2ykgAKYDZu3CiJjJYaSsk8FzsNQ8mjFazJ0PKN43DCxVfANkXICgpGG5jYwiYWKiJoB6ctnHKwiknTygiVdnAKcMrINY6U/xQcTOSgYcVCmbNobmnF7se7sOuxLVCRrlqKyZipg4n+7LPProJS1oqvCAjGzZYtW+rGDXEoFwORhjVltB1xHM75xV1Qxx+L3ihDqQkwBQeTGpSKJaCgYRILExkZpInKFSAEYKE0kMUlIKIdCMe7lAE9wAi4PsQ4BgX8a8FyfLC2axCg4EGzZ88WPRncTmVZ5niRdEiKpgIIWXqQyyuvrJ3J0DR+Is69aRWiScdjX7YLNo1hEwNbMDAFi7zA3x2ygkXG3xMCysUS0AZWWdAEVpvKOet/ZygqgsnQXwSOyFL85+oH8OHqTiiqesZSjb8GUBz7pZdeKuOuWojaiUKzUb6JdYTcGqQtR+OCJXejMOVE9JV64YqAiQGT5MgFjIVJc7FWlhoPKKU1BgSEd0ELaAICHN1PWwGitYWyBv2pw/goxceLfosPf7cBOo5h8nxYKISxzpgxQwhCrMQYopvVyvZheYb+5hyamr+G7/3oHrRM+Ta6TQ9UCuSFHHkC2DhHHjsBwhjKU1rIiLVyAkpLcLGDjWgNuhzjyEARoHbIIlrGYqBgcFihiD0/exDvr3wanEjjHJyrr9xDvG/evFkwCKDrr78e9957b/2cUwFTbJ6IH1zegfYpZ2Kv/QRZ0ceITTLkBQeXGPk7TxzKtFKhAjYlKAtTzGBjhzwxyOO8ahlFwogcMp3DxRrjY429v3oI7931JApRhBLJwhJQfW4MCZfsTAyqr6/PnX766di+fbvEyNASIIpiGJNjxqyrcda8n+OjgY8Rp1ZeXkpzlAtKBupiC5c42Jhul/m4SSwc3TBxyIo5TEKQFjY2IL9oVZZ4yiKHSDHHRPjgN09g552rkeoIJe2gjc9hjQCFMZ9wwgl45ZVXoDo7O93cuXNFRtT7kmLydBbF9HC0HtJeodvIJ1N6oib1eicVCpbTdKNKYiIlR5xlI+doDaFuSTServn9iEE/UEL3P/4tCdtGClHGjAfkkptH7hSQzF588UWojo4OxwqxkV6rLZ/5XIUYVlKdT6TBs4MKGPparxMGH7X38hkhicozpVjksx0si8YAZgQ8YewdHR1QCxcudA8//PAomq3esIZRx0E5IWojisSiohToBXb4pNS+LABauHAh1Ny5c90LL7xQN35CwqUrTjj8RBz5lekwysIoIGfzImJDhHFTcT0yWMQzSmKECZTu5iKfbiTPMH7IcGQ8ptCIlO8QaQtdyvDexi6oPT1ArAFDxUA9N7LLhTiaM2cO1KRJkxxbTvXkjriAimCdweyp12D+nFXo689hm3pRKmhhN8k5iRP6ZlJlMi2npHIGvycGYb6iEdIgyxkhFYsszZGllWs6R9JawL6n1mP7ottR6B1AlihYycfUDfVpu3bS2RpTra2trqenpyGgoJYVWvDdb92IOdOWom/AIWvuQ16hZq8IMgFDFnMxE6qFIUVLLiIQWofADbLUUzjVRSY5iveQMS2a25tR/vNG7Fh8B6L+AZg4gsup7RsHUTBGa2srFYWWO+lWI/YItIK2KS4+bRlmTLkWn5h9sEWLPPZ5xidRi0ys5S1F6/nEy8H7H1pI1AOpPslQKlJR0Jq0MFBKMrSML6K05mls++lykXom8u7X6CCgQF4CKAAZCVCkEhhHGk2wYGYHTpv8Q/TlPTIIulVWNOJmBFMqDHirpFQMBuWEg6fFCIif3iVdrARsnmYwKRM0k7NDKclRbG9C34N/wZs3d0AzbmXW60OqgiGwtrY2t2/fvhFcLtQznAUtmiu243HF7JU4+ehLsK/cA1tQ4kZ5oYxcBqsrwpQWokV8LEk8iXDN5TrJwsRe8xk5x08I+L5ihuLhRfTevwZv336/FJQjWYjGaGtrg5o8ebJ75513RgXEGki5CBoRrC6hYA/DlbPvxylHLUC/KsMkSmaZsz9AyxAEiULiyGGgWHE9GXQu7leqdUeJM19+5CmvW3xSLOHIQ9vw1g2/xs7fr4WSonJ/MzIADDE0adIkqDlz5jgKu1EbIZp1pENMiawccmfQEh2NqRNmAnEi5TnpWKiZnET6jowv8kjr1pOCKG4Wdkkl+fM+fo8UH2vksYVyFloUBoAU6H7zLXRvfQtKKzhfvg06Am2fddZZUFdddZV75JFHRgVEsUOJwlI4cpGvQkmlDfrXByXLVh4iikRK8PpcNyixrlixwi1durRhYg0DY550bK5TRDrfkGcp4EylOVKL4DMIC37VSyrmHv6238Ua5coAiIsHqqury9FU9ZZBBs8ye850B3jwMLA2xVfbjkISNQkDCTTW1pzNSuawdB3pbviCTlxLFEQlYYrA9ZNiNVW3v59Fo7IZYsTo/Xg3Bj75uGGcEyjF6aZNm3z5MH36dLAXV698qIISFc23F0TyuDzGd6bejLnH/xiOClLFks05KJbTflCehjk45hqh+JgleYWeqTJ4PuaPJw3EGbI0govLyFSOtvZ2bH/wbmz/4x/qkkIY87Rp0/Dqq6+OocCrIGIbS+ZdZ3AGmHfczfj+ib9EXirQwYUojC5XSolY6J1dIAY5qbnUnCGr0HZeyVlkO+atcoX5pISPWTM5lKJ+pIe0oufvndh81w0wu3dXlOpgUgjutnjxYtxzzz0eELsmIuzqtK+ChUjXbNVYl+G8Y5biom/egXxAiyWk9agz0L0YvOJiUuf48tpoJlife/wPf6+U6gm1H2neXxfdF5cQjyui/52/YdOyJRjo3iXxO1JNRAzsACljjKPZ2C0dqUnCPiPdbO6Ea3HFqXfC9beIRdgW9D02Njp8/WJCTDAe6ILSb2P+8X0GWsQrCa/hgo7zKqGEtDVF7/tbse7u61Da+361STKUOWubJGwNS5OkXC47BhRXGrjGWS8fBcudPuFKXHnqKqS94+BUPyyVuFjEg2F+oesRFP82lQCveKSwou8E+WYkS3hRCAmQFdgZyhCNK6Jn9+t46oGfoP+jf0LrIqwl0/kFsNojAHrsscekBceqW1wuNOloMiKtBRXKh+lHXIprZj2CQk/Rh4zPrzCV/q+3kmc6Xvc5a/+ntxxJwWs61lAEJHEjjZUBqJYcH+7ZhicfWox9H+1AxPaVNVB2ePkQxljbaJRSorYVTNpjW7WW7bSOZIZOnXgRZnz9MmT9vTAJ81CCyOWepn1noDp5Qs/kPGnxkqZJzZ7I2cISJuQ1KQytxJglON2Pv27+E3bv3ipgLGUO72MzYkgbK3jN+vXrpX0d2tnDmvVsgK9ataracBRpzqAPD/wMSVMQj+H74hVsPJJVHbsLnJ/9CTa4WsNmvdxfs5zCLio3UexfOeM4kkpjnQnPrws4MPvRt0Pbp3YJJZyuo5KrHRyvD6Vol4mjLjBiDLa1HCWWJOu8WjqMeTmFoILZuEhMUFxXHVW0HkzRNsqzwli44MVuL5NpwwWv8KywzPfcc8/hggsu+FIuSa5btw7z5s0bfUlyKKgnnnhCqPz/etE4gOLSBPMTLUWO7+7u/kJWwkPM0M24V4GWCXsVxrysP3TjBYUr9ypw40XYFPG/XBWvt/Fi9erVEjMMibCVZsyAamOzdmvMTTfdJGuaPMImpYMNbOjWGFLz8uXLP9vWmKFkU8skXIfl5iWyTDgO1ual2u02VAC33nrrwd+8FAY9dHsZlwHZHB+6vax2x1S93Vm1PbSQKmonkKtxXDwgGfEILnZQt5fVvnDoBkBaiuKQEuTTbADkfiJuADz33HMHbQAMG5fGsqWsdnyjbi+rl+vCtrLg77wnbNGkxbhFk62xRls0J0yYIFs0Tz75ZKlh+FksFuVVtGrYBVYv6EfL4/8FuuuicL1JnOIAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-xs">SOL</span>
                  <span className="ml-1 font-bold text-xs text-red-500">
                    -0.28%
                  </span>
                </div>
              </div>
              <p className="font-bold text-base">$109.34</p>
              <div>
                <svg
                  width="128"
                  height="39"
                  viewBox="0 0 128 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_57_1615)">
                    <g clipPath="url(#clip1_57_1615)">
                      <g clipPath="url(#clip2_57_1615)">
                        <mask
                          id="mask0_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_57_1615)">
                          <path
                            d="M19.9934 10.896L20.5157 10.9944"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask1_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask1_57_1615)">
                          <path
                            d="M20.5156 10.9941L21.0379 11.577"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask2_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_57_1615)">
                          <path
                            d="M21.038 11.577L21.5678 8.54932"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask3_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask3_57_1615)">
                          <path
                            d="M21.5677 8.54932L22.09 12.1447"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask4_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_57_1615)">
                          <path
                            d="M22.0901 12.1448L22.6124 5.27954"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask5_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask5_57_1615)">
                          <path
                            d="M22.6123 5.27954L23.1422 9.14742"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask6_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_57_1615)">
                          <path
                            d="M23.1422 9.14722L23.6645 10.8049"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask7_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask7_57_1615)">
                          <path
                            d="M23.6646 10.8052L24.1868 10.9641"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask8_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_57_1615)">
                          <path
                            d="M24.1868 10.9641L24.7166 18.3214"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask9_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask9_57_1615)">
                          <path
                            d="M24.7166 18.3213L25.2388 19.1085"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask10_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask10_57_1615)">
                          <path
                            d="M25.2389 19.1084L25.7612 23.7029"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask11_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask11_57_1615)">
                          <path
                            d="M25.7612 23.7029L26.2835 19.1008"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask12_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask12_57_1615)">
                          <path
                            d="M26.2834 19.1011L26.8133 14.4915"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask13_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask13_57_1615)">
                          <path
                            d="M26.8132 14.4915L27.3355 17.2845"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask14_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask14_57_1615)">
                          <path
                            d="M27.3356 17.2842L27.8578 14.6274"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask15_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask15_57_1615)">
                          <path
                            d="M27.8578 14.6274L28.3876 16.7241"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask16_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask16_57_1615)">
                          <path
                            d="M28.3877 16.7244L28.91 20.4333"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask17_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask17_57_1615)">
                          <path
                            d="M28.9099 20.4331L29.4322 20.7662"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask18_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask18_57_1615)">
                          <path
                            d="M29.4323 20.7659L29.9621 18.0562"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask19_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask19_57_1615)">
                          <path
                            d="M29.9622 18.0562L30.4844 24.876"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask20_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask20_57_1615)">
                          <path
                            d="M30.4844 24.876L31.0067 27.8583"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask21_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask21_57_1615)">
                          <path
                            d="M31.0066 27.8586L31.5364 25.7468"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask22_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask22_57_1615)">
                          <path
                            d="M31.5365 25.7469L32.0588 25.4441"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask23_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask23_57_1615)">
                          <path
                            d="M32.0587 25.444L32.581 24.5281"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask24_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask24_57_1615)">
                          <path
                            d="M32.5811 24.5281L33.1109 24.301"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask25_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask25_57_1615)">
                          <path
                            d="M33.111 24.301L33.6332 24.1799"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask26_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask26_57_1615)">
                          <path
                            d="M33.6332 24.1799L34.1555 24.9444"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask27_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask27_57_1615)">
                          <path
                            d="M34.1555 24.9443L34.6778 25.459"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask28_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask28_57_1615)">
                          <path
                            d="M34.6777 25.4589L35.2076 24.2402"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask29_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask29_57_1615)">
                          <path
                            d="M35.2075 24.2402L35.7298 24.7474"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask30_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask30_57_1615)">
                          <path
                            d="M35.7299 24.7476L36.2521 30.924"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask31_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask31_57_1615)">
                          <path
                            d="M36.2522 30.9243L36.782 32.7863"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask32_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask32_57_1615)">
                          <path
                            d="M36.782 32.7861L37.3043 38.5387"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask33_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask33_57_1615)">
                          <path
                            d="M37.3042 38.5387L37.8265 35.4656"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask34_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask34_57_1615)">
                          <path
                            d="M37.8265 35.4656L38.3564 36.9946"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask35_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask35_57_1615)">
                          <path
                            d="M38.3563 36.9946L38.8786 35.2764"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask36_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask36_57_1615)">
                          <path
                            d="M38.8787 35.2764L39.4009 35.67"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask37_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask37_57_1615)">
                          <path
                            d="M39.4009 35.6699L39.9307 32.0442"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask38_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask38_57_1615)">
                          <path
                            d="M39.9308 32.0442L40.4531 35.4503"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask39_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask39_57_1615)">
                          <path
                            d="M40.453 35.4504L40.9753 33.4673"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask40_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask40_57_1615)">
                          <path
                            d="M40.9752 33.4673L41.5051 26.5945"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask41_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask41_57_1615)">
                          <path
                            d="M41.5051 26.5945L42.0274 30.9317"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask42_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask42_57_1615)">
                          <path
                            d="M42.0275 30.9316L42.5497 34.9055"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask43_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask43_57_1615)">
                          <path
                            d="M42.5497 34.9056L43.072 27.9268"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask44_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask44_57_1615)">
                          <path
                            d="M43.072 27.927L43.6019 26.1406"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask45_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask45_57_1615)">
                          <path
                            d="M43.6018 26.1403L44.1241 24.4524"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask46_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask46_57_1615)">
                          <path
                            d="M44.1241 24.4524L44.6464 24.3994"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask47_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask47_57_1615)">
                          <path
                            d="M44.6464 24.3992L45.1762 21.9165"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask48_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask48_57_1615)">
                          <path
                            d="M45.1763 21.9168L45.6985 19.0405"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask49_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask49_57_1615)">
                          <path
                            d="M45.6985 19.0405L46.2208 24.2255"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask50_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask50_57_1615)">
                          <path
                            d="M46.2208 24.2254L46.7507 17.4812"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask51_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask51_57_1615)">
                          <path
                            d="M46.7506 17.481L47.2729 17.1631"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask52_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask52_57_1615)">
                          <path
                            d="M47.2729 17.1631L47.7952 18.0638"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask53_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask53_57_1615)">
                          <path
                            d="M47.7952 18.0637L48.325 20.0014"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask54_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask54_57_1615)">
                          <path
                            d="M48.3251 20.0015L48.8474 20.5767"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask55_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask55_57_1615)">
                          <path
                            d="M48.8473 20.5769L49.3696 18.5105"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask56_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask56_57_1615)">
                          <path
                            d="M49.3696 18.5105L49.8995 16.8149"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask57_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask57_57_1615)">
                          <path
                            d="M49.8994 16.8149L50.4217 22.5373"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask58_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask58_57_1615)">
                          <path
                            d="M50.4216 22.5374L50.9439 24.74"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask59_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask59_57_1615)">
                          <path
                            d="M50.944 24.7402L51.4662 28.0253"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask60_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask60_57_1615)">
                          <path
                            d="M51.4663 28.0252L51.9962 23.4382"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask61_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask61_57_1615)">
                          <path
                            d="M51.9962 23.4381L52.5185 22.3784"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask62_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask62_57_1615)">
                          <path
                            d="M52.5183 22.3784L53.0406 25.5196"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask63_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask63_57_1615)">
                          <path
                            d="M53.0406 25.5195L53.5705 26.4278"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask64_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask64_57_1615)">
                          <path
                            d="M53.5706 26.4277L54.0928 24.384"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask65_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask65_57_1615)">
                          <path
                            d="M54.0928 24.384L54.615 22.3328"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask66_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask66_57_1615)">
                          <path
                            d="M54.615 22.3328L55.1448 22.5977"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask67_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask67_57_1615)">
                          <path
                            d="M55.1449 22.598L55.6672 21.8259"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask68_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask68_57_1615)">
                          <path
                            d="M55.6672 21.8259L56.1895 24.9066"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask69_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask69_57_1615)">
                          <path
                            d="M56.1895 24.9065L56.7193 27.8206"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask70_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask70_57_1615)">
                          <path
                            d="M56.7192 27.8207L57.2415 26.8821"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask71_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask71_57_1615)">
                          <path
                            d="M57.2416 26.8823L57.7639 25.3381"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask72_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask72_57_1615)">
                          <path
                            d="M57.7638 25.3381L58.2936 25.3987"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask73_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask73_57_1615)">
                          <path
                            d="M58.2937 25.3984L58.816 27.9947"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask74_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask74_57_1615)">
                          <path
                            d="M58.8159 27.9946L59.3382 31.3781"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask75_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask75_57_1615)">
                          <path
                            d="M59.3383 31.3779L59.8605 31.3552"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask76_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask76_57_1615)">
                          <path
                            d="M59.8605 31.3553L60.3903 30.5151"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask77_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask77_57_1615)">
                          <path
                            d="M60.3904 30.5151L60.9127 30.553"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask78_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask78_57_1615)">
                          <path
                            d="M60.9127 30.5532L61.435 28.676"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask79_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask79_57_1615)">
                          <path
                            d="M61.4349 28.676L61.9648 29.3421"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask80_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask80_57_1615)">
                          <path
                            d="M61.9647 29.3421L62.487 27.0032"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask81_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask81_57_1615)">
                          <path
                            d="M62.4871 27.0032L63.0093 26.9199"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask82_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask82_57_1615)">
                          <path
                            d="M63.0094 26.9199L63.5392 28.2824"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask83_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask83_57_1615)">
                          <path
                            d="M63.5392 28.2823L64.0615 27.6011"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask84_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask84_57_1615)">
                          <path
                            d="M64.0615 27.6011L64.5838 28.691"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask85_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask85_57_1615)">
                          <path
                            d="M64.5837 28.6911L65.1136 27.3362"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask86_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask86_57_1615)">
                          <path
                            d="M65.1136 27.3362L65.6359 27.8055"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask87_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask87_57_1615)">
                          <path
                            d="M65.6359 27.8057L66.1581 29.9175"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask88_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask88_57_1615)">
                          <path
                            d="M66.1582 29.9172L66.688 30.871"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask89_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask89_57_1615)">
                          <path
                            d="M66.688 30.8711L67.2103 31.3404"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask90_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask90_57_1615)">
                          <path
                            d="M67.2102 31.3403L67.7325 29.8037"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask91_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask91_57_1615)">
                          <path
                            d="M67.7325 29.8037L68.2624 32.1729"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask92_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask92_57_1615)">
                          <path
                            d="M68.2623 32.1729L68.7846 34.0197"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask93_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask93_57_1615)">
                          <path
                            d="M68.7847 34.0198L69.3069 33.4673"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask94_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask94_57_1615)">
                          <path
                            d="M69.3069 33.4673L69.8292 30.9619"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask95_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask95_57_1615)">
                          <path
                            d="M69.8292 30.9619L70.3591 31.0755"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask96_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask96_57_1615)">
                          <path
                            d="M70.3591 31.0753L70.8814 29.9551"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask97_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask97_57_1615)">
                          <path
                            d="M70.8813 29.9552L71.4036 27.0107"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask98_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask98_57_1615)">
                          <path
                            d="M71.4037 27.0107L71.9335 27.147"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask99_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask99_57_1615)">
                          <path
                            d="M71.9335 27.1469L72.4557 25.5195"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask100_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask100_57_1615)">
                          <path
                            d="M72.4557 25.5195L72.978 26.4203"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask101_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask101_57_1615)">
                          <path
                            d="M72.978 26.4204L73.5079 26.4355"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask102_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask102_57_1615)">
                          <path
                            d="M73.5079 26.4353L74.0302 27.2074"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask103_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask103_57_1615)">
                          <path
                            d="M74.0302 27.2075L74.5524 28.0553"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask104_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask104_57_1615)">
                          <path
                            d="M74.5524 28.0554L75.0822 28.4263"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask105_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask105_57_1615)">
                          <path
                            d="M75.0823 28.4263L75.6046 29.9023"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask106_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask106_57_1615)">
                          <path
                            d="M75.6046 29.9023L76.1269 28.0706"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask107_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask107_57_1615)">
                          <path
                            d="M76.1268 28.0705L76.6567 26.2388"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask108_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask108_57_1615)">
                          <path
                            d="M76.6566 26.2388L77.1789 26.8443"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask109_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask109_57_1615)">
                          <path
                            d="M77.179 26.8442L77.7012 27.2454"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask110_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask110_57_1615)">
                          <path
                            d="M77.7012 27.2453L78.2235 25.4211"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask111_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask111_57_1615)">
                          <path
                            d="M78.2235 25.4211L78.7534 26.2613"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask112_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask112_57_1615)">
                          <path
                            d="M78.7533 26.2615L79.2756 30.8106"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask113_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask113_57_1615)">
                          <path
                            d="M79.2756 30.8105L79.7979 32.12"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask114_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask114_57_1615)">
                          <path
                            d="M79.798 32.12L80.3278 30.6365"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask115_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask115_57_1615)">
                          <path
                            d="M80.3276 30.6365L80.8499 26.269"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask116_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask116_57_1615)">
                          <path
                            d="M80.85 26.269L81.3723 27.0638"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask117_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask117_57_1615)">
                          <path
                            d="M81.3723 27.0637L81.9022 29.0393"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask118_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask118_57_1615)">
                          <path
                            d="M81.9022 29.0393L82.4245 30.0612"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask119_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask119_57_1615)">
                          <path
                            d="M82.4244 30.061L82.9467 31.0677"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask120_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask120_57_1615)">
                          <path
                            d="M82.9467 31.068L83.4765 30.031"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask121_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask121_57_1615)">
                          <path
                            d="M83.4766 30.031L83.9988 29.645"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask122_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask122_57_1615)">
                          <path
                            d="M83.9989 29.645L84.5212 29.9856"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask123_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask123_57_1615)">
                          <path
                            d="M84.521 29.9855L85.0508 26.761"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask124_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask124_57_1615)">
                          <path
                            d="M85.0509 26.761L85.5732 26.2917"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask125_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask125_57_1615)">
                          <path
                            d="M85.5732 26.2917L86.0955 26.7005"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask126_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask126_57_1615)">
                          <path
                            d="M86.0956 26.7004L86.6179 24.5281"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask127_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask127_57_1615)">
                          <path
                            d="M86.6178 24.528L87.1476 23.491"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask128_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask128_57_1615)">
                          <path
                            d="M87.1476 23.491L87.6699 25.8223"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask129_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask129_57_1615)">
                          <path
                            d="M87.6699 25.8224L88.1922 22.5525"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask130_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask130_57_1615)">
                          <path
                            d="M88.1921 22.5523L88.722 21.75"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask131_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask131_57_1615)">
                          <path
                            d="M88.722 21.7503L89.2443 20.9707"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask132_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask132_57_1615)">
                          <path
                            d="M89.2443 20.9704L89.7665 18.957"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask133_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask133_57_1615)">
                          <path
                            d="M89.7666 18.957L90.2965 17.0571"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask134_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask134_57_1615)">
                          <path
                            d="M90.2964 17.0571L90.8187 18.5558"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask135_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask135_57_1615)">
                          <path
                            d="M90.8187 18.5557L91.341 18.813"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask136_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask136_57_1615)">
                          <path
                            d="M91.3409 18.8132L91.8708 18.6997"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask137_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask137_57_1615)">
                          <path
                            d="M91.8708 18.6995L92.3931 15.8459"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask138_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask138_57_1615)">
                          <path
                            d="M92.3931 15.846L92.9153 15.4675"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask139_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask139_57_1615)">
                          <path
                            d="M92.9154 15.4678L93.4452 12.6975"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask140_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask140_57_1615)">
                          <path
                            d="M93.4452 12.6972L93.9675 11.085"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask141_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask141_57_1615)">
                          <path
                            d="M93.9675 11.085L94.4898 11.9251"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask142_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask142_57_1615)">
                          <path
                            d="M94.4897 11.9256L95.012 9.50342"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask143_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask143_57_1615)">
                          <path
                            d="M95.0121 9.50342L95.5419 9.61696"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask144_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask144_57_1615)">
                          <path
                            d="M95.5419 9.61651L96.0641 9.09424"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask145_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask145_57_1615)">
                          <path
                            d="M96.0642 9.09437L96.5865 5.84717"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask146_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask146_57_1615)">
                          <path
                            d="M96.5864 5.84718L97.1163 5.73364"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask147_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask147_57_1615)">
                          <path
                            d="M97.1163 5.73356L97.6386 2.2063"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask148_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask148_57_1615)">
                          <path
                            d="M97.6385 2.2063L98.1608 3.32655"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask149_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask149_57_1615)">
                          <path
                            d="M98.1609 3.32642L98.6907 6.92937"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask150_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask150_57_1615)">
                          <path
                            d="M98.6907 6.92969L99.213 8.09535"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask151_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask151_57_1615)">
                          <path
                            d="M99.213 8.09525L99.7353 7.80005"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask152_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask152_57_1615)">
                          <path
                            d="M99.7352 7.80005L100.265 13.7268"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask153_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask153_57_1615)">
                          <path
                            d="M100.265 13.7268L100.787 14.5064"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask154_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask154_57_1615)">
                          <path
                            d="M100.787 14.5064L101.31 14.408"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask155_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask155_57_1615)">
                          <path
                            d="M101.31 14.408L101.84 19.275"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask156_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask156_57_1615)">
                          <path
                            d="M101.839 19.275L102.362 18.8057"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask157_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask157_57_1615)">
                          <path
                            d="M102.362 18.8057L102.884 19.8654"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask158_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask158_57_1615)">
                          <path
                            d="M102.884 19.8652L103.406 20.1302"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask159_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask159_57_1615)">
                          <path
                            d="M103.406 20.1303L103.936 19.0024"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask160_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask160_57_1615)">
                          <path
                            d="M103.936 19.0025L104.459 18.8208"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask161_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask161_57_1615)">
                          <path
                            d="M104.458 18.8208L104.981 21.2732"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask162_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask162_57_1615)">
                          <path
                            d="M104.981 21.2733L105.511 20.2061"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask163_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask163_57_1615)">
                          <path
                            d="M105.511 20.206L106.033 18.2759"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask164_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask164_57_1615)">
                          <path
                            d="M106.033 18.2759L106.555 19.3053"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask165_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask165_57_1615)">
                          <path
                            d="M106.555 19.3054L107.085 19.0632"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask166_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask166_57_1615)">
                          <path
                            d="M107.085 19.0632L107.607 19.2676"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask167_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask167_57_1615)">
                          <path
                            d="M107.607 19.2673L108.13 17.7913"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_1615">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.984619 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip1_57_1615">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.984619 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip2_57_1615">
                      <rect
                        width="88.56"
                        height="37.8461"
                        fill="white"
                        transform="translate(19.7815 0.692627)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </li>
          <li className="border rounded-lg px-2 py-2 max-w-40 border-gray-200 shadow-sm border-solid">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      x="0.984619"
                      y="0.723389"
                      width="16.4"
                      height="16.4"
                      rx="8.2"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_57_1607"
                          transform="scale(0.0192308)"
                        />
                      </pattern>
                      <image
                        id="image0_57_1607"
                        width="52"
                        height="52"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAADlZJREFUaEPVWmuMVdUV/vY+59xz5yVWnKZaUKhRBK1axcpDJD4i1j4SH6DGyK+2aoOYQo3G1iZVowXDGBWsTVprNC0KmthGg4/wUGScRpsIFtHERlptrKLAyLzuPWfv3Xxr3325M3PvzKBU7SHDnTnn3HP2t9da3/rW2ls55xwO8OBX8jxHFEXQWsu3+/v7sXXrVrz88st47bXXsHPnTrz77rvYtWsX+vr65J7m5ma0t7dj4sSJmDx5Mk455RScccYZ8tnU1CT3hGcnSXKAo/K3qwMFZIwREEopecBLL72Exx9/HM8//zzefvttlMvlYQMJ99abOw782GOPxXnnnYf58+fjzDPPrH6f7+KkHcgxZkDWWvAnjmN5PkGsWLECXV1dg97H62HgvL/eEaxKoBx0LVBabMmSJViwYIF8ldd5X/jOaODGBKh2pjZs2IBbbrkFnZ2d1WdzFjmoRgBGG0SwON8TjlmzZuG2227DOeecUwU2FmuNCoixwllnHNx4441YuXKlvICuEvx9tAEfyHW+ixbJsky+dt1112HZsmUSY2EsIz2vLqDgApwxvmDHjh247LLL8Prrr1fjh9b4FHwyJmzBxYLVTzrpJDz66KOYOnWqAA1uH2Kz9qENAfGLhUIBzz77LC6//HLs3btXHsRZ+jyP8M5x48ZhzZo1OP/886ugxgwomJaBz+DkTH0RYMLEhXcTwNq1a3HJJZc0dL9hFgpgnnnmGVx44YUChsFYG7Cfp4XCu8IYCIpjo6XqxdQgQIHN3njjDckHe/bs+VKAGQrq0EMPFZZlTA3NVVVAtATRk81mzpyJbdu2DXIzpjejNJT8s7Bw0ErDaf6tAUvB4QDJt158+NTL/52c8X+Hg+dqk+Z+wWKhEDlAK4VcOcBZOONzWnA/EgVVCdVHGLu8LSiFgJQ0SWoeGjNK+YQauxx8oWXuMZ4gKH44HC+Chg58+LmRtBavESbBEwI/+RarFAQb9sfzokWLcN999w2ykgAKYDZu3CiJjJYaSsk8FzsNQ8mjFazJ0PKN43DCxVfANkXICgpGG5jYwiYWKiJoB6ctnHKwiknTygiVdnAKcMrINY6U/xQcTOSgYcVCmbNobmnF7se7sOuxLVCRrlqKyZipg4n+7LPProJS1oqvCAjGzZYtW+rGDXEoFwORhjVltB1xHM75xV1Qxx+L3ihDqQkwBQeTGpSKJaCgYRILExkZpInKFSAEYKE0kMUlIKIdCMe7lAE9wAi4PsQ4BgX8a8FyfLC2axCg4EGzZ88WPRncTmVZ5niRdEiKpgIIWXqQyyuvrJ3J0DR+Is69aRWiScdjX7YLNo1hEwNbMDAFi7zA3x2ygkXG3xMCysUS0AZWWdAEVpvKOet/ZygqgsnQXwSOyFL85+oH8OHqTiiqesZSjb8GUBz7pZdeKuOuWojaiUKzUb6JdYTcGqQtR+OCJXejMOVE9JV64YqAiQGT5MgFjIVJc7FWlhoPKKU1BgSEd0ELaAICHN1PWwGitYWyBv2pw/goxceLfosPf7cBOo5h8nxYKISxzpgxQwhCrMQYopvVyvZheYb+5hyamr+G7/3oHrRM+Ta6TQ9UCuSFHHkC2DhHHjsBwhjKU1rIiLVyAkpLcLGDjWgNuhzjyEARoHbIIlrGYqBgcFihiD0/exDvr3wanEjjHJyrr9xDvG/evFkwCKDrr78e9957b/2cUwFTbJ6IH1zegfYpZ2Kv/QRZ0ceITTLkBQeXGPk7TxzKtFKhAjYlKAtTzGBjhzwxyOO8ahlFwogcMp3DxRrjY429v3oI7931JApRhBLJwhJQfW4MCZfsTAyqr6/PnX766di+fbvEyNASIIpiGJNjxqyrcda8n+OjgY8Rp1ZeXkpzlAtKBupiC5c42Jhul/m4SSwc3TBxyIo5TEKQFjY2IL9oVZZ4yiKHSDHHRPjgN09g552rkeoIJe2gjc9hjQCFMZ9wwgl45ZVXoDo7O93cuXNFRtT7kmLydBbF9HC0HtJeodvIJ1N6oib1eicVCpbTdKNKYiIlR5xlI+doDaFuSTServn9iEE/UEL3P/4tCdtGClHGjAfkkptH7hSQzF588UWojo4OxwqxkV6rLZ/5XIUYVlKdT6TBs4MKGPparxMGH7X38hkhicozpVjksx0si8YAZgQ8YewdHR1QCxcudA8//PAomq3esIZRx0E5IWojisSiohToBXb4pNS+LABauHAh1Ny5c90LL7xQN35CwqUrTjj8RBz5lekwysIoIGfzImJDhHFTcT0yWMQzSmKECZTu5iKfbiTPMH7IcGQ8ptCIlO8QaQtdyvDexi6oPT1ArAFDxUA9N7LLhTiaM2cO1KRJkxxbTvXkjriAimCdweyp12D+nFXo689hm3pRKmhhN8k5iRP6ZlJlMi2npHIGvycGYb6iEdIgyxkhFYsszZGllWs6R9JawL6n1mP7ottR6B1AlihYycfUDfVpu3bS2RpTra2trqenpyGgoJYVWvDdb92IOdOWom/AIWvuQ16hZq8IMgFDFnMxE6qFIUVLLiIQWofADbLUUzjVRSY5iveQMS2a25tR/vNG7Fh8B6L+AZg4gsup7RsHUTBGa2srFYWWO+lWI/YItIK2KS4+bRlmTLkWn5h9sEWLPPZ5xidRi0ys5S1F6/nEy8H7H1pI1AOpPslQKlJR0Jq0MFBKMrSML6K05mls++lykXom8u7X6CCgQF4CKAAZCVCkEhhHGk2wYGYHTpv8Q/TlPTIIulVWNOJmBFMqDHirpFQMBuWEg6fFCIif3iVdrARsnmYwKRM0k7NDKclRbG9C34N/wZs3d0AzbmXW60OqgiGwtrY2t2/fvhFcLtQznAUtmiu243HF7JU4+ehLsK/cA1tQ4kZ5oYxcBqsrwpQWokV8LEk8iXDN5TrJwsRe8xk5x08I+L5ihuLhRfTevwZv336/FJQjWYjGaGtrg5o8ebJ75513RgXEGki5CBoRrC6hYA/DlbPvxylHLUC/KsMkSmaZsz9AyxAEiULiyGGgWHE9GXQu7leqdUeJM19+5CmvW3xSLOHIQ9vw1g2/xs7fr4WSonJ/MzIADDE0adIkqDlz5jgKu1EbIZp1pENMiawccmfQEh2NqRNmAnEi5TnpWKiZnET6jowv8kjr1pOCKG4Wdkkl+fM+fo8UH2vksYVyFloUBoAU6H7zLXRvfQtKKzhfvg06Am2fddZZUFdddZV75JFHRgVEsUOJwlI4cpGvQkmlDfrXByXLVh4iikRK8PpcNyixrlixwi1durRhYg0DY550bK5TRDrfkGcp4EylOVKL4DMIC37VSyrmHv6238Ua5coAiIsHqqury9FU9ZZBBs8ye850B3jwMLA2xVfbjkISNQkDCTTW1pzNSuawdB3pbviCTlxLFEQlYYrA9ZNiNVW3v59Fo7IZYsTo/Xg3Bj75uGGcEyjF6aZNm3z5MH36dLAXV698qIISFc23F0TyuDzGd6bejLnH/xiOClLFks05KJbTflCehjk45hqh+JgleYWeqTJ4PuaPJw3EGbI0govLyFSOtvZ2bH/wbmz/4x/qkkIY87Rp0/Dqq6+OocCrIGIbS+ZdZ3AGmHfczfj+ib9EXirQwYUojC5XSolY6J1dIAY5qbnUnCGr0HZeyVlkO+atcoX5pISPWTM5lKJ+pIe0oufvndh81w0wu3dXlOpgUgjutnjxYtxzzz0eELsmIuzqtK+ChUjXbNVYl+G8Y5biom/egXxAiyWk9agz0L0YvOJiUuf48tpoJlife/wPf6+U6gm1H2neXxfdF5cQjyui/52/YdOyJRjo3iXxO1JNRAzsACljjKPZ2C0dqUnCPiPdbO6Ea3HFqXfC9beIRdgW9D02Njp8/WJCTDAe6ILSb2P+8X0GWsQrCa/hgo7zKqGEtDVF7/tbse7u61Da+361STKUOWubJGwNS5OkXC47BhRXGrjGWS8fBcudPuFKXHnqKqS94+BUPyyVuFjEg2F+oesRFP82lQCveKSwou8E+WYkS3hRCAmQFdgZyhCNK6Jn9+t46oGfoP+jf0LrIqwl0/kFsNojAHrsscekBceqW1wuNOloMiKtBRXKh+lHXIprZj2CQk/Rh4zPrzCV/q+3kmc6Xvc5a/+ntxxJwWs61lAEJHEjjZUBqJYcH+7ZhicfWox9H+1AxPaVNVB2ePkQxljbaJRSorYVTNpjW7WW7bSOZIZOnXgRZnz9MmT9vTAJ81CCyOWepn1noDp5Qs/kPGnxkqZJzZ7I2cISJuQ1KQytxJglON2Pv27+E3bv3ipgLGUO72MzYkgbK3jN+vXrpX0d2tnDmvVsgK9ataracBRpzqAPD/wMSVMQj+H74hVsPJJVHbsLnJ/9CTa4WsNmvdxfs5zCLio3UexfOeM4kkpjnQnPrws4MPvRt0Pbp3YJJZyuo5KrHRyvD6Vol4mjLjBiDLa1HCWWJOu8WjqMeTmFoILZuEhMUFxXHVW0HkzRNsqzwli44MVuL5NpwwWv8KywzPfcc8/hggsu+FIuSa5btw7z5s0bfUlyKKgnnnhCqPz/etE4gOLSBPMTLUWO7+7u/kJWwkPM0M24V4GWCXsVxrysP3TjBYUr9ypw40XYFPG/XBWvt/Fi9erVEjMMibCVZsyAamOzdmvMTTfdJGuaPMImpYMNbOjWGFLz8uXLP9vWmKFkU8skXIfl5iWyTDgO1ual2u02VAC33nrrwd+8FAY9dHsZlwHZHB+6vax2x1S93Vm1PbSQKmonkKtxXDwgGfEILnZQt5fVvnDoBkBaiuKQEuTTbADkfiJuADz33HMHbQAMG5fGsqWsdnyjbi+rl+vCtrLg77wnbNGkxbhFk62xRls0J0yYIFs0Tz75ZKlh+FksFuVVtGrYBVYv6EfL4/8FuuuicL1JnOIAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-xs">SOL</span>
                  <span className="ml-1 font-bold text-xs text-red-500">
                    -0.28%
                  </span>
                </div>
              </div>
              <p className="font-bold text-base">$109.34</p>
              <div>
                <svg
                  width="128"
                  height="39"
                  viewBox="0 0 128 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_57_1615)">
                    <g clipPath="url(#clip1_57_1615)">
                      <g clipPath="url(#clip2_57_1615)">
                        <mask
                          id="mask0_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_57_1615)">
                          <path
                            d="M19.9934 10.896L20.5157 10.9944"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask1_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask1_57_1615)">
                          <path
                            d="M20.5156 10.9941L21.0379 11.577"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask2_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_57_1615)">
                          <path
                            d="M21.038 11.577L21.5678 8.54932"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask3_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask3_57_1615)">
                          <path
                            d="M21.5677 8.54932L22.09 12.1447"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask4_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_57_1615)">
                          <path
                            d="M22.0901 12.1448L22.6124 5.27954"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask5_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask5_57_1615)">
                          <path
                            d="M22.6123 5.27954L23.1422 9.14742"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask6_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_57_1615)">
                          <path
                            d="M23.1422 9.14722L23.6645 10.8049"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask7_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask7_57_1615)">
                          <path
                            d="M23.6646 10.8052L24.1868 10.9641"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask8_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_57_1615)">
                          <path
                            d="M24.1868 10.9641L24.7166 18.3214"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask9_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask9_57_1615)">
                          <path
                            d="M24.7166 18.3213L25.2388 19.1085"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask10_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask10_57_1615)">
                          <path
                            d="M25.2389 19.1084L25.7612 23.7029"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask11_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask11_57_1615)">
                          <path
                            d="M25.7612 23.7029L26.2835 19.1008"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask12_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask12_57_1615)">
                          <path
                            d="M26.2834 19.1011L26.8133 14.4915"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask13_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask13_57_1615)">
                          <path
                            d="M26.8132 14.4915L27.3355 17.2845"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask14_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask14_57_1615)">
                          <path
                            d="M27.3356 17.2842L27.8578 14.6274"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask15_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask15_57_1615)">
                          <path
                            d="M27.8578 14.6274L28.3876 16.7241"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask16_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask16_57_1615)">
                          <path
                            d="M28.3877 16.7244L28.91 20.4333"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask17_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask17_57_1615)">
                          <path
                            d="M28.9099 20.4331L29.4322 20.7662"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask18_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask18_57_1615)">
                          <path
                            d="M29.4323 20.7659L29.9621 18.0562"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask19_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask19_57_1615)">
                          <path
                            d="M29.9622 18.0562L30.4844 24.876"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask20_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask20_57_1615)">
                          <path
                            d="M30.4844 24.876L31.0067 27.8583"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask21_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask21_57_1615)">
                          <path
                            d="M31.0066 27.8586L31.5364 25.7468"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask22_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask22_57_1615)">
                          <path
                            d="M31.5365 25.7469L32.0588 25.4441"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask23_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask23_57_1615)">
                          <path
                            d="M32.0587 25.444L32.581 24.5281"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask24_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask24_57_1615)">
                          <path
                            d="M32.5811 24.5281L33.1109 24.301"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask25_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask25_57_1615)">
                          <path
                            d="M33.111 24.301L33.6332 24.1799"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask26_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask26_57_1615)">
                          <path
                            d="M33.6332 24.1799L34.1555 24.9444"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask27_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask27_57_1615)">
                          <path
                            d="M34.1555 24.9443L34.6778 25.459"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask28_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask28_57_1615)">
                          <path
                            d="M34.6777 25.4589L35.2076 24.2402"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask29_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask29_57_1615)">
                          <path
                            d="M35.2075 24.2402L35.7298 24.7474"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask30_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask30_57_1615)">
                          <path
                            d="M35.7299 24.7476L36.2521 30.924"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask31_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask31_57_1615)">
                          <path
                            d="M36.2522 30.9243L36.782 32.7863"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask32_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask32_57_1615)">
                          <path
                            d="M36.782 32.7861L37.3043 38.5387"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask33_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask33_57_1615)">
                          <path
                            d="M37.3042 38.5387L37.8265 35.4656"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask34_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask34_57_1615)">
                          <path
                            d="M37.8265 35.4656L38.3564 36.9946"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask35_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask35_57_1615)">
                          <path
                            d="M38.3563 36.9946L38.8786 35.2764"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask36_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask36_57_1615)">
                          <path
                            d="M38.8787 35.2764L39.4009 35.67"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask37_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask37_57_1615)">
                          <path
                            d="M39.4009 35.6699L39.9307 32.0442"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask38_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask38_57_1615)">
                          <path
                            d="M39.9308 32.0442L40.4531 35.4503"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask39_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask39_57_1615)">
                          <path
                            d="M40.453 35.4504L40.9753 33.4673"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask40_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask40_57_1615)">
                          <path
                            d="M40.9752 33.4673L41.5051 26.5945"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask41_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask41_57_1615)">
                          <path
                            d="M41.5051 26.5945L42.0274 30.9317"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask42_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask42_57_1615)">
                          <path
                            d="M42.0275 30.9316L42.5497 34.9055"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask43_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask43_57_1615)">
                          <path
                            d="M42.5497 34.9056L43.072 27.9268"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask44_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask44_57_1615)">
                          <path
                            d="M43.072 27.927L43.6019 26.1406"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask45_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask45_57_1615)">
                          <path
                            d="M43.6018 26.1403L44.1241 24.4524"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask46_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask46_57_1615)">
                          <path
                            d="M44.1241 24.4524L44.6464 24.3994"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask47_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask47_57_1615)">
                          <path
                            d="M44.6464 24.3992L45.1762 21.9165"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask48_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask48_57_1615)">
                          <path
                            d="M45.1763 21.9168L45.6985 19.0405"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask49_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask49_57_1615)">
                          <path
                            d="M45.6985 19.0405L46.2208 24.2255"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask50_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask50_57_1615)">
                          <path
                            d="M46.2208 24.2254L46.7507 17.4812"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask51_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask51_57_1615)">
                          <path
                            d="M46.7506 17.481L47.2729 17.1631"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask52_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask52_57_1615)">
                          <path
                            d="M47.2729 17.1631L47.7952 18.0638"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask53_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask53_57_1615)">
                          <path
                            d="M47.7952 18.0637L48.325 20.0014"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask54_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask54_57_1615)">
                          <path
                            d="M48.3251 20.0015L48.8474 20.5767"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask55_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask55_57_1615)">
                          <path
                            d="M48.8473 20.5769L49.3696 18.5105"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask56_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask56_57_1615)">
                          <path
                            d="M49.3696 18.5105L49.8995 16.8149"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask57_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask57_57_1615)">
                          <path
                            d="M49.8994 16.8149L50.4217 22.5373"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask58_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask58_57_1615)">
                          <path
                            d="M50.4216 22.5374L50.9439 24.74"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask59_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask59_57_1615)">
                          <path
                            d="M50.944 24.7402L51.4662 28.0253"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask60_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask60_57_1615)">
                          <path
                            d="M51.4663 28.0252L51.9962 23.4382"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask61_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask61_57_1615)">
                          <path
                            d="M51.9962 23.4381L52.5185 22.3784"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask62_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask62_57_1615)">
                          <path
                            d="M52.5183 22.3784L53.0406 25.5196"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask63_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask63_57_1615)">
                          <path
                            d="M53.0406 25.5195L53.5705 26.4278"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask64_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask64_57_1615)">
                          <path
                            d="M53.5706 26.4277L54.0928 24.384"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask65_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask65_57_1615)">
                          <path
                            d="M54.0928 24.384L54.615 22.3328"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask66_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask66_57_1615)">
                          <path
                            d="M54.615 22.3328L55.1448 22.5977"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask67_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask67_57_1615)">
                          <path
                            d="M55.1449 22.598L55.6672 21.8259"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask68_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask68_57_1615)">
                          <path
                            d="M55.6672 21.8259L56.1895 24.9066"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask69_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask69_57_1615)">
                          <path
                            d="M56.1895 24.9065L56.7193 27.8206"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask70_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask70_57_1615)">
                          <path
                            d="M56.7192 27.8207L57.2415 26.8821"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask71_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask71_57_1615)">
                          <path
                            d="M57.2416 26.8823L57.7639 25.3381"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask72_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask72_57_1615)">
                          <path
                            d="M57.7638 25.3381L58.2936 25.3987"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask73_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask73_57_1615)">
                          <path
                            d="M58.2937 25.3984L58.816 27.9947"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask74_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask74_57_1615)">
                          <path
                            d="M58.8159 27.9946L59.3382 31.3781"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask75_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask75_57_1615)">
                          <path
                            d="M59.3383 31.3779L59.8605 31.3552"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask76_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask76_57_1615)">
                          <path
                            d="M59.8605 31.3553L60.3903 30.5151"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask77_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask77_57_1615)">
                          <path
                            d="M60.3904 30.5151L60.9127 30.553"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask78_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask78_57_1615)">
                          <path
                            d="M60.9127 30.5532L61.435 28.676"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask79_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask79_57_1615)">
                          <path
                            d="M61.4349 28.676L61.9648 29.3421"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask80_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask80_57_1615)">
                          <path
                            d="M61.9647 29.3421L62.487 27.0032"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask81_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask81_57_1615)">
                          <path
                            d="M62.4871 27.0032L63.0093 26.9199"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask82_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask82_57_1615)">
                          <path
                            d="M63.0094 26.9199L63.5392 28.2824"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask83_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask83_57_1615)">
                          <path
                            d="M63.5392 28.2823L64.0615 27.6011"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask84_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask84_57_1615)">
                          <path
                            d="M64.0615 27.6011L64.5838 28.691"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask85_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask85_57_1615)">
                          <path
                            d="M64.5837 28.6911L65.1136 27.3362"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask86_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask86_57_1615)">
                          <path
                            d="M65.1136 27.3362L65.6359 27.8055"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask87_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask87_57_1615)">
                          <path
                            d="M65.6359 27.8057L66.1581 29.9175"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask88_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask88_57_1615)">
                          <path
                            d="M66.1582 29.9172L66.688 30.871"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask89_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask89_57_1615)">
                          <path
                            d="M66.688 30.8711L67.2103 31.3404"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask90_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask90_57_1615)">
                          <path
                            d="M67.2102 31.3403L67.7325 29.8037"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask91_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask91_57_1615)">
                          <path
                            d="M67.7325 29.8037L68.2624 32.1729"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask92_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask92_57_1615)">
                          <path
                            d="M68.2623 32.1729L68.7846 34.0197"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask93_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask93_57_1615)">
                          <path
                            d="M68.7847 34.0198L69.3069 33.4673"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask94_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask94_57_1615)">
                          <path
                            d="M69.3069 33.4673L69.8292 30.9619"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask95_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask95_57_1615)">
                          <path
                            d="M69.8292 30.9619L70.3591 31.0755"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask96_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask96_57_1615)">
                          <path
                            d="M70.3591 31.0753L70.8814 29.9551"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask97_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask97_57_1615)">
                          <path
                            d="M70.8813 29.9552L71.4036 27.0107"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask98_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask98_57_1615)">
                          <path
                            d="M71.4037 27.0107L71.9335 27.147"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask99_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask99_57_1615)">
                          <path
                            d="M71.9335 27.1469L72.4557 25.5195"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask100_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask100_57_1615)">
                          <path
                            d="M72.4557 25.5195L72.978 26.4203"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask101_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask101_57_1615)">
                          <path
                            d="M72.978 26.4204L73.5079 26.4355"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask102_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask102_57_1615)">
                          <path
                            d="M73.5079 26.4353L74.0302 27.2074"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask103_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask103_57_1615)">
                          <path
                            d="M74.0302 27.2075L74.5524 28.0553"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask104_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask104_57_1615)">
                          <path
                            d="M74.5524 28.0554L75.0822 28.4263"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask105_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask105_57_1615)">
                          <path
                            d="M75.0823 28.4263L75.6046 29.9023"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask106_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask106_57_1615)">
                          <path
                            d="M75.6046 29.9023L76.1269 28.0706"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask107_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask107_57_1615)">
                          <path
                            d="M76.1268 28.0705L76.6567 26.2388"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask108_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask108_57_1615)">
                          <path
                            d="M76.6566 26.2388L77.1789 26.8443"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask109_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask109_57_1615)">
                          <path
                            d="M77.179 26.8442L77.7012 27.2454"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask110_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask110_57_1615)">
                          <path
                            d="M77.7012 27.2453L78.2235 25.4211"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask111_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask111_57_1615)">
                          <path
                            d="M78.2235 25.4211L78.7534 26.2613"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask112_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask112_57_1615)">
                          <path
                            d="M78.7533 26.2615L79.2756 30.8106"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask113_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask113_57_1615)">
                          <path
                            d="M79.2756 30.8105L79.7979 32.12"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask114_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask114_57_1615)">
                          <path
                            d="M79.798 32.12L80.3278 30.6365"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask115_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask115_57_1615)">
                          <path
                            d="M80.3276 30.6365L80.8499 26.269"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask116_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask116_57_1615)">
                          <path
                            d="M80.85 26.269L81.3723 27.0638"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask117_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask117_57_1615)">
                          <path
                            d="M81.3723 27.0637L81.9022 29.0393"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask118_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask118_57_1615)">
                          <path
                            d="M81.9022 29.0393L82.4245 30.0612"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask119_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask119_57_1615)">
                          <path
                            d="M82.4244 30.061L82.9467 31.0677"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask120_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask120_57_1615)">
                          <path
                            d="M82.9467 31.068L83.4765 30.031"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask121_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask121_57_1615)">
                          <path
                            d="M83.4766 30.031L83.9988 29.645"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask122_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask122_57_1615)">
                          <path
                            d="M83.9989 29.645L84.5212 29.9856"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask123_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask123_57_1615)">
                          <path
                            d="M84.521 29.9855L85.0508 26.761"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask124_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask124_57_1615)">
                          <path
                            d="M85.0509 26.761L85.5732 26.2917"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask125_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask125_57_1615)">
                          <path
                            d="M85.5732 26.2917L86.0955 26.7005"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask126_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask126_57_1615)">
                          <path
                            d="M86.0956 26.7004L86.6179 24.5281"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask127_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask127_57_1615)">
                          <path
                            d="M86.6178 24.528L87.1476 23.491"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask128_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask128_57_1615)">
                          <path
                            d="M87.1476 23.491L87.6699 25.8223"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask129_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask129_57_1615)">
                          <path
                            d="M87.6699 25.8224L88.1922 22.5525"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask130_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask130_57_1615)">
                          <path
                            d="M88.1921 22.5523L88.722 21.75"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask131_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask131_57_1615)">
                          <path
                            d="M88.722 21.7503L89.2443 20.9707"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask132_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask132_57_1615)">
                          <path
                            d="M89.2443 20.9704L89.7665 18.957"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask133_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask133_57_1615)">
                          <path
                            d="M89.7666 18.957L90.2965 17.0571"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask134_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask134_57_1615)">
                          <path
                            d="M90.2964 17.0571L90.8187 18.5558"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask135_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask135_57_1615)">
                          <path
                            d="M90.8187 18.5557L91.341 18.813"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask136_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask136_57_1615)">
                          <path
                            d="M91.3409 18.8132L91.8708 18.6997"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask137_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask137_57_1615)">
                          <path
                            d="M91.8708 18.6995L92.3931 15.8459"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask138_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask138_57_1615)">
                          <path
                            d="M92.3931 15.846L92.9153 15.4675"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask139_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask139_57_1615)">
                          <path
                            d="M92.9154 15.4678L93.4452 12.6975"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask140_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask140_57_1615)">
                          <path
                            d="M93.4452 12.6972L93.9675 11.085"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask141_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask141_57_1615)">
                          <path
                            d="M93.9675 11.085L94.4898 11.9251"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask142_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask142_57_1615)">
                          <path
                            d="M94.4897 11.9256L95.012 9.50342"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask143_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask143_57_1615)">
                          <path
                            d="M95.0121 9.50342L95.5419 9.61696"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask144_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask144_57_1615)">
                          <path
                            d="M95.5419 9.61651L96.0641 9.09424"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask145_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask145_57_1615)">
                          <path
                            d="M96.0642 9.09437L96.5865 5.84717"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask146_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask146_57_1615)">
                          <path
                            d="M96.5864 5.84718L97.1163 5.73364"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask147_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask147_57_1615)">
                          <path
                            d="M97.1163 5.73356L97.6386 2.2063"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask148_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask148_57_1615)">
                          <path
                            d="M97.6385 2.2063L98.1608 3.32655"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask149_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask149_57_1615)">
                          <path
                            d="M98.1609 3.32642L98.6907 6.92937"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask150_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask150_57_1615)">
                          <path
                            d="M98.6907 6.92969L99.213 8.09535"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask151_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask151_57_1615)">
                          <path
                            d="M99.213 8.09525L99.7353 7.80005"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask152_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask152_57_1615)">
                          <path
                            d="M99.7352 7.80005L100.265 13.7268"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask153_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask153_57_1615)">
                          <path
                            d="M100.265 13.7268L100.787 14.5064"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask154_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask154_57_1615)">
                          <path
                            d="M100.787 14.5064L101.31 14.408"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask155_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask155_57_1615)">
                          <path
                            d="M101.31 14.408L101.84 19.275"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask156_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask156_57_1615)">
                          <path
                            d="M101.839 19.275L102.362 18.8057"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask157_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask157_57_1615)">
                          <path
                            d="M102.362 18.8057L102.884 19.8654"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask158_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask158_57_1615)">
                          <path
                            d="M102.884 19.8652L103.406 20.1302"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask159_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask159_57_1615)">
                          <path
                            d="M103.406 20.1303L103.936 19.0024"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask160_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask160_57_1615)">
                          <path
                            d="M103.936 19.0025L104.459 18.8208"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask161_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask161_57_1615)">
                          <path
                            d="M104.458 18.8208L104.981 21.2732"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask162_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask162_57_1615)">
                          <path
                            d="M104.981 21.2733L105.511 20.2061"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask163_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask163_57_1615)">
                          <path
                            d="M105.511 20.206L106.033 18.2759"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask164_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask164_57_1615)">
                          <path
                            d="M106.033 18.2759L106.555 19.3053"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask165_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask165_57_1615)">
                          <path
                            d="M106.555 19.3054L107.085 19.0632"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask166_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask166_57_1615)">
                          <path
                            d="M107.085 19.0632L107.607 19.2676"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                        <mask
                          id="mask167_57_1615"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="2"
                          width="90"
                          height="37"
                        >
                          <path
                            d="M19.7815 2.2063V38.5386H108.341V2.2063H19.7815Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask167_57_1615)">
                          <path
                            d="M107.607 19.2673L108.13 17.7913"
                            stroke="#F53E33"
                            strokeWidth="0.756923"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_1615">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.984619 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip1_57_1615">
                      <rect
                        width="126.154"
                        height="37.8461"
                        fill="white"
                        transform="translate(0.984619 0.692627)"
                      />
                    </clipPath>
                    <clipPath id="clip2_57_1615">
                      <rect
                        width="88.56"
                        height="37.8461"
                        fill="white"
                        transform="translate(19.7815 0.692627)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cryptos;
