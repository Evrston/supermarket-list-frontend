import { CardContainer, CheckImage, TextContainer, ArrowIcon } from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        onClick={() => onCheckItem(item)}
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <TextContainer>
        <SmallText fontSize={16} mb={4} color={'p'}>
          {item.name}
        </SmallText>
        <SmallText fontSize={14}>
          {item.quantity > 1
            ? `${item.quantity} Unidades`
            : `${item.quantity} Unidade`}
        </SmallText>
      </TextContainer>
      <ArrowIcon onClick={() => onClick(item)} />
    </CardContainer>
  )
}
