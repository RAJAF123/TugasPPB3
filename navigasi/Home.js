import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

const Home=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}/>

        <Button
          color="red"
          title="Go to Profile"
        onPress={() => navigation.navigate('Profiles')}/>
    </View>
    );
};

export default Home;