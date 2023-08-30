import { styled } from 'styled-components'

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: auto;
  height: 52px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-style: solid;
  margin-right: 12px;
`
export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  padding: 7px;
`
