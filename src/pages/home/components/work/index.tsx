import { Row, Col } from 'antd';

// styles
import { Component } from './styles';

// images
import bkg1 from '../../../../assets/background-1.jpg';
import bkg2 from '../../../../assets/background-2.gif';
import bkg3 from '../../../../assets/background-3.gif';

export const Work = () => {
  return (
    <Component id="work">
      <Row>
        <Col>
          <img src={bkg1} alt="background-1" width="100%" height="100%" />
        </Col>
      </Row>

      <Row>
        <Col span={24} md={12}>
          <img src={bkg2} alt="background-2" width="100%" height="100%" />
        </Col>

        <Col span={24} md={12}>
          <img src={bkg3} alt="background-3" width="100%" height="100%" />
        </Col>
      </Row>

      <Row>
        <Col>
          <img src={bkg1} alt="background-1" width="100%" height="100%" />
        </Col>
      </Row>

      <Row>
        <Col span={24} md={12}>
          <img src={bkg2} alt="background-2" width="100%" height="100%" />
        </Col>

        <Col span={24} md={12}>
          <img src={bkg3} alt="background-3" width="100%" height="100%" />
        </Col>
      </Row>
    </Component>
  );
};
