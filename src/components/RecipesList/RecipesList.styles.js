import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  place-items: center;
  gap: 1rem;
  padding-block: 1rem;

  .recipe-card {
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 1.4rem #ccc;
    border-radius: 0.5rem;
    min-height: 28rem;
    overflow: hidden;
    img {
      width: 100%;
    }

    h3 {
      padding-inline: 1rem;
    }
  }
`
