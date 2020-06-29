import React from 'react'
import { Layout, Row, Col, Divider, ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import {RecoilRoot} from 'recoil'
import { Header } from './Header'
import { GrammarTable } from './GrammarTable'
import { MappingTable } from './MappingTable'
import { TokenInput } from './TokenInput'
import { ResultTable } from './ResultTable'

export default () => (
  <RecoilRoot>
    <ConfigProvider locale={ptBR}>
      <Layout style={{ height: '100vh' }}>
        <Header />
        <Layout.Content>
          <Row align="middle" justify="center">
            <Col span={8}>
              <GrammarTable />
            </Col>
            <Col span={1} />
            <Col span={8}>
              <MappingTable />
            </Col>
            <Divider dashed />
            <Col span={3} />
            <Col span={20}>
              <TokenInput />
            </Col>
            <Divider dashed />
            <Col span={17}>
              <ResultTable />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  </RecoilRoot>
)
