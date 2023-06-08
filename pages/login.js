import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";

export default function Login() {


    return (

        <main className="">

            <div className="flex flex-col justify-center pt-36">
                <div className="grid gap-y-1">
                    <h2 className="text-2xl font-semibold">Selamat Datang Kembali</h2>
                    <h3 className="text-base ">Mau Servis Apa Hari Ini?</h3>
                </div>
            </div>

            <div className="pt-10 flex justify-center">

                <form className="grid gap-y-4" action="">
                    <div>
                        <label htmlFor="email" className="">Email</label>
                        <div>
                            <input className="bg-[#ababab] w-64 h-9 rounded-lg" type="email" name="email" typeof="email" />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="">Password</label>
                        <div>
                            <input className="bg-[#ababab] w-64 h-9 rounded-lg" type="password" name="password" typeof="password" />
                        </div>
                    </div>
                </form>   

            </div>

            <div className="pt-14 flex justify-between items-center">
                <hr className="w-2/5 border-black" />
                <p>atau</p>
                <hr className="w-2/5 border-black" />
            </div>

            <div className="flex justify-center items-center pt-9">
                <p>Belum punya akun?</p>
                <a className="text-sky-600" href="">Daftar</a>
            </div>

            <div className="flex justify-center items-center pt-9">
                <button className="bg-blue-600 w-1/4 h-9 rounded-lg text-white ">
                    Masuk ke akun anda
                </button>
            </div>

        </main>


    )

}

Login.getLayout = function getLayout(page){
    return <DefaultLayout>{page}</DefaultLayout>
}