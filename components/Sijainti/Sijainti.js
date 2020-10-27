import React from 'react';
import { View, Text, Button } from 'react-native';

function Sijainti({ history }) {
    return (
        <View>
            <Text>Sijainti sivu</Text>
            <Button title="change page" onPress={() => history.push('/')} />
        </View>
    );
}

export default Sijainti;