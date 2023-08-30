import { useEffect, useState } from 'react'
import { Input } from 'components/molecules'
import { createItem, updateItem, deleteItem } from 'services/request'
import { Title, Button } from 'components/atoms'
import {
  ModalBackground,
  ModalContentContainer,
  ModalHeader,
  ModalCloseButton,
  ButtonsContainer
} from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSaving = () => {
    if (name.length < 3) {
      alert('Nome deve ser maior que 3 caracteres.')
      return false
    }

    if (quantity < 1) {
      alert('Quantitade não pode ser menor que 1.')
      return false
    }

    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSaving()

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSaving()

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item._id)
    if (!result?.error) {
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackground>
      <ModalContentContainer>
        <ModalHeader>
          <Title>{item ? 'Editar Item' : 'Adicionar novo Item'}</Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome:"
          placeholder="Ex: Arroz"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade:"
          type="number"
        />
        <ButtonsContainer>
          <Button
            variant={'main'}
            onClick={item ? callUpdateItem : callAddItem}
          >
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
          {item && (
            <Button
              icon={'icon-trash'}
              variant={'delete'}
              onClick={callDeleteItem}
            >
              Deletar Item
            </Button>
          )}
        </ButtonsContainer>
      </ModalContentContainer>
    </ModalBackground>
  )
}
