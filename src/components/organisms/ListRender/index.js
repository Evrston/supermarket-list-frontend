import { SubTitle } from 'components/atoms'
import { ListCard } from 'components/molecules'
import { RenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <SubTitle>
        Sua lista está vazia, adicione um novo item clicando em "Adicionar".
      </SubTitle>
    )
  }

  return (
    <RenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </RenderContainer>
  )
}
