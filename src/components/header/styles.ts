import { Anchor } from 'antd'
import styled from 'styled-components'

export const Component = styled.header`
  margin-top: -120px;
  position: sticky;
  top: 0px;
  z-index: 1;
`

export const AnchorCustom = styled(Anchor)`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  /**
   * Styles forced anchorbar
   */
  &:before {
    border-bottom: none;
  }

  & > div {
    &:before {
      border-inline-start: none !important;
    }
  }

  a {
    font-size: 32px;
  }
`

export const List = styled.ul`
  height: 120px;
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.li`
  margin-right: 24px;

  &:last-child {
    margin-right: 0px;
  }
`

export const Link = styled.a`
  font-size: 32px;
`
