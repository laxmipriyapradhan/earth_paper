import { StyleSheet } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../../Constraints/Generic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.onPrimary,
  },
  blueSection: {
    backgroundColor: COLORS.onPrimary,
  },
  whiteSection: {
    flex: 1,
    backgroundColor: COLORS.AppColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  sectionChips: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.ChipsPrimary,
    borderWidth: 1,
    borderColor: COLORS.eyePrimary,

  },
  iconContainer: {
    elevation: 50,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 10,
  },
  icon: {
    backgroundColor: COLORS.ChipsPrimary,
    width: 50,
    height: 60,
    elevation: 50,
    paddingTop: 13,
    paddingHorizontal: 10
  },
  flatListContainer: {
    flexDirection: 'row',
  },
  chip: {
    marginRight: 10,
    backgroundColor: COLORS.AppColor,
    borderRadius: 50,
    width: 120,
    height: 40,
  },
  buttonGroupContainer: {
    height: 50,
    marginTop: 20,
  },
  buttonGroupText: {
    color: COLORS.textColor,
  },
  selectedButton: {
    backgroundColor: COLORS.onPrimary,
  },
  buttonGroupWrapper: {
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    marginTop: 40,
    marginHorizontal: 20
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButtonContainer: {
    backgroundColor: COLORS.onPrimary,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: COLORS.textColor,
  },
  selectedButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    marginTop: -1,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0000ff',
    overflow: 'hidden',
  },
  topSection: {
    backgroundColor: COLORS.quotePrimary,
    padding: 10,
  },
  topSectionText: {
    color: COLORS.onPrimary,
    textAlign: "center",
    fontSize: SIZES.h3,
    fontFamily: FONTSTYLES.fontfamily
  },
  cardSection: {
    padding: 10,
  },
  cardText: {
    color: '#333',
    fontWeight: 'bold',
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: "dashed",
    marginVertical: 10,
  },
  solidLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  btnConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  btnchild: {
    marginHorizontal: 170,
    bottom: 65,

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemKey: {
    fontWeight: 'bold',
  },
  itemValue: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#333',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200

  },
  ModalText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
    width: '100%',
    marginRight: 40,


  },
  keyboardAvoidingView: {
    flex: 1,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  textContainer: {
    marginLeft: 8,
    fontSize: SIZES.h2
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 80

  },
  btnModalConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto"

  },
  btnModalview: {
    marginLeft: -30
  },
  ContentContainerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ContentContainerView:
  {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  ContentChildView:
  {
    backgroundColor: 'black',
    padding: 15,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between", 
    width: "90%", 
    borderRadius: 7, 
    marginTop: "160%"
  }


});

export default styles;
