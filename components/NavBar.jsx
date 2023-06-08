import React from "react";

export default function NavBar() {
  return (
    <nav className="container w-full">
      <div className="flex justify-between p-9">
        <a className="flex items-center" href="">
          <h1 className="self-center whitespace-nowrap items-center text-4xl font-bold py-5 pl-16">My Laundry</h1>
        </a>
        <div className="items-center justify-between flex w-auto order-1">
          <ul className="flex justify-center p-4 mt-4">
            <li>
              <a className="block py-2 pl-3 pr-4" href="">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 " href="">
                Service
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 " href="">
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
