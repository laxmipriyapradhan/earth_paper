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
        marginLeft: 30,
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: SIZES.h3
        
      },
      shareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       marginTop:10,
        marginLeft:20
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
        marginHorizontal: 22,
        marginTop: 20,
      },
      dropdownHalf: {
        flex: 1,
        justifyContent: "space-between",
        margin:2,
        bottom:20 
      },
      textInputView:{
        flex: 1,
        
        top:10,
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor:"#F6F6F6",
        
        
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
   
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 60,
        margin: 10
      },
      textContainer: {
        marginLeft: 8,
        fontSize: SIZES.h2
      },
      rowCheckContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
      },
      AddonContainer:{
        fontWeight: "bold", 
        fontSize: 14, 
        color: COLORS.secondary,
        marginLeft: 25 

      },
      getQuoteContainer:{
        bottom: 10

      }
      

})
export default styles;