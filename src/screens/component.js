import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

export default class menuComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            viewSection:false
        }
    }


renderComponent(){
    if(this.state.viewSection){
        return(
            <View style={{color:'gray'}}>
                <Text style={{color:'red' }}>Hello World</Text>
            </View>
        )
    }
}

buttonPress=()=>{
    this.setState({viewSection:true})
}

render(){
    return(
        <View>
            <TouchableOpacity onPress={this.buttonPress}>
                <Text> Click Me!</Text>

            </TouchableOpacity>
            {this.renderComponent()}
        </View>
    );
}

}