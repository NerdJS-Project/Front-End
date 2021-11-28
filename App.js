import * as React from "react";
import { View, Text,Alert, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard} from "react-native";



export default function App() {
  return (

    <View >
        
        <View style={top.blueHeader}>
            <View style={top.logoPlaceholder}border-style='dotted'>
            <Text style={styles.logo}>Logo</Text>  
            </View> 
        </View >

          <TextInput multiline={true} placeholder="Email"/>
          <TextInput multiline={true} placeholder="SignUp"/>


          <View style ={signUpButton.signUpBtn}>
            <Button style={signUpButton.signUpBtn} 
              title ="SignUp"
              color ="red"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => Alert.alert('Left button pressed')}/>
          </View>

          <View style ={loginButton.loginBtn}>
            <Button style={loginButton.loginBtn} 
            color = "blue"/>
            <Text style ={loginButton.title}>Login</Text>
          </View>

      </View>
  );
}

const top = StyleSheet.create({
blueHeader: {
  alignSelf:'flex-start', 
  paddingTop:70, 
  paddingBottom: 70, 
  marginRight:50,
  justifyContent:'center', 
  alignItems:'center', 
  width: '100%',
  backgroundColor:'#4970FA',
},

logoPlaceholder: {
  alighItems: 'center',
  justifyContent: 'center', 
  width:'15%',
  height: '215%',
  backgroundColor: 'white',

}
});

const signUpButton = StyleSheet.create({
  signUpBtn:{
      //backgroundColor: 'black',,
      width: 200,
      marginTop: 20,
      marginLeft: 550,
      //backgroundColor: "green",
      padding: 5,
      borderRadius: 90,
    }
});

const loginButton = StyleSheet.create({
  loginBtn:{
    width: 200,
    marginTop: 100,
    marginLeft: 550,
    padding: 6,
    borderRadius: 90,
    //borderWidth: 1,
    backgroundColor: "blue",
    fontSize: 30,
    
  },
  title: {
  
    fontSize: 16,
    //lineHeight: 21,
    //fontWeight: 'bold',
    //letterSpacing: 0.25,
    color: "black",
  },
});

const styles = StyleSheet.create({
  logo:{
    height:50,
    justifyContent:'center',
    textAlign: 'center',
    alignItems:'center',
    fontSize: 30,
    color: 'black'
  }
});


