/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TrendingContext = createContext({});
const useTrending = () => useContext(TrendingContext);
const TrendingProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const getTrendingCryptos = async () => {
      try {
        const {
          data: { coins },
        } = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        setTrendingData(coins);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingCryptos();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendingData, setTrendingData }}>
      {children}
    </TrendingContext.Provider>
  );
};
export { useTrending, TrendingProvider };
