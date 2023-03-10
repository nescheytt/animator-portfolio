import styled from 'styled-components';

export const HomeBanner = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 15px;
  }
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  margin: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ( min-width: 768px ) {
    flex-direction: row;
  }
`;
