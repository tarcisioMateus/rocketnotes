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
  background-color: red;
` 

export const Menu = styled.ul`
  grid-area: menu;
  background-color: blue;
` 

export const Search = styled.div`
  grid-area: search;
  background-color: violet;
` 

export const Content = styled.div`
  grid-area: content;
  background-color: yellow;
` 

export const New = styled.button`
  grid-area: new;
  background-color: green;
` 


