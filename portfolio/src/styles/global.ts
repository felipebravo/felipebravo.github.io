import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --bg-primary-color: #282A36;
    --bg-dark-color: #21222C;
    --primary-grey: #4f5058;
    --grey-1: #343746;
    --grey-2: #535e84;
    --primary-red: #FF0000;
    --white-color: #FFFFFF;
    
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  body {
    background-color: var(--bg-primary-color);
  }

  button {
    cursor: pointer;
    border: none;
  }

  #root{
    position: relative;

    width: 100vw;
    height: 100vh;
  }

  .main{
    position: absolute;

    width: 100vw;
    height: 92%;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
