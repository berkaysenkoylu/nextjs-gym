import Image from "next/image"
import { getMealById } from "@/api/meals"

import classes from "./meal.module.css"

export default async function MealPage({ params }) {
    const { mealId } = await params

    const mealData = getMealById(mealId)
    const { creator, image, instructions, summary, title } = mealData

    return (
        <section className={classes.MealPage}>
            <header className={classes.MealPage__Header}>
                <div className={classes.MealPage__Header__ImgContainer}>
                    <Image src={image} alt={mealId} fill />
                </div>

                <div className={classes.MealPage__Header__Text}>
                    <h2>{title}</h2>

                    <p className={classes.creator}>by <span >{creator}</span></p>

                    <p className={classes.summary}>{summary}</p>
                </div>
            </header>

            <div
                className={classes.Instructions} 
                dangerouslySetInnerHTML={{
                    __html: instructions.replaceAll(/\n/g, "<br>")
                }} 
            />
        </section>
    )
}