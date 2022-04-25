import React, { useState, useContext } from 'react';

import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { RadioButton } from 'react-native-paper';


export default function InstructorHome({}) {

    const [checked, setChecked] = React.useState('first');

return (
    <View>
    <RadioButton
      value="first"
      status={ checked === 'first' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('first')}
    />
    <RadioButton
      value="second"
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('second')}
    />
  </View>
)



}