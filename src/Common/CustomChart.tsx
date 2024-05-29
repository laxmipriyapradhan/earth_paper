import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const CustomChart = () => {
  const stackData = [
    {
      stacks: [{value: 10, color: '#204CD1', label: '₹'}],
      label: '> 30days',
    },
    {
      stacks: [{value: 10, color: '#9BCFFE', label: '₹'}],
      label: '> 15days',
    },
    {
      stacks: [{value: 14, color: '#D0DEF8', label: '₹'}],
      label: '> 7days',
    },
  ];
  return (
    <View>
      <BarChart
        isAnimated
        // width={340}
        rotateLabel
        spacing={15}
        noOfSections={4}
        stackData={stackData}
        showValuesAsTopLabel
        horizontal
        stackBorderRadius={5}
        // stackData={stackData}
        width={Dimensions.get('window').width * 0.7}
        
        
        barInnerComponent={(item: any, index) => {
          return (
            <View
              style={{
                height: '100%',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: `${
                      item?.stacks[0].color == '#D0DEF8' ? 'black' : 'white'
                    }`,
                    textAlign: 'center',
                    transform: [{rotate: '-90deg'}],
                    // marginRight: 10,
                    marginTop: 10,
                  }}>
                  {`${item?.stacks[0]?.label}${item?.stacks[0]?.value}`}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomChart;
