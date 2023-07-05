import React from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar({children}) {

  const { data: session} = useSession();
  const router = useRouter();

  return (
    <header className="w-screen bg-white ">
      
        <nav className="mx-20 flex justify-between">
          <div>
            <img className="w-48" src="/logo1.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {session?.user ? (
              <>
                <p className="text-sky-600">{session.user.name}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl" onClick={() => signOut()}>
                  Logout
                </button>
              </>
            ) : (
              <button className="bg-blue-600 text-white px-5 py-2 rounded-xl" onClick={signIn}>
                Login
              </button>
            )}
          </div>
        </nav>
        <div>{children}</div>
      
    </header>
  );
}