"use client";

import React, { ReactNode, useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaBars } from "react-icons/fa";

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
      className={
        "bg-[#f8f9fa] flex justify-between py-4 px-8 items-center gap-8"
      }
    >
      <Link href="/">
        <Image src={logo} alt="logo" className={"w-24"} />
      </Link>

      <ul className={"hidden md:flex flex-rows space-x-4"}>
        {items.map((item, index) => (
          <li>
            <Link
              href={item.link}
              className="text-gray-700 hover:text-gray-900 scale-100 transition-tranform duration-700 hover:scale-150"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={handleMenu} className="block md:hidden">
        <FaBars className="h-8 w-8 cursor-pointer" />
      </button>
    </nav>
  );
}

export default NavBar;
