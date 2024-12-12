import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 12.3rem;

    height: 10rem;
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

  > button {
    width: 100%;
    height: 4.8rem;

    border: none;
    border-radius: 8px;

    font-size: 1.6rem;
    font-weight: 500;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`
export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 18rem;
    height: 18rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    input {
      display: none;
    }
  }
`
