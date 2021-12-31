import React, { useEffect } from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import axios
import axios from '../../services/axios/axios';
// Import css
import Styles from './Detail.module.css';
// Import layout components
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
// Import components
import ProductCard from './ProductCard/ProductCard';

// Import Context
import { useStateProduct } from '../../context/ProductContext';

function Detail() {
  // Context call
  const { productId, productData, setProductData } = useStateProduct();

  let NoProduct = '';

  // Fallback Page on reload
  if (productId === null) {
    NoProduct = (
      <div className={Styles.noProduct}>
        <Header />
        <div className={Styles.mainContainer}>
          <span className={Styles.title}>There&apos;s nothing here</span>
          <span className={Styles.text}>
            Select something from our product&apos;s page:{' '}
            <Link className={Styles.text} to="/products">
              Go Shop
            </Link>
          </span>
        </div>
        <ProductCard />
        <Footer />
      </div>
    );
    return NoProduct;
  }
  // Data Product [id] request
  useEffect(() => {
    const reqProduct = async () => {
      const product = await axios.get(`/products/${productId}`);
      setProductData(product.data);
    };
    reqProduct();
  }, [productId]);

  return (
    <div>
      <Header />
      <ProductCard
        className={Styles.productcard}
        key={productData.image}
        id={productData.id}
        title={productData.title}
        price={productData.price}
        description={productData.description}
        category={productData.category}
        image={productData.image}
        rate={productData.rating.rate}
        counter={productData.rating.count}
      />
      <Footer />
    </div>
  );
}

export default Detail;
