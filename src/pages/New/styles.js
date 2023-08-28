import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: 10.6rem auto;
  height: 100vh;

  >main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  width: 55rem;
  margin: 0 auto;

  >header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.6rem 0;

    >h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
  }
`

export const Form = styled.form`
  >div:nth-child(2) {
    margin: 1.6rem 0;
  }

  #links {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  #tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    >div {
      width: 27rem;
    }
  }

  >button:last-of-type {
    margin-top: 1.6rem;
    margin-bottom: 6.4rem;
  }
`