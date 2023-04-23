import { useState } from "react";
import GraphLine from "../../components/Chart";
import OverviewBoxLayout from "../../components/OverviewBoxLayout";

const Overview = () => {
  const [time, setTime] = useState(5);
  const [inputState, setInputState] = useState(1035);
  return (
    <div className="bg-bg2 pb-[200px] lg:pb-[300px] xl:pb-[500px] relative bg-cover  isolate pt-[100px] lg:pt-[140px] min-h-screen wrapper">
      <img
        src="/sushi2.png"
        className="absolute -z-10 right-0 top-[7%] lg:top-[15%]"
        alt=""
      />
      <img
        src="/hero-foot.png"
        className="w-full object-cover lg:h-auto  h-[250px] lg:object-contain -z-10 absolute bottom-0 right-0"
        alt=""
      />
      <div className="contain flex-col justify-center items-center gap-5 sm:gap-10">
        <h3 className="text-white font-bold text-[50px] sm:text-[64px]">
          Overview
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-12 sm:gap-8 relative">
          <OverviewBoxLayout>
            <h3 className="text-aspidBlue  px-6 sm:px-10 lg:px-6 text-2xl sm:text-[28px]">
              Reward Token
            </h3>
            <div className="w-full flex justify-between px-6 sm:px-10 lg:px-6  items-center gap-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src="/logo.png"
                  className="w-[130px]  object-contain"
                  alt=""
                />
              </div>
              <div className="flex justify-start  items-center gap-3">
                <img
                  src="/graph.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
                <img
                  src="/shuffle.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
                <img
                  src="/metamask.png"
                  className="object-contain w-[36px]"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full pl-2 sm:pl-4 lg:pl-1.5 pb-1.5 lg:pb-2 pr-2 sm:pr-6 lg:pr-2.5">
              <GraphLine />
            </div>
            {/* <img
          src="/reward-graph.png"
          className="w-full h-[172px] object-cover mt-4"
          alt=""
        /> */}
          </OverviewBoxLayout>
          <OverviewBoxLayout padding>
            <h3 className="text-aspidBlue  text-2xl sm:text-[28px]">$maguro</h3>
            <p className="text-aspidBlue text-[28px] ">
              $0.00057270 <span className="text-success">+20%</span>{" "}
              <span className="text-fail">-20%</span>
            </p>
            <div className="flex mt-auto mb-5  justify-start items-start flex-col w-full">
              <div className="flex justify-start items-center">
                <button
                  onClick={() => setTime(5)}
                  className={` ${
                    time === 5
                      ? "bg-aspidBlue text-white"
                      : "bg-transparent text-aspidBlue"
                  } px-3 text-2xl rounded-tl-xl rounded-tr-xl transition-all duration-300 py-1`}
                >
                  5m
                </button>
                <button
                  onClick={() => setTime(1)}
                  className={` ${
                    time === 1
                      ? "bg-aspidBlue text-white"
                      : "bg-transparent text-aspidBlue"
                  } px-3 text-2xl rounded-tl-xl rounded-tr-xl transition-all duration-300 py-1`}
                >
                  1h
                </button>
                <button
                  onClick={() => setTime(6)}
                  className={` ${
                    time === 6
                      ? "bg-aspidBlue text-white"
                      : "bg-transparent text-aspidBlue"
                  } px-3 text-2xl rounded-tl-xl rounded-tr-xl transition-all duration-300 py-1`}
                >
                  6h
                </button>
                <button
                  onClick={() => setTime(24)}
                  className={` ${
                    time === 24
                      ? "bg-aspidBlue text-white"
                      : "bg-transparent text-aspidBlue"
                  } px-3 text-2xl rounded-tl-xl rounded-tr-xl transition-all duration-300 py-1`}
                >
                  24h
                </button>
              </div>
              <div
                className={`flex ${
                  time === 5 ? "" : "rounded-tl-xl"
                } rounded-bl-xl rounded-br-xl rounded-tr-xl justify-start items-center w-full gap-6 p-3 bg-aspidBlue`}
              >
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-mont">Volume</p>
                  <p className="text-white text-2xl ">$212.6</p>
                </div>
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-mont">Buys</p>
                  <p className="text-white text-2xl ">231</p>
                </div>
                <div className="flex justify-start flex-col items-center">
                  <p className="text-white font-mont">Sell</p>
                  <p className="text-white text-2xl ">214</p>
                </div>
              </div>
            </div>
          </OverviewBoxLayout>
          <OverviewBoxLayout padding>
            <h3 className="text-aspidBlue  text-2xl sm:text-[28px]">Info</h3>
            <div className="flex justify-start mb-5  items-center flex-col gap-1  w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary text-sm  font-mont">
                  Reward Holders
                </p>
                <p className="text-secondary text-2xl font-bold">2580</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-secondary text-sm  font-mont">
                  Tx (buy/sell)
                </p>
                <p className="text-secondary text-2xl font-bold">7%</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-secondary text-sm  font-mont">
                  Circulating Supply
                </p>
                <p className="text-secondary text-2xl font-bold">18B</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-secondary text-sm  font-mont">
                  Total Supply
                </p>
                <p className="text-secondary text-2xl font-bold">48.18B</p>
              </div>
              <div className="flex justify-between items-center w-full gap-1">
                <p className="text-secondary text-sm  font-mont">Market Cap</p>
                <p className="text-secondary text-2xl font-bold">$10.3M</p>
              </div>
            </div>
          </OverviewBoxLayout>
          <OverviewBoxLayout padding>
            <h3 className="text-aspidBlue  text-2xl sm:text-[28px]">Stats</h3>
            <div className="flex justify-start mt-1 items-center flex-col gap-4  w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary text-sm font-mont">Daily Volume</p>
                <p className="text-secondary text-2xl font-bold">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary text-sm font-mont">
                  Hourly Volume
                </p>
                <p className="text-secondary text-2xl font-bold">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary text-sm font-mont">
                  Daily Rewards Volume
                </p>
                <p className="text-secondary text-2xl font-bold">$120.6K</p>
              </div>
              <div className="flex p-4 w-full rounded-xl bg-aspidBlue justify-start items-start flex-col gap-5 xl:mt-20 mt-10 mb-8 xl:mb-0 ">
                <p className="text-[28px] text-white">Your $maguro Balance</p>
                <div className="flex justify-between  items-center w-full gap-1">
                  <p className="text-white font-mont">Daily Rewards</p>
                  <p className="text-white text-2xl font-bold">$8.4K</p>
                </div>
              </div>
            </div>
          </OverviewBoxLayout>
          <OverviewBoxLayout padding>
            <h3 className="text-aspidBlue  text-2xl sm:text-[28px]">
              Rewards Queue
            </h3>
            <p className="text-base font-mont  text-secondary">
              Automatically distributes your rewards once first in line.
            </p>
            <p className="font-mont  text-main font-medium">
              Your wallet is not accuing rewards!
            </p>
            <div className="flex justify-start mt-1 mb-5 items-center flex-col gap-4  w-full">
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary font-mont text-sm">
                  Pending Rewards
                </p>
                <p className="text-secondary text-2xl font-bold">$120.6K</p>
              </div>
              <div className="flex justify-between  items-center w-full gap-1">
                <p className="text-secondary font-mont text-sm">
                  Total Rewards
                </p>
                <p className="text-secondary text-2xl font-bold">$120.6K</p>
              </div>
            </div>
          </OverviewBoxLayout>
          <OverviewBoxLayout padding>
            <h3 className="text-aspidBlue flex justify-start items-center gap-2  text-2xl sm:text-[28px]">
              APY{" "}
              <p className="text-white text-sm rounded-lg bg-[#F77F00] px-[10px] py-1">
                Beta
              </p>
            </h3>
            <h3 className="text-[#E53935]   text-2xl sm:text-[36px]">12%</h3>
            <div className="flex justify-between  items-center w-full gap-1 ">
              <p className="text-secondary text-sm font-mont">My maguro</p>
              <p className="text-secondary text-2xl font-bold">$124.2 | day</p>
            </div>
            <div className=" w-full mt-5">
              <div className="flex justify-start items-start w-full pt-5  flex-col gap-4 border-t-2 border-solid border-aspidBlue">
                <p className="text-secondary font-bold text-2xl">
                  Calculate Expected Returns
                </p>
                <div className="flex justify-between rounded-2xl items-center p-4 bg-[#FCBF49] w-full">
                  <input
                    className="text-white text-[28px] font-bold bg-transparent outline-none w-full"
                    type="text"
                    value={inputState}
                    onChange={(e) => setInputState(e.target.value)}
                    placeholder={0}
                  />
                  <p className="text-white text-[28px] font-bold">maguro</p>
                </div>
              </div>
            </div>
            <p className=" text-secondary text-base font-mont mb-8 mt-7 sm:mt-10">
              * 7 day average APY Indication. Dependant on trade volume
            </p>
          </OverviewBoxLayout>
        </div>
      </div>
    </div>
  );
};

export default Overview;
