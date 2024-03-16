import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImageData } from "next/image"

type Logo = {
  src: StaticImageData;
  title: string;
};

type Item = {
  title: string;
  content: Content[];
};

type Content = {
  title: string;
  link: string;
}

type Props = {
  src: StaticImageData;
  title: string;
  items?: Item[];
};

const defaultItems: Item[] = [
  {
    title: "Resources",
    content: [
      { title: "Next", link: "https://nextjs.org/" },
      { title: "Tailwind CSS", link: "https://tailwindcss.com/" }
    ]
  },
  {
    title: "Legal",
    content: [
      { title: "Privacy Policy", link: "#" },
      { title: "Terms & Conditions", link: "#" }
    ]
  }
];

function Footer({ src, title, items }: Props) {
  items = items?.concat(defaultItems) || defaultItems;
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src={src} alt={title + " Logo"} className="me-3 aspect-auto" width={32} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">{title}</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {items.map((item, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.title}</h2>
                <ul className="text-gray-500 font-medium">
                  {item.content.map((content, index) => (
                    <li className={index == 0 ? "mb-4" : ""}>
                      <Link href={content.link} className="hover:underline">{content.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">{title}</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer