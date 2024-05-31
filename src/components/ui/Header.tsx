"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {}
const Header = ({}: Props) => {
  const pathName = usePathname();

  return (
    <>
      <header className="w-full top-0 h-16 bg-primary-700">
        <div className="grid grid-cols-3 h-full tracking-widest">
          <div className="flex h-full justify-start align-middle items-center w-full text-center text-gray-200">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                className="ml-16 h-16 w-16"
                height={240}
                width={240}
                alt="Endy Gómez - Logo"
              />
            </Link>
          </div>
          <div className="flex h-full justify-center align-middle items-center w-full text-gray-200">
            <ul className="grid grid-cols-2 text-lg font-light">
              {/* TODO: <li>
                <Link href="#">SOBRE MI</Link>
              </li>
              <li className="flex justify-start pl-8">
                <Link href="#">BLOG</Link>
              </li> */}
            </ul>
          </div>
          <div className="flex h-full justify-end align-middle items-center w-full text-center text-gray-200">
            {/* TODO:Construir búsqueda */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
