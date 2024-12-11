import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
`
export const Section = styled.section`
  padding: 4.2rem 12.3rem;

  width: 100%;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 3.2rem;

    margin-bottom: 4rem;

    button {
      height: 4.8rem;
      padding: 0 3.2rem;

      border: none;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      font-size: 1.6rem;
    }
  }

  > .cards {
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`
