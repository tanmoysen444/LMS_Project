import { Divider, Radio, Table } from 'antd';
import React, { useState } from 'react'
import "../Components/batchTable.css"

const columns = [
    {
      title: 'No',
      dataIndex: 'No',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Batch ID',
      dataIndex: 'Batch_ID',
    },
    {
      title: 'Batch Name',
      dataIndex: 'Batch_Name',
    },
    {
        title: 'Technologies',
        dataIndex: 'Technologies',
      },
      {
        title: 'Start Date',
        dataIndex: 'Start_Date',
      },
      {
        title: 'End Date',
        dataIndex: 'End Date',
      },
      {
        title: 'Status',
        dataIndex: 'Status',
      },
      {
        title: 'Action',
        dataIndex: 'Action',
      },
  ];
  const data = [
    {
      key: '1',
      No: '1',
      Batch_ID: 111,
      Batch_Name:"Uplift March 24",
      Technologies: 'HTML,CSS,JavaScript,React',
      Start_Date:""
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  
  ]; // rowSelection object indicates the need for row selection
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
function BatchTable() {
    const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div className='batch'>

    <Divider />

    <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  </div>
  )
}

export default BatchTable