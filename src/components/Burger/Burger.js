import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingridients)
        .map(igKey => {
            return [...Array(props.ingridients[igKey])].map((_, i) => {
                    return <BurgerIngridient key={igKey + i} type={igKey}/>
                }
            );
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default Burger;