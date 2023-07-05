import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {useEffect, useRef} from "react";
import React, { ReactNode } from 'react';


export default function LoginForm() {
    const router = useRouter();
    const userName = useRef("");
    const pass = useRef("");

    const test = () => {
        console.log(userName.current, pass.current)
    }

    useEffect(() => {
        console.log(userName,pass)
    },[userName,pass])
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(userName.current, pass.current, "AAAAAAAAA")
        const result = await signIn("credentials", {
            username:userName.current,
            password:pass.current,
            redirect:true,
            callbackUrl:'/'
        })
    } 

    const handleClick = () => {
        router.push('/register');
    }

    return (
        <div>
            <form className="space-y-6" action="">
    
                <div>
                    <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Email</label>
                    <input onChange={(e) => {userName.current=e.target.value}} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="email" placeholder="user@email.com" />
                </div>

                <div>
                    <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Password</label>
                    <input onChange={(e) => {pass.current=e.target.value}} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="password" placeholder="*****" />
                </div>

                <div className="flex justify-center">
                    <button onClick={(e)=>onSubmit(e)} className="w-1/5 h-8 rounded-lg text-white bg-blue-600 flex justify-center items-center">
                        Masuk
                    </button>
                </div>
                

            </form>
            <div className="flex justify-center p-2 text-sm">
                <p>Belum Punya Akun?</p>
                <button onClick={handleClick} className="text-blue-600 hover:text-green-600">
                    Daftar
                </button>
            </div>
        </div>
    )
}