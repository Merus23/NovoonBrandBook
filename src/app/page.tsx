'use client'

//import NavBar from "./components/NavBar/NavBar";
import { useRef, useState } from 'react'
import Image from 'next/image'
import NavBar from './components/NavBarMobile/NavBarMobile'
import SideMenu from './components/SideMenu/SideMenu'
import Logo from '/public/assets/images/logo-teste.svg'
import Logo_logo from '/public/assets/logo_logo.png'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'
import PageIntroduction from './components/PageIntroduction/PageIntroduction'

const menuSections = [
  {
    items: [{ label: 'Theory', href: '/theory' }],
  },
  {
    items: [{ label: 'Case Studies', href: '/case-studies' }],
  },
  {
    title: 'Core Elements',
    items: [
      { label: 'Logos', href: '/logos' },
      { label: 'Colors', href: '/colors' },
      { label: 'Voice', href: '/voice' },
      { label: 'Typography', href: '/typography' },
      { label: 'Illustrations', href: '/illustrations' },
      { label: 'Photography', href: '/photography' },
    ],
  },
]

const logo = {
  src: Logo,
  alt: 'Novoon logo',
  width: 50,
  height: 50,
}

export default function Home() {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  const toggleSidebar = () => {
    setShow(!show)
  }

  return (
    //     <>
    //       <NavBar
    //         logo={logo}
    //         items={[
    //           { title: "HOME", link: "/home" },
    //           { title: "CONTACT", link: "/contact" },
    //           { title: "ABOUT", link: "/about" },
    //           { title: "WORK", link: "/work" },
    //         ]}
    //       />
    //     </>
    <div className="flex relative">
      <SideMenu
        isOpen={show}
        onClose={toggleSidebar}
        menuSections={menuSections}
      />
      <div
        className={`transition-margin duration-300 ease-in-out ${
          show ? 'md:mr-64' : ''
        }`}
      >
        <NavBar logo={logo} title="Novoon" onClose={toggleSidebar} />
        <MainContent>
          <PageIntroduction
            innerRef={ref}
            Title="Theory"
            Description="The Siren is our muse, the face of our brand. Her image and our strong wordmark are our most recognizable brand assets."
            Legend="The preferred approach is to use the Siren logo by itself, unlocked from the wordmark. This allows flexibility to present the Siren with greater prominence while maintaining a considered, open and modern presentation."
          />
          <div className="py-24">
            <h1 className="text-3xl font-bold my-2">Theory</h1>
            <p className="mb-8 text-3xl w-full max-w-4xl">
              The Siren is our muse, the face of our brand. Her image and our
              strong wordmark are our most recognizable brand assets.
            </p>
            <p className="text-xl w-full max-w-4xl">
              The preferred approach is to use the Siren logo by itself,
              unlocked from the wordmark. This allows flexibility to present the
              Siren with greater prominence while maintaining a considered, open
              and modern presentation.
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-xl font-bold my-2">Case Studies</h1>
            <p className="mb-8 text-3xl w-full max-w-4xl">
              The Siren is our muse, the face of our brand. Her image and our
              strong wordmark are our most recognizable brand assets.
            </p>
            <p className="text-xl sm:text-sm w-full max-w-4xl">
              The preferred approach is to use the Siren logo by itself,
              unlocked from the wordmark. This allows flexibility to present the
              Siren with greater prominence while maintaining a considered, open
              and modern presentation.
            </p>
          </div>
          <div ref={ref} className="py-24">
            <h1 className="text-3xl font-bold my-2">Theory</h1>
            <p className="mb-8 text-3xl w-full max-w-4xl">
              The Siren is our muse, the face of our brand. Her image and our
              strong wordmark are our most recognizable brand assets.
            </p>
            <p className="text-xl w-full max-w-4xl">
              The preferred approach is to use the Siren logo by itself,
              unlocked from the wordmark. This allows flexibility to present the
              Siren with greater prominence while maintaining a considered, open
              and modern presentation.
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-xl font-bold my-2">Case Studies</h1>
            <p className="mb-8 text-3xl w-full max-w-4xl">
              The Siren is our muse, the face of our brand. Her image and our
              strong wordmark are our most recognizable brand assets.
            </p>
            <p className="text-xl sm:text-sm w-full max-w-4xl">
              The preferred approach is to use the Siren logo by itself,
              unlocked from the wordmark. This allows flexibility to present the
              Siren with greater prominence while maintaining a considered, open
              and modern presentation.
            </p>
          </div>
        </MainContent>
        <Footer
          src={Logo_logo}
          title="Essence"
          items={[
            {
              title: 'Follow Us',
              content: [
                { label: 'Instagram', link: 'https://www.instagram.com/' },
                { label: 'Facebook', link: 'https://www.facebook.com/' },
                { label: 'Twitter', link: 'https://twitter.com/' },
              ],
            },
          ]}
          className="mt-20"
        />
      </div>
    </div>
  )
}
