import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 1.6rem 0;

  >h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${ ({theme}) => theme.COLORS.GRAY_100};

    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${ ({theme}) => theme.COLORS.BACKGROUND_700};
    margin-bottom: 1.6rem;
  }
`