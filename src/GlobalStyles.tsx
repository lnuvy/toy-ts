import { Global, css } from "@emotion/react";

/**
 * emotion 글로벌 스타일 적용법입니다
 * 추가하실 글로벌 css는 여기서 추가하시면 됩니다
 */
const GlobalStyles = () => {
  const styles = css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Noto Sans;
      scroll-behavior: smooth;
      background-color: #fff;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    // 10/31 플렉스 속성 추가했습니당
    .flex-row {
      display: flex;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
    }

    // 11/29 font추가
    @font-face {
      font-family: "LINESeedKR-Bd";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2") format("woff2");
      font-weight: 700;
      font-style: normal;
    }
  `;

  return <Global styles={styles} />;
};

export default GlobalStyles;
