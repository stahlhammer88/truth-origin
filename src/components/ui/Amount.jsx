import React, { Component } from 'react';

class Amount extends Component {

    state = {
        amount: 1
    }

    increaseAmount = () => {
        this.setState({amount: this.state.amount + 1})
    }

    decreaseAmount = () => {
        this.setState({amount: this.state.amount - 1})
    }

    render() {
        return (
            <div className="amount">
                <span className="amount__change" onClick={this.increaseAmount}>+</span>
                <span>{this.state.amount}</span>
                <span className="amount__change" onClick={this.decreaseAmount}>-</span>
            </div>
        );
    }
}

export default Amount;