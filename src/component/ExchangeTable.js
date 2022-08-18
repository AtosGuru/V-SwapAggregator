import { useEffect, useState } from "react";
function ExchangeTable() {
    return (
        <>
            <div className="w-full h-screen a-container items-center flex">
                <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-10/12 items-center m-auto    ">
                    <thead className="text-lg text-gray-600 uppercase border-b-4 border-gray-600">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                EXCHANGE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                PRICE (ETH/DAI)
                            </th>
                            <th scope="col" className="py-3 px-6">
                                YOU GOT
                            </th>
                            <th scope="col" className="py-3 px-6 flex items-center">
                                FEES <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-lineoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-600 text-gray-200 text-lg font-bold">
                            <td scope="col" className="px-6 py-7">
                                ParaSwapPool4 <div className="bg-green-600 w-fit px-2 rounded-md inline text-center"> Best</div>
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                ~$2.69%
                            </td>
                        </tr>
                        <tr className="border-b border-gray-600 text-gray-400 text-lg font-bold">
                            <td scope="col" className="px-6 py-7">
                                ParaSwapPool4 <div className="bg-red-700 text-sm w-fit px-2 rounded-md inline text-center"> -0.015%</div>
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                ~$2.69%
                            </td>
                        </tr>
                        <tr className="border-b border-gray-600 text-gray-400 text-lg font-bold">
                            <td scope="col" className="px-6 py-7">
                                ParaSwapPool2 <div className="bg-red-700 text-sm w-fit px-2 rounded-md inline text-center"> -0.015%</div>
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                ~$2.69%
                            </td>
                        </tr>
                        <tr className="border-b border-gray-600 text-gray-400 text-lg font-bold">
                            <td scope="col" className="px-6 py-7">
                                UniswapV4 <div className="bg-red-700 text-sm w-fit px-2 rounded-md inline text-center"> -0.015%</div>
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                1865.27 DAI
                            </td>
                            <td scope="col" className="px-6 py-7">
                                ~$2.69%
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>



        </>
    );
}
export default ExchangeTable;
