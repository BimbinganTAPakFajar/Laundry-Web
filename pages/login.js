import axios from "axios";
import DefaultLayout from "@/components/layout/DefaultLayout";
import LoginForm from "@/components/login/LoginForm";
import {useRef} from "react";
import React, { ReactNode } from 'react';

export default function Login({}) {

    return (

        <div className="flex justify-center pt-44">
            <div className="p-4 w-1/4 bg-white rounded-lg shadow border-2 border-gray-100">
                
                <div>
                    <h1 className="text-3xl font-bold">Selamat Datang Kembali</h1>
                    <h2 className="leading-tight tracking-tight text-gray-900 mb-6 text-lg">Mau Servis Apa Hari Ini?</h2>
                    
                    <LoginForm/>
                    
                </div>
    
            </div>
        </div>


    )

}

Login.getLayout = function getLayout(page){
    return <DefaultLayout>{page}</DefaultLayout>
}