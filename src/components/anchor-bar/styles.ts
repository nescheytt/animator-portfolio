import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledAnchorBar = styled.div<{ direction: string, size: string }>`
  width: 100%;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;


`;

export const StyledAnchorLink = styled.a<{ active: boolean }>`
  color: #0057ff;
  padding: 10px;
  margin-right: 30px;
  position: relative;
  display: inline-block;

  &:nth-last-child(1) {
    margin-right: 0px;
  }

  &:hover {
    color: #0057ff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: #0057ff;
    transition: width 0.3s ease-out;
  }

  ${({ active }) => (active && `
    &::after {
      width: calc(100% - 20px);
    }
  `)};

  &:hover::after {
    width: calc(100% - 20px);
  }
`;
