import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 52px;
  min-height: 52px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-style: solid;
  padding-top: 12px;
  padding-left: 12px;
  margin-bottom: 8px;
`
export const CheckImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  object-fit: contain;
  cursor: pointer;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;
  height: auto;

  @media (max-width: 830px) {
    width: 84%;
  }

  @media (max-width: 420) {
    width: 70%;
  }
`
export const ArrowIcon = styled.img`
  width: 12px;
  height: 16px;
  object-fit: contain;
  padding-top: 13px;
  cursor: pointer;
`
