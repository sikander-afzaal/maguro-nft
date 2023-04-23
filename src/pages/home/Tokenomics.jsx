const Tokenomics = () => {
  return (
    <div className="wrapper mt-[80px] md:mt-[100px] relative">
      <img
        src="/tokenomics.png"
        className="lg:static absolute left-0 top-0 -z-10 lg:h-auto h-full min-h-[600px] 2xl:min-h-0  w-full object-cover "
        alt=""
      />
      <div className="contain lg:p-0 py-32 lg:flex-row flex-col left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 justify-center lg:justify-between lg:absolute static top-1/2  items-center ">
        <div className="flex lg:flex-col justify-start min-w-[320px] xl:min-w-[450px]  items-center  flex-col sm:flex-row text-center gap-5">
          <h3 className="text-secondary text-xl lg:leading-[1.2] lg:text-[2.5vw] font-bold">
            Ticker: $MAGURO
          </h3>
          <h3 className="text-secondary text-2xl lg:text-[4vw] lg:leading-[1.2] font-bold">
            7% Buy <br />
            7% Sell Tax
          </h3>

          <h3 className="text-white lg:text-[#B11613] text-xl lg:text-[2.5vw] lg:leading-[1.2] font-bold static lg:relative top-[5vh] xl:top-[7vh] 2xl:top-[9vh] ">
            Total Supply: <br />
            50,000,000,000
          </h3>
        </div>
        <div className="flex w-full justify-center flex-col items-center gap-6">
          <div className="relative flex justify-start items-center gap-5">
            <img
              src="/left-head.png"
              className="w-[50px] 2xl:w-[70px] object-contain pb-10"
              alt=""
            />
            <h4 className="text-white uppercase font-bold text-[40px] 2xl:text-[64px]">
              Tokenomic
            </h4>
            <img
              src="/fishes.png"
              className="w-[170px] xl:block hidden 2xl:w-[242px] object-contain absolute left-full top-0 -translate-y-8"
              alt=""
            />
          </div>
          <img
            src="/chart.png"
            className="w-full max-w-[600px]  lg:max-w-[1125px] object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
