import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 120px 15px;
    height: 100vh;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  margin-bottom: 80px;
  letter-spacing: 2px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 40px;
  }
`;

export const Paragraph = styled.p`
  color: #0057ff;
  font-size: 22px;
  text-align: center;
  letter-spacing: 2px;
  margin: 0px;
`;
