import axios from "axios";
import DefaultLayout from "@/components/layout/DefaultLayout";
import RegisterForm from '@/components/login/RegisterForm';

export default function Register(){

    return(
        
            
        <div className="flex justify-center">
            <div className="p-4 w-2/5 bg-white rounded-lg shadow border-2 border-gray-100">
                
                <div>
                    <h1 className="text-3xl font-bold">Daftar</h1>
                    <h2 className="leading-tight tracking-tight text-gray-900 mb-6 text-lg">Isi data-data dibawah</h2>
                    <RegisterForm/>
                </div>
    
            </div>
        </div>

        
    )


}

Register.getLayout = function getRegister(page){
    return <DefaultLayout>{page}</DefaultLayout>
}