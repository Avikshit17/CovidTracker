import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { Header } from "react-native-elements";
import { SearchBar } from "react-native-elements";
export default class India extends React.Component {
  constructor() {
    super();
    this.state = {
      indiaData: "",
      state: "",
      indiaArray: [],
      
    };
  }
  fetchIndiaData = async () => {
    var link =
      "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
    return fetch(link)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await this.setState({
          indiaData: data.regionData,
        });
      });
  };
  componentDidMount = async () => {
    var array = [];
    await this.fetchIndiaData();
    for (var i in this.state.indiaData) {
      array.push(this.state.indiaData[i]);
    }
    await this.setState({
      indiaArray: array,
    });
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.indiaArray.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.region ? item.region.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      indiaData: newData,
      state: text,
    });
  }
  render() {
    console.log(this.state.indiaData);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../indiaBack2.jpg")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <View>
            <Header
              centerComponent={{ text: "Indian Data", style: { fontSize: 25 } }}
            ></Header>
            <SearchBar
              round
              searchIcon={{ size: 25 }}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              onClear={(text) => this.SearchFilterFunction("")}
              placeholder="Search State"
              value={this.state.state}
            />
            <FlatList
              data={this.state.indiaData}
              renderItem={({ item }) => {
                return (
                  <View style={styles.subContainer}>
                    <Text style={styles.stateName}>{item.region}</Text>
                    <View>
                      <Text>Toatal Cases:{item.totalInfected}</Text>
                      <Text>Deceased:{item.deceased}</Text>
                      <Text>Total Recovered:{item.recovered}</Text>
                    </View>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",

    width: 400,
    height: 100,
    marginTop: 15,
    borderWidth: 5,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FDA172",
    justifyContent: "space-evenly",
  },
  stateName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#160D08",
  },
});
