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
            <h4 className=" sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[30px] sm:text-[36px] font-bold">
              Maguro Protocol <br /> Launch
            </h4>
          </div>
          <div className="max-w-[370px] w-full  flex-col gap-3 text-center h-[280px] flex justify-center items-center isolate relative">
            <img
              src="/road-bg.png"
              className="absolute left-0 top-0 -z-10 object-fill"
              alt=""
            />
            <h4 className=" sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[30px] sm:text-[36px] font-bold">
              Maguro Full <br /> Course Reward
            </h4>
          </div>
          <div className="max-w-[370px] w-full  flex-col gap-3 text-center h-[280px] flex justify-center items-center isolate relative">
            <img
              src="/road-bg.png"
              className="absolute left-0 top-0 -z-10 object-fill"
              alt=""
            />
            <h4 className=" sm:mt-0 -mt-2 leading-[1.2] text-secondary text-[30px] sm:text-[36px] font-bold">
              Nigri <br /> Collection NFT
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
