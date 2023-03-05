import { Row, Col } from "antd"
import { Container } from './styles'


export const Footer = () => {
  return (
    <footer>
      <Row>
        <Col span={24}>
          <Container>All rights reserved 2023 ©️ Facundo López Animator</Container>
        </Col>
      </Row>
    </footer>
  )
}
