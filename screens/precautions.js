import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Header } from "react-native-elements";

export default class Precaution extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../CovidPrecaution.jpg")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <View>
            <Header
              centerComponent={{ text: "Precautions", style: { fontSize: 25 } }}
            ></Header>
            <Text style={styles.text}>
            1:  Regularly and thoroughly clean your hands with an alcohol-based
              hand rub or wash them with soap and water. This eliminates germs
              including viruses that may be on your hands.
            </Text>
            <Text style={styles.text}>
            2:   Avoid touching your eyes, nose and mouth. Hands touch many
              surfaces and can pick up viruses. Once contaminated, hands can
              transfer the virus to your eyes, nose or mouth. From there, the
              virus can enter your body and infect you.
            </Text>
            <Text style={styles.text}>
            3:  Cover your mouth and nose with your bent elbow or tissue when you
              cough or sneeze. Then dispose of the used tissue immediately into
              a closed bin and wash your hands. By following good ‘respiratory
              hygiene’, you protect the people around you from viruses, which
              cause colds, flu and COVID-19.
            </Text>
            <Text style={styles.text}>
            4:  Clean and disinfect surfaces frequently especially those which are
              regularly touched, such as door handles, faucets and phone
              screens.
            </Text>
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
  text:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10,
    fontFamily:"Times New Roman"
  }
});
