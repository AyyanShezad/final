import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleButtonPress = () => {
    navigation.replace("SignUp");
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      Alert.alert("Logged in successfully");
      navigation.replace("Home");
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert("Error", error.message);
      // Handle error
    }
  };

  return (
    <View className="flex-1 relative items-center justify-center w-max   m-0 p-0 ">
      <ImageBackground
        source={require("../Images/2.jpg")}
        resizeMode="cover"
        className="flex-1 relative w-full justify-center "
      >
        <View className="flex-1 relative justify-center items-center mt-56   ">
          
          <View className="my-5 p-5 space-y-4 mt-12 justify-center items-center  ">
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Email"
              className="w-72 h-11 border-2  border-slate-500 rounded-xl  bg-gray-400 opacity-80   py-2 pl-9 pr-3 placeholder:text-base   text-black"
            />
            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              className=" w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400  opacity-80 py-2 pl-9 pr-3 placeholder:text-base  text-black "
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className=" h-12 w-24  rounded-full justify-center items-center bg-violet-900 "
          >
            <Text className=" text-base   text-white  ">
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex-1 relative flex-row   justify-center items-center  ">
            <Text className="text-base text-white overflow-hidden ">
              If you don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={handleButtonPress}
              className="w-20 h-9  justify-center items-center "
            >
              <Text className=" text-lg  text-blue-500 ">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
