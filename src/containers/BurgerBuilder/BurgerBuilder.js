import React, { Component } from 'react';
import Auxy from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingridients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }

    render () {
        return (
            <Auxy>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls />
            </Auxy>
        );
    }
}

export default BurgerBuilder;