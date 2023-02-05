import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import Mealitem from "./Mealitem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Kottu',
        description: 'Finest chicken and veggies',
        price: 650,
    },
    {
        id: 'm2',
        name: 'NasiKoreng',
        description: 'A Eastern specialty!',
        price: 700,
    },
    {
        id: 'm3',
        name: 'BBQ Chicken',
        description: 'American, raw, meaty',
        price: 1100,
    },
    {
        id: 'm4',
        name: 'Lankan Chicken',
        description: 'Healthy...and green...',
        price: 550,
    },
    {
        id: 'm5',
        name: 'Chicken Briyani',
        description: 'Special Indian cushine..',
        price: 950,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <Mealitem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />)

    return <section className={classes.meals}>
        <ul>
            <Card> {mealsList} </Card>
        </ul>
    </section>
}

export default AvailableMeals;