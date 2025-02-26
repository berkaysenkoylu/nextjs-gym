import fs from "node:fs"
import slugify from 'slugify'
import xss from 'xss'

import { saveNewMeal } from "./meals"

export const saveMeal = async (meal) => {
    meal.mealId = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split(".").pop()
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image has failed!")
        }
    })

    meal.image = `/images/${fileName}`

    saveNewMeal(meal)
}