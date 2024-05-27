import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleButtonPress = () => {
    navigation.replace("login");
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered successfully:", user.email);
      Alert.alert("Success", "User registered successfully!");
      navigation.replace("Home");
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-1 relative items-center justify-center w-max   m-0 p-0">
      <ImageBackground
        source={require("../Images/2.jpg")}
        resizeMode="cover"
        className="flex-1 relative w-full justify-center"
      >
        <View className="flex-1 relative justify-center items-center   ">
          <View className="my-5 p-5 space-y-4 mt-12 justify-center items-center ">
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              className="w-72 h-11 border-2  border-slate-500 rounded-xl  bg-gray-400 opacity-80   py-2 pl-9 pr-3 placeholder:text-base   text-black "
              placeholder="Email"
            />
            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              className="w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400  opacity-80 py-2 pl-9 pr-3 placeholder:text-base  text-black"
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            className=" h-12 w-24  rounded-full justify-center items-center bg-violet-900"
          >
            <Text className=" text-base   text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
