import DefaultLayout from "@/components/layout/DefaultLayout";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

// export async function getServerSideProps(context) {
//   const res = await axios.get(
//     `http://127.0.0.1:1337/api/order-services?populate=*&filters[UUID][$eq]=${id}`
//   );
//   const orderservice = res.data.data;
//   return {
//     props: { orderservice }, // will be passed to the page component as props
//   };
// }
export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/order-services?populate=*`
  );
  const orderservice = res.data.data;
  return {
    props: { orderservice }, // will be passed to the page component as props
  };
}

export default function SearchOrder({ orderservice }) {
  const [uuid, setUuid] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentOrders, setCurrentOrders] = useState(orderservice);

  const generatetableorder = () =>
    currentOrders.map(
      ({
        id,
        attributes: {
          weight,
          pickupDate,
          totalPrice,
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
            <td class="px-6 py-4">{nameService}</td>
            <td class="px-6 py-4">{weight}</td>
            <td class="px-6 py-4">{pickupDate}</td>
            <td class="px-6 py-4">{totalPrice}</td>
            <td>
              {isReady ? (
                <div className="text-center font-bold text-green-600">
                  <p>Selesai</p>
                </div>
              ) : (
                <div className="flex items-center">
                  <p>Sedang Diproses</p>
                </div>
              )}
            </td>
          </tr>
        );
      }
    );

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.get(
  //       `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/order-services?filters[UUID][$eq]=${uuid}&populate=*`
  //     );
  //     setSearchResult(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-screen">
      <div className="flex justify-center mb-4">
        <h1 className="font-bold text-2xl">Cek Status Pesanan</h1>
      </div>

      <div className="flex justify-center">
        <form className="w-1/2">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => setUuid(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Masukkan Id Pemesanan"
              required
            />
            <button
              type="submit"
              // onClick={handleSearch}
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 mt-10 flex justify-center">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nomor
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Servis
                </th>
                <th scope="col" className="px-6 py-3">
                  Berat Laundry
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Pengambilan
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Harga
                </th>
                <th scope="col" className="px-6 py-3">
                  Siap Diambil
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {searchResult.map((entity) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {entity.name}
                  </th>
                  <td className="px-6 py-4">{entity.name}</td>
                  <td className="px-6 py-4">{entity.weight}</td>
                  <td className="px-6 py-4">{entity.pickupDate}</td>
                  <td className="px-6 py-4">{entity.totalPrice}</td>
                  <td className="px-6 py-4">{entity.isReady}</td>
                </tr>
              ))} */}

              {generatetableorder()}

              {/* <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4">{orderservice.name}</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

SearchOrder.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
