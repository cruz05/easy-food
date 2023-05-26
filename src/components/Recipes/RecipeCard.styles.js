import styled from 'styled-components'

export const Card = styled.div`
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 1rem;
  position: relative;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 5;
    background-color: white;
    padding: 0.7rem 0.8rem;
    border-radius: 50%;
    border: none;
    right: 0.5rem;
    top: 0.5rem;
  }

  img {
    max-height: 34rem;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  h3 {
    color: #000;
    margin-top: 0.5rem;
    padding-inline: 0.3rem;
  }
`
