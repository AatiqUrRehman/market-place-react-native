import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Textarea } from "native-base";
import { GREEN_COLOR } from "../../theme/colors";

export default class AddPrice extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../image/addPrice.png")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              height: 30,
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ alignSelf: "center", color: GREEN_COLOR }}>
              How Much Money Do You Have?
            </Text>
          </View>
          <View
            style={{
              height: 60,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Textarea
              rowSpan={2}
              bordered
              placeholder="0.0 L"
              style={{
                width: "50%",
                borderRadius: 10,
                backgroundColor: "white"
              }}
            />
          </View>
          <View
            style={{
              height: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 35,
                width: "30%",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderColor: GREEN_COLOR,
                borderWidth: 1
              }}
            >
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    color: GREEN_COLOR
                  }}
                >
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
