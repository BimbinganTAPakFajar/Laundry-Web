import axios from "axios";
import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
export async function getServerSideProps(context) {
  const res = await axios.get(
    "http://127.0.0.1:1337/api/order-services?populate=*"
  );
  const res2 = await axios.get(
    "http://127.0.0.1:1337/api/laundry-services?populate=*"
  );
  const orderservice = res.data.data;
  const service = res2.data.data;
  return {
    props: { orderservice, service }, // will be passed to the page component as props
  };
}

export default function Dashboard({ orderservice, service }) {
  console.log(orderservice, "Check");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:1337/api/order-services/$" + id
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});
  const generatetableorder = () =>
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
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
            {/* <td class="px-6 py-4">{isReady ? "Ya" : "Tidak"}</td> */}
            <td>
              {isReady ? (
                <div className="text-center font-bold text-green-600">
                  <p>Selesai</p>
                </div>
              ) : (
                <div className="flex items-center">
                  <p>Sedang Diproses</p>
                  <button
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    class="block text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:underline "
                    type="button"
                    onClick={() => {
                      setSelectedStatus({ id, weight });
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>

                  <div
                    id="authentication-modal"
                    tabindex="-1"
                    aria-hidden="true"
                    className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center ${
                      isModalOpen ? "" : "hidden"
                    }  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                  >
                    <div class="relative w-full max-w-md max-h-full">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="authentication-modal"
                          onClick={() => setIsModalOpen(false)}
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Edit Berat Laundry
                          </h3>
                          <form class="space-y-6" action="#">
                            <div>
                              <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Berat Laundry
                              </label>
                              <input
                                type="number"
                                name="weight"
                                id={`${id}weight`}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                defaultValue={selectedOrder.weight}
                                required
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </td>
            <td class="px-6 py-4">
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="block text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:underline "
                type="button"
                onClick={() => {
                  setSelectedOrder({ id, isReady });
                  setIsModalOpen(true);
                }}
              >
                Edit
              </button>

              <div
                id="authentication-modal"
                tabindex="-1"
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center ${
                  isModalOpen ? "" : "hidden"
                }  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
              >
                <div class="relative w-full max-w-md max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Edit Berat Laundry
                      </h3>
                      <form class="space-y-6" action="#">
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Berat Laundry
                          </label>
                          <input
                            type="number"
                            name="weight"
                            id={`${id}weight`}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            defaultValue={selectedOrder.weight}
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </td>
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
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        );
      }
    );

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
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
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{generatetableservice()}</tbody>
      </table> */}

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
              email
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
              APAKAH BERSEDIA
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{generatetableorder()}</tbody>
      </table>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
