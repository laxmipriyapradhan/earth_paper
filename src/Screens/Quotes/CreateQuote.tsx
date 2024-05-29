import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CommonLayout from '../../Common/CommonLayout';
import ArrowSvg from '../../assets/SVG/ArrowSvg';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../Quote/config';
import CustomDropdown from '../../Common/CustomDropdown';
import CustomRadio from '../../Common/CustomRadio';
import styles from './CreateQuoteStyles';
import CustomTextInput from '../../Common/CustomTextInput';
import { Checkbox } from 'react-native-paper';
import CustomButton from '../../Common/CustomButton';
import CustomDatePicker from '../../Common/CustomDatePicker';
import { DateRangeProps } from './confix';
import ButtonText from '../../Common/ButtonText';
import { innerStyles } from '../Quotes/innerStyles';
import moment from 'moment';
import { COLORS } from '../../Constraints/Generic';

interface CreateQuoteProps { }

const CreateQuote: React.FC<CreateQuoteProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };

  interface CheckedStates {
    whatsapp: boolean;
    email: boolean;
    sms: boolean;
  }

  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showSumInsuredDropdown, setShowSumInsuredDropdown] = useState(false);
  const [showNoOfAdultsDropdown, setShowNoOfAdultsDropdown] = useState(false);
  const [showNoOfChildrenDropdown, setShowNoOfChildrenDropdown] = useState(false);
  const [showMemberDropdown, setShowMemberDropdown] = useState(false);
  const [showDeductiblesDropdown, setShowDeductiblesDropdown] = useState(false);

  const [dobOfEldest, setDobOfEldest] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [dropdownValues, setDropdownValues] = useState({
    projectStatus: '',
    SumInsuredStatus: '',
    NoOfAdultsStatus: '',
    NoOfChildrenStatus: '',
    NoOfSumInsuredMember: '',
    NoOfDeductibles: '',
  });
  const [checkedStates, setCheckedStates] = useState<CheckedStates>({
    whatsapp: false,
    email: false,
    sms: false,
  });

  const handleCheckboxPress = (name: keyof CheckedStates) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleDropdownChange = (dropdownName: string, value: string) => {
    setDropdownValues((prevState) => ({
      ...prevState,
      [dropdownName]: value,
    }));
  };

  const handlePress = () => {
    navigation.navigate('GetQuote');
  };

  const Product = [
    { label: 'Select', value: '' },
    { label: 'Health Family Plan', value: 'Health Family Plan' },
  ];
  const SumInsured = [
    { label: 'Select', value: '' },
    { label: '15L', value: '15L' },
  ];
  const NoOfAdults = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const NoOfChildren = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const NoOfSumInsuredMember = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const NoOfDeductible = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const radioOptionsCoverType = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Floater', label: 'Floater' },
  ];
  const radioOptionsPlanType = [
    { value: 'Gold', label: 'Gold' },
    { value: 'Platinum', label: 'Platinum' },
  ];

  const DatePickerWidget = ({
    value,
    isDateVisible,
    datePickFun,
    selectedDateFun,
    label,
  }: DateRangeProps) => {
    return (
      <>
        <ButtonText
          btnStyle={innerStyles.primaryBt}
          btnTexStyle={{
            color: value === '' ? '#8B8B8D' : '#000000',
          }}
          labelText={value?.length === 0 ? '' : label}
          btnName={value?.length === 0 ? label : value}
          onSubmit={() => datePickFun(!isDateVisible)}
          rightIcon={true}
          iconName="date-range"
        />
        <CustomDatePicker
          modal={true}
          mode={'date'}
          open={isDateVisible}
          date={new Date()}
          onCancel={() => datePickFun(!isDateVisible)}
          onConfirm={e => {
            selectedDateFun(moment(e).format('DD/MM/YYYY'));
            datePickFun(!isDateVisible);
          }}
        />
      </>
    );
  };

  const renderMemberDetails = () => {
    const adultsCount = parseInt(dropdownValues.NoOfAdultsStatus) || 0;
    const childrenCount = parseInt(dropdownValues.NoOfChildrenStatus) || 0;
    const totalMembers = adultsCount + childrenCount;

    return Array.from({ length: totalMembers }, (_, index) => (
      <View key={index} style={styles.textInputView}>
        <Text style={styles.textConatinermember}>Member details {index + 1}</Text>

        <View style={[innerStyles.container, innerStyles.counterContainer]}>
          <DatePickerWidget
            value={dobOfEldest}
            isDateVisible={showDatePicker}
            selectedDateFun={e => {
              setShowDatePicker(false);
              setDobOfEldest(e);
            }}
            datePickFun={e => setShowDatePicker(e)}
            label={`DOB of member ${index + 1}`}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.dropdownHalf}>
            <CustomDropdown
              label={`Sum insured of member ${index + 1}`}
              value={dropdownValues.NoOfSumInsuredMember}
              setValue={(value) => handleDropdownChange('NoOfSumInsuredMember', value)}
              list={NoOfSumInsuredMember}
              showDropDown={showMemberDropdown}
              setShowDropDown={setShowMemberDropdown}
            />
          </View>
          <View style={styles.dropdownHalf}>
            <CustomDropdown
              label={`Deductibles of member ${index + 1}`}
              value={dropdownValues.NoOfDeductibles}
              setValue={(value) => handleDropdownChange('NoOfDeductibles', value)}
              list={NoOfDeductible}
              showDropDown={showDeductiblesDropdown}
              setShowDropDown={setShowDeductiblesDropdown}
            />
          </View>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: COLORS.secondary, marginLeft: 25 }}>ADD ON FEATURES</Text>
        <View style={styles.shareContainer}>
          <View style={styles.row}>
            <Checkbox
              status={checkedStates.whatsapp ? 'checked' : 'unchecked'}
              onPress={() => handleCheckboxPress('whatsapp')}
            />
            <Text style={styles.textContainer}>Hospital Cash</Text>
          </View>
          <View style={styles.row}>
            <Checkbox
              status={checkedStates.email ? 'checked' : 'unchecked'}
              onPress={() => handleCheckboxPress('email')}
            />
            <Text style={styles.textContainer}>PA Cover</Text>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <CommonLayout blueSectionText="Create Quote" ArrowSVG={ArrowSvg} goBack={goBack}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.dropdownContainer}>
          <CustomDropdown
            label="Product"
            value={dropdownValues.projectStatus}
            setValue={(value) => {
              handleDropdownChange('projectStatus', value);
              setShowSumInsuredDropdown(value !== '');
              setShowNoOfAdultsDropdown(value !== '');
              setShowNoOfChildrenDropdown(value !== '');
              setShowMemberDropdown(value !== '');
              setShowDeductiblesDropdown(value !== '');
            }}
            list={Product}
            showDropDown={showProjectDropdown}
            setShowDropDown={setShowProjectDropdown}
          />
        </View>
        {dropdownValues.projectStatus && (
          <>
            <View style={styles.radioContainerView}>
              <CustomRadio
                initialCheckedRadio="first"
                onRadioChange={(value) => console.log('Selected radio:', value)}
                text="Cover Type"
                options={radioOptionsCoverType}
              />
            </View>
            <View style={styles.radioContainerView}>
              <CustomRadio
                initialCheckedRadio="first"
                onRadioChange={(value) => console.log('Selected radio:', value)}
                text="Plan Type"
                options={radioOptionsPlanType}
              />
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.dropdownHalf}>
                <CustomDropdown
                  label="Sum Insured"
                  value={dropdownValues.SumInsuredStatus}
                  setValue={(value) => handleDropdownChange('SumInsuredStatus', value)}
                  list={SumInsured}
                  showDropDown={showSumInsuredDropdown}
                  setShowDropDown={setShowSumInsuredDropdown}
                />
              </View>
              <View style={styles.dropdownHalf}>
                <CustomDropdown
                  label="No.of Adults"
                  value={dropdownValues.NoOfAdultsStatus}
                  setValue={(value) => handleDropdownChange('NoOfAdultsStatus', value)}
                  list={NoOfAdults}
                  showDropDown={showNoOfAdultsDropdown}
                  setShowDropDown={setShowNoOfAdultsDropdown}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.dropdownHalf}>
                <CustomDropdown
                  label="No.of Children"
                  value={dropdownValues.NoOfChildrenStatus}
                  setValue={(value) => handleDropdownChange('NoOfChildrenStatus', value)}
                  list={NoOfChildren}
                  showDropDown={showNoOfChildrenDropdown}
                  setShowDropDown={setShowNoOfChildrenDropdown}
                />
              </View>
            </View>
            <CustomTextInput label="Pincode" />

            {renderMemberDetails()}
            <TouchableOpacity onPress={handlePress}>
              <CustomButton widthDecrement={50} text={"Get Quote"} />
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </CommonLayout>
  );
};

export default CreateQuote;
