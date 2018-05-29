import React, { Component } from 'react';
import { Text } from 'react-native'

class Messages extends Component {
    render() {
        return (
            <Text> 
                {this.props.message}
            </Text>
        );
    }
}

export default Messages;