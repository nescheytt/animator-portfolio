import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
`;

export const WrapperImage = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Hovered = styled.div<{ hovered: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 87, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  transition: all ease-in-out 0.5s;

  ${({ hovered }) => hovered && 'opacity: 1;'}
`;

export const Image = styled.img``;

export const Title = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: normal;
  margin: 0px 0px 10px 0px;
`;

export const LinkWork = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 300;
  position: relative;

  &:hover {
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
