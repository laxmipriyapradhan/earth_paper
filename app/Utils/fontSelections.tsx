import { Platform } from "react-native";

const Fonts = {
  ...Platform.select({
    ios: {
      DMSansBlack: "DMSans-Black",
      DMSansBlackItalic: "DMSans-BlackItalic",
      DMSansBold: "DMSans-Bold",
      DMSansBoldItalic: "DMSans-BoldItalic",
      DMSansExtraBold: "DMSans-ExtraBold",
      DMSansExtraBoldItalic: "DMSans-ExtraBoldItalic",
      DMSansExtraLight: "DMSans-ExtraLight",
      DMSansExtraLightItalic: "DMSans-ExtraLightItalic",
      DMSansItalic: "DMSans-Italic",
      DMSansLight: "DMSans-Light",
      DMSansLightItalic: "DMSans-LightItalic",
      DMSansMedium: "DMSans-Medium",
      DMSansMediumItalic: "DMSans-MediumItalic",
      DMSansRegular: "DMSans-Regular",
      DMSansSemiBold: "DMSans-SemiBold",
      DMSansSemiBoldItalic: "DMSans-SemiBoldItalic",
      DMSansThin: "DMSans-Thin",
      DMSansThinItalic: "DMSans-ThinItalic",
    },
    android: {
      DMSansBlack: "DMSansBlack",
      DMSansBlackItalic: "DMSansBlackItalic",
      DMSansBold: "DMSansBold",
      DMSansBoldItalic: "DMSansBoldItalic",
      DMSansExtraBold: "DMSansExtraBold",
      DMSansExtraBoldItalic: "DMSansExtraBoldItalic",
      DMSansExtraLight: "DMSansExtraLight",
      DMSansExtraLightItalic: "DMSansExtraLightItalic",
      DMSansItalic: "DMSansItalic",
      DMSansLight: "DMSansLight",
      DMSansLightItalic: "DMSansLightItalic",
      DMSansMedium: "DMSansMedium",
      DMSansMediumItalic: "DMSansMediumItalic",
      DMSansRegular: "DMSansRegular",
      DMSansSemiBold: "DMSansSemiBold",
      DMSansSemiBoldItalic: "DMSansSemiBoldItalic",
      DMSansThin: "DMSansThin",
      DMSansThinItalic: "DMSansThinItalic",
    },
  }),
};

export default Fonts;
