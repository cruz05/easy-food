import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  place-items: center;
  gap: 1rem;
  padding-block: 1rem;

  .recipe-card {
    cursor: pointer;
    // box-shadow: 0.2rem 0.2rem 1.4rem #ccc;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
