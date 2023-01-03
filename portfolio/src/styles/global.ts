import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --bg-primary-color: #282A36;
    --bg-primary-color-op: #21222C99;
    --bg-dark-color: #21222C;
    --primary-grey: #4f5058;
    --grey-1: #343746;
    --grey-2: #535e84;
    --grey-3: #1d2226;
    --primary-red: #FF0000;
    --red-1: #FF79C6;
    --primary-blue: #75e9fd;
    --primary-green: #33Da7B;
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

  h1, h2, h3, h4, h5, h6, p, span {
    font-family: monospace, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
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

  .container {
    display: inline-block;
    width: fit-content;
  }

  .typewriter {
    overflow: hidden;
    border-right: 0.08em solid white;
    white-space: nowrap;
    width: 0;
    animation: typing 5s steps(60, end) forwards, blink 1s infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: white;
    }
  }
`;
