import React from 'react';
import styles from './ProductPreview.module.css';
import ProductItem from '../ProductItem/ProductItem';

const ProductPreview = ({ title, items }) => (
  <div className={styles.productPreview}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ProductItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ProductPreview;
