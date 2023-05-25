import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 2.4rem 5rem;
  justify-content: space-around;
  padding-block: 0.5rem;

  .content {
    flex-grow: 1;
    text-align: center;
    align-self: center;

    h1 {
      font-size: 3.5rem;
    }

    p {
      line-height: 1.3;
      margin-block: 1rem;
      font-size: 1.9rem;
    }

    @media (min-width: 750px) {
      text-align: left;
      justify-content: space-around;
      max-width: 50rem;

      h1 {
        font-size: 5rem;
      }

      p {
        font-size: 1.9rem;
      }
    }
  }

  .images {
    justify-content: center;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 400px) {
      overflow: hidden;
    }
  }

  .images img {
    width: 20rem;
    transform: skewX(355deg);
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .top-img {
    align-self: end;
  }

  .col {
    display: flex;
    flex-flow: column nowrap;
    align-self: end;
    row-gap: 0.2rem;
  }

  .bottom-img {
    display: flex;
    // align-self: start;
  }
`
