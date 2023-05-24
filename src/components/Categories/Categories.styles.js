import styled from 'styled-components'

export const List = styled.div`
  padding-block: 1rem 1.5rem;

  h3 {
    margin-block: 0.8rem 1.4rem;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 0.4rem;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    display: none;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    border: 0.2rem solid #ffbf00cf;
    color: #e7a800;
    // font-weight: 500;
  }

  .categories {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 1.8rem;

    & > label {
      display: inline-block;
      min-width: 13rem;
      width: 18rem;
      text-align: center;
      // padding: 1.4rem 2rem;
      padding-block: 1rem;
      border-radius: 0.8rem;
      border: 0.2rem solid #cccccc9d;
      color: #565656;
    }

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`
