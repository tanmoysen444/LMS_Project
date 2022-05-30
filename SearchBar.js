
import {  SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react'
function SearchBar() {
  return (
    <Input placeholder="Search Mentor / Employee" prefix={<SearchOutlined />} />
     
  )
}

export default SearchBar