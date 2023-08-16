import './index.css'
import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Button, ListRender, Loader, Modal, User, Title } from 'components'
import { useNavigate } from 'react-router-dom'

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
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-user-container">
          <User />
          <Button onClick={onClickLeave} variant={'leave'} icon={'leave-icon'}>
            Sair
          </Button>
        </div>
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="logo-image"
              src="/images/logo.svg"
              alt="supermarket-list-logo"
            />
            <Title fontSize={32} ml={12} lineHeight={32}>
              Lista Supermercado
            </Title>
          </div>
          <div className="list-screen-header-button-container">
            <Button variant={'main'} onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </div>
  )
}
