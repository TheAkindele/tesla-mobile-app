import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, View, Scroll } from 'react-native';
import CarItem from "./components/carFolder/CarItem"
import {carArr} from "./carsData"

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={carArr}
        renderItem={({item}) => <CarItem carDetails={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});
