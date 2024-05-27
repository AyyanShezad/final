import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("login");
  };

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-black">
      <ImageBackground
        source={require("../Images/landing.jpg")}
        resizeMode="cover"
        className="flex-1 w-full h-screen justify-center items-center"
      >
        <View className="absolute bottom-20 text-center">
          <Text className="font-bold text-2xl text-white mb-2">
            Welcome to UN Coffee Shop
          </Text>
          <Text className="text-sm text-white mb-4 text-center">
            Order Your Coffee from the best in town
          </Text>
        </View>

        <View className="absolute bottom-5 text-center">
          <TouchableOpacity
            onPress={handleButtonPress}
            className="bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red"
            style={{ width: 120, height: 60 }}
          >
            <Text className="color-white font-style:italic text-base font-bold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
