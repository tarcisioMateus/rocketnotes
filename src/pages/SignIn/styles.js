import bgimg from '../../assets/background-image.png'

import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  display: flex;
`

export const Form = styled.form`
  width: 64rem;
  padding: 14rem;

  >p {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: 4.8rem;
  }

  >h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 4.8rem;
  }

  >div:nth-of-type(3) {
    margin-top: 0.8rem;
    margin-bottom: 2.4rem;
  }

  >button:last-of-type {
    margin-top: 12.4rem;
  }
`

export const Header = styled.div`
  color: ${({theme}) => theme.COLORS.ORANGE};
`

export const Img = styled.div`
  flex: 1;
  background: url(${bgimg}) no-repeat center center;
  background-size: cover;
`