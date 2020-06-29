import React from 'react'
import { useRecoilState } from 'recoil'
import { Input, Button, Col, Row } from 'antd'
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
      <Col span={18}>
        <Input size="small" value={token} onChange={event => setToken(event.target.value)} />
      </Col>
      <Col span={6}>
        <Button.Group size="small">
          <Button type="primary" onClick={() => setToken('')}>Limpar</Button>
          <Button type="primary" onClick={() => setToken(shuffled())}>Gerar</Button>
        </Button.Group>
      </Col>
    </Row>
  )
}
