import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`
export const Form = styled.div`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;

  >h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  > p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }

  >h2{
    font-weight: 500;
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  a{
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin: 4.2rem 0;

    svg{
      margin-right: 8px;
    }
  }

`
export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
filter: brightness(50%);
`