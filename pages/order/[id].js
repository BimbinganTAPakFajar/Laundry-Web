import axios from "axios";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `http://127.0.0.1:1337/api/order-services?populate=*&filters[UUID][$eq]=${id}`
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
  const midtransres = await axios.post("/api/midtrans", midtrans);
  const { snapToken } = midtransres.data;
  return {
    props: { orderservice }, // will be passed to the page component as props
  };
}

export default function PAYORDER() {
  return (
    <div>
      <Script
        type="text/javascript"
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      ></Script>
    </div>
  );
}
