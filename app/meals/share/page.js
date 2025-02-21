import classes from "./mealshare.module.css"

export default function MealSharePage() {
    return (
        <section className={classes.MealShare}>
            <header>
                <h2>Share your <span>favorite meal</span></h2>

                <p>Or any other meal you feel needs sharing!</p>
            </header>
            
            <form className={classes.Form}>
                <div className={classes.row}>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required  />
                    </p>
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="text" id="email" name="email" required  />
                    </p>
                </div>

                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required  />
                </p>

                <p>
                    <label htmlFor="summary">Short Summary</label>
                    <input type="text" id="summary" name="summary" required  />
                </p>
                <p>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                    id="instructions"
                    name="instructions"
                    rows="10"
                    required
                    ></textarea>
                </p>

                <div>
                    IMAGE PICKER
                </div>

                <div className={classes.Actions}>
                    <button>Share Meal</button>
                </div>
            </form>
        </section>
    )
}
