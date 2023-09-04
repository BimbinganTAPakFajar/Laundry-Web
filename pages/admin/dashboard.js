import axios from "axios";
import AdminLayout from "@/components/layout/AdminLayout";
import { useEffect, useState } from "react";
export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/order-services?populate=*`
  );
  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/laundry-services?populate=*`
  );
  const orderservice = res.data.data;
  const service = res2.data.data;
  return {
    props: { orderservice, service }, // will be passed to the page component as props
  };
}

export default function Dashboard({ orderservice, service }) {
  const generatetableorderservice = () =>
    orderservice.map(
      ({
        id: id,
        attributes: {
          weight,
          pickupDate,
          totalPrice,
          address,
          phoneNumber,
          email,
          name,
          isReady,
          laundry_service: {
            data: {
              attributes: { nameService },
            },
          },
        },
      }) => {
        return (
          <tr
            key={id}
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {id}
            </th>
            <td class="px-6 py-4">{name}</td>
            <td class="px-6 py-4">{email}</td>
            <td class="px-6 py-4">{address}</td>
            <td class="px-6 py-4">{phoneNumber}</td>
            <td class="px-6 py-4">{nameService}</td>
            <td class="px-6 py-4">{weight}</td>
            <td class="px-6 py-4">{pickupDate}</td>
            <td class="px-6 py-4">{totalPrice}</td>
            <td class="px-6 py-4">{isReady}</td>
          </tr>
        );
      }
    );

  const generatetableservice = () =>
    service.map(
      ({
        id: id,
        attributes: {
          nameService,
          priceService,
          serviceDescription,
          pictService: {
            data: [
              {
                attributes: { url },
              },
            ],
          },
        },
      }) => {
        return (
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {id}
            </th>
            <td class="px-6 py-4">{nameService}</td>
            <td class="px-6 py-4">{priceService}</td>
            <td class="px-6 py-4">{serviceDescription}</td>
            <td class="px-6 py-4 text-blue-600">
              <a href={url}>Image</a>
            </td>
          </tr>
        );
      }
    );

  return (
    <div class="relative overflow-x-auto sm:rounded-lg">
      <div className="pb-6 pt-4">
        <h1 className="font-bold text-2xl ">List Servis</h1>
      </div>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nomor
            </th>
            <th scope="col" class="px-6 py-3">
              Nama Servis
            </th>
            <th scope="col" class="px-6 py-3">
              Harga Servis
            </th>
            <th scope="col" class="px-6 py-3">
              Deskripsi Servis
            </th>
            <th scope="col" class="px-6 py-3">
              Foto Servis
            </th>
          </tr>
        </thead>
        <tbody>{generatetableservice()}</tbody>
      </table>

      <div className="pb-6 pt-4">
        <h1 className="font-bold text-2xl ">List Pesanan</h1>
      </div>

      <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id Pesanan
            </th>
            <th scope="col" class="px-6 py-3">
              Nama Pemesan
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Alamat
            </th>
            <th scope="col" class="px-6 py-3">
              Nomor Hp
            </th>
            <th scope="col" class="px-6 py-3">
              Servis
            </th>
            <th scope="col" class="px-6 py-3">
              Berat
            </th>
            <th scope="col" class="px-6 py-3">
              Tanggal Diambil
            </th>
            <th scope="col" class="px-6 py-3">
              Total Harga
            </th>
            <th scope="col" class="px-6 py-3">
              Siap Kirim
            </th>
          </tr>
        </thead>
        <tbody>{generatetableorderservice()}</tbody>
      </table>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
