import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;

  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  padding:5px 1.6rem;
  border-radius: 8px;
`
