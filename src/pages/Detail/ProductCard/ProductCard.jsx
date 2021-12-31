import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import Icons
import { FaRegStar, FaRegThumbsUp } from 'react-icons/fa';
// Import css
import Styles from './ProductCard.module.css';

function ProductCard({
  title = 'Mens Casual Premium Slim Fit T-Shirts',
  price = 10,
  description = 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category = 'Mens clothing',
  image = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  rate = 3.3,
  counter = 120,
}) {
  return (
    <div className={Styles.main}>
      {/* Product Image and Title */}
      <div className={Styles.productContainer}>
        <img className={Styles.pic} src={image} alt="Product" />
        <div className={Styles.title}>{title}</div>
      </div>
      {/* Product Data */}
      <div className={Styles.productDataContainer}>
        <div className={Styles.priceContainer}>
          <div className={Styles.price}>{`$ ${price} `}</div>
          <div className={Styles.category}>{category}</div>
        </div>
        <div className={Styles.descriptionContainer}>
          <div className={Styles.title}>Description</div>
          <hr className={Styles.line} />
          <div className={Styles.description}>{description}</div>
        </div>
        <div className={Styles.rateContainer}>
          <div className={Styles.stars}>
            <FaRegStar />
            {rate}
          </div>
          <div className={Styles.count}>
            <FaRegThumbsUp />
            {counter}
          </div>
        </div>
        {/* Buy Button (Fallback) */}
        <Link className={Styles.button} to="/">
          Buy
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
