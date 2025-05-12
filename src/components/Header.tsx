import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-300 p-4">
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo_light.svg"
          alt="Site Logo"
          width={100}
          height={40}
          priority
        />
        <h1 className="text-1xl m-0 text-center">Combining Worlds</h1>
      </div>
      <nav>
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
    </header>
  );
}
