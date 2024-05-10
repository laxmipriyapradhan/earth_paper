// import React from 'react';
// import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
// import AppIntroSlider from "react-native-app-intro-slider";
// import slides from '../Constraints/slides';
// import { useNavigation } from '@react-navigation/native';
// import { COLORS, SIZES } from '../Constraints/Colors';

// const Onboarding = () => {
//   const navigation = useNavigation();

//   const { width, height } = Dimensions.get('window');

//   const handleOnboardingComplete = () => {
//     // Navigate to the login screen
//     navigation.navigate('Login'); // Replace 'Login' with the name of your login screen component
//   };

//   return (
//     <View style={styles.container}>
//       <AppIntroSlider
//         data={slides}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <View style={styles.view1}>
//                 <Image
//                   source={item.image}
//                   style={styles.imageSize}
//                 />
//               </View>
//               <View style={styles.view2}>
//                 <Text style={styles.text1}>{item.title}</Text>
//                 <Text style={styles.text2}>
//                   <Text style={styles.text3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
//                 </Text>
//               </View>
//             </View>
//           );
//         }}
//         activeDotStyle={{
//           backgroundColor: "#008BC3",
//           width: 30,
//           bottom: 160,
//         }}
//         dotStyle={[{ backgroundColor: '#D9D9D9' }, styles.paginationDots]}
//         showSkipButton
//         renderSkipButton={() =>
//           <View style={[styles.genericButton, { marginHorizontal: 16, }]}>
//             <Text style={styles.skipButtonText}>Skip</Text>
//           </View>
//         }
//         renderDoneButton={() =>
//           <View style={[styles.genericButton, {  marginHorizontal: 19,}]}>
//             <Text style={styles.doneButtonText}>Done</Text>
//           </View>
//         }
//         onDone={handleOnboardingComplete}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//     justifyContent: 'center',
//   },
//   view1: {
//     alignItems: "center",
//     padding: 30,
//     justifyContent: 'center',
//     paddingTop: 20,
//     marginBottom: 50
//   },
//   view2: {
//     alignItems: "center",
//     padding: 30,
//     justifyContent: 'center',

//     marginTop: -170
//   },
//   text1: {
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: COLORS.secondary,
//     fontSize: SIZES.h1,
//   },
//   text2: {
//     textAlign: "center",
//     color: COLORS.secondary,
//     fontWeight: "600",
//   },
//   text3: {
//     fontWeight: "bold",
//     color: "#5F6B7B",
//     fontSize: 18,
//   },
//   paginationDots: {
//     bottom: 160,
//   },
//   imageSize: {
//     top: -100
//   },

//   skipButtonText: {
//     color: "#FFF",
//     fontSize: SIZES.h4,
//     fontWeight: "bold",
//     textAlign: "center",
//   },

//   genericButton: {

//     backgroundColor: "#123CB4",
//     alignSelf: "center",
//     width: 347,
//     borderRadius: 4,
//     paddingVertical: 10,
//     paddingHorizontal: 20,

//     marginVertical: -10,
//   },
//   doneButtonText: {
//     color: "#FFF",
//     fontSize: SIZES.h4,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default Onboarding;
import {View, Text} from 'react-native';
import React from 'react';

const Onboardingx = () => {
  return (
    <View>
      <Text>Onboardingx</Text>
    </View>
  );
};

export default Onboardingx;
