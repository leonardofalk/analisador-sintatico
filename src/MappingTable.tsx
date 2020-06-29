import React from 'react'
import { Table } from 'antd'

const columns = [
  { title: '-', dataIndex: 'init' },
  { title: 'a', dataIndex: 'a' },
  { title: 'b', dataIndex: 'b' },
  { title: 'c', dataIndex: 'c' },
  { title: '$', dataIndex: '_f' },
]

const dataSource = [
  { key: 0, init: 'S', a: 'S → aAc', b: 'S → C', c: 'S → C', _f: '' },
  { key: 1, init: 'A', a: 'A → aBc', b: 'A → bA', c: 'A → ε', _f: '' },
  { key: 2, init: 'B', a: 'B → aB', b: 'B → C', c: 'B → cCa', _f: ''},
  { key: 3, init: 'C', a: '-', b: 'C → bBa', c: 'C → c', _f: '' },
]

export const MappingTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={false}
      bordered={false}
    />
  )
}
