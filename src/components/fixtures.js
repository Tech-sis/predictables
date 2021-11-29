import React from 'react'
import { Table, Tag } from 'antd'
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css'

const columns = [
  {
    title: 'Club',
    dataIndex: 'club',
    key: 'i',
    width: 150,
    fixed: 'left',
    render: (text, record) => (
      <span>
        {record.time && <Tag color="blue" >{record.time}</Tag>}
        {record.date && <Tag color="blue">{record.date}</Tag>}
        <Link to={'./fixture'}>{text}</Link>
      </span>
    ),
    responsive: ['sm']
  },
  {
    title: '1X2',
    children: [
      {
        title: '1',
        key: 'i',
        width: 100,
        dataIndex: 'tags',
        render: (tags) => (
          <span> 
            {tags.map((tag) => {
              let color = tag >= '90%' ? 'green' : 'red';
              if (tag >= '90%') {
                color = 'green';
              } else if (tag <= '50%') {  
                color = 'red';
              } else {
                color = 'black';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
    {
        title: 'X',
        dataIndex: 'tags',
        key: 'i',
        width: 100,
        tags: '50%',
        render: (tags) => (
          <span> 
            {tags.map((tag) => {
              let color = tag >= '90%' ? 'green' : 'red';
              if (tag >= '90%') {
                color = 'green';
              } else if (tag <= '50%') {  
                color = 'red';
              } else {
                color = 'black';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '2',
        dataIndex: 'tags',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Double Chance',
    children: [
      {
        title: '1X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '12',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Over/Under',
    children: [
      {
        title: 'O',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'OG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'UG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Goal/No Goal',
    children: [
      {
        title: 'GG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'NG',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Odd / Even',
    children: [
      {
        title: 'Odd',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'Even',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Correct Scores',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Halftime/ Fulltime',
    children: [
      {
        title: '',
        dataIndex: 'fail',
        key: 'i',
        width: 120,
      },
    ],
  },
  {
    title: 'Handicap',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: 'X',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Draw No Bet',
    children: [
      {
        title: '1',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
      {
        title: '2',
        dataIndex: 'fail',
        key: 'i',
        width: 100,
      },
    ],
  },
  {
    title: 'Multi C.Score 1',
    children: [
      {
        title: '',
        dataIndex: 'fail',
        key: 'i',
        width: 120,
      },
    ],
  },
]

const data = []
for (let i = 0; i <= 9; i++) {
  data.push({
    key: i,
    club: 'Leicester city vs Chelsea',
    time: '16:00',
    date: '20 Nov',
    tags: ['90%', ],
    fail: '1.3',
    pass: '1.7'
  })
}

const Fixtures = () => {
    return (
      <div>
        <Table
          columns={columns}
          // align="center"
          dataSource={data}
          scroll={{ y: 500 }}
          bordered
          size="small"
          className={styles.table}
        //  style={{textAlign: 'center'}}
        />
      </div>
    )
}

export default Fixtures
