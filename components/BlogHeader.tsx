import { IconChecks, IconChevronDown, IconLogin, IconPlus, IconWindowMaximize } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useScroll from "lib/hooks/useScroll";

const links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Recent",
    route: "/recent"
  }
]

export function Header() {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.route}
      className={`${active == link.route && "bg-gradient-to-r from-[#0090fe]/25 to-[#00d8f4]/25"} hover:bg-gradient-to-r from-[#0090fe]/25 to-[#00d8f4]/25 p-2 rounded-md`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.route);
        router.push(link.route);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full flex justify-center ${scrolled
        ? " dark:bg-black/30 backdrop-blur-xl"
        : "bg-black/0"
        } z-30 transition-all`}
      >
        <div className="w-[1280px] grid grid-cols-3 items-center h-16">
          <div className="relative md:hidden">
            <button
              className="inline-flex items-center px-4 py-2 focus:outline-none transition duration-1000"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <XCircleIcon className="w-6 h-6 md:hidden" />
              ) : (
                <Bars3Icon className="w-6 h-6 md:hidden" />
              )}
            </button>
            {isOpen && (
              <div className="absolute md:hidden w-40 mt-4 flex flex-col rounded-md shadow-lg bg-white dark:bg-black font-poppins text-sm">
                <Link
                  className="hover:bg-gradient-to-r font-poppins from-[#0090fe] to-[#00d8f4] p-2 rounded-md"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:bg-gradient-to-r font-poppins from-[#0090fe] to-[#00d8f4] p-2 rounded-md"
                  href="/recent"
                >
                  Recent
                </Link>
                <Link
                  className="hover:bg-gradient-to-r font-poppins from-[#0090fe] to-[#00d8f4] p-2 rounded-md"
                  href="https://stockpile.so"
                >
                  Main Site
                </Link>
              </div>
            )}
          </div>
          <div className="md:flex space-x-4 hidden text-gray-900 justify-start dark:text-white font-poppins text-sm">
            {items}
          </div>

          <Link href="/" className="block mx-auto">
            <Image
              priority
              src="/logo.svg"
              alt="Stockpile"
              width={30}
              height={30}
            />
          </Link>

          <div className="flex space-x-4 justify-end items-center">
            <Link href={"https://stockpile.so"}>
              <button
                className="px-2 md:flex space-x-2 items-center transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-md bg-gradient-to-r from-[#0090fe] to-[#00d8f4] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-sm font-poppins text-white w-fit h-10 justify-center hidden"
              >
                <IconWindowMaximize stroke={1} size={24} />
                <span>Main Site</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
