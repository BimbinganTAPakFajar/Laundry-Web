import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/components/NavBar";
export async function getServerSideProps(context) {
  const res = await axios.get("http://127.0.0.1:1339/api/navigation");
  const res2 = await axios.get("http://127.0.0.1:1339/api/landing-page");
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
        <NavBar nav={nav} />
        {/* Navbar */}

        {/* Tittle */}
        <div className="pt-32">
          <h1 className="text-2xl flex justify-center text-center">
            {slogan_1}
          </h1>

          <h1 className="text-6xl flex justify-center text-center">
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
                src="/plane.png"
                alt="testint pict"
              />
              <Image></Image>
              <p className="text-white font-medium">Pelayanan</p>
            </div>
          </div>

          <div className="w-full  rounded-b-3xl rounded-tr-3xl shadow-2xl">
            <ul className="flex gap-28 p-16">
              <li className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  className="w-7 h-7 rounded-md bg-slate-400"
                  src="/plane-down.png"
                  alt=""
                />
                <p className="text-xl font-semibold">Cuci Basah</p>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  className="w-7 h-7 rounded-md bg-slate-400"
                  src="/plane-up.png"
                  alt=""
                />
                <p className="text-xl font-semibold">Cuci Kering</p>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  className="w-7 h-7 rounded-md bg-slate-400"
                  src="/schedule.png"
                  alt=""
                />
                <p className="text-xl font-semibold">Cuci Setrika</p>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  className="w-7 h-7 rounded-md bg-slate-400"
                  src="/seat.png"
                  alt=""
                />
                <p className="text-xl font-semibold">Setrika</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Content 1 */}
        <div className="pt-32 flex">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="row-start-1 row-span-1">
              <div className="w-72 h-60 bg-slate-400 rounded-3xl">
                <Image src="" alt="" />
              </div>
            </div>
            <div className="row-start-2 col-start-1 row-span-1">
              <div className="w-72 h-60 bg-slate-400 rounded-3xl">
                <Image src="" alt="" />
              </div>
            </div>
            <div className="col-start-2 row-span-2">
              <div className="w-80 h-[510px] bg-slate-400 rounded-3xl">
                <Image src="" alt="" />
              </div>
            </div>
          </div>

          <div className="pl-10">
            <p className="text-lg font-semibold text-blue-600">New For You</p>
            <h1 className="text-4xl font-bold leading-relaxed">
              Pelayanan Laundry <br /> Yang Sederhana <br /> Untuk Orang Sibuk
            </h1>
            <h2 className="text-lg text-gray-500">
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has been the <br />{" "}
              industry&apos;s standard dummy text ever since the 1500s
            </h2>

            <div className="pt-10">
              <ul className="flex gap-8">
                <li>
                  <p className="text-xl font-semibold">560+</p>
                  <p>Destinations</p>
                </li>
                <li>
                  <p className="text-xl font-semibold">120+</p>
                  <p>Luxury Hotels</p>
                </li>
                <li>
                  <p className="text-xl font-semibold">360K+</p>
                  <p>Happy Tourists</p>
                </li>
              </ul>
            </div>

            <div className="flex items-center pt-10 gap-6">
              <a href="">
                <div className="w-36 h-12 bg-blue-700 rounded-xl">
                  <p className="flex justify-center pt-3 text-white font-semibold">
                    Get Started
                  </p>
                </div>
              </a>

              <a className="text-gray-500 font-semibold" href="">
                View More
              </a>
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="pt-64 mb-24">
          <h1 className="text-4xl font-bold flex justify-center pb-10">
            Tentang Layanan Kami
          </h1>

          <div className="card w-96 bg-base-100 shadow-xl rounded-xl pb-6 overflow-hidden">
            <figure>
              <Image
                width={10}
                height={10}
                className="w-full h-full"
                src="/beach.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold pt-2 pl-6">
                Cuci Basah
              </h2>
              <p className="pt-2 pl-6">Deskripsi Mengenai Cuci Basah</p>
              <div className="card-actions flex justify-end pt-10 pr-6">
                <button className="bg-blue-600 w-36 h-12 rounded-xl text-white">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
