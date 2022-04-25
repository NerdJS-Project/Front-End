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
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';


import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import Content from "../../../component/CreateComponent";
import APIConnection from "../../../utility/APIConnection";


export default function StudentUnitContentView({ navigation, route }) {

    const {unitID, unitName} = route.params;

    const [playing, setPlaying] = useState(false);

    const [unitContent, setUnitContent] = useState("");


    const [data, setData] = useState([]);

    const apiConnection = new APIConnection();
    const isFocused = useIsFocused();




    useEffect(() => {
        //your code here
        if (isFocused) {
            apiConnection.getUnitContent(unitID).then((json) => {
                setData(json);
                let newVideoData = json.unit_content;
                setUnitContent(newVideoData);
            })


        }

    }, [isFocused]);

    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
      }

    //turns valid link into component
    function textInput(videolink) {

        var linkInput = JSON.stringify(videolink);

        if (Platform.OS === 'web') {

            return <div style={{ marginTop: 10 }}>
                <ReactPlayer
                    url={linkInput}
                    height={200}
                    width={400}
                    controls={true} />
            </div>


        } else if (Platform.OS == 'ios' || Platform.OS === 'android') {

            return <YoutubePlayer
                height={270}
                width={400}
                play={playing}
                videoId={YouTubeGetID(linkInput)}
                webViewStyle={{ bottom: -40 }}
            //videoId={"iee2TATGMyI"}
            //https://youtu.be/cBxyB788_5w

            />
        }
    }

    return (
        <View>
                {
                    textInput(unitContent)
                }

        </View>
    )



}