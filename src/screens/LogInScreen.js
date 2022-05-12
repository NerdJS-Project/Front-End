import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import Authentication from "../utility/Authentication";
import { AuthContext } from "../store/AuthContext";
const API_URL =
  Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";
//const API_URL =  'http://localhost:3001/api/user';
import { useSpring, animated } from "react-spring";
import { color, renderNode } from "react-native-elements/dist/helpers";
import { colors } from "react-native-elements";

const AnimatedView = animated(View);

export default function LogInScreen({ navigation }) {
  //TODO: Add proper set state on text input in order to recieve and update as user types their info
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSecureEntry, setSecureEntry] = useState(true);

  const authCtx = useContext(AuthContext);

  const [flip, set] = useState(false);
  const logoAnim = useSpring({
    to: { 
    //backgroundColor: "#94c9ff",
    width: 120,
    height: 120,
    borderRadius: 16,
   // borderWidth: 4,
    //borderColor: "#c7f1ff"
  },
    from: {
      backgroundColor: "#E8EAED",
      width: 110,
      height: 110,
      borderRadius: 15,
     // borderWidth: 0,
     // borderColor: colors.white


    }, 
    reset: true,
    reverse: flip,
    delay: 3000,
    //config: config.molasses,
    onRest: () => set(!flip),
  });


  const onSubmitHandler = () => {
    console.log("email and pass: ", user_email, user_password);
    const api = new Authentication();
    if (user_email == "" || user_password == "") {
      alert("Please enter email or password");
    } else {
      api.signIn(user_email, user_password).then(() => {
        AsyncStorage.getItem("@user_info")
          .then((data) => {
            const user = JSON.parse(data);
            console.log("Log in user id debug" + user);
            console.log("log in user token" + user.token);
            console.log("log in user id" + user.user_id);
            const userID = JSON.stringify(user.user_id);
            if (user && user.token) {
              //alert("Authorized!");

              authCtx.authenticate(user.token, user.user_id, user.user_type);
            } else {
              alert("Not Authorized!");
              AsyncStorage.clear();
            }
          })
          .catch((reason) => {
            console.log(reason);
          });
      });
    }
  };

  // const renderAnimatedLogo = () => {
  //   return (

  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={top.blueWave}>
        <AnimatedView
          style={{
            width: 80,
            height: 80,
           // backgroundColor: "#46e891",

            ...logoAnim,
          }}
        >
          <Text style={styles.title}>Brain Breeze</Text>
        </AnimatedView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={login.email}
      >
        <TextInput
          style={login.input}
          label={"Email"}
          mode={"outlined"}
          left={<TextInput.Icon name="email" />}
          onChangeText={setEmail}
        />

        <TextInput
          secureTextEntry={true}
          style={login.input}
          label={"Password"}
          mode={"outlined"}
          left={<TextInput.Icon name="lock" />}
          onChangeText={setPassword}
        />
        <Text>{message ? message : null}</Text>

        {/*Emmanuel gave property onPress to TouchableOpacity tag*/}
        <TouchableOpacity onPress={onSubmitHandler}>
          <View style={login.loginBttn}>
            <Text style={login.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={signup.divider}>
        <Text style={signup.divider}>Don't have an account?</Text>
      </View>

      <TouchableOpacity
        style={signup.container}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View style={signup.firstSgnUpBttn}>
          <Text style={signup.signupText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //alignSelf: 'stretch',
    flex: 1,

    backgroundColor: "#E8EAED",
    alignItems: "center",
   // paddingTop: 0,
  },

  title: {
    //paddingHorizontal:11,
    alignSelf:"center",

    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA",
    marginTop:15,
   // top:15
  },
});

const top = StyleSheet.create({
  blueWave: {
    alignSelf: "stretch",

    flex: 1,
    backgroundColor: "#4970FA",
    borderBottomEndRadius: 200,
    borderBottomStartRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 300,
  },

  logoShape: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#E8EAED",
    width: 110,
    height: 110,
    borderRadius: 15, //'15%',
  },
});

const login = StyleSheet.create({
  email: {
    position: "absolute",
    bottom: 140,
    //width: '100%'
    width: 100,
    //flexDirection: 'row'
    alignItems: "center",
  },

  input: {
    position: "relative",
    backgroundColor: "white",
    bottom: 30,
    width: 250,
  },

  pwHolder: {
    position: "relative",
    paddingVertical: 15,
    paddingHorizontal: 15,
    bottom: 25,
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
    marginTop: 10,
    width: 250,
  },

  loginBttn: {
    width: 250,
    position: "relative",
    //height: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: "#4970FA",
    //marginTop: 10,
    //top: 10,
    //textAlign: 'center',
    color: "white",
    //color: 'white',
    alignItems: "center",
  },

  loginText: {
    color: "white",
    //fontSize: 22,
    fontWeight: "bold",
  },
});

const signup = StyleSheet.create({
  container: {
    bottom: 40,
  },
  divider: {
    bottom: 25,
    fontWeight: "bold",
    color: "#6B6B6B",
    position: "relative",
  },

  firstSgnUpBttn: {
    width: 250,

    position: "relative",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: "#4970FA",
    //marginTOP:0,

    //textAlign: 'center',
    color: "white",
    //color: 'white',
    alignItems: "center",
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
  },
});

const forgotPsswrd = StyleSheet.create({
  forgotText: {
    position: "relative",
    color: "#6B6B6B",
    fontWeight: "bold",

    bottom: 10,
    textDecorationLine: "underline",
  },
});
