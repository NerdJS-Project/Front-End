

import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const {width} = Dimensions.get('window')
const ovalWidth = width*1.5;

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.halfCircle}></View>
          <Text style={styles.logo}>NERDJS</Text>
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#404040",
    marginBottom:40,
    paddingBottom: 100,
    paddingTop: 50
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffaa00",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#3385ff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  },
  halfCircle:{
    position: 'absolute',
    width: ovalWidth,
    height: ovalWidth,
    borderRadius: ovalWidth / 2,
    backgroundColor: '#3385ff',
    top: -ovalWidth / 2,
    
  }
});

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
  alignItems: 'center',
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

const styles2 = StyleSheet.create({
  logo:{
    height:50,
    justifyContent:'center',
    textAlign: 'center',
    alignItems:'center',
    fontSize: 30,
    color: 'black'
  }
});



