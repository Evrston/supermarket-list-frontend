import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, SubTitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres.')
      return
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('./list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <SubTitle className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </SubTitle>
        <SubTitle mw={452} align="left" mb={24}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </SubTitle>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username:"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer className="home-screen-button-container">
          <Button variant={'main'} onClick={onClickContinue}>
            Continuar
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
