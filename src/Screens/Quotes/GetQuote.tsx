import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, FlatList, TouchableOpacity } from 'react-native';
import { Checkbox, Chip, RadioButton, Modal, Portal, Text, PaperProvider } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, windowWidth } from '../../Constraints/Generic';
import CustomButton from '../../Common/CustomButton';
import styles from './GetQuoteStyles';
import ChipsSVG from '../../assets/Svg_Image/ChipsSVG';
import CustomTextInput from '../../Common/CustomTextInput';
import Closesvg from '../../assets/Svg_Image/close';
import CloseModal from '../../assets/Svg_Image/closeModal';
import CommonLayout from '../../Common/CommonLayout';
import ArrowSvg from '../../assets/SVG/ArrowSvg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../Quote/config';

type GetQuoteProps = StackScreenProps<RootStackParamList, 'GetQuote'>;

interface ChipData {
  label: string;
  icon: string;
}

interface ContentItem {
  key: string;
  value: string;
  highlight?: boolean;
}

interface ContentSection {
  title?: string;
  items: ContentItem[];
}

interface CheckedStates {
  whatsapp: boolean;
  email: boolean;
  sms: boolean;
}

const GetQuote: React.FC<GetQuoteProps> = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [innerModalVisible, setInnerModalVisible] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [checkedStates, setCheckedStates] = useState<CheckedStates>({
    whatsapp: false,
    email: false,
    sms: false,
  });
  const [checkedRadio, setCheckedRadio] = useState('first');

  const handleCheckboxPress = (name: keyof CheckedStates) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const goBack = () => {
    navigation.goBack();
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: COLORS.AppColor, padding: 20, flex: 4 / 3, marginTop: 220, borderTopLeftRadius: 15, borderTopRightRadius: 15 };

  const buttons: string[] = ['₹14,265\n3 years', '₹13,212\n2 years', '₹12,100\n1 year'];

  const chipsData: ChipData[] = [
    { label: 'Chip 1', icon: 'umbrella' },
    { label: 'Chip 2', icon: 'umbrella' },
    { label: 'Chip 3', icon: 'umbrella' },
    { label: 'Chip 4', icon: 'umbrella' },
    { label: 'Chip 5', icon: 'umbrella' },
  ];

  const content: ContentSection[] = [
    {
      title: 'Estimated breakup for 3 year',
      items: [
        { key: 'Sum Insured', value: '₹15 Lakh' },
        { key: 'Premium', value: '₹29,885.32' }
      ]
    },
    {
      title: 'Extra feature',
      items: [
        { key: 'Cumulative bonus booster', value: '₹1,664.00' },
        { key: 'Coverage of Non-medical items', value: '₹2,496.00' }
      ]
    },
    {
      items: [
        { key: 'TAX', value: '₹6,739.00', highlight: true },
        { key: 'Total Premium', value: '₹44,179.00', highlight: true }
      ]
    }
  ];

  const contentArray: ContentSection[][] = [
    content,
    content,
    content
  ];

  return (
    <CommonLayout   blueSectionText="Create Quote" ArrowSVG={ArrowSvg}  goBack={goBack}  >
      <View style={styles.sectionChips}>
        <View style={styles.iconContainer}>
          <ChipsSVG />
        </View>
        <FlatList
          data={chipsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Chip icon={({ size, color }) => (
              <Feather name={item.icon} size={size} />
            )} style={styles.chip}>{item.label}</Chip>
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      <View style={styles.buttonGroupWrapper}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.buttonContainer,
              index === selectedIndex && styles.selectedButtonContainer,
              index !== 0 && { marginLeft: -20 }, // Adjust the overlap amount as needed
            ]}
            onPress={() => setSelectedIndex(index)}
          >
            <Text style={[styles.buttonText, index === selectedIndex && styles.selectedButtonText]}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionText}>You save ₹7,661.00</Text>
        </View>
        {contentArray[selectedIndex].map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.cardSection}>
            {section.title && (
              <Text style={[styles.cardText, { fontWeight: 'bold' }]}>{section.title}</Text>
            )}
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.itemContainer}>
                <Text style={[styles.itemKey, item.highlight && { color: COLORS.primary }]}>{item.key}</Text>
                <Text style={[styles.itemValue, item.highlight && { color: COLORS.TextPrimaryValues }]}>{item.value}</Text>
              </View>
            ))}
            {sectionIndex !== contentArray[selectedIndex].length - 1 && (
              <View style={styles.solidLine} />
            )}
          </View>
        ))}
      </View>

      <View style={styles.btnConatiner}>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <ScrollView>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.ModalText}>
                    <Text>Save Quote</Text>
                    <TouchableOpacity onPress={hideModal}>
                      <Closesvg />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.textConatiner}>Basic details</Text>

                  <View style={styles.inputContainer}>
                    <CustomTextInput label="Name" />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomTextInput label="Email ID" />
                  </View>

                  <View style={styles.inputContainer}>
                    <CustomTextInput
                      textprefix={"+91"}
                      label={"Mobile No"}
                      placeholder='00000 00000'
                    />
                  </View>
                  <Text style={styles.textConatiner}>Share Via</Text>
                  <View style={styles.shareContainer}>
                    <View style={styles.row}>
                      <Checkbox
                        status={checkedStates.whatsapp ? 'checked' : 'unchecked'}
                        onPress={() => handleCheckboxPress('whatsapp')}
                      />
                      <Text style={styles.textContainer}>Whatsapp</Text>
                    </View>

                    <View style={styles.row}>
                      <Checkbox
                        status={checkedStates.email ? 'checked' : 'unchecked'}
                        onPress={() => handleCheckboxPress('email')}
                      />
                      <Text style={styles.textContainer}>Email</Text>
                    </View>

                    <View style={styles.row}>
                      <Checkbox
                        status={checkedStates.sms ? 'checked' : 'unchecked'}
                        onPress={() => handleCheckboxPress('sms')}
                      />
                      <Text style={styles.textContainer}>SMS</Text>
                    </View>
                  </View>
                  <Text style={styles.textConatiner}>Fill Proposal</Text>
                  <View style={styles.shareContainer}>
                    <View style={styles.radioContainer}>
                      <RadioButton
                        value="first"
                        status={checkedRadio === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedRadio('first')}
                      />
                      <Text>Self</Text>
                    </View>
                    <View style={styles.radioContainer}>
                      <RadioButton
                        value="second"
                        status={checkedRadio === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedRadio('second')}
                      />
                      <Text>Agent Assisted</Text>
                    </View>
                  </View>
                  <View style={styles.btnModalConatiner}>
                    <CustomButton
                      widthDecrement={260}
                      bgColor={COLORS.AppColor}
                      borderBtnColor={COLORS.onPrimary}
                      borderbtnWidth={1}
                      text={"Cancel"}
                      btnTextColor={COLORS.onPrimary}
                      onBtnPress={hideModal}
                    />
                    <View style={styles.btnModalview}>
                      <CustomButton widthDecrement={210} text={"Save and Share"} onBtnPress={() => setInnerModalVisible(true)} />
                      <Portal>
                        <Modal visible={innerModalVisible} contentContainerStyle={styles.ContentContainerModal}>
                          <View style={styles.ContentContainerView} />
                          <View style={styles.ContentChildView}>
                            <Text style={{ color: "white" }}>Quote Created Successfully</Text>
                            <TouchableOpacity onPress={() => setInnerModalVisible(false)}>
                              <CloseModal />
                            </TouchableOpacity>
                          </View>
                        </Modal>
                      </Portal>
                    </View>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </Modal>
        </Portal>
        <CustomButton widthDecrement={260} bgColor={COLORS.AppColor}
          borderBtnColor={COLORS.onPrimary} borderbtnWidth={1} text={"Save Quote"} btnTextColor={COLORS.onPrimary}
          onBtnPress={showModal} />
        <View style={styles.btnchild}>
          <CustomButton widthDecrement={210} text={"Continue with Proposal"} />
        </View>
      </View>
    </CommonLayout>
  );
};

export default GetQuote;
