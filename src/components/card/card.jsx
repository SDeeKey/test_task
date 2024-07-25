import React, {useState, useEffect} from 'react';
import './card.scss';

const Card = ({product, setCounter}) => {
    const imagePath = `${process.env.PUBLIC_URL}/img/${product.image}`;
    const curvedHeart = process.env.PUBLIC_URL + '/img/curved_heart.svg';
    const curvedHeartRed = process.env.PUBLIC_URL + '/img/curved_heart_red.svg';

    const [heart, setHeart] = useState('curvedHeart');

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.includes(product.id)) {
            setHeart('curvedHeartRed');
        }
    }, [product.id]);

    const addToCart = () => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (heart === 'curvedHeart') {
            cartItems.push(product.id)
            setHeart('curvedHeartRed');
        } else {
            cartItems = cartItems.filter(id => id !== product.id);
            setHeart('curvedHeart');
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCounter(cartItems)
    }

    const heartImage = (heart === 'curvedHeart' ? curvedHeart : curvedHeartRed)

    return (
        <div className="mainCard">
            <img src={imagePath} alt={product.title}/>
            <p className="title">{product.title}</p>
            <div className="brand_curved_heart">
                <p className="brand">Brand {product.brand}</p>
                <img className="curved_heart" src={heartImage} alt="heart" onClick={addToCart}/>
            </div>
            <p className="price">
                {product.regular_price.currency} {product.regular_price.value}
            </p>
        </div>
    );
};

export default Card;
