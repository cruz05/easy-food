import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #222831;
  padding: 1rem 0.8rem;
  color: white;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: white;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      padding: 0.4rem 1rem;
      border-radius: 0.4rem;
      font-weight: 600;
    }
  }
  .btn-login {
    border: 1px solid #ffd369;
  }

  .btn-register {
    background-color: #ffd369;
    color: #000;
  }
`
