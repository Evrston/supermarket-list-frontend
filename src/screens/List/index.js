import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Button, ListRender, Loader, Modal, Title, User } from 'components'
import { useNavigate } from 'react-router-dom'
import {
  ScreenContainer,
  ContentContainer,
  UserContainer,
  HeaderContainer,
  TitleContainer,
  LogoImage,
  HeaderButtonContainer,
  ListContainer
} from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const navigate = useNavigate()

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    console.log({ result })
    setListData(result)
    setLoading(false)
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setModalVisible(true)
    setSelectedItem(null)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })

    if (!result.error) {
      loadListItems()
    }
  }

  const onClickLeave = () => {
    navigate('/')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <UserContainer>
          <User />
          <Button
            onClick={onClickLeave}
            variant={'leave'}
            icon={'leave-icon'}
            wd={20}
          >
            {window.innerWidth <= 420 ? '' : 'Sair'}
          </Button>
        </UserContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage />
            <Title fontSize={32} ml={12} lineHeight={32}>
              Lista Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button variant={'main'} onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ScreenContainer>
  )
}
