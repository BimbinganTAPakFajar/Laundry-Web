import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Register() {
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:1337/api/auth/local/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData.username,
                email: userData.email,
                password: userData.password,
            }),
            method: 'POST',
            }
        );
        const data = await response.json();
        if(response.status == 200){
            signIn();
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value});
    }


    return(
        <form onSubmit={onSubmit} className="space-y-6" action="">
    
            <div> 
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Nama</label>
                <input onChange={e => handleChange(e)} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" name='username' placeholder="Nama" />
            </div>
    
            <div>
                <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Email</label>
                <input onChange={e => handleChange(e)} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="text" name='email' placeholder="user@email.com" />
            </div>
    
            <div>
                <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Password</label>
                <input onChange={e => handleChange(e)} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="password" name='password' placeholder="*****" />
            </div>
    
            {/* <div>
                <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="Nama">Konfirmasi Password</label>
                <input onChange={e => handleChange(e)} className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2.5 focus:ring-primary-600 focus:border-primary-600 " type="password" placeholder="*****" />
            </div> */}
    
            <div className="flex justify-center">
                <button className="w-1/5 h-8 rounded-lg text-white bg-blue-600 flex justify-center items-center">
                     Daftar
                </button>
            </div>
    
        </form>
    )

}