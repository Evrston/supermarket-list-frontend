import { styled } from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 26vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 830px) {
    width: 60vw;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin-bottom: 24px;
`
export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url('images/icon-close.svg');
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0px;
  cursor: pointer;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 14vh;
  margin-top: 100%;

  @media (max-width: 830px) {
    height: 12vh;
    margin-top: 42vh;
  }

  @media (max-width: 420px) {
    height: 18vh;
    margin-top: 42vh;
  }
`
