import React from 'react'
import { Table, Row, Col, Button } from 'antd'
import { FastBackwardOutlined, StepBackwardOutlined, StepForwardOutlined, FastForwardOutlined } from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { stackState, tokenState } from './states'

const columns = [
  { title: 'Pilha', dataIndex: 'stack', width: '40%' },
  { title: 'Entrada', dataIndex: 'input', width: '40%' },
  { title: 'Ação', dataIndex: 'action', width: '20%' },
]

export const ResultTable = () => {
  const token = useRecoilValue(tokenState)
  const dataSource = useRecoilValue(stackState)
  const [pos, setPos] = React.useState(0)

  React.useEffect(() => {
    setPos(dataSource.length)
  }, [dataSource])

  return (
    <>
      <Row justify="center" align="middle">
        <Col flex="auto" style={{ textAlign: 'center' }}>
          <Button.Group size="small">
            <Button onClick={() => setPos(0)}>
              <FastBackwardOutlined />
            </Button>
            <Button onClick={() => setPos(Math.max(pos - 1, 0))}>
              <StepBackwardOutlined />
            </Button>
            <Button onClick={() => setPos(Math.min(pos + 1, dataSource.length))}>
              <StepForwardOutlined />
            </Button>
            <Button onClick={() => setPos(dataSource.length)}>
              <FastForwardOutlined />
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Table
            scroll={{ y: 400 }}
            columns={columns}
            dataSource={(token === '' ? [] : dataSource).slice(0, pos)}
            size="small"
            pagination={false}
            bordered={false}
          />
        </Col>
      </Row>
    </>
  )

}
