import React, { useEffect, useState } from 'react';
// Import axios
import axios from '../../services/axios/axios';
// Import css
import Styles from './Products.module.css';
// Import images
import Bags from '../../assets/images/bags.png';
// Import layout components
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
// Import components
import Card from './Card/Card';

function Products() {
  //   States for products and spinner
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //   Request for data
  useEffect(() => {
    const reqProducts = async () => {
      try {
        const resProducts = await axios.get('products');
        setProducts(resProducts.data);
        setLoading(true);
      } catch (e) {
        // console.log(e);
      }
    };
    reqProducts();
  }, []);
  //   Function to subtract 6 random numbers between 1-20 without repeat
  const renderProducts = [];
  const availableProducts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  for (let i = 0; i < 6; i += 1) {
    const random = Math.floor(Math.random() * availableProducts.length);
    renderProducts.push(availableProducts[random]);
    availableProducts.splice(random, 1);
  }

  return (
    <div>
      <Header />
      <div className={Styles.main}>
        <div className={Styles.card}>
          <span className={Styles.title}>Let&apos;s go shopping</span>
          <img className={Styles.pic} src={Bags} alt="bags" />
          <span className={Styles.text}>Limited time only!</span>
        </div>
        <div className={Styles.product}>
          {/* Spinner display verification */}
          {!loading ? (
            <div className={Styles.loadwrap}>
              <div className={Styles.load}>
                <div />
              </div>
              <span className={Styles.loadtext}>Loading</span>
            </div>
          ) : null}
          {/* Map products object to get information */}
          {products.map((product) => {
            if (renderProducts.includes(product.id)) {
              return (
                //   Call to the Card component
                <Card
                  className={Styles.productcard}
                  key={product.image}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
