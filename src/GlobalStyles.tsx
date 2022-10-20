import React from "react";
import { Global, css } from "@emotion/react";

/**
 * emotion 글로벌 스타일 적용법입니다.
 */
const GlobalStyles = () => {
  const styles = css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Noto Sans;
      scroll-behavior: smooth;
      background-color: #f5f5f5;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
