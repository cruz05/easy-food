import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  main {
    padding: 2rem 6rem;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #222831;
    padding: 1.5rem 6rem;
    gap: 2rem;

    & * {
      color: white;
    }

    .links {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
    }

    a {
      text-decoration: none;
      &:hover {
        color: #a0a0a0;
      }
    }
  }

  @media (max-width: 600px) {
    main,
    footer {
      padding-inline: 2rem;
    }
  }
`
