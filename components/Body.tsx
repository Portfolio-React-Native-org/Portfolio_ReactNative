import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Body() {
  return (
    <View style={styles.body_container}>
      <View style={styles.blackboarder}>
        <Text style={styles.bodyheader}>A Bit About Me</Text>
        <Text style={styles.body_text}>
          I am an enthusiastic software developer with a strong dedication to
          continuous learning and a passion for exploring cutting-edge
          technologies. Currently, I am actively pursuing a degree program in
          Electronics and Information Technology, further enriching my knowledge
          and honing my skill-set. I thrive in collaborative environments and
          have successfully contributed to small and medium-sized teams,
          comprising diverse members from various countries. I excel at quickly
          grasping new concepts and staying abreast of the latest trends and
          advancements in my field. I am highly responsive and believe that
          effective communication is vital to achieving success when
          collaborating with teams. While I strive for excellence, I embrace
          mistakes as opportunities for growth and actively learn from them to
          prevent future repetition.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body_container: {
    borderWidth: 1,
    borderColor: 'red',
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
