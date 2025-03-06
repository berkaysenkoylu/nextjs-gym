"use server"

import fs from "node:fs"
import slugify from 'slugify'
import xss from 'xss'
import { NextResponse } from 'next/server'

import { saveNewMeal } from "./meals"

const isTextEmpty = (text) => {
    return !text || text.trim() === ""
}

export const saveMeal = async (meal) => {
    meal.mealId = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split(".").pop()
    const fileName = `${meal.mealId}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image has failed!")
        }
    })

    // TODO: add input validation here
    if (isTextEmpty(meal.title) || isTextEmpty(meal.summary) ||
        isTextEmpty(meal.instructions) || isTextEmpty(meal.creator) || isTextEmpty(meal.creator_email)) {
            return {
                error: "Invalid input",
                status: "400"
            }
        }

    meal.image = `/images/${fileName}`

    await saveNewMeal(meal)
}