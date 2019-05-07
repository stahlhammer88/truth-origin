import React from 'react';
import { shop } from '../../data/shop';
import { Fade } from 'react-reveal';
import ShopItem from './ShopItem';

const Shop = () => {
    const shopTShirts = shop.filter(item => item.type === 't-shirts');
    const shopHoodies = shop.filter(item => item.type === 'hoodies');
    const shopHats = shop.filter(item => item.type === 'hats');

    const renderItems = shopItems => (
        shopItems.map((shopItem, i) => <ShopItem {...shopItem} key={i}/>)
    )

    return (
        <div className="wrapper">
            <div className="shop">
                <h1>MERCH AND ACCESSORIES</h1>
                <Fade>
                    <h2>T-SHIRTS</h2>                
                    <div className="shop__row">
                        {renderItems(shopTShirts)}
                    </div>
                </Fade>      
                <Fade>
                    <h2>HOODIES</h2>
                    <div className="shop__row">
                        {renderItems(shopHoodies)}
                    </div>       
                </Fade>                          
                <Fade>                                         
                    <h2>HATS</h2>
                    <div className="shop__row">
                        {renderItems(shopHats)}
                    </div>       
                </Fade>
            </div>
        </div>
    );
};

export default Shop;