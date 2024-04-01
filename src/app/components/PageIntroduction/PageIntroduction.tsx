import React, { useEffect, useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'

type Props = {
  innerRef: React.RefObject<HTMLDivElement>
  Title: string
  Description: string
  Legend: string
}

function PageIntroduction({ innerRef, Title, Description, Legend }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollToPosition = () => {
    if (innerRef.current) {
      window.scrollTo({
        top: innerRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="flex justify-center items-center min-h-screen z-0 sm:h-auto px-16 lg:px-28 py-16 lg:py-32">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:mr-9 mb-4 lg:w-1/5 w-full">
          <h1 className="text-lg md:text-xl font-bold my-2">{Title}</h1>
        </div>
        <div className="md:text-left">
          <p className="mb-8 text-base md:text-3xl max-w-4xl">{Description}</p>
          <p className="text-xs md:text-xl max-w-4xl">{Legend}</p>
          <div
            className={`fixed transition-opacity duration-700 ${
              scrollPosition > 50 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <a href="#" onClick={scrollToPosition}>
              <BsArrowDown className="text-3xl mt-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageIntroduction
