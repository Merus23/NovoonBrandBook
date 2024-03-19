"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Item = {
  title: string;
  link: string;
};

type Props = {
  logo: StaticImageData;
  items: Item[];
};

function NavBar({ logo, items }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      //bg-[#f8f9fa]

      className={`  ${
        isOpen
          ? " flex flex-col justify-between py-4 px-8 items-center gap-8  h-screen "
          : " flex justify-between py-4 px-8 items-center gap-8"
      }`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className={`${isOpen ? "w-24 hidden" : "w-24 block"}`}
        />
      </Link>

      <ul
        className={` md:flex flex-row gap-10 ${
          isOpen
            ? "flex-col space-y-5 w-full justify-center items-center"
            : "hidden "
        }`}
      >
        {items.map((item, index) => (
          <li
            className={` ${
              isOpen ? "border-y-2 p-6 w-full flex justify-center" : ""
            }`}
          >
            <Link
              href={item.link}
              className={` inline-block text-gray-700 hover:text-gray-900 transform scale-100 transition-transform duration-700 hover:scale-110 ${
                isOpen ? "" : ""
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleMenu}
        className={`  ${isOpen ? "block" : "md:hidden"}`}
      >
        {isOpen ? (
          <IoMdClose
            className={`h-8 w-8 cursor-pointer  ${isOpen ? "" : ""}`}
          />
        ) : (
          <FaBars className="h-8 w-8 cursor-pointer" />
        )}
      </button>
    </nav>
  );
}

export default NavBar;