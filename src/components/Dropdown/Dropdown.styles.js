import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  color: white;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    background-color: #3c486b;
    padding: 0.6rem 1rem;
    border-radius: 1.6rem;
    img {
      border-radius: 2rem;
      width: 2rem;
      max-height: 2.6rem;
    }

    svg {
      fill: white;
    }
  }

  .dropdown {
    overflow: hidden;
    padding-left: 0;
    list-style: none;
    border-radius: 0.5rem;
    background-color: #3c486b;
    width: 14rem;
    position: absolute;
    right: 0;
    top: 3rem;
    display: flex;
    flex-flow: column nowrap;
    z-index: 5;

    li {
      width: 100%;
      padding: 0.9rem 1.6rem;

      &:hover {
        background-color: #ccc9;
      }
      &:hover * {
        color: #f6f1e9;
      }
    }

    a {
      display: inline-block;
      width: 100%;
      color: #fff;
      padding: 0;
    }
  }
`
