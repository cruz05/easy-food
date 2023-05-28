import { Wrapper } from './Form.styles'
import { Input } from './Input'

export function Form({ id, handleSubmit, children }) {
  return (
    <Wrapper id={id} onSubmit={handleSubmit}>
      {children}
      <Input
        label='Email'
        id='email'
        name='email'
        type='email'
        placeholder='example@email.com'
        required
      />
      <Input
        label='Password'
        id='password'
        name='password'
        type='password'
        placeholder='min 6 characters'
        autoComplete='on'
        required
      />
      <button type='submit' className='btn-submit'>
        Submit
      </button>
    </Wrapper>
  )
}
