import './index.css'

export const Button = ({ children, onClick, variant, icon }) => {
  let buttonType = ''
  if (variant === 'outline') {
    buttonType = 'outline'
  }
  if (variant === 'main') {
    buttonType = 'main'
  }
  if (variant === 'leave') {
    buttonType = 'leave'
  }

  return (
    <button onClick={onClick} className={`button-container ${buttonType}`}>
      {icon && (
        <img
          className="trash-icon"
          src={`./../images/${icon}.svg`}
          alt={`supermarket_icon${icon}`}
        />
      )}
      {children}
    </button>
  )
}
