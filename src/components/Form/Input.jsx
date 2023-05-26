import styled from 'styled-components'

const Field = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;

  input {
    border-radius: 0.4rem;
    font-size: 1.5rem;
    border: 1px solid #bbb;
    padding: 0.9rem 1rem;
    width: 100%;
    margin-block: 0.5rem;
  }
`

export function Input({ label, id, type, ...props }) {
  if (type === 'radio') {
    return (
      <>
        <input id={id} type={type} {...props} />
        <label htmlFor={id}>{label}</label>
      </>
    )
  }
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </Field>
  )
}
