import React from 'react'
import Link from 'next/link'
import ImageSlideShow from '../images/image-slideshow'

import classes from "./hero.module.css"

const HeroSection = () => {
  return (
    <section className={classes.HeroSection}>
        <div className={classes.HeroSection__Slideshow}>
            <ImageSlideShow />
        </div>
        
        <div className={classes.HeroSection__Info}>
            <h2>Next level food for next level foodies</h2>

            <p>Taste & share food from all over the world.</p>

            <div className={classes.HeroSection__Cta}>
                <Link href="/community">Join the Community</Link>
                <Link href="/meals">Explore Meals</Link>
            </div>
        </div>
    </section>
  )
}

export default HeroSection