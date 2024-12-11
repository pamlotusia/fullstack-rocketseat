import styled from 'styled-components'

export const Container = styled.header`
  padding: 4.2rem 12.3rem;
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  >h1{
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  text-align: right;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%;
  }

  > div {
    padding-right: 9px;
    width: max-content
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`

export const Input = styled.div`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 1rem;

  > input {
    width: 100%;
    padding: 1.9rem 2.4rem;

    background-color: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
