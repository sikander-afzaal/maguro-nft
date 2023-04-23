const Hero = () => {
  return (
    <div className="wrapper relative h-[80svh] min-h-[600px] lg:h-screen lg:min-h-[1160px]">
      <img
        src="/home-hero.png"
        className="w-full h-full absolute -z-10 object-cover"
        alt=""
      />
      <div className="contain sm:text-left text-center justify-start pt-[120px] sm:pt-0 sm:justify-center gap-10 sm:gap-20 flex-col items-center lg:items-start h-full">
        <h3 className=" text-3xl sm:text-[40px] drop-shadow lg:drop-shadow-none lg:text-[58px] lg:leading-[1.2] font-bold text-main max-w-[882px]">
          Build a diverse portfolio with $ZKASH. zKSync Era's first{" "}
          <span className="text-white">multi-currency </span>
          rewards token.
        </h3>
        <button
          onClick={() => setHeaderToggle(false)}
          className="bg-[#EAE2B7] rounded-2xl w-[195px] h-[60px] font-mont text-lg font-bold text-secondary"
        >
          Buy on zKSync
        </button>
      </div>
    </div>
  );
};

export default Hero;
