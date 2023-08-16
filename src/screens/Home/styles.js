import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 830px) {
    overflow-y: hidden;
    overflow-x: hidden;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 720px;
  border-radius: 24px;
  background: #fff;

  @media (max-width: 420px) {
    max-width: 320px;
    max-height: 600px;
    padding: 12px;
  }
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'Shopping-Bag'
})`
  width: 220px;
  height: auto;

  @media (max-width: 420px) {
    width: 180px;
  }
`

export const Title = styled.h1`
  max-width: 320px;
  text-align: center;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`

export const SubTitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 452px;
  margin-top: 24px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 24px;
  }
`
