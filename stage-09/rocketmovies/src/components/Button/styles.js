import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .oposite{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
