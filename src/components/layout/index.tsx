import { Layout, Row, Col } from 'antd';
import { Header } from '../header';
import { Footer } from '../footer';

interface Args {
  children: React.ReactElement
}

export const LayoutPage = ({ children }: Args) => {
  return (
    <Row>
      <Col span={24}>
        <Header />

        <Layout style={{ backgroundColor: 'transparent', marginTop: '-97px' }}>
          {children}
        </Layout>

        <Footer />
      </Col>
    </Row>
  );
};
