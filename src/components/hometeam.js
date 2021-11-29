import React from 'react'
import { Table } from 'antd'
import styles from '../styles/fixturehome.module.css'
import Awayteam from './awayteam'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Fixtures',
    dataIndex: 'fixtures',
    key: 'fixtures',
    width: 200,
    fixed: 'left',
    render: (text, record) => (
      <span>
        {/* {record.date && <Tag color="blue" margin-right= "10px">{record.date}</Tag>} */}
        {record.date}
        {/* {text} */}
        <Link to={'./fixture'} style={{ display: 'block' }}>
          {text}
        </Link>
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
    fixtures: 'Arsenal vs Watford',
    1: '90%',
    X: '0',
    2: '10%',
    time: '16:00',
    date: '26 Nov 21',
  })
}

const Hometeam = () => {
  return (
    <div className={styles.tableGrid}>
      <div>
        <h6>Arsenal</h6>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          scroll={{ y: 450 }}
          size="small"
        />
      </div>
      <div>
        <Awayteam />
      </div>
    </div>
  )
}

export default Hometeam
