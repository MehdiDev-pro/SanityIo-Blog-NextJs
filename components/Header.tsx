import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <Image width={100} height={100} src="/myImage.jpg" alt="logo" />
          </div>
          <h1 className="ml-2">CodeSeer Hub</h1>
        </Link>
      </div>
      <div>
        <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
