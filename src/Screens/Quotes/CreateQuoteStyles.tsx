import { StyleSheet } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../../Constraints/Generic';

const Quotestyles = StyleSheet.create({
    dropdownContainer: {
        width: windowWidth - 50,
        marginLeft: 25,
        marginTop: 20,
      },
    textConatiner: {
        marginRight: 280
      },
      shareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 80
    
      },
      radioContainerView:{
        marginTop:10,
        marginLeft: 30

      }

})
export default Quotestyles;