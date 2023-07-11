import axios from "axios";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";
export async function getServerSideProps(context) {
  const res = await axios.get(
    "http://127.0.0.1:1337/api/laundry-services?populate=*"
  );
  console.log(res, "hehehehe");
  const service = res.data.data;
  console.log(service, "test");
  return {
    props: { service }, // will be passed to the page component as props
  };
}

export default function Service({ service }) {
  console.log(service);
  const generatecards = () =>
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
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={url} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {nameService}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {serviceDescription}
              </p>
              <a
                href="https://forms.gle/o2DKxWHVtEAjo4xb6"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pesan
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      }
    );

  return (
    <main>
      <h1 className="text-4xl font-bold flex justify-center w-full mb-24">
        Servis Kami
      </h1>

      <div className="grid grid-cols-2 gap-64 mb-10">{generatecards()}</div>
    </main>
  );
}

Service.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
