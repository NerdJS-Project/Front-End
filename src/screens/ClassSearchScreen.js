import * as React from "react";
import { View, Text,Alert, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity,ScrollView} from "react-native";



export default function ClassSearchScreen() {
  return (
    
    
    <View style = {styles.container}>



        <TextInput style={search.searchHolder}placeholder={'Enter Class'}/>
        
 
        
        <TouchableOpacity>
          <View style={search.searchBttn}>
            <Text style ={search.searchText}>Search</Text>
          </View> 
        </TouchableOpacity>
        <Text style={styles.title}> Discover Classes </Text>

        <ScrollView>
            <View style= {styles.boxes}>
                 </View>

                 <View style= {styles.boxes}>
                 </View>

                 <View style= {styles.boxes}>
                 </View>
        </ScrollView>




    </View>





  );
}
const styles = StyleSheet.create({
  container: {
    //alignSelf: 'stretch',
    flex: 1,

    backgroundColor: '#E8EAED',
    alignItems: 'center',
    paddingTop:0

  },


  title: {
    //paddingHorizontal:11,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
  
    marginTop:50,
    marginBottom: 50
   //top: 100
  // bottom: 1000
    


  },

  boxes: {
      marginTop: 10,
      //padding: 30,
      backgroundColor: 'white',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 10,
      width:300,
      height: 200,
      //top: 10,

      

  }




});

const search= StyleSheet.create({


  searchHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:0,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    marginTop: 100,
    right: 50
    


  },

  searchBttn: {
    width:100,
    position: "absolute",
    //height: 60,
    paddingVertical: 15,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#4970FA',
    //marginTop: 10,
   //top: 10,
    //textAlign: 'center',
    color: 'white',
    //color: 'white',
    alignItems:'center',
    left: 80,
    bottom: 0,


    //bottom: 45
    

  },

  searchText: {
    color: 'white',
    //fontSize: 22,
    fontWeight: "bold",

  }


  
});
