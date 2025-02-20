export default async function MealPage({ params }) {
    const { mealId } = await params
    return (
        <main>
            <h2 style={{ color: 'white', textAlign: 'center' }}>MEAL PAGE</h2>
            <p>{mealId}</p>
        </main>
    )
}