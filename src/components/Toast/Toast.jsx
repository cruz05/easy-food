import { MdClose, MdError, MdOutlineCheckCircleOutline } from 'react-icons/md'
import { ToastWrapper } from './Toast.styles'

export const Toast = ({ children, error = false, onClose }) => {
  return (
    <ToastWrapper error={error}>
      {error ? <MdError /> : <MdOutlineCheckCircleOutline />}
      {children} <MdClose onClick={onClose} />
    </ToastWrapper>
  )
}
