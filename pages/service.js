import axios from "axios";
import DefaultLayout from "@/components/layout/defaultLayout";
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
const generatecards = () => {
    return service.map(({attributes:{
        nameService,
        priceService,
        serviceDescription,
        pictService
    }})=> {
        return (
            <div className="card w-96 bg-base-100 shadow-xl rounded-xl pb-6 overflow-hidden">
            <img src={ {pictService} } />
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold pt-2 pl-6">
                    {nameService}
                </h2>
                <p className="pt-2 pl-6">{serviceDescription}</p>
                <div className="card-actions flex justify-end pt-10 pr-6">
                    <button className="bg-blue-600 w-36 h-12 rounded-xl text-white">
                        Pesan
                    </button>
                </div>
            </div>
                {priceService}
            </div>
        )
    })
}
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