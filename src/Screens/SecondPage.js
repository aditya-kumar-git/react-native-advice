import React from "react"
import {
  FlatList,
  ListViewComponent,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { connect } from "react-redux"
import { textChangeAction, searchAdvice } from "../Redux/Action"

class SecondPage extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#254C50",
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          {/* //@BACK BUTTON */}
          <View
            style={{
              marginTop: 20,
              marginLeft: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
                padding: 8,
                borderRadius: "50%",
              }}
              activeOpacity={0.6}
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <AntDesign name="caretleft" size={20} color="black" />
            </TouchableOpacity>
          </View>

          {/* //@BACK BUTTON */}

          {/* //#SEARCH BAR */}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 30,
            }}
          >
            <TextInput
              keyboardType="web-search"
              onSubmitEditing={(x) => {
                this.props.searchAdvice(x.nativeEvent.text)
              }}
              placeholder="Search for a specific keyword"
              value={this.props.inputValue}
              onChangeText={(x) => {
                this.props.textChangeAction(x)
              }}
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 6,
                height: 30,
                paddingHorizontal: 5,
              }}
            />
          </View>

          {/* //#SEARCH BAR */}

          <View
            style={{
              flex: 1,
            }}
          >
            <FlatList
              data={this.props.searchAdviceRed}
              keyExtractor={(x, y) => {
                return "KEY-" + y
              }}
              renderItem={(ele) => {
                return (
                  <Text
                    style={{
                      width: "80%",
                      alignSelf: "center",
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: 15,
                      marginVertical: 20,
                    }}
                    key={ele.index}
                  >
                    {ele.item.advice}
                  </Text>
                )
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { textChangeAction, searchAdvice })(
  SecondPage
)
