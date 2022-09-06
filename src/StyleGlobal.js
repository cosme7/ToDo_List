import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  :root{
    --ff-primary: 'Fira Sans', sans-serif;
    --ff-list: 'Overpass', sans-serif;
  }

  body{
    height: 100%;
    padding: 5rem .5rem;
    background: linear-gradient(90deg, #000000ff, #363946ff, #696773ff, #819595ff, #b1b6a6ff);
  }
`;