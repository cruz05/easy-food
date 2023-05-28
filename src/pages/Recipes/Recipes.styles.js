import styled from 'styled-components'

export const Container = styled.section`
  align-self: start;
  width: 100%;
  padding-block: 0.8rem;

  & > p {
    color: #595959;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 3.5rem;
    position: relative;
    line-height: 1.1;
  }

  .search-bar {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.5rem;

    input {
      padding: 1.2rem 1.6rem;
      width: 100%;
      flex-grow: 2;
      font-size: 1.6rem;

      &::placeholder {
        color: #676;
      }
    }

    & > button {
      appearance: none;
      border: none;
      background-color: none;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding-inline: 2rem;
      width: fit-content;
      cursor: pointer;
    }
  }

  .btn-load {
    margin: 1.4rem;
    text-align: center;
    appearance: none;
    border: none;
    display: block;
    padding: 0.9rem 2.4rem;
    margin-inline: auto;
    cursor: pointer;
    border-radius: 0.4rem;
    font-weight: 500;
  }
`
