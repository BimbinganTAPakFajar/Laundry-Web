import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Router from "next/router";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `${process.env.STRAPI_API_URL}/api/order-services?populate=*&filters[UUID][$eq]=${id}`
  );
  const orderservice = res.data.data;
  const {
    id: orderId,
    attributes: { totalPrice, phoneNumber, name, email, weight },
  } = orderservice[0];
  const midtrans = {
    transaction_details: {
      order_id: id,
      gross_amount: totalPrice,
    },
    customer_details: {
      first_name: name,
      phone: phoneNumber,
    },
  };
  const midtransres = await axios.post(
    // "http://localhost:3000/api/midtrans",
    `${process.env.NEXTAUTH_URL}/api/midtrans`,
    midtrans
  );
  console.log(midtransres.data, "MIDTRANS RES");
  const { snapToken } = midtransres.data;
  console.log(snapToken);
  return {
    props: { snapToken }, // will be passed to the page component as props
  };
}

export default function PAYORDER({ snapToken }) {
  let router = useRouter();
  console.log(snapToken);
  const payNow = () => {
    if (typeof window !== "undefined") {
      window.snap.pay(snapToken, {
        onSuccess: async function (result) {
          /* You may add your own implementation here */
          alert("Pembayaran berhasil!");
          router.push("/");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("Silahkan melanjutkan pembayaran di halaman pesanan");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("Pembayaran gagal!");
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("Silahkan melanjutkan pembayaran di halaman pesanan");
          router.push("/");
        },
      });
    }
  };

  return (
    <div>
      <Script
        type="text/javascript"
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS}
      ></Script>

      <div className="flex justify-center">
        <button
          onClick={payNow}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Bayar Pesanan
        </button>
      </div>
    </div>
  );
}

PAYORDER.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
