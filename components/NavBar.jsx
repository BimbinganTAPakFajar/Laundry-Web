import React from "react";

import axios from "axios";

export default function NavBar({ nav }) {
  console.log(nav);
  const {
    attributes: { nav_name },
  } = nav;
  return (
    <nav className="container flex item-center justify-between px-2">
      <h1 className="items-center text-4xl font-bold py-5 pl-16">{nav_name}</h1>
      <div className="w-fit items-center">
        <ul className="flex justify-center p-4 mt-4">
          <li>
            <a className="block py-2 pl-3 pr-4" href="">
              Home
            </a>
          </li>
          <li>
            <a className="block py-2 pl-3 pr-4 " href="">
              Featured
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
    </nav>
  );
}
