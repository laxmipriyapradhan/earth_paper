import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
// import {AppColor} from '../Utils';
import {tabLabels} from './config';
import { COLORS } from '../../Constraints/Generic';

interface Styles {
  tabBarStyle: ViewStyle;
  tabText: TextStyle;
  iconContainer: ViewStyle;
}

const innerStyles = (props?: tabLabels) =>
  StyleSheet.create<Styles>({
    tabBarStyle: {
      height: 80,
      backgroundColor: COLORS.onPrimary,
      borderRadius: 16,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 15,
    },
    tabText: {
      fontFamily: 'SourceSans3-SemiBold',
      textAlignVertical: 'center',
      color: '#FFFFFF',
      paddingBottom: 10,
      fontWeight: props?.focused ? 'bold' : '500',
    },
    iconContainer: {
      height: 38,
      justifyContent: 'center',
      borderRadius: 11,
      paddingHorizontal: 16,
      backgroundColor: props?.focused ? "#2359F3" : 'transparent',
      marginTop: 8,
    },
  });

export default innerStyles;
