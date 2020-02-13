import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = () => {
     
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
             <p>Please select ingredients</p>
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )

}

export default burger;
