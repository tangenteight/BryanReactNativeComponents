import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {

    render() {
        const { buttonStyle, textStyle } = styles;
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#007aea',
        marginLeft: 5,
        marginRight: 5,
        padding: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export { Button };
