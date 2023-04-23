import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Traits = () => {
  return (
    <div className="wrapper mt-10 sm:mt-20">
      <div className="contain justify-between xl:flex-row flex-col items-center text-center sm:text-left sm:items-start xl:items-center gap-4 xl:gap-6">
        <h3 className="text-secondary leading-[1.25] text-xl sm:text-2xl 2xl:text-[36px] font-bold xl:max-w-[765px]">
          Picking the next bluechip project is never an easy task, let Maguro
          diversify your portfolio for you
        </h3>
        <p className="text-sm sm:text-base font-semibold font-mont relative xl:max-w-[668px] text-[#5A5257]">
          With $MAGURO you will accumulate good projects on multiple chains
          throughout the bear market, just by holding! You asked for ARBI
          season, we're here to ignite it. Be a part of the most exciting new
          community on the chain from the beginning!
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
          <SplideSlide>
            <TraitBox />
          </SplideSlide>
          <SplideSlide>
            <TraitBox />
          </SplideSlide>
          <SplideSlide>
            <TraitBox />
          </SplideSlide>
          <SplideSlide>
            <TraitBox />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Traits;

const TraitBox = () => {
  return (
    <div className=" flex justify-start text-center items-center flex-col sm:w-full w-[95%] max-w-[368px] rounded-[40px] p-5 sm:p-[32px] bg-primaryGr ">
      <img
        src="/upto-date.png"
        className="w-full object-contain aspect-square"
        alt=""
      />
      <div>
        <h4 className="text-white mt-4  font-bold text-[28px]">
          Stay up to date
        </h4>
        <p className="font-mont mt-1 text-white text-sm">
          Our goal is to become the ultimate community hub on the arbitrum
          chain. We're an active community and regularly hold AMAs with teams
          and project updates.
        </p>
      </div>
    </div>
  );
};
