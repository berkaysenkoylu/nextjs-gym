import React from 'react'
import classes from "./hero.module.css"

const HeroSection = () => {
  return (
    <section className={classes.HeroSection}>
        <div>
            <p>HERO IMAGE</p>
            <p>HERO TEXT</p>
        </div>
    </section>
  )
}

export default HeroSection