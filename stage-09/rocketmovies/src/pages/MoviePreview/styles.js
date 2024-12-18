import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    flex: 1;

    overflow-y: auto;
    padding: 4.2rem 12.3rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      svg{
        margin-left: 8px;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .title {
      display: flex;
      align-items: center;

      p{
        font-size: 3.6rem;
        font-weight: 500;
        margin-right: 19px;
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.6rem;
      margin: 2.5rem 0;
    }
    
    .infos,
    .tags {
      display: flex;
      align-items: center;
      margin: 1rem 0;
    }
    
    .infos p {
      margin: 0 1rem;
    }

    .tags{
      gap: 8px;
    }

    img{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
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
