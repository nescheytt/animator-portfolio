import styled from 'styled-components'

export const Component = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 15px;
  }
`

export const AboutTitle = styled.h2`
  margin: 150px 0px 50px;
`

export const AboutDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 40px;
  }
`

export const Paragraph = styled.p`
  color: blue;
  font-size: 22px;
  text-align: center;
  letter-spacing: 3px;
  margin: 0px;
`
