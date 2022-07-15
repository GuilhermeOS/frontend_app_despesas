import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.textColor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100vh;
        text-rendering: optimizeLegibility;
    }
`;