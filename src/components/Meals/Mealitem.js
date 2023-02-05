import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Mealitem.module.css';
import MealitemForm from './MealitemForm';


const Mealitem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `Rs ${props.price}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return <div>
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}> {props.description}</div>
                <div className={classes.price}> {price}</div>
            </div>
            <div> <MealitemForm onAddToCart={addItemToCartHandler} /></div>
        </li>
    </div>
}

export default Mealitem;