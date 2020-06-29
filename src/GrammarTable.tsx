import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Gramática',
    dataIndex: 'gramatica',
  },
  {
    title: 'First',
    dataIndex: 'first',
  },
  {
    title: 'Follow',
    dataIndex: 'follow',
  },
]

const dataSource = [
  {
    key: 0,
    gramatica: 'S ::= aAc | C',
    first: 'S ::= { a, b, c }',
    follow: 'S ::= { $ }',
  },
  {
    key: 1,
    gramatica: 'A ::= aBc | bA | ε',
    first: 'A ::= { a, b, ε }',
    follow: 'A ::= { c }',
  },
  {
    key: 2,
    gramatica: 'B ::= cCa | aB | C',
    first: 'B ::= { c, a, b }',
    follow: 'B ::= { c, a }',
  },
  {
    key: 3,
    gramatica: 'C ::= bBa | c',
    first: 'C ::= { b, c }',
    follow: 'C ::= { a, c, $ }',
  },
]

export const GrammarTable = () => (
  <Table
    columns={columns}
    dataSource={dataSource}
    size="small"
    pagination={false}
    bordered={false}
  />
)
