import styled from 'styled-components';

export const Component = styled.header`
  padding: 20px;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const Sticky = styled.div<{ scrolled?: boolean }>`
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  ${({ scrolled }) => scrolled && `
    opacity: 1;
  `}
`;

export const BurgerContainer = styled.div`
  height: 90px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const line1 = `
  border-top: 5px solid #0057ff;
  border-radius: 10px;
  display: block;
  transition: opacity 0.3s, margin 0.5s, transform 0.5s;
  width: 50px;
`;

export const Burger = styled.div<{ isOpen: boolean }>`
  transition: transform 0.5s;
  z-index: 99;
	
	.line-1 {
		${line1};
	}
	
	.line-2 {
		${line1};
		margin: 10px 0;
	}
	
	.line-3 {
		${line1};
	}

  ${({ isOpen }) => isOpen && `
    padding: 25px 0;
		
		.line-1 {
      ${line1};
			transform: rotate(45deg);
		}

		.line-2 {
      ${line1};
			margin: -5px 0;
			opacity: 0;
		}

		.line-3 {
      ${line1};
			transform: rotate(-45deg);
		}
  `}
`;

export const Screen = styled.div<{ isOpen: boolean }>`
  width: calc(100% + 40px);
  height: 100vh;
  background-color: rgba(255, 215, 206, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: -20px;
  left: -20px;
  transition: opacity 4s;
  opacity: 0;

  ${({ isOpen }) => isOpen && `
    opacity: 1;
  `}
`;
