import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200;6..72,300;6..72,400;6..72,500;6..72,600&family=Roboto:wght@100;300;400;500;700;900&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200;6..72,300;6..72,400;6..72,500;6..72,600&family=Roboto:wght@100;300;400;500;700;900&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: Newsreader, Arial;
        box-sizing: border-box;
    }

    html {
        width: auto;
    }

    body {
        max-width: 100vw;
        height: 100%;
        background-color: #e6e6e6;
    }

`;
