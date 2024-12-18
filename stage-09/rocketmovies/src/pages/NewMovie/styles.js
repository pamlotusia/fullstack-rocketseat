import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    flex: 1;

    overflow-y: auto;
    padding: 4.2rem 12.3rem;

    > * {
      margin-bottom: 4rem;
    }

    > header {
      a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      p {
        font-size: 3.6rem;
        font-weight: 500;

        margin-top: 2.4rem;
      }
    }

    > div {
      display: flex;
      gap: 4rem;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 4px;
    }

  }
`

export const Section = styled.section`
  width: 100%;

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;

    padding: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 8px;
  }
`

export const Form = styled.form`
  > div {
    margin: 4rem 0;

    display: flex;
    gap: 4rem;
  }

  > textarea {
    resize: none;
    
    width: 100%;
    height: 27rem;

    padding: 1.9rem 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;
  }
`
