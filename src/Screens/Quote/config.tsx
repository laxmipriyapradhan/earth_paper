// import {AppColor} from '../Utils';
import innerStyles from './styles'

type TabInteface = {
  focused: boolean;
  color: string;
  size: number;
};

type tabbarLabelInterface = {
  focused: boolean;
};

type tabProps = {
  activeColor: string;
  InActiveColor: string;
};

export interface tabLabels {
  focused?: boolean;
  activeColor?: string;
  InActiveColor?: string;
}

export const tabConfig = {
  tabBarStyle: innerStyles().tabBarStyle,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: 'white',
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: true,
};
// types of the stack navigation//
export type RootStackParamList = {
  Slider: undefined;
  Login: undefined;
  Passwordvalidation: undefined;
  ForgotPassword: undefined;
  Passwordvalidationemail: undefined;
  OtpValidation: undefined;
  Reset: undefined;
  OtpValidationemail: undefined;
  Resetemail: undefined;
  Quotes: undefined;
  GetQuote: undefined;
  Home: undefined;
  CreateQuote:undefined;
  
};


export type {TabInteface, tabbarLabelInterface, tabProps};
