import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  border: none;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };

  display: flex;
  align-items: center;

  input {
    background: none;
    border: none;
    padding: 2rem 1.6rem;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &::placeholder {
      color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    }
  }

  >svg {
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    font-size: 2rem;
    margin-left: 1.6rem;
  }

`