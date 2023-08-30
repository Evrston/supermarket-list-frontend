import styled from 'styled-components'

export const Title = styled.h1`
  max-width: ${({ mw }) => mw || 320}px;
  font-weight: bold;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${({ ml }) => ml || 0}px;
  margin-right: ${({ mr }) => mr || 0}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`
export const SubTitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
export const SmallText = styled.span`
  font-size: ${({ fontSize }) => fontSize || 16}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  color: ${({ theme, color }) =>
    color === 'p' ? theme.colors.primary : theme.colors.black};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`
