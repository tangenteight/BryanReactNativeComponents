import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make the component
class Header extends Component {
    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        color: '#fff'
    },
    viewStyle: {
        height: 50,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
  });
  

export { Header };
