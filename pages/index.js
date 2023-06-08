import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import DefaultLayout from "@/components/layout/DefaultLayout";
export async function getServerSideProps(context) {
  const res = await axios.get("http://127.0.0.1:1337/api/navigation");
  const res2 = await axios.get("http://127.0.0.1:1337/api/landing-page");
  console.log(res, "hehehehe");
  const nav = res.data.data;
  const landing = res2.data.data;
  console.log(nav, "test");
  return {
    props: { nav, landing }, // will be passed to the page component as props
  };
}

export default function Home({ nav, landing }) {
  console.log(landing, "landing");
  const {
    attributes: { slogan_1, slogan_2 },
  } = landing;
  return (
    <>
      <main>


        {/* Tittle */}
        <div className="pt-32">
          <h1 className="text-2xl flex justify-center text-center">
            {slogan_1}
          </h1>

          <h1 className="text-6xl flex items-center text-center font-bold">
            {slogan_2}
          </h1>
        </div>

        {/* Card Pelayanan */}
        <div className="pt-40">
          <div className="w-44 h-14 rounded-t-lg bg-blue-700">
            <div className="pt-5 pl-6 flex gap-3">
              <Image
                width={10}
                height={10}
                className="w-5 h-5"
                src="/tipe laundry.png"
                alt="testint pict"
              />
              <p className="text-white font-medium">Pelayanan</p>
            </div>
          </div>

          <div className="w-full  rounded-b-3xl rounded-tr-3xl shadow-2xl">
            <ul className="flex gap-28 p-16">
              <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                  <Image
                    width={36}
                    height={36}
                    className="w-8 h-8"
                    src="/cuci basah.png"
                    alt=""
                  />
                </div>
                <p className="text-lg font-semibold">Cuci Basah</p>
              </li>
              <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                  <Image
                    width={36}
                    height={36}
                    className="w-8 h-8"
                    src="/cuci kering.png"
                    alt=""
                  />
                </div>
                <p className="text-lg font-semibold">Cuci Kering</p>
              </li>
              <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                  <Image
                    width={36}
                    height={36}
                    className="w-8 h-8"
                    src="/cuci setrika.png"
                    alt=""
                  />
                </div>
                <p className="text-lg font-semibold">Cuci Setrika</p>
              </li>
              <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                  <Image
                    width={36}
                    height={36}
                    className="w-8 h-8"
                    src="/setrika.png"
                    alt=""
                  />
                </div>
                <p className="text-lg font-semibold">Setrika</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Content 1 */}
        <div className="pt-32 flex">
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="row-start-1 row-span-1">
              <div className="w-72 h-60 bg-slate-400 rounded-3xl">
                <Image
                className="w-full h-full rounded-3xl" 
                width={288}
                height={240}
                src="/photo1.jpg" alt="" />
              </div>
            </div>
            <div className="row-start-2 col-start-1 row-span-1">
              <div className="w-72 h-60 bg-slate-400 rounded-3xl">
                <Image 
                className="w-full h-full rounded-3xl"
                width={310}
                height={240}
                src="/photo3.jpg" alt="" />
              </div>
            </div>
            <div className="col-start-2 row-span-2">
              <div className="w-80 h-[510px] bg-slate-400 rounded-3xl">
                <Image
                className="w-full h-full rounded-3xl"
                width={452}
                height={610}
                src="/photo2.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="pl-16">
            <p className="text-lg font-semibold text-blue-600">New For You</p>
            <h1 className="text-4xl font-bold leading-relaxed">
              Pelayanan Laundry <br /> Yang Sederhana <br /> Untuk Orang Sibuk
            </h1>
            <h2 className="text-lg text-gray-500">
              Hemat Waktu, Uang, Dan Energi Mari Cuci Bersama Kami
            </h2>

            <div className="pt-10">
              <p className="text-xl font-semibold">560+</p>
              <p>Pelanggan Yang Puas</p>
            </div>

            <div className="pt-24">
              <a href="">
                <div className="w-36 h-12 bg-blue-700 rounded-xl">
                  <p className="flex justify-center pt-3 text-white font-semibold">
                    Get Started
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="pt-52 mb-24">
          <h1 className="text-4xl font-bold flex justify-center pb-10">
            Tentang Kami
          </h1>

          <div className="flex justify-center items-center gap-10">
            <div className="w-1/2">
              <p className="text-justify text-lg">Laundry kami merupakan laundry yang sangat bagus dan anda dapat percaya terhadap pelayanan yang tersedia pada My Laundry.
               My laundry ini berdiri sejak tahun 2022 yang telah menemani beberapa pelanggan dalam tahun tersebut dan dapat disimpulkan bahwa
              My Laundry merupakan tempat terbaik yang membutuhkan</p>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl rounded-xl overflow-hidden">
              <figure>
                <Image
                  width={210}
                  height={240}
                  className="w-full h-full"
                  src="/beach.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div> 
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page){
  return <DefaultLayout>{page}</DefaultLayout>
}