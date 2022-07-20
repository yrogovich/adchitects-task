import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import Button from './Button'

// TODO: make mobile menu
const Navbar = () => {
  const [isActiveBurger, setActiveBurger] = useState()

  const handleBurger = () => {
    setActiveBurger(!isActiveBurger)
  }

  const pages = [
    {
      name: 'Products',
      href: '/products',
    },
    {
      name: 'Solutions',
      href: '/solutions',
    },
    {
      name: 'Resources',
      href: '/resources',
    },
    {
      name: 'About',
      href: '/about',
    },
  ];

  const pagesLi = pages.map(({href, name}) =>
    <li className="navbar__navLink" key={href}>
      <Link href={href}>{name}</Link>
    </li>,
  )

  return (
    <motion.div
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="container--wide">
        <div className="navbar__row">
          <div className="navbar__logo">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Breally"
                width={89}
                height={32}
              />
            </Link>
          </div>

          <nav className="">
            <ul className="navbar__nav">
              {pagesLi}
            </ul>
          </nav>

          <div className="navbar__info">
            <Button href="#contact" >Contact us</Button>
          </div>

          <div className={`navbar__burger ${isActiveBurger ? 'navbar__burger--active' : ''}`}
            onClick={handleBurger}
          ><span></span></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar

