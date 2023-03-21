import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;

  color: ${ ({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  line-height: 2.1rem;
  text-align: center;
`