import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";

export default function Register(){

    return(
        
            
        <div className="p-4 w-full bg-white rounded-lg shadow border-2 border-gray-100">
                
            <div>
                <h1 className="text-3xl font-bold">Daftar</h1>
                <h2 className="leading-tight tracking-tight text-gray-900 mb-6 text-lg">Isi data-data dibawah</h2>

                <form className="space-y-6" action="">

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Nama</label>
                        <input className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" placeholder="Nama" />
                    </div>

                    <div>
                        <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Email</label>
                        <input className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" placeholder="user@email.com" />
                    </div>

                    <div>
                        <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Password</label>
                        <input className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" placeholder="*****" />
                    </div>

                    <div>
                        <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Konfirmasi Password</label>
                        <input className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" placeholder="*****" />
                    </div>

                    <div className="flex justify-center">
                        <button className="w-1/5 h-8 rounded-lg text-white bg-blue-600 flex justify-center items-center">
                            Daftar
                        </button>
                    </div>

                </form>

            </div>

        </div>

        
    )


}

Register.getLayout = function getRegister(page){
    return <DefaultLayout>{page}</DefaultLayout>
}