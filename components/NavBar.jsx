import React from "react";

export default function NavBar() {
  return (
    <header className="w-screen bg-white ">
      <nav className="mx-20 flex justify-between">
        <div>
          <img className="w-48" src="/logo1.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-8">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="service">Service</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            <a href="login">Login</a>
          </button>
        </div>
      </nav>
    </header>
  );
}
