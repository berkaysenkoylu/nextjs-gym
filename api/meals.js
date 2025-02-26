import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = () => {
    return db.prepare('SELECT * FROM meals').all()
}

export const getMealById = (mealId) => {
    return db.prepare('SELECT * FROM meals WHERE mealId = ?').get(mealId)
}

export const saveNewMeal = async (mealData) => {
    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, image, creator, creator_email, mealId)
        VALUES (
            @title,
            @summary,
            @instructions,
            @image,
            @creator,
            @creator_email,
            @mealId
        )
    `).run(mealData)
}