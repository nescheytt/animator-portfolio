import { Col, Row } from 'antd';

// components
import { LayoutPage } from '../../components/layout';
import { Meta } from './components/meta';
import { Banner } from './components/banner';
import { Work } from './components/work';
import { About } from './components/about';
import { SocialMedia } from './components/social-media';

// styles
import { Content } from './styles';

export const Home = () => {
  return (
    <LayoutPage>
      <>
        <Meta />

        <Content>
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>

          <Row>
            <Col>
              <Work />
            </Col>
          </Row>
        </Content>

        <Content id="about">
          <Row>
            <Col>
              <About />
            </Col>
          </Row>
        </Content>

        <Content id="contact">
          <Row>
            <Col>
              <SocialMedia />
            </Col>
          </Row>
        </Content>
      </>
    </LayoutPage>
  )
};
