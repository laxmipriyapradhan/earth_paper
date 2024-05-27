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
  },
  headerContainer: {
    width: '105%',
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphHeaderPrimary,
    borderColor: "transparent",
    borderRadius: 8,
    marginBottom: 428,
    // Use a fixed margin instead of a percentage
  },
  footerContainer: {
    width: '105%',
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphFooterPrimary,
    borderColor: "transparent",
    borderRadius: 5,
    marginVertical: 109 // Use a fixed margin instead of a percentage
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
