import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    const bgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", bgFunc);
    return () => {
      window.removeEventListener("scroll", bgFunc);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed z-50 top-0 left-0 ${
        headerBg ? "bg-secondary" : "bg-transparent"
      } transition-all duration-300`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 z-[88] w-full h-full bg-black opacity-60 lg:hidden block cursor-pointer"
        ></div>
      )}
      <div className="contain justify-between items-center h-[80px] lg:h-[100px]">
        <nav
          className={`flex justify-start z-[90] items-center sm:items-start w-full h-full sm:max-w-[450px] px-[3rem] pt-[6rem] pb-[3rem] lg:h-auto lg:w-auto lg:max-w-none lg:p-0 bg-secondary lg:bg-transparent transition-all duration-700 lg:items-center gap-7 lg:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-full"
          }  overflow-y-auto lg:overflow-visible lg:flex-row flex-col`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-white uppercase font-bold text-xl xl:text-2xl"
            href="#"
          >
            AirDrop
          </a>
          <div className="bg-white w-[3px] h-7 xl:block hidden"></div>
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-white uppercase font-bold text-xl xl:text-2xl"
            href="#"
          >
            Litepaper
          </a>{" "}
          <div className="bg-white w-[3px] h-7 xl:block hidden"></div>
          <HashLink
            onClick={() => setHeaderToggle(false)}
            className="text-white uppercase font-bold text-xl xl:text-2xl"
            to="/#tokenomics"
            smooth
          >
            Tokenomics
          </HashLink>{" "}
          <div className="bg-white w-[3px] h-7 xl:block hidden"></div>
          <HashLink
            onClick={() => setHeaderToggle(false)}
            className="text-white uppercase font-bold text-xl xl:text-2xl"
            to="/#faq"
            smooth
          >
            FAQ
          </HashLink>{" "}
          <div className="bg-white w-[3px] h-7 xl:block hidden"></div>
          <div className="flex justify-center items-center gap-3">
            <a onClick={() => setHeaderToggle(false)} href="#" target="blank">
              <img
                src="/telegram.png"
                className="w-10 object-contain aspect-square"
                alt=""
              />
            </a>
            <a onClick={() => setHeaderToggle(false)} href="#" target="blank">
              <img
                src="/twitter.png"
                className="w-10 object-contain aspect-square"
                alt=""
              />
            </a>
          </div>
          <Link
            to="/overview"
            onClick={() => setHeaderToggle(false)}
            className="bg-main grid place-items-center rounded-xl w-[138px] h-[48px] font-mont text-base font-bold text-secondary"
          >
            App
          </Link>
        </nav>
        <Link to="/">
          <img
            src="/logo.png"
            className="w-[180px] mix-blend-difference xl:w-[220px] object-contain"
            alt=""
          />
        </Link>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="lg:hidden   block relative z-[91]"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={headerBg ? "white" : "black"}
              className="w-7 h-7  mix-blend-difference"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
