import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start md:justify-between bg-teal-800 p-8 rounded-lg">
      <div className="flex flex-col items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo2.png" alt="ChowUp" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            ChowUp.
          </p>
        </Link>
        <p className="text-sm text-gray-100">© 2026 ChowUp.</p>
        <p className="text-sm text-gray-100">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-100 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Term of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-100 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-100 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </div>
    </div>
  );
};

export default Footer;
