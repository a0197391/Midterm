import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#070D24",
    colorTextBase: "#DB497E",
    colorTextFooter: "#ffffff",
    colorBgFooter: "#DB497E",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#8E71AC",
    colorTextBase: "#DB497E",

    colorBgFooter: "#DB497E",
    colorTextFooter: '#ffffff',
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    },
  },
};

export { lightTheme, darkTheme };
