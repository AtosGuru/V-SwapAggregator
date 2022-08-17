import { setup1inchWidget } from '@1inch/embedded-widget';
import { useEffect } from 'react';
import "../assets/css/Swap.css";
function Swap() {
    useEffect(() => {
        setup1inchWidget({
            chainId: 137,
            sourceTokenSymbol: '1INCH',
            destinationTokenSymbol: 'DAI',
            hostElement: document.getElementById("v-aggregator"),
            // provider: window.ethereum,
            theme: 'light',
            sourceTokenAmount: '15'
        });

    }, [])
    return (
        <>
            <div id="v-aggregator" className='w-full h-fit border-solid'>
            </div>
        </>
    )

}

export default Swap;
