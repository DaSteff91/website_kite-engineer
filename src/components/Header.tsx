import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <div className="bg-opacity-60 sticky top-0 z-50 flex w-full items-center justify-between bg-red-200 px-4 py-6 shadow-lg">
          <div className="flex items-center gap-8">
            <Image
              src="/images/logo_light.svg"
              alt="Site Logo"
              width={100}
              height={40}
              priority
            />
            {/*<h1 className="text-1xl m-0 text-center">Combining Worlds</h1>*/}
          </div>
          <nav className="flex">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-black hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
