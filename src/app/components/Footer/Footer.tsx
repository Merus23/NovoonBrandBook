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
  label: string;
  link: string;
}

type Props = Logo & {
  items?: Item[];
  className?: string;
};

const defaultItems: Item[] = [
  {
    title: "Resources",
    content: [
      { label: "Next", link: "https://nextjs.org/" },
      { label: "Tailwind CSS", link: "https://tailwindcss.com/" }
    ]
  },
  {
    title: "Legal",
    content: [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms & Conditions", link: "#" }
    ]
  }
];

function Footer({ src, title, items, className }: Props) {
  items = items?.concat(defaultItems) || defaultItems;
  return (
    <footer className={`bg-white ${className}`}>
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
                    <li className={index != (items!.length - 1) ? "mb-4" : ""}>
                      <Link href={content.link} className="hover:underline">{content.label}</Link>
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