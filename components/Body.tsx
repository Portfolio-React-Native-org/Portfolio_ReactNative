import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import descriptiondata from './Description_data';

export default function Body() {
  return (
    <View style={styles.body_container}>
      <View style={styles.blackboarder}>
        <Text style={styles.bodyheader}>A Bit About Me</Text>
        <Text style={styles.body_text}>{descriptiondata.about_me}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body_container: {
    height: 750,
    justifyContent: 'center',
  },
  blackboarder: {
    borderWidth: 5,
    borderRadius: 10,
    color: 'black',
    height: 500,
    width: 800,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  body_text: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    lineHeight: 50,
  },
  bodyheader: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30,
  },
});
