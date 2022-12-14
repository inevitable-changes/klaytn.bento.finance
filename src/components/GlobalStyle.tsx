import dedent from 'dedent';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Colors } from '@/styles/colors';

export const systemFontStack = dedent`
  'Pretendard Variable', ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
  Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    word-break: keep-all;
    font-family: ${systemFontStack} !important;
  }

  html,
  body {
    background-color: ${Colors.gray900};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  input, button {
    outline: 0;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    color: rgba(255, 255, 255, 0.65);
    background-color: rgba(152, 24, 35, 0.65);
  }
`;
