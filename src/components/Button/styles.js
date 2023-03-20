import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background-color: ${ ({theme}) => theme.COLORS.ORANGE};
  border: none;
  border-radius: 1rem;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-align: center;
  color: ${ ({theme}) => theme.COLORS.BACKGROUND_800};
`