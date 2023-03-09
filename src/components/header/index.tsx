import { useEffect, useState } from 'react';
import { Row, Col, Grid } from 'antd';
import { Component, Sticky, BurgerContainer, Burger, Screen } from './styles';
import { AnchorBar } from '../anchor-bar';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderScreenMenu, setRenderScreenMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();

  const handlerOnClickBurger = () => {
    setIsOpen(!isOpen);
    setRenderScreenMenu(!isOpen);
  };

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        console.log('pasa por aca');
        setVisible(true);
        clearTimeout(timeout);
      } else {
        setVisible(true);
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          setVisible(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Component>
      <Row>
        <Col span={24}>
          {md ? (
            <Sticky scrolled={visible}>
              <AnchorBar direction="horizontal" size="large" links={links} scrollDelay={1000} />
            </Sticky>
          ) : (
            <>
              <BurgerContainer>
                <Burger onClick={handlerOnClickBurger} isOpen={isOpen}>
                  <span className="line-1" />
                  <span className="line-2" />
                  <span className="line-3" />
                </Burger>
              </BurgerContainer>

              {renderScreenMenu && (
                <Screen isOpen={isOpen}>
                  <AnchorBar direction="vertical" size="large" links={links} scrollDelay={1000} />
                </Screen>
              )}
            </>
          )}
        </Col>
      </Row>
    </Component>
  );
};
