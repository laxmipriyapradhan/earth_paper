import { StyleSheet } from 'react-native';
import { COLORS, windowWidth } from '../Constraints/Generic';

const styles = StyleSheet.create({
  QuoteStatusContainer: {
    width: windowWidth - 34, // Fixed width
    height: 280, // Fixed height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 17,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 1,
    borderWidth: 1, 
    borderColor: COLORS.Tertiary, 
    paddingHorizontal: 10,
    shadowOffset: { width: 3, height: 3 },
    marginTop: 60, 
    position: 'relative',
  },
  headerContainer: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '105.5%',
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphHeaderPrimary,
    borderColor: "transparent",
    borderRadius: 8,
  },
  footerContainer: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    width: '105.5%',
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphFooterPrimary,
    borderColor: "transparent",
    borderRadius: 5,
  },
  textstyle: {
    marginLeft: 20,
    // color: COLORS.textColor,
    marginTop: 10,
    fontWeight: "bold",
  },
  QuotationCards: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
