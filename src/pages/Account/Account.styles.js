import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding-inline: 2.5rem;
  gap: 1rem 1.4rem;
  align-self: start;

  .card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 0.6rem 2rem;
    padding-bottom: 2rem;

    > img {
      width: 10rem;
      border-radius: 50%;
    }

    .card-info {
      p {
        color: #515151;
      }
      .username {
        font-size: 1.9rem;
        font-weight: 500;
      }

      .email {
        margin-bottom: 0.5rem;
      }

      .badge {
        color: #ffb300;
      }

      @media (max-width: 430px) {
        text-align: center;
      }
    }
  }

  .options {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    border-bottom: 1px solid #ccc9;
    border-top: 1px solid #ccc8;

    a {
      min-width: 18rem;
      padding: 1rem 3rem;
      text-decoration: none;
    }
    @media (max-width: 500px) {
      border-bottom: none;

      a {
        width: 100%;
        border-bottom: 1px solid #ccc;
      }
    }
  }
`
