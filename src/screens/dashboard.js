import React from 'react';
import {View,Text, StyleSheet, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function Dash () {
   
    return(
      

                <View style={{flex:2,alignItems:'stretch'}}>
                    <SafeAreaView>
                    
                        <View style={styles.header} >
                            {/*<View style={styles.menu}>
                            </View> */}
                            <Text style={{color:'white'}} >
                            <FontAwesome5 style={styles.menu} name={'bars'} color={'white'}/>
                            Dashboard
                            <FontAwesome5 style={styles.searchIcon} name={'search'} color={'white'} />
                            </Text>
                        </View>

                        
                
            
            </SafeAreaView>             
                </View>
            
       

    );

}

const styles = StyleSheet.create({
    menu:{
       // alignItems:'flex-start',
        padding : '10px',
        alignSelf: 'flex-start',
        justifyContent: 'center'
    } , 
    header:{
        backgroundColor: '#3385ff',
        alignItems:'center'
      },
    footer:{
        backgroundColor:'#3385ff',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    searchIcon:{
        
       alignSelf: 'flex-end'
    }
});

export default Dash;