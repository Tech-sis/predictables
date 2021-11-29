import React from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Fixture',
    dataIndex: 'fixture',
    key: 'fixture',
    width: 200,
    fixed: 'left',
    render: (text, record) => (
      <span>
        {/* {record.date && <Tag color="blue" margin-right= "10px">{record.date}</Tag>} */}
        {record.date}
        {/* {text} */}
        <Link to={'./fixture'} style={{display: 'block'}}>{text}</Link>
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
    fixture: 'Brighton vs Newcastle',
    1: '60%',
    X: '10%',
    2: '30%',
    time: '16:00',
    date: '26 Nov 21',
  })
}

const Awayteam = () => {
    return (
      <div>
        <h6>Newcastle</h6>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          scroll={{ y: 450 }}
          size="small"
        />
      </div>
    )
}

export default Awayteam
