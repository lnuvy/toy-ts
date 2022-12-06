import Theme from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      secondColor: string;
      personalDark: string;
      personalDefault: string;
      personalLight1: string;
      personalLight2: string;
      personalLight3: string;
      personalLight4: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      black: string;
      white: string;
    };
  }
}
