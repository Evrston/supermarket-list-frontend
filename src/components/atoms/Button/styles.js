import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ variant }) => (variant === 'leave' ? 10 : 100)}%;
  height: 42px;
  border-radius: 24px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  font-family: 'Avenir';
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme, variant }) =>
    variant === 'main' ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, variant }) =>
    variant === 'leave' ? theme.colors.primary : theme.colors.white};

  @media (max-width: 420px) {
    max-width: 300px;
  }
`

export const TrashIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 12px;
`
