import Link from "next/link"
import MealCard from "../components/mealcard/MealCard"

import classes from './meals.module.css'
import { getMeals } from "@/api/meals"


export default function MealsPage() {
    const meals = getMeals()

    return (
        <section className={classes.Meals}>
            <header>
                <h1>Delicious meals, created <span>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <Link href="/meals/share" className={classes.Meals__ShareButton}>Share Your Favorite Recipe</Link>
            </header>
            <div className={classes.Meals__List}>
                {meals.map((meal, index) => {
                    return (
                        <MealCard key={index} mealData={meal} />
                    )
                })}
            </div>
        </section>
    )
}
