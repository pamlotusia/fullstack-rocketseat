import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  > strong {
    font-size: 2.4rem;
    font-size: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div{
    display: flex;
    gap: 8px;
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 2.5rem;
    
  }


`
