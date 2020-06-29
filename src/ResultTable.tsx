import React from 'react'
import { Table } from 'antd'
import { useRecoilValue } from 'recoil'
import { stackState, tokenState } from './states'

const columns = [
  { title: 'Pilha', dataIndex: 'stack' },
  { title: 'Entrada', dataIndex: 'input' },
  { title: 'Ação', dataIndex: 'action' },
]

export const ResultTable = () => {
  const token = useRecoilValue(tokenState)
  const dataSource = useRecoilValue(stackState)

  console.info(dataSource)

  return (
    <Table
      scroll={{ y: 400 }}
      columns={columns}
      dataSource={token === '' ? [] : dataSource}
      size="small"
      pagination={false}
      bordered={false}
    />
  )

}
