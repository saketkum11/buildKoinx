const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-left ">About Bitcoin</h2>
      <h3 className="font-bold text-lg py-4">What is Bitcoin?</h3>
      <p className="font-bold text-start text-base">
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <h3 className="font-bold text-start text-lg py-4">
        Lorem ipsum dolor sit amet
      </h3>
      <p className="font-bold text-start text-base ">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="font-bold text-start text-base py-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="font-bold text-start text-base py-4">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <h2 className="font-bold text-lg py-4">Already Holding Crypto?</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="py-4 w-full flex gap-6 bg-gradient-to-br from-green-400 to-blue-900 rounded-lg p-3">
          <img
            src="./assets/profite.jpg"
            className="w-28 h-28 rounded-lg"
            alt=""
          />
          <div>
            <p className="text-white text-lg  font-bold pb-4">
              Calculate your Profits
            </p>
            <button className="bg-white flex items-center px-4 py-2 gap-1 rounded-lg">
              <span className="font-bold text-xs">Check out</span>
              <span>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3036 6.06345L1.64001 6.06345"
                    stroke="#0F1629"
                    strokeWidth="1.39963"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.59949 1.37906L13.3038 6.06315L8.59949 10.748"
                    stroke="#0F1629"
                    strokeWidth="1.39963"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full  flex gap-6 bg-gradient-to-br from-orange-400 to-rose-500 rounded-lg p-3">
          <img
            src="./assets/profite.jpg"
            className="w-28 h-28 rounded-lg"
            alt=""
          />
          <div>
            <p className="text-white text-lg font-bold pb-4">
              Calculate your tax liability
            </p>
            <button className="bg-white flex items-center px-4 py-2 gap-1 rounded-lg">
              <span className="font-bold text-xs">Check out</span>
              <span>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3036 6.06345L1.64001 6.06345"
                    stroke="#0F1629"
                    strokeWidth="1.39963"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.59949 1.37906L13.3038 6.06315L8.59949 10.748"
                    stroke="#0F1629"
                    strokeWidth="1.39963"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
