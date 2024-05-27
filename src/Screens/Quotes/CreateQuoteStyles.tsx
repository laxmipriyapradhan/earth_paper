import { StyleSheet } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../../Constraints/Generic';

const styles = StyleSheet.create({
    dropdownContainer: {
        width: windowWidth - 50,
        marginLeft: 25,
        marginTop: 20,
      },
    textConatiner: {
        marginRight: 280
      },
      textConatinermember:{
        marginTop: 20,
        marginLeft: 30
        
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
        marginLeft: 30,
        marginRight: 150

      },

      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 20,
      },
      dropdownHalf: {
        flex: 1,
        marginRight: 10, // Add some space between the two dropdowns
      },
      textInputView:{
        flex: 1,
        marginTop: 15,
        
      },
      textInputCalenderView:{
        marginTop:10
      },
      scrollView: {
        flex: 1,
      },
      fixedButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20, // Adjust as needed
        paddingBottom: 20, // Adjust as needed
        backgroundColor: 'white', // Adjust as needed
        zIndex: 1, // Make sure it appears above other content
      },

})
export default styles;