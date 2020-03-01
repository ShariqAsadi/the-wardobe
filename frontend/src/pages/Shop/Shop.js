import React from 'react';
import SHOP_DATA from './Shop.data';
import ProductPreview from '../../components/ProductPreview/ProductPreview';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.shopPage}>
      {SHOP_DATA.map(({ id, ...otherProductProps }) => (
        <ProductPreview key={id} {...otherProductProps} />
      ))}
    </div>
  );
};

export default Shop;
