import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60vw;
  height: 90vh;
  border-radius: 24px;
  background: #fff;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 74vw;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 60vw;
  height: 20vh;
  padding-bottom: 16px;

  @media (max-width: 420px) {
    wwidth: 74vw;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 420px) {
    padding: 0px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LogoImage = styled.img.attrs({
  src: '/images/logo.svg',
  alt: 'supermarket-list-logo'
})`
  width: 72px;
  height: 72px;

  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
  }
`

export const HeaderButtonContainer = styled.div`
  width: 160px;
  height: 42px;

  @media (max-width: 420px) {
    width: 42px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
