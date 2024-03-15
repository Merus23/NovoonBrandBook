import React, { ReactNode } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Item = {
  title: string;
  link: string;
};

type Props = {
  logo: StaticImageData;
  items: Item[];
};

function NavBar({ logo, items }: Props) {
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
