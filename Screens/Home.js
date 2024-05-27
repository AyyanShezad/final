import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { withNavigation } from "@react-navigation/native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleCart = this.handleCart.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
  }

  handleCategories() {
    this.props.navigation.navigate("special");
  }

  handleMenu() {
    this.props.navigation.navigate("Menu");
  }

  handleCart() {
    this.props.navigation.navigate("cart");
  }

  handleAbout() {
    this.props.navigation.navigate("AboutUs");
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
        <View style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40, overflow: 'hidden' }}>
          <ImageBackground
            source={require("../Images/Background.jpg")}
            resizeMode="cover"
            style={{ width: wp('100%'), height: hp('26%') }}
          >
            <Text style={{ marginTop: 14, marginRight: 1, fontStyle: 'italic', color: 'white', fontSize: 20, textAlign: 'right' }}>
              Rise and grind,
            </Text>
            <Text style={{ marginRight: 1, fontStyle: 'italic', color: 'white', fontSize: 20, textAlign: 'right' }}>
              it's coffee time!
            </Text>
          </ImageBackground>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, borderWidth: 0, flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden', marginTop: 4 }}>
            <TouchableOpacity onPress={this.handleCategories}>
              <View style={{ borderWidth: 0, padding: 1, borderRadius: 40, backgroundColor: 'gray', marginLeft: 4 }}>
                <Image style={{ width: wp('45%'), height: hp('28%'), resizeMode: 'cover', borderRadius: 40 }} source={require('../Images/1.jpg')} />
                <Text style={{ marginLeft: 3, fontSize: 16, color: 'white', marginTop: 1 }}>Our Speciality</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleMenu}>
              <View style={{ borderWidth: 0, padding: 1, borderRadius: 40, backgroundColor: 'gray', marginRight: 4 }}>
                <Image style={{ width: wp('45%'), height: hp('28%'), resizeMode: 'cover', borderRadius: 40 }} source={require('../Images/Menu.jpg')} />
                <Text style={{ marginLeft: 3, fontSize: 16, color: 'white', marginTop: 1 }}>Menu</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden' }}>
            <TouchableOpacity onPress={this.handleCart}>
              <View style={{ borderWidth: 0, padding: 1, borderRadius: 40, backgroundColor: 'gray', marginLeft: 4 }}>
                <Image style={{ width: wp('45%'), height: hp('28%'), resizeMode: 'cover', borderRadius: 40 }} source={require('../Images/deals.jpg')} />
                <Text style={{ marginLeft: 3, fontSize: 16, color: 'white', marginTop: 1 }}>Cart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleAbout}>
              <View style={{ borderWidth: 0, padding: 1, borderRadius: 40, backgroundColor: 'gray', marginRight: 4 }}>
                <Image style={{ width: wp('45%'), height: hp('28%'), resizeMode: 'cover', borderRadius: 40 }} source={require('../Images/cafe1.jpg')} />
                <Text style={{ marginLeft: 3, fontSize: 16, color: 'white', marginTop: 1 }}>About</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(HomeScreen);
