import React from 'react'
import { useRecoilState } from 'recoil'
import { Input, Button, Col, Row } from 'antd'
import { DeleteOutlined, SwapOutlined } from '@ant-design/icons'
import { tokenState } from './states'

const shuffled = () => {
  const count = Math.max(3, Math.floor(Math.random() * 10))
  const chars = 'abc'
  let parts: string[] = []

  for (let i = 1; i <= count; i++) {
    parts = parts.concat(chars.charAt(Math.floor(Math.random() * 3)))
  }

  return parts.join('')
}

export const TokenInput = () => {
  const [token, setToken] = useRecoilState(tokenState)

  return (
    <Row>
      <Col flex="auto">
        <Input
          value={token}
          onChange={event => setToken(event.target.value)}
        />
      </Col>
      <Button.Group>
        <Button type="primary" onClick={() => setToken(shuffled())}>
          <SwapOutlined />
        </Button>
        <Button danger type="primary" onClick={() => setToken('')}>
          <DeleteOutlined />
        </Button>
      </Button.Group>
    </Row>
  )
}
