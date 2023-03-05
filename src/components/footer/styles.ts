import styled from 'styled-components'

export const Container = styled.div`
  height: 120px;
  background-color: #0057FF;
  padding: 12px;
  
  color: white;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 15px;
  }
`
