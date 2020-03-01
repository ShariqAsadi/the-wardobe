import React from 'react';
import styles from './ProductItem.module.css';
import Button from '../Button/Button';

const ProductItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.productItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className={styles.productFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles.customButton}>
        <Button inverted>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
