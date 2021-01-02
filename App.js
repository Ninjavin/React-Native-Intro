import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState("");
  return (
    <View style = {{ padding: 50 }}>
      <View style = {{ flexDirection: 'row', alignItems: 'stretch' }}>
        <TextInput
          placeholder="Add a goal"
          style={{ borderBottomColor: 'blue', borderWidth: 1, padding: 10 }}
          onChangeText={(goal) => setGoal(goal)} />
        <Button
          title="+" onPress={console.log("Pressed")} />
      </View>
      <View />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
  
// });
