import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = () => {
    return db.prepare('SELECT * FROM meals').all()
}

export const getMealById = (mealId) => {
    return db.prepare('SELECT * FROM meals WHERE mealId = ?').get(mealId)
}