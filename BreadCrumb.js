import { Breadcrumb } from 'antd'
import React from 'react'

function BreadCrumb() {     
  return (
    <div style={{background:"#0000000A"}}>
    <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Batch</a>
    </Breadcrumb.Item>
    {/* <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item> */}
    {/* <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
  </Breadcrumb></div>
  )
}

export default BreadCrumb