import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {Header} from 'react-native-elements'
export default class Global extends React.Component {
  constructor() {
    super();
    this.state = {
      global: "",
    };
  }
  fetchGlobalData = async () => {
    console.log("city" + this.state.city);
    var link = "https://api.covid19api.com/summary";
    return fetch(link)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await this.setState({
          global: data.Global,
        });
      });
  };
  componentDidMount = () => {
    this.fetchGlobalData();
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../countriesBack.jpg')} style={{flex:1,resizeMode:"cover"}}>
          <Header centerComponent={{text:"Global Data",style:{fontWeight:"bold",color:"red",fontSize:25}}}></Header>
          <View>
            <View style={[styles.view, { backgroundColor: "green" }]}>
              <Text>New Recovered:{this.state.global.NewRecovered}</Text>
              <Text>Total Recovered:{this.state.global.TotalRecovered}</Text>
            </View>
            <View style={[styles.view, { backgroundColor: "yellow" }]}>
              <Text>New Confirmed;{this.state.global.NewConfirmed}</Text>
              <Text>Total Confirmed:{this.state.global.TotalConfirmed}</Text>
            </View>
            <View style={[styles.view, { backgroundColor: "red" }]}>
              <Text>New Deaths:{this.state.global.NewDeaths}</Text>
              <Text>Total Deaths:{this.state.global.TotalDeaths}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    borderWidth: 5,
    width: 240,
    height: 120,
    borderRadius: 30,
    marginLeft: 100,
    margin: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
