import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.text}
                    style={styles.inputStyle}
                    onChangeText={this.props.onChangeText}
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle:{
        height:40,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle:{
        flex: 1,
        color: '#212121',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height:50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };