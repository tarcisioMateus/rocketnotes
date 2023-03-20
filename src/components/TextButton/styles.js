import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;

  color: ${ ({ theme }) => theme.COLORS.ORANGE};
  line-height: 2.1rem;
  text-align: center;
`