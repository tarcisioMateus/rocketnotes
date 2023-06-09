import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  height: 10.6rem;
  width: 100%;

  border-bottom: 1px solid ${ ({theme}) => theme.COLORS.BACKGROUND_700};
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-left: 4.5rem;

  >img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    cursor: pointer;
  }

  >div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${ ({theme}) => theme .COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      line-height: 2.4rem;
      color: ${ ({theme}) => theme .COLORS.WHITE};
    }
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  margin-right: 4rem;

  >svg {
    font-size: 3.6rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_100};
  }
`