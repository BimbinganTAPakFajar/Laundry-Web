import axios from "axios";
import DefaultLayout from "@/components/layout/DefaultLayout";
import OrderForm from "@/components/product/OrderForm";
import { useSession, signIn } from "next-auth/react";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const chosenService = id;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/laundry-services/${chosenService}?populate=*`
  );
  // const res = await axios.get("http://127.0.0.1:1337/api/laundry-services?populate=*");
  // console.log(res, "hehehehe");
  const service = res.data.data;
  // console.log(service, "test");
  return {
    props: { service }, // will be passed to the page component as props
  };
}

export default function ServiceDetail({ service }) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return "Anda harus memiliki akun untuk memesan";
    },
  });

  if (status == "loading") {
    return signIn();
  }

  return (
    <body>
      <main>
        <div className="flex">
          {/* Left Side of a content */}
          <div>
            <h1 className="text-2xl">Pesanan Anda</h1>
            <div className="pt-6 w-[520px] ">
              <img
                className="w-full h-full rounded-xl"
                src={service.attributes.pictService.url}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-2xl font-semibold pt-6">
                  {service.attributes.nameService}
                </h2>
                <h3 className="italic">
                  {service.attributes.serviceDescription}
                </h3>
              </div>
              <div>
                <h2 className="text-2xl font-bold ml-10">
                  {" "}
                  Rp{service.attributes.priceService}/Kg
                </h2>
              </div>
            </div>
          </div>

          <div className="ml-32">
            <div>
              <h1 className="text-2xl">Alamat Pengiriman</h1>
            </div>

            <OrderForm />
          </div>
        </div>
      </main>
    </body>
  );
}

ServiceDetail.getLayout = function getServiceDetail(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
