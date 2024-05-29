import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  Platform,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {AppColor, Size} from '.';
import Fonts from './fontSelections';

interface Styles {
  flex1: ViewStyle;
  primaryContainer: ViewStyle;
  homeContainer: ViewStyle;
  headerText: TextStyle;
  subHeaderText: TextStyle;
  textContent: TextStyle;
}

const {width, height} = Dimensions.get('screen');

const commonStyles = StyleSheet.create<Styles>({
  //new styles for project
  flex1: {
    flex: 1,
  },
  primaryContainer: {
    flex: 1,
  },
  homeContainer: {
    width: Size.width,
    height: Size.height,
  },
  headerText: {
    fontSize: 18,
    fontFamily: Fonts.DMSansBold,
  },
  textContent: {
    fontSize: 14,
    fontFamily: Fonts.DMSansMedium,
    color: AppColor.appBlack,
  },
  subHeaderText: {
    fontSize: 16,
    fontFamily: Fonts.DMSansMedium,
    color: AppColor.appGray,
  },
});

export default commonStyles;
