import React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ history }) {
    return (
        <View>
            <Text>Home page</Text>
            <Button title="change page" onPress={() => history.push("/sijainti")} />
        </View>
    );

}

export default Home;