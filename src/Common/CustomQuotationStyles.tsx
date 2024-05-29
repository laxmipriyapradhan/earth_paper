import { StyleSheet } from 'react-native';
import { COLORS, SIZES, windowWidth } from '../Constraints/Generic';

const styles = StyleSheet.create({
    QuoteStatusContainer: {
        width: windowWidth - 34, // Fixed width
        height: 260, // Fixed height
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
        marginTop: 10, // Adjust margin for better spacing
        position: 'relative', // Position the header and footer relative to this container
    },
    headerContainer: {
        flexDirection: "row",
        position: 'absolute', // Position the header absolutely within the container
        top: 0, // Align the header to the top of the container
        left: 0, // Align the header to the left of the container
        width: '105.5%', // Take full width of the container
        borderWidth: 1,
        height: 70,
        backgroundColor: COLORS.graphHeaderPrimary,
        borderColor: "transparent",
        borderRadius: 8,
    },
    userprofileContainer: {
        marginTop: 10,
        flexDirection: "row"
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
        marginLeft: 15,
        color: COLORS.textColor,
        marginTop: 5,
        fontWeight: "bold",
    },
    QuotationCards: {
        width: '100%',
        height: '100%',
    },
    statuschip: {
        borderWidth: 1,
        borderColor: COLORS.statuschipPrimary,
        width: 85,
        height: 30,
        backgroundColor: COLORS.statuschipBg

    },
    statusText: {
        color: COLORS.statusPrimary,
        fontWeight: "bold",
        marginLeft: 10
    },
    quotationLabel: {
        color: COLORS.secondary,
        fontWeight: "bold",
        marginRight: 10,
     

    },
    quotationtext: {
        color: COLORS.primary,
        fontWeight: "bold",
        marginRight: 180,
        
      
    },
    quotationConatiner: {
        flexDirection: 'row',
        marginTop:85
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.underLinePrimary,
        width: '100%',
        position: 'absolute',
        
        
    },
    dataContainer: {
        flexDirection: 'row',
        marginTop: 35,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.underLinePrimary,
    },
    dataCell: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: COLORS.underLinePrimary,
    },
    dataKey: {
        fontSize:SIZES.h7,
        color: COLORS.secondary,
    },
    dataValue: {
        fontWeight: 'bold',
        fontSize:SIZES.h7,
        color: COLORS.secondary,
    },
    svgContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: COLORS.AppColor,
        width: "85%",
        height:50,
        top:10,
        margin: 10,
       
    }

});
export default styles;
