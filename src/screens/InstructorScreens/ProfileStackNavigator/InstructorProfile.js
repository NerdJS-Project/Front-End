import { useIsFocused } from "@react-navigation/native";
import React, { useState, useContext, useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import APIConnection from "../../../utility/APIConnection";

export default function InstructorProfile({}) {
  //----------Copy This-----------
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);

  const apiConnection = new APIConnection();
  useLayoutEffect(() => {
    //your code here
    if (isFocused) {
      apiConnection.getUserForProfilePage().then((json) => {
        setData(json);
      });
    }
  }, [isFocused]);

  //-----------Copy This-----------

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar
            rounded
            size={100}
            source={{
              uri: "https://www.seekpng.com/png/detail/17-175297_jouissance-the-king-s-avatar-zhou-zekai-discord.png",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {data.user_name}
            </Text>
            <Text style={styles.caption}>              {data.user_email}
</Text>
            <Text
              style={[
                styles.caption,
                {
                  marginTop: 5,
                },
              ]}
            >
              Instructor
            </Text>
          </View>
        </View>

        <View style={styles.userAbout}>
          <Text style={styles.title}>About</Text>
          <Text style={{ marginTop: 10 }}>
            Assistant Professor at California State University, Sacramento.
          </Text>
        </View>
        <View style={styles.userClass}>
          <Text style={styles.title}>Classes</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },

  userAbout: {
    marginTop: 15,
  },

  userClass: {
    marginTop: 15,
  },
});
