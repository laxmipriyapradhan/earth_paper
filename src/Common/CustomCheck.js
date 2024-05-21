import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { Checkbox } from "react-native-paper";
import { COLORS, SIZES, TEXTHEADING, spacingVertical, windowWidth } from '../Constraints/Generic';

const CustomCheck = ({ label, textlabel, textandLabel, additionallabel,  }) => {
    const [checked, setChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [url, setUrl] = useState(false);
    const urlTerms = `https://www.google.com/`;
    const urlPrivacy = `https://www.google.com/`;
    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
  

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                 marginBottom: spacingVertical - 10,
                justifyContent: "flex-start",
                marginLeft:30,
                marginTop: spacingVertical -10,
                
            }}
        >
            <TouchableOpacity onPress={handleCheckboxToggle}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderColor: COLORS.dotsPrimary,
                        alignItems: "center",
                        backgroundColor: isChecked ? "#FFF" : "#FFF",
                        marginRight: 10,
                    }}
                >
                    {isChecked && <Text style={{ color: "green" }}>✓</Text>}
                </View>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    marginTop:40,
                    

                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        
                        color: COLORS.secondary
                    }}
                >
                    {/* {TEXTHEADING.textTerms} */}
                    {label}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        setUrl(urlTerms)
                        Linking.openURL('https://www.google.com/');
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            
                            color: COLORS.primary,
                            marginLeft: 5,
                            textDecorationLine: 'underline',
                        }}
                    >
                       {textlabel}
                    </Text>
                    <Text style={{fontSize: 16,
                    color:COLORS.secondary,
                    bottom:22,
                    marginHorizontal:140
                            }}>{textandLabel}</Text>
                    <Text
                        style={{
                            fontSize: 16,
                           
                            color: COLORS.primary,
                            bottom:22,
                            marginLeft:-150,
                            textDecorationLine: 'underline',
                        }}
                    >
                        {additionallabel}
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

export default CustomCheck;
