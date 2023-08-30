import { styled } from 'styled-components'

export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 72vh;
  padding: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 32px;

  @media (max-width: 420px) {
    width: 100%;
  }
`
