/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CryptoContext = createContext({});
const useCrypto = () => useContext(CryptoContext);
const CryptoProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getBitcoinPrice = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price`,
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        setData(data.bitcoin);
      } catch (error) {
        console.error(error);
      }
    };
    getBitcoinPrice();
  }, []);

  return (
    <CryptoContext.Provider value={{ data, setData }}>
      {children}
    </CryptoContext.Provider>
  );
};
export { useCrypto, CryptoProvider };
