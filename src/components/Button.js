import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = (props) = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
})

export default (props) => {
    const stylesButton = [styles.button];
    
    if (props.width) stylesButton.push({ width: (Dimensions.get('window').width / 4) * props.width });
    if (props.operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
             <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}