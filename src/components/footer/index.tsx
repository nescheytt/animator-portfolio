import { Row, Col } from 'antd';
import { Paragraph } from './styles';


export const Footer = () => {
  return (
    <footer>
      <Row>
        <Col span={24}>
          <Paragraph>All rights reserved 2023 ©️ Facundo López Animator</Paragraph>
        </Col>
      </Row>
    </footer>
  );
};
