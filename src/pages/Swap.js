import { setup1inchWidget } from "@1inch/embedded-widget";
import { useEffect, useState } from "react";
import $ from "jquery";
import "../assets/css/Swap.css";
function Swap() {
  const [loaded, setLoad] = useState(false);
  useEffect(() => {
    const swapAggregator = setup1inchWidget({
      chainId: 137,
      sourceTokenSymbol: '1INCH',
      destinationTokenSymbol: 'DAI',
      hostElement: document.getElementById("v-aggregator"),
      // provider: window.ethereum,
      theme: 'dark',
      sourceTokenAmount: '15'
    });
    console.log(swapAggregator);
    swapAggregator.onIframeLoad(() => {
      setLoad(true);

    })
  }, [])
  return (
    <>
      <br />
      <br />
      <div
        id="v-aggregator"
        className="w-full h-screen border-solid"
        style={loaded ? { visibility: "visible" } : { visibility: "hidden" }}
      ></div>
    </>
  );

}

export default Swap;
