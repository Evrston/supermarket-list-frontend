import './index.css'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        onClick={() => onCheckItem(item)}
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item.name}</span>
        <span className="list-card-subtitle">
          {item.quantity > 1
            ? `${item.quantity} Unidades`
            : `${item.quantity} Unidade`}
        </span>
      </div>
      <img
        onClick={() => onClick(item)}
        src="/images/arrow.svg"
        alt="arrow-icon"
        className="arrow-icon"
      />
    </div>
  )
}
