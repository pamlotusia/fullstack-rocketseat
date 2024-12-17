import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, isNew }) =>
    isNew ? ' transparent ' : theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : 'none'};

  border-radius: 1rem;
  padding: 2rem 1.6rem;

  margin-right: 2rem;

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};

    svg{
      font-size: 2rem;
    }
  }

  >input{
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
  }
`
