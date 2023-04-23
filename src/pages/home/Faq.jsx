import FaqBtn from "../../components/FaqBtn";

const Faq = () => {
  const DATA = [
    {
      question: "What is ZKASH Finance ($ZKASH)?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What is the benefit of holding $ZKASH?",
      answer:
        "By simply holding $ZKASH, the Hamachi Finance protocol will distribute rewards by the platform directly to you.",
    },
    {
      question: "How do I get my rewards?",
      answer:
        "You'll be airdropped your rewards once you're first in queue. You can choose to enable Manual Claim or even 'GO ZKASH', this turns your rewards into $ZKASH.",
    },
    {
      question: "How are rewards generated?",
      answer:
        "Each buy and sell will be taxed 7%, which will only be used to buy tokens and redistribute to $ZKASH holders as rewards and provide liquidity to $ZKASH LP. (% tax subject to change).",
    },
    {
      question: "How do projects benefit from $ZKASH?",
      answer:
        "Projects benefit from $ZKASH by gaining exposure and increased unique holders who may not have ever heard of your project.",
    },
    {
      question: "Which tokens will be farmed?",
      answer:
        "To begin, $ZKASH will begin farming tokens on Arbitrum with plans to go cross-chain and multi-chain to farm additional tokens. With our revolutionary technology we are going to bring mass exposure and rewards to holders via Hamachi Finance.",
    },
    {
      question: "What chains do you plan on expanding?",
      answer:
        "We are exploring all the chains starting with L2s and side-chains. (Optimism, Avalanche, Binance Smart Chain, Pulsechain, and more)",
    },
  ];
  return (
    <div className="wrapper relative pb-[200px] lg:pb-[300px] mt-[100px]">
      <img
        src="/hero-foot.png"
        className="w-full object-cover lg:h-auto h-[250px] lg:object-contain -z-10 absolute bottom-0 right-0"
        alt=""
      />
      <div className="contain flex-col justify-center items-center gap-10">
        <h2 className="text-secondary font-bold text-[50px] sm:text-[64px]">
          FAQs
        </h2>
        <div className="flex justify-start flex-col items-center w-full max-w-[1035px] ">
          {DATA.map((elem, idx) => {
            return <FaqBtn {...elem} key={idx + elem.question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
