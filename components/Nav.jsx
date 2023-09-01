import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">
        <Link href="./" className="flex items-center no-underline text-black">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ErnieWebDev
          </span>
        </Link>
       
      </div>
    </nav>
  );
};

export default Nav;
