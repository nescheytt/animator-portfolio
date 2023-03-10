import { useState } from 'react';
import { Grid, Row, Col } from 'antd';

// styles
import { Component, WrapperImage, Hovered, Image, Title, LinkWork } from './styles';

// images
import bkg1 from '../../../../assets/background-1.jpg';
import bkg2 from '../../../../assets/background-2.gif';
import bkg3 from '../../../../assets/background-3.gif';

const listWorks = [
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg1,
    alt: 'work-1',
    col: 24,
  },
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg2,
    alt: 'work-2',
    col: 12,
  },
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg3,
    alt: 'work-3',
    col: 12,
  },
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg1,
    alt: 'work-4',
    col: 24,
  },
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg2,
    alt: 'work-5',
    col: 12,
  },
  {
    title: 'Title Project',
    label: 'See project description',
    url: '/',
    image: bkg3,
    alt: 'work-6',
    col: 12,
  },
];

export const Work = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();

  const handleOnClick = (index: number) => {
    setSelectedItem(index);
  };

  const handleLeave = () => {
    setSelectedItem(null);
  };

  return (
    <Component id="work">
      <Row>
        {listWorks.map((work, index) => {
          return (
            <Col key={work.alt + 1} span={md ? work.col : 24}>
              <WrapperImage onClick={() => handleOnClick(index)} onMouseLeave={handleLeave}>
                <Hovered hovered={selectedItem === index}>
                  <Title>{work.title}</Title>
                  <LinkWork to={work.url}>{work.label}</LinkWork>
                </Hovered>
                <Image src={work.image} alt={work.alt} width="100%" height="100%" />
              </WrapperImage>
            </Col>
          );
        })}
      </Row>
    </Component>
  );
};
