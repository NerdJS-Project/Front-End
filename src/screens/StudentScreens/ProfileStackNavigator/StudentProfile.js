import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { Avatar } from "react-native-elements";
import { FAB} from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/AntDesign';
import APIConnection from "../../../utility/APIConnection";

export default function StudentProfile({navigation}) {

  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [classData, setClassData] = useState([]);
  const apiConnection = new APIConnection();


  const mounted = useRef(false);

  useEffect(() => {
      mounted.current = true;
      


      return () => {
          mounted.current = false;
          
      };
  }, []);

  /*useLayoutEffect(() => {
    if (isFocused) {
      apiConnection.getUserForProfilePage().then((json) => {
        setData(json);
      });
      apiConnection.getClasses().then((json) => {
        setClassData(json);
      });
    }
  }, [isFocused]);*/

  const [loading, setLoading] = useState(false);
    useEffect(() => {

   if (isFocused) {  
        apiConnection.getUserForProfilePage().then((json) => {
          setData(json);
          
        });
        apiConnection.getClasses().then((json) => {
          setClassData(json);
        
          
        });
      }

      
    }, [isFocused])


  const shadowOverlay = {

  }


  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar
            rounded
            size={100}
            containerStyle={shadowOverlay}
            source={data.user_pp || require('../../UserProfile/icons/defaultAvatar.png')}
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
              {'Student'}
              </Text>
              </View>
          </View>
        </View>

        <View style={styles.userAbout}>
          <Text style={styles.title}>About</Text>
            <Text style={[styles.bioBox]}>
              <Text style={styles.bioText}>
                {data.user_bio || 'No information at this time.'}
              </Text>
            </Text>
        </View>
        <Text style={[styles.title, {textAlign:'center'}]}>Classes</Text>
      </View>

      <FlatList
            keyExtractor={(item) => item.class_name}

              data={classData}
              numColumns={1}
              renderItem={({item}) => (
                <Text style={[styles.list]}>{item.class_name}</Text>
              )}
            />


      <FAB
        style={styles.fab}
        icon="file-document-edit-outline"
        onPress={() => navigation.navigate('Edit Profile', {screen: 'InstructorEditProfile'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",
    flex: 1,
  },

  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 50
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
    alignSelf:'center'
  },

  bioBox: {
    marginTop: 10,
    padding:10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor:'#fff'
  },

  bioText: {
    marginTop: 10,
  },

  list: { 
    textAlign:'center',
    marginTop: 10,
    alignItems: 'center',
    fontWeight:"bold",
    borderRadius:5,
    padding:15,
    borderWidth:.5,
    backgroundColor: "white",
    width:200,
    marginRight:10,
    marginLeft:15
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0, 
    bottom: 0,
    backgroundColor:'#4970FA'
  }


});
