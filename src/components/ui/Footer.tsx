"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Footer = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/" && (
        <div className="col-start-2 col-span-6 pb-24 pt-6 text-2xl font-medium">
          <Link href="/" className="text-blue-500">
            ← Volver al inicio
          </Link>
        </div>
      )}
    </>
  );
};
