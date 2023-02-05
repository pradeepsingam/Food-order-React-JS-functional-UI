import { Fragment } from "react";
import mealsImage from "./meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <h2>OrderFood </h2>

            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A Table with different kind foods" />
        </div>
    </Fragment>
}

export default Header;