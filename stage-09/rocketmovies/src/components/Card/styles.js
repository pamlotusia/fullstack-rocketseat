import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    display: flex;
    gap: 8px;
    margin: 8px 0;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 2.5rem;
  }
`
