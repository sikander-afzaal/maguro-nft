import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Traits = () => {
  const DATA = [
    {
      title: "Stay up to date",
      desc: "Our goal is to become the ultimate community hub on the arbitrum chain. We're an active community and regularly hold AMAs with teams and project updates.",
      img: "/upto-date.png",
    },
    {
      title: "Diversify your portfolio",
      desc: "Our contract buys the best projects on Arbitrum. Trusting the wisdom of the crowd to decide which projects to chose through our governance system.",
      img: "/portfolio.png",
    },
    {
      title: "Rewards",
      desc: "Any hot project on Arbitrum Network can be farmed during a certain period of time",
      img: "/rewards.png",
    },
    {
      title: "Your Choice!",
      desc: "Disagree with the coin we're farming? That's Ok we can't all be on the same page all of the time. Choose to take your rewards in $MAGURO instead by smashing the 'GO MAGURO' button.",
      img: "/choice.png",
    },
    {
      title: "Exposure",
      desc: "We want to help other projects grow. We bring buy volume, market exposure, and additional wallets, something that can be potentially leveraged to benefit our community in the future.",
      img: "/exposure.png",
    },
    {
      title: "Expansion",
      desc: "Maguro Finance will start on Arbitrum with plans to go cross-chain and accumulate ERC-20 tokens from additional chains in the future. Details TBA however the OG $MAGURO token will remain the key to accessing future launches.",
      img: "/expansion.png",
    },
  ];
  return (
    <div className="wrapper mt-10 sm:mt-20">
      <div className="contain justify-between xl:flex-row flex-col items-center text-center sm:text-left sm:items-start xl:items-center gap-4 xl:gap-6">
        <h3 className="text-secondary leading-[1.25] text-xl sm:text-2xl 2xl:text-[36px] font-bold xl:max-w-[765px]">
          Choosing the next blue chip investment is never simple; let Maguro
          diversify your portfolio.
        </h3>
        <p className="text-sm sm:text-base font-semibold font-mont relative xl:max-w-[668px] text-[#5A5257]">
          Simply by holding $MAGURO throughout the bear market, Users will amass
          excellent projects on multiple networks. Participate in the chain's
          most thrilling new community from its inception!
          <span className="bg-primaryGr hidden sm:block absolute top-0 w-[4px] h-full -left-3"></span>
        </p>
      </div>
      <div className="w-full mt-0 sm:mt-10 traits">
        <Splide
          options={{
            pagination: false,
            perPage: 4,
            perMove: 1,
            drag: true,
            gap: "1rem",
            type: "loop",
            width: "100%",
            breakpoints: {
              1536: {
                perPage: 3,
                focus: "center",
              },
              1209: {
                perPage: 2,
              },
              787: {
                perPage: 1,
              },
            },
          }}
        >
          {DATA.map((elem, idx) => {
            return (
              <SplideSlide key={idx + elem.title}>
                <TraitBox {...elem} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Traits;

const TraitBox = ({ title, desc, img }) => {
  return (
    <div className=" flex justify-start text-center items-center flex-col sm:w-full w-[95%] max-w-[368px] rounded-[40px] p-5 sm:p-[32px] bg-primaryGr ">
      <img src={img} className="w-full object-contain aspect-square" alt="" />
      <div>
        <h4 className="text-white mt-4  font-bold text-[28px]">{title}</h4>
        <p className="font-mont mt-1 text-white text-sm">{desc}</p>
      </div>
    </div>
  );
};
