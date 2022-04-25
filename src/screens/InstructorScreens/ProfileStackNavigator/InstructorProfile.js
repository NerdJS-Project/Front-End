import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import APIConnection from "../../../utility/APIConnection";

export default function InstructorProfile({navigation}) {

  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [classData, setClassData] = useState([]);
  const apiConnection = new APIConnection();

  useLayoutEffect(() => {
    if (isFocused) {
      apiConnection.getUserForProfilePage().then((json) => {
        setData(json);
      });
      apiConnection.getClasses().then((json) => {
        setClassData(json);
      });
    }
  }, [isFocused]);


  const shadowOverlay = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar
            rounded
            size={100}
            containerStyle={shadowOverlay}
            source={data.user_img || require('./icons/defaultAvatar.png')}
          />      
          <View style={{ marginLeft: 20 }}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5
                },
              ]}
            >
              {data.user_name || 'user_name'}
            </Text>
            <View style={{flexDirection:"row"}}>
              <Icon name="mail" size={20} style={{paddingRight:5}}/>
              <Text style={styles.caption}>{data.user_email || 'user_email'}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Icon name="user" size={20} style={{paddingRight:5}}/>
              <Text
                style={[styles.caption,{
                    marginTop: 5,
                  },
                ]}
              >
              {data.user_type || 'user_role'}
              </Text>
              </View>
          </View>
        </View>

        <View style={styles.userAbout}>
          <Text style={styles.title}>About</Text>
            <Text style={[styles.bioBox, shadowOverlay]}>
              <Text style={styles.bioText}>
                {data.user_bio || 'No information at this time.'}
              </Text>
            </Text>
        </View>
        <View style={styles.userClass}>
          <Text style={[styles.title, {textAlign:'center'}]}>Classes</Text>
          <View style={{alignItems:'flex-start'}}>

            <FlatList
              data={classData}
              numColumns={1}
              renderItem={({item}) => (
                <Text style={[styles.list, shadowOverlay]}>{item.class_name}</Text>
              )}
            />
          </View>
        </View>
      </View>
                

      <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edit Profile', {screen: 'InstructorEditProfile'})}
            style={styles.buttonContainer}
          >
            <Icon name="form" size={40} style={[shadowOverlay, {
              color:'#fff',
              paddingTop:12,
              paddingLeft:15,
              backgroundColor:'#4970FA',
              width:70,
              height:70,
              borderRadius:60
            }]}/>
          </TouchableOpacity>
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

  avatarShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },


  userAbout: {
    marginTop: 15,
  },

  userClass: {
    marginTop: 15,
  },

  bioBox: {
    marginTop: 10,
    padding:10,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.2,
  },

  bioText: {
    marginTop: 10,
  },

  list: { 
    textAlign:'center',
    marginTop: 10,
    alignItems: 'center',
    fontWeight:"bold",
    borderColor:'#000',
    borderWidth:1,
    borderRadius:5,
    padding:15,
  },

  bottom:{
    justifyContent: 'center',
    alignContent: 'center',
    flex:1,
    marginTop: 130
  },

  buttonContainer: {
    position:'absolute',
    alignItems:"center",
    justifyContent:'flex-end',
    right: 30,
    bottom:30,
    flex:1
  }

});
