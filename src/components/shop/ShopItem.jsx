import React, { Component } from 'react';
import Sizes from '../ui/Sizes';
import Amount from '../ui/Amount';
import Button from '../ui/Button';
import { Fade } from 'react-reveal';

class ShopItem extends Component {
    state = {
        sizeError: false,
        selectedSize: '',
        purchased: false,        
    }

    handlePurchase = () => {
        const {selectedSize, sizeError} = this.state;
        if (!selectedSize && !sizeError) {
            this.setState({sizeError: true});
        }
        else {            
            this.setState({purchased: true})
        }
    }

    handleSizeChange = e => {        
        const selectedSize = e.target.innerText;        
        this.setState({selectedSize, sizeError: false})
    }

    render() {
        const {url, type, name, price, sizes} = this.props;
        const {sizeError, selectedSize, purchased} = this.state;
        return (
            <div className={`shop__item ${purchased ? 'shop__item--purchased' : ''}`}>
                <img src={url} alt={type} className="shop__img"/>
                <div className="shop__name">{name}</div>
                <div className="shop__price">${price}</div>
                <div className="shop__details">
                    {(sizeError && !selectedSize) && (
                        <Fade duration={500}>
                            <div className="shop__size-error">Please select a size first</div>
                        </Fade>
                    )}
                    <Sizes clickHandler={this.handleSizeChange} sizes={sizes} selectedSize={selectedSize}/>
                    <Amount/>
                </div>                
                <Button clickHandler={this.handlePurchase} text={purchased ? 'In your basket' : 'Purchase'}/>
            </div>
        );
    }
}

export default ShopItem;