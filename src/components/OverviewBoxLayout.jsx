const OverviewBoxLayout = ({ children, padding }) => {
  return (
    <div
      className={`flex h-full pt-8 justify-start items-start flex-col gap-4 relative  w-full  ${
        padding ? "lg:px-8 px-6 sm:px-10 " : "px-0"
      }`}
    >
      <img
        src="/overview.png"
        className="absolute left-0 top-0 -z-10 object-fill w-full h-full"
        alt=""
      />
      {children}
    </div>
  );
};

export default OverviewBoxLayout;
