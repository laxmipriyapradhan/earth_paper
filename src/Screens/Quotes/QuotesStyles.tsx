// QuotesStyles.tsx
import { StyleSheet } from 'react-native';
import { COLORS, windowWidth } from '../../Constraints/Generic';

const styles = StyleSheet.create({
  MainContainer: {
   marginLeft:"75%",
   bottom:50,
   zIndex:1,
   position: "absolute"

  },
  quotationcard:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 17,
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 1,
    borderWidth: 1, 
    borderColor: COLORS.Tertiary, 
    paddingHorizontal: 10,
    shadowOffset: { width: 3, height: 3 },
    marginTop: 70, 
  }
});

export default styles;
