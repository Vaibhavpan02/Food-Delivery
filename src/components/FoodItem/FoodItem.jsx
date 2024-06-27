import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [popup, setPopup] = useState({ show: false, message: '' });

    const handleAddToCart = (id) => {
        addToCart(id);
        setPopup({ show: true, message: `${name} added to cart` });
        setTimeout(() => setPopup({ show: false, message: '' }), 2000); // Hide popup after 2 seconds
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        setPopup({ show: true, message: `${name} removed from cart` });
        setTimeout(() => setPopup({ show: false, message: '' }), 2000); // Hide popup after 2 seconds
    };

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id]
                    ? <img className='add' onClick={() => handleAddToCart(id)} src={assets.add_icon_white} alt='Add' />
                    : <div className="food-item-counter">
                        <img onClick={() => handleRemoveFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => handleAddToCart(id)} src={assets.add_icon_green} alt="Add" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
            {popup.show && <div className="popup">{popup.message}</div>}
        </div>
    );
}

export default FoodItem;
