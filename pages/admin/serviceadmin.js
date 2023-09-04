import AdminLayout from "@/components/layout/AdminLayout";
import axios from "axios";
import { useState } from "react";
export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/laundry-services?populate=*`
  );
  const service = res.data.data;
  return {
    props: { service }, // will be passed to the page component as props
  };
}

export default function ServiceAdmin({ service }) {
  const [currentOrders, setCurrentOrders] = useState(service);
  const generatetableorder = () =>
    currentOrders.map(
      ({
        id,
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
            <td class="px-6 py-4">{nameService}</td>
            <td class="px-6 py-4">{priceService}</td>
            <td class="px-6 py-4">{serviceDescription}</td>
            <td class="px-6 py-4">
              <a className="text-blue-600 hover:text-gray-600" href={url}>
                Image
              </a>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:text-gray-600">
                Edit
              </button>
            </td>
            {/* <td class="px-6 py-4">
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="block text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:underline "
                type="button"
                onClick={() => {
                  console.log("ID ONCLICK", id);
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
                            onChange={(e) => setWeightInput(e.target.value)}
                            type="number"
                            name="weight"
                            id={`${id}weight`}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            defaultValue={selectedOrder.weight}
                            required
                          />
                        </div>
                        <button
                          data-modal-hide="defaultModal"
                          type="button"
                          onClick={(e) => onSubmit(e)}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Simpan
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </td> */}
          </tr>
        );
      }
    );

  return (
    <div>
      <div className="pb-6 pt-4">
        <h1 className="font-bold text-2xl ">List Layanan Laundry</h1>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          + Tambah Servis
        </button>
      </div>

      <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nomor
            </th>
            <th scope="col" class="px-6 py-3">
              Layanan
            </th>
            <th scope="col" class="px-6 py-3">
              Harga Layanan
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
        <tbody>{generatetableorder()}</tbody>
      </table>

      {/* <div className="flex justify-end mt-4">
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

ServiceAdmin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
