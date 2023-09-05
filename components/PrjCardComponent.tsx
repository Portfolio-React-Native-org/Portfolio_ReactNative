import React from 'react';
import {View, Text, Pressable, StyleSheet, Image, Linking} from 'react-native';
import githubsvg from '../assets/icons/github.svg';

export default function cardcomponent(props: any) {
  const pressed = () => {
    Linking.openURL(props.link);
  };

  const techarray = props.tech;
  const techlist = techarray.map((tech: any) => {
    return (
      <Text style={{fontFamily: 'Ubuntu', paddingLeft: 30, paddingRight: 30,fontStyle:"italic",fontSize:16}}>
        {tech}
      </Text>
    );
  });

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      borderWidth: 5,
      borderRadius: 20,
      borderColor: '#73779B',
      height: 650,
      width: 450,
    },
    projectopic: {
      fontFamily: 'Ubuntu',
      fontSize: 24,
      textAlign: 'center',
    },
    cardtext: {
      fontFamily: 'Ubuntu',
      fontSize: 16,
      textAlign: 'justify',
      paddingLeft: 30,
      paddingRight: 30,
    },
    gifstyle: {
      width: 300,
      height: 300,
      alignSelf: 'center',
    },
    githubstyle: {
      width: 40,
      height: 40,
    },
    gitcontainer: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    techtxtstyles: {
      fontFamily: 'Ubuntu',
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 30,
      paddingRight: 30,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.projectopic}>{props.title}</Text>
      <Text style={styles.cardtext}>{props.txt}</Text>
      <Image source={props.gif} style={styles.gifstyle} />
      <Text style={styles.techtxtstyles}>Technologies used:</Text>
      {techlist}
      <Pressable onPress={pressed} style={styles.gitcontainer}>
        <Image source={githubsvg} style={styles.githubstyle} />
      </Pressable>
    </View>
  );
}
