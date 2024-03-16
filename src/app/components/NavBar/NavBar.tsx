"use client";

import React, { ReactNode, useState } from "react";
import styles from "./NavBar.module.css";
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
    console.log("Passed here");
    setIsOpen(!isOpen);
  };

  return (
    <nav
      //bg-[#f8f9fa]

      className={`  ${
        isOpen
          ? "bg-red-800 flex flex-col justify-between py-4 px-8 items-center gap-8  h-screen "
          : "bg-blue-800 flex justify-between py-4 px-8 items-center gap-8"
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" className={"w-24 hidden sm:block"} />
      </Link>

      {/* "" */}
      <ul className={`${isOpen ? "" : "hidden md:flex flex-rows space-x-4"}`}>
        {items.map((item, index) => (
          <li>
            <Link
              href={item.link}
              className={` "inline-block text-gray-700 hover:text-gray-900 transform scale-100 transition-transform duration-700 hover:scale-110"${
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
        className={`block md:hidden ${isOpen ? "" : ""}`}
      >
        {isOpen ? (
          <IoMdClose className="h-8 w-8 cursor-pointer " />
        ) : (
          <FaBars className="h-8 w-8 cursor-pointer" />
        )}
      </button>
    </nav>
  );
}

export default NavBar;
