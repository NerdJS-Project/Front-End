import React, { Children,useState,useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View,Pressable,Modal,Text,ScrollView, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';

import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import Content from '../../../component/CreateComponent';
import TextContent from '../../../component/CreateText';









//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ5OTAwNzczLCJleHAiOjE2NDk5ODcxNzN9.O0Gv4EoiOBSEqf8iBLOgq0DbiIGQrHd9qQvyJyH7IkM

export default function CreateContent() {
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const [isLoading, setLoading] = useState(true);
    const [text,setText] = useState();
    const [textItems, setTextItems] =useState([]);
    const [data, setData] = useState([]);

    const video = React.useRef(null);


    const [playing, setPlaying] = useState(false);

  
  
    //Youtube URL 
    const [modalVisible1, setModalVisible1] = useState(false);
    //bottom modal pop
    const [modalVisible2, setModalVisible2] = useState(false);

    const [modalVisible3, setModalVisible3] = useState(false);

    


    const [link, setLink] = useState();
    const [linkItems, setLinkItems] = useState([]);








  
    function YouTubeGetID(url){
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
   }
  const handleLinks = () => {
    //setLink(null)
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if (link == null || !JSON.stringify(link).match(urlRegex)) {
      Alert.alert("Wrong Input","Must enter a Youtube URL");
      setLink(null);
      
      return null;
    }
    setLinkItems([...linkItems, textInput()]);
    setLink(null);

  }

  const handleText = () => {
    //setLink(null)
    if (text == null) {
      Alert.alert("Wrong Input","Must enter text");
      setText(null);
      return null;

    }

    setTextItems([...textItems, text]);
    setText(null);


  }
 function textInput(linkInput){

    linkInput= JSON.stringify(link);
      
      if (Platform.OS === 'web') {
      
        return <div style={{marginTop:10}}>
          <ReactPlayer
          url= {linkInput}
          height={200}
          width={400}
          
          controls={true}/>
          </div>
     
          
        } else if (Platform.OS == 'ios' || Platform.OS === 'android') {
          
          return  <YoutubePlayer
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
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
        >

            <TouchableWithoutFeedback>

        <View style={modalView.centeredView}>
          <View style={modalView.modalView}>
            <Text style={modalView.modalText}>Enter a Youtube Link</Text>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TextInput style={modalView.textInput} placeholder={'Enter URL'} value={link} onChangeText={newText => setLink(newText)}  />
            </KeyboardAvoidingView>
            
            <TouchableOpacity
              style={[modalView.button, modalView.buttonClose]}
              onPress={() => {handleLinks();setModalVisible1(!modalVisible1); }}
            >
              <Text style={modalView.textStyle}>Save Video</Text>
            </TouchableOpacity>

          </View>
        </View>
        </TouchableWithoutFeedback>

      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible3);
        }}
        >

            <TouchableWithoutFeedback>

        <View style={modalView.centeredView}>
          <View style={modalView.modalView}>
            <Text style={modalView.modalText}>Enter text</Text>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TextInput style={modalView.textInput2} multiline={true} editable={true} placeholder={'Enter text'} value={text} onChangeText={newText => setText(newText)}  />
            </KeyboardAvoidingView>
            
            <TouchableOpacity
              style={[modalView.button, modalView.buttonClose]}
              onPress={() => {handleText();setModalVisible3(!modalVisible3)} }
            >
              <Text style={modalView.textStyle}>Save Text</Text>
            </TouchableOpacity>

          </View>
        </View>
        </TouchableWithoutFeedback>
    
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <TouchableOpacity 
            activeOpacity={1} 
            onPressOut={() => {setModalVisible2(false)}}
          >
            <TouchableWithoutFeedback>
              <View style={bottomModal.centeredView}>
                <View style={bottomModal.modalView}>
                  <Text style={bottomModal.modalText}>Choose Content:</Text>
                  
                  <TouchableOpacity style={[bottomModal.button, bottomModal.buttonClose]} onPress={() => {setModalVisible1(true); setModalVisible2(!modalVisible2)}}>
                    <Text style ={addClass.textStyle}>Add Video</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={[bottomModal.button, bottomModal.buttonClose]} onPress={() => {setModalVisible3(!modalVisible3);setModalVisible2(!modalVisible2)}}>
                    <Text style ={addClass.textStyle}>Add Text</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={[bottomModal.button, bottomModal.buttonClose]} onPress={() => {setModalVisible2(!modalVisible2)}}>
                    <Text style ={addClass.textStyle}>Add Quiz</Text>
                  </TouchableOpacity>
                  
                  <Text style={bottomModal.textStyle}>Hide Modal</Text>
                  
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
    </Modal>
    
    <ScrollView contentContainerStyle={styles.scroll}>
      
      { linkItems.map((linkItems,index) => {
        
        return <Content key={index} text={linkItems}/>
              })
      }

{ textItems.map((textItems,index) => {


        
        return <TextContent key={index} TextInput={textItems} />
              })
      }

    
            
      </ScrollView>




            

        </View>



 


        <View style ={styles.bottomContainer}>
          <Text style={{alignSelf: 'center', marginBottom:95,fontWeight: "bold",}}></Text>




      <TouchableOpacity onPress={() => setModalVisible2(true)}>
        <View style={addClass.addText} >
          <Text style ={addClass.textStyle}>Add Content</Text>
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
    flex:2,
    alignSelf: 'center',
      marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },


  bottomContainer: {
    //  flex:1,
      justifyContent: 'flex-end',
    
      shadowColor: "black",
      backgroundColor: '#E8EAED',


  },

  


  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    marginTop:50,
    marginBottom: 50

  },

  boxes: {
      marginTop:10,
      backgroundColor: 'white',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 10,
      width:300,
      height: 200,
      textAlign: "center",
      alignItems: "center"

  },

  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },

  textStyle: {
    fontSize: 14,
    fontWeight: "bold",

  }




});

