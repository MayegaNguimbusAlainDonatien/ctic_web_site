import React from 'react';
import {Tree} from 'react-bootstrap';
import {AiOutlineDown} from 'react-icons/ai';
import styles from './index.module.scss';

const ProductsCategory = () => {
  return (
    <Tree
      className={styles.productSidebarTree}
      showLine
      switcherIcon={<AiOutlineDown />}
      defaultExpandedKeys={['1']}
      treeData={[
        {
          title: 'Watches',
          key: '1',
          children: [
            {
              title: "Men's Watches",
              key: '1.1',
            },
            {
              title: "Women's Watches",
              key: '1.2',
            },
            {
              title: "Kid's Watches",
              key: '1.3',
            },
          ],
        },
      ]}
    />
  );
};

export default ProductsCategory;
