


export default function Dashboard(){
    return (
        <div className="mx-auto">
            <div className="h-min-screen flex flex-col">
                <header className="bg-blue-500">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <i></i>
                            <p>Logo</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">User</h1>
                        </div>
                    </div>
                    <div>

                    </div>
                </header>

                <div className="flex">

                    <aside id="sidebar">
                        <ul className="flex flex-col gap-y-2">
                            <li className="w-full h-full py-3 px-2 border-b border-gray-600">
                                <a href="">Dashboard</a>
                                <img src="" alt="" />
                            </li>
                            <li className="w-full h-full py-3 px-2 border-b border-gray-600 ">
                                <a href="">Layanan Jasa</a>
                                <img src="" alt="" />
                            </li>
                            <li className="w-full h-full py-3 px-2 border-b border-gray-600 ">
                                <a href="">Pesanan</a>
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </aside>
                </div>
                
                <main className="bg-white p-3 overflow-hidden">
                    <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                        <div className="bg-blue-600 px-6 py-2">
                            <div className="font-bold text-xl">Layanan Jasa</div>
                        </div>

                        <div>
                            <table className="table text-gray-400">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">ID</th>
                                        <th scope="col" className="px-6 py-3">Nama Servis</th>
                                        <th scope="col" className="px-6 py-3">Harga Servis</th>
                                        <th scope="col" className="px-6 py-3">Tanggal Dibuat</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="rounded-2xl">
                                        <th scope="row" className="px-6 py-4 font-medium">1</th>
                                        <td className="px-6 py-4">Cuci Basah</td>
                                        <td className="px-6 py-4">10.000</td>
                                        <td className="px-6 py-4">Monday, May 29, 2023</td>
                                        <td className="px-6 py-4">
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                    <tr className="rounded-2xl">
                                        <th scope="row" className="px-6 py-4 font-medium">2</th>
                                        <td className="px-6 py-4">Cuci Kering</td>
                                        <td className="px-6 py-4">12.000</td>
                                        <td className="px-6 py-4">Monday, June 5, 2023</td>
                                        <td className="px-6 py-4">
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        

                    </div>

                    
                    <div className="rounded overflow-hidden shadow bg-white mx-2 w-full mt-10">
                        <div className="bg-blue-600 px-6 py-2">
                            <div className="font-bold text-xl">Pesanan</div>
                        </div>

                        <div>
                            <table className="table text-gray-400">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">ID</th>
                                        <th scope="col" className="px-6 py-3">Nama Pemesan</th>
                                        <th scope="col" className="px-6 py-3">Servis</th>
                                        <th scope="col" className="px-6 py-3">Berat</th>
                                        <th scope="col" className="px-6 py-3">Tanggal Diambil</th>
                                        <th scope="col" className="px-6 py-3">Tanggal Dikirim</th>
                                        <th scope="col" className="px-6 py-3">Total</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="rounded-2xl">
                                        <th scope="row" className="px-6 py-4 font-medium">1</th>
                                        <td className="px-6 py-4">Bambang</td>
                                        <td className="px-6 py-4">Cuci Basah</td>
                                        <td className="px-6 py-4">10Kg</td>
                                        <td className="px-6 py-4">7/7/2023</td>
                                        <td className="px-6 py-4">9/7/2023</td>
                                        <td className="px-6 py-4">100.000</td>
                                        <td className="px-6 py-4">
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                    <tr className="rounded-2xl">
                                        <th scope="row" className="px-6 py-4 font-medium">1</th>
                                        <td className="px-6 py-4">Bambang</td>
                                        <td className="px-6 py-4">Cuci Basah</td>
                                        <td className="px-6 py-4">10Kg</td>
                                        <td className="px-6 py-4">7/7/2023</td>
                                        <td className="px-6 py-4">9/7/2023</td>
                                        <td className="px-6 py-4">100.000</td>
                                        <td className="px-6 py-4">
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        

                    </div>

                </main>

            </div>



        </div>
    )
} 