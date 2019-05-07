import React from 'react';

const Sizes = ({sizes, clickHandler, selectedSize}) => {    
    return (
        <div className="sizes">
            {sizes.map((size, i) => 
                <span key={i} className={`${size === selectedSize.toLowerCase()? 'selected' : ''}`} onClick={e => clickHandler(e)}>{size}</span>)}
        </div>
    );
};

export default Sizes;