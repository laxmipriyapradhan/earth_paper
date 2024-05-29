import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
const spacing = 8;
const Size = {
  spacing,
  height,
  width,
  borderRadius: 8,
};

const IconType = {
  MaterialCommunity: 'material-community',
  Material: 'material',
  FontAwesome: 'font-awesome',
  Octicon: 'octicon',
  Ionicon: 'ionicon',
  Foundation: 'foundation',
  Evilicon: 'evilicon',
  SimpleLineIcon: 'simple-line-icon',
  Zocial: 'zocial',
  Entypo: 'entypo',
  Feather: 'feather',
  Antdesign: 'antdesign',
};
export {Size, IconType};
