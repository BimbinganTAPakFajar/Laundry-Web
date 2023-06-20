import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";
import {useRef} from "react";
import React, { ReactNode } from 'react';



export default function Login({user}) {

    console.log(user);
    const userName = useRef("");
    const pass = useRef("");

    const onSubmit = async () => {};
    return (

        <div className="flex justify-center pt-44">
            <div className="p-4 w-1/4 bg-white rounded-lg shadow border-2 border-gray-100">
                
                <div>
                    <h1 className="text-3xl font-bold">Selamat Datang Kembali</h1>
                    <h2 className="leading-tight tracking-tight text-gray-900 mb-6 text-lg">Mau Servis Apa Hari Ini?</h2>
    
                    <form className="space-y-6" action="">
    
                        <div>
                            <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Email</label>
                            <input onChange={(e) => {userName.current = e.target.value}} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="email" placeholder="user@email.com" />
                        </div>
    
                        <div>
                            <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Password</label>
                            <input onChange={(e) => {pass.current = e.target.value}} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="password" placeholder="*****" />
                        </div>
    
                        <div className="flex justify-center">
                            <button onClick={onSubmit} className="w-1/5 h-8 rounded-lg text-white bg-blue-600 flex justify-center items-center">
                                Masuk
                            </button>
                        </div>
    
                    </form>
    
                </div>
    
            </div>
        </div>


    )

}

Login.getLayout = function getLayout(page){
    return <DefaultLayout>{page}</DefaultLayout>
}