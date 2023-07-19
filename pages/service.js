import axios from "axios";
import DefaultLayout from "@/components/layout/DefaultLayout";
export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.STRAPI_API_URL}/api/laundry-services?populate=*`
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
        let href = "";
        if (id == 1) {
          href = "https://forms.gle/cTVeH6tBVQZR8WfF8";
        } else if (id == 2) {
          href = "https://forms.gle/Px1UzwgrauoHgyVg8";
        } else if (id == 3) {
          href = "https://forms.gle/WbgCTVAgeA5whZsj9";
        } else if (id == 4) {
          href = "https://forms.gle/1g9HQDewYRGeY7rM7";
        }
        return (
          <div key={id}>
            <a
              href={href}
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={url}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {nameService}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {serviceDescription}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {priceService}
                </p>
              </div>
            </a>
          </div>
        );
      }
    );

  return (
    <main>
      <h1 className="text-4xl font-bold flex justify-center w-full mb-24">
        Servis Kami
      </h1>

      <div className="grid grid-cols-2 gap-24 mb-10">{generatecards()}</div>
    </main>
  );
}

Service.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
