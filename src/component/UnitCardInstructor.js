import * as React from 'react-native';
import {
    Text, StyleSheet,
    View, TouchableOpacity, SafeAreaView,
    FlatList, TextInput, ScrollView
} from 'react-native';

import { Card, Title, Paragraph, Button } from 'react-native-paper';

const UnitEditCard = ({unitName, onPress, onDelete, unitID}) => (

    <View
    style={styles.cardContainer}
    >
  <Card

  onPress={() => onPress(unitID, unitName)}>
    <Card.Content  >
  {/* <Title>{unitName}</Title> */}
      <View style={{width:110}}>
      <Text  numberOfLines={3} style={{fontWeight:'bold', fontSize:15}}>{unitName}</Text>
      </View>
    </Card.Content>
    <Card.Actions>
      <Button
      onPress={() => onDelete(unitID)}>Delete</Button>
    </Card.Actions>
  </Card>
    </View>

);

export default UnitEditCard;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
       // flex: 1

    },
})