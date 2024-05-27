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
    marginTop: 50, // Adjust margin for better spacing
    position: 'relative', // Position the header and footer relative to this container
  },
  headerContainer: {
    position: 'absolute', // Position the header absolutely within the container
    top: 0, // Align the header to the top of the container
    left: 0, // Align the header to the left of the container
    width: '105.5%', // Take full width of the container
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphHeaderPrimary,
    borderColor: "transparent",
    borderRadius: 8,
  },
  footerContainer: {
    position: 'absolute', // Position the footer absolutely within the container
    bottom: 0, // Align the footer to the bottom of the container
    left: 0, // Align the footer to the left of the container
    width: '105.5%', // Take full width of the container
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphFooterPrimary,
    borderColor: "transparent",
    borderRadius: 5,
  },
  textstyle: {
    marginLeft: 20,
    color: COLORS.secondary,
    marginTop: 10,
    fontWeight: "bold",
  },
  QuotationCards: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
