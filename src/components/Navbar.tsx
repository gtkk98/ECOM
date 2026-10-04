import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import CartButton from "./CartButton";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-teal-800 pb-4">
            {/*Left*/}
            <Link href="/" className="flex items-center">
                <Image 
                    src="/logo2.png" 
                    alt="ChowUp"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className="hidden md:block text-md font-medium tracking-wider">ChowUp.</p>
            </Link>
            {/*Right*/}
            <div className="flex items-center gap-6">
                <SearchBar />
                <Link href="/">
                 <Home className="w-4 h-4 text-gray-600" />
                </Link>
                <Bell className="w-4 h-4 text-gray-600" />
                <CartButton />
                <Link href="/login">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar