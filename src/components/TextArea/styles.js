import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
  border-radius: 1rem;

  >textarea {
    width: 100%;
    height: 100%;

    border: none;
    background: none;
    resize: none;

    padding: 2rem;
    color: ${ ({theme}) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${ ({theme}) => theme.COLORS.GRAY_300};
    }
  }
`