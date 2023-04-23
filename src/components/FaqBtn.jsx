import { useEffect, useRef, useState } from "react";
import $ from "jquery";

const FaqBtn = ({ question, answer }) => {
  const answerRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    $(answerRef.current).slideUp();
  }, []);

  useEffect(() => {
    if (active) $(answerRef.current).slideDown();
    else $(answerRef.current).slideUp();
  }, [active]);

  return (
    <div className="flex  justify-start overflow-hidden p-3 items-start flex-col w-full">
      <div className="isolate relative w-full">
        <div className="bg-primaryGr absolute -inset-[3px]  -z-10 rounded-[20px]"></div>
        <button
          onClick={() => setActive((prev) => !prev)}
          className="flex bg-white  text-left gap-4 rounded-[20px] justify-between items-center px-4 sm:px-8 min-h-[75px] w-full"
        >
          <h4 className="text-base sm:text-2xl lg:text-[28px] text-secondary">
            {question}
          </h4>
          <img
            src="/arrow.png"
            className={`w-3 sm:w-6 lg:w-[35px] object-contain transition-all duration-300 ${
              active ? "rotate-180" : "rotate-0"
            }`}
            alt=""
          />
        </button>
      </div>
      <div
        className={`flex justify-start items-start px-3  flex-col duration-500 ${
          active ? " py-5 " : " p-0"
        }`}
      >
        <p
          ref={answerRef}
          className="font-mont text-sm sm:text-base text-secondary"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqBtn;
