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
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  ${({ size }) => size === 'small' && 'font-size: 14px;'}
  ${({ size }) => size === 'medium' && 'font-size: 24px;'}
  ${({ size }) => size === 'large' && 'font-size: 32px;'}
  ${({ direction }) => direction === 'horizontal' && 'flex-direction: row;'}
  ${({ direction }) => direction === 'vertical' && 'flex-direction: column;'}
`;

export const StyledAnchorLink = styled.a<{ active: boolean; direction: string }>`
  color: #0057ff;
  padding: 10px;
  position: relative;
  display: inline-block;

  ${({ direction }) => direction === 'horizontal' && 'margin-right: 30px;'}
  ${({ direction }) => direction === 'vertical' && 'margin-bottom: 30px;'}

  &:nth-last-child(1) {
    ${({ direction }) => direction === 'horizontal' && 'margin-right: 0px;'}
    ${({ direction }) => direction === 'vertical' && 'margin-bottom: 0px;'}
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
