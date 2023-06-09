import FaqBtn from "../../components/FaqBtn";

const Faq = () => {
  const DATA = [
    {
      question: "What is Maguro Finance ($MAGURO)?",
      answer:
        "Maguro Finance is a multi-currency and multi-chain reward token. By buying and holding $MAGURO you are farming rewards and accumulating tokens supported by the Maguro Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What is the benefit of holding $MAGURO?",
      answer:
        "By simply holding $MAGURO, the Maguro Finance protocol will distribute rewards by the platform directly to you.",
    },
    {
      question: "How do I get my rewards?",
      answer:
        "You'll be airdropped your rewards once you're first in queue. You can choose to enable Manual Claim or even 'GO Maguro', this turns your rewards into $MAGURO.",
    },
    {
      question: "How are rewards generated?",
      answer:
        "Each buy and sell will be taxed 7%, which will only be used to buy tokens and redistribute to $MAGURO holders as rewards and provide liquidity to $MAGURO LP. (% tax subject to change).",
    },
    {
      question: "How do projects benefit from $MAGURO?",
      answer:
        "Projects benefit from $MAGURO by gaining exposure and increased unique holders who may not have ever heard of your project.",
    },
    {
      question: "Which tokens will be farmed?",
      answer:
        "To begin, $MAGURO will begin farming tokens on Arbitrum with plans to go cross-chain and multi-chain to farm additional tokens. With our revolutionary technology we are going to bring mass exposure and rewards to holders via Maguro Finance.",
    },
    {
      question: "What chains do you plan on expanding?",
      answer:
        "We are exploring all the chains starting with L2s and side-chains. (Optimism, Avalanche, Binance Smart Chain, Pulsechain, and more)",
    },
  ];
  return (
    <div
      id="faq"
      className="wrapper w-full pb-[200px] lg:pb-[300px] relative  mt-[100px]"
    >
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
