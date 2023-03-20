import styled from 'styled-components'

export const Container = styled.span`
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE};
  border: none;
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0.5rem 1.4rem;
  height: 2.4rem;
  margin-right: 0.6rem;

  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
`