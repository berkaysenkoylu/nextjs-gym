import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from "./page.module.css"

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Navbar__IconContainer}>
        <Image
          src="/images/logo.png"
          width={60}
          height={60}
          alt="Logo"
        />
        <h3>NEXTLEVEL FOOD</h3>
      </div>

      <ul className={classes.Navbar__NavList}>
        <li><Link href="/meals">Browse Meals</Link></li>
        <li><Link href="/community">Foodies community</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
