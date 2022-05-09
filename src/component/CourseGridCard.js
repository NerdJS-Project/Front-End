import { Pressable, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

function CourseGridCard({ title, color, onPress, onDelete, courseID }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
          
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: 'white' }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
      <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onDelete(courseID)}
        >
         <Icon name="delete" size={30} color="#e33057" />
        </TouchableOpacity>
    </View>
  );
}

export default CourseGridCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonPressed: {
    opacity: 0.5,
    
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});
