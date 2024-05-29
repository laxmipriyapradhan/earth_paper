import React from 'react';
import { View, Text } from 'react-native';
import styles from './CustomQuotationStyles'; // Import styles specific to this component
import UserProfileSvg from '../assets/SVG/UserProfileSvg';
import ShareSvg from '../assets/SVG/ShareSvg';
import CreateproposalSvg from '../assets/SVG/CreateproposalSvg';
import CloneSvg from '../assets/SVG/CloneSvg';
import MoreSvg from '../assets/SVG/MoreSvg';

type Props = {
    headerText?: string;
    quotaionNo?: string;
    children?: React.ReactNode;
};

const data = [
    { key: 'Product', value: 'Smart Health Pro' },
    { key: 'Sum Insured', value: '₹ 15 Lakhs' },
    { key: 'Last Updated', value: '02 May, 2024' }
];

const CustomQuotation: React.FC<Props> = ({ headerText, children, quotaionNo }) => {
    return (
        <View style={styles.QuoteStatusContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.userprofileContainer}>
                    <UserProfileSvg />
                    <Text style={styles.textstyle}>{headerText}</Text>
                    <View style={styles.statuschip}>
                        <Text style={styles.statusText}>Pending</Text>
                    </View>
                </View>
            </View>
            <View style={styles.quotationConatiner}>
                <Text style={styles.quotationLabel}>Quotation No</Text>
                <Text style={styles.quotationtext}>{quotaionNo}</Text>
            </View>
            <View style={styles.underline} />
            {/* //render the data here// */}
            <View style={styles.dataContainer}>
                {data.map((item, index) => (
                    <View key={index} style={[styles.dataCell, index !== data.length - 1 && styles.borderRight]}>
                        <Text style={styles.dataKey}>{item.key}</Text>
                        <Text style={styles.dataValue}>{item.value}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.svgContainer}>
                <ShareSvg />
                <CreateproposalSvg/>
                <CloneSvg/>
                <MoreSvg/>
                {/* Add more SVG components here if needed */}
            </View>
        </View>
    );
};

export default CustomQuotation;
