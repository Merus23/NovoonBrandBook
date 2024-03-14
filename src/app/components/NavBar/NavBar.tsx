import React, { ReactNode } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";

type Item = {
  title: string;
  link: string;
};

type Props = {
  items: Item[];
};

function NavBar({ items }: Props) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>

      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.burger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
