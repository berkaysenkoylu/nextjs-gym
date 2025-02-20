import Link from "next/link"

export default function MealsPage() {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>MEALS PAGE</h1>
            <div>
                <Link href="/meals/meal-1">MEAL 1</Link>
                <Link href="/meals/meal-2">MEAL 2</Link>
                <Link href="/meals/meal-3">MEAL 3</Link>
            </div>
        </main>
    )
}