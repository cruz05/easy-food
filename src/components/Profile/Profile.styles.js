import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 0;
  text-align: left;

  form {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-inline: auto;

    @media (min-width: 550px) {
      max-width: 50rem;
    }

    fieldset {
      border: none;
      padding-inline: 0;
    }

    textarea {
      border-radius: 0.4rem;
      font-size: 1.5rem;
      border: 1px solid #bbb;
      padding: 0.9rem 1rem;
      width: 100%;
      margin-block: 0.5rem;
    }

    textarea {
      resize: vertical;
    }

    .btn-submit {
      width: fit-content;
      margin: 1rem auto 0;
      background-color: #ffca2b;
      border: none;
      padding: 0.8rem 2rem;
      color: #4f200d;
      border-radius: 0.4rem;
      cursor: pointer;
    }
  }
`
