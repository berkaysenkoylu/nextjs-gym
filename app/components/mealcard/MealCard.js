import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from './MealCard.module.css'


const MealCard = ({ mealData }) => {
    const { mealId, title, summary, creator, image } = mealData || {}
    return (
        <div className={classes.MealCard}>
            <div className={classes.MealCard__ImageContainer}>
                <Image
                    src={image}
                    alt={mealId}
                    fill
                />
            </div>
            <div className={classes.MealCard__Info}>
                <h2>{title}</h2>
                <span>{`by ${creator}`}</span>
                <p>{summary}</p>
            </div>
            <div className={classes.MealCard__Cta}>
                <Link href={`meals/${mealId}`}>View Details</Link>
            </div>
        </div>
    )
}

export default MealCard
