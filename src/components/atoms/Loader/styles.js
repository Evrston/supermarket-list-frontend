import styled from 'styled-components'

export const Loader = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow:
    32px 0 ${({ theme }) => theme.colors.primary},
    -32px 0 ${({ theme }) => theme.colors.primary};
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;

  @keyframes flash {
    0% {
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow:
        32px 0 ${({ theme }) => theme.colors.secondary},
        -32px 0 ${({ theme }) => theme.colors.primary};
    }
    50% {
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow:
        32px 0 ${({ theme }) => theme.colors.secondary},
        -32px 0 ${({ theme }) => theme.colors.secondary};
    }
    100% {
      background-color: #7784db75;
      box-shadow:
        32px 0 ${({ theme }) => theme.colors.primary},
        -32px 0 ${({ theme }) => theme.colors.secondary};
    }
  }
`
