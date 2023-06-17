import styled, { keyframes } from 'styled-components'

const slideBottom = keyframes`
  from { 
    transform:translateY(-30px); 
    opacity: 0.6;
  }
  to { 
    transform:translateY(0); 
    opacity: 1;
  }
`

export const ToastWrapper = styled.div`
  min-height: 3rem;
  display: flex;
  column-gap: 0.6rem;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  border: 1px solid #ccc8;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  box-shadow: 0.4rem 0.3rem 1rem #cccccc9d;
  animation: ${slideBottom} 0.4s ease-in;

  svg {
    width: 4rem;
  }

  > svg:first-child {
    fill: ${({ error }) => (error ? '#d24' : '#0f0')};
  }

  svg:last-child {
    cursor: pointer;
  }
`
