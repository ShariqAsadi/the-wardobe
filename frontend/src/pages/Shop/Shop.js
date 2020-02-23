import React, { useState } from 'react';
import SHOP_DATA from './Shop.data';
import ProductPreview from '../../components/ProductPreview/ProductPreview';
import styles from './Shop.module.css';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className={styles.shopPage}>
      {collections.map(({ id, ...otherProductProps }) => (
        <ProductPreview key={id} {...otherProductProps} />
      ))}
    </div>
  );
};

export default Shop;
