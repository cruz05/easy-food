import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 650px) {
    max-width: 85%;
  }

  .header {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1rem;
    gap: 1rem 2rem;

    .recipe {
      flex: 1 1 40rem;
    }

    .recipe-info {
      align-self: center;
      flex-grow: 1;
    }
  }

  img {
    display: block;
    width: 100%;
    border-radius: 0.5rem;

    @media (min-width: 700px) {
      max-width: 50rem;
    }
  }

  h1 {
    margin-bottom: 0.8rem;
  }

  ul,
  ol {
    padding-inline: 2.4rem 0;
  }

  .main-info {
    display: flex;
    gap: 0.5rem;
    flex-flow: row wrap;
    margin-block: 0.8rem;

    & > * {
      border: 2px solid #fdd835;
    }

    .minutes {
      width: fit-content;
      text-align: center;
      display: flex;
      align-items: center;
      border-radius: 0.7rem;
      padding: 0.6rem 2rem;
    }

    span {
      text-align: center;
      text-break: none;
      border-radius: 0.5rem;
      flex: 1 1 3rem;
      padding: 0.5rem 1.6rem;
    }

    span:nth-child(2) {
      flex-grow: 1.5;
    }
  }

  .lists {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    padding-block: 1.5rem;

    li {
      padding-block: 0.5rem;
    }

    .ingredients {
      flex: 1 1 25rem;

      h2 {
        display: flex;
        align-items: center;
        gap: 1rem;

        .servings {
          font-weight: 400;
          font-size: 1.4rem;
          color: #9a9a9a;
        }
      }
    }

    .instructions {
      flex: 2 1 30rem;
    }
  }
`
