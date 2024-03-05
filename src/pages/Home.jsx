import Breadcrumbs from "../component/Breadcrumbs";
import CryptoChart from "../component/CryptoChart";
import Cryptocurency from "../component/Cryptocurency";
import Header from "../component/Header";
import Performance from "../component/Performance";
import Tab from "../component/Tab";
import Fundamental from "../component/Fundamental";
import Sentiment from "../component/Sentiment";
import About from "../component/About";
import TeamCard from "../component/TeamCard";
import Cryptos from "../component/Cryptos";
import CallToActionCard from "../component/CallToActionCard";
import TrendingCard from "../component/TrendingCard";
const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main>
        <div className="max-w-sm mx-auto px-3">
          <Breadcrumbs />
          <section className="flex justify-start items-center pb-4 ">
            <Cryptocurency />
          </section>
          <section className="bg-white rounded-lg px-6 py-6 mb-5 ">
            <CryptoChart />
          </section>
          <section className="mb-5">
            <Tab />
          </section>
          <section className="bg-white rounded-lg px-2 py-6 mb-5">
            <Performance />
            <Fundamental />
          </section>
          <section className="bg-white rounded-lg px-2 py-6 mb-5">
            <Sentiment />
            <Fundamental />
          </section>
          <section className="bg-white rounded-lg px-2 py-6 mb-5">
            <About />
          </section>
          <section className="bg-white rounded-lg px-2 py-6 mb-5">
            <TeamCard />
            <div className="my-4">
              <Cryptos />
              <Cryptos />
            </div>
          </section>
          <section className="bg-blue-700 rounded-lg px-2 py-6 mb-5">
            <CallToActionCard />
          </section>
        </div>
        <section className="bg-white  px-2 py-6 mb-5">
          <TrendingCard />
        </section>
      </main>
    </div>
  );
};

export default Home;
