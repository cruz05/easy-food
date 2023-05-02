import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-flow: wrap row;
  justify-content: space-between;
  background-color: #222831;
  padding: 1.5rem 3rem;
  color: white;
  box-sizing: border-box;

  .brand {
    font-size: 3.4rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: white;
  }

  nav {
    display: flex;
    gap: 1rem;

    @media (max-width: 500px) {
      display: none;
    }

    a {
      padding: 0.4rem 1rem;
      border-radius: 0.4rem;
    }
    .active {
      // border-bottom: 1px solid #ffd369;
      color: #ffd369;
    }
  }
  .btn-login {
    font-weight: 600;
    border: 1px solid #ffd369;
  }

  .btn-register {
    font-weight: 600;
    background-color: #ffd369;
    color: #000;
  }
`
