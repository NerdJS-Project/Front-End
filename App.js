import * as React from "react";
import { View, Text,Alert, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";



export default function App() {
  return (
    
    <View style = {styles.container}>
      <View style = {top.blueWave}>

      
  

      <View style={top.logoShape}>
      <Text style={styles.title}> Brain Breeze </Text>
      </View>


      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={login.email} >  

        <TextInput style={login.emailHolder}placeholder={'Email'}/>
        <TextInput style={login.pwHolder}placeholder={'Password'}/>    
        
        <TouchableOpacity>
          <View style={login.loginBttn}>
            <Text style ={login.loginText}>Login</Text>
          </View> 
        </TouchableOpacity>

      </KeyboardAvoidingView>




      <View style= {signup.divider}>
      <Text style ={signup.divider}>-or-</Text>
        </View>

        <TouchableOpacity style ={signup.container}>
          <View style={signup.firstSgnUpBttn}>
            <Text style ={signup.signupText}>Sign Up</Text>
          </View> 
        </TouchableOpacity>


        <TouchableOpacity>
          <View style= {forgotPsswrd.forgotText}>
        <Text style ={forgotPsswrd.forgotText}>Forgot password?</Text>
        </View>


        </TouchableOpacity>


        

      

      




      

      

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
    color: '#4970FA'
    


  },




});

const top = StyleSheet.create({


  blueWave: {

    alignSelf: 'stretch',
    
    flex: 1,
    backgroundColor: '#4970FA',
    borderBottomEndRadius: 200,
    borderBottomStartRadius:200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
    marginBottom: 300
    
  },


  logoShape: {
    position: 'relative',
    //paddingHorizontal:100,
    //borderRadius:40,
    

    justifyContent: 'center',
    //alignContent:'center',
    backgroundColor:'#E8EAED',
    width: 110,
    height:110,
    borderRadius: 15//'15%'

}


});

const login= StyleSheet.create({
  email: {
    position: 'absolute',
    bottom: 140,
    //width: '100%'
    width: 100,
    //flexDirection: 'row'
    alignItems: 'center'

  },

  emailHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 60,
    width: 250


  },

  pwHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    bottom:25,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    marginTop: 10,
    width: 250
    
    

  },

  loginBttn: {
    width:250,
    position: "relative",
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
    alignItems:'center'

  },

  loginText: {
    color: 'white',
    //fontSize: 22,
    fontWeight: "bold",

  }


  
});

const signup= StyleSheet.create({
  container: {
    bottom: 40
  },
  divider: {
    bottom: 25,
    fontWeight: "bold",
    color:'#6B6B6B',
    position: "relative",


  },

  firstSgnUpBttn: {
   width:250,

   position: "relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#4970FA',
    //marginTOP:0,

    
  
    //textAlign: 'center',
    color: 'white',
    //color: 'white',
    alignItems:'center'

  },
  signupText: {
    color: 'white',
    fontWeight: "bold",

  }

});

const forgotPsswrd= StyleSheet.create({


  forgotText: {
    position: "relative",
    color: '#6B6B6B',
    fontWeight: "bold",

    bottom:10,
    textDecorationLine: 'underline',
   

  }

})









