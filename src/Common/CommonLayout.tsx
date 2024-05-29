// CommonLayout.tsx
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, windowWidth} from '../Constraints/Generic';
import {Searchbar} from 'react-native-paper';
import ArrowSvg from '../assets/SVG/ArrowSvg';
import SearchSvg from '../assets/SVG/SearchSvg';
import NotificationSvg from '../assets/SVG/NotificationSvg';

interface CommonLayoutProps {
  children: React.ReactNode;
  blueSectionStyle?: ViewStyle;
  whiteSectionStyle?: ViewStyle;
  blueSectionText?: string;
  ArrowSVG?: React.ComponentType<{onPress?: () => void}>;
  goBack?: () => void;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({
  children,
  blueSectionStyle,
  whiteSectionStyle,
  blueSectionText,
  ArrowSVG,
  goBack,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const blueSectionTextStyle = {
    ...styles.blueSectionText,
    marginTop: blueSectionText === 'Manage Quote' ? 50 : 0.5,
  };
  const notificationStyle = blueSectionText === 'Manage Quote' ? {top: 40} : {};

  return (
    <View style={styles.container}>
      <View style={[styles.blueSection, blueSectionStyle]}>
        <View style={styles.blueSectionContent}>
          
          <TouchableOpacity onPress={goBack} style={styles.arrowIcon}>
            {ArrowSVG && <ArrowSVG onPress={goBack} />}
          </TouchableOpacity>

          {blueSectionText && (
            <Text style={blueSectionTextStyle}>{blueSectionText}</Text>
            
          )}
        {blueSectionText && (
          <View style= {[styles.notificationIcon, notificationStyle]}>
          <NotificationSvg/>
          </View>
        )}
         
        </View>

        {blueSectionText === 'Manage Quote' && (
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Quote ID, Plan Name, Customer Name, Mobile"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.searchbar}
              inputStyle={styles.searchInput}
            />
          </View>
        )}
      </View>
      <View style={[styles.whiteSection, whiteSectionStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.onPrimary,
  },
  blueSection: {
    flex: 0.2,
    backgroundColor: COLORS.onPrimary,
    justifyContent: 'center',
    paddingHorizontal: 16,
    zIndex: 1,
  },
  blueSectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  arrowIcon: {
    marginRight: 16,
  },
  blueSectionText: {
    color: COLORS.AppColor,
    fontSize: 18,
    flex: 1,
    marginTop: 50,
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 5,
    marginTop: 50,
  },
  searchbar: {
    flex: 1,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: COLORS.AppColor,
    borderWidth: 1,
    borderColor: COLORS.onTertiary,
    borderRightWidth: 0,
    
  },
  searchInput: {
    fontSize: 13,
    
  },
  notificationIcon:{
    position:"absolute",
    marginLeft:"88%",
   
  },

  whiteSection: {
    flex: 1,
    backgroundColor: COLORS.AppColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
});

export default CommonLayout;
