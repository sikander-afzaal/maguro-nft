const Claim = () => {
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
      <div className="contain flex-col justify-center items-center ">
        <div className="flex justify-center items-center w-full max-w-[1034px] sm:h-[706px] relative flex-col">
          <img
            src="/mangaroo.png"
            className="absolute sm:block hidden -z-10 w-full h-full object-fill"
            alt=""
          />
          <h2 className="uppercase text-3xl sm:text-[30px] lg:text-[42px] font-bold text-white sm:absolute top-[4%] sm:top-[2%] lg:top-0 lg:leading-[1.5] sm:translate-y-1/2 sm:-translate-x-1/2 left-1/2">
            you get magoru now
          </h2>
          <div className="flex sm:pt-10 pt-6 justify-center items-center flex-col w-full max-w-[500px] lg:max-w-[778px] text-center gap-5">
            <p className="text-secondary max-w-[670px] text-xl sm:text-2xl font-bold">
              A total of 84,000,000 $MAGURO tokens are now available to be
              claimed by those who have claimed the ARB airdrop. $MAGURO tokens
              that have not been claimed within
            </p>
            <button className="w-[360px] text-mainRed text-2xl font-bold grid place-items-center relative h-[67px]">
              <img
                src="/btn-bg.png"
                className="-z-10 w-full h-full absolute left-0 top-0"
                alt=""
              />
              🔥 31 days will be burned
            </button>
            <div className="w-full flex justify-start flex-col items-center gap-3">
              <div className="flex justify-between items-center w-full gap-2">
                <p className="text-2xl font-bold text-secondary">Claimed</p>
                <p className="text-2xl font-bold text-secondary">84,000,000</p>
              </div>
              <div className="w-full rounded-full relative h-2 bg-[#BDBDBD] overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 bg-mainRed rounded-full h-full"></div>
              </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col mt-4 items-center gap-4 sm:gap-8 w-full">
              <button className="text-white bg-mainRed rounded-2xl sm:w-auto w-full px-10 lg:px-[60px] py-4 hover:bg-transparent hover:text-mainRed border-2 border-solid border-mainRed transition-all duration-300 text-lg font-mont font-semibold">
                Claim Now
              </button>
              <button className="text-mainRed bg-transparent rounded-2xl px-10 sm:w-auto w-full lg:px-[60px] py-4 hover:bg-mainRed hover:text-white border-2 border-solid border-mainRed transition-all duration-300 text-lg font-mont font-semibold">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;
