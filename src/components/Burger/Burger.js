import { array } from 'prop-types';
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingridients) // Extracts key from a given Object into Array
        .map(igKey => {
            return [...Array(props.ingridients[igKey])]
                .map((_, i) => {
                    return <BurgerIngridient key={igKey + i} type={igKey}/>
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingridients!</p>
        }
        // console.log(Object.keys(props.ingridients));
        // console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default Burger;