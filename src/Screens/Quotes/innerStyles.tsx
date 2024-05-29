import {StyleSheet, ViewStyle} from 'react-native';
import { COLORS } from '../../Constraints/Generic';
// import {AppC, Size} from '../../Utils';

interface Styles {
  container: ViewStyle;
  counterContainer: ViewStyle;
  secondaryContainer: ViewStyle;
  primaryBt: ViewStyle;
}

export const innerStyles = StyleSheet.create<Styles>({
  container: {
    width: '88%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryContainer: {
    // width: '90%',
    // alignSelf: 'center',
  },
  primaryBt: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: "White",
    borderRadius: 4,
    borderWidth: 1,
    borderColor:COLORS.borderColor,
    marginBottom: 15,
  },
});
