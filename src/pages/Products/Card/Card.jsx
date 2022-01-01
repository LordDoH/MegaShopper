import React, { useEffect, useState } from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import Icons
import { FaRegClock } from 'react-icons/fa';
// Import css
import Styles from './Card.module.css';
// Context
import { useStateProduct } from '../../../context/ProductContext';

function Card({
  id = 1,
  title = 'T-shirt',
  price = 50.3,
  image = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
}) {
  const { setProductId } = useStateProduct();

  const [timer, setTimer] = useState(18000001);

  useEffect(() => {
    // Random time - 10 min max
    const time = Math.floor(Math.random() * 1000) * 60 * 8 + 120000;

    // Max time
    let maxTime = 18000000 + time;

    const reducer = setInterval(() => {
      maxTime -= 1000;
      setTimer(maxTime);
    }, 1000);
    return () => clearInterval(reducer);
  }, []);
  return (
    <div className={Styles.main}>
      {/* Product Image */}
      <img className={Styles.pic} src={image} alt="Product" />
      {/* Product Data */}
      <div className={Styles.productDataContainer}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.price}>{`$ ${price} `}</div>
        <div className={Styles.timingContainer}>
          <div className={Styles.clockContainer}>
            <FaRegClock />
            {/* Time check to message */}
            <p>
              {timer < 18001000
                ? 'Time is over'
                : new Date(timer).toLocaleTimeString('en-GB')}
            </p>
          </div>
          {/* Time check to button and link */}
          <Link
            onClick={() => {
              setProductId(id);
            }}
            className={timer < 18001000 ? Styles.disabled : Styles.enabled}
            disabled={timer < 18001000}
            to={{
              pathname: timer < 18001000 ? '/products' : `/detail/${id}`,
            }}
          >
            {timer < 18001000 ? 'Ended' : 'Detail'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
