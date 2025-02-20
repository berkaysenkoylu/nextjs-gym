"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

import classes from './image-slideshow.module.css'

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg'
import dumplingsImg from '@/assets/dumplings.jpg'
import macncheeseImg from '@/assets/macncheese.jpg'
import pizzaImg from '@/assets/pizza.jpg'
import schnitzelImg from '@/assets/schnitzel.jpg'
import tomatoSaladImg from '@/assets/tomato-salad.jpg'

const imgList = [
    { image: burgerImg, alt: "burger-img" },
    { image: curryImg, alt: "curry-img" },
    { image: dumplingsImg, alt: "dumplings-img" },
    { image: macncheeseImg, alt: "macncheese-img" },
    { image: pizzaImg, alt: "pizza-img" },
    { image: schnitzelImg, alt: "schnitzel-img" },
    { image: tomatoSaladImg, alt: "tomatoSalad-img" }
]

const ImageSlideShow = () => {
    const [currentActiveImgIndex, setCurrentActiveImgIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentActiveImgIndex((prevIndex) => {
                if (prevIndex >= imgList.length - 1) {
                    return 0
                }

                return prevIndex + 1
            })
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={classes.ImageSlideShow}>
            {imgList.map((imgData, index) => {
                return (
                    <Image
                        key={index}
                        src={imgData.image}
                        alt={imgData.alt}
                        className={index === currentActiveImgIndex ? classes.active : ''}
                    />
                )
            })}
        </div>
    )
}

export default ImageSlideShow
