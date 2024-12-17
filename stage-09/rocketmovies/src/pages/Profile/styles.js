import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 12.3rem;

    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    text-align: left;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: ${({ theme }) => theme.COLORS.WHITE};

  div:nth-child(3),
  div:nth-child(5){
    margin-bottom: 2rem;
  }
`
export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: -8rem;

  > img {
    width: 18rem;
    height: 18rem;

    border-radius: 50%;
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    right: 9rem;

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    svg{
      font-size: 2rem;
    }

    input {
      display: none;
    }
  }

  > label:hover{
    filter: brightness(0.9);
    cursor: pointer;
  }
`
