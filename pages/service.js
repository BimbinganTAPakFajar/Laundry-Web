import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";
import Link from "next/link";
export async function getServerSideProps(context) {
    const res = await axios.get("http://127.0.0.1:1337/api/laundry-services?populate=*");
    console.log(res, "hehehehe");
    const service = res.data.data;
    console.log(service, "test");
    return {
      props: { service }, // will be passed to the page component as props
    };
  }

export default function Service({service}) {
console.log(service);
const generatecards = () => 
        service.map(({
        id: id,
        attributes:{
        nameService,
        priceService,
        serviceDescription,
        pictService:{data: [{attributes:{url}}]}
    }})=> {
        return (
            <div className="w-96 h-full bg-base-100 shadow-xl rounded-xl pb-6 overflow-hidden flex flex-col justify-center items-center">
                <div className="aspect-w-3 aspect-h-5 w-full">
                    <img className="object-cover w-full h-full" src={url} alt="" />
                </div>
                <div className="px-6 py-4"> 
                    <h2 className="card-title text-2xl font-semibold pt-2 pl-6">
                        {nameService}
                    </h2>
                    <p className="pt-2 pl-6">{serviceDescription}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ml-6">
                            <p className="font-bold text-2xl">Rp{priceService}/Kg</p>
                        </div>
                        <div>
                            <Link href={`/servicedetail/${id}`} className="">
                                <p className="flex justify-center items-center bg-blue-600 w-32 h-10 rounded-2xl text-white">Pesan</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    })

    return (
        <main>
            
            <h1 className="text-4xl font-bold flex justify-center w-full">Servis Kami</h1>


            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                {generatecards()}   
            </div>
        </main>
    )
}

Service.getLayout = function getLayout(page){
    return <DefaultLayout>{page}</DefaultLayout>
  }