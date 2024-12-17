import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  border: none;
  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 500;

  &.light{
    background-color: ${({ theme}) => theme.COLORS.PINK};
    color: ${({ theme}) => theme.COLORS.BACKGROUND_900}
  }

  
  &.dark{
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme}) => theme.COLORS.PINK};
  }
`
