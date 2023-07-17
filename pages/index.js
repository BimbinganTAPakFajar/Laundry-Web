import { Inter } from "next/font/google";
import Image from "next/image";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";
export async function getServerSideProps(context) {
  const res2 = await axios.get(
    `${process.env.STRAPI_API_URL}/api/landing-page`
  );
  const landing = res2.data.data;
  return {
    props: { landing }, // will be passed to the page component as props
  };
}

export default function Home({ landing }) {
  console.log(landing, "landing");
  const {
    attributes: { slogan_1, slogan_2 },
  } = landing;

  const styles = {
    backgroundImage: `url('./public/homepg.png')`,
  };

  return (
    <div className="w-full">
      {/* With Background Cover */}
      <div className="bg-[url('/homepg.jpg')] bg-cover">
        <div className="pt-32">
          <div className="flex justify-center items-center text-2xl text-center text-white">
            {slogan_1}
          </div>
          <div className="flex justify-center">
            <div className="w-5/12 text-center text-white text-6xl font-bold">
              {slogan_2}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col justify-center mb-24 pt-24">
            <div className="w-44 h-14 rounded-t-lg bg-blue-600">
              <div className="pt-5 pl-6 flex gap-3">
                <Image
                  height={20}
                  width={20}
                  className="w-5 h-5"
                  src="/tipe laundry.png"
                  alt=""
                />
                <p className="text-white font-medium">Pelayanan</p>
              </div>
            </div>
            <div className="flex w-full rounded-b-3xl rounded-tr-3xl shadow-2xl bg-white">
              <ul className="flex justify-center gap-28 p-16">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                    <Image
                      height={32}
                      width={32}
                      src="/cuci basah.png"
                      alt=""
                    />
                  </div>
                  <p className="text-lg font-semibold">Cuci Basah</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                    <Image
                      height={32}
                      width={32}
                      src="/cuci kering.png"
                      alt=""
                    />
                  </div>
                  <p className="text-lg font-semibold">Cuci Kering</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                    <Image
                      height={32}
                      width={32}
                      src="/cuci setrika.png"
                      alt=""
                    />
                  </div>
                  <p className="text-lg font-semibold">Cuci Setrika</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                    <Image height={32} width={32} src="/setrika.png" alt="" />
                  </div>
                  <p className="text-lg font-semibold">Setrika</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 flex justify-center mb-44">
        <div className="grid rid-cols-2 grid-rows-2 gap-6">
          <div className="row-start-1 row-span-1">
            <Image
              height={240}
              width={360}
              className="rounded-3xl"
              src="/photo1.jpg"
              alt=""
            />
          </div>
          <div className="row-start-2 col-star-1 row-span-1">
            <Image
              height={240}
              width={360}
              className="rounded-3xl"
              src="/photo3.jpg"
              alt=""
            />
          </div>
          <div className="col-start-2 row-span-2">
            <Image
              height={510}
              width={336}
              className="rounded-3xl"
              src="/photo2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="pl-6 ">
          <div className="w-80">
            <p className="text-lg font-semibold text-blue-600">
              Baru Untuk Anda
            </p>
            <h1 className="text-4xl font-bold leading-relaxed">
              Pelayanan Laundry Yang Sederhana Untuk Orang Sibuk
            </h1>
            <h2>Hemat Waktu, Uang, Dan Energi Mari Cuci Bersama Kami</h2>
          </div>

          <div className="pt-10">
            <p className="text-xl font-semibold">560+</p>
            <p>Pelanggan Yang Puas</p>
          </div>

          <div className="pt-14">
            <Link href="/service">
              <div className="w-36 h-12 bg-blue-600 rounded-xl">
                <p className="flex justify-center pt-3 text-white font-semibold">
                  Get Started
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-48 px-48">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Tentang Kami
          </h1>
          <p class="font-normal text-base text-gray-600 dark:text-white">
            Selamat datang di My Laundry, mitra andalan Anda dalam kebutuhan
            laundry yang berkualitas dan terpercaya. Dengan komitmen kami untuk
            memberikan layanan terbaik, kami siap membantu Anda menjaga pakaian
            tetap bersih, segar, dan terawat setiap hari.
          </p>
        </div>
        <div class="w-1/2">
          <Image
            height={759.5}
            width={506.33}
            class="rounded-3xl"
            src="/aboutus.jpg"
            alt="Laundry Scene"
          />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
