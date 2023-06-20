import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";

export default function Orders(){

    return(
        
            
        <body>
            <div className="relative overflow-x-auto ">
                <table className="w-3/4 text-sm text-left text-gray-500 rounded-2xl">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id Pemesanan</th>
                            <th scope="col" className="px-6 py-3">Tanggal Diambil</th>
                            <th scope="col" className="px-6 py-3">Tanggal Dikirim</th>
                            <th scope="col" className="px-6 py-3">Total</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-400 rounded-2xl">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1. Cuci Basah
                            </th>
                            <td className="px-6 py-4">
                                26/6/2023
                            </td>
                            <td className="px-6 py-4">
                                29/6/2023
                            </td>
                            <td className="px-6 py-4">
                                Rp40.000
                            </td>
                            <td className="px-6 py-4">
                                <a href="">Bayar</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100 rounded-2xl border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                2. Cuci Kering
                            </th>
                            <td className="px-6 py-4">
                                26/6/2023
                            </td>
                            <td className="px-6 py-4">
                                29/6/2023
                            </td>
                            <td className="px-6 py-4">
                                Rp35.000
                            </td>
                            <td className="px-6 py-4">
                                <a href="">Bayar</a>
                            </td>
                        </tr>   
                    </tbody>
                </table>
            </div>

        </body>

        
    )


}

Orders.getLayout = function getOrders(page){
    return <DefaultLayout>{page}</DefaultLayout>
}