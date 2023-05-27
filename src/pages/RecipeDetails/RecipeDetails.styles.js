import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 620px) {
    max-width: 95%;
  }

  @media (min-width: 900px) {
    max-width: 85%;
  }

  .header {
    text-align: center;
    margin-bottom: 1rem;

    img {
      display: block;
      width: 100%;
      border-radius: 0.5rem;
      margin-inline: auto;

      @media (min-width: 700px) {
        max-width: 48rem;
      }
    }
  }

  h1 {
    margin-bottom: 0.6rem;
    font-size: 3.6rem;
  }

  ul,
  ol {
    padding-inline: 2.4rem 0;
  }
  .author {
    margin-bottom: 1rem;
    a {
      text-decoration: none;
      color: #1543a8;
    }
  }

  .details {
    display: flex;
    gap: 0.5rem;
    flex-flow: column nowrap;
    margin-block: 0.8rem;

    h2 {
      width: fit-content;
    }

    .cuisines,
    .dish-types,
    .diets {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .minutes {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      text-align: center;
      border-radius: 0.7rem;
      padding: 0.6rem 1.2rem;
      color: #585b5e;
    }

    .dish-types {
      span {
        text-align: center;
        border-radius: 0.5rem;
        padding: 0.5rem 1.6rem;
        border: 2px solid #788595;
      }
    }
  }

  .content {
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
