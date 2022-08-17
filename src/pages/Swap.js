import { setup1inchWidget } from "@1inch/embedded-widget";
import { useEffect, useState } from "react";
import $ from "jquery";
import "../assets/css/Swap.css";

function Swap() {
<<<<<<< HEAD
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
            console.log("############");


        })
    }, [])
    return (
        <>

            <div id="v-aggregator" className='w-full h-screen border-solid' style={loaded ? { "visibility": "visible" } : { "visibility": "hidden" }} >
            </div>

        </>
    )

=======
  const [loaded, setLoad] = useState(false);
  useEffect(() => {
    const swapAggregator = setup1inchWidget({
      chainId: 137,
      sourceTokenSymbol: "1INCH",
      destinationTokenSymbol: "DAI",
      hostElement: document.getElementById("v-aggregator"),
      // provider: window.ethereum,
      theme: "dark",
      sourceTokenAmount: "15",
    });
    console.log(swapAggregator);
    swapAggregator.onIframeLoad(() => {
      setLoad(true);
      console.log("############");
      // var k = $("#oneInchWidgetFrame").contents().hide();
    });
  }, []);
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
>>>>>>> 73235f09c4d9f6c28e6c27209907d391bcbaabab
}

export default Swap;
