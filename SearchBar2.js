import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react'

function SearchBar2() {
  return (
    <Input style={{height:"30px"}} size="small" placeholder="Search" prefix={<SearchOutlined />} />
    
  );
  
  
}

export default SearchBar2