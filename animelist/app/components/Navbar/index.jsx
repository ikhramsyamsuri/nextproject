import Link from "next/link";
import InputSearch from "./inputsearch";

const Navbar = () => {
    return (
        <header className="bg-owned-dark">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-1">
                <Link href="/" className="font-bold text-owned-primary text-[28px]">Anime Iyom</Link>
                <InputSearch/>
            </div>
        </header>
    )
}
export default Navbar;