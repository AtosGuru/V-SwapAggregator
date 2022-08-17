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
      $.get('https://app.1inch.io/#/1/embedded-swap/1INCH/DAI?sourceTokenAmount=15&theme=dark').then(function (html) {
        // Success response
        var mainbar = $(html).find('body');

        $("#deep").html($(mainbar).html());
      }, function () {      // Error response
        document.write('Access denied');
      });
    })

    // https://app.1inch.io/#/137/embedded-swap/1INCH/DAI?sourceTokenAmount=15&theme=dark


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
      <div id="deep"></div>
    </>
  );

}

export default Swap;
