import styled from 'styled-components'

export const Wrapper = styled.form`
  font-size: 1.6rem;
  display: flex;
  text-align: left;
  flex-flow: column nowrap;
  gap: 1.4rem;

  fieldset {
    & > label {
      font-weight: 500;
      color: #565656;
      font-size: 1.5rem;
    }
    & > input {
      font-size: 1.5rem;
      margin-top: 0.4rem;
      width: 100%;
      padding: 1.2rem 0.9rem;
      border: none;
      border: 1px solid #ddd5;
      border-radius: 0.4rem;
      background-color: rgba(238, 238, 238, 0.5);

      :focus {
        outline: 0.2rem solid rgb(255 205 83);
        background-color: #f7f7f782;
      }
    }
  }

  .btn-submit {
    background-color: #191a1c;
    color: #fff;
    border: none;
    margin-top: 0.5rem;

    &:hover {
      background-color: #191a1cda;
    }
  }
`

export const Container = styled.main`
  min-height: 100vh;
  text-align: center;
  margin-inline: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 85%;

  @media (min-width: 460px) {
    margin-inline: auto;
    max-width: 45rem;
  }

  & > div {
    padding: 0 1rem;
  }

  p {
    margin-block: 1rem 1.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  .buttons {
    display: flex;
    gap: 0.4rem;
    justify-content: center;
    flex-flow: row wrap;
  }

  button {
    appearance: none;
    padding: 1.2rem 4rem;
    cursor: pointer;
    font-size: 1.45rem;
    border-radius: 0.4rem;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 600;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .divider {
    margin-block: 1.5rem;
    position: relative;

    span {
      display: inline-block;
      position: relative;
      background-color: white;
      padding: 1rem;
      z-index: 10;
    }

    &::before {
      z-index: 5;
      content: '';
      position: absolute;
      top: 50%;
      bottom: 50%;
      left: 0;
      rigth: 0;
      width: 100%;
      height: 0.2rem;
      background-color: #ccc8;
    }
  }

  p > a {
    font-weight: 600;
    color: #191a1c;
  }

  .btn-home {
    appearance: none;
    position: absolute;
    border: 1px solid #ccc;
    padding: 0.9rem 1.2rem;
    border-radius: 100%;
    top: 1rem;
    left: 1rem;
  }
`
