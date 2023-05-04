import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  main {
    padding: 1rem 1.5rem;
    flex-grow: 2;
    display: grid;
    align-items: center;
    @media (min-width: 700px) {
      width: 85%;
      margin-inline: auto;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    background-color: #222831;
    padding: 1.5rem 3rem;
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
    }
  }
`
