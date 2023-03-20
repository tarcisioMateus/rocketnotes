import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: 10.6rem auto;

  >main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
`

export const Content = styled.div`
  width: 55rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  >button:first-child {
    align-self: end;
    margin-bottom: 6.4rem;
  }

  >h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-bottom: 1.6rem;
  }

  >p {
    line-height: 1.9rem;
    text-align: justify;
    margin-bottom: 3.8rem;
  }

  #tags {
    display: flex;
    flex-wrap: wrap;
  }

  >button:last-child {
    margin-top: 11rem;
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.2rem;

  li {
    a {
      line-height: 1.9rem;
      color: ${ ({theme}) => theme.COLORS.WHITE}
    }
  }
`