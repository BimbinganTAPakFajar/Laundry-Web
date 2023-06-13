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
            <div className="w-96 bg-base-100 shadow-xl rounded-xl pb-6 overflow-hidden">
                <img className="w-full h-1/3" src={url} />
                <div className=""> 
                    <h2 className="card-title text-2xl font-semibold pt-2 pl-6">
                        {nameService}
                    </h2>
                    <p className="pt-2 pl-6">{serviceDescription}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ml-6">
                            <p className="font-bold text-2xl">Rp{priceService}/Kg</p>
                        </div>
                        <div className="mr-10">
                            <Link href={`/servicedetail/${id}`} className="bg-blue-600 w-32 h-10 rounded-2xl text-white">
                                Pesan
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


            <div className="flex justify-between gap-10">
                {generatecards()}
            </div>
        </main>
    )
}

Service.getLayout = function getLayout(page){
    return <DefaultLayout>{page}</DefaultLayout>
  }