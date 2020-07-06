import React from 'react'
import { PageHeader } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

export const Header = () => (
  <PageHeader
    title="Analisador Sintático"
    subTitle="v1.0.0 - Leonardo Falk"
    backIcon={<GithubOutlined />}
    onBack={() => (window.location.href = 'https://github.com/leonardofalk/analisador-sintatico')}
  />
)
