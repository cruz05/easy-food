import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1.4rem 1.2rem;
  margin-top: 1rem;
  padding: 1rem 0;

  a {
    text-decoration: none;
  }

  p {
    text-align: center;
  }
`
