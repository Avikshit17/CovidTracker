import * as React from "react";
import { StyleSheet, Text, View, FlatList, Image,ImageBackground } from "react-native";

export default class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: "",
    };
  }
  fetchCountriesData = async () => {
    console.log("city" + this.state.city);
    var link = "https://api.covid19api.com/summary";
    return fetch(link)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await this.setState({
          countries: data.Countries,
        });
      });
  };
  componentDidMount = () => {
    this.fetchCountriesData();
  };
  render() {
    console.log(this.state.countries);
    return (
     
      <View style={styles.container}>
        <ImageBackground source={require("../covidBack.jpg")} style={{flex:1,resizeMode:"cover"}}>
         <View>
        <FlatList
          data={this.state.countries}
          renderItem={({ item }) => {
            var code =
              "https://www.countryflags.io/" +
              item.CountryCode +
              "/flat/64.png";
            return (
              <View style={styles.subContainer}>
                <Image
                  source={{ uri: code }}
                  style={{ width: 50, height: 50 }}
                ></Image>
                <Text style={styles.text}>{item.Country}</Text>
                <View>
                  <Text>New Confirmed:{item.NewConfirmed}</Text>
                  <Text>New Death:{item.NewDeaths}</Text>
                  <Text>New RecoveredL{item.NewRecovered}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    flexDirection: "row",
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
