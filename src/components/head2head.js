import React from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
const columns = [
  {
    title: 'Fixture',
    dataIndex: 'fixture',
    key: 'fixture',
    width: 150,
    fixed: 'left',
    render: (text, record) => (
      <span>
        {/* {record.date && <Tag color="blue" margin-right= "10px">{record.date}</Tag>} */}
        {record.date}
        {/* {text} */}
        <Link to={'./fixture'} style={{padding: '10px'}}>{text}</Link>
      </span>
    ),
  },
  {
    title: '1',
    dataIndex: '1',
    key: '1',
  },
  {
    title: 'X',
    dataIndex: 'X',
    key: 'X',
  },
  {
    title: '2',
    dataIndex: '2',
    key: '2',
  },
]

const data = []
for (let i = 0; i <= 9; i++) {
  data.push({
    key: '1',
    fixture: 'Arsenal vs Newcastle',
    1: '60%',
    X: '10%',
    2: '30%',
    time: '16:00',
    date: '26 Nov 21',
  })
}


const Head2Head = () => {
  return (
    <div>
      <div>Head2Head</div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ y: 500 }}
        bordered
        size="small"
      />
    </div>
  )
}

export default Head2Head
