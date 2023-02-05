import React, { useRef, useState } from 'react';
import classes from './MealitemForm.module.css';
import Input from '../UI/Input';

const MealitemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '1',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button> Add </button>
            {!amountIsValid && <p> Please enter a valid amount </p>}
        </form>
    );
}

export default MealitemForm;