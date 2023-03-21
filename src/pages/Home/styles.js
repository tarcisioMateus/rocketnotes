import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.6rem 12rem auto 8rem;
  grid-template-areas: 
  "brand header" 
  "menu search"
  "menu content"
  "new content";
` 

export const Brand = styled.div`
  grid-area: brand;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${ ({theme}) => theme.COLORS.BACKGROUND_700};

  color: ${ ({theme}) => theme.COLORS.ORANGE};
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
` 

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
  padding: 6.4rem;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;
` 

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem;
  padding-bottom: 0;
` 

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: 6.4rem;
` 

export const New = styled.button`
  grid-area: new;
  background-color: ${ ({theme}) => theme.COLORS.ORANGE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};

  >p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  
  >svg {
    font-size: 2.4rem;
  }
` 


