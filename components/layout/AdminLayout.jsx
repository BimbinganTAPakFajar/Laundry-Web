import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full p-2">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex items-center px-20">
          <Link href="/" class="flex items-center">
            <Image className="w-48" src="/logo1.png" alt="" />
          </Link>
          <h1 className="text-2xl font-light ml-10">Admin</h1>
        </div>
      </nav>

      <div className="p-4 sm:ml-20">
        <div className="p-4 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
