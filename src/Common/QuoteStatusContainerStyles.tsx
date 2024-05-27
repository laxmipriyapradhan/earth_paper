// QuoteStatusContainerStyles.tsx
import { StyleSheet } from 'react-native';
import { COLORS, windowWidth } from '../Constraints/Generic';

const styles = StyleSheet.create({
  QuoateStatusContainer: {
    flex: 0.5,
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
    marginTop: 70,
    
    
  },
  headerContainer: {
    width: windowWidth - 37,
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphHeaderPrimary,
    borderColor: "transparent",
    borderRadius: 8,
    marginBottom: "44%",
  },
  footerContainer: {
    width: windowWidth - 38,
    borderWidth: 1,
    height: 43,
    backgroundColor: COLORS.graphFooterPrimary,
    borderColor: "transparent",
    borderRadius: 5,
  },
  textstyle: {
    marginLeft: 20,
    color: COLORS.secondary,
    marginTop:10,
    fontWeight:"bold"
  },
  QuotationCards: {},
});

export default styles;
