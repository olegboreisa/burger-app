import React, { Component } from 'react';
import Auxy from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingridients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        }
    }

    render () {
        return (
            <Auxy>
                <Burger ingridients={this.state.ingridients}/>
                <div>Build Controls</div>
            </Auxy>
        );
    }
}

export default BurgerBuilder;