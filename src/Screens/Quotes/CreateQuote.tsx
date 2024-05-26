import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CommonLayout from '../../Common/CommonLayout';
import ArrowSvg from '../../assets/SVG/ArrowSvg';
import { useNavigation } from '@react-navigation/native';
import { windowWidth } from '../../Constraints/Generic';
import CustomDropdown from '../../Common/CustomDropdown';
import CustomRadio from '../../Common/CustomRadio';
import Quotestyles from './CreateQuoteStyles';

interface CreateQuoteProps { }

const CreateQuote: React.FC<CreateQuoteProps> = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showSumInsuredDropdown, setShowSumInsuredDropdown] = useState(false);
  const [showNoOfAdultsDropdown, setShowNoOfAdultsDropdown] = useState(false);
  const [showNoOfChildrenDropdown, setShowNoOfChildrenDropdown] = useState(false);

  const [dropdownValues, setDropdownValues] = useState({
    projectStatus: '',
    SumInsuredStatus: '',
    NoofAdultsStatus: '',
    NoofChildrenStatus: '',
  });

  const handleDropdownChange = (dropdownName: string, value: string) => {
    setDropdownValues((prevState) => ({
      ...prevState,
      [dropdownName]: value,
    }));
  };

  const Product = [
    { label: 'Select', value: '' },
    { label: 'Health Family Plan', value: 'Health Family Plan' },
  ];
  const SumInsured = [
    { label: 'Select', value: '' },
    { label: '15L', value: '15L' },
  ];
  const NoofAdults = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const NoofChildren = [
    { label: 'Select', value: '' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];
  const radioOptionsCoverType = [
    { value: 'Individual ', label: 'Individual ' },
    { value: 'Floater', label: 'Floater' },
  ];
  const radioOptionsPlanType = [
    { value: 'Gold ', label: 'Gold ' },
    { value: 'Platinum', label: 'Platinum' },
  ];

  return (
    <CommonLayout blueSectionText="Create Quote" ArrowSVG={ArrowSvg} goBack={goBack}>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          label="Product"
          value={dropdownValues.projectStatus}
          setValue={(value) => {
            handleDropdownChange('projectStatus', value);
            setShowSumInsuredDropdown(value !== ''); // Show SumInsured dropdown only if Product is selected
            setShowNoOfAdultsDropdown(value !== ''); // Show NoofAdults dropdown only if Product is selected
            setShowNoOfChildrenDropdown(value !== ''); // Show NoofChildren dropdown only if Product is selected
          }}
          list={Product}
          showDropDown={showProjectDropdown}
          setShowDropDown={setShowProjectDropdown}
        />
      </View>
      {dropdownValues.projectStatus && ( // Conditionally render other fields if Product is selected
        <>
          <View style={Quotestyles.radioContainerView}>
            <CustomRadio
              initialCheckedRadio="first"
              onRadioChange={(value) => console.log('Selected radio:', value)}
              text="Cover Type"
              options={radioOptionsCoverType}
            />
          </View>
          <View style={Quotestyles.radioContainerView}>
            <CustomRadio
              initialCheckedRadio="first"
              onRadioChange={(value) => console.log('Selected radio:', value)}
              text="Plan Type"
              options={radioOptionsPlanType}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <CustomDropdown
              label="Sum Insured *"
              value={dropdownValues.SumInsuredStatus}
              setValue={(value) => handleDropdownChange('SumInsuredStatus', value)}
              list={SumInsured}
              showDropDown={showSumInsuredDropdown}
              setShowDropDown={setShowSumInsuredDropdown}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <CustomDropdown
              label="No.of Adults"
              value={dropdownValues.NoofAdultsStatus}
              setValue={(value) => handleDropdownChange('NoofAdultsStatus', value)}
              list={NoofAdults}
              showDropDown={showNoOfAdultsDropdown}
              setShowDropDown={setShowNoOfAdultsDropdown}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <CustomDropdown
              label="No.of Children"
              value={dropdownValues.NoofChildrenStatus}
              setValue={(value) => handleDropdownChange('NoofChildrenStatus', value)}
              list={NoofChildren}
              showDropDown={showNoOfChildrenDropdown}
              setShowDropDown={setShowNoOfChildrenDropdown}
            />
          </View>
        </>
      )}
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: windowWidth - 50,
    marginLeft: 25,
    marginTop: 20,
  },
});

export default CreateQuote;
