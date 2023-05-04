import styled from 'styled-components'

export const Container = styled.section`
  text-align: center;

  @media (min-width: 460px) {
    margin-inline: auto;
    width: 80%;
    max-width: 45rem;
  }

  form {
    font-size: 1.6rem;
    display: flex;
    text-align: left;
    flex-flow: column nowrap;
    gap: 1rem;

    input {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.6rem 0.8rem;
      border: 1px solid rgb(166 166 166);
      border-radius: 0.2rem;

      :focus {
        outline: 2px solid rgb(255 205 83);
      }
    }
  }

  p {
    margin-block: 1rem 1.5rem;
  }

  .google-signin {
    appearance: none;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 4rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    background-color: #eee;
    cursor: pointer;
  }
`
