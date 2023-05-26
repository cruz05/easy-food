import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 1.5rem 6rem;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 600px) {
    padding-inline: 2.5rem;
  }

  .brand {
    color: #f5b200;
    font-size: 3.2rem;
    font-weight: 500;
  }
  & > p {
    color: #c6c6c6;
  }

  a {
    text-decoration: none;
    color: #221;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      padding: 0.4rem 1rem;
      border-radius: 0.4rem;
    }
    .active {
      color: #f5b200;
    }
  }
  button {
    font-weight: 600;
  }

  .btn-login {
    border: 2px solid #ffd369;
  }

  .btn-register {
    background-color: #ffd369;
    color: #000;
  }

  .btn-logout {
    appearance: none;
    background-color: #0c0a09;
    border: none;
    padding: 0.5rem 1.5rem;
    color: white;
  }
`