const bottomModal = StyleSheet.create({
  centeredView: {
    //flex: 1,

    justifyContent: "center",
    alignItems: "center",
    alignSelf:'center',
    marginTop: Dimensions.get('window').height-300,
    //marginBottom:800
  },
  modalView: {
  //  flex: 1,
   // marginBottom: 300,
    //position:'absolute',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width:Dimensions.get('window').width,
    paddingBottom:500,
   // maxHeight:Dimensions.get('window').height - 50,
   // marginBottom: 300,
   //marginTop: 500,
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
    //flex:1,
    //justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#4970FA',
    margin:10,
    padding: 10,
    elevation: 2,
    //alignSelf: 'auto'
    
    //position:'absolute',
    
    
  },
  buttonOpen: {
    //marginBottom:100,
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    width: 200,
    borderRadius: 10,
    backgroundColor: '#4970FA',
    alignItems:'center'
  },
  textStyle: {
    
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf:'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    alignSelf:'center'

  },
  textInput: {
    height: 30,
    width:200,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    marginBottom:10,
    //paddingVertical: 15,
    paddingHorizontal:15,

  }


});

const modalView = StyleSheet.create({
  centeredView: {
   // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get('window').height -600
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width:300,
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
    width:200,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    marginBottom:10,
    //paddingVertical: 15,
    paddingHorizontal:15,

  },

  textInput2: {
    height: 100,
    width:275,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:10,
    //paddingVertical: 15,
    paddingHorizontal:15,

  }

});

const addClass = StyleSheet.create({

  addText: {
  alignSelf: 'center',

  justifyContent: 'center',
  alignItems: 'center',
  width:250,
  height:50,
  paddingBottom:5,
  position: "absolute",
    //height: 60,

  borderRadius: 10,
  backgroundColor: '#4970FA',
  color: 'white',
  //right: 20,
  bottom:40

  },
  addURL: {
    alignSelf: 'flex-start',
  
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    height:50,
    paddingBottom:5,
    //position: "absolute",
      //height: 60,
  
    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    //right: 20,
    bottom:40
  
    },

    addQuiz: {
        alignSelf: 'flex-end',
      
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:50,
        paddingBottom:5,
        //position: "absolute",
          //height: 60,
      
        borderRadius: 10,
        backgroundColor: '#4970FA',
        color: 'white',
        //right: 20,
        bottom:40
      
        },

        searchHolder: {
            
            
            
            position:'relative',
            paddingVertical: 15,
            paddingHorizontal:15,
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

  },




}
        
      );


      