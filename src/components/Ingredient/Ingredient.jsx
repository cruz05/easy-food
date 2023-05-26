import { useState } from 'react'
import {
  MdOutlineCheckCircleOutline,
  MdRadioButtonUnchecked,
} from 'react-icons/md'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  padding: 0.5rem 0;

  span {
    color: ${({ check }) => (check ? '#6b6b6bd1' : '#000')};
    text-decoration ${({ check }) => (check ? 'line-through' : 'none')};
  }

  svg {
    fill: ${({ check }) => (check ? '#32b000' : '#e7e7e7d4')};
  }
`

export const Ingredient = ({ name }) => {
  const [done, setDone] = useState(false)
  const handleClick = () => setDone(prev => !prev)

  return (
    <Item check={done} onClick={handleClick}>
      {done ? <MdOutlineCheckCircleOutline /> : <MdRadioButtonUnchecked />}
      <span>{name}</span>
    </Item>
  )
}
