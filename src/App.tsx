import React from 'react'
import { Layout, Row, Col, Divider, ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { RecoilRoot } from 'recoil'
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
          <Row justify="center" gutter={50}>
            <Col flex="auto" span={4} />
            <Col flex="auto" span={8}>
              <GrammarTable />
            </Col>
            <Col flex="auto" span={8}>
              <MappingTable />
            </Col>
            <Col flex="auto" span={4} />
          </Row>
          <Divider dashed />
          <Row justify="center" gutter={50}>
            <Col flex="auto" span={4} />
            <Col flex="auto" span={16}>
              <TokenInput />
            </Col>
            <Col flex="auto" span={4} />
          </Row>
          <Divider dashed />
          <Row justify="center" gutter={50}>
            <Col flex="auto" span={4} />
            <Col flex="auto" span={16}>
              <ResultTable />
            </Col>
            <Col flex="auto" span={4} />
          </Row>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  </RecoilRoot>
)
