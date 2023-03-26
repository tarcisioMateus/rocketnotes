import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: block;
  width: 100%;
  height: 11.2rem;
  border-radius: 1rem;
  border: none;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700};
  padding: 1.6rem 2.2rem;
  margin: 1.6rem 0;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    text-align: left;
    margin-bottom: 2.4rem;
    color: ${ ({theme}) => theme.COLORS.WHITE };
  }

  #tags {
    display: flex;
    align-items: flex-start;
  }
`