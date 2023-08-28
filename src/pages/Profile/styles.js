import styled from 'styled-components'

export const Container = styled.div`
  >header {
    height: 14.4rem;
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };
    padding-left: 14.4rem;

    display: flex;
    align-items: center;

    >button {
      background: none;
      border: none;
      
      >svg {
        font-size: 2rem;
        color: ${ ({theme}) => theme.COLORS.WHITE };
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: -9.3rem;
  width: 34.8rem;

  >div {
    margin-bottom: 0.8rem;
  }

  >div:first-of-type {
    margin-bottom: 6.4rem;
  }

  >div:nth-of-type(3) {
    margin-bottom: 2.4rem;
  }

  >button:last-of-type {
    margin-top: 1.6rem;
    margin-bottom: 20rem;
  }
`

export const Picture = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  position: relative;

  >img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  >label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${ ({theme}) => theme.COLORS.ORANGE };

    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    >svg {
      width: 2rem;
      height: 2rem;

      color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
    }
  }

`