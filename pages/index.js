import { Inter } from "next/font/google";
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

  const styles = {
    backgroundImage: `url('./public/homepg.png')`,
  };
  
  return (
        <div className="w-full">
          {/* With Background Cover */}
          <div>
            <div className="pt-32">
              <div className="flex justify-center items-center text-2xl text-center">
                {slogan_1}
              </div>
              <div className="text-center text-6xl font-bold">
                {slogan_2}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col justify-center mb-44 pt-40">
                <div className="">
                  <div className="w-44 h-14 rounded-t-lg bg-blue-600">
                    <div className="pt-5 pl-6 flex gap-3">
                      <img className="w-5 h-5" src="/tipe laundry.png" alt="" />
                      <p className="text-white font-medium">Pelayanan</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full rounded-b-3xl rounded-tr-3xl shadow-2xl bg-white">
                  <ul className="flex justify-center gap-28 p-16">
                    <li className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                        <img className="w-8 h-8" src="/cuci basah.png" alt="" />
                      </div>
                      <p className="text-lg font-semibold">Cuci Basah</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                        <img className="w-8 h-8" src="/cuci kering.png" alt="" />
                      </div>
                      <p className="text-lg font-semibold">Cuci Kering</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                        <img className="w-8 h-8" src="/cuci setrika.png" alt="" />
                      </div>
                      <p className="text-lg font-semibold">Cuci Setrika</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-[#E8EDFF]">
                        <img className="w-8 h-8" src="/setrika.png" alt="" />
                      </div>
                      <p className="text-lg font-semibold">Setrika</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-32 flex justify-center mb-10">
            <div className="grid rid-cols-2 grid-rows-2 gap-6">
              <div className="row-start-1 row-span-1">
                <img className="w-full h-60 rounded-3xl" src="/photo1.jpg" alt="" />
              </div>
              <div className="row-start-2 col-star-1 row-span-1">
                <img className="w-full h-60 rounded-3xl" src="/photo3.jpg" alt="" />
              </div>
              <div className="col-start-2 row-span-2">
                <img className="w-80 h-[510px] rounded-3xl" src="/photo2.jpg" alt="" />
              </div>
            </div>

            <div className="pl-6 ">
              <div className="w-80">
                <p className="text-lg font-semibold text-blue-600">Baru Untuk Anda</p>
                <h1 className="text-4xl font-bold leading-relaxed">Pelayanan Laundry Yang Sederhana Untuk Orang Sibuk</h1>
                <h2>Hemat Waktu, Uang, Dan Energi Mari Cuci Bersama Kami</h2>
              </div>

              <div className="pt-10">
                <p className="text-xl font-semibold">560+</p>
                <p>Pelanggan Yang Puas</p>
              </div>

              <div className="pt-14">
                <a href="">
                  <div className="w-36 h-12 bg-blue-600 rounded-xl">
                    <p className="flex justify-center pt-3 text-white font-semibold">Get Started</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div> 
  );
}

Home.getLayout = function getLayout(page){
  return <DefaultLayout>{page}</DefaultLayout>
}