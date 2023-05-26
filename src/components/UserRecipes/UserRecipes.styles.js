import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: grid;

  p {
    justify-self: center;
  }
  .header {
    justify-self: center;

    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media (min-width: 800px) {
      width: 95%;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      background-color: #ffca2b;
      border: none;
      padding: 0.8rem 2rem;
      color: #4f200d;
      border-radius: 0.4rem;
      cursor: pointer;
    }
  }

  form {
    min-width: 33rem;
    border-radius: 0.4rem;
    background-color: #f1f1f1;
    padding: 1rem;

    svg {
      cursor: pointer;
    }

    button {
      background-color: rgb(65, 84, 139);
      border: none;
      padding: 0.8rem 2rem;
      color: white;
      border-radius: 0.4rem;
      cursor: pointer;
    }
  }
`
