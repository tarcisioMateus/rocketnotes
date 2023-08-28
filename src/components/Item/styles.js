import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  background-color: ${ ({theme, $isnew}) => $isnew ? 'transparent' : theme.COLORS.BACKGROUND_900 };
  border-radius: 1rem;
  border: ${ ({theme, $isnew}) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none' };;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  >input {
    width: 100%;
    height: 100%;
    padding: 2rem;

    background: transparent;
    border: none;

    color: ${ ({theme}) => theme.COLORS.WHITE };

    &::placeholder {
      color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    }
  }

  >button {
    background: transparent;
    border: none;
    margin: 1.6rem;

    >svg {
      font-size: 2.4rem;
      color: ${ ({theme, $isnew}) => $isnew ? theme.COLORS.ORANGE : theme.COLORS.RED };
    }
  }
`