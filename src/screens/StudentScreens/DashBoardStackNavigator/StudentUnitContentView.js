import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  TextInput,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import ReactPlayer from "react-player";
import YoutubePlayer from "react-native-youtube-iframe";
import Content from "../../../component/CreateComponent";
import APIConnection from "../../../utility/APIConnection";

export default function StudentUnitContentView({ navigation, route }) {
  const { unitID, unitName } = route.params;

  const [playing, setPlaying] = useState(false);

  const [videoContent, setVideoContent] = useState("");
  const [unitText, setUnitText] = useState("");

  const [data, setData] = useState([]);

  const apiConnection = new APIConnection();
  const isFocused = useIsFocused();

  useEffect(() => {
    //your code here
    if (isFocused) {
      apiConnection.getUnitContent(unitID).then((json) => {
        setData(json);
        let newVideoData = json.unit_content;
        setVideoContent(newVideoData);
        setUnitText(json.unit_content_type);
      });
    }
  }, [isFocused]);

  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  function isValidUrl(_string) {
    const matchpattern =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return matchpattern.test(_string);
  }

  //turns valid link into component
  function textInput(contentString) {
    //if this is just a text
    if (!isValidUrl(contentString)) {
      return (
        <View>
          <Text>{"There is no video for this unit"}</Text>
        </View>
      );
    }

    var linkInput = JSON.stringify(contentString);

    if (Platform.OS === "web") {
      return (
        <div style={{ marginTop: 10 }}>
          <ReactPlayer
            url={linkInput}
            height={200}
            width={400}
            controls={true}
          />
        </div>
      );
    } else if (Platform.OS == "ios" || Platform.OS === "android") {
      return (
        <YoutubePlayer
          height={270}
          width={400}
          play={playing}
          videoId={YouTubeGetID(linkInput)}
          webViewStyle={{ bottom: -40 }}
          //videoId={"iee2TATGMyI"}
          //https://youtu.be/cBxyB788_5w
        />
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {textInput(videoContent)}
{
    unitText == null ? null : <Card>
    <Card.Content>
      <Paragraph>{ unitText }</Paragraph>
    </Card.Content>
  </Card>
}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //  flex:1,
    // alignItems:'stretch',

    //margin:5,
    //borderWidth:1,
    borderColor: "#C0C0C0",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
  textStyle: {
    //  flex:1,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
    marginBottom: 10,
  },
  textHolder: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    minWidth: Dimensions.get("window").width - 20,
    //paddingBottom:100,
    //maxHeight: 800,

    //minWidth:Dimensions.get('window').width-15,
  },
});
