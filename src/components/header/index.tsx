import { Row, Col } from 'antd'
import { Component, AnchorCustom } from './styles'

export const Header = () => {
  return (
    <Component>
      <Row>
        <Col span={24} >
          <AnchorCustom
            direction="horizontal"
            items={[
              {
                key: 'work',
                href: '#work',
                title: 'Work',
              },
              {
                key: 'about',
                href: '#about',
                title: 'About',
              },
              {
                key: 'contact',
                href: '#contact',
                title: 'Contact',
              }
            ]}
          />
        </Col>
      </Row>
    </Component>
  )
}
