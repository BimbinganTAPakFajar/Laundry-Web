import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";

export async function getServerSideProps(context) {

    const {id} = context.query;
    const chosenService = id
    const res = await axios.get("http://127.0.0.1:1337/api/laundry-services/" + chosenService + "?populate=*");
    console.log(res, "hehehehe");
    const service = res.data.data;
    console.log(service, "test");
    return {
      props: { service }, // will be passed to the page component as props
    };
  }


export default function ServiceDetail({service}){

// console.log(service);
    
    return(

        <body>
                <main>
                <div className="flex">
                    {/* Left Side of a content */}
                    <div>
                        <h1 className="text-2xl">Pesanan Anda</h1>
                        <div className="pt-6 w-[520px] ">
                            <img className="w-full h-full rounded-xl" src={service.attributes.pictService.url} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h2 className="text-2xl font-semibold pt-6">{service.attributes.nameService}</h2>
                                <h3 className="italic">{service.attributes.serviceDescription}</h3>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold ml-10">  Rp{service.attributes.priceService}/Kg</h2>
                            </div>
                        </div>

                        
                    </div>

                    <div className="ml-32">
                        <div>
                            <h1 className="text-2xl">Alamat Pengiriman</h1>
                        </div>
                        
                        <form className="w-full " action="">
                            <div className="flex gap-x-14 ">
                                <div>
                                    <label htmlFor="nama">Nama</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" />
                                </div>
                                <div className="">
                                    <label htmlFor="NomorHp">Nomor Hp</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" />
                                </div>
                            </div>

                            <div className="pt-11">
                                <label htmlFor="">Alamat Lengkap</label>
                                <input className="w-full h-16 p-2.5 rounded-xl border-2 border-gray-400" type="text" />
                            </div>

                            <div className="flex gap-x-14 pt-11">
                                <div>
                                    <label htmlFor="nama">Tanggal Diambil</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="date" />
                                </div>
                                <div className="">
                                    <label htmlFor="NomorHp">Tanggal Dikirim</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="date" />
                                </div>
                            </div>

                            <div className="flex gap-x-14 pt-11">
                                <div>
                                    <label htmlFor="nama">Provinsi</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" />
                                </div>
                                <div className="">
                                    <label htmlFor="NomorHp">Kota</label>
                                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" />
                                </div>
                            </div>

                            <div className="pt-11">
                                <label htmlFor="">Kecamatan</label>
                                <input className="w-full h-8 p-2.5 rounded-xl border-2 border-gray-400" type="text" />
                            </div>

                            <div className="pt-11">
                                <button className="bg-green-600 w-32 h-10 rounded-2xl text-white">
                                    Pesan
                                </button>
                            </div>
                        </form>


                    </div>


                </div>


            </main>

        </body>


    )

}

ServiceDetail.getLayout = function getServiceDetail(page){
    return <DefaultLayout>{page}</DefaultLayout>
}