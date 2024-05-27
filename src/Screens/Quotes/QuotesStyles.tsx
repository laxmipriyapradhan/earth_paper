import { StyleSheet } from 'react-native';
import { windowWidth } from '../../Constraints/Generic';

const styles = StyleSheet.create({
  MainContainer: {
    marginLeft: '75%',
    bottom: 50,
    zIndex: 1,
    position: 'absolute',
  },
  QuotesContainer: {
    alignItems: 'center',
    paddingBottom: 20, // Add padding for spacing at the bottom
  },
});

export default styles;
