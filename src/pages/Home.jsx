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
        <div className="mx-auto px-3">
          <Breadcrumbs />
          <div className="md:grid md:grid-cols-12 md:gap-4">
            <div className="sm:col-span-8">
              <section className="bg-white flex flex-col justify-start  p-4 rounded-lg ">
                <div className="pb-4">
                  <Cryptocurency />
                </div>
                <div className="pt-4">
                  <CryptoChart />
                </div>
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
                <div className="my-4 block md:hidden">
                  <Cryptos />
                  <Cryptos />
                </div>
              </section>
            </div>
            <div className="md:col-span-4 ">
              <section className="">
                <div className="mx-3">
                  <div className="bg-blue-700  rounded-lg px-2 py-6 mb-5 mx-auto ">
                    <CallToActionCard />
                  </div>
                  <div className="bg-white rounded-lg px-2 py-6 mb-5 hidden md:block">
                    <TrendingCard />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-4 bg-white py-4">
        <div className="my-4 bg-white hidden md:block">
          <Cryptos />
          <Cryptos />
        </div>
        <div className="bg-white rounded-lg px-2 py-6 mb-5 block md:hidden ">
          <TrendingCard />
        </div>
      </footer>
    </div>
  );
};

export default Home;
