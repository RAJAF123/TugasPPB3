import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

const Profile=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button
            title="Go to Detail"
            onPress={() => navigation.push('Details')}/>
            <Button
            color="black"
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}/>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
            color="green"
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}/>
    </View>
    );
};

export default Profile;