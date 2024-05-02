"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/" && (
        <header className="w-full sticky top-0 h-8 mb-8 bg-black">
          <div className="flex flex-col items-center align-middle h-full w-full justify-center text-gray-200 tracking-widest">
            Endy Gómez
          </div>

          {/* <Link href="/" className="flex justify-center">
          <Image
            priority
            src="/images/my-profile.jpg"
            className="rounded-full"
            height={pathName === "/" ? 200 : 108}
            width={pathName === "/" ? 200 : 108}
            alt=""
          />
        </Link> */}
          {/* <div className="flex justify-center mt-2">
          <Link
            href="/"
            className={`${
              pathName === "/" ? "text-5xl" : "text-2xl"
            } tracking-tighter font-medium`}
          >
            {name}
          </Link>
        </div> */}
        </header>
      )}
    </>
  );
};

export default Header;
