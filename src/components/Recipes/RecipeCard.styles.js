import styled from 'styled-components'

export const Card = styled.div`
  cursor: pointer;
  // box-shadow: 0.2rem 0.2rem 1.4rem #ccc;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  min-height: 28rem;
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
    padding: 0.5rem 0.6rem;
    border-radius: 50%;
    border: none;
    right: 0.5rem;
    top: 0.5rem;
  }

  img {
    width: 100%;
  }

  h3 {
    padding-inline: 1rem;
  }
`
