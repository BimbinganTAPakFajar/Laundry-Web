import React from "react";

export default function NavBar() {
  return (
    <nav className="container w-full">
      <div className="w-full flex justify-between items-center h-fit text-black py-5">
        <a className="flex items-center" href="">
          <h1 className="self-center whitespace-nowrap items-center text-4xl font-bold py-5 pl-16">My Laundry</h1>
        </a>
        <div className="h-10 flex gap-x-10 items-center font-bold">
          <ul className="flex justify-center items-center p-4 mt-4">
            <li className="mr-8">
              <a className="" href="">
                Home
              </a>
            </li>
            <li className="mr-8">
              <a className="" href="">
                Service
              </a>
            </li>
            <li className="mr-8">
              <a className="" href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="items-center justify-end flex w-auto order-1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl w-32">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
