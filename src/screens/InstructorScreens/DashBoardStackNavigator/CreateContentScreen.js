import React, { Children, useState, useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View, Pressable, Modal, Text, ScrollView, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';
import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import Content from '../../../component/CreateComponent';










//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ5OTAwNzczLCJleHAiOjE2NDk5ODcxNzN9.O0Gv4EoiOBSEqf8iBLOgq0DbiIGQrHd9qQvyJyH7IkM

export default function CreateContent({navigation, route}) {

  const {unitID, unitName} = route.params;




  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [isLoading, setLoading] = useState(true);
  const [text, setText] = useState();
  const [textItems, setTextItems] = useState();
  const [data, setData] = useState([]);

  const video = React.useRef(null);


  const [playing, setPlaying] = useState(false);




  const [modalVisible, setModalVisible] = useState(false);


  const [link, setLink] = useState();
  const [linkItems, setLinkItems] = useState([]);







  const getContent = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/unit/findByLesson/25', {
        headers: {
          'accept': 'application/json'
        }
      });
      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error(error);
      authCtx.logout


    } finally {
      setLoading(false);
    }


  }

  useEffect(() => {
    getContent();
  }, []);
  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }
  const handleLinks = () => {
    //setLink(null)
    setLinkItems([...linkItems, textInput()]);
    setLink(null);



  }
  function textInput() {
    // var test = link;
    //setLinkItems([...linkItems,link])
    var linkInput = JSON.stringify(link);


    //setLinkItems([...linkItems,link])

    if (Platform.OS === 'web') {

      return <div>
        <ReactPlayer
          url={linkInput}
          height={200}
          width={400}

          controls={true} />
      </div>


    } else {

      return <YoutubePlayer
        height={270}
        width={400}
        play={playing}
        videoId={YouTubeGetID(linkInput)}
      //videoId={"iee2TATGMyI"}
      //https://youtu.be/cBxyB788_5w

      />
    }




  }

  //https://www.youtube.com/watch?v=cBxyB788_5w
  //https://www.youtube.com/watch?v=JfVOs4VSpmA
  //https://www.youtube.com/watch?v=jrLhP5sK2wI




  return (

    <View style={styles.container}>
      <Text style={styles.title}>Section</Text>



      <View style={styles.content}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalView.centeredView}>
            <View style={modalView.modalView}>
              <Text style={modalView.modalText}>Enter a Youtube Link</Text>

              <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput style={modalView.textInput} placeholder={'Enter URL'} value={link} onChangeText={newText => setLink(newText)} />
              </KeyboardAvoidingView>

              <TouchableOpacity
                style={[modalView.button, modalView.buttonClose]}
                onPress={() => { handleLinks(); setModalVisible(!modalVisible); }}
              >
                <Text style={modalView.textStyle}>Save Video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <ScrollView contentContainerStyle={styles.scroll}>
          {

            linkItems.map((linkItems, index) => {


              return <Content key={index} text={linkItems} />

            })
          }

        </ScrollView>






      </View>






      <View style={styles.bottomContainer}>
        <Text style={{ alignSelf: 'center', marginBottom: 95, fontWeight: "bold", }}>Add Content:</Text>


        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={addClass.addURL} >
            <Text style={addClass.textStyle}>Add Video</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={addClass.addText} >
            <Text style={addClass.textStyle}>Add Text</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={addClass.addQuiz} >
            <Text style={addClass.textStyle}>Add Quiz</Text>
          </View>
        </TouchableOpacity>

      </View>





    </View>







  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',


  },

  scroll: {
    //flex:1,
    alignItems: 'center',


  },

  content: {
    flex: 2,
    alignSelf: 'center',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },


  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',

    shadowColor: "black",
    backgroundColor: '#E8EAED',



    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: .99,
    shadowColor: '#E8EAED',
    elevation: 1,


  },




  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    marginTop: 50,
    marginBottom: 50

  },

  boxes: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 200,
    textAlign: "center",
    alignItems: "center"

  },

  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },




});

const modalView = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",

  },
  textInput: {
    height: 30,
    width: 200,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    marginBottom: 10,
    //paddingVertical: 15,
    paddingHorizontal: 15,

  }

});

const addClass = StyleSheet.create({

  addText: {
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    paddingBottom: 5,
    position: "absolute",
    //height: 60,

    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    //right: 20,
    bottom: 40

  },
  addURL: {
    alignSelf: 'flex-start',

    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    paddingBottom: 5,
    position: "absolute",
    //height: 60,

    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    //right: 20,
    bottom: 40

  },

  addQuiz: {
    alignSelf: 'flex-end',

    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    paddingBottom: 5,
    position: "absolute",
    //height: 60,

    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    //right: 20,
    bottom: 40

  },

  searchHolder: {



    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    //bottom:100,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,

    //justifyContent:'space-between'
    marginTop: 25,


    //right: 0,





  },

  textStyle: {

    color: 'white',
    fontSize: 20,
    fontWeight: "bold",

  }
}

);




//class id 58b0a1f3-acd6-4893-afe4-10ef88ab161f
//user id 5
//mod id 5

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ4ODcyNzc4LCJleHAiOjE2NDg5NTkxNzh9.O2VDmIrA5ZmvrebfYhlQbWyhzPmGlF7OTpgkRzJSfvA