import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled(Link)`
  text-decoration: none;
  background-color: #41548b;
  color: #fff;
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: #3c486b;
    color: #f0f0f0;
  }
`

export const Button = ({ children, to }) => {
  return <ButtonStyled to={to}>{children}</ButtonStyled>
}
