import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class CardSection extends Component {

    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                { this.props.children }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
  });

export { CardSection };
