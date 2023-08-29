import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Pressable,
} from 'react-native';
import ButtonComponent from './ButtonComponent';
// import profilepic from "../assets/images/red_tie_day.jpeg";
import profilepicbw from '../assets/images/red_tie_day_bw.png';
import backgroundpic from '../assets/images/buildingsbackground.png';

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const onHoverIn = () => {
    setIsHovered(true);
  };
  const onHoverOut = () => {
    setIsHovered(false);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 750,
    },
    subcontainerA: {
      backgroundColor: 'white',
      flex: 1,
    },
    subcontainerB: {
      backgroundColor: '#161C58',
      justifyContent: 'center',
      flex: 1,
    },
    Btn_Container: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    profile_pic: {
      position: 'absolute',
      borderRadius: 20,
      top: 120,
      left: 950,
    },
    profile_pic_img: {
      width: 400,
      height: 500,
      borderRadius: 20,
    },
    backgroundpic: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 750,
      opacity: isHovered ? 0.5 : 1,
    },
    introtxtcontainer: {
      // borderBlockColor: "black",
      // borderBlockWidth: 1,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    introtext: {
      fontFamily: 'Ubuntu',
      fontSize: 48,
      fontWeight: 'bold',
    },
    introtextsmall: {
      fontFamily: 'Ubuntu',
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.subcontainerA}>
        <View style={styles.Btn_Container}>
          <ButtonComponent title="HOME" />
          <ButtonComponent title="ABOUT ME" />
          <ButtonComponent title="MY WORK" />
          <ButtonComponent title="GET IN TOUCH" />
        </View>
        <View style={styles.introtxtcontainer}>
          <Text style={styles.introtext}>Backend Developer</Text>
          <Text style={styles.introtextsmall}>
            revolutionized tech for requirements.
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.subcontainerB}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}>
        <View>
          <ImageBackground
            source={backgroundpic}
            style={styles.backgroundpic}></ImageBackground>
        </View>
      </Pressable>
      <Pressable style={styles.profile_pic}>
        <Image source={profilepicbw} style={styles.profile_pic_img} />
      </Pressable>
    </View>
  );
}
