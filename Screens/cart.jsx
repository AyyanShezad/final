import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { app } from "../firbase";
import { onValue, getDatabase, ref, remove } from "firebase/database";

export default function Cart() {
  const [mycart, setMyCart] = useState([]);
  
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "cart");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMyCart(Object.keys(data).map(key => ({ key, ...data[key] })));
      } else {
        setMyCart([]);
      }
    });
  }, []);

  const handleDelete = (itemKey) => {
    const db = getDatabase(app);
    const itemRef = ref(db, `cart/${itemKey}`);
    remove(itemRef)
      .then(() => {
        console.log('Item removed successfully!');
        // Optionally update local state to reflect removal
        setMyCart(prevCart => prevCart.filter(item => item.key !== itemKey));
      })
      .catch((error) => {
        console.error('Error removing item  :', error);
      });
  };

  const handleTotal = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "cart");
    remove(dbRef);
  };

  const setTotalperItem = (quant, price) => quant * price;

  const totalprice = mycart.reduce((total, item) => total + (item.quant * item.price), 0);

  return (
    <View style={{ flex: 1, width: '100%', margin: 0, backgroundColor: 'black', marginTop: 4 }}>
      <FlatList
        data={mycart}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#4B5563', flexDirection: 'row', borderRadius: 25, padding: 0, marginTop: 2, justifyContent: 'space-around' }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginRight: 2 }}>
              <Image
                source={{ uri: item.img }}
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 25,
                  resizeMode: "cover",
                }} 
              />
            </View>
            <View style={{ flex: 1, padding: 0, marginLeft: 1, marginTop: 1 }}>
              <View style={{ flexDirection: 'row', marginTop: 1, justifyContent: 'space-around', width: 'max-content' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Title : </Text>
                <Text style={{ fontSize: 16, color: 'white', textAlign: 'left' }}>
                  {item.title}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 2, spaceBetween: 8 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Items :</Text>
                <Text style={{ fontSize: 16, color: 'white', textAlign: 'left' }}>
                  {item.quant}
                </Text>
              </View>
              <View
                style={{ height: 1, backgroundColor: "white", width: '100%', marginTop: 2 }}
              />
              <View style={{ flexDirection: 'row', marginTop: 5, spaceBetween: 8 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Price :</Text>
                <Text style={{ fontSize: 16, color: 'white', textAlign: 'left' }}>
                  {setTotalperItem(item.quant, item.price)}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginLeft: 10 }}>
              <TouchableOpacity
                style={{ marginTop: 12, marginRight: 7 }}
                onPress={() => handleDelete(item.key)}
              >
                <Ionicons name="trash-outline" size={20} color="rgb(255,70,70)" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', backgroundColor: '#374151', borderRadius: 25, width: '100%', height: 48, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white', marginLeft: 2 }}>Total</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>RS. {totalprice}</Text>
        <TouchableOpacity onPress={handleTotal} style={{ backgroundColor: '#10B981', width: 96, borderRadius: 25, justifyContent: 'center', alignItems: 'center', height: 40 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Click to Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


