import React from 'react';
import { Tabs } from 'antd';
import ShopDescriptions from './ShopDescriptions';
import ShopRevives from './ShopRevives';

// const onChange = (key) => {
//   console.log(key);
// };

const items = [
  {
    key: '1',
    label: 'Product Description',
    children: <ShopDescriptions/>,
  },
  {
    key: '2',
    label: 'Reviews (19)',
    children: <ShopRevives/>,
  },
];
const ShopTabs = () => <Tabs defaultActiveKey="1" items={items}  />;
export default ShopTabs;