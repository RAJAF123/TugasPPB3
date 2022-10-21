import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

const Detail=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
            color="red"
            title="Go to Profiles"
            onPress={() => navigation.push('Profiles')}/>
            <Button 
            color="black"
            title="Go to Home" 
            onPress={() => navigation.navigate('Home')} />
  
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
            color="green"
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}/>
      </View>
    );
};

export default Detail;