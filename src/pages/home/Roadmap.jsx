const Roadmap = () => {
  return (
    <div className="wrapper bg-roadmap xl:pb-[250px] bg-no-repeat 2xl:bg-[100%__100%] bg-cover relative  xl:pt-[22vh] pt-[20vh] pb-20 -mt-[16vh] -z-20">
      {/* <img
        src="/roadmap.png"
        className="object-cover xl:block hidden xl:min-w-0 xl:static absolute -top-[16vh] left-0 -z-10 2xl:min-w-0 min-w-[2000px]  w-full"
        alt=""
      /> */}
      <img src="/sushi.png" className="bottom-0 right-0 absolute" alt="" />
      <div className="contain  justify-center items-center flex-col gap-7">
        <h3 className="text-secondary font-bold text-[50px] sm:text-[64px]">
          Roadmap
        </h3>
        <div className="flex xl:flex-row w-full flex-col justify-center items-center gap-10">
          <div className="max-w-[370px] w-full  flex-col gap-3 text-center h-[280px] flex justify-center items-center isolate relative">
            <img
              src="/road-bg.png"
              className="absolute left-0 top-0 -z-10 object-fill"
              alt=""
            />
            <h4 className="w-min sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[36px] font-bold">
              MAGURO Protocol
            </h4>
            <p className="text-secondary max-w-[220px] font-mont">
              First Lego built on top of MAGURO Protocol
            </p>
          </div>
          <div className="max-w-[370px] w-full  flex-col gap-3 text-center h-[280px] flex justify-center items-center isolate relative">
            <img
              src="/road-bg.png"
              className="absolute left-0 top-0 -z-10 object-fill"
              alt=""
            />
            <h4 className="w-min sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[36px] font-bold">
              MemeFi Development
            </h4>
            <p className="text-secondary max-w-[220px] font-mont">
              More rewards for holders independent of ZKASH trade volume
            </p>
          </div>
          <div className="max-w-[370px] w-full  flex-col gap-3 text-center h-[280px] flex justify-center items-center isolate relative">
            <img
              src="/road-bg.png"
              className="absolute left-0 top-0 -z-10 object-fill"
              alt=""
            />
            <h4 className=" sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[36px] font-bold">
              Banker <br /> Collection NFT
            </h4>
            <p className="text-secondary max-w-[220px] font-mont">
              BANKER NFT Collection launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
