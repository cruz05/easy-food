import styled from 'styled-components'

const Field = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
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
