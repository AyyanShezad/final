import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
export default function Deals() {
  const navigation = useNavigation();
  const handleBack=()=>{
    navigation.goBack();
  }
  return (
    <View className="flex flex-1 justify-center w-full m-0 bg-black">
      <View
        className="block border-0  rounded-b-3xl overflow-hidden mt-2"
        style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{ width: 385, height: 200 }}
          source={require("../Images/Menu2.jpg")}
        >
          <TouchableOpacity className='mt-3' onPress={handleBack}>
          <Ionicons style={{marginLeft:5,marginTop:3}} name="arrow-back-circle-sharp" size={40} color="white" />
          </TouchableOpacity>
          <Text className='mt-11 ml-3 italic   text-white text-xl '>Find your best</Text>
          <Text className=' ml-3 italic   text-white text-xl '>Coffee here.</Text>
        </ImageBackground>
      </View>
      <View
        className="flex-1  w-full   border-2 rounded-t-3xl  mt-3"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      ></View>
    </View>
  );
}
