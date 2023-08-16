import { ButtonContainer, TrashIcon } from './styles'

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {icon && (
        <TrashIcon
          src={`./../images/${icon}.svg`}
          alt={`supermarket_icon${icon}`}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
