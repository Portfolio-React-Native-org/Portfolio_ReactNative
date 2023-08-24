// HeroSection.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import devgif from "../assets/gifs/developer-activity-animate.svg"


export default function Hero(){

 
  return (
    <View style={styles.container}>
      <Image source={devgif} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Software engineer</Text>
        <Text style={styles.subtitle}>undergraduate</Text>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>clickme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  image: {
  
    width: 250,
    height: 250,
    borderRadius: 75,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    alignContent: 'center',
  },
  subtitle: {

    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
  button: {

    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
