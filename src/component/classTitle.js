import * as React from 'react-native';

import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

export default function classTitle(item, k){

    // <View style={{ alignItems:'center',justifyContent:'center' , borderWidth:5, borderColor:'white'}}>
   return(

       <Text k={k} style={{color:'white'}}>
            {item.Course_Title} 
    </Text>
        )         
// </View>

}
