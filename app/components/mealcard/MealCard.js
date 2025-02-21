import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from './MealCard.module.css'

// TODO remove later
import burgerImg from '@/assets/burger.jpg'

const MealCard = ({ mealData }) => {
    const { id, title, description, author, image } = mealData || {}
    const imageName = (image?.src || '').split('/').slice(-1).join('').split('.')[0] || ''
    return (
        <div className={classes.MealCard}>
            <div className={classes.MealCard__ImageContainer}>
                <Image
                    src={image}
                    alt={imageName}
                />
            </div>
            <div className={classes.MealCard__Info}>
                <h2>{title}</h2>
                <span>{`by ${author}`}</span>
                <p>{description}</p>
            </div>
            <div className={classes.MealCard__Cta}>
                <Link href={`meals/${id}`}>View Details</Link>
            </div>
        </div>
    )
}

export default MealCard
