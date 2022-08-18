import { setup1inchWidget } from "@1inch/embedded-widget";
import { useEffect, useState } from "react";
function Aggregator() {
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
            const url = 'https://app.1inch.io/#/1/embedded-swap/1INCH/DAI?sourceTokenAmount=15&theme=dark';

        })
    }, [])
    return (
        <>
            {!loaded ? (
                <div className="a-container text-white text-center text-4xl w-full h-screen items-center h-100vh pt-32">
                    Loading...
                </div>
            ) : (
                ""
            )}
            <div
                id="v-aggregator"
                className="a-container w-full h-screen border-solid"
                style={loaded ? { visibility: "visible" } : { visibility: "hidden" }}
            ></div>
            <div id="deep"></div>
        </>
    );

}

export default Aggregator;
