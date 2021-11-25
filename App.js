import * as React from "react";
import { View, Text, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard} from "react-native";

const Dissmiss= ({children})=>(
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  return (
  <Dissmiss>
    <View
    style={{
      marginBottom: 30,
      justifyContent: "center",
      alignItems: "center",
        }}
      >
        <View style={{ alignSelf:'flex-start', paddingTop:70, paddingBottom: 70, marginRight:50,justifyContent:'center', alignItems:'center', width: '100%',backgroundColor:'#4970FA'}}>

            <View style={{alighItems: 'center',justifyContent: 'center', width:'20%', backgroundColor:'white' }} border-style='dotted'>
              <Text style={styles.logo}>Logo</Text>
            </View> 
            
        </View >

          <TextInput multiline={true} placeholder="Email"/>
          <TextInput multiline={true} placeholder="SignUp"/>
      
          <Button  style={s.btn} title="Login"/>
          <Button  style={s.btn} title ="SignUp"/>
      
        
      </View>

  </Dissmiss>


  );
}

const s = StyleSheet.create({
    btn:{
      padding: 40,
      borderRadius:80,
    }
});

const styles = StyleSheet.create({
  logo:{
    height:50,
    justifyContent:'center',
    textAlign: 'center',
    alignItems:'center',
    fontSize: 20,
    color: 'black'
  }
});
