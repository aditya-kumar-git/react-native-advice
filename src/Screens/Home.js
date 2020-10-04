import React from "react"
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native"

import { connect } from "react-redux"
import { randomAdvice } from "../Redux/Action"
import { AntDesign } from "@expo/vector-icons"

class Home extends React.Component {
  render() {
    var { navigation } = this.props

    return (
      <View
        style={{
          backgroundColor: "#254C50",
          minHeight: "100%",
        }}
      >
        <SafeAreaView>
          <StatusBar barStyle={"light-content"} />
          <View
            style={{
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 15,
              }}
            >
              {this.props.randomAdviceRed}
            </Text>
          </View>
          <View style={{ height: "30%" }}>
            {/* //!Get motivated */}

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#DF6533",
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                  borderRadius: 4,
                  shadowColor: "black",
                  shadowOpacity: 0.5,
                  shadowRadius: 1,
                  shadowOffset: { width: 3, height: 3 },
                }}
                activeOpacity={0.6}
                onPress={() => {
                  this.props.randomAdvice()
                }}
              >
                <Text style={{ color: "white" }}>Get Motivated</Text>
              </TouchableOpacity>
            </View>

            {/* //!Get motivated */}

            {/* //@SEARCH ICON */}

            <View
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 50,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: "50%",
                  shadowColor: "black",
                  shadowOpacity: 0.5,
                  shadowRadius: 1,
                  shadowOffset: { width: 3, height: 3 },
                }}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("SecondPage")
                }}
              >
                <AntDesign name="search1" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* //@SEARCH ICON */}
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { randomAdvice })(Home)
