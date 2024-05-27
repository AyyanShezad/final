import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { app } from "../firbase";
import { onValue, getDatabase,get, ref, update, set } from "firebase/database";

import { useNavigation } from "@react-navigation/native";


export default function Menu() {
  const navigation = useNavigation();
  const [myMenu, setMenu] = useState([]);
  const [popular, setPopular] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item
  const handleBack = () => {
    navigation.goBack();
  };
  const [mykey, setkey] = useState(0);
  const setMykey = () => {
    setkey((prevKey) => prevKey + 1);
  };
  function setData(title, price, img, key) {
    const db = getDatabase(app);
    if (mykey == 0) {
      const dbRef = ref(db, "cart");
      set(dbRef, [
        {
          key: key,
          title: title,
          price: price,
          quant: quant,
          img: img,
        },
      ]);
    } else {
      var index = "cart/" + mykey;
      const dbRef = ref(db, index);
      set(dbRef, {
        key: key,
        title: title,
        price: price,
        quant: quant,
        img: img,
      });
    }
  }
  const [quant, setQuant] = useState(1);
  const increment = () => {
    setQuant((prevQuant) => prevQuant + 1);
  };
  const decriment = () => {
    if (quant > 1) {
      setQuant((prevQuant) => prevQuant - 1);
    }
  };

  function handleSelectItem(item) {
    setSelectedItem(item);
    setQuant(1);
    
  }

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };



  useEffect(() => {
    const DB = getDatabase(app);
    const DbRef = ref(DB, "PopularCoffees");

    onValue(DbRef, (snapshot) => {
      let data_pop = snapshot.val();
      setPopular(data_pop);
    });
  }, []);
  var favkey=0;
  const FavIcon =({img,Price,title,description})=>{
    const [isFavorite,setisfavorite] = useState(false);
    const handleToggleFavorite = () => {
      setisfavorite(!isFavorite);
      const db = getDatabase(app);
      const dbRef = ref(db, 'favorites');
      get(dbRef).then((snapshot) => {
          if (snapshot.exists()) {
              // favorites data exists, proceed with setting data
              set(dbRef, [...snapshot.val(), {
                  key: favkey,
                  name: title,
                  price: Price,
                  image: img,
                  desc: description,
              }]);
          } else {
              // favorites doesn't exist, initialize with an empty array
              set(dbRef, [{
                  key: favkey,
                  name: title,
                  price: Price,
                  image: img,
                  desc: description,
              }]);
          }
          favkey = favkey + 1 ;
        }).catch((error) => {
          console.error(error);
      });
    }
  
    return(
      <TouchableOpacity onPress={handleToggleFavorite}>
      <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite? 'red':'white'}/>
    </TouchableOpacity>
    );
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
          <TouchableOpacity className="mt-3" onPress={handleBack}>
            <Ionicons
              style={{ marginLeft: 5, marginTop: 3 }}
              name="arrow-back-circle-sharp"
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <Text className="mt-11 ml-3 italic   text-white text-xl ">
            Find your best
          </Text>
          <Text className=" ml-3 italic   text-white text-xl ">
            Coffee here.
          </Text>
        </ImageBackground>
      </View>
     
      <View className="flex-1  w-full  mt-4  ">
        <Text className="text-left ml-5 text-white text-xl  ">My Favorites </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popular}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View className="bg-neutral-700 flex-1 border-0 rounded-3xl p-0  m-1 mt-2 w-44 ">
              <TouchableOpacity
                onPress={() => {
                  handleSelectItem(item);
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  resizeMode="cover"
                  style={{ width: 176, height: 190 }}
                  className="border-0 rounded-2xl  "
                ></Image>
              </TouchableOpacity>
              <View className=" flex flex-row w-full justify-around">
                <Text className=" text-base text-white text-left ">
                  {" "}
                  {item.title}
                </Text>
                
                <FavIcon img={item.img}  title={item.title} Price={item.Price} description ={item.description} />
              </View>
            </View>
          )}
        />
      </View>
      

      {/* Dialog box for selected item */}
      <Modal
        visible={!!selectedItem}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseDialog}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          className="bg-gray-600 bg-opacity-50  opacity-90 blur-2xl  bg-blend-saturation "
        >
          <View
            style={{ padding: 5, borderRadius: 15 }}
            className="bg-white w-full h-2/3 flex "
          >
            <View className="flex flex-row mb-9 p-0">
              <View>
                <Image
                  source={{ uri: selectedItem?.img }}
                  style={{
                    width: 190,
                    height: 250,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 10,
                  }}
                ></Image>
              </View>
              <View className="flex ml-3  mt-5">
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "semibold",
                    marginBottom: 10,
                  }}
                  className="text-black items-center"
                >
                  Item : {selectedItem?.title}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "semibold",
                    marginBottom: 10,
                  }}
                  className="text-black items-center"
                >
                  Price: RS. {selectedItem?.Price}
                </Text>
                <View className="justify-center items-center">
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "semibold",
                      marginBottom: 10,
                    }}
                    className="text-black items-center"
                  >
                    Quantity
                  </Text>
                  <View className="flex flex-row space-x-7 mt-5">
                    <TouchableOpacity
                      onPress={decriment}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className=" ml-1  bg-black "
                    >
                      <Text className="text-white text-lg">-</Text>
                    </TouchableOpacity>
                    <Text className="text-xl ml-2 text-black"> {quant} </Text>
                    <TouchableOpacity
                      onPress={increment}
                      style={{ width: 30, height: 30, borderRadius: 15 }}
                      className=" ml-2  bg-black justify-center items-center"
                    >
                      <Text className="text-white text-lg ">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View className="">
              <Text className="text-base ">
                Description: {selectedItem?.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <TouchableOpacity
                  onPress={handleCloseDialog}
                  style={{
                    backgroundColor: "red",
                    padding: 10,
                    borderRadius: 8,
                    width: 160,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setData(
                      selectedItem?.title,
                      selectedItem?.Price,
                      selectedItem?.img,
                      mykey
                    );
                    setMykey();
                    handleCloseDialog();
                  }}
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 8,
                    width: 160,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
