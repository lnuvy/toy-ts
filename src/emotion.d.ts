import Theme from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      font1: string;
      font16: string;
      font14: string;
      font13: string;
      font12: string;
      font11: string;
      font10: string;
    };
    palette: {
      backgroundColor: string;
      background1: string;
      background2: string;
      background3: string;
      background4: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      awsColor: string;
      borderColor: string;
      stackBorder: string;
      linkColor: string;
      chapterHover: string;
      labelColor: string;
      hoverColor: string;
      color1: string;
      color2: string;
    };
  }
}
