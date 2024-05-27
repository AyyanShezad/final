import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
//import Marquee from "react-fast-marquee";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LoadingPage() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const navigation = useNavigation();
  const textOpacity = useSharedValue(0); // New state for text animation

  useEffect(() => {
    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + hp(4.5));
    }, 200);
    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + hp(5));
    }, 500);


    setTimeout(() => {
      textOpacity.value = withSpring(1); 
    }, 2000); 
  }, []);
  const handleButtonPress = () => {
    navigation.replace("login");
  };

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-black">
      {/* <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1Padding }}
        >
          <Image
            source={require("../Images/landing.jpg")}
            //className="w-full h-full "
            style={{ width: hp(25), height: hp(25), borderRadius: 100 }}
          />
        </Animated.View>
      </Animated.View> */}
      <ImageBackground
            source={require("../Images/landing.jpg")}
            resizeMode="cover"
    className="flex-1 w-full h-screen justify-center items-center"
            
            //style={{ width: hp(25), height: hp(25), borderRadius: 100 }}
          >

<View className="absolute bottom-20 text-center">
        <Text className="font-bold text-2xl text-white mb-2">
          Welcome to UN Coffee Shop
        </Text>
        <Text className="text-sm text-white mb-4 text-center">
          Order Your Coffee from the best in town
        </Text>
        </View>
        
      {/* <Marquee
      className="font-bold text-xl color-brownish-black" speed={3000}>
        <Text>Welcome to UN Coffee Shop</Text>
      </Marquee> */}
      <View className="absolute bottom-5 text-center">
      <TouchableOpacity onPress={handleButtonPress} 
          className="bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red"
          style={{width:120,height:60}}
          >
            <Text className="color-white font-style:italic text-base font-bold"
            >Get Started</Text>
          </TouchableOpacity>
          
          </View>
</ImageBackground>

    </View>
  );
}