import React from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function About ()  {
    const navigation = useNavigation();
  const handleBack=()=>{
    navigation.goBack();
  }
  return (
    <ScrollView style={{ padding: wp('2%'), backgroundColor: 'black' }}>
      
      <View style={{ alignItems: 'center'}}>
        
        <ImageBackground
          source={require('../Images/cafe.jpg')}
          style={{ width: wp('100%'), height: hp('30%'), marginTop:hp('1%'), marginBottom: hp('3%') }}
          resizeMode="cover"
          
        >
        <TouchableOpacity className='mt-3' onPress={handleBack}>
          <Ionicons style={{marginLeft:5,marginTop:3}} name="arrow-back-circle-sharp" size={40} color="white" />
          </TouchableOpacity>
          </ImageBackground>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('8%'), fontWeight: 'bold', marginBottom: hp('2%') }}>
          About UN Coffee Shop
        </Text>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('4%'), textAlign: 'center', marginBottom: hp('2%') }}>
          Welcome to UN Coffee Shop, your cozy corner for the finest coffee in town.
        </Text>
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Our History
        </Text>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('4%'), textAlign: 'justify' }}>
          Founded in 2020, UN Coffee Shop was born out of a passion for high-quality coffee and a love for creating community spaces. From our humble beginnings as a small kiosk, we have grown into a beloved spot for coffee enthusiasts.
        </Text>
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Our Mission
        </Text>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('4%'), textAlign: 'justify' }}>
          At UN Coffee Shop, our mission is to provide an exceptional coffee experience while fostering a sense of community. We believe in sourcing the best beans, supporting local farmers, and delivering excellence in every cup.
        </Text>
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Our Products
        </Text>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('4%'), textAlign: 'justify' }}>
        Indulge in a delightful array of expertly crafted coffees, ranging from classic espressos to rich and creamy lattes. Each cup is meticulously prepared to ensure a memorable coffee experience.
        </Text>
        <Image
          source={require('../Images/manpour.jpg')}
          style={{ width: wp('100%'), height: hp('30%'), marginTop:hp('1%'), marginBottom: hp('3%') }}
          resizeMode="cover"
        />
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Our Values
        </Text>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('4%'), textAlign: 'justify' }}>
          Quality, community, and sustainability are at the heart of what we do. We are committed to creating a welcoming environment, supporting our local community, and minimizing our environmental impact.
        </Text>
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Testimonials
        </Text>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('4%'), textAlign: 'justify' }}>
          "Best coffee in town! The atmosphere is cozy and the staff are always friendly." - Jane D.
        </Text>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('4%'), textAlign: 'justify', marginTop: hp('1%') }}>
          "A great place to relax and enjoy a cup of coffee. Highly recommend!" - John S.
        </Text>
      </View>

      <View style={{ marginBottom: hp('3%') }}>
        <Text style={{ color:'white',fontStyle:'italic',fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('1%') }}>
          Contact Us
        </Text>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('4%'), textAlign: 'justify' }}>
          Address: 12 Coffee Street, CoffeeTown, Lahore (PK)
        </Text>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('4%'), textAlign: 'justify' }}>
          Phone: (123) 456-7890
        </Text>
        <Text style={{color:'white',fontStyle:'italic', fontSize: wp('4%'), textAlign: 'justify' }}>
          Email: contact@uncoffeeshop.com
        </Text>
      </View>
      
    </ScrollView>
  );
};

